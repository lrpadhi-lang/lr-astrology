const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/Irpadhi-lang/lr-astrology/main";

const STATIC_MIME_TYPES = {
  "/": "text/html; charset=utf-8",
  "/index.html": "text/html; charset=utf-8",
  "/manifest.json": "application/manifest+json; charset=utf-8",
  "/launchericon-48x48.png": "image/png",
  "/launchericon-72x72.png": "image/png",
  "/launchericon-96x96.png": "image/png",
  "/launchericon-144x144.png": "image/png",
  "/launchericon-192x192.png": "image/png",
  "/launchericon-512x512.png": "image/png",
  "/favicon.ico": "image/png"
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // CORS Preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }

    if (url.pathname === "/api/agora-token") {
      const channel = (url.searchParams.get("channel") || "astrology-room").trim();
      const uidStr = (url.searchParams.get("uid") || "0").trim();
      const roleParam = (url.searchParams.get("role") || "publisher").toLowerCase();
      const expireSeconds = Math.min(
        Math.max(parseInt(url.searchParams.get("expire") || "3600", 10) || 3600, 60),
        86400
      );

      if (!env.AGORA_APP_ID || !env.AGORA_APP_CERTIFICATE) {
        return new Response(
          JSON.stringify({
            error: "AGORA_APP_ID or AGORA_APP_CERTIFICATE not set in Cloudflare"
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            }
          }
        );
      }

      try {
        const uidNum = /^\d+$/.test(uidStr) ? parseInt(uidStr, 10) : 0;
        const privilegeExpireTs = Math.floor(Date.now() / 1000) + expireSeconds;
        const token = await buildRtcToken007({
          appId: env.AGORA_APP_ID.trim(),
          appCertificate: env.AGORA_APP_CERTIFICATE.trim(),
          channelName: channel,
          uid: uidNum,
          role: roleParam === "subscriber" ? "subscriber" : "publisher",
          privilegeExpireTs
        });

        return new Response(
          JSON.stringify({
            token,
            appId: env.AGORA_APP_ID.trim(),
            channel,
            uid: uidNum,
            expireAt: privilegeExpireTs
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Cache-Control": "no-store"
            }
          }
        );
      } catch (err) {
        return new Response(
          JSON.stringify({ error: "Token generation failed", details: err.message }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            }
          }
        );
      }
    }

    // ASSETS బైండింగ్ ఉంటే దాన్ని వాడండి, లేకపోతే ఫైళ్లను సురక్షితంగా సర్వ్ చేయండి
    if (env && env.ASSETS && typeof env.ASSETS.fetch === "function") {
      return env.ASSETS.fetch(request);
    }

    const cleanPath = url.pathname === "/" ? "/index.html" : url.pathname;
    const rawFilePath = cleanPath === "/favicon.ico" ? "/launchericon-48x48.png" : cleanPath;
    const contentType = STATIC_MIME_TYPES[url.pathname] || STATIC_MIME_TYPES[cleanPath];

    if (contentType) {
      const upstream = await fetch(`${GITHUB_RAW_BASE}${rawFilePath}`, {
        cf: { cacheTtl: 300, cacheEverything: true }
      });

      if (upstream.ok) {
        const headers = new Headers(upstream.headers);
        headers.set("Content-Type", contentType);
        headers.set("Access-Control-Allow-Origin", "*");
        return new Response(upstream.body, {
          status: upstream.status,
          headers
        });
      }
    }

    return new Response("Not Found", { status: 404 });
  }
};

// --- Agora AccessToken2 (007) Implementation using Web Crypto API ---
const VERSION = "007";
const SERVICE_RTC = 1;
const PRIVILEGE_JOIN_CHANNEL = 1;
const PRIVILEGE_PUBLISH_AUDIO = 2;
const PRIVILEGE_PUBLISH_VIDEO = 3;
const PRIVILEGE_PUBLISH_DATA = 4;

async function buildRtcToken007({
  appId,
  appCertificate,
  channelName,
  uid,
  role,
  privilegeExpireTs
}) {
  const issueTs = Math.floor(Date.now() / 1000);
  const expire = 0; // service level expire (0 = use privilege map)
  const salt = (crypto.getRandomValues(new Uint32Array(1))[0] % 99999999) + 1;

  // 1. Signing key = HMAC-SHA256(appCertificate, packUint32(issueTs)) -> HMAC-SHA256(..., packUint32(salt))
  const key1 = await hmacSha256(
    new TextEncoder().encode(appCertificate),
    packUint32(issueTs)
  );
  const signingKey = await hmacSha256(key1, packUint32(salt));

  // 2. Privileges map
  const privileges = new Map();
  privileges.set(PRIVILEGE_JOIN_CHANNEL, privilegeExpireTs);
  if (role === "publisher") {
    privileges.set(PRIVILEGE_PUBLISH_AUDIO, privilegeExpireTs);
    privileges.set(PRIVILEGE_PUBLISH_VIDEO, privilegeExpireTs);
    privileges.set(PRIVILEGE_PUBLISH_DATA, privilegeExpireTs);
  }

  // 3. RTC Service message
  const rtcServicePack = concatBytes([
    packUint16(SERVICE_RTC),
    packString(channelName),
    packString(uid === 0 ? "" : String(uid)),
    packMapUint32(privileges)
  ]);

  // 4. Inner message (appId, issueTs, expire, salt, services count + rtcServicePack)
  const innerMessage = concatBytes([
    packString(appId),
    packUint32(issueTs),
    packUint32(expire),
    packUint32(salt),
    packUint16(1), // 1 service
    rtcServicePack
  ]);

  // 5. Signature = HMAC-SHA256(signingKey, innerMessage)
  const signature = new Uint8Array(await hmacSha256(signingKey, innerMessage));

  // 6. Content = packString(signature) + innerMessage
  const content = concatBytes([packStringBytes(signature), innerMessage]);

  // 7. Compress with deflate-raw (if supported) or raw
  const compressed = await deflateRaw(content);

  return VERSION + toBase64(compressed);
}

function packUint16(val) {
  const buf = new ArrayBuffer(2);
  new DataView(buf).setUint16(0, val, true);
  return new Uint8Array(buf);
}

function packUint32(val) {
  const buf = new ArrayBuffer(4);
  new DataView(buf).setUint32(0, val >>> 0, true);
  return new Uint8Array(buf);
}

function packString(str) {
  const bytes = new TextEncoder().encode(str);
  return concatBytes([packUint16(bytes.length), bytes]);
}

function packStringBytes(bytes) {
  return concatBytes([packUint16(bytes.length), bytes]);
}

function packMapUint32(map) {
  const parts = [packUint16(map.size)];
  for (const [k, v] of map.entries()) {
    parts.push(packUint16(k), packUint32(v));
  }
  return concatBytes(parts);
}

function concatBytes(arrays) {
  const total = arrays.reduce((sum, a) => sum + a.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const a of arrays) {
    out.set(a, offset);
    offset += a.length;
  }
  return out;
}

async function hmacSha256(keyBytes, dataBytes) {
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  return crypto.subtle.sign("HMAC", cryptoKey, dataBytes);
}

async function deflateRaw(bytes) {
  if (typeof CompressionStream !== "undefined") {
    const cs = new CompressionStream("deflate-raw");
    const writer = cs.writable.getWriter();
    writer.write(bytes);
    writer.close();
    const buf = await new Response(cs.readable).arrayBuffer();
    return new Uint8Array(buf);
  }
  return bytes;
}

function toBase64(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
