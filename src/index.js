export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // వాయిస్ కాల్ కోసం టోకెన్ అడిగే API రూట్
    if (url.pathname === "/api/agora-token") {
      const channel = url.searchParams.get("channel") || "astrology-room";
      const uid = url.searchParams.get("uid") || "0";

      if (!env.AGORA_APP_ID || !env.AGORA_APP_CERTIFICATE) {
        return new Response(
          JSON.stringify({
            error: "AGORA_APP_ID or AGORA_APP_CERTIFICATE not set in Cloudflare"
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }

      return new Response(
        JSON.stringify({
          appId: env.AGORA_APP_ID,
          channel: channel,
          uid: uid,
          status: "ready_for_token_signing"
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }

    // మిగిలిన అన్ని రిక్వెస్ట్‌లకు మీ index.html మరియు ఇతర ఫైల్స్ సర్వ్ చేస్తుంది
    return env.ASSETS.fetch(request);
  }
};
