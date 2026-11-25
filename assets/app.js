
    const RASI_FULL = ["మేషం", "వృషభం", "మిథునం", "కర్కాటకం", "సింహం", "కన్య", "తుల", "వృశ్చికం", "ధనుస్సు", "మకరం", "కుంభం", "మీనం"];
    const NAK_NAMES = [
        "అశ్విని", "భరణి", "కృత్తిక", "రోహిణి", "మృగశిర", "ఆరుద్ర", "పునర్వసు", "పుష్యమి", "ఆశ్లేష",
        "మఖ", "పుబ్బ", "ఉత్తర", "హస్త", "చిత్త", "స్వాతి", "విశాఖ", "అనూరాధ", "జ్యేష్ఠ",
        "మూల", "పూర్వాషాఢ", "ఉత్తరాషాఢ", "శ్రవణం", "ధనిష్ఠ", "శతభిషం", "పూర్వాభాద్ర", "ఉత్తరాభాద్ర", "రేవతి"
    ];
    const NAK_LORDS = [
        "కేతు", "శుక్ర", "సూర్య", "చంద్ర", "కుజ", "రాహు", "గురు", "శని", "బుధ",
        "కేతు", "శుక్ర", "సూర్య", "చంద్ర", "కుజ", "రాహు", "గురు", "శని", "బుధ",
        "కేతు", "శుక్ర", "సూర్య", "చంద్ర", "కుజ", "రాహు", "గురు", "శని", "బుధ"
    ];
    const TITHI_NAMES = [
        "శుక్ల పాడ్యమి", "శుక్ల విదియ", "శుక్ల తదియ", "శుక్ల చవితి", "శుక్ల పంచమి",
        "శుక్ల షష్ఠి", "శుక్ల సప్తమి", "శుక్ల అష్టమి", "శుక్ల నవమి", "శుక్ల దశమి",
        "శుక్ల ఏకాదశి", "శుక్ల ద్వాదశి", "శుక్ల త్రయోదశి", "శుక్ల చతుర్దశి", "పౌర్ణమి",
        "బహుళ పాడ్యమి", "బహుళ విదియ", "బహుళ తదియ", "బహుళ చవితి", "బహుళ పంచమి",
        "బహుళ షష్ఠి", "బహుళ సప్తమి", "బహుళ అష్టమి", "బహుళ నవమి", "బహుళ దశమి",
        "బహుళ ఏకాదశి", "బహుళ ద్వాదశి", "బహుళ త్రయోదశి", "బహుళ చతుర్దశి", "అమావాస్య"
    ];
    const VARA_NAMES = ["ఆదివారం", "సోమవారం", "మంగళవారం", "బుధవారం", "గురువారం", "శుక్రవారం", "శనివారం"];
    const YOGA_NAMES = [
        "విష్కంభం", "ప్రీతి", "ఆయుష్మాన్", "సౌభాగ్యం", "శోభనం", "అతిగండం", "సుకర్మ", "ధృతి", "శూలం",
        "గండం", "వృద్ధి", "ధ్రువం", "వ్యాఘాతం", "హర్షణం", "వజ్రం", "సిద్ధి", "వ్యతీపాతం", "వరీయాన్",
        "పరిఘం", "శివం", "సిద్ధం", "సాధ్యం", "శుభం", "శుక్లం", "బ్రహ్మ", "ఐంద్రం", "వైధృతి"
    ];
    const KARANA_NAMES = ["బవ", "బాలవ", "కౌలవ", "తైతుల", "గరజ", "వణిజ", "భద్ర", "శకుని", "చతుష్పాద", "నాగవ", "కింస్తుఘ్న"];

    const WORLD_COUNTRIES = [
        { code: "AF", en: "Afghanistan", te: "ఆఫ్ఘనిస్తాన్", lat: 34.53, lon: 69.17, tz: "Asia/Kabul" },
        { code: "AL", en: "Albania", te: "అల్బేనియా", lat: 41.33, lon: 19.82, tz: "Europe/Tirane" },
        { code: "DZ", en: "Algeria", te: "అల్జీరియా", lat: 36.75, lon: 3.06, tz: "Africa/Algiers" },
        { code: "AD", en: "Andorra", te: "అండోరా", lat: 42.51, lon: 1.52, tz: "Europe/Andorra" },
        { code: "AO", en: "Angola", te: "అంగోలా", lat: -8.84, lon: 13.23, tz: "Africa/Luanda" },
        { code: "AG", en: "Antigua and Barbuda", te: "యాంటిగ్వా మరియు బార్బుడా", lat: 17.12, lon: -61.85, tz: "America/Antigua" },
        { code: "AR", en: "Argentina", te: "అర్జెంటీనా", lat: -34.6, lon: -58.38, tz: "America/Argentina/Buenos_Aires" },
        { code: "AM", en: "Armenia", te: "ఆర్మేనియా", lat: 40.18, lon: 44.51, tz: "Asia/Yerevan" },
        { code: "AU", en: "Australia", te: "ఆస్ట్రేలియా", lat: -35.28, lon: 149.13, tz: "Australia/Sydney" },
        { code: "AT", en: "Austria", te: "ఆస్ట్రియా", lat: 48.21, lon: 16.37, tz: "Europe/Vienna" },
        { code: "AZ", en: "Azerbaijan", te: "అజర్‌బైజాన్", lat: 40.41, lon: 49.87, tz: "Asia/Baku" },
        { code: "BS", en: "Bahamas", te: "బహామాస్", lat: 25.06, lon: -77.35, tz: "America/Nassau" },
        { code: "BH", en: "Bahrain", te: "బహ్రెయిన్", lat: 26.23, lon: 50.59, tz: "Asia/Bahrain" },
        { code: "BD", en: "Bangladesh", te: "బంగ్లాదేశ్", lat: 23.81, lon: 90.41, tz: "Asia/Dhaka" },
        { code: "BB", en: "Barbados", te: "బార్బడోస్", lat: 13.1, lon: -59.62, tz: "America/Barbados" },
        { code: "BY", en: "Belarus", te: "బెలారస్", lat: 53.9, lon: 27.57, tz: "Europe/Minsk" },
        { code: "BE", en: "Belgium", te: "బెల్జియం", lat: 50.85, lon: 4.35, tz: "Europe/Brussels" },
        { code: "BZ", en: "Belize", te: "బెలిజ్", lat: 17.25, lon: -88.77, tz: "America/Belize" },
        { code: "BJ", en: "Benin", te: "బెనిన్", lat: 6.5, lon: 2.6, tz: "Africa/Porto-Novo" },
        { code: "BT", en: "Bhutan", te: "భూటాన్", lat: 27.47, lon: 89.64, tz: "Asia/Thimphu" },
        { code: "BO", en: "Bolivia", te: "బొలీవియా", lat: -16.5, lon: -68.15, tz: "America/La_Paz" },
        { code: "BA", en: "Bosnia and Herzegovina", te: "బోస్నియా మరియు హెర్జెగొవీనా", lat: 43.86, lon: 18.41, tz: "Europe/Sarajevo" },
        { code: "BW", en: "Botswana", te: "బోట్స్వానా", lat: -24.65, lon: 25.91, tz: "Africa/Gaborone" },
        { code: "BR", en: "Brazil", te: "బ్రెజిల్", lat: -15.79, lon: -47.88, tz: "America/Sao_Paulo" },
        { code: "BN", en: "Brunei", te: "బ్రూనై", lat: 4.94, lon: 114.95, tz: "Asia/Brunei" },
        { code: "BG", en: "Bulgaria", te: "బల్గేరియా", lat: 42.7, lon: 23.32, tz: "Europe/Sofia" },
        { code: "BF", en: "Burkina Faso", te: "బుర్కినా ఫాసో", lat: 12.37, lon: -1.52, tz: "Africa/Ouagadougou" },
        { code: "BI", en: "Burundi", te: "బురుండి", lat: -3.38, lon: 29.36, tz: "Africa/Bujumbura" },
        { code: "KH", en: "Cambodia", te: "కంబోడియా", lat: 11.56, lon: 104.92, tz: "Asia/Phnom_Penh" },
        { code: "CM", en: "Cameroon", te: "కామెరూన్", lat: 3.87, lon: 11.52, tz: "Africa/Douala" },
        { code: "CA", en: "Canada", te: "కెనడా", lat: 45.42, lon: -75.7, tz: "America/Toronto" },
        { code: "CV", en: "Cape Verde", te: "కేప్ వర్డే", lat: 14.93, lon: -23.51, tz: "Atlantic/Cape_Verde" },
        { code: "CF", en: "Central African Republic", te: "సెంట్రల్ ఆఫ్రికన్ రిపబ్లిక్", lat: 4.39, lon: 18.56, tz: "Africa/Bangui" },
        { code: "TD", en: "Chad", te: "చాద్", lat: 12.13, lon: 15.06, tz: "Africa/Ndjamena" },
        { code: "CL", en: "Chile", te: "చిలీ", lat: -33.45, lon: -70.67, tz: "America/Santiago" },
        { code: "CN", en: "China", te: "చైనా", lat: 39.9, lon: 116.41, tz: "Asia/Shanghai" },
        { code: "CO", en: "Colombia", te: "కొలంబియా", lat: 4.71, lon: -74.07, tz: "America/Bogota" },
        { code: "KM", en: "Comoros", te: "కొమొరోస్", lat: -11.72, lon: 43.26, tz: "Indian/Comoro" },
        { code: "CG", en: "Congo", te: "కాంగో", lat: -4.27, lon: 15.28, tz: "Africa/Brazzaville" },
        { code: "CD", en: "Congo (DRC)", te: "కాంగో ప్రజాస్వామ్య గణతంత్రం", lat: -4.44, lon: 15.27, tz: "Africa/Kinshasa" },
        { code: "CR", en: "Costa Rica", te: "కోస్టా రికా", lat: 9.93, lon: -84.08, tz: "America/Costa_Rica" },
        { code: "CI", en: "Ivory Coast", te: "ఐవరీ కోస్ట్", lat: 6.83, lon: -5.29, tz: "Africa/Abidjan" },
        { code: "HR", en: "Croatia", te: "క్రొయేషియా", lat: 45.81, lon: 15.98, tz: "Europe/Zagreb" },
        { code: "CU", en: "Cuba", te: "క్యూబా", lat: 23.11, lon: -82.37, tz: "America/Havana" },
        { code: "CY", en: "Cyprus", te: "సైప్రస్", lat: 35.19, lon: 33.38, tz: "Asia/Nicosia" },
        { code: "CZ", en: "Czechia", te: "చెక్ రిపబ్లిక్", lat: 50.08, lon: 14.44, tz: "Europe/Prague" },
        { code: "DK", en: "Denmark", te: "డెన్మార్క్", lat: 55.68, lon: 12.57, tz: "Europe/Copenhagen" },
        { code: "DJ", en: "Djibouti", te: "జిబౌటి", lat: 11.59, lon: 43.15, tz: "Africa/Djibouti" },
        { code: "DM", en: "Dominica", te: "డొమినికా", lat: 15.3, lon: -61.39, tz: "America/Dominica" },
        { code: "DO", en: "Dominican Republic", te: "డొమినికన్ రిపబ్లిక్", lat: 18.49, lon: -69.93, tz: "America/Santo_Domingo" },
        { code: "EC", en: "Ecuador", te: "ఈక్వెడార్", lat: -0.18, lon: -78.47, tz: "America/Guayaquil" },
        { code: "EG", en: "Egypt", te: "ఈజిప్ట్", lat: 30.04, lon: 31.24, tz: "Africa/Cairo" },
        { code: "SV", en: "El Salvador", te: "ఎల్ సాల్వడార్", lat: 13.69, lon: -89.19, tz: "America/El_Salvador" },
        { code: "GQ", en: "Equatorial Guinea", te: "ఈక్వటోరియల్ గినియా", lat: 3.75, lon: 8.78, tz: "Africa/Malabo" },
        { code: "ER", en: "Eritrea", te: "ఎరిట్రియా", lat: 15.34, lon: 38.93, tz: "Africa/Asmara" },
        { code: "EE", en: "Estonia", te: "ఎస్టోనియా", lat: 59.44, lon: 24.75, tz: "Europe/Tallinn" },
        { code: "SZ", en: "Eswatini", te: "ఎస్వాటిని", lat: -26.31, lon: 31.14, tz: "Africa/Mbabane" },
        { code: "ET", en: "Ethiopia", te: "ఇథియోపియా", lat: 9.03, lon: 38.74, tz: "Africa/Addis_Ababa" },
        { code: "FJ", en: "Fiji", te: "ఫిజీ", lat: -18.14, lon: 178.44, tz: "Pacific/Fiji" },
        { code: "FI", en: "Finland", te: "ఫిన్లాండ్", lat: 60.17, lon: 24.94, tz: "Europe/Helsinki" },
        { code: "FR", en: "France", te: "ఫ్రాన్స్", lat: 48.86, lon: 2.35, tz: "Europe/Paris" },
        { code: "GA", en: "Gabon", te: "గాబోన్", lat: 0.42, lon: 9.47, tz: "Africa/Libreville" },
        { code: "GM", en: "Gambia", te: "గాంబియా", lat: 13.45, lon: -16.58, tz: "Africa/Banjul" },
        { code: "GE", en: "Georgia", te: "జార్జియా", lat: 41.72, lon: 44.79, tz: "Asia/Tbilisi" },
        { code: "DE", en: "Germany", te: "జర్మనీ", lat: 52.52, lon: 13.4, tz: "Europe/Berlin" },
        { code: "GH", en: "Ghana", te: "ఘనా", lat: 5.6, lon: -0.19, tz: "Africa/Accra" },
        { code: "GR", en: "Greece", te: "గ్రీస్", lat: 37.98, lon: 23.73, tz: "Europe/Athens" },
        { code: "GD", en: "Grenada", te: "గ్రెనడా", lat: 12.06, lon: -61.75, tz: "America/Grenada" },
        { code: "GT", en: "Guatemala", te: "గ్వాటెమాల", lat: 14.63, lon: -90.51, tz: "America/Guatemala" },
        { code: "GN", en: "Guinea", te: "గినియా", lat: 9.64, lon: -13.58, tz: "Africa/Conakry" },
        { code: "GW", en: "Guinea-Bissau", te: "గినియా-బిస్సౌ", lat: 11.86, lon: -15.6, tz: "Africa/Bissau" },
        { code: "GY", en: "Guyana", te: "గయానా", lat: 6.8, lon: -58.16, tz: "America/Guyana" },
        { code: "HT", en: "Haiti", te: "హైతీ", lat: 18.54, lon: -72.34, tz: "America/Port-au-Prince" },
        { code: "HN", en: "Honduras", te: "హోండురాస్", lat: 14.07, lon: -87.19, tz: "America/Tegucigalpa" },
        { code: "HU", en: "Hungary", te: "హంగేరీ", lat: 47.5, lon: 19.04, tz: "Europe/Budapest" },
        { code: "IS", en: "Iceland", te: "ఐస్లాండ్", lat: 64.15, lon: -21.94, tz: "Atlantic/Reykjavik" },
        { code: "IN", en: "India", te: "భారతదేశం", lat: 20.59, lon: 78.96, tz: "Asia/Kolkata" },
        { code: "ID", en: "Indonesia", te: "ఇండోనేషియా", lat: -6.21, lon: 106.85, tz: "Asia/Jakarta" },
        { code: "IR", en: "Iran", te: "ఇరాన్", lat: 35.69, lon: 51.39, tz: "Asia/Tehran" },
        { code: "IQ", en: "Iraq", te: "ఇరాక్", lat: 33.31, lon: 44.36, tz: "Asia/Baghdad" },
        { code: "IE", en: "Ireland", te: "ఐర్లాండ్", lat: 53.35, lon: -6.26, tz: "Europe/Dublin" },
        { code: "IL", en: "Israel", te: "ఇజ్రాయెల్", lat: 31.77, lon: 35.21, tz: "Asia/Jerusalem" },
        { code: "IT", en: "Italy", te: "ఇటలీ", lat: 41.9, lon: 12.5, tz: "Europe/Rome" },
        { code: "JM", en: "Jamaica", te: "జమైకా", lat: 18.11, lon: -77.3, tz: "America/Jamaica" },
        { code: "JP", en: "Japan", te: "జపాన్", lat: 35.69, lon: 139.69, tz: "Asia/Tokyo" },
        { code: "JO", en: "Jordan", te: "జోర్డాన్", lat: 31.95, lon: 35.93, tz: "Asia/Amman" },
        { code: "KZ", en: "Kazakhstan", te: "కజాఖస్తాన్", lat: 51.17, lon: 71.45, tz: "Asia/Almaty" },
        { code: "KE", en: "Kenya", te: "కెన్యా", lat: -1.29, lon: 36.82, tz: "Africa/Nairobi" },
        { code: "KI", en: "Kiribati", te: "కిరిబాతి", lat: 1.33, lon: 172.98, tz: "Pacific/Tarawa" },
        { code: "KP", en: "North Korea", te: "ఉత్తర కొరియా", lat: 39.02, lon: 125.75, tz: "Asia/Pyongyang" },
        { code: "KR", en: "South Korea", te: "దక్షిణ కొరియా", lat: 37.57, lon: 126.98, tz: "Asia/Seoul" },
        { code: "KW", en: "Kuwait", te: "కువైట్", lat: 29.38, lon: 47.99, tz: "Asia/Kuwait" },
        { code: "KG", en: "Kyrgyzstan", te: "కిర్గిజస్తాన్", lat: 42.87, lon: 74.59, tz: "Asia/Bishkek" },
        { code: "LA", en: "Laos", te: "లావోస్", lat: 17.97, lon: 102.63, tz: "Asia/Vientiane" },
        { code: "LV", en: "Latvia", te: "లాత్వియా", lat: 56.95, lon: 24.11, tz: "Europe/Riga" },
        { code: "LB", en: "Lebanon", te: "లెబనాన్", lat: 33.89, lon: 35.5, tz: "Asia/Beirut" },
        { code: "LS", en: "Lesotho", te: "లెసోతో", lat: -29.31, lon: 27.48, tz: "Africa/Maseru" },
        { code: "LR", en: "Liberia", te: "లైబీరియా", lat: 6.3, lon: -10.8, tz: "Africa/Monrovia" },
        { code: "LY", en: "Libya", te: "లిబియా", lat: 32.89, lon: 13.19, tz: "Africa/Tripoli" },
        { code: "LI", en: "Liechtenstein", te: "లీచెన్‌స్టెయిన్", lat: 47.14, lon: 9.52, tz: "Europe/Vaduz" },
        { code: "LT", en: "Lithuania", te: "లిథువేనియా", lat: 54.69, lon: 25.28, tz: "Europe/Vilnius" },
        { code: "LU", en: "Luxembourg", te: "లక్సెంబర్గ్", lat: 49.61, lon: 6.13, tz: "Europe/Luxembourg" },
        { code: "MG", en: "Madagascar", te: "మడగాస్కర్", lat: -18.88, lon: 47.51, tz: "Indian/Antananarivo" },
        { code: "MW", en: "Malawi", te: "మలావి", lat: -13.96, lon: 33.79, tz: "Africa/Blantyre" },
        { code: "MY", en: "Malaysia", te: "మలేషియా", lat: 3.14, lon: 101.69, tz: "Asia/Kuala_Lumpur" },
        { code: "MV", en: "Maldives", te: "మాల్దీవులు", lat: 4.18, lon: 73.51, tz: "Indian/Maldives" },
        { code: "ML", en: "Mali", te: "మాలి", lat: 12.64, lon: -8.0, tz: "Africa/Bamako" },
        { code: "MT", en: "Malta", te: "మాల్టా", lat: 35.9, lon: 14.51, tz: "Europe/Malta" },
        { code: "MH", en: "Marshall Islands", te: "మార్షల్ దీవులు", lat: 7.09, lon: 171.38, tz: "Pacific/Majuro" },
        { code: "MR", en: "Mauritania", te: "మౌరిటేనియా", lat: 18.08, lon: -15.98, tz: "Africa/Nouakchott" },
        { code: "MU", en: "Mauritius", te: "మారిషస్", lat: -20.16, lon: 57.5, tz: "Indian/Mauritius" },
        { code: "MX", en: "Mexico", te: "మెక్సికో", lat: 19.43, lon: -99.13, tz: "America/Mexico_City" },
        { code: "FM", en: "Micronesia", te: "మైక్రోనేషియా", lat: 6.92, lon: 158.16, tz: "Pacific/Pohnpei" },
        { code: "MD", en: "Moldova", te: "మోల్డోవా", lat: 47.01, lon: 28.86, tz: "Europe/Chisinau" },
        { code: "MC", en: "Monaco", te: "మొనాకో", lat: 43.74, lon: 7.42, tz: "Europe/Monaco" },
        { code: "MN", en: "Mongolia", te: "మంగోలియా", lat: 47.89, lon: 106.91, tz: "Asia/Ulaanbaatar" },
        { code: "ME", en: "Montenegro", te: "మాంటెనెగ్రో", lat: 42.44, lon: 19.26, tz: "Europe/Podgorica" },
        { code: "MA", en: "Morocco", te: "మొరాకో", lat: 34.02, lon: -6.84, tz: "Africa/Casablanca" },
        { code: "MZ", en: "Mozambique", te: "మొజాంబిక్", lat: -25.97, lon: 32.57, tz: "Africa/Maputo" },
        { code: "MM", en: "Myanmar", te: "మయన్మార్", lat: 16.87, lon: 96.2, tz: "Asia/Yangon" },
        { code: "NA", en: "Namibia", te: "నమీబియా", lat: -22.56, lon: 17.08, tz: "Africa/Windhoek" },
        { code: "NR", en: "Nauru", te: "నౌరు", lat: -0.55, lon: 166.92, tz: "Pacific/Nauru" },
        { code: "NP", en: "Nepal", te: "నేపాల్", lat: 27.72, lon: 85.32, tz: "Asia/Kathmandu" },
        { code: "NL", en: "Netherlands", te: "నెదర్లాండ్స్", lat: 52.37, lon: 4.9, tz: "Europe/Amsterdam" },
        { code: "NZ", en: "New Zealand", te: "న్యూజిలాండ్", lat: -41.29, lon: 174.78, tz: "Pacific/Auckland" },
        { code: "NI", en: "Nicaragua", te: "నికరాగ్వా", lat: 12.14, lon: -86.25, tz: "America/Managua" },
        { code: "NE", en: "Niger", te: "నైజర్", lat: 13.51, lon: 2.11, tz: "Africa/Niamey" },
        { code: "NG", en: "Nigeria", te: "నైజీరియా", lat: 9.06, lon: 7.49, tz: "Africa/Lagos" },
        { code: "MK", en: "North Macedonia", te: "ఉత్తర మాసిడోనియా", lat: 42.0, lon: 21.43, tz: "Europe/Skopje" },
        { code: "NO", en: "Norway", te: "నార్వే", lat: 59.91, lon: 10.75, tz: "Europe/Oslo" },
        { code: "OM", en: "Oman", te: "ఒమన్", lat: 23.59, lon: 58.41, tz: "Asia/Muscat" },
        { code: "PK", en: "Pakistan", te: "పాకిస్తాన్", lat: 33.68, lon: 73.05, tz: "Asia/Karachi" },
        { code: "PW", en: "Palau", te: "పలావు", lat: 7.51, lon: 134.58, tz: "Pacific/Palau" },
        { code: "PA", en: "Panama", te: "పనామా", lat: 8.98, lon: -79.52, tz: "America/Panama" },
        { code: "PG", en: "Papua New Guinea", te: "పాపువా న్యూ గినియా", lat: -9.44, lon: 147.18, tz: "Pacific/Port_Moresby" },
        { code: "PY", en: "Paraguay", te: "పరాగ్వే", lat: -25.26, lon: -57.58, tz: "America/Asuncion" },
        { code: "PE", en: "Peru", te: "పెరూ", lat: -12.05, lon: -77.04, tz: "America/Lima" },
        { code: "PH", en: "Philippines", te: "ఫిలిప్పీన్స్", lat: 14.6, lon: 120.98, tz: "Asia/Manila" },
        { code: "PL", en: "Poland", te: "పోలాండ్", lat: 52.23, lon: 21.01, tz: "Europe/Warsaw" },
        { code: "PT", en: "Portugal", te: "పోర్చుగల్", lat: 38.72, lon: -9.14, tz: "Europe/Lisbon" },
        { code: "QA", en: "Qatar", te: "ఖతార్", lat: 25.29, lon: 51.53, tz: "Asia/Qatar" },
        { code: "RO", en: "Romania", te: "రొమేనియా", lat: 44.43, lon: 26.1, tz: "Europe/Bucharest" },
        { code: "RU", en: "Russia", te: "రష్యా", lat: 55.76, lon: 37.62, tz: "Europe/Moscow" },
        { code: "RW", en: "Rwanda", te: "రువాండా", lat: -1.94, lon: 30.06, tz: "Africa/Kigali" },
        { code: "KN", en: "Saint Kitts and Nevis", te: "సెయింట్ కిట్స్ మరియు నెవిస్", lat: 17.3, lon: -62.73, tz: "America/St_Kitts" },
        { code: "LC", en: "Saint Lucia", te: "సెయింట్ లూసియా", lat: 14.01, lon: -60.99, tz: "America/St_Lucia" },
        { code: "VC", en: "Saint Vincent and the Grenadines", te: "సెయింట్ విన్సెంట్ మరియు గ్రెనడీన్స్", lat: 13.16, lon: -61.22, tz: "America/St_Vincent" },
        { code: "WS", en: "Samoa", te: "సమోవా", lat: -13.83, lon: -171.76, tz: "Pacific/Apia" },
        { code: "SM", en: "San Marino", te: "శాన్ మారినో", lat: 43.94, lon: 12.45, tz: "Europe/San_Marino" },
        { code: "ST", en: "Sao Tome and Principe", te: "సావో టోమే మరియు ప్రిన్సిపే", lat: 0.34, lon: 6.73, tz: "Africa/Sao_Tome" },
        { code: "SA", en: "Saudi Arabia", te: "సౌదీ అరేబియా", lat: 24.71, lon: 46.68, tz: "Asia/Riyadh" },
        { code: "SN", en: "Senegal", te: "సెనెగల్", lat: 14.72, lon: -17.47, tz: "Africa/Dakar" },
        { code: "RS", en: "Serbia", te: "సెర్బియా", lat: 44.79, lon: 20.45, tz: "Europe/Belgrade" },
        { code: "SC", en: "Seychelles", te: "సీషెల్స్", lat: -4.62, lon: 55.45, tz: "Indian/Mahe" },
        { code: "SL", en: "Sierra Leone", te: "సియెర్రా లియోన్", lat: 8.48, lon: -13.23, tz: "Africa/Freetown" },
        { code: "SG", en: "Singapore", te: "సింగపూర్", lat: 1.35, lon: 103.82, tz: "Asia/Singapore" },
        { code: "SK", en: "Slovakia", te: "స్లోవేకియా", lat: 48.15, lon: 17.11, tz: "Europe/Bratislava" },
        { code: "SI", en: "Slovenia", te: "స్లోవేనియా", lat: 46.06, lon: 14.51, tz: "Europe/Ljubljana" },
        { code: "SB", en: "Solomon Islands", te: "సోలమన్ దీవులు", lat: -9.43, lon: 159.95, tz: "Pacific/Guadalcanal" },
        { code: "SO", en: "Somalia", te: "సోమాలియా", lat: 2.05, lon: 45.32, tz: "Africa/Mogadishu" },
        { code: "ZA", en: "South Africa", te: "దక్షిణ ఆఫ్రికా", lat: -25.75, lon: 28.19, tz: "Africa/Johannesburg" },
        { code: "SS", en: "South Sudan", te: "దక్షిణ సూడాన్", lat: 4.85, lon: 31.58, tz: "Africa/Juba" },
        { code: "ES", en: "Spain", te: "స్పెయిన్", lat: 40.42, lon: -3.7, tz: "Europe/Madrid" },
        { code: "LK", en: "Sri Lanka", te: "శ్రీలంక", lat: 6.93, lon: 79.85, tz: "Asia/Colombo" },
        { code: "SD", en: "Sudan", te: "సూడాన్", lat: 15.5, lon: 32.56, tz: "Africa/Khartoum" },
        { code: "SR", en: "Suriname", te: "సురినామ్", lat: 5.85, lon: -55.2, tz: "America/Paramaribo" },
        { code: "SE", en: "Sweden", te: "స్వీడన్", lat: 59.33, lon: 18.07, tz: "Europe/Stockholm" },
        { code: "CH", en: "Switzerland", te: "స్విట్జర్లాండ్", lat: 46.95, lon: 7.45, tz: "Europe/Zurich" },
        { code: "SY", en: "Syria", te: "సిరియా", lat: 33.51, lon: 36.29, tz: "Asia/Damascus" },
        { code: "TW", en: "Taiwan", te: "తైవాన్", lat: 25.03, lon: 121.57, tz: "Asia/Taipei" },
        { code: "TJ", en: "Tajikistan", te: "తజికిస్తాన్", lat: 38.56, lon: 68.79, tz: "Asia/Dushanbe" },
        { code: "TZ", en: "Tanzania", te: "టాంజానియా", lat: -6.16, lon: 35.75, tz: "Africa/Dar_es_Salaam" },
        { code: "TH", en: "Thailand", te: "థాయిలాండ్", lat: 13.76, lon: 100.5, tz: "Asia/Bangkok" },
        { code: "TL", en: "Timor-Leste", te: "తూర్పు తైమూర్", lat: -8.56, lon: 125.56, tz: "Asia/Dili" },
        { code: "TG", en: "Togo", te: "టోగో", lat: 6.13, lon: 1.22, tz: "Africa/Lome" },
        { code: "TO", en: "Tonga", te: "టోంగా", lat: -21.14, lon: -175.2, tz: "Pacific/Tongatapu" },
        { code: "TT", en: "Trinidad and Tobago", te: "ట్రినిడాడ్ మరియు టొబాగో", lat: 10.65, lon: -61.51, tz: "America/Port_of_Spain" },
        { code: "TN", en: "Tunisia", te: "ట్యునీషియా", lat: 36.81, lon: 10.18, tz: "Africa/Tunis" },
        { code: "TR", en: "Turkey", te: "టర్కీ", lat: 39.93, lon: 32.86, tz: "Europe/Istanbul" },
        { code: "TM", en: "Turkmenistan", te: "తుర్క్‌మెనిస్తాన్", lat: 37.95, lon: 58.38, tz: "Asia/Ashgabat" },
        { code: "TV", en: "Tuvalu", te: "టువాలు", lat: -8.52, lon: 179.2, tz: "Pacific/Funafuti" },
        { code: "UG", en: "Uganda", te: "ఉగాండా", lat: 0.35, lon: 32.58, tz: "Africa/Kampala" },
        { code: "UA", en: "Ukraine", te: "ఉక్రెయిన్", lat: 50.45, lon: 30.52, tz: "Europe/Kyiv" },
        { code: "AE", en: "United Arab Emirates", te: "యునైటెడ్ అరబ్ ఎమిరేట్స్", lat: 24.45, lon: 54.38, tz: "Asia/Dubai" },
        { code: "GB", en: "United Kingdom", te: "యునైటెడ్ కింగ్‌డమ్", lat: 51.51, lon: -0.13, tz: "Europe/London" },
        { code: "US", en: "United States", te: "అమెరికా సంయుక్త రాష్ట్రాలు", lat: 40.71, lon: -74.01, tz: "America/New_York" },
        { code: "UY", en: "Uruguay", te: "ఉరుగ్వే", lat: -34.9, lon: -56.16, tz: "America/Montevideo" },
        { code: "UZ", en: "Uzbekistan", te: "ఉజ్బెకిస్తాన్", lat: 41.3, lon: 69.24, tz: "Asia/Tashkent" },
        { code: "VU", en: "Vanuatu", te: "వనువాటు", lat: -17.73, lon: 168.32, tz: "Pacific/Efate" },
        { code: "VA", en: "Vatican City", te: "వాటికన్ సిటీ", lat: 41.9, lon: 12.45, tz: "Europe/Vatican" },
        { code: "VE", en: "Venezuela", te: "వెనిజులా", lat: 10.48, lon: -66.9, tz: "America/Caracas" },
        { code: "VN", en: "Vietnam", te: "వియత్నాం", lat: 21.03, lon: 105.85, tz: "Asia/Ho_Chi_Minh" },
        { code: "YE", en: "Yemen", te: "యెమెన్", lat: 15.37, lon: 44.19, tz: "Asia/Aden" },
        { code: "ZM", en: "Zambia", te: "జాంబియా", lat: -15.39, lon: 28.32, tz: "Africa/Lusaka" },
        { code: "ZW", en: "Zimbabwe", te: "జింబాబ్వే", lat: -17.83, lon: 31.05, tz: "Africa/Harare" }
    ];

    const chartStyles = { jatakamChartArea: 'east', gocharChartArea: 'east', mhChartArea: 'east' };
    const chartDataOverrides = {};
    let currentPlanets = [];        // జాతక కుండలి గ్రహాలు
    let currentLagnaRasi = 1;       // జాతక లగ్నం
    let gocharPlanets = [];         // గోచార కుండలి గ్రహాలు
    let gocharLagnaRasi = 1;        // గోచార లగ్నం
    let dashaSchedule = [];
    const searchTimers = { in: null, gc: null, mh: null };

    function toggleSection(bodyId, headerEl) {
        const body = document.getElementById(bodyId);
        const isOpen = body.style.display === 'block';
        body.style.display = isOpen ? 'none' : 'block';
        headerEl.classList.toggle('open', !isOpen);
    }

        const PANCHANG_DATE_KEY = 'vedicAstrology.panchangDate';
    let gcDateTimer = null;

    function readSavedPanchangDate() {
        try {
            const raw = localStorage.getItem(PANCHANG_DATE_KEY);
            if (!raw) return null;
            const o = JSON.parse(raw);
            if (o && o.y && o.m && o.d) return o;
        } catch (e) {}
        return null;
    }

    function savePanchangDate(y, m, d) {
        try { localStorage.setItem(PANCHANG_DATE_KEY, JSON.stringify({ y, m, d })); } catch (e) {}
    }

    function updatePanchangDateHint() {
        const hint = document.getElementById('gcDateHint');
        if (!hint) return;
        const saved = readSavedPanchangDate();
        hint.innerText = saved ? 'మీరు ఎంచుకున్న తేదీ సేవ్ అయింది' : 'ఈరోజు తేదీ';
    }

    function setPanchangToToday() {
        const t = new Date();
        document.getElementById('gcDay').value = t.getDate();
        document.getElementById('gcMonth').value = t.getMonth() + 1;
        document.getElementById('gcYear').value = t.getFullYear();
        try { localStorage.removeItem(PANCHANG_DATE_KEY); } catch (e) {}
        updatePanchangDateHint();
        generatePanchangam(false);
    }

    // తేదీ మార్చినప్పుడు మాత్రమే ఆ తేదీని గుర్తుపెట్టుకుంటాము
    function onPanchangDateChanged() {
        savePanchangDate(
            parseInt(document.getElementById('gcYear').value),
            parseInt(document.getElementById('gcMonth').value),
            parseInt(document.getElementById('gcDay').value)
        );
        updatePanchangDateHint();
        clearTimeout(gcDateTimer);
        gcDateTimer = setTimeout(() => generatePanchangam(false), 250);
    }

    function initFormSelectors(prefix) {
        const daySel = document.getElementById(prefix + 'Day');
        const monthSel = document.getElementById(prefix + 'Month');
        const yearSel = document.getElementById(prefix + 'Year');
        const hourSel = document.getElementById(prefix + 'Hour');
        const minSel = document.getElementById(prefix + 'Min');
        const countrySel = document.getElementById(prefix + 'Country');

        const today = new Date();
        let defDay = today.getDate();
        let defMonth = today.getMonth() + 1;
        let defYear = today.getFullYear();
        if (prefix === 'gc') {
            // ఇంతకుముందు ఎంచుకున్న తేదీ ఉంటే అదే, లేకపోతే ఈరోజు
            const saved = readSavedPanchangDate();
            if (saved) {
                defDay = saved.d; defMonth = saved.m; defYear = saved.y;
            }
        }

        if (daySel && daySel.options.length === 0) {
            for (let d = 1; d <= 31; d++) {
                let opt = document.createElement('option');
                opt.value = d;
                opt.innerText = d;
                if (d === defDay) opt.selected = true;
                daySel.appendChild(opt);
            }
        }

        if (monthSel && monthSel.options.length === 0) {
            for (let m = 1; m <= 12; m++) {
                let opt = document.createElement('option');
                opt.value = m;
                opt.innerText = m;
                if (m === defMonth) opt.selected = true;
                monthSel.appendChild(opt);
            }
        }

        if (yearSel && yearSel.options.length === 0) {
            for (let y = 1940; y <= 2050; y++) {
                let opt = document.createElement('option');
                opt.value = y;
                opt.innerText = y;
                if (y === defYear) opt.selected = true;
                yearSel.appendChild(opt);
            }
        }

        if (hourSel && hourSel.options.length === 0) {
            for (let h = 0; h <= 23; h++) {
                let opt = document.createElement('option');
                opt.value = h;
                let h12 = h === 0 ? "12 AM" : h < 12 ? `${h} AM` : h === 12 ? "12 PM" : `${h - 12} PM`;
                opt.innerText = `${String(h).padStart(2, '0')} (${h12})`;
                if (h === 17) opt.selected = true;
                hourSel.appendChild(opt);
            }
        }

        if (minSel && minSel.options.length === 0) {
            for (let m = 0; m <= 59; m++) {
                let opt = document.createElement('option');
                opt.value = m;
                opt.innerText = String(m).padStart(2, '0');
                if (m === 42) opt.selected = true;
                minSel.appendChild(opt);
            }
        }

        if (countrySel && countrySel.options.length === 0) {
            WORLD_COUNTRIES.forEach(c => {
                let opt = document.createElement('option');
                opt.value = c.code;
                opt.innerText = `${c.en} (${c.te})`;
                if (c.code === 'IN') opt.selected = true;
                countrySel.appendChild(opt);
            });
        }
    }

    function initAllForms() {
        initFormSelectors('in');
        initFormSelectors('gc');
        initFormSelectors('mh');
        initMuhurtaForm();
        renderSavedProfiles();

        updateCoordsBadge('in', parseFloat(document.getElementById('inLat').value), parseFloat(document.getElementById('inLon').value));
        updateCoordsBadge('gc', parseFloat(document.getElementById('gcLat').value), parseFloat(document.getElementById('gcLon').value));
        updateCoordsBadge('mh', parseFloat(document.getElementById('mhLat').value), parseFloat(document.getElementById('mhLon').value));
        updatePanchangDateHint();
    }

    function saveBirthDetails() {
        let name = document.getElementById('inName').value.trim();
        if (!name) {
            alert('దయచేసి సేవ్ చేయడానికి ముందు పేరు నమోదు చేయండి.');
            return;
        }

        let profile = {
            id: Date.now(),
            name: name,
            gender: document.getElementById('inGender').value,
            day: document.getElementById('inDay').value,
            month: document.getElementById('inMonth').value,
            year: document.getElementById('inYear').value,
            hour: document.getElementById('inHour').value,
            min: document.getElementById('inMin').value,
            country: document.getElementById('inCountry').value,
            city: document.getElementById('inCityInput').value,
            lat: document.getElementById('inLat').value,
            lon: document.getElementById('inLon').value,
            tz: document.getElementById('inTz').value
        };

        let existing = JSON.parse(localStorage.getItem('vedic_saved_profiles') || '[]');
        existing.unshift(profile);
        localStorage.setItem('vedic_saved_profiles', JSON.stringify(existing));

        renderSavedProfiles();
        alert(`"${name}" గారి జన్మ వివరాలు సేవ్ చేయబడ్డాయి.`);
    }

    function renderSavedProfiles() {
        let existing = JSON.parse(localStorage.getItem('vedic_saved_profiles') || '[]');
        const box = document.getElementById('savedProfilesContainer');
        const list = document.getElementById('savedProfilesList');

        if (existing.length === 0) {
            box.style.display = 'none';
            return;
        }

        box.style.display = 'block';
        list.innerHTML = '';
        existing.forEach(p => {
            let chip = document.createElement('div');
            chip.className = 'saved-chip';
            chip.innerHTML = `<span onclick="loadSavedProfile(${p.id})">${p.name} (${p.day}-${p.month}-${p.year})</span> <span class="saved-chip-del" onclick="deleteSavedProfile(${p.id})">✕</span>`;
            list.appendChild(chip);
        });
    }

    function loadSavedProfile(id) {
        let existing = JSON.parse(localStorage.getItem('vedic_saved_profiles') || '[]');
        let p = existing.find(item => item.id === id);
        if (!p) return;

        document.getElementById('inName').value = p.name;
        document.getElementById('inGender').value = p.gender;
        document.getElementById('inDay').value = p.day;
        document.getElementById('inMonth').value = p.month;
        document.getElementById('inYear').value = p.year;
        document.getElementById('inHour').value = p.hour;
        document.getElementById('inMin').value = p.min;
        document.getElementById('inCountry').value = p.country;
        document.getElementById('inCityInput').value = p.city;
        document.getElementById('inLat').value = p.lat;
        document.getElementById('inLon').value = p.lon;
        document.getElementById('inTz').value = p.tz;
        updateCoordsBadge(parseFloat(p.lat), parseFloat(p.lon));
        generateHoroscope();
    }

    function deleteSavedProfile(id) {
        let existing = JSON.parse(localStorage.getItem('vedic_saved_profiles') || '[]');
        existing = existing.filter(item => item.id !== id);
        localStorage.setItem('vedic_saved_profiles', JSON.stringify(existing));
        renderSavedProfiles();
    }

        function onCountryChanged(prefix) {
        const code = document.getElementById(prefix + 'Country').value;
        const countryObj = WORLD_COUNTRIES.find(c => c.code === code);
        if (!countryObj) return;
        document.getElementById(prefix + 'Lat').value = countryObj.lat;
        document.getElementById(prefix + 'Lon').value = countryObj.lon;
        updateCoordsBadge(prefix, countryObj.lat, countryObj.lon);
        document.getElementById(prefix + 'CityInput').value = '';
        // దేశానికి సంబంధించిన టైమ్ జోన్ (DST సరిచూసుకుని)
        resolveTimezoneOffset(countryObj.lat, countryObj.lon, countryObj.tz).then(offset => {
            document.getElementById(prefix + 'Tz').value = offset;
        });
    }

        function updateCoordsBadge(prefix, lat, lon) {
        const target = document.getElementById(prefix + 'CoordsSummaryText');
        if (!target || isNaN(lat) || isNaN(lon)) return;
        let latDir = lat >= 0 ? 'N' : 'S';
        let lonDir = lon >= 0 ? 'E' : 'W';
        target.innerText = `${Math.abs(lat).toFixed(2)}° ${latDir}, ${Math.abs(lon).toFixed(2)}° ${lonDir}`;
    }

        function debouncedGlobalSearch(prefix) {
        clearTimeout(searchTimers[prefix]);
        searchTimers[prefix] = setTimeout(() => fetchGlobalLocations(prefix), 350);
    }

    async function fetchGlobalLocations(prefix) {
        const query = document.getElementById(prefix + 'CityInput').value.trim();
        const countryCode = document.getElementById(prefix + 'Country').value;
        const listBox = document.getElementById(prefix + 'CitySuggestions');

        if (query.length < 2) {
            listBox.style.display = 'none';
            return;
        }

        listBox.innerHTML = '<div class="search-status">ప్రపంచ స్థానాల జాబితాలో వెతుకుతోంది...</div>';
        listBox.style.display = 'block';

        try {
            let url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=15&language=te&format=json`;
            let response = await fetch(url);
            let data = await response.json();
            let results = data.results || [];

            if (results.length === 0) {
                let enUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=15&language=en&format=json`;
                let enResp = await fetch(enUrl);
                let enData = await enResp.json();
                results = enData.results || [];
            }

            let countryMatches = results.filter(r => r.country_code && r.country_code.toUpperCase() === countryCode);
            let finalResults = countryMatches.length > 0 ? countryMatches : results;

            if (finalResults.length === 0) {
                listBox.innerHTML = '<div class="search-status">సరిపోయే ప్రదేశాలు కనుగొనబడలేదు. వేరే పదంతో ప్రయత్నించండి.</div>';
                return;
            }

            listBox.innerHTML = '';
            finalResults.forEach(place => {
                let parts = [];
                if (place.name) parts.push(place.name);
                if (place.admin2 && place.admin2 !== place.name) parts.push(place.admin2);
                if (place.admin1 && place.admin1 !== place.admin2) parts.push(place.admin1);
                if (place.country) parts.push(place.country);

                let displayLabel = parts.join(', ');

                let div = document.createElement('div');
                div.className = 'autocomplete-item';
                div.innerText = displayLabel;
                div.onclick = async () => {
                    document.getElementById(prefix + 'CityInput').value = displayLabel;
                    document.getElementById(prefix + 'Lat').value = place.latitude.toFixed(4);
                    document.getElementById(prefix + 'Lon').value = place.longitude.toFixed(4);
                    updateCoordsBadge(prefix, place.latitude, place.longitude);

                    if (place.country_code) {
                        let cCode = place.country_code.toUpperCase();
                        let cSelect = document.getElementById(prefix + 'Country');
                        if ([...cSelect.options].some(o => o.value === cCode)) {
                            cSelect.value = cCode;
                        }
                    }

                    let tzOffset = await resolveTimezoneOffset(place.latitude, place.longitude, place.timezone);
                    document.getElementById(prefix + 'Tz').value = tzOffset;
                    listBox.style.display = 'none';
                };
                listBox.appendChild(div);
            });
        } catch (err) {
            listBox.innerHTML = '<div class="search-status">అంతర్జాల అనుసంధాన లోపం. దయచేసి మళ్లీ ప్రయత్నించండి.</div>';
        }
    }

    async function resolveTimezoneOffset(lat, lon, tzName) {
        if (tzName) {
            try {
                let now = new Date();
                let utcStr = now.toLocaleString('en-US', { timeZone: 'UTC' });
                let locStr = now.toLocaleString('en-US', { timeZone: tzName });
                let diffHours = (new Date(locStr) - new Date(utcStr)) / 3600000;
                return Math.round(diffHours * 4) / 4;
            } catch (e) {}
        }
        return Math.round((lon / 15) * 2) / 2;
    }

    document.addEventListener('click', function(e) {
        ['in', 'gc'].forEach(prefix => {
            const input = document.getElementById(prefix + 'CityInput');
            const list = document.getElementById(prefix + 'CitySuggestions');
            if (input && list && e.target !== input && !list.contains(e.target)) {
                list.style.display = 'none';
            }
        });
    });

        function toggleCoordsPanel(prefix) {
        const panel = document.getElementById(prefix + 'CoordsPanel');
        if (!panel) return;
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }

    function showPage(pageId) {
        if (pageId === 'jatakamPage') { try { profPrefillJatakam(); } catch (e) { } }
        ['homePage', 'jatakamPage', 'gocharamPage', 'muhurtamPage', 'astrologersPage', 'booksPage', 'karmaPage', 'astroPanelPage'].forEach(id => {
            document.getElementById(id).style.display = 'none';
        });
        document.getElementById(pageId).style.display = 'block';
        const homeBtn = document.getElementById('homeBtn');
        const emblem = document.getElementById('homeEmblem');

        if (emblem) emblem.style.display = (pageId === 'homePage') ? 'flex' : 'none';

        // వెబ్‌సైట్ నావిగేషన్‌లో యాక్టివ్ లింక్‌ను హైలైట్ చేయడం
        document.querySelectorAll('.nav-link, .drawer-link').forEach(function (link) {
            link.classList.toggle('active', link.dataset.page === pageId);
        });

        if (pageId === 'homePage') {
            if (homeBtn) homeBtn.style.display = 'none';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            if (homeBtn) homeBtn.style.display = 'inline-block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // పంచాంగం పేజీ తెరిచిన వెంటనే ఆ రోజు పంచాంగం కనిపించాలి
            if (pageId === 'gocharamPage') {
                const daySel = document.getElementById('gcDay');
                if (daySel && daySel.options.length) generatePanchangam(false);
            }
            if (pageId === 'astrologersPage' && typeof renderAstro === 'function') renderAstro(true);
        }
    }

        function detectGPSLocation(prefix) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                document.getElementById(prefix + 'Lat').value = pos.coords.latitude.toFixed(4);
                document.getElementById(prefix + 'Lon').value = pos.coords.longitude.toFixed(4);
                const tzOffset = -(new Date().getTimezoneOffset() / 60);
                document.getElementById(prefix + 'Tz').value = tzOffset;
                document.getElementById(prefix + 'CityInput').value = 'ప్రస్తుత స్థానం';
                updateCoordsBadge(prefix, pos.coords.latitude, pos.coords.longitude);
            }, () => {
                alert('స్థానం గుర్తించబడలేదు. దయచేసి గ్రామం లేదా నగరం పేరు టైప్ చేయండి.');
            });
        }
    }

    function norm360(deg) {
        let d = deg % 360;
        return d < 0 ? d + 360 : d;
    }

    function formatDegMinColon(deg) {
        let d = Math.floor(deg);
        let m = Math.floor((deg - d) * 60);
        return `${String(d).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    }

    function formatDegMinSymbol(deg) {
        let d = Math.floor(deg);
        let m = Math.floor((deg - d) * 60);
        return `${String(d).padStart(2, '0')}°${String(m).padStart(2, '0')}'`;
    }

    function calculateEphemeris(year, month, day, hour24, min, lat, lon, tz) {
        let utHour = hour24 + (min / 60) - tz;
        let y = year, m = month, d = day + (utHour / 24);
        if (m <= 2) { y -= 1; m += 12; }
        let A = Math.floor(y / 100);
        let B = 2 - A + Math.floor(A / 4);
        let jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
        let T = (jd - 2451545.0) / 36525.0;
        let d2000 = jd - 2451545.0;

        let ayanamsha = 23.853056 + (1.396971 * T) + (0.000308 * T * T);
        window.__ayanamsaUsed = ayanamsha;

        // ================= ఖచ్చితమైన గ్రహస్థానాలు =================
        // Astronomy Engine (MIT) — VSOP87 ఆధారిత గ్రహ గణన, ఖచ్చితత్వం సుమారు 1 నిమిషం కోణం.
        let sunNirayana, moonNirayana, rahuNirayana, ketuNirayana;
        let marsObj, mercObj, jupObj, venObj, satObj;
        const hasAstro = (typeof Astronomy !== 'undefined' && Astronomy.GeoVector && Astronomy.Rotation_EQJ_ECT);
        let astroDt = null;

        if (hasAstro) {
            const utMs = Date.UTC(1970, 0, 1) + ((jd - 2440587.5) * 86400000);
            const dt = new Date(utMs);
            astroDt = dt;
            const rot = Astronomy.Rotation_EQJ_ECT(dt);
            const B = Astronomy.Body;

            const lonOf = (body, when) => {
                const vec = Astronomy.GeoVector(body, when, true);
                const v = Astronomy.RotateVector(rot, vec);
                let l = Math.atan2(v.y, v.x) * 180 / Math.PI;
                return norm360(l - ayanamsha);
            };

            const bodyWithRetro = (body) => {
                const cur = lonOf(body, dt);
                const nxt = lonOf(body, new Date(utMs + 86400000));
                let diff = nxt - cur;
                if (diff > 180) diff -= 360;
                if (diff < -180) diff += 360;
                return { lon: cur, retro: diff < 0 };
            };

            sunNirayana = lonOf(B.Sun, dt);
            moonNirayana = lonOf(B.Moon, dt);
            marsObj = bodyWithRetro(B.Mars);
            mercObj = bodyWithRetro(B.Mercury);
            jupObj = bodyWithRetro(B.Jupiter);
            venObj = bodyWithRetro(B.Venus);
            satObj = bodyWithRetro(B.Saturn);

            // రాహువు — సగటు పాత (Mean Node), Meeus సూత్రం
            rahuNirayana = norm360(125.0445479 - 1934.1362891 * T + 0.0020754 * T * T
                                   + (T * T * T) / 467441 - (T * T * T * T) / 60616000 - ayanamsha);
            ketuNirayana = norm360(rahuNirayana + 180);
        } else {
            // లైబ్రరీ లోడ్ కానప్పుడు పాత (సుమారైన) గణన
            const legacy = (function () {
        let L0 = norm360(280.46646 + 36000.76983 * T + 0.0003032 * T * T);
        let M = norm360(357.52911 + 35999.05029 * T - 0.0001537 * T * T);
        let Mrad = M * Math.PI / 180;
        let C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(Mrad)
              + (0.019993 - 0.000101 * T) * Math.sin(2 * Mrad)
              + 0.000289 * Math.sin(3 * Mrad);
        let sunTrop = norm360(L0 + C);
        let sunNirayana = norm360(sunTrop - ayanamsha);

        let Lp = norm360(218.3164477 + 481267.88123421 * T - 0.0015786 * T * T);
        let D = norm360(297.8501921 + 445267.1114034 * T - 0.0018819 * T * T);
        let Mp = norm360(134.9633964 + 477198.8675055 * T + 0.0087414 * T * T);
        let F = norm360(93.2720950 + 483202.0175233 * T - 0.0036539 * T * T);

        let Dr = D * Math.PI / 180, Mr = M * Math.PI / 180, Mpr = Mp * Math.PI / 180, Fr = F * Math.PI / 180;
        let moonCorr = 6.288774 * Math.sin(Mpr)
                     + 1.274027 * Math.sin(2 * Dr - Mpr)
                     + 0.658314 * Math.sin(2 * Dr)
                     + 0.213618 * Math.sin(2 * Mpr)
                     - 0.185116 * Math.sin(Mr)
                     - 0.114332 * Math.sin(2 * Fr)
                     + 0.058793 * Math.sin(2 * Dr - 2 * Mpr)
                     + 0.057066 * Math.sin(2 * Dr - Mr - Mpr)
                     + 0.053322 * Math.sin(2 * Dr + Mpr);
        let moonTrop = norm360(Lp + moonCorr);
        let moonNirayana = norm360(moonTrop - ayanamsha);

        let rahuTrop = norm360(125.04452 - 1934.136261 * T + 0.0020708 * T * T);
        let rahuNirayana = norm360(rahuTrop - ayanamsha);
        let ketuNirayana = norm360(rahuNirayana + 180);

        function solvePlanetAt(dVal, N, i, w, a, e, M0, n) {
            let M_p = norm360(M0 + n * dVal) * Math.PI / 180;
            let E = M_p + e * Math.sin(M_p) * (1.0 + e * Math.cos(M_p));
            for (let k = 0; k < 6; k++) {
                E = E - (E - e * Math.sin(E) - M_p) / (1 - e * Math.cos(E));
            }
            let xv = a * (Math.cos(E) - e);
            let yv = a * (Math.sqrt(1.0 - e * e) * Math.sin(E));
            let v = Math.atan2(yv, xv);
            let r = Math.sqrt(xv * xv + yv * yv);

            let Nr = N * Math.PI / 180, ir = i * Math.PI / 180, wr = w * Math.PI / 180;
            let xh = r * (Math.cos(Nr) * Math.cos(v + wr) - Math.sin(Nr) * Math.sin(v + wr) * Math.cos(ir));
            let yh = r * (Math.sin(Nr) * Math.cos(v + wr) + Math.cos(Nr) * Math.sin(v + wr) * Math.cos(ir));

            let T_n = dVal / 36525.0;
            let L0_n = norm360(280.46646 + 36000.76983 * T_n + 0.0003032 * T_n * T_n);
            let M_n = norm360(357.52911 + 35999.05029 * T_n - 0.0001537 * T_n * T_n) * Math.PI / 180;
            let C_n = (1.914602 - 0.004817 * T_n) * Math.sin(M_n) + 0.019993 * Math.sin(2 * M_n);
            let sunT_n = norm360(L0_n + C_n) * Math.PI / 180;
            let R_earth = 1.00014 - 0.01671 * Math.cos(M_n);
            let xe = -R_earth * Math.cos(sunT_n);
            let ye = -R_earth * Math.sin(sunT_n);

            let ay_n = 23.853056 + (1.396971 * T_n) + (0.000308 * T_n * T_n);
            return norm360(Math.atan2(yh - ye, xh - xe) * 180 / Math.PI - ay_n);
        }

        function getPlanetWithRetro(N, i, w, a, e, M0, n) {
            let cur = solvePlanetAt(d2000, N, i, w, a, e, M0, n);
            let nxt = solvePlanetAt(d2000 + (1 / 24), N, i, w, a, e, M0, n);
            let diff = nxt - cur;
            if (diff < -180) diff += 360;
            if (diff > 180) diff -= 360;
            return { lon: cur, retro: diff < 0 };
        }

        let marsObj = getPlanetWithRetro(49.558, 1.8497, 286.502, 1.523688, 0.093405, 18.6021, 0.5240207766);
        let mercObj = getPlanetWithRetro(48.331, 7.0049, 29.124, 0.387098, 0.205635, 168.6562, 4.0923344368);
        let jupObj  = getPlanetWithRetro(100.464, 1.3033, 273.867, 5.20260, 0.048498, 19.8950, 0.0830853001);
        let venObj  = getPlanetWithRetro(76.680, 3.3947, 54.884, 0.723330, 0.006773, 48.0052, 1.6021302244);
        let satObj  = getPlanetWithRetro(113.665, 2.4889, 339.392, 9.55491, 0.055546, 316.9670, 0.0334442282);
                return {
                    sun: sunNirayana, moon: moonNirayana, rahu: rahuNirayana, ketu: ketuNirayana,
                    mars: marsObj, merc: mercObj, jup: jupObj, ven: venObj, sat: satObj
                };
            })();
            sunNirayana = legacy.sun;
            moonNirayana = legacy.moon;
            rahuNirayana = legacy.rahu;
            ketuNirayana = legacy.ketu;
            marsObj = legacy.mars;
            mercObj = legacy.merc;
            jupObj = legacy.jup;
            venObj = legacy.ven;
            satObj = legacy.sat;
        }


        // లగ్నం: స్పష్ట సైడ్రియల్ సమయం (apparent sidereal time) + నిజ అక్షాంశం (true obliquity)
        let gmst;
        if (hasAstro && astroDt) {
            gmst = norm360(Astronomy.SiderealTime(astroDt) * 15);
        } else {
            gmst = norm360(280.46061837 + 360.98564736629 * d2000 + 0.000387933 * T * T);
        }
        let lst = norm360(gmst + lon);
        let lstRad = lst * Math.PI / 180;
        let omegaDeg = 125.0445479 - 1934.1362891 * T;
        let epsDeg = 23.4392911 - 0.0130041667 * T - 1.638e-7 * T * T + 5.036e-7 * T * T * T
                   + (9.20 / 3600) * Math.cos(omegaDeg * Math.PI / 180);
        let eps = epsDeg * Math.PI / 180;
        let latRad = lat * Math.PI / 180;

        let yAsc = Math.cos(lstRad);
        let xAsc = -(Math.sin(lstRad) * Math.cos(eps) + Math.tan(latRad) * Math.sin(eps));
        let ascTrop = norm360(Math.atan2(yAsc, xAsc) * 180 / Math.PI);
        let lagnaNirayana = norm360(ascTrop - ayanamsha);

        function checkCombust(pLon, limit) {
            let diff = Math.abs(pLon - sunNirayana);
            if (diff > 180) diff = 360 - diff;
            return diff < limit;
        }

        function buildBody(name, short, lonDeg, retro, combust, isLagna = false) {
            let rasiIdx = Math.floor(lonDeg / 30);
            let degInRasi = lonDeg % 30;
            let nakTotal = lonDeg / (360 / 27);
            let nakIdx = Math.floor(nakTotal);
            let pada = Math.floor((nakTotal - nakIdx) * 4) + 1;
            let navamshaIdx = Math.floor((lonDeg / (360 / 108))) % 12;

            return {
                name, short, lon: lonDeg,
                rasiIdx, rasiShort: RASI_FULL[rasiIdx].replace('ం', '').replace('స్సు', ''),
                rasiFull: RASI_FULL[rasiIdx],
                degColon: formatDegMinColon(degInRasi),
                degSym: formatDegMinSymbol(degInRasi),
                nak: NAK_NAMES[nakIdx],
                pada,
                nakLord: NAK_LORDS[nakIdx],
                navamsha: RASI_FULL[navamshaIdx].replace('ం', '').replace('స్సు', ''),
                retro, combust, isLagna
            };
        }

        let planets = [
            buildBody("సూర్య", "సూ", sunNirayana, false, false),
            buildBody("చంద్ర", "చం", moonNirayana, false, false),
            buildBody("కుజ", "కు", marsObj.lon, marsObj.retro, checkCombust(marsObj.lon, 17)),
            buildBody("బుధ", "బు", mercObj.lon, mercObj.retro, checkCombust(mercObj.lon, 14)),
            buildBody("గురు", "గు", jupObj.lon, jupObj.retro, checkCombust(jupObj.lon, 11)),
            buildBody("శుక్ర", "శు", venObj.lon, venObj.retro, checkCombust(venObj.lon, 10)),
            buildBody("శని", "శ", satObj.lon, satObj.retro, checkCombust(satObj.lon, 15)),
            buildBody("రాహు", "రా", rahuNirayana, true, false),
            buildBody("కేతు", "కే", ketuNirayana, true, false),
            buildBody("లగ్నం", "ల", lagnaNirayana, false, false, true)
        ];

        let diffMoonSun = norm360(moonNirayana - sunNirayana);
        let tithiIdx = Math.floor(diffMoonSun / 12);
        let karanaIdx = Math.floor(diffMoonSun / 6);
        let karanaName = karanaIdx === 0 ? "కింస్తుఘ్న" : karanaIdx >= 57 ? KARANA_NAMES[karanaIdx - 50] : KARANA_NAMES[(karanaIdx - 1) % 7];

        let sumMoonSun = norm360(moonNirayana + sunNirayana);
        let yogaIdx = Math.floor(sumMoonSun / (360 / 27));

        let dateObj = new Date(year, month - 1, day);
        let varaName = VARA_NAMES[dateObj.getDay()];

        return {
            planets,
            tithi: TITHI_NAMES[tithiIdx],
            vara: varaName,
            yoga: YOGA_NAMES[yogaIdx],
            karana: karanaName,
            moonLon: moonNirayana,
            lagnaRasi: Math.floor(lagnaNirayana / 30)
        };
    }



    // ================= షడ్బల (స్థూల గ్రహ బలం) =================
    const OWN_SIGNS = { 'సూర్య': [4], 'చంద్ర': [3], 'కుజ': [0, 7], 'బుధ': [2, 5], 'గురు': [8, 11], 'శుక్ర': [1, 6], 'శని': [9, 10] };
    const EXALT = { 'సూర్య': 0, 'చంద్ర': 1, 'కుజ': 9, 'బుధ': 5, 'గురు': 3, 'శుక్ర': 11, 'శని': 6 };
    const DEBIL = { 'సూర్య': 6, 'చంద్ర': 7, 'కుజ': 3, 'బుధ': 11, 'గురు': 9, 'శుక్ర': 5, 'శని': 0 };

    function planetStrength(p, lagna, isDayBirth) {
        let score = 30;
        const own = OWN_SIGNS[p.name] || [];
        if (EXALT[p.name] === p.rasiIdx) score += 25;
        else if (DEBIL[p.name] === p.rasiIdx) score -= 20;
        else if (own.indexOf(p.rasiIdx) > -1) score += 15;

        const house = ((p.rasiIdx - lagna + 12) % 12) + 1;
        if ([1, 4, 7, 10].indexOf(house) > -1) score += 10;       // కేంద్రం
        else if ([5, 9].indexOf(house) > -1) score += 12;          // త్రికోణం
        else if ([6, 8, 12].indexOf(house) > -1) score -= 10;      // దుష్టస్థానం

        if (p.retro) score += 5;
        if (p.combust) score -= 15;
        if (!isDayBirth && ['చంద్ర', 'శుక్ర', 'శని'].indexOf(p.name) > -1) score += 5;
        if (isDayBirth && ['సూర్య', 'గురు', 'కుజ'].indexOf(p.name) > -1) score += 5;

        score = Math.max(5, Math.min(95, score));
        let label = 'మధ్యస్థం';
        if (score >= 70) label = 'బలం';
        else if (score >= 50) label = 'మంచి';
        else if (score < 30) label = 'బలహీనం';
        return { score: score, label: label, house: house };
    }

    function renderShadbala(isDayBirth) {
        const box = document.getElementById('shadbalaOut');
        if (!box || !currentPlanets || !currentPlanets.length) return;
        const rows = currentPlanets.filter(p => !p.isLagna).map(p => {
            const st = planetStrength(p, currentLagnaRasi, isDayBirth);
            return `<tr>
                <td><b>${p.name}</b></td>
                <td>${p.rasiFull}</td>
                <td style="text-align:center;">${st.house}</td>
                <td>
                    <div style="background:#f0e6d2;border-radius:6px;height:9px;width:100%;overflow:hidden;">
                        <div style="height:9px;width:${st.score}%;background:${st.score >= 60 ? '#1f6f43' : (st.score >= 40 ? '#d97706' : '#b3221f')};"></div>
                    </div>
                    <div style="font-size:0.72rem;color:#6f4a2e;margin-top:2px;">${st.label} · ${st.score}/100</div>
                </td>
            </tr>`;
        }).join('');
        box.innerHTML = `<div style="overflow-x:auto;">
            <table class="clean-table">
                <thead><tr><th>గ్రహం</th><th>రాశి</th><th>భావం</th><th>బలం</th></tr></thead>
                <tbody>${rows}</tbody>
            </table></div>`;
    }

    // దశ తేదీలను చదవడం ("dd-mm-yyyy hh:mm:ss ఉదయం/సాయంత్రం")
    function parseLrDate(str) {
        const m = String(str || '').match(/(\d{2})-(\d{2})-(\d{4})\s+(\d{2}):(\d{2}):(\d{2})\s*(ఉదయం|సాయంత్రం)/);
        if (!m) return null;
        let h = parseInt(m[4], 10);
        if (m[7] === 'సాయంత్రం' && h < 12) h += 12;
        if (m[7] === 'ఉదయం' && h === 12) h = 0;
        return new Date(+m[3], +m[2] - 1, +m[1], h, +m[5], +m[6]).getTime();
    }

    function currentDashaLine() {
        if (typeof dashaSchedule === 'undefined' || !dashaSchedule.length) return '';
        const now = Date.now();
        for (const d of dashaSchedule) {
            const st = parseLrDate(d.start), en = parseLrDate(d.end);
            if (st === null || en === null) continue;
            if (now >= st && now <= en) {
                let bLine = '';
                (d.bhuktis || []).forEach(b => {
                    const bs = parseLrDate(b.start), be = parseLrDate(b.end);
                    if (bs !== null && be !== null && now >= bs && now <= be) {
                        bLine = b.title.replace('మ.: ', '').replace(' — భుక్తి: ', ' మహాదశ · ').replace('భుక్తి:', 'భుక్తి:');
                    }
                });
                return { maha: d.lordName, range: d.start + ' — ' + d.end, bhukti: bLine };
            }
        }
        return '';
    }

    // ================= జాతక ఫలితాలు (వ్యక్తిగత అంశాలు) =================
    const LAGNA_TRAITS = [
        'మేష లగ్నం — ఉత్సాహం, ధైర్యం మరియు ముందడుగు వేయడం మీ స్వభావం. మొదట చొరవ తీసుకుంటారు, కానీ ఆవేశంలో నిర్ణయాలు తీసుకోకుండా ఉండాలి.',
        'వృషభ లగ్నం — స్థిరత్వం, ఓర్పు మరియు ఆర్థిక భద్రత పట్ల శ్రద్ధ మీ లక్షణం. మీరు నెమ్మదిగా మొదలుపెట్టినా దృఢంగా నిలబడతారు.',
        'మిథున లగ్నం — చురుకైన మనస్సు, మాటల నైపుణ్యం, కుతూహలం మీ బలాలు. ఒకేసారి చాలా పనులు చేపట్టి మధ్యలో ఆపకుండా ఉండాలి.',
        'కర్కాటక లగ్నం — కుటుంబం, ఆప్యాయత, జ్ఞాపకశక్తి మీకు ముఖ్యం. భావోద్వేగాలు ఎక్కువగా ప్రభావితం చేస్తాయి; మనసును ప్రశాంతంగా ఉంచుకోవడం మేలు.',
        'సింహ లగ్నం — నాయకత్వం, గౌరవం, ఆత్మాభిమానం మీ స్వభావం. మీ మాటకు విలువ ఉంటుంది; అహంకారం రాకుండా చూసుకోవాలి.',
        'కన్యా లగ్నం — క్రమశిక్షణ, విశ్లేషణ, వివరాల పట్ల శ్రద్ధ మీ బలం. పరిపూర్ణత కోరుకుంటూ ఎక్కువగా విమర్శించుకోకండి.',
        'తుల లగ్నం — సమతుల్యత, సౌందర్యం, సంబంధాలలో న్యాయం మీ లక్షణం. ఇతరులను సంతోషపెట్టాలనే ప్రయత్నంలో మీ అవసరాలను మరచిపోకండి.',
        'వృశ్చిక లగ్నం — లోతైన ఏకాగ్రత, రహస్యాల పట్ల ఆసక్తి, దృఢ సంకల్పం మీ బలాలు. అనుమానం పెంచుకోకుండా నమ్మకాన్ని పెంచుకోవడం మేలు.',
        'ధనుస్సు లగ్నం — ఆశావాదం, ధర్మబుద్ధి, ప్రయాణం మరియు జ్ఞానం పట్ల ఆసక్తి మీ స్వభావం. మాటలో మితంగా ఉండడం మీకు మంచిది.',
        'మకర లగ్నం — కష్టపడి పనిచేయడం, లక్ష్యం, బాధ్యత మీ బలాలు. విశ్రాంతి తీసుకోవడం మరచిపోకండి.',
        'కుంభ లగ్నం — స్వతంత్ర ఆలోచన, సమాజ సేవ, కొత్త ఆలోచనలు మీ లక్షణం. భావోద్వేగాలను పంచుకోవడం నేర్చుకోండి.',
        'మీన లగ్నం — కరుణ, భక్తి, కల్పనాశక్తి మీ బలాలు. ఇతరుల బాధలను మోయకుండా సరిహద్దులు ఉంచుకోవడం అవసరం.'
    ];
    const MOON_TRAITS = [
        'చంద్రుడు మేషంలో — మనస్సు చురుకుగా, ఆతురతగా ఉంటుంది. త్వరగా నిర్ణయించుకుంటారు.',
        'చంద్రుడు వృషభంలో — మనస్సు ప్రశాంతంగా, స్థిరంగా ఉంటుంది. భద్రత కావాలని కోరుతారు.',
        'చంద్రుడు మిథునంలో — మనస్సు ఆలోచనలతో నిండి ఉంటుంది. మాటల ద్వారా భావాలు వ్యక్తం చేస్తారు.',
        'చంద్రుడు కర్కాటకంలో — మనస్సు సున్నితం, కుటుంబ బంధం బలంగా ఉంటుంది.',
        'చంద్రుడు సింహంలో — మనస్సు గౌరవాన్ని కోరుతుంది. హృదయం ఉదారంగా ఉంటుంది.',
        'చంద్రుడు కన్యలో — మనస్సు వివరాలను గమనిస్తుంది. శ్రద్ధ ఎక్కువ, ఆందోళన కూడా కొంత.',
        'చంద్రుడు తులలో — మనస్సు సమతుల్యతను, స్నేహాన్ని కోరుతుంది.',
        'చంద్రుడు వృశ్చికంలో — మనస్సు లోతుగా ఆలోచిస్తుంది. భావాలు బలంగా ఉంటాయి.',
        'చంద్రుడు ధనుస్సులో — మనస్సు ఆశావాదంగా, స్వేచ్ఛను కోరుతూ ఉంటుంది.',
        'చంద్రుడు మకరంలో — మనస్సు క్రమశిక్షణతో, లక్ష్యంపై దృష్టితో ఉంటుంది.',
        'చంద్రుడు కుంభంలో — మనస్సు వేరుగా ఆలోచిస్తుంది. స్వతంత్రం ఇష్టం.',
        'చంద్రుడు మీనంలో — మనస్సు కరుణతో, భక్తితో నిండి ఉంటుంది.'
    ];
    const LAGNA_LORD_INFO = [
        { lord: 'కుజుడు', day: 'మంగళవారం', colour: 'ఎరుపు', num: 9 },
        { lord: 'శుక్రుడు', day: 'శుక్రవారం', colour: 'తెలుపు', num: 6 },
        { lord: 'బుధుడు', day: 'బుధవారం', colour: 'ఆకుపచ్చ', num: 5 },
        { lord: 'చంద్రుడు', day: 'సోమవారం', colour: 'వెండి తెలుపు', num: 2 },
        { lord: 'సూర్యుడు', day: 'ఆదివారం', colour: 'నారింజ', num: 1 },
        { lord: 'బుధుడు', day: 'బుధవారం', colour: 'ఆకుపచ్చ', num: 5 },
        { lord: 'శుక్రుడు', day: 'శుక్రవారం', colour: 'తెలుపు', num: 6 },
        { lord: 'కుజుడు', day: 'మంగళవారం', colour: 'ఎరుపు', num: 9 },
        { lord: 'గురుడు', day: 'గురువారం', colour: 'పసుపు', num: 3 },
        { lord: 'శని', day: 'శనివారం', colour: 'నీలం', num: 8 },
        { lord: 'శని', day: 'శనివారం', colour: 'నీలం', num: 8 },
        { lord: 'గురుడు', day: 'గురువారం', colour: 'పసుపు', num: 3 }
    ];

    function renderJatakaPhalalu() {
        const box = document.getElementById('jatakaPhalalu');
        if (!box || !currentPlanets || !currentPlanets.length) return;

        const moon = currentPlanets[1] || {};
        const lagna = currentLagnaRasi;
        const lord = LAGNA_LORD_INFO[lagna] || LAGNA_LORD_INFO[0];

        // ప్రస్తుతం నడుస్తున్న మహాదశ/భుక్తి
        const cur = (typeof currentDashaLine === 'function') ? currentDashaLine() : '';

        // బలహీన / ప్రత్యేక గ్రహాలు
        const retro = currentPlanets.filter(p => p.retro && !p.isLagna).map(p => p.name);
        const combust = currentPlanets.filter(p => p.combust && !p.isLagna).map(p => p.name);

        const block = (title, body) => `<div class="card-box" style="margin-bottom: 10px;">
            <div class="section-heading" style="font-size: 0.95rem; margin-bottom: 6px;">${title}</div>
            <p class="info-meaning" style="line-height: 1.75;">${body}</p></div>`;

        let html = '';
        html += block('🪔 లగ్న స్వభావం', LAGNA_TRAITS[lagna] || '');
        html += block('🌙 మనస్సు మరియు భావాలు', MOON_TRAITS[moon.rasiIdx] || '');
        if (cur) {
            const dLord = DASHA_LORDS.find(x => x.name === cur.maha);
            const dText = 'ఇప్పుడు <b>' + cur.maha + ' మహాదశ</b>' + (cur.bhukti ? ' లో <b>' + cur.bhukti + '</b>' : '') + ' నడుస్తోంది.'
                + (dLord ? ' ' + cur.maha + ' ' + dLord.name + ' గ్రహ స్వభావం ప్రకారం ఈ కాలంలో ' + (dLord.name === 'శని' ? 'ఓర్పు, క్రమశిక్షణ మరియు నెమ్మదైన పురోగతి' : dLord.name === 'గురు' ? 'జ్ఞానం, విస్తరణ మరియు శుభ యోగాలు' : dLord.name === 'శుక్ర' ? 'సంబంధాలు, సౌందర్యం మరియు సుఖాలు' : dLord.name === 'సూర్య' ? 'గౌరవం, నాయకత్వం మరియు ఆత్మవిశ్వాసం' : dLord.name === 'చంద్ర' ? 'మనస్సు, కుటుంబం మరియు భావోద్వేగాలు' : dLord.name === 'కుజ' ? 'ధైర్యం, పోరాటం మరియు ఆస్తి విషయాలు' : dLord.name === 'బుధ' ? 'బుద్ధి, వ్యాపారం మరియు మాటల నైపుణ్యం' : 'పరివర్తనలు మరియు లోతైన అనుభవాలు') + ' ముఖ్యమవుతాయి.' : '')
                + ' కాల వ్యవధి: ' + cur.range + '.';
            html += block('⏳ ప్రస్తుత దశ', dText);
        }

        let grahaText = '';
        if (retro.length) grahaText += 'వక్రి గతిలో ఉన్న గ్రహాలు: ' + retro.join(', ') + ' — ఈ విషయాల్లో నెమ్మదిగా, ఆలోచించి నిర్ణయం తీసుకోవడం మేలు. ';
        if (combust.length) grahaText += 'అస్తంగత్వంలో ఉన్న గ్రహాలు: ' + combust.join(', ') + ' — వాటి ఫలితాలు కొద్దిగా బలహీనంగా ఉండవచ్చు. ';
        if (!grahaText) grahaText = 'గ్రహాలన్నీ సాధారణ స్థితిలో ఉన్నాయి — ఇది శుభ సూచన.';
        html += block('🪐 గ్రహ స్థితి', grahaText);

        // గ్రహ స్థానాలు — భావం ప్రకారం విపుల వివరాలు
        const PLANET_MEANING = {
            'సూర్య': 'ఆత్మ, తండ్రి, ఆరోగ్యం, గౌరవం',
            'చంద్ర': 'మనస్సు, తల్లి, భావాలు, ప్రజాదరణ',
            'కుజ': 'ధైర్యం, సోదరులు, ఆస్తి, శక్తి',
            'బుధ': 'బుద్ధి, విద్య, వ్యాపారం, సంభాషణ',
            'గురు': 'జ్ఞానం, గురువు, ధనం, విస్తరణ',
            'శుక్ర': 'సుఖం, కళ, జీవిత భాగస్వామి, ఆర్థికం',
            'శని': 'క్రమశిక్షణ, కష్టం, ఆయుష్షు, సేవ',
            'రాహు': 'ఆశలు, విదేశ యోగం, అనుమానాలు',
            'కేతు': 'ఆధ్యాత్మికత, వైరాగ్యం, మోక్షం'
        };
        let posRows = '';
        currentPlanets.filter(p => !p.isLagna).forEach(p => {
            const house = ((p.rasiIdx - lagna + 12) % 12) + 1;
            const st = planetStrength(p, lagna, true);
            const tone = st.score >= 60 ? 'అనుకూలం' : (st.score >= 40 ? 'మధ్యస్థం' : 'శ్రద్ధ అవసరం');
            posRows += '<tr><td><b>' + p.name + '</b></td><td>' + p.rasiFull + '</td>'
                + '<td style="text-align:center;">' + house + '</td>'
                + '<td>' + (PLANET_MEANING[p.name] || '') + '</td>'
                + '<td>' + tone + '</td></tr>';
        });
        html += '<div class="card-box" style="margin-bottom:10px;">'
            + '<div class="section-heading" style="font-size:0.95rem;margin-bottom:6px;">🧭 గ్రహ స్థానాలు — భావ ఫలితాలు</div>'
            + '<div style="overflow-x:auto;"><table class="clean-table"><thead><tr>'
            + '<th>గ్రహం</th><th>రాశి</th><th>భావం</th><th>సూచించే విషయాలు</th><th>స్థితి</th>'
            + '</tr></thead><tbody>' + posRows + '</tbody></table></div>'
            + '<div class="hint-text" style="margin-top:6px;">భావం = లగ్నం నుంచి లెక్కించిన స్థానం. స్థితి = స్థూల గ్రహ బలం ఆధారంగా.</div></div>';

        html += block('🍀 శుభ సూచనలు',
            'మీ లగ్నాధిపతి ' + lord.lord + '. శుభ దినం: ' + lord.day + '. శుభ రంగు: ' + lord.colour + '. శుభ సంఖ్య: ' + lord.num + '.');

        html += block('🤲 సలహా',
            'జాతకం విధి శాసనం కాదు — మన గత కర్మల ప్రతిబింబం. ధర్మం, సేవ, భక్తి ద్వారా కర్మ భారం తగ్గుతుంది. ' +
            'ముఖ్యమైన నిర్ణయాలకు పురోహితులను సంప్రదించి, మీ కుటుంబ పంచాంగం ప్రకారం నిర్ణయించుకోండి.');

        box.innerHTML = html;
    }

    function generateHoroscope() {
        let name = document.getElementById('inName').value.trim() || "సూర్యారాం";
        let gender = document.getElementById('inGender').value;
        let day = parseInt(document.getElementById('inDay').value);
        let month = parseInt(document.getElementById('inMonth').value);
        let year = parseInt(document.getElementById('inYear').value);
        let hour24 = parseInt(document.getElementById('inHour').value);
        let min = parseInt(document.getElementById('inMin').value);
        let city = document.getElementById('inCityInput').value;
        let lat = parseFloat(document.getElementById('inLat').value);
        let lon = parseFloat(document.getElementById('inLon').value);
        let tz = parseFloat(document.getElementById('inTz').value);

        let res = calculateEphemeris(year, month, day, hour24, min, lat, lon, tz);
        currentPlanets = res.planets;
        currentLagnaRasi = res.lagnaRasi;

        document.getElementById('resultsBox').style.display = 'block';

        // Table 1 (Degree)
        let t1Body = document.getElementById('planetsTable1Body');
        t1Body.innerHTML = '';
        res.planets.forEach(p => {
            let statusArr = [];
            if (p.retro && p.name !== 'రాహు' && p.name !== 'కేతు') statusArr.push('వ');
            if (p.combust) statusArr.push('అ');
            let statusStr = statusArr.length > 0 ? statusArr.join(', ') : '-';

            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${p.name}</td>
                <td>${statusStr}</td>
                <td>${p.rasiShort}</td>
                <td>${p.degColon}</td>
            `;
            t1Body.appendChild(tr);
        });

        // Table 2 (Nakshatra Padam)
        let t2Body = document.getElementById('planetsTable2Body');
        t2Body.innerHTML = '';
        res.planets.forEach(p => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${p.name}</td>
                <td>${p.nak}-${p.pada}</td>
                <td>${p.nakLord}</td>
                <td>${p.navamsha}</td>
            `;
            t2Body.appendChild(tr);
        });

        renderChart('jatakamChartArea');
        renderChart('navamshaChartArea');

        // Populate Accordion 1: జనన వివరములు
        let periodStr = hour24 >= 12 ? "సాయంత్రం" : "ఉదయం";
        let h12 = hour24 % 12 || 12;
        let formattedTime = `${String(h12).padStart(2, '0')}:${String(min).padStart(2, '0')} ${periodStr}`;

        document.getElementById('jananaDetailsTable').innerHTML = `
            <tr><td>పేరు</td><td>${name}</td></tr>
            <tr><td>లింగం</td><td>${gender}</td></tr>
            <tr><td>పుట్టిన తేదీ</td><td>${String(day).padStart(2, '0')}-${String(month).padStart(2, '0')}-${year}</td></tr>
            <tr><td>పుట్టిన సమయం</td><td>${formattedTime}</td></tr>
            <tr><td>జన్మ స్థలం</td><td>${city}</td></tr>
            <tr><td>అక్షాంశం</td><td>${lat.toFixed(4)}</td></tr>
            <tr><td>రేఖాంశం</td><td>${lon.toFixed(4)}</td></tr>
            <tr><td>సమయ మండలం</td><td>+${tz}</td></tr>
        `;

        // Populate Accordion 2: పంచాంగ వివరములు
        let moonObj = res.planets[1];
        const birthSun = getSunTimes(year, month, day, lat, lon, tz);
        const birthNextDay = new Date(year, month - 1, day + 1);
        const birthNextSun = getSunTimes(birthNextDay.getFullYear(), birthNextDay.getMonth() + 1, birthNextDay.getDate(), lat, lon, tz);
        const birthNextSunHour = Math.floor(birthNextSun.sunrise);
        const birthNextSunMin = Math.round((birthNextSun.sunrise - birthNextSunHour) * 60);
        const birthVaraEnd = new Date(birthNextDay.getFullYear(), birthNextDay.getMonth(), birthNextDay.getDate(), birthNextSunHour, birthNextSunMin);
        const birthNextVara = VARA_NAMES[(new Date(year, month - 1, day).getDay() + 1) % 7];
        const birthRefDate = new Date(year, month - 1, day);
        const birthVaraStart = new Date(year, month - 1, day,
            Math.floor(birthSun.sunrise), Math.round((birthSun.sunrise - Math.floor(birthSun.sunrise)) * 60));
        document.getElementById('panchangaDetailsTable').innerHTML = `
            <tr><td>తిథి</td><td>${res.tithi}</td></tr>
            <tr><td>వారం</td><td>${res.vara} — ${fmtWindow(birthVaraStart, birthVaraEnd, birthRefDate)}<br><span class="since-note">తదుపరి: ${birthNextVara}</span></td></tr>
            <tr><td>నక్షత్రం మరియు పాదం</td><td>${moonObj.nak} ${moonObj.pada}వ పాదం</td></tr>
            <tr><td>యోగం</td><td>${res.yoga}</td></tr>
            <tr><td>కరణం</td><td>${res.karana}</td></tr>
            <tr><td>జన్మ రాశి</td><td>${moonObj.rasiFull}</td></tr>
            <tr><td>లగ్నం</td><td>${RASI_FULL[currentLagnaRasi]}</td></tr>
            <tr><td>సూర్యోదయం</td><td>${fmtClock(birthSun.sunrise)}</td></tr>
            <tr><td>సూర్యాస్తమయం</td><td>${fmtClock(birthSun.sunset)}</td></tr>
        `;

        // Chart Sub-Label (ఉదా: తుల లగ్నం | మిథున రాశి)
        document.getElementById('chartSubLabel').innerText = `${RASI_FULL[currentLagnaRasi]} లగ్నం | ${moonObj.rasiFull} రాశి | (వ) = వక్రి | (అ) = అస్తంగత్వం`;

        // Populate Vimshottari & Sookshma Dasha
        generateVimshottari(year, month, day, hour24, min, res.moonLon);
        generateSookshmaDasha(year, month, day, res.moonLon);
        const isDayBirth = (hour24 >= 6 && hour24 < 18);
        renderShadbala(isDayBirth);
        renderJatakaPhalalu();

        document.getElementById('resultsBox').scrollIntoView({ behavior: 'smooth' });
    }

        function switchChartStyle(style, el) {
        const tabs = el.parentElement;
        const target = (tabs && tabs.dataset.chart) ? tabs.dataset.chart : 'jatakamChartArea';
        chartStyles[target] = style;
        tabs.querySelectorAll('.style-tab').forEach(t => t.classList.remove('active'));
        el.classList.add('active');
        renderChart(target);
        // రాశి కుండలి శైలి మారితే నవాంశ కూడా అదే శైలిలో మళ్లీ గీయాలి
        if (target === 'jatakamChartArea') renderChart('navamshaChartArea');
    }

        function getBhavaNumber(rasiIndex, lagnaRasi) {
        return ((rasiIndex - lagnaRasi + 12) % 12) + 1;
    }

    function formatPlanetChartLabel(p) {
        let tags = [];
        const nm = p.name;
        if (p.retro && nm !== 'రాహు' && nm !== 'కేతు' && nm !== 'రా' && nm !== 'కే') tags.push("వ");
        if (p.combust) tags.push("అ");
        let tagStr = tags.length > 0 ? `(${tags.join(",")})` : "";
        const deg = p.degSym ? ` ${p.degSym}` : "";
        return `${nm}${deg}${tagStr}`;
    }

    function renderPlanetStack(planets, x, startY, lineGap, anchor = "middle") {
        return planets.map((p, idx) => {
            let cls = p.isLagna ? "lagna-entry" : "planet-entry";
            return `<text x="${x}" y="${startY + idx * lineGap}" class="${cls}" text-anchor="${anchor}">${formatPlanetChartLabel(p)}</text>`;
        }).join("");
    }

    // నవాంశ (D9): ప్రతి రాశిని 9 భాగాలుగా (3°20′) విభజించి ఆ భాగానికి నవాంశ రాశి కల్పిస్తారు
    function navamshaIndexOf(lonDeg) {
        return Math.floor(lonDeg / (360 / 108)) % 12;
    }

    function toNavamshaPlanets(planets) {
        return planets.map(p => ({
            name: p.short || p.name,
            rasiIdx: navamshaIndexOf(p.lon),
            degSym: '',
            retro: p.retro,
            combust: p.combust,
            isLagna: p.isLagna
        }));
    }

    function toNavamshaLagna(planets) {
        const lg = planets.find(p => p.isLagna);
        return lg ? navamshaIndexOf(lg.lon) : 0;
    }

    function renderChart(targetId) {
        let rasiMap = Array.from({ length: 12 }, () => []);
        const isGochar = targetId === 'gocharChartArea';
        const isNavamsha = targetId === 'navamshaChartArea';
        const ovKey = targetId || 'jatakamChartArea';
        const ov = chartDataOverrides[ovKey];
        const basePlanets = ov ? ov.planets : (isGochar ? gocharPlanets : currentPlanets);
        const baseLagna = ov ? ov.lagna : (isGochar ? gocharLagnaRasi : currentLagnaRasi);
        const planets = isNavamsha ? toNavamshaPlanets(basePlanets) : basePlanets;
        const lagna = isNavamsha ? toNavamshaLagna(basePlanets) : baseLagna;
        // నవాంశ కుండలి పైన ఎంచుకున్న రాశి కుండలి శైలినే అనుసరిస్తుంది
        const styleKey = isNavamsha ? 'jatakamChartArea' : (targetId || 'jatakamChartArea');
        const style = chartStyles[styleKey] || 'east';
        const chartTitle = isGochar ? 'గోచార కుండలి' : isNavamsha ? 'నవాంశ కుండలి' : 'లగ్న కుండలి';
        let sortedPlanets = [...planets].sort((a, b) => (b.isLagna ? 1 : 0) - (a.isLagna ? 1 : 0));
        sortedPlanets.forEach(p => {
            rasiMap[p.rasiIdx].push(p);
        });

        const area = document.getElementById(targetId || 'jatakamChartArea');
        if (!area) return;

        if (style === 'east') {
            area.innerHTML = `
                <svg class="kundali-svg" viewBox="0 0 360 360">
                    <rect x="2" y="2" width="356" height="356" fill="#ffffff" stroke="#000000" stroke-width="2"/>
                    <line x1="120" y1="0" x2="120" y2="360" class="black-line"/>
                    <line x1="240" y1="0" x2="240" y2="360" class="black-line"/>
                    <line x1="0" y1="120" x2="360" y2="120" class="black-line"/>
                    <line x1="0" y1="240" x2="360" y2="240" class="black-line"/>

                    <line x1="0" y1="0" x2="120" y2="120" class="black-line"/>
                    <line x1="360" y1="0" x2="240" y2="120" class="black-line"/>
                    <line x1="0" y1="360" x2="120" y2="240" class="black-line"/>
                    <line x1="360" y1="360" x2="240" y2="240" class="black-line"/>

                    <text x="180" y="180" class="center-title">ఓం</text>

                    <text x="180" y="18" class="bhava-num" text-anchor="middle">${getBhavaNumber(0, lagna)}</text>
                    ${renderPlanetStack(rasiMap[0], 180, 36, 14)}

                    <text x="75" y="16" class="bhava-num" text-anchor="middle">${getBhavaNumber(1, lagna)}</text>
                    ${renderPlanetStack(rasiMap[1], 75, 32, 13)}

                    <text x="14" y="65" class="bhava-num" text-anchor="start">${getBhavaNumber(2, lagna)}</text>
                    ${renderPlanetStack(rasiMap[2], 38, 80, 13)}

                    <text x="60" y="138" class="bhava-num" text-anchor="middle">${getBhavaNumber(3, lagna)}</text>
                    ${renderPlanetStack(rasiMap[3], 60, 156, 14)}

                    <text x="14" y="275" class="bhava-num" text-anchor="start">${getBhavaNumber(4, lagna)}</text>
                    ${renderPlanetStack(rasiMap[4], 42, 288, 13)}

                    <text x="75" y="348" class="bhava-num" text-anchor="middle">${getBhavaNumber(5, lagna)}</text>
                    ${renderPlanetStack(rasiMap[5], 75, 315, 13)}

                    <text x="180" y="258" class="bhava-num" text-anchor="middle">${getBhavaNumber(6, lagna)}</text>
                    ${renderPlanetStack(rasiMap[6], 180, 276, 14)}

                    <text x="285" y="348" class="bhava-num" text-anchor="middle">${getBhavaNumber(7, lagna)}</text>
                    ${renderPlanetStack(rasiMap[7], 285, 315, 13)}

                    <text x="346" y="275" class="bhava-num" text-anchor="end">${getBhavaNumber(8, lagna)}</text>
                    ${renderPlanetStack(rasiMap[8], 315, 288, 13)}

                    <text x="300" y="138" class="bhava-num" text-anchor="middle">${getBhavaNumber(9, lagna)}</text>
                    ${renderPlanetStack(rasiMap[9], 300, 156, 14)}

                    <text x="346" y="65" class="bhava-num" text-anchor="end">${getBhavaNumber(10, lagna)}</text>
                    ${renderPlanetStack(rasiMap[10], 318, 80, 13)}

                    <text x="285" y="16" class="bhava-num" text-anchor="middle">${getBhavaNumber(11, lagna)}</text>
                    ${renderPlanetStack(rasiMap[11], 285, 32, 13)}
                </svg>
            `;
        } else if (style === 'south') {
            area.innerHTML = `
                <svg class="kundali-svg" viewBox="0 0 360 360">
                    <rect x="2" y="2" width="356" height="356" fill="#ffffff" stroke="#000000" stroke-width="2"/>
                    <line x1="90" y1="0" x2="90" y2="360" class="black-line"/>
                    <line x1="270" y1="0" x2="270" y2="360" class="black-line"/>
                    <line x1="180" y1="0" x2="180" y2="90" class="black-line"/>
                    <line x1="180" y1="270" x2="180" y2="360" class="black-line"/>
                    <line x1="0" y1="90" x2="360" y2="90" class="black-line"/>
                    <line x1="0" y1="270" x2="360" y2="270" class="black-line"/>
                    <line x1="0" y1="180" x2="90" y2="180" class="black-line"/>
                    <line x1="270" y1="180" x2="360" y2="180" class="black-line"/>

                    <text x="180" y="180" class="center-title">${chartTitle}</text>

                    <text x="45" y="15" class="bhava-num" text-anchor="middle">${getBhavaNumber(11, lagna)}</text>
                    ${renderPlanetStack(rasiMap[11], 45, 32, 13)}

                    <text x="135" y="15" class="bhava-num" text-anchor="middle">${getBhavaNumber(0, lagna)}</text>
                    ${renderPlanetStack(rasiMap[0], 135, 32, 13)}

                    <text x="225" y="15" class="bhava-num" text-anchor="middle">${getBhavaNumber(1, lagna)}</text>
                    ${renderPlanetStack(rasiMap[1], 225, 32, 13)}

                    <text x="315" y="15" class="bhava-num" text-anchor="middle">${getBhavaNumber(2, lagna)}</text>
                    ${renderPlanetStack(rasiMap[2], 315, 32, 13)}

                    <text x="315" y="105" class="bhava-num" text-anchor="middle">${getBhavaNumber(3, lagna)}</text>
                    ${renderPlanetStack(rasiMap[3], 315, 122, 13)}

                    <text x="315" y="195" class="bhava-num" text-anchor="middle">${getBhavaNumber(4, lagna)}</text>
                    ${renderPlanetStack(rasiMap[4], 315, 212, 13)}

                    <text x="315" y="285" class="bhava-num" text-anchor="middle">${getBhavaNumber(5, lagna)}</text>
                    ${renderPlanetStack(rasiMap[5], 315, 302, 13)}

                    <text x="225" y="285" class="bhava-num" text-anchor="middle">${getBhavaNumber(6, lagna)}</text>
                    ${renderPlanetStack(rasiMap[6], 225, 302, 13)}

                    <text x="135" y="285" class="bhava-num" text-anchor="middle">${getBhavaNumber(7, lagna)}</text>
                    ${renderPlanetStack(rasiMap[7], 135, 302, 13)}

                    <text x="45" y="285" class="bhava-num" text-anchor="middle">${getBhavaNumber(8, lagna)}</text>
                    ${renderPlanetStack(rasiMap[8], 45, 302, 13)}

                    <text x="45" y="195" class="bhava-num" text-anchor="middle">${getBhavaNumber(9, lagna)}</text>
                    ${renderPlanetStack(rasiMap[9], 45, 212, 13)}

                    <text x="45" y="105" class="bhava-num" text-anchor="middle">${getBhavaNumber(10, lagna)}</text>
                    ${renderPlanetStack(rasiMap[10], 45, 122, 13)}
                </svg>
            `;
        } else {
            let houses = Array.from({ length: 12 }, (_, h) => {
                let rIdx = (lagna + h) % 12;
                return { bhava: h + 1, planets: rasiMap[rIdx] };
            });

            area.innerHTML = `
                <svg class="kundali-svg" viewBox="0 0 360 360">
                    <rect x="2" y="2" width="356" height="356" fill="#ffffff" stroke="#000000" stroke-width="2"/>
                    <line x1="0" y1="0" x2="360" y2="360" class="black-line"/>
                    <line x1="360" y1="0" x2="0" y2="360" class="black-line"/>
                    <polygon points="180,0 360,180 180,360 0,180" fill="none" stroke="#000000" stroke-width="1.8"/>

                    <text x="180" y="65" class="bhava-num" text-anchor="middle">${houses[0].bhava}</text>
                    ${renderPlanetStack(houses[0].planets, 180, 82, 13)}

                    <text x="90" y="22" class="bhava-num" text-anchor="middle">${houses[1].bhava}</text>
                    ${renderPlanetStack(houses[1].planets, 90, 38, 12)}

                    <text x="20" y="90" class="bhava-num" text-anchor="start">${houses[2].bhava}</text>
                    ${renderPlanetStack(houses[2].planets, 45, 102, 12)}

                    <text x="90" y="162" class="bhava-num" text-anchor="middle">${houses[3].bhava}</text>
                    ${renderPlanetStack(houses[3].planets, 90, 178, 13)}

                    <text x="20" y="270" class="bhava-num" text-anchor="start">${houses[4].bhava}</text>
                    ${renderPlanetStack(houses[4].planets, 45, 282, 12)}

                    <text x="90" y="346" class="bhava-num" text-anchor="middle">${houses[5].bhava}</text>
                    ${renderPlanetStack(houses[5].planets, 90, 322, 12)}

                    <text x="180" y="255" class="bhava-num" text-anchor="middle">${houses[6].bhava}</text>
                    ${renderPlanetStack(houses[6].planets, 180, 272, 13)}

                    <text x="270" y="346" class="bhava-num" text-anchor="middle">${houses[7].bhava}</text>
                    ${renderPlanetStack(houses[7].planets, 270, 322, 12)}

                    <text x="340" y="270" class="bhava-num" text-anchor="end">${houses[8].bhava}</text>
                    ${renderPlanetStack(houses[8].planets, 315, 282, 12)}

                    <text x="270" y="162" class="bhava-num" text-anchor="middle">${houses[9].bhava}</text>
                    ${renderPlanetStack(houses[9].planets, 270, 178, 13)}

                    <text x="340" y="90" class="bhava-num" text-anchor="end">${houses[10].bhava}</text>
                    ${renderPlanetStack(houses[10].planets, 315, 102, 12)}

                    <text x="270" y="22" class="bhava-num" text-anchor="middle">${houses[11].bhava}</text>
                    ${renderPlanetStack(houses[11].planets, 270, 38, 12)}
                </svg>
            `;
        }

        // గోచార కుండలిలో రాశుల నంబరింగ్ అవసరం లేదు
        if (isGochar) {
            area.innerHTML = area.innerHTML.replace(/<text[^>]*class="bhava-num"[^>]*>[^<]*<\/text>\s*/g, '');
        }
    }

    const DASHA_YEAR_DAYS = 365.2425;   // విమ్శోత్తరి సంవత్సర ప్రమాణం (రోజులు)
    const DASHA_LORDS = [
        { name: "కేతువు", short: "కే", years: 7 },
        { name: "శుక్రుడు", short: "శు", years: 20 },
        { name: "సూర్యుడు", short: "సూ", years: 6 },
        { name: "చంద్రుడు", short: "చం", years: 10 },
        { name: "కుజుడు", short: "కు", years: 7 },
        { name: "రాహువు", short: "రా", years: 18 },
        { name: "గురువు", short: "గు", years: 16 },
        { name: "శని", short: "శ", years: 19 },
        { name: "బుధుడు", short: "బు", years: 17 }
    ];

    function addDays(baseDate, days) {
        let res = new Date(baseDate.getTime() + days * 86400000);
        let d = String(res.getDate()).padStart(2, '0');
        let m = String(res.getMonth() + 1).padStart(2, '0');
        let y = res.getFullYear();
        return `${d}.${m}.${y}`;
    }

    function fmtAyanamsa(v) {
        if (typeof v !== 'number' || isNaN(v)) return '';
        const d = Math.floor(v);
        const m = (v - d) * 60;
        return d + '° ' + m.toFixed(1) + '′';
    }

    function generateVimshottari(year, month, day, hour, min, moonLon) {
        const DAY_MS = 86400000;
        const nakSpan = 360 / 27;
        const nakIdx = Math.floor(moonLon / nakSpan);
        const traversed = (moonLon % nakSpan) / nakSpan;      // నక్షత్రంలో గడిచిన భాగం
        const remaining = 1 - traversed;                       // మిగిలిన భాగం
        const startLordIdx = nakIdx % 9;
        const firstLord = DASHA_LORDS[startLordIdx];

        const birthMs = new Date(year, month - 1, day, hour || 0, min || 0, 0).getTime();

        // జనన మహాదశా శేషం = మిగిలిన భాగం × ఆ మహాదశ సంవత్సరాలు
        const balYears = firstLord.years * remaining;
        const bY = Math.floor(balYears);
        const bM = Math.floor((balYears - bY) * 12);
        const bD = Math.round(((balYears - bY) * 12 - bM) * 30);

        const summary = document.getElementById('dashaSummaryText');
        if (summary) {
            summary.innerHTML = `
                జన్మ నక్షత్రం: <b>${NAK_NAMES[nakIdx]}</b> · జననకాల దశా శేషం:
                <b>${firstLord.name} మహాదశ ${bY} సం. ${bM} నెలలు ${bD} రోజులు</b><br>
                <span style="font-size:0.78rem;color:#475569;">
                    విమ్శోత్తరి సంవత్సర ప్రమాణం: ${DASHA_YEAR_DAYS} రోజులు · అయనాంశం: లాహిరి ${fmtAyanamsa(window.__ayanamsaUsed)}
                </span>`;
        }

        dashaSchedule = [];
        // మొదటి మహాదశ జననానికి ముందే మొదలైంది — గడిచిన కాలాన్ని వెనక్కి లెక్కిస్తాం
        let cursorMs = birthMs - (firstLord.years * remaining * DASHA_YEAR_DAYS * DAY_MS);

        for (let i = 0; i < 9; i++) {
            const mIdx = (startLordIdx + i) % 9;
            const mLord = DASHA_LORDS[mIdx];
            const mahaStart = cursorMs;
            const mahaDays = mLord.years * DASHA_YEAR_DAYS;
            const mahaEnd = mahaStart + mahaDays * DAY_MS;

            const bhuktis = [];
            let bCursor = mahaStart;
            for (let j = 0; j < 9; j++) {
                const bIdx = (mIdx + j) % 9;
                const bLord = DASHA_LORDS[bIdx];
                const antarDays = mahaDays * bLord.years / 120;      // మహాదశ × భుక్తి అధిపతి సం. ÷ 120
                const antarStart = bCursor;
                const antarEnd = antarStart + antarDays * DAY_MS;

                const rows = [];
                let pCursor = antarStart;
                for (let k = 0; k < 9; k++) {
                    const pIdx = (bIdx + k) % 9;
                    const pLord = DASHA_LORDS[pIdx];
                    const pratyDays = antarDays * pLord.years / 120; // భుక్తి × ప్రత్యంతర అధిపతి సం. ÷ 120
                    const pStart = pCursor;
                    const pEnd = pStart + pratyDays * DAY_MS;
                    rows.push({
                        m: mLord.short, b: bLord.short, p: pLord.short,
                        start: formatDateTime(pStart), end: formatDateTime(pEnd)
                    });
                    pCursor = pEnd;
                }

                bhuktis.push({
                    title: `మ.: ${mLord.name} — భుక్తి: ${bLord.name}`,
                    start: formatDateTime(antarStart),
                    end: formatDateTime(antarEnd),
                    rows: rows
                });
                bCursor = antarEnd;
            }

            const labelShort = mLord.name.replace('వుడు', '').replace('ుడు', '').replace('వు', '');
            dashaSchedule.push({
                label: `${labelShort} ${new Date(mahaStart).getFullYear()}`,
                lordName: mLord.name,
                start: formatDateTime(mahaStart),
                end: formatDateTime(mahaEnd),
                bhuktis: bhuktis
            });
            cursorMs = mahaEnd;
        }

        const tabsContainer = document.getElementById('dashaTabsContainer');
        tabsContainer.innerHTML = '';
        dashaSchedule.forEach((d, idx) => {
            let btn = document.createElement('button');
            btn.className = 'dasha-pill' + (idx === 0 ? ' active' : '');
            btn.innerText = d.label;
            btn.onclick = () => showDashaLordTable(idx, btn);
            tabsContainer.appendChild(btn);
        });

        showDashaLordTable(0, tabsContainer.firstChild);
    }

    function showDashaLordTable(idx, btnEl) {
        document.querySelectorAll('.dasha-pill').forEach(b => b.classList.remove('active'));
        if (btnEl) btnEl.classList.add('active');

        const out = document.getElementById('dashaTableOutput');
        const d = dashaSchedule[idx];
        out.innerHTML = `
            <div style="background:#e0f2fe;border:1px solid #7dd3fc;border-radius:12px;padding:10px 12px;margin-bottom:10px;">
                <div style="font-weight:800;color:#0c4a6e;">${d.lordName} మహాదశ</div>
                <div style="font-size:0.82rem;color:#334155;margin-top:3px;">${d.start} &nbsp;→&nbsp; ${d.end}</div>
            </div>`;

        d.bhuktis.forEach(bh => {
            let card = document.createElement('div');
            card.style.cssText = 'background:#fff;border:1px solid rgba(56,189,248,0.45);border-radius:12px;padding:10px;margin-bottom:10px;';
            let rowsHtml = bh.rows.map(r => `<tr><td>${r.m}</td><td>${r.b}</td><td>${r.p}</td><td>${r.start}</td><td>${r.end}</td></tr>`).join('');
            card.innerHTML = `
                <div style="color:#0369a1;font-weight:bold;font-size:0.8rem;border-bottom:1px solid #bae6fd;padding-bottom:4px;margin-bottom:6px;">
                    ${bh.title}<br>
                    <span style="font-weight:600;color:#334155;">${bh.start} → ${bh.end}</span>
                </div>
                <table class="clean-table">
                    <thead><tr><th>మ.</th><th>భు.</th><th>ప్ర.</th><th>ప్రారంభం</th><th>ముగింపు</th></tr></thead>
                    <tbody>${rowsHtml}</tbody>
                </table>
            `;
            out.appendChild(card);
        });
    }

    function formatDateTime(ms) {
        let d = new Date(ms);
        let day = String(d.getDate()).padStart(2, '0');
        let mon = String(d.getMonth() + 1).padStart(2, '0');
        let yr = d.getFullYear();
        let hr = d.getHours();
        let min = String(d.getMinutes()).padStart(2, '0');
        let sec = String(d.getSeconds()).padStart(2, '0');
        let period = hr >= 12 ? 'సాయంత్రం' : 'ఉదయం';
        let h12 = hr % 12 || 12;
        return `${day}-${mon}-${yr} ${String(h12).padStart(2, '0')}:${min}:${sec} ${period}`;
    }

    function generateSookshmaDasha(bYear, bMonth, bDay, moonLon) {
        let nakSpan = 360 / 27;
        let nakIdx = Math.floor(moonLon / nakSpan);
        let remFraction = 1 - ((moonLon % nakSpan) / nakSpan);
        let startIdx = nakIdx % 9;

        let birthMs = new Date(bYear, bMonth - 1, bDay).getTime();
        let firstFullMs = DASHA_LORDS[startIdx].years * DASHA_YEAR_DAYS * 86400000;
        let cursorMs = birthMs - (firstFullMs * (1 - remFraction));

        let nowMs = Date.now();
        let oneYearLaterMs = nowMs + (DASHA_YEAR_DAYS * 86400000);
        let rowsHtml = '';

        for (let m = 0; m < 9; m++) {
            let mObj = DASHA_LORDS[(startIdx + m) % 9];
            for (let b = 0; b < 9; b++) {
                let bObj = DASHA_LORDS[(startIdx + m + b) % 9];
                for (let p = 0; p < 9; p++) {
                    let pObj = DASHA_LORDS[(startIdx + m + b + p) % 9];
                    for (let s = 0; s < 9; s++) {
                        let sObj = DASHA_LORDS[(startIdx + m + b + p + s) % 9];
                        let sDurationMs = (mObj.years * bObj.years * pObj.years * sObj.years / 1728000) * DASHA_YEAR_DAYS * 86400000;
                        let endMs = cursorMs + sDurationMs;

                        if (endMs >= nowMs && cursorMs <= oneYearLaterMs) {
                            rowsHtml += `
                                <tr>
                                    <td>${mObj.short}</td>
                                    <td>${bObj.short}</td>
                                    <td>${pObj.short}</td>
                                    <td>${sObj.short}</td>
                                    <td>${formatDateTime(cursorMs)}</td>
                                </tr>
                            `;
                        }
                        cursorMs = endMs;
                    }
                }
            }
        }

        document.getElementById('sookshmaTableBody').innerHTML = rowsHtml;
    }

    // ---------------------------------------------------------------
    // సూర్యోదయం / సూర్యాస్తమయం, కాల గణన సహాయక విధులు
    // ---------------------------------------------------------------
    function jdFromDate(y, m, d) {
        let yy = y, mm = m;
        if (mm <= 2) { yy -= 1; mm += 12; }
        const a = Math.floor(yy / 100), b = 2 - a + Math.floor(a / 4);
        return Math.floor(365.25 * (yy + 4716)) + Math.floor(30.6001 * (mm + 1)) + d + b - 1524.5;
    }

    // స్థానిక సమయంలో గంటల రూపంలో సూర్యోదయం, సూర్యాస్తమయం (దశాంశ గంటలు)
    function getSunTimes(y, m, d, lat, lon, tz) {
        // ఖచ్చితమైన సూర్యోదయం / సూర్యాస్తమయం (Astronomy Engine — ప్రమాణ వక్రీభవనంతో)
        if (typeof Astronomy !== 'undefined' && Astronomy.SearchRiseSet && Astronomy.Observer) {
            try {
                const observer = new Astronomy.Observer(lat, lon, 0);
                const localMidnightUtcMs = Date.UTC(y, m - 1, d, 0, 0, 0) - tz * 3600000;
                const start = new Date(localMidnightUtcMs);
                const rise = Astronomy.SearchRiseSet(Astronomy.Body.Sun, observer, +1, start, 1);
                const set = Astronomy.SearchRiseSet(Astronomy.Body.Sun, observer, -1, start, 1);
                const toLocalHours = (t) => {
                    if (!t || !t.date) return null;
                    const ld = new Date(t.date.getTime() + tz * 3600000);
                    return ld.getUTCHours() + ld.getUTCMinutes() / 60 + ld.getUTCSeconds() / 3600;
                };
                const sr = toLocalHours(rise);
                const ss = toLocalHours(set);
                if (sr !== null && ss !== null) return { sunrise: sr, sunset: ss, polar: false };
            } catch (e) { /* క్రింది పాత పద్ధతికి వెళ్తాం */ }
        }
        const jd0 = jdFromDate(y, m, d);
        const n = jd0 + 0.5 - 2451545.0 + 0.0008;
        const Jstar = n - lon / 360;
        const M = norm360(357.5291 + 0.98560028 * Jstar);
        const Mr = M * Math.PI / 180;
        const C = 1.9148 * Math.sin(Mr) + 0.02 * Math.sin(2 * Mr) + 0.0003 * Math.sin(3 * Mr);
        const lam = norm360(M + C + 180 + 102.9372);
        const lamR = lam * Math.PI / 180;
        const Jtransit = 2451545.0 + Jstar + 0.0053 * Math.sin(Mr) - 0.0069 * Math.sin(2 * lamR);
        const sinDec = Math.sin(lamR) * Math.sin(23.44 * Math.PI / 180);
        const decR = Math.asin(sinDec);
        const latR = lat * Math.PI / 180;
        const cosW = (Math.sin(-0.833 * Math.PI / 180) - Math.sin(latR) * sinDec) / (Math.cos(latR) * Math.cos(decR));
        const toLocal = J => ((((J + 0.5) % 1) + 1) % 1) * 24 + tz;
        if (cosW >= 1 || cosW <= -1) {
            return { sunrise: 6, sunset: 18, polar: true };
        }
        const w0 = Math.acos(cosW) * 180 / Math.PI;
        return { sunrise: toLocal(Jtransit - w0 / 360), sunset: toLocal(Jtransit + w0 / 360), polar: false };
    }

    function fmtClock(hours) {
        if (!isFinite(hours)) return '—';
        let h = Math.floor(hours);
        let mi = Math.round((hours - h) * 60);
        if (mi === 60) { h += 1; mi = 0; }
        h = ((h % 24) + 24) % 24;
        let period = h < 12 ? 'ఉదయం' : h < 16 ? 'మధ్యాహ్నం' : h < 20 ? 'సాయంత్రం' : 'రాత్రి';
        let h12 = h % 12;
        if (h12 === 0) h12 = 12;
        return `${period} ${h12}:${String(mi).padStart(2, '0')}`;
    }

    function fmtSpan(start, end) {
        return `${fmtClock(start)} నుం. ${fmtClock(end)} వరకు`;
    }

    // వారం ప్రకారం కాల విభాగాలు (ఆదివారం = 0)
    const RAHU_SEG = [8, 2, 7, 5, 6, 4, 3];       // పగటిని 8 భాగాలు
    const YAMA_SEG = [5, 4, 3, 2, 1, 7, 6];
    const GULIKA_SEG = [7, 6, 5, 4, 3, 2, 1];
    const DUR_MUHURTA = [[14], [9, 12], [4], [8], [6, 12], [4, 9], [1, 2]];  // పగటిని 15 ముహూర్తాలు
    const DISHA_SHOOLA = ['పడమర', 'తూర్పు', 'ఉత్తరం', 'ఉత్తరం', 'దక్షిణం', 'పడమర', 'తూర్పు'];

    function daySegment(sunrise, sunset, segNo, parts) {
        const len = (sunset - sunrise) / parts;
        const start = sunrise + (segNo - 1) * len;
        return { start, end: start + len };
    }

    function getKaalaWindows(y, m, d, sun) {
        const wd = new Date(y, m - 1, d).getDay();
        const dayLen = sun.sunset - sun.sunrise;
        const muh = dayLen / 15;
        return {
            wd,
            rahu: daySegment(sun.sunrise, sun.sunset, RAHU_SEG[wd], 8),
            yama: daySegment(sun.sunrise, sun.sunset, YAMA_SEG[wd], 8),
            gulika: daySegment(sun.sunrise, sun.sunset, GULIKA_SEG[wd], 8),
            dur: DUR_MUHURTA[wd].map(n => ({ start: sun.sunrise + (n - 1) * muh, end: sun.sunrise + n * muh })),
            abhijit: { start: sun.sunrise + 7 * muh, end: sun.sunrise + 8 * muh },
            brahma: { start: sun.sunrise - 1.6, end: sun.sunrise - 0.8 },
            disha: DISHA_SHOOLA[wd]
        };
    }

    function getPaksha(tithiName) {
        const idx = TITHI_NAMES.indexOf(tithiName);
        return idx >= 0 && idx < 15 ? 'శుక్ల పక్షం' : 'బహుళ పక్షం';
    }

    // ---------------------------------------------------------------
    // రాశి ప్రవేశం, తిథి/నక్షత్ర అంత్య సమయాల గణన
    // ---------------------------------------------------------------
    function ephemAt(dt, lat, lon, tz) {
        return calculateEphemeris(dt.getFullYear(), dt.getMonth() + 1, dt.getDate(),
            dt.getHours(), dt.getMinutes(), lat, lon, tz);
    }

    function fmtDateShort(dt) {
        return `${String(dt.getDate()).padStart(2, '0')}-${String(dt.getMonth() + 1).padStart(2, '0')}-${dt.getFullYear()}`;
    }

    function fmtMoment(dt) {
        return `${fmtDateShort(dt)} ${fmtClock(dt.getHours() + dt.getMinutes() / 60)}`;
    }

    // ఆ రోజే అయితే సమయం మాత్రమే, వేరే రోజు అయితే తేదీతో సహా
    function fmtEndMoment(dt, refDate) {
        const sameDay = dt.getDate() === refDate.getDate() &&
            dt.getMonth() === refDate.getMonth() &&
            dt.getFullYear() === refDate.getFullYear();
        const clock = fmtClock(dt.getHours() + dt.getMinutes() / 60);
        return sameDay ? clock : `${fmtDateShort(dt)} ${clock}`;
    }

    // గ్రహం ఇప్పటి రాశిలోకి ఎప్పుడు ప్రవేశించిందో వెనక్కి వెతుకుతుంది
    function findRasiIngress(planetIdx, rasiIdx, refMoment, lat, lon, tz, stepMs, maxSteps) {
        const rasiAt = dt => Math.floor(ephemAt(dt, lat, lon, tz).planets[planetIdx].lon / 30);
        let curMs = refMoment.getTime();
        if (rasiAt(new Date(curMs)) !== rasiIdx) return null;
        for (let i = 0; i < maxSteps; i++) {
            const prevMs = curMs - stepMs;
            if (rasiAt(new Date(prevMs)) !== rasiIdx) {
                let lo = prevMs, hi = curMs;
                for (let k = 0; k < 24; k++) {
                    const mid = (lo + hi) / 2;
                    if (rasiAt(new Date(mid)) === rasiIdx) hi = mid; else lo = mid;
                }
                return new Date(hi);
            }
            curMs = prevMs;
        }
        return null;
    }

    // తిథి (12°) లేదా నక్షత్రం (13°20′) ఎప్పుడు ముగుస్తుందో తదుపరి సరిహద్దు వరకు వెతుకుతుంది
    function findEndTime(kind, refMoment, lat, lon, tz) {
        const span = kind === 'tithi' ? 12 : 360 / 27;
        const stepMs = (kind === 'tithi' ? 60 : 45) * 60000;
        const valueAt = dt => {
            const r = ephemAt(dt, lat, lon, tz);
            const v = kind === 'tithi' ? norm360(r.planets[1].lon - r.planets[0].lon) : r.planets[1].lon;
            return Math.floor(v / span);
        };
        const startIdx = valueAt(refMoment);
        let curMs = refMoment.getTime();
        for (let i = 0; i < 96; i++) {
            const nextMs = curMs + stepMs;
            if (valueAt(new Date(nextMs)) !== startIdx) {
                let lo = curMs, hi = nextMs;
                for (let k = 0; k < 22; k++) {
                    const mid = (lo + hi) / 2;
                    if (valueAt(new Date(mid)) === startIdx) lo = mid; else hi = mid;
                }
                return new Date(hi);
            }
            curMs = nextMs;
        }
        return null;
    }

    // ---------------------------------------------------------------
    // సంవత్సరం పేరు, అయనం, ఋతువు, మాసం, రాశి ముగింపు సమయాలు
    // ---------------------------------------------------------------
    // యోగం, కరణం అర్థం తెలిసేలా చిన్న వివరణ
    const YOGA_NOTE = {
        'విష్కంభం': 'అశుభ యోగం — శుభ కార్యాలకు అనుకూలం కాదు',
        'ప్రీతి': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'ఆయుష్మాన్': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'సౌభాగ్యం': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'శోభనం': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'అతిగండం': 'అశుభ యోగం — శుభ కార్యాలకు అనుకూలం కాదు',
        'సుకర్మ': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'ధృతి': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'శూలం': 'అశుభ యోగం — శుభ కార్యాలకు అనుకూలం కాదు',
        'గండం': 'అశుభ యోగం — శుభ కార్యాలకు అనుకూలం కాదు',
        'వృద్ధి': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'ధ్రువం': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'వ్యాఘాతం': 'అశుభ యోగం — శుభ కార్యాలకు అనుకూలం కాదు',
        'హర్షణం': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'వజ్రం': 'అశుభ యోగం — శుభ కార్యాలకు అనుకూలం కాదు',
        'సిద్ధి': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'వ్యతీపాతం': 'అశుభ యోగం — శుభ కార్యాలకు అనుకూలం కాదు',
        'వరీయాన్': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'పరిఘం': 'అశుభ యోగం — శుభ కార్యాలకు అనుకూలం కాదు',
        'శివం': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'సిద్ధం': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'సాధ్యం': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'శుభం': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'శుక్లం': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'బ్రహ్మ': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'ఐంద్రం': 'శుభ యోగం — శుభ కార్యాలకు అనుకూలం',
        'వైధృతి': 'అశుభ యోగం — శుభ కార్యాలకు అనుకూలం కాదు'
    };
    const KARANA_NOTE = {
        'బవ': 'చర కరణం — కదిలే 7 కరణాలలో ఒకటి',
        'బాలవ': 'చర కరణం — కదిలే 7 కరణాలలో ఒకటి',
        'కౌలవ': 'చర కరణం — కదిలే 7 కరణాలలో ఒకటి',
        'తైతుల': 'చర కరణం — కదిలే 7 కరణాలలో ఒకటి',
        'గరజ': 'చర కరణం — కదిలే 7 కరణాలలో ఒకటి',
        'వణిజ': 'చర కరణం — కదిలే 7 కరణాలలో ఒకటి',
        'భద్ర': 'చర కరణం (విష్టి) — శుభ కార్యాలకు అనుకూలం కాదు',
        'శకుని': 'స్థిర కరణం — స్థిరమైన 4 కరణాలలో ఒకటి',
        'చతుష్పాద': 'స్థిర కరణం — స్థిరమైన 4 కరణాలలో ఒకటి',
        'నాగవ': 'స్థిర కరణం — స్థిరమైన 4 కరణాలలో ఒకటి',
        'కింస్తుఘ్న': 'స్థిర కరణం — స్థిరమైన 4 కరణాలలో ఒకటి'
    };

    // యోగం / కరణం వివరాలు — పేజీ మీద నొక్కినప్పుడు చూపడానికి
    const YOGA_INFO = {
        'విష్కంభం': { t: 'bad', m: 'విష్కంభం అంటే అడ్డంకి. ఈ యోగంలో మొదలుపెట్టిన పనులు ఆగిపోయే అవకాశం ఉందని సంప్రదాయం చెబుతుంది.', good: 'ఇప్పటికే జరుగుతున్న పనులు కొనసాగించడం, భూమి తవ్వకం, అగ్ని సంబంధిత పనులు.', bad: 'కొత్త వ్యాపారం, ప్రయాణం, వివాహం, గృహప్రవేశం వంటి శుభ కార్యాలు.' },
        'ప్రీతి': { t: 'good', m: 'ప్రీతి అంటే ప్రేమ, ఆనందం. స్నేహపూర్వకమైన, సంతోషకరమైన కార్యాలకు మంచి యోగం.', good: 'వివాహం, స్నేహం, కుటుంబ కార్యాలు, కొత్త పనులు, కళా కార్యక్రమాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'ఆయుష్మాన్': { t: 'good', m: 'ఆయుష్మాన్ అంటే ఆయుష్షు, ఆరోగ్యం. ఆరోగ్యానికి సంబంధించిన కార్యాలకు మంచిది.', good: 'ఆరోగ్య సంబంధిత పనులు, మందులు మొదలుపెట్టడం, ఇల్లు కట్టడం, దీర్ఘకాలిక ప్రయోజనాల పనులు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'సౌభాగ్యం': { t: 'good', m: 'సౌభాగ్యం అంటే అదృష్టం, శ్రేయస్సు.', good: 'వివాహం, ఆభరణాలు కొనడం, వాహనం కొనడం, ధన సంబంధిత పనులు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'శోభనం': { t: 'good', m: 'శోభనం అంటే అందం, శుభం.', good: 'వివాహం, పండుగలు, కొత్త బట్టలు, అలంకరణ, శుభ కార్యక్రమాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'అతిగండం': { t: 'bad', m: 'అతిగండం అంటే పెద్ద గండం — ఇబ్బందులు వచ్చే అవకాశం ఉన్న యోగం.', good: 'సాధారణ రోజువారీ పనులు, ఇంటి పనులు.', bad: 'శుభ కార్యాలు మొదలుపెట్టడం, ప్రయాణం, పెద్ద ఒప్పందాలు, వివాహం.' },
        'సుకర్మ': { t: 'good', m: 'సుకర్మ అంటే మంచి పనులు.', good: 'దానం, పూజ, ధార్మిక కార్యాలు, ఒప్పందాలు, కుటుంబ కార్యక్రమాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'ధృతి': { t: 'good', m: 'ధృతి అంటే ధైర్యం, స్థిరత్వం.', good: 'దీర్ఘకాలిక పెట్టుబడులు, ఇల్లు లేదా భూమి కొనడం, ఒప్పందాలు, పొదుపు నిర్ణయాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'శూలం': { t: 'bad', m: 'శూలం అంటే బాధ — ఇబ్బందికరమైన యోగం.', good: 'సాధారణ పనులు, ఇంటి పనులు.', bad: 'ప్రయాణం, కొత్త పనులు, వివాహం, శుభ కార్యక్రమాలు.' },
        'గండం': { t: 'bad', m: 'గండం అంటే ఆటంకం — పనులు ఆలస్యమయ్యే అవకాశం ఉంది.', good: 'ఇప్పటికే చేస్తున్న పనులు కొనసాగించడం, ఇంటి పనులు.', bad: 'కొత్త పనులు, ప్రయాణం, వివాహం, గృహప్రవేశం.' },
        'వృద్ధి': { t: 'good', m: 'వృద్ధి అంటే అభివృద్ధి, పెరుగుదల.', good: 'వ్యాపారం, పెట్టుబడి, వ్యవసాయం, కొత్త పనులు మొదలుపెట్టడం.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'ధ్రువం': { t: 'good', m: 'ధ్రువం అంటే స్థిరమైనది — శాశ్వత కార్యాలకు మంచిది.', good: 'ఇల్లు కట్టడం, భూమి కొనడం, మొక్కలు నాటడం, దీర్ఘకాలిక ప్రణాళికలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'వ్యాఘాతం': { t: 'bad', m: 'వ్యాఘాతం అంటే దెబ్బ — పనులు దెబ్బతినే అవకాశం ఉంది.', good: 'సాధారణ పనులు, ఇంటి పనులు.', bad: 'ముఖ్యమైన పనులు, ప్రయాణం, వివాహం, ఒప్పందాలు.' },
        'హర్షణం': { t: 'good', m: 'హర్షణం అంటే సంతోషం.', good: 'పండుగలు, వివాహం, విందులు, స్నేహితులతో కలయిక, సంతోషకరమైన కార్యక్రమాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'వజ్రం': { t: 'bad', m: 'వజ్రం అంటే కఠినం — శుభ కార్యాలకు అనుకూలం కాదు.', good: 'పోటీ పనులు, కఠినమైన నిర్ణయాలు.', bad: 'వివాహం, గృహప్రవేశం, పూజ, శుభ కార్యక్రమాలు.' },
        'సిద్ధి': { t: 'good', m: 'సిద్ధి అంటే విజయం, సఫలత.', good: 'ముఖ్యమైన పనులు, పోటీలు, పరీక్షలు, ఆధ్యాత్మిక సాధన.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'వ్యతీపాతం': { t: 'bad', m: 'వ్యతీపాతం చాలా అశుభమైన యోగం.', good: 'సాధారణ రోజువారీ పనులు మాత్రమే.', bad: 'అన్ని ముఖ్యమైన శుభ కార్యాలు — వివాహం, ప్రయాణం, కొత్త పనులు.' },
        'వరీయాన్': { t: 'good', m: 'వరీయాన్ అంటే శ్రేష్ఠమైనది.', good: 'ముఖ్యమైన పనులు, వివాహం, ఒప్పందాలు, కొత్త వ్యాపారం.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'పరిఘం': { t: 'bad', m: 'పరిఘం అంటే అడ్డం — అడ్డంకులు వచ్చే అవకాశం ఉంది.', good: 'సాధారణ పనులు, ఇంటి పనులు.', bad: 'కొత్త పనులు, ప్రయాణం, శుభ కార్యక్రమాలు.' },
        'శివం': { t: 'good', m: 'శివం అంటే మంగళం, శుభం.', good: 'పూజ, ఆధ్యాత్మిక కార్యాలు, వివాహం, మందులు, శుభ కార్యక్రమాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'సిద్ధం': { t: 'good', m: 'సిద్ధం అంటే సిద్ధించినది — విజయానికి మంచిది.', good: 'ముఖ్యమైన కార్యాలు, వ్యాపారం, పరీక్షలు, ప్రయాణం.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'సాధ్యం': { t: 'good', m: 'సాధ్యం అంటే సాధించగలిగేది.', good: 'లక్ష్యాలు నిర్ణయించుకోవడం, వ్యాపారం, చదువు, కొత్త ప్రయత్నాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'శుభం': { t: 'good', m: 'శుభం అంటే మంచిది — అన్ని శుభ కార్యాలకు అనుకూలం.', good: 'అన్ని రకాల శుభ కార్యాలు, వివాహం, గృహప్రవేశం, కొత్త పనులు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'శుక్లం': { t: 'good', m: 'శుక్లం అంటే తెలుపు, శుభం.', good: 'ధార్మిక కార్యాలు, దానం, పూజ, శుభ కార్యక్రమాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'బ్రహ్మ': { t: 'good', m: 'బ్రహ్మ యోగం జ్ఞానానికి, ఆధ్యాత్మికతకు మంచిది.', good: 'పూజ, అధ్యయనం, ఆధ్యాత్మిక సాధన, దీర్ఘకాలిక కార్యాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'ఐంద్రం': { t: 'good', m: 'ఐంద్రం అంటే ఇంద్రుని యోగం — అధికారానికి మంచిది.', good: 'ప్రభుత్వ సంబంధిత పనులు, నాయకత్వ నిర్ణయాలు, ఉద్యోగం, అధికార కార్యాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'వైధృతి': { t: 'bad', m: 'వైధృతి చాలా అశుభమైన యోగం.', good: 'సాధారణ రోజువారీ పనులు మాత్రమే.', bad: 'అన్ని ముఖ్యమైన శుభ కార్యాలు — వివాహం, ప్రయాణం, కొత్త పనులు.' }
    };

    const KARANA_INFO = {
        'బవ': { t: 'good', m: 'చర కరణం (కదిలే ఏడు కరణాలలో ఒకటి). సాధారణంగా శుభమైనదిగా భావిస్తారు.', good: 'సాధారణ శుభ కార్యాలు, వ్యాపారం, ప్రయాణం.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'బాలవ': { t: 'good', m: 'చర కరణం. ధార్మిక కార్యాలకు మంచిది.', good: 'పూజ, హోమం, వివాహం, శుభ కార్యక్రమాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'కౌలవ': { t: 'good', m: 'చర కరణం. స్నేహం, కుటుంబానికి మంచిది.', good: 'స్నేహితులతో ఒప్పందాలు, కుటుంబ కార్యాలు, కలయికలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'తైతుల': { t: 'good', m: 'చర కరణం. ఆర్థిక విషయాలకు మంచిది.', good: 'వ్యాపారం, ధన సంబంధిత పనులు, ఆభరణాలు కొనడం.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'గరజ': { t: 'mid', m: 'చర కరణం. భూమి, వ్యవసాయం, నిర్మాణ పనులకు అనుకూలమని సంప్రదాయం చెబుతుంది.', good: 'వ్యవసాయం, ఇల్లు కట్టడం, భూమి తవ్వకం, గ్రామ సంబంధిత పనులు.', bad: 'ప్రత్యేక నిషేధం లేదు; అత్యంత ముఖ్యమైన శుభ కార్యాలకు పంచాంగం చూసుకోవడం మంచిది.' },
        'వణిజ': { t: 'good', m: 'చర కరణం. వ్యాపారానికి మంచిది.', good: 'వ్యాపార లావాదేవీలు, కొనుగోలు-అమ్మకం, ఒప్పందాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'భద్ర': { t: 'bad', m: 'భద్రను విష్టి కరణం అని కూడా అంటారు — శుభ కార్యాలకు అనుకూలం కాదు.', good: 'సాధారణ పనులు, ఇంటి పనులు.', bad: 'వివాహం, గృహప్రవేశం, ప్రయాణం, కొత్త పనులు.' },
        'శకుని': { t: 'mid', m: 'స్థిర కరణం (నాలుగు స్థిర కరణాలలో ఒకటి). శాశ్వత కార్యాలకు అనుకూలమని సంప్రదాయం.', good: 'శ్రాద్ధం, హోమం, దానం, దేవాలయ సంబంధిత శాశ్వత కార్యాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'చతుష్పాద': { t: 'mid', m: 'స్థిర కరణం (నాలుగు స్థిర కరణాలలో ఒకటి). శాశ్వత కార్యాలకు అనుకూలమని సంప్రదాయం.', good: 'శ్రాద్ధం, హోమం, దానం, దేవాలయ సంబంధిత శాశ్వత కార్యాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'నాగవ': { t: 'mid', m: 'స్థిర కరణం (నాలుగు స్థిర కరణాలలో ఒకటి). శాశ్వత కార్యాలకు అనుకూలమని సంప్రదాయం.', good: 'శ్రాద్ధం, హోమం, దానం, దేవాలయ సంబంధిత శాశ్వత కార్యాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' },
        'కింస్తుఘ్న': { t: 'mid', m: 'స్థిర కరణం (నాలుగు స్థిర కరణాలలో ఒకటి). శాశ్వత కార్యాలకు అనుకూలమని సంప్రదాయం.', good: 'శ్రాద్ధం, హోమం, దానం, దేవాలయ సంబంధిత శాశ్వత కార్యాలు.', bad: 'ప్రత్యేక నిషేధం లేదు.' }
    };

    // పేరు మొదటి అక్షరం ప్రకారం నామ నక్షత్రం (27 నక్షత్రాలు × 4 పాదాలు)
    const NAK_AKSHARA = [
        ['చూ', 'చే', 'చో', 'లా'],
        ['లీ', 'లూ', 'లే', 'లో'],
        ['అ', 'ఈ', 'ఉ', 'ఏ'],
        ['ఓ', 'వా', 'వీ', 'వూ'],
        ['వే', 'వో', 'కా', 'కీ'],
        ['కూ', 'ఘ', 'ఙ', 'ఛ'],
        ['కే', 'కో', 'హా', 'హీ'],
        ['హూ', 'హే', 'హో', 'డా'],
        ['డీ', 'డూ', 'డే', 'డో'],
        ['మా', 'మీ', 'మూ', 'మే'],
        ['మో', 'టా', 'టీ', 'టూ'],
        ['టే', 'టో', 'పా', 'పీ'],
        ['పూ', 'ష', 'ణ', 'ఠ'],
        ['పే', 'పో', 'రా', 'రీ'],
        ['రూ', 'రే', 'రో', 'తా'],
        ['తీ', 'తూ', 'తే', 'తో'],
        ['నా', 'నీ', 'నూ', 'నే'],
        ['నో', 'యా', 'యీ', 'యూ'],
        ['యే', 'యో', 'భా', 'భీ'],
        ['భూ', 'ధా', 'ఫా', 'ఢా'],
        ['భే', 'భో', 'జా', 'జీ'],
        ['ఖీ', 'ఖూ', 'ఖే', 'ఖో'],
        ['గా', 'గీ', 'గూ', 'గే'],
        ['గో', 'సా', 'సీ', 'సూ'],
        ['సే', 'సో', 'దా', 'దీ'],
        ['దూ', 'దే', 'దో', 'చా'],
        ['చీ', 'చూ', 'చే', 'చో']
    ];

    // అచ్చు గుర్తులు తీసేసి మూల అక్షరాన్ని ఇస్తుంది (సా -> స)
    function baseLetterOf(syl) {
        return Array.from(syl || '')
            .filter(ch => !/[\u0C3E-\u0C4C\u0C4D\u0C55\u0C56\u0C3C]/.test(ch))
            .join('');
    }

    // పేరు మొదటి అక్షరాన్ని బట్టి నక్షత్రం, పాదం కనుక్కుంటుంది
    function findNakshatraFromName(name) {
        const chars = Array.from((name || '').trim());
        if (!chars.length) return [];
        const hits = [];
        for (let len = 2; len >= 1; len--) {
            const syl = chars.slice(0, len).join('');
            if (syl.length < len) continue;
            NAK_AKSHARA.forEach((padas, nakIdx) => {
                padas.forEach((a, padaIdx) => {
                    if (a === syl) hits.push({ syl, nakIdx, pada: padaIdx + 1 });
                });
            });
            if (hits.length) break;   // పొడవైన అక్షరం సరిపోతే అదే తీసుకుంటాము
        }
        // ఖచ్చితమైన అక్షరం దొరకకపోతే, మూల అక్షరాన్ని బట్టి అంచనా వేస్తాము (కంపలసరీ ఫలితం)
        if (!hits.length) {
            const base = baseLetterOf(chars[0]);
            if (base) {
                NAK_AKSHARA.forEach((padas, nakIdx) => {
                    padas.forEach((a, padaIdx) => {
                        if (baseLetterOf(a) === base) {
                            hits.push({ syl: a, nakIdx, pada: padaIdx + 1, approx: true });
                        }
                    });
                });
            }
        }
        return hits;
    }

    // ================= పేరు: English → తెలుగు లిప్యంతరీకరణ =================
    const TEL_CONSONANTS = {
        'chh': 'ఛ', 'Chh': 'ఛ', 'ksh': 'క్ష', 'kSh': 'క్ష', 'gny': 'జ్ఞ', 'jny': 'జ్ఞ',
        'shr': 'శ్ర', 'shn': 'ష్ణ', 'kr': 'క్ర', 'tr': 'త్ర', 'pr': 'ప్ర', 'br': 'బ్ర',
        'gr': 'గ్ర', 'dr': 'ద్ర', 'sr': 'శ్ర', 'st': 'స్త', 'nd': 'ంద', 'mb': 'ంబ',
        'nk': 'ంక', 'ng': 'ంగ', 'nj': 'ంజ', 'nt': 'ంత', 'mp': 'ంప', 'rk': 'ర్క',
        'rm': 'ర్మ', 'ry': 'ర్య', 'ly': 'ల్య', 'vy': 'వ్య', 'sv': 'స్వ', 'tv': 'త్వ',
        'dv': 'ద్వ', 'nv': 'న్వ', 'shv': 'శ్వ', 'ks': 'క్స', 'ps': 'ప్స',
        'kh': 'ఖ', 'gh': 'ఘ', 'ch': 'చ', 'Ch': 'చ', 'jh': 'ఝ', 'th': 'త', 'dh': 'ద',
        'Th': 'ఠ', 'Dh': 'ఢ', 'ph': 'ఫ', 'bh': 'భ', 'sh': 'శ', 'Sh': 'ష', 'ss': 'ష',
        'ny': 'ఞ', 'K': 'క', 'k': 'క', 'G': 'గ', 'g': 'గ', 'C': 'చ', 'c': 'చ',
        'J': 'జ', 'j': 'జ', 'T': 'ట', 't': 'త', 'D': 'డ', 'd': 'ద', 'N': 'ణ', 'n': 'న',
        'P': 'ప', 'p': 'ప', 'B': 'బ', 'b': 'బ', 'M': 'మ', 'm': 'మ', 'Y': 'య', 'y': 'య',
        'V': 'వ', 'v': 'వ', 'W': 'వ', 'w': 'వ', 'L': 'ళ', 'l': 'ల', 'R': 'ఱ', 'r': 'ర',
        'S': 'స', 's': 'స', 'H': 'హ', 'h': 'హ', 'F': 'ఫ', 'f': 'ఫ', 'Z': 'జ', 'z': 'జ',
        'Q': 'క', 'q': 'క', 'x': 'క్స్'
    };
    const TEL_VOWELS = {
        'ai': 'ఐ', 'au': 'ఔ', 'aa': 'ఆ', 'ee': 'ఈ', 'ii': 'ఈ', 'oo': 'ఊ', 'uu': 'ఊ',
        'A': 'ఆ', 'I': 'ఈ', 'U': 'ఊ', 'E': 'ఏ', 'O': 'ఓ',
        'a': 'అ', 'i': 'ఇ', 'u': 'ఉ', 'e': 'ఎ', 'o': 'ఒ'
    };
    const TEL_MATRAS = {
        'ai': 'ై', 'au': 'ౌ', 'aa': 'ా', 'ee': 'ీ', 'ii': 'ీ', 'oo': 'ూ', 'uu': 'ూ',
        'A': 'ా', 'I': 'ీ', 'U': 'ూ', 'E': 'ే', 'O': 'ో',
        'a': '', 'i': 'ి', 'u': 'ు', 'e': 'ె', 'o': 'ొ'
    };
    const TEL_CONS_KEYS = Object.keys(TEL_CONSONANTS).sort((a, b) => b.length - a.length);
    const TEL_VOWEL_KEYS = Object.keys(TEL_VOWELS).sort((a, b) => b.length - a.length);
    const TELUGU_RE = /[\u0C00-\u0C7F]/;

    function romanToTelugu(srcText) {
        const s = String(srcText || '');
        let out = '';
        let i = 0;
        while (i < s.length) {
            let done = false;
            for (let c = 0; c < TEL_CONS_KEYS.length; c++) {
                const k = TEL_CONS_KEYS[c];
                if (s.startsWith(k, i)) {
                    out += TEL_CONSONANTS[k];
                    i += k.length;
                    let vk = null;
                    for (let v = 0; v < TEL_VOWEL_KEYS.length; v++) {
                        if (s.startsWith(TEL_VOWEL_KEYS[v], i)) { vk = TEL_VOWEL_KEYS[v]; break; }
                    }
                    if (vk === 'e' && /^sh$/.test(s.slice(i + vk.length))) { vk = 'E'; }
                    if (vk) { out += TEL_MATRAS[vk]; i += vk.length; }
                    else { out += '్'; }
                    done = true;
                    break;
                }
            }
            if (done) continue;
            let vowelDone = false;
            for (let v = 0; v < TEL_VOWEL_KEYS.length; v++) {
                const k = TEL_VOWEL_KEYS[v];
                if (s.startsWith(k, i)) { out += TEL_VOWELS[k]; i += k.length; vowelDone = true; break; }
            }
            if (vowelDone) continue;
            const ch = s[i];
            if (ch === 'M') { out += 'ం'; i++; continue; }
            out += ch;
            i++;
        }
        return out;
    }

    // English అక్షరాలు టైప్ చేస్తుండగానే పేరు తెలుగులోకి మారుతుంది
    // తెలుగు అక్షరం తర్వాత English అచ్చు వచ్చినప్పుడు గుణింతం జోడించడం (రామ + e = రామె)
    function teluguJoin(prefix, latin) {
        if (!prefix || !latin) return prefix + romanToTelugu(latin);
        let chars = Array.from(prefix);
        let last = chars[chars.length - 1];
        if (last === '\u0C4D') {                       // చివర్లో హల్లు సున్నా ఉంటే తీసేసి గుణింతం జోడిస్తాం
            const stripped = chars.slice(0, -1).join('');
            const sChars = Array.from(stripped);
            const sLast = sChars[sChars.length - 1] || '';
            if (/[\u0C15-\u0C39\u0C58-\u0C5F]/.test(sLast)) {
                for (let v2 = 0; v2 < TEL_VOWEL_KEYS.length; v2++) {
                    const k2 = TEL_VOWEL_KEYS[v2];
                    if (latin.startsWith(k2)) {
                        return stripped + TEL_MATRAS[k2] + romanToTelugu(latin.slice(k2.length));
                    }
                }
            }
            return prefix + romanToTelugu(latin);
        }
        const isConsonant = /[\u0C15-\u0C39\u0C58-\u0C5F]/.test(last);
        if (!isConsonant) return prefix + romanToTelugu(latin);
        for (let v = 0; v < TEL_VOWEL_KEYS.length; v++) {
            const k = TEL_VOWEL_KEYS[v];
            if (latin.startsWith(k)) {
                return prefix + TEL_MATRAS[k] + romanToTelugu(latin.slice(k.length));
            }
        }
        return prefix + romanToTelugu(latin);
    }

    function toggleTeluguInput(on) {
        const el = document.getElementById('mhName');
        if (!el) return;
        el.dataset.teluguOn = on ? '1' : '0';
        const hint = document.getElementById('mhTeluguHint');
        if (hint) {
            hint.innerHTML = on
                ? 'ఆన్ ఉంది — English అక్షరాలు టైప్ చేస్తే తెలుగు లిపిలోకి మారుతాయి. ఇది సుమారైన మార్పిడి మాత్రమే; సరిగా రాని అక్షరాన్ని నేరుగా తెలుగులో సవరించుకోవచ్చు.'
                : 'ఆఫ్ ఉంది — మీరు టైప్ చేసినట్టే ఉంటుంది. తెలుగు కీబోర్డ్‌తో నేరుగా పేరు రాయవచ్చు.';
        }
        if (on) {
            const v = el.value;
            if (v && !TELUGU_RE.test(v)) el.value = romanToTelugu(v);
            applyNameNakshatra();
        }
    }

    function attachTeluguInput(el) {
        if (!el || el.dataset.teluguReady === '1') return;
        el.dataset.teluguReady = '1';

        // prefix = వినియోగదారు నేరుగా తెలుగులో సవరించిన భాగం, latin = చివర్లో టైప్ అవుతున్న English భాగం
        let prefix = TELUGU_RE.test(el.value) ? el.value : '';
        let latin = TELUGU_RE.test(el.value) ? '' : el.value;
        el.dataset.teluguOn = '0';
        const render = () => teluguJoin(prefix, latin);

        const setVal = (val) => {
            el.value = val;
            try { el.setSelectionRange(val.length, val.length); } catch (e) {}
        };

        el.addEventListener('input', function () {
            if (el.dataset.teluguOn !== '1') return;   // మార్పిడి ఆఫ్ — టైప్ చేసినట్టే ఉంటుంది
            const v = el.value;
            const full = render();
            if (v === full) return;

            if (!TELUGU_RE.test(v)) {                 // పూర్తిగా English అక్షరాలు
                prefix = '';
                latin = v;
                setVal(render());
                return;
            }

            if (full && full.startsWith(v)) {          // backspace — ఒక అక్షరం తగ్గుతుంది
                prefix = v;
                latin = '';
                setVal(v);
                return;
            }

            if (v.startsWith(prefix)) {
                const tail = v.slice(prefix.length);
                if (!TELUGU_RE.test(tail)) {           // తెలుగు భాగం మారలేదు — చివర్లో English టైప్
                    latin = tail;
                    setVal(render());
                    return;
                }
            }

            // వినియోగదారు నేరుగా తెలుగు అక్షరాలు సవరించారు
            const m = v.match(/[A-Za-z]+$/);
            if (m) {
                prefix = v.slice(0, v.length - m[0].length);
                latin = m[0];
                setVal(render());
            } else {
                prefix = v;
                latin = '';
            }
        });
    }

    // ================= నక్షత్రం ఎంపిక విధానం =================
    function getNakMode() {
        const el = document.querySelector('input[name="mhNakMode"]:checked');
        return el ? el.value : 'known';
    }

    function setNakMode(mode) {
        document.querySelectorAll('input[name="mhNakMode"]').forEach(r => { r.checked = (r.value === mode); });
        document.querySelectorAll('#mhNakModeTabs .mode-tab').forEach(el => {
            const r = el.querySelector('input');
            if (r) el.classList.toggle('active', r.checked);
        });

        const sel = document.getElementById('mhNakshatra');
        const hint = document.getElementById('mhNakModeHint');
        const nameReq = document.getElementById('mhNameReq');

        if (mode === 'name') {
            if (sel) { sel.disabled = true; sel.classList.add('select-locked'); }
            if (hint) hint.innerHTML = 'మీకు నక్షత్రం తెలియనప్పుడు ఇది వాడండి — మీ పేరు టైప్ చేయండి. పేరు మొదటి అక్షరం ప్రకారం నక్షత్రం, పాదం స్వయంచాలకంగా ఎంపిక అవుతాయి.';
            if (nameReq) nameReq.textContent = '(తప్పనిసరి)';
        } else {
            if (sel) { sel.disabled = false; sel.classList.remove('select-locked'); }
            if (hint) hint.innerHTML = 'మీకు నక్షత్రం తెలిస్తే ఈ జాబితా నుంచి ఎంచుకోండి. పేరు ఐచ్ఛికం — ముహూర్త పత్రంలో ముద్రించడానికి మాత్రమే.';
            if (nameReq) nameReq.textContent = '(ఐచ్ఛికం)';
        }

        const box = document.getElementById('mhResults');
        if (box && box.style.display !== 'none') {
            applyNameNakshatra();
            if (mode === 'known') generateMuhurtam();
        }
    }

    let muhurtaNameTimer = null;
    let mhNakManual = false;

    // పేరు టైప్ చేస్తుండగానే నక్షత్రం కనుక్కుని చూపుతుంది
    function onMuhurtaNameInput() {
        clearTimeout(muhurtaNameTimer);
        muhurtaNameTimer = setTimeout(applyNameNakshatra, 300);
    }

    function applyNameNakshatra() {
        const name = (document.getElementById('mhName') || {}).value || '';
        const note = document.getElementById('mhNakResult');
        const hits = findNakshatraFromName(name);

        if (!hits.length) {
            if (note) {
                note.innerHTML = (name.trim() && !mhNakManual)
                    ? `<div class="since-note">"${name.trim()}" — ఈ అక్షరం జాబితాలో లేదు.</div>`
                    : '';
            }
            return;
        }

        const first = hits[0];
        const nakSel = document.getElementById('mhNakshatra');

        // నక్షత్రం తెలిసినవారు తాము ఎంచుకున్నదే కొనసాగాలి — పేరు దాన్ని మార్చకూడదు
        // జాబితా నుంచి తామే నక్షత్రాన్ని ఎంచుకుంటే, పేరు దాన్ని మార్చకూడదు
        if (mhNakManual) {
            if (note) note.innerHTML = '';
            return;
        }

        if (nakSel) nakSel.value = NAK_NAMES[first.nakIdx];

        let msg = `<div class="nak-result-big">
                <span class="nak-name">${NAK_NAMES[first.nakIdx]}</span>
                <span class="nak-pada">${first.pada}వ పాదం · "${first.syl}" అక్షరం ప్రకారం</span>
            </div>`;
        if (note) note.innerHTML = msg;

        if (typeof generateMuhurtam === 'function') generateMuhurtam();
    }

    // వినాయకుడి చిత్రం (పత్రం పైభాగంలో)
    const GANESHA_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="47" fill="#fff8f6" stroke="#b91c1c" stroke-width="1.8"/>
        <circle cx="50" cy="50" r="42" fill="none" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="2 3"/>
        <path d="M40 31 L44 19 L50 27 L56 19 L60 31 Z" fill="#fde8e8" stroke="#b91c1c" stroke-width="1.6" stroke-linejoin="round"/>
        <circle cx="50" cy="15" r="2.2" fill="#b91c1c"/>
        <path d="M32 41 C 20 37, 15 51, 24 59 C 28 63, 32 61, 33 56" fill="#fde8e8" stroke="#b91c1c" stroke-width="1.4"/>
        <path d="M68 41 C 80 37, 85 51, 76 59 C 72 63, 68 61, 67 56" fill="#fde8e8" stroke="#b91c1c" stroke-width="1.4"/>
        <path d="M50 29 C 62 29, 68 39, 68 47 C 68 57, 60 63, 50 63 C 40 63, 32 57, 32 47 C 32 39, 38 29, 50 29 Z" fill="#fde8e8" stroke="#b91c1c" stroke-width="1.7"/>
        <path d="M50 33 L50 39" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="44" cy="45" r="1.7" fill="#7f1d1d"/>
        <circle cx="56" cy="45" r="1.7" fill="#7f1d1d"/>
        <path d="M50 49 C 50 59, 46 63, 42 67 C 38 71, 40 76, 45 75" fill="none" stroke="#b91c1c" stroke-width="2.8" stroke-linecap="round"/>
        <path d="M43 58 C 41 61, 40 63, 41 65" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M57 58 C 59 61, 60 63, 59 65" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;


    // వినాయకుడి చిత్రం (యజమాని ఇచ్చిన చిత్రం నుంచి, ఫైల్ లోపలే బేస్64గా)
    const GANESHA_IMG = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAEAAKoDASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABgcEBQIDCAEA/8QAQxAAAQMCBAUCBAMECQQBBQEAAQIDBAURAAYSIQcTMUFRImEUMnGBFUJSI2KRoQgWJDNDcrHB0Rc0U4KiJSZUkuHw/8QAGwEAAwEBAQEBAAAAAAAAAAAABAUGAwIHAQD/xAA3EQABAwIEAwUIAQMFAQAAAAABAgMRAAQFITFBElFhEyJxgfAGFJGhscHR4TIjQvEVJFJicoL/2gAMAwEAAhEDEQA/AMa5mqDl+a1IEeM7Mab/ALGw7b4elMj5To6KdI39sKaO2MxZkclVKSsiU8Vlx4lKnSd73PY+2GNwzyHU82Jn50k0xisiNJDbMKS8G23F9VLVfZSUC3p6H7YMs9Zdg1au5ZkVRlmRHrLLlMdU3ayVAFxlbZHS1lAWxF4OG7G8atymVOZSdJGcet+Zmqn2pUk2DjbJgjUg55dNhGfXxmlPJh0yHPfZhwKkiXykqhl1GkJdQsKKkgb2KRb74Ns4ZwpGXKeqv0p9t+q1OMUsx0kFwXSArmDslO/Xe+LY8I6vFcTEczjPTDNrJajp5pb7AOH274+rXAeKqOt/LCtDyk+uPNd1c0+Q5a4J8HbDvFPZt65eFwoCBsDqMpHhkPnUTgmNKwuzWy2gqdJ1nKI5ETO9HXBeioofDWgxXFpdcdY+KdP7zpKzb6XthjNx1sWdQQpBGyk/74A+HcCrRcm0aPV4S4UyOxyHWFEEp0EpBuPIAODmC6po6QSAex6YpbgS2PpX63JJlWpqXpQ6NRGlXkd8L7iJWwZbdFW00uOrTZL6VFuRJNyhCgkboSAVKO1jo7YYEl9mLEelOkNtsoU44T0CUgkn+WEZAkT2qmX5CmlO8gznHY7utua+45pZd9hp2tfe246YgvaK6Wy0Gkf3eo8zAqlwtgLWVnamDS6e9W3VQZBclMobCZkxwBDq77pasna4vc+1sJzMszMmdatU8ozosRymsy0hcqm/tdXL6JSTsD58EEYYfFTNRyLleBlOlPlFXqqVBbyT622/8V3/ADKJKQfr4wJcP5LSUxItIZU4CVRpDKElJj99aldL9/Jwjv7BnDLdKgnif1KjsdfDbKnmHAqSu4P8BkBzPPp/gUSZX4cUKhwUrYorSpChpaXJUl3Us9NNh0HUnti7zLl2mVl7mPCG98QkMpf5CHUOLSLFCiRcKBBtv/pjynSnhGq0ipplU9TTKw2yk63GozfzOJttqX/xiHkrM4zxRpMxiAaYJLq2UsrWFhSkJCm3wR3tYK98JWmXHmVurWZJGczCs4HXr+qGdfUHZJzH0y+nraldWct1nhlUPi8quIZaqLiGXkvWXHSdW2tKttPv1A6YelUoAj0tM1tKJMcNAyGmjqSAQNSm79UdbpPUYH60x+NU+Qh8MxmyEt63N0OrUm9groBfpfrio4PZxeo2ZpOQKm7rbAUuGT0bWBdTIPdJHqA7bjDbBOwxVs216n+psrfpn8q3ug4tvtm44kfyHMc/KrWm1U0GuPSEKbkOaGRJWFJaQ/EUQEPrJ2HK3AA6g74aJQLkp3v3wsMwU6NTZrkd2Lz2mXlRdC3NLJjPp1AOeQDcAebYM8j1NuoZYhlM4zXGAYzzqmuUrmINiCntbb7WPfDz2duXUqcsn/5IP6/fnSrEGgptNwjQ5evXQaVdJaCTc7nGl0paUVHTv5xtWtRB07e+IDnqBJJKsWbCCczScmo8icuUlSUqISpQSgp2JsdzjIvqPzEn3ONSUpjoWU3cKSSAe18Y6VvpLqgSjvbDEAR0rkipzJ50lJ73v9Bi0++KiA8EOKuL7WGLDmE774wdBmK5iuWchSMy17LTWVaMx8JT233XZtRXfSde2gHvsOg3PsMFD5aqufMsZXpjinYGVWlTJThNyF6ShtJP6iT0wPZjqnEGE1TI9Wfh0dFScLYZhWLzPdSijtt4wzcjZIp2T6cI8RxyU5LUHpMxf94+ojZR8ADoO2I32awly8uU4k7HZpJgAzKuZO8TtT/2oxhkINm3HGoTA2ByJJ3JzA5UfNU1udRGU6RzGBdB9vGIC4agkWQb+R4xe0xCozaWtWpI+U4kiInSoWuk7geMWpuyhShqJqSFmFJSTkYqiprpQSh75en0xaojg2IIIPfGD1NSDdHpIxk1rZIBBIPjAdw7xHiQfKi2mygcJqLmhpQytVktylRVfCOnnhvmcv0nfT+b6YT9OeozD/xMF6m/DGVTtSYV0toClC90kDTcm9vfDxeZEqO6wsqSl1CkEjqARa/88c3SYLc6rv0Wu5gkUp5plyMnnLbbDMhjdkuqAGpCtlg972xIY1brefYc2BE/EHl0PKqPCVANugnaareKAdqfG+sSag+tEaGGIbDLW7rwLYVoQOwJUSVHYYvct1BuPS0SawtilUxKHoE1l98NQ1eq6XG1j1OunbdN++A6VXnc0ZozFniY0iPQ48CMzVnW1ajKeSgJ5LKuwcUBe3RJ98EfCGBIznV2s3V6Oh90nTAjaLswGBsEtp6A+/U4Exu37a5VxnuggeZ2HXcnbLwom0uUuWyG29hJ/P4o1ZzfSOZBLWY4iZJWGmVv019pp5s7crmrSE77AEnrjSa1SYmW3IM7/wCzZkoOMt09EZUh5iNqOo6WwdBX+rx0w1a5VaVTaQV1p1lMFellYeTqQsq2CdNje/jETKjOWqG6aBRlMIlcr4pbQUVOqbJ2UpR3I3AFzsLYMa9m7ZpxPCdM9Tr4T62oM3S1I7QpPwEZdY28N6XLdQo9dhfC0arQ5C4bWlLMQK1JaA+R2M5ZTiB5HqHbCtq0+DlfMjFSUh5MwzYsuI+07raDIcGtSVHdXcWO46Hph2cbMrJrVCVLjf2arRLuwZrXpeZdTuLKG9jaxHTfCNyrWqlxKeo86FR4NRrECopVU6a+rktLc0qKZIUPkSSn9onoVJB74DYwlVtfANnuyAek5jPkSI+W80YziKW2ypQ/kDTkz/WmpeaatDgPvh9mLEQpUYJLiXStSgE6tr6TvfoDgt4Ztq/q0rmN1FC/inipU8oLrhuDq9O2k9vpjnDL+cWVmrz581ipVGdPecnI5gIXpulCEN3utKz6Rbewx0/kKhDLuT6VTiwGHG2At1sdEOL9Sh9ibfbDO1ticUuHYgaTz0H2+9BvEJw5tM5kz6+VW76gEFKf44iWSkWO58DEyQ3ttfEbRdQGnFW1ATSIkzUZaB+m2NSVaAUfkO2nExxtC0WsOlwQcQnU2UbG5wTkoQa7Sa9joIJWk3N7C/fEv4tI2KDfEYKUdgbADpjG58YzzJzrThFc5M5McphNVqc+XVawtIQ9MkuFVvKUD8ovh/0qMVQIpTbmIaQf4pG+KCBToNVpkmmqjhJfQVpX3Cx0N8FlKhKjxIyDfmoaSjV9Bh5eONNMJt2k8IToByqSw21fNwu4uF8ZUNT46VZx16WVOO6UBA1KUTYADqT4wvuJ+dAuj0s0CsJWh99b5ep4+IKgwNVjoOzeqwWrsMReL0512tZcy5MSg0qoIkvutOPclqY80Eltlxf6dyop/NYX2wuc35+XQHINTyjAivqmsqjLmttEhIbXcsBCQALj83cWx5xi+LFFx7m0gkkazA+PgD9q9Aw2xKgl459PzXRjdepyjTWX58JMmpNcyO2l0EP+kElB/MN+uLAoAOExA/AKjT3w1ENNeehpXyw6QYqUgvJKBeyChYv6bA3w2qLMcqNEp8x5JS7IjNurB8qSCcfMLxhGIBfCkpKY160PeWZt461pzBWUUaCt3mMNKCSouPKs2ykdVrPgeO52GEBWs9QnqhKq1HyRSqohxV3apWGtb0wjbUE9Ep8DsMHHFXh61Uq3S55qU/4OoTkMS4S3lFnXoJQtI/KbpAt032tjLM+XYkHKKWmmUIKRpSAME3brqEngyin+E21ilLanJWpZiNAPz9K53zhIYzZU6FSaGHaRSKtLU7Lo7SrsxpSSA4tPkKSQQD03wTSV5flr5Tua65Q5cQf2REJ9LTEZCdgEoG7igN1EkHxiLApsWFV8tvqYipeTWJTRdD/7ZWplKkpU3+nbZXnbBvWf6O8yq82Zl+tNsRKgpp+RFfb3UpBJADg3CbqNx/xhaQt11IBIgTIG5Oe3IV8fZYtO1QB/dGZ5Dn570TcO61Kz9QqhlLOi2qs/EQ3JjVGMrQZrF/Q4COjiSLEjzi+hVGk5WylUc60mhz0zpCEx2480qDzqkHQ2g6t0pJ3/AJ4G+EeRJGS83SYbhQlBjuupZbUVIjpW4LISTvYYPuI9MdrGVI8Rp0tKekoTzBuUEhQB+xtg1L6y0p7VSZ29c6FWhCHUW0ngVBInLPUdZgZ9KR8ipVeorcrOaM/1Y1IOFLbFKYb/AA6K51DPrIDpHQ6b/W+A1hunZV4vpqEqdIpVHqdNXNmxojhQZF0HXGTbstwfa53GDrLH9GCQoSWa/UWZDDzaUJWsFx5hQVdS2TcJRq6G4ONWeafTqZmysRUNsrSzl4xIwdIKrqlNpBTfqoC5232xgpS23Q5MyCDlHUejXTNuzcQzG43nUx4b7V81mguRYq6hw6oCKE3pMdEBstSYwSbpKHR+cde2HzlDNkWvw2nG5aJLLo1R5NtPOHdKh+V1PRSfuMC2QqNHqOUjAfYStIHpJHe2NPD7hvAiZprFVWp4sQpwRFihZDSXkoGp0p6FQ1EDxhha9qYVrNE4mzYFDiEjgU3yzB2G+R59PKmqU6u2AHiPmNKcqvihSW5r8ia3THDCeSpxorPrCd/nsLWvff2xP4r1aXSeH9Zkw1utuBpLanm/mZbWtKVuD/Kkk+3XCapr0dEicaVl5MmVR5AVGlMygzT0lDeltboKrKWEkkqA79cbYhfe526nRroMwM9tetKcMw7tUG5J/iRl8NemdGPDXMETLVMrEOtS26RT404NwY85wJdaBbCloCQSdIUQR16nDIZUxLjIkR3G3mnEhbbjagpKwehBHUYQd5tYZjS5lEEWu1F9Lq6nBcQ/DkpbTZWp0EhtGna3t3wweBbclWVJj6kqbpz1ReVTmyrUEsiwJSf0lYVb7+cfcGxZF41wnJxOuYI5SCNiZ61riNo2WTdhUKJgjbyo7DItbqRj3SPBxMW2FJ+uPOUfAw54qSJVQjSCWX0LUEghVunnBbGc0m5BP0wMSIqoitaAVt+e6cWMGYXdB9QUPT164NvElwcQoC2HD3TWzOuT6ZnyjfhtRC0FDiX2JDVg5HdT0Wm+3sQdiDbCXzxkun5GWZdVrFVq8yXHfaDzaA02yAWgfQj5LN6gVdN98MidxGXKadRl2IX7MvOpqMtJRFKWgdZb/M8RboLA+bYXUNurVfONZjUqY7ObTRpExmLUkWU49JZRzE7bi5sQOg6dMSV6204RKQVaTVdhtvdISpUwgAkj5eWcUSp4MyHJ8OMzmHn5VKBqadbvN5PUR0vD5mVbXvvbbvhuoCUICUgJSkAADoB4wP5BcbkZFy86y4XEfhzCdR63CACD7ggj7Yvx1xo0w21PZpAnMxSi5eccMOGYyqFmGDIqdEmRYbiGpS2yWHFi4Q4N0k/cYGnno+YsuplLbLbiQpt5hXzMPJ2WgjyDf7WOLzM2baTlCAJlWk8pKzoaaQkrdfX+htA3Ufp072wnqFxCq2auJFWp8GhKixqhTw5yivWtp1vZDz5HpTqBCSBc7J7jH15aCOBWp2ozDkOGVJGSc52HP10pVZ8iGkZpi1hprV+GyEvOKSNwzeyvtvh+5P4iQ4dLDE90JDKNSXb+lSLXB/hhb8VaRyKZMy/TWX6nXpjIErko6X3uezbYA2B3OKbgtlbNTtATmSuQBOy1RlrW3E1gPzOXe4F9i2ggnf5rWwhaYeXC2VQUkj/5P4NUeIXlm6vhcEhQBy/5DL5iPvToyFmF3MDmYcxRIyXpDh0Q461aQpCAdKSe1zv98XdHqFTzJkt52sU9qmPalKYbS5rICTcKV4NwdvGB7hEtNTptQqLTfKbnPrkpR+kLuQP4HFrQoDcbhU3FYU/pVDdSC6nSvdSuo7YYW6/6Xe0hXnnQN+hsPKCRBCkAayBBy1jblnXzfEWnLoqZbC0uSDdvlJN7ODY4RKkNZyzzJqq0pdTFkJhNOdQFD1LI+5t9sEefYNcrHDROcsoU9EBUKGqNLjrA1uNNbGQ1ba49XXe2/bAtwajOU7K7EiqPtN0qqPh6NVWyVtxZKTYtP90H3O2/XAT1vcKT2ijIyAjkdT660XZv2ltcFtAhWcznBGg6xrXQtNmsZZy/8QU30AJbQOrjhNkIHklRAwSUKnCk0xqMTqeJLj6zuVuqN1kn6n+AGFXXa/Wcv5zoDTlHYqdH+GVJbCXAha5HQqaUfSpSEG4SSLhRINxhqUStQK9FMiE6o6bBxpxJQ40r9K0ndJ/17YfsPNg9iCOIbbxU9iBJHEM+IyT9B9fj0rdNiMzoz0WS2l2O+2ppxtQ2UlQsQfqCcc71HhFUcnU52dWK9FZokSoR+TDYur41JfQlPPvYD09QL7g3x0ja+BDilGZk5aZZdiMzC5UYaUR3k6kOHnDYjxa+OrltC2++JjOs7C6ebUWW1QFwD1oApnDvLmb8zZlpztaq0Bv8WcL9Khq5MWShKEW07WJsfVpN9+g64ckamRqbFZhw2G48VhtLTTTYslCALAAeAMIXKhNH4mVykNVPnUWhSZFVYjtjdD6k6SjyoJ1EEXtthoQM+Ox5UVmpPw50d9xhhyREbW0qK48LtBxtV7pV01A7HqMZ2K220wkR96JvrB4cPCZTAI8/Q+MCaLFAgWxhzPbG99Fr4gLqS2lqbEVxQSSm4HW2GfGBrShKSdKgLF0lKySSbHxiK7TnHYUqKw4UOvMuNtqJ+VSkEA+1iRieu6zvYq9setNnVqAse4weTkRQqcjNcxHNeZKDQoCJ1KmphsKFPYU44LtussrZdbSOwJV/8cNrhdkGp05LOdM0VV5NRKA6ptZ/u2Ai1nD50gbdrYFs9rX/AFhXT1hNqZWnJy2u6m3glaFj2+YfUHBvmzN0WpRKZTwHVUeVKjt1OS18jTS1AJQo+FKsD7HEX2rabgtqOY08a9FunnlWTZaASHAeIgf28s+fzNGPD+Aqm5MpjC06SpC3wn9IcWpYH2ChjbmnMjGVqZ8Y42ZD7qwzFjJUEqfdPRN+w2JKjslIJxc3sm1gkDaw7Y5e498RPiM1y6c0ta0QD+HMttndS1AKeI/eJKG/sfOGFwotNwgSdBUnaMC8uTxnhSZJPIVjnfiKpDzpS0qq1uoJ5SJKLlShfdthIuW2e23qXuT1wNMMcU8vOS643PFCcmsJbcZZ0c3lp+VIFjpO/m+GzwmyBHy3HfrFSaD9YcbV8VLcNxDskEst/wCUEBSu526DFtmqOusS2KDSWWXZ8gc0qc2bYb7uLtvbwOpOIP8A1N9m8S3bt8RUc1nfnGwH16U+bW2+52A7rI5chuT9tq2cK2W4nAlFTDPxc+VCkzZTjqtS5L/ruVqO5O1vthF1viLnOj8HYOWGWqezSn2ghU6KSXltLurlqHRN7kFQ62thm0SJUctw6llmRVZ7jFDm8tSUupjRhFdGvUoDdWrUrZRPthXzqHX15QqNLYQw9T2HXYqmXkHnMFCrjSfGmxAPnFK5jYL3Zt93hICp68qCawxslXEeKc0x8p8a6L4MpbTl4IRbTy2rW8aBi3g3TkFKFLW4ptDiSpZuTZaupwAf0fsztSsvxI61gPcpLKgey0bW/hbDMjtIguv094WiyVqWyo9Lk3KPrfHbGbfB/wCk/Gv1/IuFE7lKh4AGfrXM3DOs5zkUiu0SJMZcpVXdkNIQ8Cpca6ila2+wBG1jtffDa4DZTj5Xi5pyupAejMzWlFpYCwA4yLpOAarPucE11liVCdU+46tVGeKCWJAcVcXV0BQSbpO5sLYlZHy86sy20zp0+WupxpktaJpaWpYbClOFIPrQFG2kdLYAOKvWlwpVwD2YyA56Z+U1pdtMvDhZiSASrrS5VLrtPqU+i0yvT2oVMqjq2IqlB1lsoWoIslXQW2sDuL4Y1E4nRnJFPZmf/Qa4VcpiUi6oyj2BPdlR2UhW6dQKSLYzzFkBunQKXmyKgJVUJK25vglx1Rad/jsfqMUecsnx5NLLzCHOQoXdSoeqOsHSrfylX8QR4xtdNtPKS8qUqGYI1z+vhVQizsbhhLbeSsxOxUMs/GukcrZgbzFShJLRjyWlFiVGUblh5PzJv3HcHuCDio4jqUzRolR0lTVNqMaY9bs2lVlK+wVf7YSnBPiZJgZth5crLhMiVemPOKP94tCSphw+VaQpBPcacdFVREJdJmiplCYBYcEkrNkhrSdd/wD1vh6wtb9uO0yVoeXiOh1qAWE2t1lmAdPqPtSO4n8JfwRDub8oy5DTidTktrmFXMSskqcSfe+46WxX5SYzjmesUZyYmEim12RGe57ahcIg76Qm+xIFt8FmVs3GPkZcOUHnWW2FphLlo0LlRdw0sjuSm1x1xU8HCX8zQqaJaFJo8eTPUyFXKFSSlCUdeyUqUfF8LbZ9py4CEHyqscffbw9ztYJSYCjqQRI8wQKamfs9wclU5K1tmZUpV0Qac1u7Jc7AAdEjurthfpb41SUh85ly7ELg1/DiIFcm++i9t7dL+2LPiTlSu0mv/wDULKmqbOZjhmZTlpCy6yO7R6pUO4HXAoP6R1CAAdkymnPzNqb3Qe4P0wLj17iDTiRbJPDzA4vjmIpFY2aVtBTICjvO3SPvvTmEZadymxF8bGmglQUT6Ta+JaHEuJ9YsfONa2+tji44ycjU4BXL2a3DC4roZqmX23apKfkvkzqgdEqLzCGSRezYASdIPUD3wyqq6jOeVBQkR4chTihqplKWVoeAT6ErdSNLaQohSjfonGvj7RIi42W6o/T474aqBYedU2CoJU2rQknunUOnnBjw5qcZNIajMJQ2iwOlACR/LEJeWCE4kkFZAidTzPX7VVNqUrD0vxPCYjl69GpuUKoqn5EYXV3F/HUeIG6ilxV1IcaR6rnuCBcHuCDjjbK1SYq2cXc0VuU2y3GeVLSXtwt1aysm3c7iw+/bHS/9IGFPjZSm1ChS1Mz6klulOxUp1fHpcVZKQP8AyJ3sfFx0wB5OpVMVmbKlEfpbUWrMxJLL8aTG/wAQMHQog7KsrcHfrhpfPBXDb/8ALKRy5+YyqSvVP8aEMyAs5nlGZpiUFancvUyJI5nMkMocXvskyw8Dfz+W2KLgvV1SalPkVB3mTZISjWrqQj02HgC2LKtxRlumx52YKyYz7CIiktsiyXFMJF06RuRqUTt4wMCDS6BAzNmukcuShNdj/CTU3/ZtLKS4hPsCsg+ftgJTPCkcORRn8v1XoLDaBarbGYcgAgZTI3PU5+FMmuZWpUjOlPq06EzLanMGA628NTfNSdbKynoTstIJ8jFHmyiNQ82VABha2a9ThJQ1YBPxTBCVnp/41IP/AK4s38xM1WhOkLAeZSJDRBsQts6x/pb74ruKuZKXHy9SMxx5zXPgTGJpjIc1u8h4aXUqAOw0rvvYenHxws31m4lMSfrlFJG23mH0BU5Zff14UjamupcKsxuSYWt+O44FOsA6dY3IWk9iNx72w4ss/wBITK9ShNs1N9oKUkakSBy1/cHY/UHErN+WKbmJqm60pkx33SrUj5n20tF0JB8qCR/E4WlVyBJzRlKFWajH5c+I08VxWEBCuWq3IaA23BIHnCazxRTaEl7uqmCefLLfTpEinLvYXcFf+DJ0O0xTWrGb8m5gpD8VMpmoQXB+1gSCHG3B+4q90KHUHsRi2iZMoVL4ax6Xylymo0YmO876ZGtZuk6k7hRKgOu9sc/VThxS8lVDJuXJdQeTWarKC6utBPJYY2JQmw6jcX/2x0DmjM9MWukU2nymH9cgPrDDoIaaaFxqt0GrQAD1sfGKFDqUIccdUCI0/We9KrhlEtC24pJknw65bZ1tz7AjJ4eTKe4QG2WWUJI2sULRYj7jFUqhwqjS5zcJQUqa0sKQ5YhDihpBP1629sC/F/PCGcuintugLkuJSd9wBucZ5IzLLpWUJdanMI57pD7CSvdazZqOgjsCd/pc4nrpxN4tDkwkZCmabR21w33lSo7xMfD8Vz1nya/QuIdQfirSiVSZTJCkHYvMBJJH3Bx13nSec35Xi0ikvhp6uR25IcKNSWY5AXdY8KOlHvc+Mc08Y8oRmzTDTloVVXHCzMUTbm6zcvuH8vrUdz2I8Y6j4e5VTk/KtPpz0xU+SxHbbdlrNy6UpsLH9CRskdhiisbtL9qOy0OWfTKfOoti5Nw6u81ClEjxoErNYp+WctGh1JpNNeIOiFVGiuLqJ35TyRsnckb3HjAfweVHXmigSmY0V2Uqoz2lLiR3ApTXLILqnT6VtghIA9x3wdcZK01+FuNL0lpCSopIuDtgr4N5caytw6o0MMFh55n4t9JNzzHfWr6dQLe2AMIskKuFlCjCCN5nXKqS/JRYJWoQXCcvv6z60XBRSLbg4q36JGdeccNKpyypRVqVHQSq56k264tl9zjAPkC3jFcUzU6kkZio/LUTY3FumNiG1XsTcY2hN8BWas9TKVmaJTaNDFRTDBcq7SdlIbUn0JQo9XeqtHcDtcY/OvNsJLizA3JrMcS8gKs+IuVl5vyZUaSwvRKUkOxV+HkHUj7Ei33wk+HOdSwpCXgpsglJSfyKBspBHYg3GOh4k+PU4TEyI6HY8hAcbWnopJ6HCI4zcPahlyoTM7Zbjl6JJBdqMVsbsvWtz0julW2oDvv3OFGNWJuGw41/JNUWAXrbZVa3H8F/I/up682yc5cSEswafIqbdBRojtp9LCJKx+0ecWdvSn0pHW5OK+pZ2n0viNlqn1lCOZGqKQlT0flvMtuIKDZQulTZv1Hcb4IuGfDx53K0dNZqMthLieaqFBeLI1q3KnXE+pxZvvuAOgG2I2Z8iUvJeZcuVulx5k5bsh2C81UJqnWeU42bpuu+hSiNj0v164UISvK4cV3U9eW9bF9sLNuhI3HonT4edXvFTJ8etrbUp9a5M1xiEwk9I41XUpPuR1wNcfKjRsg8MImXoaUMmVIZZjtDrpQoLWs/w3Pk4nZhmFt+ITmZmOy0vRHRJZcVLZUdgjQNnFdgb9sITit8VnniqcviXLdjUxAjl2SfXsApxZHYlR/kMEMXrDrqyNIknoNfrWqy/wBkwwlZUQchBGe2uWQH150VUOvLqLC4ji5a0OoKeXE/vFXGwv2+uCSW0qdleOy63HYakUgRZYW2G1qcbKkDUq11qBAASB74JuGuRYMGMyEx0oQhA0oH+pPc++DjJOUKbTnJSHUqmyoMuQhiVJOt1tt6yyAf/a1+tsJLSwN4qGzwpmfhTTFsWbbMRJTryz9Cl1w1rcasZIp9MrzqGShhpyBJi6itkNCweV+lSVH6GxGLLKmVMxQqtIqWZayiQ0zIDzjIIKJK2knRI1fkBJTZHS4wPZWgPZbpj8F2kvvVCEX3IrcZzQanFLxUUDspSFdU+D74KX8wSZNNiIRS1yW5d1qD7ZYTDYHVDl+oBJOk9hgK5xFLaltqSJBPCcvH6Zj4UtWhRUQ1orX9cvW9LwlVa4nQFKXMgw4EN91szLJdQpxVrrVaw1KO1+wGLbNsmdAm08MU4reRT0/FyIiAUqUXDpClAb7D+eC/hrlttea58l5nnU2ZRUMMMSRrK2A+tKCq/XUASL9rYJGcpRm59ZbbDaacgsR4kVseiOlDe4t5urfBbmEuKYRdDPKOE5czr5/GtGsVbt7jhIkJ+eg+/wAq5MzFmdytZnbhOhYRFBKwsWKldSLH7DDGy/SjmJ6n0CZU1xKdDKZ1RdCrLW6oWbZR4sm59r+cDvFvL0bK+Y2KvKQUtNOhDriRcqaPnzuLffBDwVpzFUkMVutS1NSJjjklpsKCUMo/M8snsAAlI7WvjZwBy3bWwI2AP/L1PhkaOxa7Nxbm0I4uI8WWyIEfj403a/SoSMu/h+W6UstaSHWUxrokoKbFK1q3J7363wL5Tz5NpVIdoFXS4zMphDSeYblxg/3arjrYen7YLp1Sp02MVUTLGY6ggA6ahEJZKv3kqWoFf8LHCnqdAzdnTMsZFHDL0iAlxMhc9HwkhtpR2beT0VvulSeu+CHre4KuAESrThmPDTeldgG0tBl1MNpMmYkfD7gVLcjv8Ss5QaGkq+GdXzZR/RGQQVk+6tkD/NjpAoCQAkAJAsAOwwueD+W4WWY82HMKxmhzS7UEvJsoIvZAb7Fob2I6m97HbDGKgAb4pMKsxa24RuczSzHL4XL4S2IQgQPz51iqxTtjVt4xg69q9I6Y1X/d/nhoBStKTFSwslQGEZVc7tVbNOZ4tNYdZXFqJYbmSVgIakIQlJIQBcpJQfm8X74eIaQLqvYDc77Y5qmVuJmPMubc2ZUTHjTELS7BKVXRUUsJs8Hmybevqk2B2B84RY+lCrMhRjMfX196Jw9aUPjiE5GnXw3VNcy6X5ja20yJch+M2tGhSWFOEountfdVu2oYw4xtyf8AplXFRdWpttDiwjqW0uJK/wD4g4G8v8VU0sR2czyI5YcQ0tMwKAdSlYulTjY/LvbWPG4w2HWmJsNTa0tvMPIKSDulxKhuPcEHBdg8zcW4SyqQBHXSsnwph+TEgzkZFK7JObo34fy1OAkG4I8Hocb831+n1GkvQ3koebcHqQrof/8AecLrN+TKlwrcflBbj2WkL/s81B1LiJJ2aeT1IHQKF7i17YX9e4t0mGg8tyRUZAF0tJQW0fVSj2+mJN23xBv/AGiUyOfTxqxQ1h7n+/LkDUjcHlVlXKlVnVS47uYag3Gg06VUE7pK2eWLNELIvutQSO+F1wqlvS8zT5U15b0h1guOOuKupSisXJPnEJqqu5hkzZVTrCGDMADzKTpQpCTdKP8AKCAbYv6PlNWW8zsojTo8pyZDTKgqbWOXLbVfU3f8qwRtfxg4MN21su3VAURsI0zOcehnzpLZ4w3dYy2UCEA5fP511ZkyeyI7YuPlAwR0BUhNdrKlML+HUqM42tO4XdvSofYpGEDlrO5hrTEkFxh5vYtOjStP27/UYaOUc00+RmOUuZKbTGcpGpZWr0nluEq/gFjAODXRZfSw5lrB8jTHGsKcRxupEg/kUQO0WNUafPhOMNKlRpLq4i3Rbku7lCwRuOo+owIZQy3IqtVP4m7U6hESCqqRqoCEIlC2kNgAAja9t02t3xPfzbDYzbPDEtDkSWyxLYWFbFJRpNvb04s387x2WgecCSm4ueo8jyMavrslPBbkSgnlmJyoRFvdIRCB/IA+EjP1zq0hPAZkr0pLLzoYYiRUtsIuoCylbD214yhSENCqKWR6prp+uwH+2AzKebKTPEx+pomuidWHHEOxgrS0GEpspZSfl2+hxAkZ0bXAeeYc9D7rjyVHayVKuD7bWxre4qhLCSkyTOXjOtcM4U6t1TcaQPXmDS//AKRclmRR5qRZRDQP0OtNsVv9HapRc51tmBPF0wYpfkskWS4G9KUD/KTYke2B/ilVHavCZKUqMOTI0mQdkulIvpTfqAbXPTFVwkznD4aZyFSlpUadMZVEllsai2kkELSO9lDp4OO8Kt0qtR2gk8RI/FdYniZs7sWzR/sCSfMmuvq1nmNT5JhMsJeW3NYgueq2lS21OXA8BKf54DsyZvgy4TOZWg5HepzrCluNnS47CkJ239j/ADTigqjeWcyvPVFdap+uU27JblwpIBZbOlLWu5F1Cyj5AJGFrxMzLQaPRV0fLNUS+qqobbktF4OqjsNG6U6hsFKVdVuwtghxbtyS0f8AH+KLSxZWjIfkkgDwPMa7iY/xTNqfESnwq9TJUF2Qt2lyWvKiWHlht1tRPY3SsD9Q2w+XWgpRuokeMc6cCKNTs00miu1h1xM15xc5xgo/78R1aW1KV2QkkG3cj2x0h7nBWAIW3bqQokwojMzpkfKQY6UmxZ5la0FkRl9ajLji10ixxrMZRP5cSnXA2MRDIVfoP4YfAmlqOIit+q3THMHF/h7VuH+aIdXyfMiR4VeqSUIiKb9UeUoG+ny2bk27X6Wx0rJqUGG82xJmxmHXRdttx1KVLHsCd8L/AIzUtyuUKJKonKn1bL85qqCE2sKdcbAKVgJ6/Kbj6YDuEB1pSeEHodKxdQvg4kgztSvzbSaPljIzNIjuNzpLC9Ds5YCnnnB/eWPUDogJ+mHrleqMZY4YUqdV5AQ1CprRfXcKtZIGkW6m9hbzhB5KqcOtZimT1X0xy0thZFyjWtSnFAHbXsE/bGGda9pmPwGFJjxUKDkluMdEeS4N0O8volVjvbqRfAuDWDrNuX3TJVTX2c9mHb/heUYCtegB+tac3Zjr3FzNDMZphVlE/BQFKs1FbHV109z5P2GD7LfADKrCm5dXiJrk8AanpezQ9kt9AB2vc4peCUZt2mvVtwAyqo6rSf0sNq0pT91XJ+2HPDc02tt/tjzn2jx91d8bZtRSgGCRkTzz5bRVBjFwngFtbiGk6Dn1PM1SPZQy3FY5SKHQ9KBYIMZsD6X07fXARmDhvkPMC1MKoTNNqCPWHIFo8po/rRb0uD7Ybb4afbKFhKweywFXwF1/hYzX5DbyKk9Si2rUnkHWr7avl+2F9q2829LThjmCcvHP/NK7Q2xyuDHWJ/dAk3L6cv09C81qi1ei3DbdaSzs2SbASED1NK/fT6b9bYqmf6t5czdRnaXW2nUyHHYy4vxPOQnW0oJIJGwKtIsfIwaTstZvy0tT1PfazPT3EFuREeSEuPNm9wU9F/64QeccztUaeYMNmU3S0SW3UxJjZD0MpWFKbSruBaw38DDvD2ve1w0ddQD3eUxGR35HY8y7++umGkqZWHGyQDnmPEc/KmwqmuzM10RjMEZ9NTbpTr/4asBpcwtq9LZANgk3vsdwk4uKpOhV+kS1T3HXY8FlTypa06BEkjctN7D0AAAp6Xt3OKXiFlybX6XRMxUtqbQGYdSS7+KTUllbLbtgF6VHWU6reBvgVzNKzxmiZFo9SeYbjPTUQWlNgNplrJALwHVSd736XIx37i85wJEonYyCO8dMs525eFcKxG4LhKGyqNCnQZSfDrV9AXVaBkaJVzDkR6eaY+r4gpSWluvE2vbdJuQBcWOLNqmZCpkWKwl6VmaprS2G4jLinitdhtpFkJH16YkcXpsugZKkZeYy3WW3qk/GpMNQQHEOttm406VGyiEGwtvgDgjOeSae1JdyrMj8xQbLoKFLcWo+luySShPt1J6nH5yzVwBSpQtRPdJCSfv8OdYrxW+efSyzCQrNSs4/dMkZJhrqDFTzPCiTqk83yKfRmyFsQ2+/spX6l2sOgGKzM+S8nyMwMmtsxqk/HQlsRGyGIcFF72ITbUepJUftjOg8Oc81KearW8yt016YgIeajpLjzSP/ABpV8qT9L/fBCOBeV3ZKpMmVVprajdTT0o7K7qJFicJzdNNuZP5gR3Jy6DT4gydSaNS1Ytj+sriO+Wp8fp6FVtAynkGY5zIGXaUtkn0KEQBLnum/Ue/fBhJ4fZbqEFUVzLVIUytNigxUC4+wuPscS6FkCgUD1UxhSdrftXFObeNztgjLrTLfLQhCT304DeSokuqeUEjQlWZ+BNL7t5pSoYBjqKXGTsu0/g9VnpDQccoEsJZUp5RW5SvVcBKjuWFKO/dJsTcdGVT845frFUfpUCqxpM1i+tps3tY2Nj0Nu9jtgZzEuO7GeZkIS4y8gtuIV0WkixB+2E1lSqqYcTQUSXoiKLLcvLbP7TQlRCEoP6lXsTi+9hsVcv212z5lScweY69eu9EW2CpvElUwQPX4gV0LXMzUSjyGY1QqsSNIdWltDS1+tSlbAWG+/viYWiCQRvhSV8wYdMaYYYQ3IVMiuW+ZSnS8gjUo7qVa9yffDickxuYq8hgG52Lqf+cWjrSm1cNL720FqhHDJmdekfnmaW/HOjMuUKBmAMIVIpcpAUspBIZcOlQPsFaTjHJ1TbmQI8h0MvSGPS2SQh5r2Q51t+6rbFBRs0f15oM2kOVl2OubGUyWakPiIqiobKS4LLRvYi5IBA64EErzDw+qf4FWoa1rcRqYej3dbkpt8yCOo8jqMbsAIPZuZA71VWmGq93OHvqAcSZT1B1j9HetvEYQaLmN6u05sxFPK5VVh6dBuflkJA236KttffvheVl9youy1i5ZLi0pUPzqAA/kP9cWGccwuT1SFvKUtLLSgEL2UlNjdJvviBQ0Rn8rtNNNLLoT8ZzirZYXsUAdtJT198DYi+ltAZQctao7JpuzU3Zk/wAgT4fqaYvBqoNtZPoKwbaWnWVA/rS6q4/nhyQ57bzYIO9scp8OMzN0OtVDLMmV/ZZD/PhPL2CHyN0HxqG31Aw46HmsoeXFeUoONdQetseM+0OEL95W4N5UPAmflMVKpsxcM9095BKSOopqIknsr+WM+cfpfYnA7Dq6XUpIIIPe+LREsadRIR7k3OJRQcQYJpQ5aqQcxVile4NvUOnt9vOBXiXTafJyjW0vRmXSITliUBRK7XuDbre2Lv4lJSAm5Uent7/XENDomzQwClUeOC48TuCbbJ/1ON7e4WhYVuCD8PzlXxlsoXx7DOtedIUPM3B0XcU7HXCiyVLaNypCdBUR9gcIiFl+dGrynFGUsUmYxGjFVzpu8NIG3cb7ecFFSreeMgCqUKhRqfOoYimeIspBUYrDpKVISbg2BvtvjGdxIZmUqlRcvan6suRFQy3JjlPw7iLbOnovwLdseq3uJe8KZetxIMcX/UZGT5TTrCi9ZocZQApKjIPT7ZU2+Ja46pmVEOuISs1oKQknc/sXRcfdQ/jjQ/phoQ+U6ksujmC24Sdifte+BBmj1qqVqQrMVRbmVN6n8yKttvlojqbd3ShPYXsb98EkKsfikUS22tTyBy5ke24PQm2I32qvm7+6DzOaQAPHUz9R5Uvbs+yYSkGY189PuJ5irpHp9NwR1SR+YdiMbkvkG9yFeR3wPiUqmsgsFUyCdwm/7Rn2xsZrkV6xbloH7rw0kYliwsZprM2iyJAkVfKfHXYn93bEORUUs3uQBipm1xhkEfENKV2CDfALmTNp0OJaWbA2Uob2J/3wRbYe7cKg0VZ4Ut1WYyq9rVaVOfDDSx+0XpG/bufpa+ElR8xNJrU6oNuoUh2a6+jcXICjpNv54ss4ZsTSqc5SUP6KxUG+WsA3VCjn5ifC1DYDrY4CuVFEVESLFbaQFo5SUJ1OrUDvdQ3Nx2GPUPZRg4ce2jXIeG5/Hgeldue0LGG3yLVtHGDkrpNOjJ7DOb5SZtbQ7IYaXzGI3MKGyR1ccI3PskdcNT8Jo6txRKcQd/8At2/998c/xa/NyrMSzOiS4jikhxDL7RbJT+UgHti60Z/mf2lul15SHv2iVJjKsQdwR7Y9IJYV3iqZqgxLChcO9oHglG2eXlnW2rQv+nOepsFCT8K07qaB6KjuepP/AOpuP/XDbpkhqr0pnlyFoSkEtvN/3sYkW1tk9Pcd8VvHfKnx9GbzFFZ1yKckokhI3XGPU/8Aqd/oTgF4Y5pdjLNOdWFcuxSSeqexxywlL7JQaX5YphyLhJ/qIyV5b+etfcRYFOzrA/q7mEph5xjSfh26jGa2dZ+bmuAW1NqR266unfEFvghModJUnLdSlVZbbSg5TZ8cR5BB3JZN9Kv8pP3vguzqhgZyoLykf99TXmHFfqCVgpF/Ivhlx5UZNKDzvraYZLuo9QEpuTfzthaxYI7AocJJBOf0pW+v3XsbtgQo/CZggDlIOXzrgCuhxudLTKZcZeS6oONOpKVtqv0IO4ODPLmfK/S1U5nMMNxMVPoRPcQeaEEekL8j3O9sN6TlU8T3o2dDCjt5ia18kBsFialJOhDgPR5KT6VdDtfpiBnHh/CkUFqqwEPqDqSH23zdYWNlBXuDcWwuv7RBHYuokc/xWuDYS41dOLfe4XCo5DMTr3uhzAjkatqRWI7CQh2WllKxrRqN0KB7pUOowQx6/AZFzUG1Dw2kqOEfkapvQ6k9lyRIjKZUhTkJiYCUuODflJUDdJUL27X274MqBmyhSJwhqyqUzk/4EiZpCj7BXX6Y86xHBlNLVIJGuUac84+9PXm0OEgg8QyIEa+cUwGswS668YVFaKj0W8rdKPdR6fYYIKbyo+mnxl85DZ1SZBO7i+pF8DYczVWWBDi0lqhQTspSCCsjwkD/AFxKfejZYgpjvPMsIbQVFkrupQ7rcPZPe3fpiaeZB7iInkDPmSPkNt6UvtJI4EwDyBk+JI+Q23qyabTVK7PYfjMvx6vHEYlS9CmIyAUlwX+b1LvbAbkLhbOoE92VWnUtvQHHWobGyrq6fEK8XT8qfvimy3WM3ZwzO7mnLyddOgqREEMAF2UwV+o2O253J7bYbHJlynamadGXJUly0tJuhSlkDoVdVJA2ttildavGLMWbSJUoagTAjNJ6xv41g8tdsVISoAKAB8ojXSQR40p8zcS5OXM9NMjn1WDBbQ6hQI5rfMT+0QSQNSbC47ggYLlSBVm28z5TlB8OC7iEGxV5BHZXkHrhWoy3VM65hq9abHwTKpJZS24nmPICPT60jp0/jgponCybQX1SqTmypQai/b0qjAMqV++Lmww3e9lVKtm3kwlQSJnRXMHz3FMlMttNoUD3tCCJEa5xRZDzVTJi1B940eodFpdTZpw/Q9MYTYq5C9QYZXf/ABI74CT9j0wD5qofESqtSKVVZNJVJKw020hr9rIJ6aCBuD5xPoPARFPp5ezTV61JlBN3ItIc0txf8zh2UoeBgOx9lV3ClcCwCMiMyPjl8M6yfcaY4VIOZ0AM/A5GPGpNck0+hR1SKvVokJAGyUq1rPsB1Jwup9SreY5TblDecotKbBLb7rep94n/ABNPbboe2Kt7ITOX88Mfic81CjqSt+PJkEjmaDu24CfSodx37Y6Jo2UxnCDBlVSCymA0NUNhLfKclIPRTxG6W/CepGG9pgqre5DAHGqJJI7o8s5PjX332G+O6kIkiAYOXrn1JiuaU8Icx1NQl5eW/VlFwl96QA0gK/UXVHSfffDo4VZWh0t1UCHFeYzBFQBValLbS4YZO4bjgXSSrsR23PjBtn+A1HoqmDpIbSAltKdDTSeyUoGwGBjh7UXE1OoxklKGkLaeJA9Sl8uxue4AGw7YsrrA0XaGw4owDmBlPQ9KAbwu2cbXfW6OHkMzGmcnXXl8tSvOVFYj5cmvriJffjsOPxpMtfPfaeSm4cCz8p2vYbYBqY3OnU2JKk1ioLffZQ44oyl3KikEnr5OCfiNmQNUGdGCxrMYosO6nCEgf6nAzCYgMw2GlyrLQ2lKhfoQMMWbRtB4UiABTHC7dQt+JwZk8p2p7yJDS23EL0ONkFKgrdJB639scy50ojWQs0IdpNRiPQVrKo6UPpWtkHcsrAN7DsfHvg1zZUKjT60pOaG/i6a85/Y1MOqbi2/QtP6/8xse2I2Y6DQq3SQ5EaDSCLAtso0p9iE7g4m/ZpN0+z752qSFbDP50PgFubNYcJlC8jGYP78qwrFcazDlOPPj/wDfUR9Mnl39XJV6XAPIGxwRQa/8Xl2pR23dSZEF7lG/5i2en1wj3ZdRyrLCi7raSSEPI3SR0KVDwRtY4IMq5kZhyEICv7E6q7RKr8onq2r28HFMl1CSUryn61Q3OENqbIbzAMgct4+OfmaaPCKVHVQ0xiRpKELFvNv+cfcVnVUWjzKswgLaeARMZHTX0Q+n3/Kr7HAVlysLyvKciI+WMsrbP/kjrNwR9CbYl56zEnMMKLBPOW1JkNpdbjjUtbYOpQSO5sL45xJKV26njsJ+FK3cPdGIe9I/icz9f340pqdlCr12cZTMCSqaClxtSkFAZVe6FXULWuLe+G5WstRM+0Om1adTnabUJiCgoca06nkmyyhXuRqAPUXt0wX5FlRUtrWpVTkoW642pVSXrcTyzqAKT8p0qFtvG2CurTo9co8qHLabYYWG0kqXZTZVYgg9lpsT7EDHnj98zfsnjV2a0TwnfIb9DS+9xJYuApLcHc+OuW+f061ztV52bchU9LSlOVCAk2Q6l9bakDwoDAszIzVxTnGkQGm40YDmPhBISAOmtZuVE9APOGhVs35dkt1ikTKwzNfjtqS1ICLJni21rbcwHYgbHqMXHCChxKZS0MNpAcV+0fX3W53/AIdB9MEey1j72tSrhuCnOY1nQjb1zo95auwLpEfL8GrfIGc4zMWLTKcxCp0FmHyQy2i70N0HTzHLj1DX/G98X+Xcy5prP47BzHHZo6KWhMYTo99Tz25LjYO2nTYgeTgSzTlGbSq0qsUqA5OpinfjXYzCkoUh0W1pWTuWTbVYXIIPnEGn1ufW6k/Gpy364XqsmSZUZKilhtTWgueBpJ2B8YaPOutOdgQZzjrSx3D7e4SX2YAgEzqkz9ec67TnWuq5RYhVN2dlCXLfmIjKmupUq6ZqEqs4Ekf4ibg273t1xMonFNceM63KkMLK29bLklJOuwuWiR0JGwJ6HbBplnKLmXZL1Snqipkx46ojAjE6VJKtS3iD0Us2uBsLYUNXp0OLxNQlSUCnLP4glodCoH5LeNe9vF8PMP4jbhu4TvA6cqZWj1vfcbDvfCRIVv4fT5jSKb+Uqc7UXkVmrsJjTi1pajp3EBlW4bSeutXVR7dMXNclQ4cTQvShls3CALi/uO5/3wN0zMLaklKHyXnLrIJ+cnqQcDGcc1cphSG1FaybC2GbNmlBOUAUlRhr1zdAHIcuQ9epmg6twYNXzFSIkiMZEc1cuBj9foHpPsTa/tjoNh74GPd5QW4RdZG2o+B7drYRGUVI/rMmpSwC1SkFtAH55S+oHukYLq/nP4cKZW6OaRqWkHZA98ZMJDxUpOhP0pti+HKuXkNNjQZn10iss/1lMxlUdKwFPKCL/XqfsL/wwHZPlJjMT6oskJefPLT3WBskD+WBut5hdnSCElSnZAKGQeqEH5lkeVdB7YzqVf8AwGK1CjJDlS0hLbadxFT+pX7/AIHbrjB+/abdCAdBT9jDgxbBjn6/HzrDOWYnnJ6Y7rgUWXPiJRBuOZb0o/8AUfzJxT/1grjnrby3PWhW6VcpfqHY9MXOV8nuS30yqk1IcCTrCEkJF+upSjg9NdpjR5ZlEFPp/wC+X2+mNWWX3QVk8M1pcuqaAZtxMawBTBlwGagy5EmxhIiupspLiboWP+cANT4cVSjLdlZSqOpr/wDBkrP8Er6H6H+OC/O1XlZfo0VMlh1tDskNtrSQUJJBPqI6ewPXAFU+IE6DFfeDjjzYsEMMABxw9gD/AKntjw/CxiuFPAWpKZiUqGRPh98q8sT7RKsXeybMztqDQJmuovQ1pbrtLk0qS6dIWtv0OnwCLgn6YpDlytNJ+KiQpTDSxcl5sttrH0Vh9cP6ZTcwxW64us02sVdQuhtLgWinX6oS2d9flZFz2sMWeY8rpCVKdEiS+obqUOn8egx7JaoeuWU++QF/9atLD2mcUQ2+gJjlM/qucTX5cVTKJd2Vskhty+pA8j6Hxi5oWZGmp0OY06NcN4OFpK/VoIKVaD32Nx9MT80ZbZia1urbYCd9AGo29+w++KCHw8kyowqb96fCc9TKyklx/wB0I629zYY4uWHUoVanvJUI8qrHnUKRMghWUaE/nypuxa1JnOt/DtPuxXrfDyZPoK2wCyVqUOnNukA9lJxGqEqsuTrSHksNKdL5jvAhJdWjSts/vD1JN9rkHCrjKr1BUUQJMlaXwWPh3PWHU3vp0/XfbviwqmfczvS2nJUKOEJbDLkdVyHSD8x3uFb2viTb9nEM3SCpMt7/AGpOnDVNr7qQRHKT+KzrOXabRnI7kZtSXorqHndatWpsm1/a223tfBpkrMSKc6uOpVyFkdeu+38Rhc1LMTLqEF2FKiOJB9AGtIB6jzbFfCzVFjSEoU86hCQEofU2QLfpPfbscWts7b264RkDTB5llTXZOmJ+tdMUnNyJTd7j9ovQkeb7YtI9ThUZlUaG0xGZbJAQykITfvsMIig5i5Xw7zL4W20vVrT60JJvYkjtffF5mSbUMuzWIL0ozUyGg8y8yknm367Dve+NHcQs03CWFqAUoEjy61OP+z6FPdmk65+MfgfWjfMOeE/tkhy2lgqO/U3sMKKvVQTK+29qOuLHDRPhROo/wxU5jzemDLMZ7UmaLfsiL8nwXPcdk/xxSxqy02CtKZDy1G5UlHU+bnGNxfNcaEp0BknwqhwqxtLaQlQkfWmAjNTkCnloq0vveOraPb3OK+ZXStXNuPibfsUdQyP1q9/A874C3qhUpSlJiRkMqV/iPKur/wDmJLNMzBEUlMhvkcwakrS3q5nuD0OPt7ia3WyhlOR3o5CGQuAkyd4ifjFXjNZkR0tNxlKbSwDo8gn5ln944iz8yNMtaCoPvE3KL6t/1LP+2IkbJlVr5SEVNQUr5GXzy23PbWNgfriZBytJps12BUIDsd5khLjRTZSCen2I6HocYFVyWwy2OEV0l5JcU3ASRntJ9eNU6HqzMfP4cw6p5w3W6COav/KO2JcNl2hzGGZEWox5shYDTbrCg48s/puPUcNPK+QIL8hl5Mlt4W9TS0lDgP8AzhlChxGKf8DUmUPwDvypZBCD+pKibpI8gg46bwxLCeJB7/Wp3EsdTarPu/eVH9w+mlKSmZJzhmNQTIZVTGhsXak5Yj6NJuT97YKE8EYWkczNNU129WiO0E372BGwxqfzPAyzmBmjxMxsVuPMUpLDfODsqGoC+hxQ+dB7KPqB2N8EAzXYWCzt9MRWKY1iLL3Z3CoP/XSvPcQ9rMRS7wLXwdBlQpU/6QGWqxlCdEmQZLz0iOW0RlJvdZ+VWvoADY367YTMWpVjMU9mm0tBly5HpQlCwlaiB0GogA/64aGd8mRammmVLLlDjrjzEFLiGGwEJWNwVAbAW2PuMANX4XV4OOTWmo4fJCuUz6QCP022FvOMbLFLR9KS8qDn/IiRnp/mo2/Q6bopfT/HlvUXMnC/MuVYkWturZYkvP8AIEeO6pMptzc2sACrYXum4tirn1zidTKaxOfq2Yo0J86WnXn1BK/pq3wTtyeK9PEeSlFRqvwwWmP8U2mUGVKFipJvqCh2JxjmSXXqupDtdytXVaEgG5Uu2w6bWF8O1YoEFIYWFDfMT8JFMF36mWR2ClTOm3xqn4XPP5w4gUyFnCvvKpadch5MqQEtvlAulsk2HqNsdH5qzLk2G2ZVQrdFaUhGlN5SCSB0ASkkgfQY504eZbyxVZMudmmoworMdZDdMffDTiyNypd9wkdNtycVebYGWJMz4fKLMiU8+5pQpDelu52CWwfUr6nB7ON8DxZ4STuYyHnTZnEbi3YTcvkkkwO9nHhyroDKUCmZny5JzFTXFSvin3GW30ILZ5aDYobvukKO2rrjYxkSGGlOI+GbnO3KiBfkD9KB7dL98Lagf9U8i5RhUKmPwm0tuOK+GTDS863rUVK1rJt17YGsy5v4hpliFJzUta1I1PIp4S0lk/pUUjr9Dg5jHrN09xYJ6UzT7XlsFSyQfWWe1HGbMrQ8vIU9UqhDhNHfVJdCVK+3zKPsBhbQ46M919NBy2lxaAlb0ia6jSENIF1EJ62t53xryPw9lZ/zDJ/EpslMWI2HZclSit06tkoSVfmJ/gAcMvL+TXoDjMSBLj0uuUtpSAtsBCpLBOy/C0kGyu4O2FGJ+0Fs2vszrlPQHf1zFPbHHrzFEQVBDfPc9J28qpct5WrdHkNzKC8/Cc5K3UrQerab3132UD77b4JanMzzVIUXW63BZdiLla4DYaceaSfUSeqT7C2L9dbzE3HejVjLkN5t+N8FzqdIEZ0IJvYBQsCfpiwRVKs2qnSmcm1kohNFhlD0xhLa0kWIUbXNwO2FilYY8Q+t1JI3MZU7dupVxdijLTMcjG436Ur5nDN5t1pH905JQHo8oXIJIuFEnqDve+BbL+b6D8QYWYUuUt9KigS0NlyO4QbG4G4+ovh1VlmuSKCuC+qBQoICkfDRlF18oUblvnrslAPgdsLGRkt7iPzaDRnGUMUZpb6HALIcdIsGkE2KgbG6+536Wxva47atLKkEKSNTsPznQl/i77LXasKCV8h/d47THKfGmtkrI1HrjIkxHoctpQ2ciuh1tX8N0/Q4OFcPqaimuwH0lcZwhWgGym1DotB6pUMcZ5cp0uA/rpk+RCnhVtLTymV3Hgg7/Q4No+feJsJXJXnOqtAdnwhw/bUMUa8XaBIJioK59tVvL/qLIjan/ScqBoPNXYeU08tld0XCyOiiB0JBFx5wIcfYFQoWV4GZadJNPqEF9ELWyb85ldyEm430kXHi5wlKlQ8yURv+ssXMs2dClv3lS48haFsvq681IO1+xwc1vhdmXMmXIrsbOUmrOGzyIM90htw2uC2q9r26XwJc+0lqlAK1xOQPUc+XnRisUfvmVOsEkjy186CKfxH4hvKHKzFMbQpQRrCEJFz2vbF7UuHPEKu65Vbqi31jcNTZpBX7D8uKTJOZMx5dEiPDpzM2E6u0iDMaC2XFJ238KHkYsI0/OrFWmS6KoUeHLVqVAcdMllB76QvpvuPGE19iF8VFLa0pA3JmenMHyI6ip5OKlSf6zxnkDn+6qWKXMpC+S9EdhupOylI0WI7g98X4z/VUAJUlhahsVE/MfONDmTcwVBDMurTJ1RCnksMstn5nFnZKE3sL4mucL8ytrUg5MrA0kjZxH/OF7rts5BeIJ+U9JIqdes3lKK2wog7xTJzRSKLleNSXKA4/ArTjgVF+BkKLTjCTdS3EklJSU7dN1HBuluXUIzM+K3Dmx3k6kLCC2tPsQOhHfHOEjNEyRVKbTqah912PEMVpDaS4spLpXZIFzsLfwwxaDxUlZey25R40Ff4sH3FEy0lKYyVbi6TuVdTbEviGB3XYIUO8qTmeRO51A0gTzpwjFgpZdeHCiNetMiVHnx2NaKc24o/kYABP3OB+dCz3U2FtwEQ6U2o21c3U4B51dB9sC/DedmTNOdW5btdnvxIoU5N5ixylgghKAkbAk7/QYb71TpVLlNx51Rjx3HTYBxVgCegJ6C/vbCZ1lyzfSwAlaznoTHkaY27KMQa408QT0pKSv6PMya6XZVWjBxStSl8krUT3JJ6n3xlG4I1zKtTg1ugz4s+XCc5iWJaC2le1rXHTbD9+FQq5UVJt7dRjxuFrOpQUlP5Ra/3OD/8AVcXMIVBBnIgRHXl8q2RhFqgZTI3mkpUOH/EXNjWuq1uHTGXdzBhhSQkeFKG6v44r2eDVapbHw0f8LWgfnWFk/fzjoL4NGn+8v9salQQpWxJANgQL3x+97xJtPAhCQnkAI9eNYvYLav5uEnzpB5UyTnnJVQqblPhUma1O5Z/bur0oWi9laRudiRY435m4ecSM4RUsVGrwmY19QZhxw0kH6j1H6Xw+E0s9TpH2xu/DlBGygfa2NQ9iqnPeAwnj5wJyEbn6VumzShAaQ6oJG3oVzQcncWcvOtPpqKsxxIygswn3SpSxax06he9tgQcEOZ+Kk7M9BiUXKVOkSa44k8xsoKV0wj0lTl+ix0Tfbvh5CmEq3V/LGtvL0Zl599tphD0ggvOIaAU6RsCo9VW98EJN873nrYEjlCQd+8BqJz25HKt0BaE8CXTHXMjwrl1/hLxFr0FuPWK446wlWsMPyVupQo97dL4McuZa4oZZTHCXKXmBiILR2pSi241tayVgA2t2OHomkNdCdvYY2inNtiyCfe+OX7jFXkcDjKOHlA+UGfnWKLVKDKXFTSCpPARuehyoZikLYlSXFvORo3+EpSibBX3xNXwJS4AiNmSooaB2TIaS6LfXDuVA1EWUCO5tjIU8JtYi3uMYdpja1FQ05ZR5TWX+lWZELE/GkOrgLVECWzFzOw0xJb5TqRHUA6nuFJvbG+m8BPw6K0zJzNMfab+VpGoIH0BO2HmmmNH59Rv42tjw01I/OPppx2sY4U6jP/z+K6Zw+1akIkDxNAlAyTR6LGDTMZLqh+d7/jFJPnU+pzHIGV6OzWp+6VSAOVBjny690IH6U3Jw0jAaRclwD6pwv6nwiRFQ/LylXJFBd1F4xlK5kFZJubtn5AfKcD2Vk4HlKvCSds8j4xJHkKIasbOQCIHhUWm8FaTFgmROq0ydXHFc1dQYllKWV9QGmSbBA6AdT5xfIe4gtJDaZNDeSgaQ45spYHcjsThbQOIDz1TTlqXBbVmZT/w7bTL4MVza/NCx0RYXt1wVqynWVKJXnCKhRNylEMFKT4BKr2+uD76+eSsdsAjlrmOYgaVTW7KG2w2paSkaSnijnEafKhqmwaDl3OUCdkymKdcrbKkvxmFanIYQbqLd/kSTsd+2MM60gcQczVN9TyqMqiwUsuPyGdK5CyNV3fCAOh674uHs0wMu5obqtAy+lz8TaLTi1kMl5SDcqSO23XzjBFZyJmdVZquaHX4b8tkMuRVqUChtCfmSE/Od77+Bi4w9N72nuahxsJnv8yPXyrt/C2iwUOMf042zMk7gcuf3oM4aZmzaxSfhsr0AzogeLr8nk7Oq7pC1EDoNrXxLd4pxq9WalQ51Odp8d5h5hVPmN2cU+UenUrtc+elr410DjfEolLbo1KpsupxIZU1FkyCljmNX9JUkA2OKxpuXmDMz+aszMv03W4llExEZRap5CbtlYIuR2JPm+JbsC3dOuvMhOvCQZJM8t/gCNBNRVvd+5/7axc4zpBGg8Yypx5QzvQ6VlamxqtXg9IhRG2pEgsuloKSLH16bEDpe/bBvRpBmJfWh1LzSlhxlxKrpU2oApIPjCsk5lnTaCqNDy3VpKnWS2pSGgIziSCCpJJupChv06HEbJOZcz/DvTKVC5UZIRG+GLGtlhLSdKW9JIWCOt/fGLV0lxYdfHDBzgg6j818GIcEtupIV4Hzp2cu+yt/bGYT02+2BPK2fmswR3A6w2zMjnS80hZIH7wvvb67g7YI4VUZlJXrs0ts2UlR7djfxhszfWRd7FK+91y+tFIPaIDicwalFOPbHoce6gRqSQQfGMSrDWEjSvmde6bd8fbY8Kseg464RtXyvrW7bY8sLj04yx4Dj4pIr7XxF8Y98enftbGCgo9/rjFZgaV9FZakpTdRsBiO7OQgKJUEpSLlRNgB59hj0x0HqD/HEGsZep9cpsinVBgyIklGh1oqIC0+CQQcLXVXCiAAAN+ddgJoLrnElmqPii5MkMVCpPHQueElyJBT3WpQ2Wrwkd+pwPu0mZBRMhZzzEMyUd9tLobmp5TzT4NhZLdroPYYvl8CMnJUTT2KnSVHoYE9xsD7EkYp8xcMq5Q/wprJ8L8WcS85ImyqtMAK1adKASd9rkgDAl3ZOuZMKgeAmefFOXSKXul4SVJnwP2pK5ppMhqr05dLgMUqoML1xkRhZSEg35jh9+w8YvDmHiASSrNkfUetoaf8AjBtTeAWY6nPcqOY8zx4Tr19bVMaLigP0612AH0GCQf0e8m2GtdcWv8yjPIKj5sBg1TaVJSh2FEDdPF81bUsZaxZIhlzgTX//2Q==';

    // సరస్వతి చిత్రం (పత్రం కుడి పైభాగంలో)
    const SARASWATI_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="47" fill="#fffdf7" stroke="#b91c1c" stroke-width="1.6"/>
  <circle cx="50" cy="50" r="42.5" fill="none" stroke="#f59e0b" stroke-width="0.7" stroke-dasharray="2 3"/>

  <!-- lotus seat -->
  <g stroke="#d97706" stroke-width="1" fill="#ffe9c7">
    <path d="M30 84 C 36 76, 44 74, 50 74 C 56 74, 64 76, 70 84 C 62 88, 38 88, 30 84 Z"/>
    <path d="M38 84 C 40 79, 45 77, 50 77 C 55 77, 60 79, 62 84"/>
  </g>
  <g stroke="#f59e0b" stroke-width="0.9" fill="#fff3d6">
    <path d="M24 82 C 27 76, 32 73, 34 74 C 33 79, 30 83, 26 85 Z"/>
    <path d="M76 82 C 73 76, 68 73, 66 74 C 67 79, 70 83, 74 85 Z"/>
  </g>

  <!-- sari / skirt -->
  <path d="M50 46 C 58 46, 63 58, 66 76 C 60 80, 40 80, 34 76 C 37 58, 42 46, 50 46 Z"
        fill="#fde8e8" stroke="#b91c1c" stroke-width="1.3"/>
  <path d="M44 62 C 42 68, 41 72, 41 76 M50 62 C 50 68, 50 72, 50 76 M56 62 C 58 68, 59 72, 59 76"
        stroke="#e7a3a3" stroke-width="0.8" fill="none"/>

  <!-- pallu across the chest -->
  <path d="M38 50 C 44 58, 52 58, 60 50" fill="none" stroke="#b91c1c" stroke-width="1.1"/>
  <path d="M36 52 C 34 60, 34 68, 36 74" fill="none" stroke="#b91c1c" stroke-width="1"/>

  <!-- neck + head -->
  <path d="M47 44 L47 48 L53 48 L53 44" fill="#fde8e8" stroke="#b91c1c" stroke-width="1"/>
  <ellipse cx="50" cy="35" rx="8" ry="9" fill="#fde8e8" stroke="#b91c1c" stroke-width="1.3"/>
  <!-- hair -->
  <path d="M42 33 C 41 25, 50 22, 58 33" fill="none" stroke="#7f1d1d" stroke-width="1.4"/>
  <circle cx="41" cy="40" r="1.4" fill="#7f1d1d"/>
  <circle cx="59" cy="40" r="1.4" fill="#7f1d1d"/>
  <!-- crown -->
  <path d="M44 27 L47 21 L50 26 L53 21 L56 27" fill="#ffe9c7" stroke="#d97706" stroke-width="1.1" stroke-linejoin="round"/>
  <circle cx="50" cy="19" r="1.6" fill="#d97706"/>
  <!-- face -->
  <circle cx="47" cy="35" r="0.9" fill="#7f1d1d"/>
  <circle cx="53" cy="35" r="0.9" fill="#7f1d1d"/>
  <path d="M48 39 C 49.5 40.4, 50.5 40.4, 52 39" fill="none" stroke="#b91c1c" stroke-width="0.8"/>
  <!-- necklace -->
  <path d="M46 45 C 48 47, 52 47, 54 45" fill="none" stroke="#d97706" stroke-width="1"/>

  <!-- veena: gourd low-left, long neck to upper-right -->
  <path d="M30 74 L62 46" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>
  <circle cx="28" cy="76" r="5" fill="#ffe9c7" stroke="#b91c1c" stroke-width="1.3"/>
  <path d="M27 78 C 26 80, 27 81, 29 81" fill="none" stroke="#b91c1c" stroke-width="0.8"/>
  <g stroke="#b91c1c" stroke-width="0.7">
    <path d="M36 70 L38 72 M40 66 L42 68 M44 62 L46 64 M48 58 L50 60 M52 54 L54 56"/>
  </g>
  <path d="M62 46 l3 -2" stroke="#b91c1c" stroke-width="2" stroke-linecap="round"/>

  <!-- arms -->
  <path d="M42 52 C 36 56, 34 64, 36 70" fill="none" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M58 52 C 62 54, 64 50, 63 47" fill="none" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="63" cy="46" r="1.6" fill="#fde8e8" stroke="#b91c1c" stroke-width="0.9"/>
  <circle cx="36" cy="70" r="1.6" fill="#fde8e8" stroke="#b91c1c" stroke-width="0.9"/>

  <!-- swan -->
  <path d="M74 84 C 76 78, 82 76, 86 79 C 89 81, 88 85, 84 86 L 74 86 Z"
        fill="#ffffff" stroke="#b91c1c" stroke-width="1"/>
  <circle cx="86" cy="78" r="0.9" fill="#b91c1c"/>
</svg>
`;

    // వెబ్‌సైట్ లోగో (పత్రం శీర్షిక పక్కన)
    const PATRIKA_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
            <radialGradient id="pkSun" cx="34%" cy="28%" r="78%">
                <stop offset="0%" stop-color="#fffdf5"/><stop offset="55%" stop-color="#fde68a"/><stop offset="100%" stop-color="#f59e0b"/>
            </radialGradient>
        </defs>
        <g stroke="#d97706" stroke-width="5" stroke-linecap="round">
            <line x1="50" y1="3" x2="50" y2="14"/><line x1="50" y1="86" x2="50" y2="97"/>
            <line x1="3" y1="50" x2="14" y2="50"/><line x1="86" y1="50" x2="97" y2="50"/>
            <line x1="17" y1="17" x2="25" y2="25"/><line x1="75" y1="75" x2="83" y2="83"/>
            <line x1="83" y1="17" x2="75" y2="25"/><line x1="25" y1="75" x2="17" y2="83"/>
        </g>
        <circle cx="50" cy="50" r="31" fill="url(#pkSun)" stroke="#b45309" stroke-width="3"/>
        <text x="50" y="62" text-anchor="middle" font-family="Georgia, serif" font-style="italic"
              font-size="34" font-weight="bold" fill="#991b1b">LR</text>
    </svg>`;

    // దీపం (పత్రం కింద ఎడమ వైపు)
    const DIYA_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M22 66 C 30 82, 70 82, 78 66 C 66 72, 34 72, 22 66 Z" fill="#f5b301" stroke="#b45309" stroke-width="2"/>
        <ellipse cx="50" cy="66" rx="28" ry="5" fill="#ffd166" stroke="#b45309" stroke-width="1.6"/>
        <path d="M50 58 C 44 50, 48 40, 50 30 C 54 40, 58 50, 50 58 Z" fill="#f97316" stroke="#b45309" stroke-width="1.6"/>
        <path d="M50 54 C 47 49, 49 43, 50 38 C 52 43, 53 49, 50 54 Z" fill="#fde68a"/>
    </svg>`;

    let lastMuhurta = null;
    let mhNearCtx = null;
    let currentYogaName = '';
    let currentKaranaName = '';

    function showPanchangInfo(kind) {
        const name = kind === 'yoga' ? currentYogaName : currentKaranaName;
        const info = kind === 'yoga' ? YOGA_INFO[name] : KARANA_INFO[name];
        if (!info) return;
        const typeClass = info.t === 'good' ? 'good' : (info.t === 'bad' ? 'bad' : 'mid');
        let typeText;
        if (kind === 'yoga') {
            typeText = info.t === 'good' ? 'శుభ యోగం' : (info.t === 'bad' ? 'అశుభ యోగం' : 'యోగం');
        } else if (KARANA_NOTE[name]) {
            typeText = KARANA_NOTE[name].split(' — ')[0];
        } else {
            typeText = info.t === 'good' ? 'శుభ కరణం' : (info.t === 'bad' ? 'అశుభ కరణం' : 'కరణం');
        }

        document.getElementById('infoModalBody').innerHTML = `
            <div class="info-title">${name} ${kind === 'yoga' ? 'యోగం' : 'కరణం'}</div>
            <div class="info-type ${typeClass}">${typeText}</div>
            <div class="info-meaning">${info.m}</div>
            <div class="info-block good"><b>✅ ఈ సమయంలో చేయదగినవి</b>${info.good}</div>
            <div class="info-block bad"><b>🚫 మానుకోవాల్సినవి</b>${info.bad}</div>
            <div class="info-note">ఇది సంప్రదాయక సూచన మాత్రమే. ముఖ్యమైన కార్యాలకు పురోహితులను లేదా మీ కుటుంబ పంచాంగాన్ని సంప్రదించండి.</div>
            <button type="button" class="info-ok-btn" onclick="closePanchangInfo()">అర్థమైంది</button>
        `;
        document.getElementById('infoModal').style.display = 'flex';
    }

    function closePanchangInfo() {
        document.getElementById('infoModal').style.display = 'none';
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closePanchangInfo();
    });

    const TELUGU_MASA = ['చైత్రం', 'వైశాఖం', 'జ్యేష్ఠం', 'ఆషాఢం', 'శ్రావణం', 'భాద్రపదం',
        'ఆశ్వయుజం', 'కార్తీకం', 'మార్గశిరం', 'పుష్యం', 'మాఘం', 'ఫాల్గుణం'];
    // మాసం మొదలయ్యే అమావాస్య నాడు సూర్యుడు ఉండే రాశి → మాసం
    const MASA_BY_SUN_RASI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0];
    const RITU_NAMES = ['వసంత', 'గ్రీష్మ', 'వర్ష', 'శరద్', 'హేమంత', 'శిశిర'];
    const SAMVATSARA_NAMES = [
        'ప్రభవ', 'విభవ', 'శుక్ల', 'ప్రమోదూత', 'ప్రజోత్పత్తి', 'ఆంగీరస', 'శ్రీముఖ', 'భావ', 'యువ', 'ధాత',
        'ఈశ్వర', 'బహుధాన్య', 'ప్రమాథి', 'విక్రమ', 'వృష', 'చిత్రభాను', 'స్వభాను', 'తారణ', 'పార్థివ', 'వ్యయ',
        'సర్వజిత్', 'సర్వధారి', 'విరోధి', 'వికృతి', 'ఖర', 'నందన', 'విజయ', 'జయ', 'మన్మథ', 'దుర్ముఖి',
        'హేవిలంబి', 'విలంబి', 'వికారి', 'శార్వరి', 'ప్లవ', 'శుభకృత్', 'శోభకృత్', 'క్రోధి', 'విశ్వావసు', 'పరాభవ',
        'ప్లవంగ', 'కీలక', 'సౌమ్య', 'సాధారణ', 'విరోధికృత్', 'పరిధావి', 'ప్రమాదీచ', 'ఆనంద', 'రాక్షస', 'నల',
        'పింగళ', 'కాళయుక్త', 'సిద్ధార్థి', 'రౌద్ర', 'దుర్మతి', 'దుందుభి', 'రుధిరోద్గారి', 'రక్తాక్షి', 'క్రోధన', 'అక్షయ'
    ];
    const ugadiCache = {};

    function signedAngle(target, value) {
        return ((value - target + 540) % 360) - 180;
    }

    function elongationAt(dt, lat, lon, tz) {
        const r = ephemAt(dt, lat, lon, tz);
        return norm360(r.planets[1].lon - r.planets[0].lon);
    }

    // చంద్ర-సూర్య కోణం ఒక నిర్దిష్ట విలువను దాటే క్షణం (dir = +1 ముందుకు, -1 వెనక్కి)
    function findElongationMoment(target, refMoment, dir, stepMs, maxSteps, lat, lon, tz) {
        let curMs = refMoment.getTime();
        let prev = signedAngle(target, elongationAt(new Date(curMs), lat, lon, tz));
        for (let i = 0; i < maxSteps; i++) {
            const nextMs = curMs + dir * stepMs;
            const cur = signedAngle(target, elongationAt(new Date(nextMs), lat, lon, tz));
            const crossed = dir > 0 ? (prev < 0 && cur >= 0) : (prev > 0 && cur <= 0);
            if (crossed) {
                let lo = curMs, hi = nextMs;
                for (let k = 0; k < 24; k++) {
                    const mid = (lo + hi) / 2;
                    const sMid = signedAngle(target, elongationAt(new Date(mid), lat, lon, tz));
                    if (dir > 0) { if (sMid < 0) lo = mid; else hi = mid; }
                    else { if (sMid > 0) lo = mid; else hi = mid; }
                }
                return new Date(dir > 0 ? hi : lo);
            }
            prev = cur;
            curMs = nextMs;
        }
        return null;
    }

    // గ్రహం ప్రస్తుత రాశి ఎప్పుడు ముగుస్తుందో (ముందుకు వెతికి)
    function findNextRasiIngress(planetIdx, refMoment, lat, lon, tz, stepMs, maxSteps) {
        const rasiAt = dt => Math.floor(ephemAt(dt, lat, lon, tz).planets[planetIdx].lon / 30);
        const startRasi = rasiAt(refMoment);
        let curMs = refMoment.getTime();
        for (let i = 0; i < maxSteps; i++) {
            const nextMs = curMs + stepMs;
            if (rasiAt(new Date(nextMs)) !== startRasi) {
                let lo = curMs, hi = nextMs;
                for (let k = 0; k < 24; k++) {
                    const mid = (lo + hi) / 2;
                    if (rasiAt(new Date(mid)) === startRasi) lo = mid; else hi = mid;
                }
                return new Date(hi);
            }
            curMs = nextMs;
        }
        return null;
    }

    // సూర్యుడు మేష రాశిలోకి ప్రవేశించే క్షణం (సౌర సంవత్సరానికి సంబంధం లేదు; ఉగాది కోసం)
    function meshaSankranti(year, lat, lon, tz) {
        let cur = new Date(year, 3, 1, 0, 0);
        const rasiAt = dt => Math.floor(ephemAt(dt, lat, lon, tz).planets[0].lon / 30);
        for (let i = 0; i < 90; i++) {
            const next = new Date(cur.getTime() + 12 * 3600000);
            if (rasiAt(next) === 0 && rasiAt(cur) !== 0) {
                let lo = cur.getTime(), hi = next.getTime();
                for (let k = 0; k < 24; k++) {
                    const mid = (lo + hi) / 2;
                    if (rasiAt(new Date(mid)) === 0) hi = mid; else lo = mid;
                }
                return new Date(hi);
            }
            cur = next;
        }
        return null;
    }

    // ఉగాది = మేష సంక్రమణానికి ముందు వచ్చే అమావాస్య మరుసటి రోజు (చైత్ర శుక్ల పాడ్యమి)
    function ugadiDate(year, lat, lon, tz) {
        if (ugadiCache[year]) return ugadiCache[year];
        let result = null;
        const sank = meshaSankranti(year, lat, lon, tz);
        if (sank) {
            const amavasya = findElongationMoment(0, sank, -1, 12 * 3600000, 80, lat, lon, tz);
            if (amavasya) {
                const d = new Date(amavasya.getTime() + 24 * 3600000);
                result = new Date(d.getFullYear(), d.getMonth(), d.getDate());
            }
        }
        if (!result) result = new Date(year, 2, 20);
        ugadiCache[year] = result;
        return result;
    }

    function samvatsaraFor(refDate, lat, lon, tz) {
        let y = refDate.getFullYear();
        if (refDate < ugadiDate(y, lat, lon, tz)) y -= 1;
        const idx = (((y - 1987) % 60) + 60) % 60;
        return SAMVATSARA_NAMES[idx];
    }

    function getTeluguCalendarElements(refMoment, refDate, sunRasiIdx, lat, lon, tz) {
        // మాసం: ఈ మాసం మొదలైన అమావాస్య నాడు సూర్యుడు ఉన్న రాశిని బట్టి
        const prevAmavasya = findElongationMoment(0, refMoment, -1, 12 * 3600000, 80, lat, lon, tz);
        let masaIdx = MASA_BY_SUN_RASI[sunRasiIdx];
        if (prevAmavasya) {
            const sunRasiAtStart = Math.floor(ephemAt(prevAmavasya, lat, lon, tz).planets[0].lon / 30);
            masaIdx = MASA_BY_SUN_RASI[sunRasiAtStart];
        }
        // అయనం: సూర్యుడు మకరం నుంచి మిథునం వరకు ఉత్తరాయణం, కర్కాటకం నుంచి ధనుస్సు వరకు దక్షిణాయనం
        const ayana = (sunRasiIdx >= 9 || sunRasiIdx <= 2) ? 'ఉత్తరాయణం' : 'దక్షిణాయనం';
        return {
            samvatsara: samvatsaraFor(refDate, lat, lon, tz),
            ayana,
            masa: TELUGU_MASA[masaIdx],
            ritu: RITU_NAMES[Math.floor(masaIdx / 2)] + ' ఋతువు'
        };
    }

    // నక్షత్ర ఘటికల పట్టిక (60 ఘటికలలో ప్రారంభ స్థానం; విండో 4 ఘటికలు)
    const AMRIT_GHATIKA = [42, 48, 54, 52, 38, 35, 54, 44, 56, 54, 44, 42, 45, 44,
        38, 38, 34, 38, 44, 48, 44, 34, 34, 42, 40, 48, 54];
    const VARJYA_GHATIKA = [50, 24, 30, 40, 14, 21, 30, 20, 32, 30, 20, 18, 21, 20,
        14, 14, 10, 14, 20, 24, 20, 10, 10, 18, 16, 24, 30];

    function nakIndexOf(lonDeg) {
        return Math.floor(lonDeg / (360 / 27));
    }

    // చంద్రుడు ప్రస్తుత నక్షత్రంలోకి ప్రవేశించిన (dir -1) లేదా బయటకు వెళ్లిన (dir +1) క్షణం.
    // నక్షత్ర సరిహద్దులు కచ్చితంగా 13°20′ గుణిజాలలో ఉంటాయి, కాబట్టి చంద్ర రేఖాంశం ఆ సరిహద్దును
    // దాటే క్షణాన్ని నేరుగా వెతుకుతాము (ఇండెక్స్ పోలిక కంటే ఇది కచ్చితం).
    function findNakBoundary(refMoment, dir, lat, lon, tz) {
        const span = 360 / 27;
        const lonAt = dt => ephemAt(dt, lat, lon, tz).planets[1].lon;
        const idx = nakIndexOf(lonAt(refMoment));
        const target = (dir > 0 ? idx + 1 : idx) * span;
        let curMs = refMoment.getTime();
        const stepMs = dir * 20 * 60000;
        let prev = signedAngle(target, lonAt(new Date(curMs)));
        for (let i = 0; i < 120; i++) {
            const nextMs = curMs + stepMs;
            const cur = signedAngle(target, lonAt(new Date(nextMs)));
            const crossed = dir > 0 ? (prev < 0 && cur >= 0) : (prev > 0 && cur <= 0);
            if (crossed) {
                let lo = curMs, hi = nextMs;
                for (let k = 0; k < 26; k++) {
                    const mid = (lo + hi) / 2;
                    const sm = signedAngle(target, lonAt(new Date(mid)));
                    if (dir > 0) { if (sm < 0) lo = mid; else hi = mid; }
                    else { if (sm > 0) lo = mid; else hi = mid; }
                }
                return new Date(hi);
            }
            prev = cur;
            curMs = nextMs;
        }
        return null;
    }

    // పంచాంగ దినం (సూర్యోదయం నుంచి మరుసటి సూర్యోదయం) లో వచ్చే అమృత ఘడియలు, వర్జ్యం
    function getAmritVarjya(dayStart, lat, lon, tz) {
        const dayEndMs = dayStart.getTime() + 24 * 3600000;
        const amrit = [], varjya = [];
        let cursor = new Date(dayStart.getTime());
        for (let n = 0; n < 3 && cursor.getTime() < dayEndMs; n++) {
            const idx = nakIndexOf(ephemAt(cursor, lat, lon, tz).planets[1].lon);
            const start = findNakBoundary(cursor, -1, lat, lon, tz);
            const end = findNakBoundary(cursor, 1, lat, lon, tz);
            if (!start || !end) break;
            const span = end.getTime() - start.getTime();
            const make = gh => ({
                start: new Date(start.getTime() + (gh / 60) * span),
                end: new Date(start.getTime() + ((gh + 4) / 60) * span),
                nak: NAK_NAMES[idx]
            });
            const a = make(AMRIT_GHATIKA[idx]);
            const v = make(VARJYA_GHATIKA[idx]);
            if (a.end.getTime() > dayStart.getTime() && a.start.getTime() < dayEndMs) amrit.push(a);
            if (v.end.getTime() > dayStart.getTime() && v.start.getTime() < dayEndMs) varjya.push(v);
            cursor = new Date(end.getTime() + 60000);
        }
        return { amrit, varjya };
    }

    // ఒక కాల విండోను "ఉదయం 10:12 నుం. మధ్యాహ్నం 11:48 వరకు" రూపంలో
    function fmtWindow(start, end, refDate) {
        const startClock = fmtClock(start.getHours() + start.getMinutes() / 60);
        const startTxt = (start.getDate() === refDate.getDate() && start.getMonth() === refDate.getMonth())
            ? startClock : `${fmtDateShort(start)} ${startClock}`;
        return `${startTxt} నుం. ${fmtEndMoment(end, refDate)} వరకు`;
    }

    // సూర్యోదయ సమయంలో ఉదయించే లగ్నం, అది ఎప్పటివరకు ఉంటుందో
    function lagnaRasiAt(dt, lat, lon, tz) {
        return ephemAt(dt, lat, lon, tz).lagnaRasi;
    }

    function findLagnaEnd(refMoment, lat, lon, tz) {
        const startRasi = lagnaRasiAt(refMoment, lat, lon, tz);
        let curMs = refMoment.getTime();
        for (let i = 0; i < 40; i++) {
            const nextMs = curMs + 10 * 60000;
            if (lagnaRasiAt(new Date(nextMs), lat, lon, tz) !== startRasi) {
                let lo = curMs, hi = nextMs;
                for (let k = 0; k < 22; k++) {
                    const mid = (lo + hi) / 2;
                    if (lagnaRasiAt(new Date(mid), lat, lon, tz) === startRasi) lo = mid; else hi = mid;
                }
                return new Date(hi);
            }
            curMs = nextMs;
        }
        return null;
    }

    // ==================================================================
    // ముహూర్తం చూడండి
    // ==================================================================
    const MUHURTA_WORKS = [
        { key: 'vivaham', label: 'వివాహం', good: 'శుక్ల పక్షం, అభిజిత్ ముహూర్తం, అమృత ఘడియలు, సంపత్ / క్షేమ / సాధక / మిత్ర తారలు, గురు లేదా శుక్రవారం', avoid: 'రిక్త తిథులు (4, 9, 14, 30), అమావాస్య, భద్ర కరణం, రాహుకాలం, వర్జ్యం', purpose: 'వివాహ కార్యక్రమం — వధూవరుల కల్యాణం', bless: ['వివాహ బంధం శాశ్వతంగా, సుఖంగా సాగుతుంది.', 'దంపతులకు ఐక్యత, శ్రేయస్సు కలుగుతుంది.', 'కుటుంబంలో ఆనందం, అభివృద్ధి సిద్ధిస్తాయి.'] },
        { key: 'nischitam', label: 'నిశ్చితార్థం', good: 'శుక్ల పక్షం, అభిజిత్, అమృత ఘడియలు, మిత్ర / అతిమిత్ర తారలు', avoid: 'రిక్త తిథులు, అమావాస్య, భద్ర కరణం, రాహుకాలం', purpose: 'నిశ్చితార్థం — పెండ్లి పొందిక', bless: ['పొందిక శుభంగా నెరవేరుతుంది.', 'ఇరు కుటుంబాలకు ఆనందం కలుగుతుంది.', 'తర్వాతి కార్యక్రమాలకు ఇది మంచి ప్రారంభం.'] },
        { key: 'gruhapravesam', label: 'గృహప్రవేశం', good: 'శుక్ల పక్షం, ధ్రువం / ధృతి యోగాలు, అభిజిత్, స్థిర లగ్నాలు (వృషభ, సింహ, వృశ్చిక, కుంభ)', avoid: 'అమావాస్య, రిక్త తిథులు, భద్ర కరణం, మంగళవారం', purpose: 'గృహప్రవేశం — కొత్త ఇంటిలో ప్రవేశం', bless: ['కొత్త ఇంటిలో శుభం, ఐశ్వర్యం నెలకొంటాయి.', 'కుటుంబానికి ఆరోగ్యం, సుఖం కలుగుతాయి.', 'గృహంలో దైవ అనుగ్రహం ఉంటుంది.'] },
        { key: 'prayanam', label: 'ప్రయాణం', good: 'అభిజిత్, అమృత ఘడియలు, మిత్ర / అతిమిత్ర తారలు, శుభ యోగాలు', avoid: 'రాహుకాలం, వర్జ్యం, దుర్ముహూర్తం, దిశ శూల దిక్కు, గండం / శూలం యోగాలు', purpose: 'ప్రయాణం — కొత్త ప్రదేశానికి వెళ్లడం', bless: ['ప్రయాణం సురక్షితంగా, ఫలప్రదంగా సాగుతుంది.', 'కార్యం విజయవంతమవుతుంది.', 'మార్గంలో అడ్డంకులు తొలగిపోతాయి.'] },
        { key: 'vyaparam', label: 'వ్యాపారం ప్రారంభం', good: 'వృద్ధి / సిద్ధి / సిద్ధం యోగాలు, బుధ లేదా గురువారం, అభిజిత్', avoid: 'అమావాస్య, రాహుకాలం, భద్ర కరణం, వర్జ్యం', purpose: 'వ్యాపార ప్రారంభం', bless: ['వ్యాపారం అభివృద్ధి చెందుతుంది.', 'లాభాలు, కీర్తి కలుగుతాయి.', 'కొత్త అవకాశాలు వస్తాయి.'] },
        { key: 'udyogam', label: 'ఉద్యోగం / ఇంటర్వ్యూ', good: 'సిద్ధి / సిద్ధం / హర్షణం యోగాలు, అభిజిత్ ముహూర్తం', avoid: 'రాహుకాలం, యమగండం, విపత్ / వధ తారలు', purpose: 'ఉద్యోగం / ఇంటర్వ్యూ', bless: ['ఉద్యోగ ప్రయత్నం సఫలమవుతుంది.', 'మంచి అవకాశం కలిసి వస్తుంది.', 'ఆర్థిక స్థితి మెరుగుపడుతుంది.'] },
        { key: 'vahanam', label: 'వాహన కొనుగోలు', good: 'శుక్ర లేదా గురువారం, శుభ నక్షత్రాలు, అభిజిత్', avoid: 'రిక్త తిథులు, అమావాస్య, రాహుకాలం', purpose: 'వాహన కొనుగోలు', bless: ['వాహనం శుభప్రదంగా ఉంటుంది.', 'ప్రయాణాలు సురక్షితంగా సాగుతాయి.', 'అనుకోని ఇబ్బందులు తొలగుతాయి.'] },
        { key: 'bhoomi', label: 'భూమి / ఇల్లు కొనడం', good: 'ధ్రువం / ధృతి యోగాలు, స్థిర లగ్నాలు, శుక్ల పక్షం', avoid: 'అమావాస్య, మంగళవారం, రిక్త తిథులు', purpose: 'భూమి / ఇల్లు కొనడం', bless: ['ఆస్తి అభివృద్ధి చెందుతుంది.', 'భూమి లేదా ఇల్లు శుభప్రదంగా ఉంటుంది.', 'కుటుంబానికి స్థిరత్వం కలుగుతుంది.'] },
        { key: 'puja', label: 'పూజ / హోమం', good: 'బ్రహ్మ / శివం / సుకర్మ యోగాలు, బ్రహ్మ ముహూర్తం, అమృత ఘడియలు', avoid: 'రాహుకాలం, భద్ర కరణం, వర్జ్యం', purpose: 'పూజ / హోమం', bless: ['దైవ అనుగ్రహం లభిస్తుంది.', 'కార్యాలు నిర్విఘ్నంగా సాగుతాయి.', 'మనస్సుకు శాంతి కలుగుతుంది.'] },
        { key: 'chikitsa', label: 'చికిత్స / ఆసుపత్రి', good: 'ఆయుష్మాన్ యోగం, శుభ తారలు, అభిజిత్', avoid: 'రాహుకాలం, విపత్ / వధ తారలు, భద్ర కరణం', purpose: 'చికిత్స / ఆసుపత్రి', bless: ['చికిత్స విజయవంతమవుతుంది.', 'ఆరోగ్యం మెరుగుపడుతుంది.', 'శీఘ్రంగా కోలుకోవడం జరుగుతుంది.'] },
        { key: 'chaduvu', label: 'చదువు ప్రారంభం', good: 'బ్రహ్మ / సరస్వతి అనుకూల యోగాలు, శుక్ల పక్షం, అభిజిత్', avoid: 'అమావాస్య, రాహుకాలం, భద్ర కరణం', purpose: 'అక్షరాభ్యాసం / చదువు ప్రారంభం', bless: ['చదువు బాగా సాగుతుంది.', 'జ్ఞానం, మంచి ఫలితాలు కలుగుతాయి.', 'ఏకాగ్రత పెరుగుతుంది.'] },
        { key: 'other', label: 'ఇతర ముఖ్యమైన పని', good: 'శుభ యోగాలు, సంపత్ / క్షేమ / సాధక / మిత్ర తారలు, అభిజిత్, అమృత ఘడియలు', avoid: 'రాహుకాలం, యమగండం, గుళిక, దుర్ముహూర్తం, వర్జ్యం, భద్ర కరణం', purpose: 'ఇతర ముహూర్త కార్యక్రమం', bless: ['కార్యారంభానికి ఉత్తమమైన ముహూర్తం ఇది.', 'శుభ ఫలితాలు కలుగును.', 'విజయము, అభివృద్ధి, శ్రేయస్సు సిద్ధించును.'] }
    ];

    const TARA_NAMES = ['జన్మ తార', 'సంపత్ తార', 'విపత్ తార', 'క్షేమ తార', 'ప్రత్యరి తార',
        'సాధక తార', 'వధ తార', 'మిత్ర తార', 'అతిమిత్ర తార'];
    const TARA_GOOD = [false, true, false, true, false, true, false, true, true];

    function initMuhurtaForm() {
        const nakSel = document.getElementById('mhNakshatra');
        if (nakSel && nakSel.options.length === 0) {
            const blank = document.createElement('option');
            blank.value = '';
            blank.innerText = '— ఎంచుకోండి —';
            blank.selected = true;
            nakSel.appendChild(blank);
            NAK_NAMES.forEach(n => {
                const opt = document.createElement('option');
                opt.value = n;
                opt.innerText = n;
                nakSel.appendChild(opt);
            });
        }
        const workList = document.getElementById('mhWorkList');
        if (workList && !workList.children.length) {
            MUHURTA_WORKS.filter(w => w.key !== 'other').forEach(w => {
                const opt = document.createElement('option');
                opt.value = w.label;
                workList.appendChild(opt);
            });
        }
        const dateInput = document.getElementById('mhDate');
        if (dateInput && !dateInput.value) {
            const t = new Date();
            dateInput.value = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
        }
    }

    // కరణం మారే క్షణాలు (భద్ర కరణం సమయాన్ని తీసేయడానికి)
    function karanaIndexAt(dt, lat, lon, tz) {
        const r = ephemAt(dt, lat, lon, tz);
        return Math.floor(norm360(r.planets[1].lon - r.planets[0].lon) / 6);
    }

    function findKaranaStart(refMoment, lat, lon, tz) {
        const idx = karanaIndexAt(refMoment, lat, lon, tz);
        let curMs = refMoment.getTime();
        for (let i = 0; i < 80; i++) {
            const prevMs = curMs - 30 * 60000;
            if (karanaIndexAt(new Date(prevMs), lat, lon, tz) !== idx) {
                let lo = prevMs, hi = curMs;
                for (let k = 0; k < 24; k++) {
                    const mid = (lo + hi) / 2;
                    if (karanaIndexAt(new Date(mid), lat, lon, tz) === idx) hi = mid; else lo = mid;
                }
                return new Date(hi);
            }
            curMs = prevMs;
        }
        return null;
    }

    function findKaranaEnd(refMoment, lat, lon, tz) {
        const idx = karanaIndexAt(refMoment, lat, lon, tz);
        let curMs = refMoment.getTime();
        for (let i = 0; i < 80; i++) {
            const nextMs = curMs + 30 * 60000;
            if (karanaIndexAt(new Date(nextMs), lat, lon, tz) !== idx) {
                let lo = curMs, hi = nextMs;
                for (let k = 0; k < 24; k++) {
                    const mid = (lo + hi) / 2;
                    if (karanaIndexAt(new Date(mid), lat, lon, tz) === idx) lo = mid; else hi = mid;
                }
                return new Date(hi);
            }
            curMs = nextMs;
        }
        return null;
    }

    function hoursOf(dt, refMidnightMs) {
        return (dt.getTime() - refMidnightMs) / 3600000;
    }

    function subtractInterval(segs, a, b) {
        const out = [];
        segs.forEach(([s0, e0]) => {
            if (b <= s0 || a >= e0) { out.push([s0, e0]); return; }
            if (a > s0) out.push([s0, Math.min(a, e0)]);
            if (b < e0) out.push([Math.max(b, s0), e0]);
        });
        return out;
    }

    function freeDaylightWindows(sun, blocks) {
        let segs = [[sun.sunrise, sun.sunset]];
        blocks.forEach(([a, b]) => { segs = subtractInterval(segs, a, b); });
        return segs.filter(([a, b]) => (b - a) >= 0.35).sort((x, y) => x[0] - y[0]);
    }

    function fmtMinutes(hours) {
        const m = Math.round(hours * 60);
        return m >= 60 ? `${Math.floor(m / 60)} గం ${m % 60} ని` : `${m} నిమిషాలు`;
    }

    function resolveMuhurtaWork(text) {
        const t = (text || '').trim();
        const other = MUHURTA_WORKS.find(w => w.key === 'other');
        if (!t) return { work: other, matched: false, label: 'మీ పని' };
        const exact = MUHURTA_WORKS.find(w => w.label === t);
        if (exact) return { work: exact, matched: true, label: exact.label };
        const partial = MUHURTA_WORKS.find(w => w.key !== 'other' && (t.includes(w.label) || w.label.includes(t)));
        if (partial) return { work: partial, matched: true, label: t };
        return { work: other, matched: false, label: t };
    }

    function onMhDatePicked() {
        setMuhurtaMode('date');
    }

    // ముహూర్తం రోజు ఎంపిక బార్
    function toggleMhModes() {
        const box = document.getElementById('mhModeOptions');
        const chev = document.getElementById('mhModeChev');
        if (!box) return;
        const open = box.style.display !== 'none';
        box.style.display = open ? 'none' : 'block';
        if (chev) chev.textContent = open ? '▸' : '▾';
    }
    function setMhDateLimits() {
        const el = document.getElementById('mhDate');
        if (!el) return;
        const t = new Date();
        const pad = n => String(n).padStart(2, '0');
        const iso = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
        el.min = iso(t);
        el.max = iso(new Date(t.getFullYear(), t.getMonth() + 5, t.getDate()));
        if (!el.value) el.value = iso(t);
    }

    function setMuhurtaMode(mode) {
        document.querySelectorAll('input[name="mhMode"]').forEach(r => { r.checked = (r.value === mode); });
        document.querySelectorAll('.mode-tab').forEach(el => {
            const r = el.querySelector('input');
            if (r) el.classList.toggle('active', r.checked);
        });
        const dateGroup = document.getElementById('mhDateGroup');
        const nearNote = document.getElementById('mhNearNote');
        if (dateGroup) dateGroup.style.display = mode === 'date' ? 'block' : 'none';
        if (nearNote) nearNote.style.display = mode === 'near' ? 'block' : 'none';
        generateMuhurtam();
    }

    // ఒక రోజు ముహూర్త సమాచారం (detailed = true అయితే వర్జ్యం, భద్ర, అమృత ఘడియలు కూడా)
    function computeMuhurtaDay(y, m, d, janmaNak, lat, lon, tz, detailed) {
        const refDate = new Date(y, m - 1, d);
        const midnightMs = refDate.getTime();
        const sun = getSunTimes(y, m, d, lat, lon, tz);
        const sHour = Math.floor(sun.sunrise);
        const sMin = Math.round((sun.sunrise - sHour) * 60);
        const res = calculateEphemeris(y, m, d, sHour, sMin, lat, lon, tz);
        const moonObj = res.planets[1];
        const kaala = getKaalaWindows(y, m, d, sun);
        const dayStart = new Date(y, m - 1, d, sHour, sMin);

        const janmaIdx = NAK_NAMES.indexOf(janmaNak);
        const dayNakIdx = NAK_NAMES.indexOf(moonObj.nak);
        const taraIdx = ((dayNakIdx - janmaIdx + 27) % 27) % 9;
        const taraName = TARA_NAMES[taraIdx];
        const taraGood = TARA_GOOD[taraIdx];
        const badYoga = !!(YOGA_INFO[res.yoga] && YOGA_INFO[res.yoga].t === 'bad');

        const blocks = [
            [kaala.rahu.start, kaala.rahu.end],
            [kaala.yama.start, kaala.yama.end],
            [kaala.gulika.start, kaala.gulika.end]
        ];
        kaala.dur.forEach(w => blocks.push([w.start, w.end]));

        let av = null, bhadra = null, bhadraText = '';
        if (detailed) {
            av = getAmritVarjya(dayStart, lat, lon, tz);
            av.varjya.forEach(w => {
                const a = hoursOf(w.start, midnightMs), b = hoursOf(w.end, midnightMs);
                if (b > sun.sunrise && a < sun.sunset) blocks.push([Math.max(a, sun.sunrise), Math.min(b, sun.sunset)]);
            });
            if (res.karana === 'భద్ర') {
                const bStart = findKaranaStart(dayStart, lat, lon, tz);
                const bEnd = findKaranaEnd(dayStart, lat, lon, tz);
                if (bStart && bEnd) {
                    bhadra = { start: bStart, end: bEnd };
                    const a = hoursOf(bStart, midnightMs), b = hoursOf(bEnd, midnightMs);
                    if (b > sun.sunrise && a < sun.sunset) blocks.push([Math.max(a, sun.sunrise), Math.min(b, sun.sunset)]);
                    bhadraText = `భద్ర (విష్టి) కరణం ${fmtWindow(bStart, bEnd, refDate)} ఉంది — ఆ సమయంలో శుభ కార్యాలు మానుకోవాలి`;
                }
            }
        }

        const free = freeDaylightWindows(sun, blocks);

        const best = [];
        if (detailed) {
            const pushBest = (name, a, b) => {
                if (b <= sun.sunrise || a >= sun.sunset) return;
                const inside = blocks.some(([x, y2]) => !(b <= x || a >= y2));
                if (!inside) best.push({ name, start: a, end: b });
            };
            pushBest('అభిజిత్ ముహూర్తం', kaala.abhijit.start, kaala.abhijit.end);
            av.amrit.forEach(w => {
                pushBest(`అమృత ఘడియలు (${w.nak} నక్షత్రం)`,
                    hoursOf(w.start, midnightMs), hoursOf(w.end, midnightMs));
            });
        }

        const ok = taraGood && !badYoga && res.karana !== 'భద్ర' && free.length > 0;
        const cal = getTeluguCalendarElements(dayStart, refDate, res.planets[0].rasiIdx, lat, lon, tz);
        return {
            cal,
            y, m, d, refDate, midnightMs, sun, res, moonObj, kaala, dayStart, janmaNak,
            av, bhadra, bhadraText, free, best, taraName, taraGood, badYoga, ok
        };
    }

    function muhurtaDayHtml(info, workRes, isNearest) {
        const { refDate, sun, res, moonObj, kaala, av, bhadraText, free, best, taraName, taraGood, badYoga } = info;
        const hasAnswer = taraGood && free.length > 0;
        const verdictTitle = hasAnswer ? 'ఈ రోజు మీకు శుభ ముహూర్తం ఉంది' : 'ఈ రోజు మీకు శుభ ముహూర్తం లేదు';

        const reasons = [];
        reasons.push(`మీ జన్మ నక్షత్రం ${info.janmaNak}, ఈ రోజు నక్షత్రం ${moonObj.nak} — ${taraName} (${taraGood ? 'శుభం' : 'అనుకూలం కాదు'})`);
        reasons.push(`తిథి ${res.tithi}, వారం ${res.vara}, యోగం ${res.yoga}, కరణం ${res.karana}`);
        if (badYoga) reasons.push(`ఈ రోజు ${res.yoga} యోగం — ఇది అశుభ యోగం, శుభ కార్యాలకు అనుకూలం కాదు`);
        if (bhadraText) reasons.push(bhadraText);
        if (!free.length) reasons.push('మానుకోవాల్సిన కాలాలు ఎక్కువగా ఉండడం వల్ల సరిపడా శుభ సమయం మిగలలేదు');

        const windowRow = (a, b, label) =>
            `<tr><td>${label || 'సమయం'}</td><td>${fmtClock(a)} – ${fmtClock(b)}<br><span class="since-note">${fmtMinutes(b - a)}</span></td></tr>`;

        let html = `
            <div class="top-info-box" style="text-align: left; border-color: ${hasAnswer ? '#86efac' : '#fca5a5'};">
                ${isNearest ? '<div class="since-note" style="margin-bottom: 4px;">👇 మీకు దగ్గరలో ఉన్న ముహూర్తం</div>' : ''}
                <div class="top-date">📅 ${fmtDateShort(refDate)}, ${res.vara}</div>
                <div style="font-size: 1.05rem; color: ${hasAnswer ? '#166534' : '#991b1b'};">${hasAnswer ? '✅' : '⚠️'} ${verdictTitle}</div>
                <div class="since-note" style="margin-top: 6px; line-height: 1.7;">${reasons.join('<br>')}</div>
            </div>`;

        if (hasAnswer) {
            html += `
            <div class="card-box">
                <div class="section-heading">✅ మీ పనికి అనుకూలమైన సమయాలు</div>
                <table class="info-grid">
                    ${free.map(([a, b]) => windowRow(a, b, 'శుభ సమయం')).join('')}
                </table>
                <div class="since-note" style="margin-top: 8px;">రాహుకాలం, యమగండం, గుళిక, దుర్ముహూర్తం, వర్జ్యం, భద్ర కరణం — ఇవన్నీ తీసేయబడ్డాయి.</div>
            </div>`;
        } else {
            html += `
            <div class="card-box" style="text-align: center;">
                <div class="section-heading" style="color: #991b1b;">ముహూర్తాలు లేవు</div>
                <p class="info-meaning">${taraGood
                    ? 'ఈ రోజు మానుకోవాల్సిన కాలాలు ఎక్కువగా ఉండడం వల్ల సరిపడా శుభ సమయం మిగలలేదు. దయచేసి వేరే తేదీ చూడండి.'
                    : 'మీ జన్మ నక్షత్రానికి ఈ రోజు ' + taraName + ' వస్తోంది — ఇది శుభ కార్యాలకు అనుకూలం కాదు. దయచేసి వేరే తేదీ చూడండి.'}</p>
            </div>`;
        }

        if (best.length) {
            html += `
            <div class="card-box">
                <div class="section-heading">🌟 ఉత్తమ సమయాలు</div>
                <table class="info-grid">
                    ${best.map(b => windowRow(b.start, b.end, b.name)).join('')}
                </table>
            </div>`;
        }

        if (free.length) {
            html += `
            <div class="card-box">
                <div class="section-heading">🕐 ఈ రోజు మిగిలిన సమయాలు (సూర్యోదయం నుంచి సూర్యాస్తమయం వరకు)</div>
                <table class="info-grid">
                    ${free.map(([a, b]) => windowRow(a, b, 'సమయం')).join('')}
                </table>
            </div>`;
        }

        html += `
            <div class="card-box">
                <div class="section-heading">🚫 ఈ రోజు మానుకోవాల్సిన సమయాలు</div>
                <table class="info-grid">
                    <tr><td>రాహుకాలం</td><td>${fmtSpan(kaala.rahu.start, kaala.rahu.end)}</td></tr>
                    <tr><td>యమగండకాలం</td><td>${fmtSpan(kaala.yama.start, kaala.yama.end)}</td></tr>
                    <tr><td>గుళికాకాలం</td><td>${fmtSpan(kaala.gulika.start, kaala.gulika.end)}</td></tr>
                    ${kaala.dur.map(w => `<tr><td>దుర్ముహూర్తం</td><td>${fmtSpan(w.start, w.end)}</td></tr>`).join('')}
                    ${av ? av.varjya.map(w => `<tr><td>వర్జ్యం (${w.nak} నక్షత్రం)</td><td>${fmtWindow(w.start, w.end, refDate)}</td></tr>`).join('') : ''}
                    ${info.bhadra ? `<tr><td>భద్ర (విష్టి) కరణం</td><td>${fmtWindow(info.bhadra.start, info.bhadra.end, refDate)}</td></tr>` : ''}
                    <tr><td>దిశ శూల</td><td>${kaala.disha} దిశ — ఆ దిక్కున ప్రయాణం మానుకోవాలి</td></tr>
                </table>
            </div>

            <div class="card-box">
                <div class="section-heading">📋 ${workRes.label} కోసం సూచనలు</div>
                <div class="info-block good"><b>✅ మంచిది</b>${workRes.work.good}</div>
                <div class="info-block bad"><b>🚫 మానుకోండి</b>${workRes.work.avoid}</div>
                ${workRes.matched ? '' : '<div class="info-note">మీరు రాసిన పని జాబితాలో లేదు కాబట్టి సాధారణ సూచనలు చూపుతున్నాము.</div>'}
            </div>

            <div class="card-box">
                <div class="section-heading">🗓️ ఆ రోజు పంచాంగం</div>
                <table class="info-grid">
                    <tr><td>తిథి</td><td>${res.tithi}</td></tr>
                    <tr><td>వారం</td><td>${res.vara}</td></tr>
                    <tr><td>నక్షత్రం</td><td>${moonObj.nak} (${moonObj.pada}వ పాదం)</td></tr>
                    <tr><td>యోగం</td><td>${res.yoga}</td></tr>
                    <tr><td>కరణం</td><td>${res.karana}</td></tr>
                    <tr><td>సూర్యోదయం / అస్తమయం</td><td>${fmtClock(sun.sunrise)} / ${fmtClock(sun.sunset)}</td></tr>
                </table>
            </div>

            <div class="card-box" style="text-align: center;">
                <button type="button" class="primary-btn" onclick="printPdf('muhurtam')">📄 లగ్న పత్రిక</button>
                <div id="printMsg" class="hint-text" style="margin-top: 10px; font-weight: 700; min-height: 20px;"></div>
                <div class="hint-text" style="margin-top: 6px;">మీ ముహూర్త లగ్న పత్రిక PDF ను డౌన్‌లోడ్ చేసుకోండి.</div>
            </div>

            <div class="card-box">
                <div class="info-note">ఇది సంప్రదాయక సూచన మాత్రమే. వివాహం వంటి ముఖ్యమైన కార్యాలకు పురోహితులను సంప్రదించి, మీ కుటుంబ పంచాంగం ప్రకారం ముహూర్తం నిర్ణయించుకోండి.</div>
            </div>`;

        return html;
    }

    // PDF డౌన్‌లోడ్ — ప్రింట్ వ్యూ తయారు చేసి window.print() కు పంపుతుంది
    function buildPatrikaHtml() {
        const { info, workRes, janmaNak } = lastMuhurta;
        const { refDate, sun, res, moonObj, free, best, taraName, cal } = info;
        const person = (document.getElementById('mhName') || {}).value.trim();
        const paksha = getPaksha(res.tithi);
        const startHour = best.length ? best[0].start : (free.length ? free[0][0] : sun.sunrise);
        const mainWindow = free.length
            ? `${fmtClock(free[0][0])} నుండి ${fmtClock(free[0][1])} వరకు`
            : `${fmtClock(startHour)} నుండి`;
        const lagna = RASI_FULL[lastMuhurta.lagnaRasi !== undefined ? lastMuhurta.lagnaRasi : res.lagnaRasi];
        const bless = (workRes.work.bless || []).map(b => `<li>${b}</li>`).join('');

        return `
        <div class="pk-page">
            <div class="pk-frame">
                <div class="pk-top-strip">
                    <span>శుభమస్తు</span>
                    <span>అవిఘ్నమస్తు</span>
                </div>

                <div class="pk-top">
                    <div class="pk-medal"><img class="pk-ganesha-img" src="${GANESHA_IMG}" alt="వినాయకుడు"></div>
                    <div class="pk-top-mid"><div class="pk-om-long">ఓం శ్రీ భగవతే వాసుదేవాయ నమః</div></div>
                    <div class="pk-medal">${SARASWATI_SVG}</div>
                </div>

                <div class="pk-title-wrap">
                    <div class="pk-logo">${PATRIKA_LOGO_SVG}</div>
                    <div class="pk-title">LR జ్యోతిశాలయం</div>
                </div>
                <div class="pk-sub">శ్రీ లింగరాజ్ సూర్యరామ్ శర్మ</div>
                <div class="pk-banner2">శుభ ముహూర్త నిర్ణయ పత్రం</div>

                <div class="pk-box">
                    <div class="pk-line"><b>కార్యక్రమము పేరు</b><span>:</span><span class="pk-val">${workRes.label}</span></div>
                    <div class="pk-line"><b>ఉద్దేశం</b><span>:</span><span class="pk-val">${workRes.work.purpose || workRes.label}</span></div>
                    <div class="pk-line"><b>వ్యక్తి పేరు</b><span>:</span><span class="pk-val">${person || '—'}</span></div>
                    <div class="pk-line"><b>జన్మ నక్షత్రం</b><span>:</span><span class="pk-val">${janmaNak}</span></div>
                    <div class="pk-line"><b>కోరిన తేది</b><span>:</span><span class="pk-val">${fmtDateShort(refDate)}, ${res.vara}</span></div>
                    <div class="pk-line"><b>సమయం</b><span>:</span><span class="pk-val">${mainWindow}</span></div>
                </div>

                <div class="pk-cols">
                    <div class="pk-col-left">
                        <div class="pk-banner2">లగ్న కుండలి</div>
                        <div class="pk-box pk-chart"><div id="patrikaChartSlot"></div></div>
                    </div>
                    <div class="pk-col-right">
                        <div class="pk-banner2">ముహూర్త విశేషాలు</div>
                        <div class="pk-box">
                            <div class="pk-row"><span>తిథి</span><span>${res.tithi}</span></div>
                            <div class="pk-row"><span>వారము</span><span>${res.vara}</span></div>
                            <div class="pk-row"><span>నక్షత్రం</span><span>${moonObj.nak} (${taraName})</span></div>
                            <div class="pk-row"><span>యోగం</span><span>${res.yoga}</span></div>
                            <div class="pk-row"><span>కరణం</span><span>${res.karana}</span></div>
                            <div class="pk-row"><span>లగ్నం</span><span>${lagna}</span></div>
                            <div class="pk-row"><span>లగ్న సమయం</span><span>${fmtClock(startHour)}</span></div>
                            <div class="pk-row"><span>పక్షం</span><span>${paksha}</span></div>
                        </div>
                    </div>
                </div>

                <div class="pk-cols">
                    <div class="pk-col-left">
                        <div class="pk-banner2">శుభ సూచనలు</div>
                        <ul class="pk-bullets">${bless}</ul>
                    </div>
                    <div class="pk-col-right">
                        <div class="pk-banner2">గమనిక</div>
                        <div class="pk-note">
                            <div class="pk-blank"></div>
                            <div class="pk-blank"></div>
                            <div class="pk-blank"></div>
                        </div>
                    </div>
                </div>

                <div class="pk-bottom">
                    <div class="pk-acharya">
                        ఆశీస్సులతో,<br>
                        <b>శ్రీ లింగరాజ్ సూర్యరామ్ శర్మ</b><br>
                        ఫోన్ : ____________
                    </div>
                </div>
            </div>
        </div>`;
    }

    // ప్రింట్ డైలాగ్ తెరవకపోతే — పత్రాన్ని ప్రత్యేక విండోలో తెరిచి అక్కడ ప్రింట్ చేయడం
    // లగ్న పత్రిక — యజమాని డిజైన్‌పై వివరాలు నింపి A4 పేజీగా తయారు చేయడం
    function buildLagnaPatrika() {
        const info = (lastMuhurta && lastMuhurta.info) || {};
        const res = info.res || {};
        const work = (lastMuhurta && lastMuhurta.workRes && lastMuhurta.workRes.label) || '';
        const d = info.refDate || new Date();
        const dd = String(d.getDate()).padStart(2, '0');
        const mm2 = String(d.getMonth() + 1).padStart(2, '0');
        const dateStr = dd + '-' + mm2 + '-' + d.getFullYear();
        const startHour = (info.best && info.best.length) ? info.best[0].start
            : (info.free && info.free.length ? info.free[0][0] : (info.sun ? info.sun.sunrise : 6));
        const timeStr = fmtClock(startHour);
        const nakName = (info.moonObj && info.moonObj.nak) || res.nakshatra || '';
        const lagnaName = (typeof lastMuhurta.lagnaRasi !== 'undefined' && RASI_FULL[lastMuhurta.lagnaRasi])
            ? RASI_FULL[lastMuhurta.lagnaRasi] : '';
        const v = (text, x, y, size) => '<div class="lp-val" style="left:' + x + '%;top:' + y + '%;'
            + (size ? 'font-size:' + size + 'mm;' : '') + '">' + (text || '') + '</div>';
        return '<div class="lagna-page">'
            + v(work, 37, 25.3)
            + v('', 78, 30.4)
            + v(dateStr, 27, 33.4)
            + v(timeStr, 74, 33.4)
            + '<div class="lp-chart"><div id="patrikaChartSlot" style="width:100%;height:100%"></div></div>'
            + v(res.tithi || '', 73, 44.4, 3.6)
            + v(res.vara || '', 73, 48.45, 3.6)
            + v(nakName, 73, 52.5, 3.6)
            + v(res.yoga || '', 73, 56.55, 3.6)
            + v(res.karana || '', 73, 60.6, 3.6)
            + v(lagnaName, 73, 64.65, 3.6)
            + v(timeStr, 73, 65.4, 3.6)
            + '<div class="lp-note">ఈ ముహూర్తం శుభ కార్యాలకు అనుకూలం. కుటుంబ పంచాంగం ప్రకారం పురోహితులను సంప్రదించి నిర్ణయించుకోండి.</div>'
            + '</div>';
    }

    function printMsg(text, ok) {
        const el = document.getElementById('printMsg');
        if (!el) return;
        el.textContent = text || '';
        el.style.color = ok ? '#1f6f43' : '#b3221f';
    }

    function patrikaHtmlDoc() {
        const area = document.getElementById('printArea');
        const styles = Array.from(document.querySelectorAll('style')).map(function (s) { return s.outerHTML; }).join('\n');
        return '<!DOCTYPE html><html lang="te"><head><meta charset="utf-8">'
            + '<meta name="viewport" content="width=device-width, initial-scale=1">'
            + '<title>LR Astrology — ముహూర్త పత్రం</title>' + styles
            + '<style>body{background:#fff;margin:0;padding:14px;}#printArea{display:block !important;}</style>'
            + '</head><body><div id="printArea">' + (area ? area.innerHTML : '') + '</div></body></html>';
    }

    function downloadPatrika() {
        if (!lastMuhurta) {
            try { generateMuhurtam(); } catch (e) { }
        }
        const area = document.getElementById('printArea');
        if (!area || !area.innerHTML.trim()) {
            printMsg('ముందుగా మీ నక్షత్రం ఎంచుకుని "ముహూర్తం చూడండి" నొక్కండి.');
            return;
        }
        const blob = new Blob([patrikaHtmlDoc()], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'muhurta-patram.html';
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 1500);
        printMsg('పత్రం ఫైల్‌గా దిగుమతి అయింది — Downloads లో "muhurta-patram.html" చూడండి. దాన్ని తెరిచి ప్రింట్ చేసుకోవచ్చు.', true);
    }

    function openPrintWindow() {
        const area = document.getElementById('printArea');
        if (!area || !area.innerHTML.trim()) {
            alert('ముందుగా ముహూర్తం చూపించి, తర్వాత పత్రం నొక్కండి.');
            return;
        }
        const styles = Array.from(document.querySelectorAll('style')).map(function (s) { return s.outerHTML; }).join('\n');
        const html = '<!DOCTYPE html><html lang="te"><head><meta charset="utf-8">'
            + '<meta name="viewport" content="width=device-width, initial-scale=1">'
            + '<title>LR Astrology — ముహూర్త పత్రం</title>' + styles
            + '<style>body{background:#fff;margin:0;padding:14px;}#printArea{display:block !important;}</style>'
            + '</head><body><div id="printArea">' + area.innerHTML + '</div></body></html>';
        const w = window.open('', '_blank');
        if (!w) {
            alert('ప్రింట్ విండో తెరవడం బ్లాక్ అయింది. దయచేసి ఈ పేజీని Chrome బ్రౌజర్‌లో తెరిచి ప్రయత్నించండి (WhatsApp/Facebook లోపలి బ్రౌజర్‌లో ప్రింట్ పనిచేయదు).');
            return;
        }
        w.document.open();
        w.document.write(html);
        w.document.close();
        setTimeout(function () { try { w.focus(); w.print(); } catch (e) { } }, 500);
    }

    function printPdf(kind) {
        const area = document.getElementById('printArea');
        if (!area) return;

        if (kind === 'jatakam') {
            const source = document.getElementById('resultsBox');
            if (!source || source.style.display === 'none') {
                alert('ముందుగా జాతకం చూపించండి, తర్వాత PDF డౌన్‌లోడ్ నొక్కండి.');
                return;
            }
            const name = (document.getElementById('inName') || {}).value || '';
            const clone = source.cloneNode(true);
            clone.style.display = 'block';
            clone.querySelectorAll('.accordion-body').forEach(b => { b.style.display = 'block'; });
            clone.querySelectorAll('.style-tabs, .accordion-arrow, button, .tap-btn, .tap-hint').forEach(el => el.remove());

            const today = new Date();
            const stamp = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
            area.innerHTML = `
                <div class="print-head">
                    <div class="print-brand">LR Astrology</div>
                    <div class="print-title">జాతకం${name ? ' — ' + name : ''}</div>
                    <div class="print-sub">జనన వివరాలు, రాశి మరియు నవాంశ కుండలి, గ్రహ స్థితి, దశలు</div>
                    <div class="print-sub">తయారు చేసిన తేదీ: ${stamp}</div>
                </div>`;
            area.appendChild(clone);
            setTimeout(function () {
                try { window.print(); printMsg('ప్రింట్ విండో తెరిచాం — అందులో "Save as PDF" ఎంచుకోండి.', true); }
                catch (e) { printMsg('ప్రింట్ తెరవలేదు — ఈ పేజీని Chrome బ్రౌజర్‌లో తెరిచి మళ్లీ ప్రయత్నించండి.'); }
            }, 150);
            return;
        }

        // ---- ముహూర్త పత్రం (నమూనా ప్రకారం) ----
        if (!lastMuhurta) {
            // వినియోగదారు ముందుగా 'ముహూర్తం చూడండి' నొక్కకపోయినా పత్రం తయారుచేయడం
            try { generateMuhurtam(); } catch (e) { }
        }
        if (!lastMuhurta) {
            printMsg('ముందుగా మీ జన్మ నక్షత్రం ఎంచుకుని "ముహూర్తం చూడండి" నొక్కండి, తర్వాత పత్రం నొక్కండి.');
            return;
        }

        const { info } = lastMuhurta;
        const { best, free, sun, refDate } = info;
        const lat2 = parseFloat(document.getElementById('mhLat').value);
        const lon2 = parseFloat(document.getElementById('mhLon').value);
        const tz2 = parseFloat(document.getElementById('mhTz').value);
        const styleSel = document.getElementById('mhChartStyle');
        const chartStyle = styleSel ? styleSel.value : 'east';

        const startHour = best.length ? best[0].start : (free.length ? free[0][0] : sun.sunrise);
        const hh = Math.floor(startHour) % 24;
        const mm = Math.round((startHour - Math.floor(startHour)) * 60);
        const mres = calculateEphemeris(refDate.getFullYear(), refDate.getMonth() + 1,
            refDate.getDate(), hh, mm, lat2, lon2, tz2);

        lastMuhurta.lagnaRasi = mres.lagnaRasi;
        area.innerHTML = buildPatrikaHtml();

        const slot = document.getElementById('patrikaChartSlot');
        if (slot) {
            const savedPlanets = currentPlanets, savedLagna = currentLagnaRasi;
            currentPlanets = mres.planets;
            currentLagnaRasi = mres.lagnaRasi;
            chartStyles['patrikaChartSlot'] = chartStyle;
            renderChart('patrikaChartSlot');
            // పత్రంలో భావ సంఖ్యలు అవసరం లేదు
            slot.innerHTML = slot.innerHTML.replace(/<text[^>]*class="bhava-num"[^>]*>[^<]*<\/text>\s*/g, '');
            currentPlanets = savedPlanets;
            currentLagnaRasi = savedLagna;
        }

        setTimeout(function () {
            try {
                window.print();
                printMsg('ప్రింట్ విండో తెరిచాం — అందులో "Save as PDF" ఎంచుకోండి.', true);
            } catch (e) {
                printMsg('ప్రింట్ తెరవలేదు — ఈ పేజీని Chrome బ్రౌజర్‌లో తెరిచి మళ్లీ ప్రయత్నించండి.');
            }
        }, 150);
    }

    // దగ్గరలో ఉన్న ముహూర్తాల పట్టిక — ఇందులో ఒకటి ఎంచుకుని వివరాలు చూడవచ్చు
    function mhNearTableHtml(found, janmaNak, mode) {
        const isAfter = (mode === 'after60');
        const rows = found.map((f, i) => {
            const win = (f.free && f.free.length)
                ? fmtClock(f.free[0][0]) + ' – ' + fmtClock(f.free[0][1])
                : '—';
            return `
                <tr class="mh-row${i === 0 ? ' selected' : ''}" id="mhRow${i}" onclick="selectMuhurtaDate(${i}, true)">
                    <td class="mh-pick">
                        <input type="radio" name="mhPick" id="mhPick${i}" ${i === 0 ? 'checked' : ''}
                               onclick="event.stopPropagation(); selectMuhurtaDate(${i}, true)">
                    </td>
                    <td><b>${fmtDateShort(f.refDate)}</b><br><span class="since-note">${f.res.vara}</span></td>
                    <td>${f.moonObj.nak}<br><span class="since-note">${f.taraName}${f.taraGood ? ' · శుభం' : ''}</span></td>
                    <td>${f.res.tithi}</td>
                    <td>${win}</td>
                </tr>`;
        }).join('');
        return `
            <div class="card-box">
                <div class="section-heading">${isAfter ? '⏭️ 60 రోజుల తర్వాత ఉన్న ముహూర్తాలు' : '🔎 మీ నక్షత్రానికి దగ్గరలో ఉన్న ముహూర్తాలు'}</div>
                <div class="since-note" style="margin-bottom: 10px;">${janmaNak} జన్మ నక్షత్రం ఉన్నవారికి, ${isAfter ? '60 నుంచి 120 రోజుల మధ్య' : 'ఈరోజు నుంచి 60 రోజుల్లో'} అనుకూలమైన ${found.length} రోజులు. పట్టికలో ఏదైనా ఒక ముహూర్తాన్ని ఎంచుకుని క్రింద వివరాలు చూడండి.</div>
                <div class="mh-table-wrap">
                    <table class="mh-table">
                        <thead>
                            <tr>
                                <th>ఎంపిక</th>
                                <th>తేదీ</th>
                                <th>నక్షత్రం</th>
                                <th>తిథి</th>
                                <th>శుభ సమయం*</th>
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
                <div class="since-note" style="margin-top: 8px;">* సుమారు సమయం. వర్జ్యం, భద్ర కరణం తీసివేసిన తర్వాత ఖచ్చితమైన సమయాలు ఎంచుకున్న ముహూర్తం వివరాలలో కనిపిస్తాయి.</div>
            </div>`;
    }

    function selectMuhurtaDate(i, scrollToDetail) {
        if (!mhNearCtx || !mhNearCtx.found[i]) return;
        const f = mhNearCtx.found[i];
        document.querySelectorAll('.mh-row').forEach((row, idx) => row.classList.toggle('selected', idx === i));
        const radio = document.getElementById('mhPick' + i);
        if (radio) radio.checked = true;

        const janmaNak = mhNearCtx.janmaNak;
        const workRes = mhNearCtx.workRes;
        const info = computeMuhurtaDay(f.y, f.m, f.d, janmaNak, mhNearCtx.lat, mhNearCtx.lon, mhNearCtx.tz, true);
        lastMuhurta = { info, workRes, janmaNak };

        const det = document.getElementById('mhSelectedDetail');
        if (!det) return;

        // ముహూర్త సమయానికి లగ్న కుండలి — డిఫాల్ట్‌గా తూర్పు శైలి
        const startHour = (info.best && info.best.length)
            ? info.best[0].start
            : ((info.free && info.free.length) ? info.free[0][0] : info.sun.sunrise);
        const mhHour = Math.floor(startHour) % 24;
        const mhMin = Math.round((startHour - Math.floor(startHour)) * 60);
        const mres = calculateEphemeris(f.y, f.m, f.d, mhHour, mhMin,
            mhNearCtx.lat, mhNearCtx.lon, mhNearCtx.tz);
        chartDataOverrides['mhChartArea'] = { planets: mres.planets, lagna: mres.lagnaRasi };
        chartStyles['mhChartArea'] = 'east';

        det.innerHTML = `
            <div class="card-box" style="text-align: center; background: linear-gradient(135deg, #ecfdf5 0%, #e0f2fe 100%);">
                <div class="section-heading" style="margin-bottom: 4px;">✅ ఎంపిక చేసిన ముహూర్తం — ${fmtDateShort(f.refDate)}, ${f.res.vara}</div>
                <div class="since-note">${janmaNak} జన్మ నక్షత్రం ఆధారంగా ఈ రోజు ${f.moonObj.nak} నక్షత్రం, ${f.taraName}</div>
            </div>
            <div class="card-box">
                <div class="section-heading" style="text-align: center;">లగ్న కుండలి</div>
                <div class="since-note" style="text-align: center; margin-bottom: 8px;">${fmtDateShort(f.refDate)}, ${f.res.vara} · ${fmtClock(startHour)} ముహూర్త సమయం</div>
                <div class="style-tabs" data-chart="mhChartArea">
                    <div class="style-tab active" onclick="switchChartStyle('east', this)">తూర్పు శైలి</div>
                    <div class="style-tab" onclick="switchChartStyle('south', this)">దక్షిణ శైలి</div>
                    <div class="style-tab" onclick="switchChartStyle('north', this)">ఉత్తర శైలి</div>
                </div>
                <div class="chart-wrapper" id="mhChartArea"></div>
                <div class="legend-note" id="mhChartSubLabel">${RASI_FULL[mres.lagnaRasi]} లగ్నం | (వ) = వక్రి | (అ) = అస్తంగత్వం</div>
            </div>` + muhurtaDayHtml(info, workRes, false);

        renderChart('mhChartArea');
        if (scrollToDetail) det.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function generateMuhurtam() {
        const box = document.getElementById('mhResults');
        if (!box) return;
        box.style.display = 'block';

        const modeEl = document.querySelector('input[name="mhMode"]:checked');
        const mode = modeEl ? modeEl.value : 'date';
        const janmaNak = document.getElementById('mhNakshatra').value;
        if (!janmaNak) {
            box.innerHTML = `
                <div class="card-box" style="text-align: center;">
                    <div class="section-heading" style="color: #0369a1;">మీ నక్షత్రం కావాలి</div>
                    <p class="info-meaning">దయచేసి మీ పేరు టైప్ చేయండి (మొదటి అక్షరం ప్రకారం నక్షత్రం ఎంపిక అవుతుంది), లేదా పైన జాబితా నుంచి మీ జన్మ నక్షత్రాన్ని ఎంచుకోండి.</p>
                </div>`;
            return;
        }
        const workRes = resolveMuhurtaWork(document.getElementById('mhWorkInput').value);
        const lat = parseFloat(document.getElementById('mhLat').value);
        const lon = parseFloat(document.getElementById('mhLon').value);
        const tz = parseFloat(document.getElementById('mhTz').value);

        if (isNaN(lat) || isNaN(lon) || isNaN(tz)) {
            box.innerHTML = `<div class="card-box"><p class="info-meaning">దయచేసి అక్షాంశం, రేఖాంశం, టైమ్ జోన్ సరిచూసుకోండి.</p></div>`;
            return;
        }

        if (mode === 'near' || mode === 'after60' || mode === 'after120') {
            const today = new Date();
            const found = [];
            const startOffset = (mode === 'after120') ? 121 : ((mode === 'after60') ? 61 : 2);
            const spanDays = (mode === 'after120') ? 30 : ((mode === 'after60') ? 60 : 59);
            for (let i = startOffset; i < startOffset + spanDays && found.length < 8; i++) {
                const dt = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
                const info = computeMuhurtaDay(dt.getFullYear(), dt.getMonth() + 1, dt.getDate(), janmaNak, lat, lon, tz, false);
                if (info.ok) found.push(info);
            }
            if (!found.length) {
                box.innerHTML = `
                <div class="card-box" style="text-align: center;">
                    <div class="section-heading" style="color: #991b1b;">ముహూర్తాలు లేవు</div>
                    <p class="info-meaning">${mode === 'after120' ? '121 నుంచి 150 రోజుల మధ్య' : (mode === 'after60' ? '61 నుంచి 120 రోజుల మధ్య' : 'రేపటి నుంచి 60 రోజుల్లో')} ${janmaNak} జన్మ నక్షత్రం ఉన్నవారికి సరిపడే ముహూర్తం కనిపించలేదు.</p>
                </div>`;
                return;
            }
            mhNearCtx = { found, janmaNak, lat, lon, tz, workRes, mode };
            box.innerHTML = mhNearTableHtml(found, janmaNak, mode) + '<div id="mhSelectedDetail"></div>';
            selectMuhurtaDate(0, false);
            return;
        }

        const dateVal = document.getElementById('mhDate').value;
        if (!dateVal) {
            box.innerHTML = `
                <div class="card-box" style="text-align: center;">
                    <div class="section-heading" style="color: #991b1b;">ముహూర్తాలు లేవు</div>
                    <p class="info-meaning">దయచేసి ముందుగా తేదీని ఎంచుకోండి. తేదీ ఇచ్చాక ఆ రోజు మీకు అనుకూలమైన సమయాలు ఇక్కడ కనిపిస్తాయి.</p>
                </div>`;
            return;
        }

        const parts = dateVal.split('-');
        const dy = parseInt(parts[0]), dm = parseInt(parts[1]), dd = parseInt(parts[2]);
        const info = computeMuhurtaDay(dy, dm, dd, janmaNak, lat, lon, tz, true);
        lastMuhurta = { info, workRes, janmaNak };

        // ఆ రోజు ముహూర్త సమయానికి లగ్న కుండలి
        const startH = (info.best && info.best.length) ? info.best[0].start
            : ((info.free && info.free.length) ? info.free[0][0] : info.sun.sunrise);
        const sH = Math.floor(startH) % 24;
        const sM = Math.round((startH - Math.floor(startH)) * 60);
        const mres = calculateEphemeris(dy, dm, dd, sH, sM, lat, lon, tz);
        chartDataOverrides['mhChartArea'] = { planets: mres.planets, lagna: mres.lagnaRasi };
        chartStyles['mhChartArea'] = 'east';

        box.innerHTML = muhurtaDayHtml(info, workRes, false) + `
            <div class="card-box">
                <div class="section-heading" style="text-align: center;">లగ్న కుండలి</div>
                <div class="since-note" style="text-align: center; margin-bottom: 8px;">${fmtDateShort(new Date(dy, dm - 1, dd))}, ${info.res.vara} · ${fmtClock(startH)} ముహూర్త సమయం</div>
                <div class="style-tabs" data-chart="mhChartArea">
                    <div class="style-tab active" onclick="switchChartStyle('east', this)">తూర్పు శైలి</div>
                    <div class="style-tab" onclick="switchChartStyle('south', this)">దక్షిణ శైలి</div>
                    <div class="style-tab" onclick="switchChartStyle('north', this)">ఉత్తర శైలి</div>
                </div>
                <div class="chart-wrapper" id="mhChartArea"></div>
                <div class="legend-note">${RASI_FULL[mres.lagnaRasi]} లగ్నం | (వ) = వక్రి | (అ) = అస్తంగత్వం</div>
            </div>`;
        renderChart('mhChartArea');
    }

    function generatePanchangam(shouldSave = true) {
        const day = parseInt(document.getElementById('gcDay').value);
        const month = parseInt(document.getElementById('gcMonth').value);
        const year = parseInt(document.getElementById('gcYear').value);
        const lat = parseFloat(document.getElementById('gcLat').value);
        const lon = parseFloat(document.getElementById('gcLon').value);
        const tz = parseFloat(document.getElementById('gcTz').value);
        const city = document.getElementById('gcCityInput').value.trim();

        if (shouldSave) {
            savePanchangDate(year, month, day);
            updatePanchangDateHint();
        }

        if (isNaN(lat) || isNaN(lon) || isNaN(tz)) {
            alert('దయచేసి అక్షాంశం, రేఖాంశం, టైమ్ జోన్ సరిచూసుకోండి.');
            return;
        }

        const sun = getSunTimes(year, month, day, lat, lon, tz);
        const sHour = Math.floor(sun.sunrise);
        const sMin = Math.round((sun.sunrise - sHour) * 60);

        const res = calculateEphemeris(year, month, day, sHour, sMin, lat, lon, tz);
        gocharPlanets = res.planets;
        gocharLagnaRasi = res.lagnaRasi;

        const moonObj = res.planets[1];
        const sunObj = res.planets[0];
        const paksha = getPaksha(res.tithi);
        const kaala = getKaalaWindows(year, month, day, sun);

        const refMoment = new Date(year, month - 1, day, sHour, sMin);
        const refDate = new Date(year, month - 1, day);
        const moonSince = findRasiIngress(1, res.planets[1].rasiIdx, refMoment, lat, lon, tz, 3 * 3600000, 40);
        const moonUntil = findNextRasiIngress(1, refMoment, lat, lon, tz, 3 * 3600000, 40);
        const sunSince = findRasiIngress(0, res.planets[0].rasiIdx, refMoment, lat, lon, tz, 12 * 3600000, 80);
        const sunUntil = findNextRasiIngress(0, refMoment, lat, lon, tz, 12 * 3600000, 80);
        const cal = getTeluguCalendarElements(refMoment, refDate, res.planets[0].rasiIdx, lat, lon, tz);
        currentYogaName = res.yoga;
        currentKaranaName = res.karana;
        const dayStart = new Date(year, month - 1, day, sHour, sMin);
        const amritVarjya = getAmritVarjya(dayStart, lat, lon, tz);
        // వారం సూర్యోదయంతో మొదలై, మరుసటి సూర్యోదయంతో ముగుస్తుంది
        const nextDayDate = new Date(year, month - 1, day + 1);
        const nextSun = getSunTimes(nextDayDate.getFullYear(), nextDayDate.getMonth() + 1, nextDayDate.getDate(), lat, lon, tz);
        const nextSunHour = Math.floor(nextSun.sunrise);
        const nextSunMin = Math.round((nextSun.sunrise - nextSunHour) * 60);
        const varaEnd = new Date(nextDayDate.getFullYear(), nextDayDate.getMonth(), nextDayDate.getDate(), nextSunHour, nextSunMin);
        const nextVara = VARA_NAMES[(new Date(year, month - 1, day).getDay() + 1) % 7];
        const varaStart = new Date(year, month - 1, day, sHour, sMin);
        const sunriseLagnaEnd = findLagnaEnd(dayStart, lat, lon, tz);
        const nextLagnaRasi = sunriseLagnaEnd
            ? lagnaRasiAt(new Date(sunriseLagnaEnd.getTime() + 60000), lat, lon, tz)
            : null;

        const tithiEnd = findEndTime('tithi', refMoment, lat, lon, tz);
        const nakEnd = findEndTime('nakshatra', refMoment, lat, lon, tz);
        const nextTithi = TITHI_NAMES[(TITHI_NAMES.indexOf(res.tithi) + 1) % 30];
        const nextNak = NAK_NAMES[(NAK_NAMES.indexOf(moonObj.nak) + 1) % 27];

        document.getElementById('gcResultsContainer').style.display = 'block';

        const rasiSpan = (since, until) => {
            if (since && until) return ` <span class="since-note">(${fmtMoment(since)} నుండి ${fmtMoment(until)} వరకు)</span>`;
            if (since) return ` <span class="since-note">(${fmtMoment(since)} నుండి)</span>`;
            return '';
        };

        document.getElementById('gcTopDetailsBox').innerHTML = `
            ${city ? `<div class="top-location">📍 ${city}</div>` : ''}
            <div>🌅 సూర్యోదయం: ${fmtClock(sun.sunrise)} &nbsp;|&nbsp; 🌇 సూర్యాస్తమయం: ${fmtClock(sun.sunset)}</div>
            <div class="top-date">📅 ${fmtDateShort(refDate)}</div>
            <div>🗓️ ${cal.samvatsara} నామ సంవత్సరం &nbsp;|&nbsp; ${cal.ayana}</div>
            <div>🌾 ${cal.ritu} &nbsp;|&nbsp; 🌙 ${cal.masa} మాసం &nbsp;|&nbsp; ${paksha} &nbsp;|&nbsp; ${res.vara}</div>
            <div>♈ చంద్ర రాశి:<br>${moonObj.rasiFull}${rasiSpan(moonSince, moonUntil)}</div>
            <div>☀️ సూర్య రాశి:<br>${sunObj.rasiFull}${rasiSpan(sunSince, sunUntil)}</div>
        `;

        document.getElementById('gcPanchangTable').innerHTML = `
            <tr><td>తిథి</td><td>${res.tithi}${tithiEnd ? ` — ${fmtEndMoment(tithiEnd, refDate)} వరకు` : ''}<br><span class="since-note">తదుపరి: ${nextTithi}</span></td></tr>
            <tr><td>వారం</td><td>${res.vara} — ${fmtWindow(varaStart, varaEnd, refDate)}<br><span class="since-note">తదుపరి: ${nextVara}</span></td></tr>
            <tr><td>నక్షత్రము</td><td>${moonObj.nak} (${moonObj.pada}వ పాదం) — అధిపతి: ${moonObj.nakLord}${nakEnd ? `<br>${fmtEndMoment(nakEnd, refDate)} వరకు` : ''}<br><span class="since-note">తదుపరి: ${nextNak}</span></td></tr>
            <tr><td>యోగము</td><td><div class="value-row"><span>${res.yoga}</span><button type="button" class="tap-btn" onclick="showPanchangInfo('yoga')" aria-label="యోగం వివరాలు">👆</button></div>${YOGA_NOTE[res.yoga] ? `<span class="since-note">${YOGA_NOTE[res.yoga]}</span>` : ''}</td></tr>
            <tr><td>కరణము</td><td><div class="value-row"><span>${res.karana}</span><button type="button" class="tap-btn" onclick="showPanchangInfo('karana')" aria-label="కరణం వివరాలు">👆</button></div>${KARANA_NOTE[res.karana] ? `<span class="since-note">${KARANA_NOTE[res.karana]}</span>` : ''}</td></tr>
        `;

        document.getElementById('gcAsubhaTable').innerHTML = `
            <tr><td>రాహుకాలం</td><td>${fmtSpan(kaala.rahu.start, kaala.rahu.end)}</td></tr>
            <tr><td>యమగండకాలం</td><td>${fmtSpan(kaala.yama.start, kaala.yama.end)}</td></tr>
            <tr><td>గుళికాకాలం</td><td>${fmtSpan(kaala.gulika.start, kaala.gulika.end)}</td></tr>
            ${kaala.dur.map(w => `<tr><td>దుర్ముహూర్తం</td><td>${fmtSpan(w.start, w.end)}</td></tr>`).join('')}
            ${amritVarjya.varjya.map(w => `<tr><td>వర్జ్యం (${w.nak} నక్షత్రం)</td><td>${fmtWindow(w.start, w.end, refDate)}</td></tr>`).join('')}
            <tr><td>దిశ శూల</td><td>${kaala.disha} దిశ (ఆ దిక్కున ప్రయాణం మానుకోవాలి)</td></tr>
        `;

        document.getElementById('gcSubhaTable').innerHTML = `
            <tr><td>అభిజిత్ ముహూర్తం</td><td>${fmtSpan(kaala.abhijit.start, kaala.abhijit.end)}</td></tr>
            <tr><td>బ్రహ్మ ముహూర్తం</td><td>${fmtSpan(kaala.brahma.start, kaala.brahma.end)}</td></tr>
            ${amritVarjya.amrit.map(w => `<tr><td>అమృత ఘడియలు (${w.nak} నక్షత్రం)</td><td>${fmtWindow(w.start, w.end, refDate)}</td></tr>`).join('')}
        `;

        renderChart('gocharChartArea');
        document.getElementById('gcChartSubLabel').innerText =
            `${RASI_FULL[gocharLagnaRasi]} లగ్నం | ${moonObj.rasiFull} రాశి | (వ) = వక్రి | (అ) = అస్తంగత్వం`;

        document.getElementById('gcGocharTableBody').innerHTML = res.planets.map(p => {
            let tags = [];
            if (p.retro && p.name !== 'రాహు' && p.name !== 'కేతు') tags.push('వ');
            if (p.combust) tags.push('అ');
            const tagStr = tags.length ? ` (${tags.join(', ')})` : '';
            return `
                <tr>
                    <td>${p.name}${tagStr}</td>
                    <td>${RASI_FULL[p.rasiIdx]}</td>
                    <td>${p.degSym}</td>
                    <td>${p.nak}-${p.pada}</td>
                </tr>
            `;
        }).join('');

        document.getElementById('gcResultsContainer').scrollIntoView({ behavior: 'smooth' });
    }


    /* ================= DRAWER + LOGIN (local device only) ================= */
    var authUser = null;
    try { authUser = JSON.parse(localStorage.getItem('lrAuthUser') || 'null'); } catch (e) { authUser = null; }

    function escHtml(str) {
        return String(str).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function openDrawer() {
        document.getElementById('siteDrawer').classList.add('open');
        document.getElementById('drawerOverlay').classList.add('open');
        document.getElementById('siteDrawer').setAttribute('aria-hidden', 'false');
        var t = document.getElementById('menuToggle');
        if (t) t.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        var d = document.getElementById('siteDrawer');
        var o = document.getElementById('drawerOverlay');
        if (d) { d.classList.remove('open'); d.setAttribute('aria-hidden', 'true'); }
        if (o) o.classList.remove('open');
        var t = document.getElementById('menuToggle');
        if (t) t.setAttribute('aria-expanded', 'false');
        var m = document.getElementById('loginModal');
        if (!m || !m.classList.contains('open')) document.body.style.overflow = '';
    }

    function drawerGo(pageId) {
        closeDrawer();
        showPage(pageId);
    }


    // ================= ప్రొఫైల్ (మొబైల్ + పాస్‌కోడ్) =================
    const PROF_KEY = 'lrProfile';
    let profSession = false;

    function profLoad() {
        try { return JSON.parse(localStorage.getItem(PROF_KEY) || 'null'); } catch (e) { return null; }
    }
    function profSave(obj) {
        try { localStorage.setItem(PROF_KEY, JSON.stringify(obj)); } catch (e) { }
    }
    function profHash(str) {
        let h = 5381;
        for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) & 0xffffffff;
        return 'h' + Math.abs(h).toString(36);
    }
    function profShow(view) {
        const lv = document.getElementById('profLoginView');
        const iv = document.getElementById('profInsideView');
        if (!lv || !iv) return;
        lv.style.display = view === 'login' ? 'block' : 'none';
        iv.style.display = view === 'inside' ? 'block' : 'none';
    }
    function openProfile() {
        closeDrawer();
        const p = profLoad();
        const m = document.getElementById('profileModal');
        if (m) m.classList.add('open');
        if (p) { profSession = true; profShow('inside'); profRender(); }
        else {
            profShow('login');
            const mob = document.getElementById('profMobile');
            const nm = document.getElementById('profNameLogin');
            if (mob && p) mob.value = p.mobile || '';
            if (nm && p) nm.value = p.name || '';
            const btn = document.getElementById('profAuthBtn');
            const wrap = document.getElementById('profConfirmWrap');
            const note = document.getElementById('profAuthNote');
            if (p) {
                if (btn) btn.textContent = 'లాగిన్ అవ్వండి';
                if (wrap) wrap.style.display = 'none';
                if (note) note.textContent = 'ఈ నంబర్‌కు ఖాతా ఉంది — పాస్‌కోడ్ ఇవ్వండి.';
            } else {
                if (btn) btn.textContent = 'ఖాతా సృష్టించండి';
                if (wrap) wrap.style.display = 'block';
                if (note) note.textContent = 'మొదటిసారి — నంబర్ మరియు కొత్త పాస్‌కోడ్ ఇవ్వండి.';
            }
        }
    }
    function closeProfile() {
        const m = document.getElementById('profileModal');
        if (m) m.classList.remove('open');
    }
    function profileAuth() {
        const nameEl = document.getElementById('profNameLogin');
        const mobEl = document.getElementById('profMobile');
        const passEl = document.getElementById('profPass');
        const name = (nameEl ? nameEl.value : '').trim();
        const mobile = (mobEl ? mobEl.value : '').replace(/\D/g, '');
        const pass = (passEl ? passEl.value : '') || '';

        if (mobile.length !== 10) { alert('10 అంకెల మొబైల్ నంబర్ ఇవ్వండి.'); return; }
        if (pass.length < 4) { alert('కనీసం 4 అక్షరాల పాస్‌కోడ్ ఇవ్వండి.'); return; }

        let p = profLoad();
        if (!p) {
            if (!name) { alert('మీ పేరు ఇవ్వండి.'); return; }
            p = { mobile: mobile, pass: profHash(pass), name: name, dob: '', tob: '', place: '', photo: '', wallet: 0, tx: [], minutes: 0 };
            profSave(p);
            profSession = true;
            profShow('inside');
            profRender();
            alert('ఖాతా సృష్టించబడింది.');
            return;
        }
        if (p.mobile !== mobile || p.pass !== profHash(pass)) { alert('నంబర్ లేదా పాస్‌కోడ్ తప్పు.'); return; }
        if (name) { p.name = name; profSave(p); }
        profSession = true;
        profShow('inside');
        profRender();
    }

    function profileLogout() {
        profSession = false;
        closeProfile();
        alert('లాగ్ అవుట్ అయ్యారు.');
    }
    function profTab(which) {
        document.getElementById('profJatakamPane').style.display = which === 'jatakam' ? 'block' : 'none';
        document.getElementById('profWalletPane').style.display = which === 'wallet' ? 'block' : 'none';
        document.getElementById('ptabJatakam').classList.toggle('active', which === 'jatakam');
        document.getElementById('ptabWallet').classList.toggle('active', which === 'wallet');
    }
    function profRender() {
        const p = profLoad();
        if (!p) return;
        // ఫోటో
        const img = document.getElementById('profPhoto');
        const ph = document.getElementById('profPhotoPh');
        if (img && ph) {
            if (p.photo) { img.src = p.photo; img.style.display = 'block'; ph.style.display = 'none'; }
            else { img.style.display = 'none'; ph.style.display = 'flex'; }
        }
        const nm = document.getElementById('profNameShow');
        if (nm) nm.textContent = p.name || 'పేరు నింపండి';
        const nameWrap = document.getElementById('profNameEditWrap');
        if (nameWrap) nameWrap.style.display = p.name ? 'none' : 'block';
        const nameInput = document.getElementById('profNameInput');
        if (nameInput && p.name) nameInput.value = p.name;
        // వివరాలు
        const tbl = document.getElementById('profDetailsTable');
        if (tbl) {
            const row = (k, v) => '<div class="prof-drow"><span class="k">' + k + '</span><span class="v">' + (v || '—') + '</span></div>';
            tbl.innerHTML = row('పేరు', p.name) + row('జన్మ తేదీ', p.dob) + row('జన్మ సమయం', p.tob)
                + row('జన్మ స్థలం', p.place) + row('మొబైల్', '••••••' + String(p.mobile || '').slice(-4));
        }
        // వాలెట్
        const amt = document.getElementById('profWalletAmt');
        if (amt) amt.textContent = '₹' + Number(p.wallet || 0).toLocaleString('en-IN');
        const mins = document.getElementById('profMinutes');
        if (mins) mins.textContent = 'జ్యోతిష్కులతో మాట్లాడిన సమయం: ' + Math.round(p.minutes || 0) + ' నిమిషాలు';
        const tx = document.getElementById('profTxList');
        if (tx) {
            if (!p.tx || !p.tx.length) tx.innerHTML = 'లావాదేవీలు ఇంకా లేవు.';
            else tx.innerHTML = p.tx.slice().reverse().slice(0, 15).map(function (t) {
                const d = new Date(t.at);
                const when = d.toLocaleString('en-IN', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
                return '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px dashed rgba(139,94,60,.2);">'
                    + '<span>' + t.note + '<br><span style="font-size:0.72rem;">' + when + '</span></span>'
                    + '<b style="color:' + (t.amt >= 0 ? '#1f6f43' : '#b3221f') + ';">' + (t.amt >= 0 ? '+' : '') + '₹' + Math.abs(t.amt) + '</b></div>';
            }).join('');
        }
    }
    function onProfPhoto(ev) {
        const f = ev.target.files && ev.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = function () {
            const p = profLoad();
            if (!p) return;
            p.photo = r.result;
            profSave(p);
            profRender();
        };
        r.readAsDataURL(f);
    }
    function profEdit() {
        // కొత్త ఫుల్ పేజీలో వివరాలు జాతకం పేజీలోనే నింపుతారు
        const nameWrap = document.getElementById('profNameEditWrap');
        if (nameWrap) nameWrap.style.display = 'block';
    }
    function profCancelEdit() {
        const nameWrap = document.getElementById('profNameEditWrap');
        const p = profLoad();
        if (nameWrap) nameWrap.style.display = (p && p.name) ? 'none' : 'block';
    }
    function profSaveDetails() {
        profSaveName();
    }

    // ================= ప్రొఫైల్ ↔ జాతకం పేజీ =================
    function profPrefillJatakam() {
        const p = profLoad();
        if (!p) return;
        try {
            if (p.name) { const el = document.getElementById('inName'); if (el) el.value = p.name; }
            if (p.dob) {
                const d = p.dob.split('-');
                const dy = document.getElementById('inDay'), dm = document.getElementById('inMonth'), dyy = document.getElementById('inYear');
                if (dy && dm && dyy) { dy.value = parseInt(d[2], 10); dm.value = parseInt(d[1], 10); dyy.value = parseInt(d[0], 10); }
            }
            if (p.tob) {
                const t = p.tob.split(':');
                const hh = document.getElementById('inHour'), mm = document.getElementById('inMin');
                if (hh) hh.value = parseInt(t[0], 10);
                if (mm) mm.value = parseInt(t[1], 10);
            }
            if (p.place) { const c = document.getElementById('inCityInput'); if (c) c.value = p.place; }
        } catch (e) { }
        const bar = document.getElementById('profSaveBar');
        if (bar) bar.style.display = 'block';
    }

    function profSaveFromJatakam() {
        const p = profLoad();
        if (!p) { alert('మొదట ప్రొఫైల్‌లో లాగిన్ అవ్వండి.'); return; }
        const name = (document.getElementById('inName').value || '').trim();
        const dy = document.getElementById('inDay').value;
        const dm = document.getElementById('inMonth').value;
        const dyy = document.getElementById('inYear').value;
        const hh = document.getElementById('inHour').value;
        const mm = document.getElementById('inMin').value;
        const place = (document.getElementById('inCityInput').value || '').trim();

        if (!name) { alert('పేరు ఇవ్వండి.'); return; }
        if (!dy || !dm || !dyy) { alert('జన్మ తేదీ ఎంచుకోండి.'); return; }
        if (!place) { alert('జన్మ స్థలం ఇవ్వండి.'); return; }

        const pad = n => String(n).padStart(2, '0');
        p.name = name;
        p.dob = dyy + '-' + pad(dm) + '-' + pad(dy);
        p.tob = pad(hh) + ':' + pad(mm);
        p.place = place;
        profSave(p);

        const msg = document.getElementById('profSaveMsg');
        if (msg) { msg.style.color = '#1f6f43'; msg.textContent = 'సేవ్ అయింది — మీ ప్రొఫైల్‌లో ఈ వివరాలు భద్రంగా ఉన్నాయి.'; }
        alert('మీ జన్మ వివరాలు ప్రొఫైల్‌లో సేవ్ అయ్యాయి.');
    }

    function profGoJatakam() {
        closeProfile();
        showPage('jatakamPage');
        setTimeout(function () { profPrefillJatakam(); }, 200);
    }

    function profSaveName() {
        const p = profLoad();
        if (!p) return;
        const n = (document.getElementById('profNameInput').value || '').trim();
        if (!n) { alert('పేరు ఇవ్వండి.'); return; }
        p.name = n;
        profSave(p);
        profRender();
    }
    function profQuickRecharge(amt) {
        const p = profLoad();
        if (!p) return;
        p.wallet = Number(p.wallet || 0) + amt;
        p.tx = p.tx || [];
        p.tx.push({ at: new Date().toISOString(), amt: amt, note: 'వాలెట్ రీచార్జ్ (డెమో)' });
        profSave(p);
        profRender();
        alert('₹' + amt + ' వాలెట్‌లో జోడించబడింది (డెమో).');
    }

    function profRecharge() {
        // పేమెంట్ గేట్‌వే మోడల్ తెరవడం
        openRecharge();
    }
    function profOpenAstrologers() {
        closeProfile();
        showPage('astrologersPage');
    }

    function openLogin() {
        var m = document.getElementById('loginModal');
        if (!m) return;
        m.classList.add('open');
        document.body.style.overflow = 'hidden';
        var n = document.getElementById('loginName');
        var e = document.getElementById('loginEmail');
        if (n && authUser && authUser.name) n.value = authUser.name;
        if (e && authUser && authUser.email) e.value = authUser.email;
        setTimeout(function () { if (n) n.focus(); }, 140);
    }

    function closeLogin() {
        var m = document.getElementById('loginModal');
        if (m) m.classList.remove('open');
        var d = document.getElementById('siteDrawer');
        if (!d || !d.classList.contains('open')) document.body.style.overflow = '';
    }

    function doLogin() {
        var nameEl = document.getElementById('loginName');
        var mobFill = document.getElementById('loginMobile');
        if (mobFill && authUser && authUser.mobile) mobFill.value = authUser.mobile;
        var mobEl = document.getElementById('loginMobile');
        var name = nameEl ? nameEl.value.trim() : '';
        var mobile = mobEl ? mobEl.value.replace(/\D/g, '') : '';
        if (!name) { alert('దయచేసి మీ పేరు నమోదు చేయండి.'); if (nameEl) nameEl.focus(); return; }
        if (mobile.length !== 10) { alert('దయచేసి 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.'); if (mobEl) mobEl.focus(); return; }
        authUser = { name: name, mobile: mobile };
        try { localStorage.setItem('lrAuthUser', JSON.stringify(authUser)); } catch (e) {}
        renderAuth();
        closeLogin();
    }

    function doLogout() {
        authUser = null;
        try { localStorage.removeItem('lrAuthUser'); } catch (e) {}
        renderAuth();
        closeDrawer();
    }

    function handleHeaderAuth() {
        if (authUser) { openDrawer(); } else { openLogin(); }
    }

    function renderAuth() {
        var label = document.getElementById('loginLabel');
        var userBox = document.getElementById('drawerUser');
        var loginItem = document.getElementById('drawerLoginItem');
        var logoutItem = document.getElementById('drawerLogoutItem');
        if (authUser) {
            var first = String(authUser.name).split(' ')[0];
            if (label) label.textContent = first;
            var mob = String(authUser.mobile || '').replace(/\D/g, '');
            var mobText = mob.length >= 4 ? 'మొబైల్: ••••••' + mob.slice(-4) : '';
            if (userBox) userBox.innerHTML = '<strong>నమస్కారం, ' + escHtml(authUser.name) + '</strong>' + mobText;
            if (loginItem) loginItem.style.display = 'none';
            if (logoutItem) logoutItem.style.display = 'flex';
        } else {
            if (label) label.textContent = 'లాగిన్';
            if (userBox) userBox.innerHTML = '<strong>మీరు లాగిన్ అవలేదు</strong>జాతక వివరాలు సేవ్ చేసుకోవడానికి లాగిన్ అవ్వండి.';
            if (loginItem) loginItem.style.display = 'flex';
            if (logoutItem) logoutItem.style.display = 'none';
        }
    }

    document.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape') { closeLogin(); closeDrawer(); }
    });

    document.addEventListener('DOMContentLoaded', function () {
        renderAuth();
        updateModeBadges();
        if (typeof loadVisits === 'function') loadVisits();
        if (typeof openFromHash === 'function') openFromHash();
        try {
            const savedLang = localStorage.getItem('lrLang') || 'te';
            document.documentElement.lang = savedLang;
            if (savedLang !== 'te') { setLang(savedLang); }
            else { const sel = document.getElementById('langSelect'); if (sel) sel.value = 'te'; }
        } catch (e) { }
        if (typeof setMhDateLimits === 'function') setMhDateLimits();
        if (typeof initOwnerGate === 'function') initOwnerGate();
        if (typeof initCallRing === 'function') initCallRing();
        if (typeof initPanelSelect === 'function') initPanelSelect();
        attachTeluguInput(document.getElementById('mhName'));
        const mhNakSel = document.getElementById('mhNakshatra');
        if (mhNakSel) {
            mhNakSel.addEventListener('change', function () {
                mhNakManual = !!mhNakSel.value;
            });
        }
        if (typeof renderAstro === 'function') renderAstro();
    });


    // ================= జ్యోతిష్కులు: OTP లాగిన్ + జన్మ వివరాలు + భాషా ఫిల్టర్ =================
    const ASTRO_LANGS = ['తెలుగు', 'హిందీ', 'ఇంగ్లిష్', 'తమిళ్', 'కన్నడ', 'ఒడియా', 'మరాఠీ', 'గుజరాతీ', 'బెంగాలీ'];

    // నమూనా జాబితా — నిజమైన జ్యోతిష్కుల వివరాలతో భర్తీ చేసుకోవాలి
    const ASTROLOGERS = [
        { name: 'పండిత కృష్ణమూర్తి శాస్త్రి', langs: ['తెలుగు', 'హిందీ'], exp: 24, spec: 'జాతకం, వివాహ ముహూర్తం', fee: 500, rating: 4.8 },
        { name: 'శ్రీమతి లక్ష్మీ దేవి', langs: ['తెలుగు'], exp: 15, spec: 'స్త్రీ జాతకం, కుండలి విశ్లేషణ', fee: 350, rating: 4.6 },
        { name: 'పండిత రాజేంద్ర శర్మ', langs: ['హిందీ'], exp: 18, spec: 'వాస్తు, జాతకం', fee: 600, rating: 4.7 },
        { name: 'డా. మీనాక్షి అయ్యర్', langs: ['తమిళ్', 'ఇంగ్లిష్'], exp: 12, spec: 'నాడీ జ్యోతిష్యం', fee: 700, rating: 4.9 },
        { name: 'శ్రీ మహేశ్ జోషి', langs: ['కన్నడ', 'హిందీ'], exp: 20, spec: 'వివాహ పొంతన', fee: 450, rating: 4.5 },
        { name: 'పండిట్ బైద్యనాథ్ పట్నాయక్', langs: ['ఒడియా'], exp: 22, spec: 'జాతకం, శాంతి పూజలు', fee: 400, rating: 4.6 },
        { name: 'ఆచార్య వేంకటేశ్వర్లు', langs: ['తెలుగు', 'ఇంగ్లిష్'], exp: 30, spec: 'గోచారం, దశలు', fee: 800, rating: 4.9 },
        { name: 'శ్రీమతి అనితా దేశ్ముఖ్', langs: ['మరాఠీ', 'హిందీ'], exp: 9, spec: 'కెరీర్, వివాహం', fee: 300, rating: 4.4 },
        { name: 'శ్రీ సుబ్రహ్మణ్య భట్', langs: ['కన్నడ'], exp: 16, spec: 'ముహూర్తం', fee: 400, rating: 4.7 },
        { name: 'పండిత అరుణ్ మిశ్రా', langs: ['హిందీ', 'బెంగాలీ'], exp: 14, spec: 'వాస్తు, గృహ ప్రవేశం', fee: 500, rating: 4.5 },
        { name: 'శ్రీమతి రాధికా శర్మ', langs: ['ఇంగ్లిష్', 'హిందీ'], exp: 11, spec: 'సంఖ్యా జ్యోతిష్యం', fee: 650, rating: 4.8 },
        { name: 'ఆచార్య చంద్రశేఖర్ పాణిగ్రాహి', langs: ['ఒడియా', 'తెలుగు'], exp: 26, spec: 'వివాహ ముహూర్తం, దోష పరిహారం', fee: 550, rating: 4.7 }
    ];

    let astroFilter = 'all';
    let asSessionVerified = false;
    let astroOtpCode = null;
    let astroState = { mobile: '', verified: false, birth: null, wallet: 0 };
    try {
        const savedAstro = JSON.parse(localStorage.getItem('lrAstroUser') || 'null');
        if (savedAstro) astroState = Object.assign(astroState, savedAstro);
    } catch (e) {}

    function saveAstroState() {
        try { localStorage.setItem('lrAstroUser', JSON.stringify(astroState)); } catch (e) {}
    }

    function onMobileInput() {
        const el = document.getElementById('astroMobile');
        if (el) el.value = el.value.replace(/\D/g, '').slice(0, 10);
    }

    function sendOtp() {
        const el = document.getElementById('astroMobile');
        const num = (el.value || '').replace(/\D/g, '');
        if (num.length !== 10) { alert('దయచేసి 10 అంకెల మొబైల్ నంబర్ ఇవ్వండి.'); el.focus(); return; }
        astroOtpCode = String(Math.floor(100000 + Math.random() * 900000));
        document.getElementById('otpBox').style.display = 'block';
        document.getElementById('otpDemoNote').innerHTML =
            'డెమో మోడ్: ఈ ఫైల్ తనంతట తాను SMS పంపలేదు, కాబట్టి OTP ఇక్కడే చూపుతున్నాము — <b>' + astroOtpCode + '</b>.<br>' +
            'నిజమైన OTP కోసం సర్వర్ మరియు SMS సేవ (ఉదా. MSG91, Twilio, Firebase) కనెక్ట్ చేయాలి.';
        const otpEl = document.getElementById('astroOtp');
        otpEl.value = '';
        otpEl.focus();
    }

    function verifyOtp() {
        const val = (document.getElementById('astroOtp').value || '').replace(/\D/g, '');
        if (!astroOtpCode) { alert('ముందుగా OTP పంపండి.'); return; }
        if (val !== astroOtpCode) { alert('OTP సరిపోలలేదు. మళ్లీ ప్రయత్నించండి.'); return; }
        astroState.mobile = document.getElementById('astroMobile').value;
        astroState.verified = true;
        astroOtpCode = null;
        saveAstroState();
        renderAstro();
    }

    function astroLogout() {
        astroState.verified = false;
        saveAstroState();
        renderAstro();
    }

    function saveAstroBirth() {
        const name = (document.getElementById('astroName').value || '').trim();
        const dob = document.getElementById('astroDob').value;
        const tob = document.getElementById('astroTob').value;
        const place = (document.getElementById('astroPlace').value || '').trim();
        if (!name || !dob || !tob || !place) { alert('దయచేసి పేరు, జన్మ తేదీ, జన్మ సమయం, జన్మ స్థలం — అన్నీ ఇవ్వండి.'); return; }
        astroState.birth = { name: name, dob: dob, tob: tob, place: place };
        saveAstroState();
        renderAstro();
    }

    function setAstroLang(lang) {
        astroFilter = lang;
        renderAstro();
    }

    function renderAstro() {
        const form = document.getElementById('astroLoginForm');
        const logged = document.getElementById('astroLoggedIn');
        if (!form || !logged) return;

        if (astroState.verified) {
            form.style.display = 'none';
            logged.style.display = 'block';
            logged.innerHTML = '<div class="nak-suggest" style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;">' +
                '<span>✅ <b>+91 ' + escHtml(astroState.mobile) + '</b> ధృవీకరించబడింది</span>' +
                '<button type="button" class="ghost-btn" style="padding:8px 14px;font-size:.82rem;" onclick="astroLogout()">నంబర్ మార్చండి</button></div>';
        } else {
            form.style.display = 'block';
            logged.style.display = 'none';
        }

        const chips = document.getElementById('langChips');
        if (chips) {
            const items = ['all'].concat(ASTRO_LANGS);
            chips.innerHTML = items.map(function (l) {
                const label = (l === 'all') ? 'అందరూ' : l;
                return '<div class="lang-chip' + (astroFilter === l ? ' active' : '') + '" onclick="setAstroLang(\'' + l + '\')">' + label + '</div>';
            }).join('');
        }

        const grid = document.getElementById('astroGrid');
        if (grid) {
            const list = ASTROLOGERS.filter(function (a) {
                return astroFilter === 'all' || a.langs.indexOf(astroFilter) !== -1;
            });
            if (!list.length) {
                grid.innerHTML = '<div class="astro-empty">ఈ భాషలో జ్యోతిష్కులు జాబితాలో లేరు.</div>';
            } else {
                grid.innerHTML = list.map(function (a) {
                    const idx = ASTROLOGERS.indexOf(a);
                    const initials = escHtml(a.name.trim().charAt(0));
                    return '<div class="astro-card2">' +
                        '<div class="ac2-left">' +
                            '<div class="ac2-avatar">' + initials + '</div>' +
                            '<div class="ac2-rate">⭐ ' + a.rating + '</div>' +
                        '</div>' +
                        '<div class="ac2-mid">' +
                            '<div class="ac2-name">' + escHtml(a.name) + '</div>' +
                            '<div class="ac2-spec">వేద జ్యోతిష్యం · ' + escHtml(a.spec) + '</div>' +
                            '<div class="ac2-langs">' + a.langs.join(', ') + '</div>' +
                            '<div class="ac2-exp">' + a.exp + ' సం. అనుభవం · ' + (a.rating * 100 | 0) + '+ ఆర్డర్లు</div>' +
                        '</div>' +
                        '<div class="ac2-right">' +
                            '<div class="ac2-fee2">₹' + a.fee + '<span> / నిమిషం</span></div>' +
                            '<div class="ac2-tick">✔</div>' +
                        '</div>' +
                        '<div class="ac2-actions">' +
                            '<button type="button" class="ac2-btn" onclick="openChat(' + idx + ')">చాట్</button>' +
                            '<button type="button" class="ac2-btn call" onclick="startCall(' + idx + ')">కాల్</button>' +
                        '</div>' +
                    '</div>';
                }).join('');
            }
        }

        const b = astroState.birth;
        if (b) {
            document.getElementById('astroName').value = b.name || '';
            document.getElementById('astroDob').value = b.dob || '';
            document.getElementById('astroTob').value = b.tob || '';
            document.getElementById('astroPlace').value = b.place || '';
            document.getElementById('astroBirthSaved').innerHTML =
                '✅ సేవ్ అయింది — ' + escHtml(b.name) + ', ' + escHtml(b.dob) + ' ' + escHtml(b.tob) + ', ' + escHtml(b.place);
        }
    }

    let consultAstro = null;

    function openConsult(idx) {
        if (!astroState.verified) {
            alert('సంప్రదింపు కోసం మొదట మొబైల్ OTPతో లాగిన్ అవ్వండి.');
            document.getElementById('astroLoginCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }
        if (!astroState.birth) {
            alert('దయచేసి మీ జన్మ వివరాలు నింపి సేవ్ చేయండి.');
            document.getElementById('astroBirthCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }
        consultAstro = ASTROLOGERS[idx];
        const b = astroState.birth;
        document.getElementById('consultBody').innerHTML =
            '<h3>' + escHtml(consultAstro.name) + '</h3>' +
            '<div class="astro-langs" style="margin-bottom:14px;">' + consultAstro.langs.join(' · ') + ' · ₹' + consultAstro.fee + '</div>' +
            '<table class="info-grid">' +
                '<tr><td>పేరు</td><td>' + escHtml(b.name) + '</td></tr>' +
                '<tr><td>జన్మ తేదీ</td><td>' + escHtml(b.dob) + '</td></tr>' +
                '<tr><td>జన్మ సమయం</td><td>' + escHtml(b.tob) + '</td></tr>' +
                '<tr><td>జన్మ స్థలం</td><td>' + escHtml(b.place) + '</td></tr>' +
                '<tr><td>మొబైల్</td><td>+91 ' + escHtml(astroState.mobile) + '</td></tr>' +
            '</table>' +
            '<div class="wallet-line"><span>సంప్రదింపు ఫీజు</span><span>₹' + consultAstro.fee + '</span></div>' +
            '<div class="wallet-line"><span>వాలెట్ బ్యాలెన్స్</span><span>₹' + (astroState.wallet || 0) + '</span></div>' +
            '<button type="button" class="primary-btn" style="margin-top:14px;" onclick="sendConsultRequest()">📩 సంప్రదింపు అభ్యర్థన పంపండి</button>' +
            '<div class="refund-note">జ్యోతిష్కుని సలహా నచ్చని యెడల మీ అమౌంట్ రిఫండ్ చేయబడును.</div>' +
            '<div class="hint-text" style="margin-top:10px;">ఈ అభ్యర్థన ఈ పరికరంలో సేవ్ అవుతుంది. జ్యోతిష్కుడికి నేరుగా పంపాలంటే సర్వర్ కనెక్షన్ అవసరం.</div>' +
            '<div id="consultResult" class="hint-text" style="margin-top:8px;"></div>';
        document.getElementById('consultModal').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeConsult() {
        const m = document.getElementById('consultModal');
        if (m) m.classList.remove('open');
        document.body.style.overflow = '';
    }

    function sendConsultRequest() {
        if (!consultAstro) return;
        const out0 = document.getElementById('consultResult');
        const fee = consultAstro.fee;
        const bal = astroState.wallet || 0;
        if (bal < fee) {
            if (out0) out0.innerHTML = '⚠️ వాలెట్ బ్యాలెన్స్ సరిపోదు — ఫీజు ₹' + fee + ', మీ బ్యాలెన్స్ ₹' + bal + '. దయచేసి రీచార్జ్ చేయండి.';
            return;
        }
        astroState.wallet = bal - fee;
        saveAstroState();
        renderWallet();
        const req = {
            astrologer: consultAstro.name,
            langs: consultAstro.langs,
            fee: consultAstro.fee,
            mobile: astroState.mobile,
            birth: astroState.birth,
            at: new Date().toISOString()
        };
        try {
            const all = JSON.parse(localStorage.getItem('lrConsultRequests') || '[]');
            all.push(req);
            localStorage.setItem('lrConsultRequests', JSON.stringify(all));
        } catch (e) {}
        const out = document.getElementById('consultResult');
        if (out) out.innerHTML = '✅ అభ్యర్థన సేవ్ అయింది — ' + escHtml(consultAstro.name) + ' కోసం. ₹' + fee +
            ' వాలెట్ నుంచి తీసుకోబడింది, మిగిలిన బ్యాలెన్స్ ₹' + astroState.wallet + '. సలహా నచ్చని యెడల ఈ మొత్తం రిఫండ్ చేయబడును.';
    }

    // ================= జ్యోతిష్కులు: స్టెప్-బై-స్టెప్ విజార్డ్ =================
    let asStep = 1;
    let asOtpCode = null;
    let asDraft = null;

    function onAsMobileInput() {
        const el = document.getElementById('asMobile');
        if (el) el.value = el.value.replace(/\D/g, '').slice(0, 10);
    }


    // ================= భాషలు (తెలుగు / English / हिन्दी / ଓଡ଼ିଆ) =================
    const I18N = {
        en: {
            'హోమ్': 'Home', 'జాతకం': 'Horoscope', 'పంచాంగం & గోచారం': 'Panchangam & Gochara',
            'ముహూర్తం': 'Muhurtam', 'జ్యోతిష్కులు': 'Astrologers', 'కర్మ రహస్యం': 'Karma Secrets',
            'పుస్తకాలు': 'Books', 'సేవ్ చేసిన జాతకాలు': 'Saved charts', 'ప్రొఫైల్': 'Profile',
            'సెట్టింగ్స్': 'Settings', 'లాగిన్': 'Login', 'లాగ్ అవుట్': 'Logout',
            'లాగిన్ అవ్వండి': 'Sign in', 'మూసివేయండి': 'Close', 'సేవ్ చేయండి': 'Save',
            'రీచార్జ్ చేయండి': 'Recharge', '+ రీచార్జ్ చేయండి': '+ Recharge',
            'వాలెట్ బ్యాలెన్స్': 'Wallet balance', 'సైన్ అవుట్': 'Sign out',
            'మొబైల్ నంబర్': 'Mobile number', 'పూర్తి పేరు': 'Full name',
            'జన్మ తేదీ': 'Date of birth', 'జన్మ సమయం': 'Time of birth',
            'తర్వాత →': 'Next →', '← వెనుకకు': '← Back', 'భాషను ఎంచుకోండి': 'Choose language',
            'మా సేవలు': 'Our services', 'ఈరోజు పంచాంగం': "Today's Panchangam",
            'జాతకం చూడండి': 'View chart', 'మీ భవిష్యత్ మీ చేతిలో': 'Your future in your hands',
            'ముహూర్తం చూడండి': 'Check muhurtam', 'ముహూర్తం రోజును ఎంచుకోండి': 'Choose the muhurtam day',
            'జ్యోతిష్కులను ఎంచుకోండి': 'Choose an astrologer', 'అందరూ': 'All',
            'సేవ్ చేసిన ప్రొఫైల్స్': 'Saved profiles', 'మొబైల్': 'Mobile', 'స్థలం': 'Place',
            'సరిచూడండి': 'Review', 'జన్మ వివరాలు': 'Birth details', 'మొబైల్ & పేరు': 'Mobile & name'
        },
        hi: {
            'హోమ్': 'होम', 'జాతకం': 'कुंडली', 'పంచాంగం & గోచారం': 'पंचांग और गोचर',
            'ముహూర్తం': 'मुहूर्त', 'జ్యోతిష్కులు': 'ज्योतिषी', 'కర్మ రహస్యం': 'कर्म रहस्य',
            'పుస్తకాలు': 'पुस्तकें', 'సేవ్ చేసిన జాతకాలు': 'सहेजी कुंडलियाँ', 'ప్రొఫైల్': 'प्रोफ़ाइल',
            'సెట్టింగ్స్': 'सेटिंग्स', 'లాగిన్': 'लॉगिन', 'లాగ్ అవుట్': 'लॉग आउट',
            'లాగిన్ అవ్వండి': 'साइन इन करें', 'మూసివేయండి': 'बंद करें', 'సేవ్ చేయండి': 'सहेजें',
            'రీచార్జ్ చేయండి': 'रिचार्ज करें', '+ రీచార్జ్ చేయండి': '+ रिचार्ज करें',
            'వాలెట్ బ్యాలెన్స్': 'वॉलेट बैलेंस', 'సైన్ అవుట్': 'साइन आउट',
            'మొబైల్ నంబర్': 'मोबाइल नंबर', 'పూర్తి పేరు': 'पूरा नाम',
            'జన్మ తేదీ': 'जन्म तिथि', 'జన్మ సమయం': 'जन्म समय',
            'తర్వాత →': 'आगे →', '← వెనుకకు': '← पीछे', 'భాషను ఎంచుకోండి': 'भाषा चुनें',
            'మా సేవలు': 'हमारी सेवाएँ', 'ఈరోజు పంచాంగం': 'आज का पंचांग',
            'జాతకం చూడండి': 'कुंडली देखें', 'మీ భవిష్యత్ మీ చేతిలో': 'आपका भविष्य आपके हाथ में',
            'ముహూర్తం చూడండి': 'मुहूर्त देखें', 'ముహూర్తం రోజును ఎంచుకోండి': 'मुहूर्त का दिन चुनें',
            'జ్యోతిష్కులను ఎంచుకోండి': 'ज्योतिषी चुनें', 'అందరూ': 'सभी',
            'సేవ్ చేసిన ప్రొఫైల్స్': 'सहेजी प्रोफ़ाइलें', 'మొబైల్': 'मोबाइल', 'స్థలం': 'स्थान',
            'సరిచూడండి': 'जाँचें', 'జన్మ వివరాలు': 'जन्म विवरण', 'మొబైల్ & పేరు': 'मोबाइल और नाम'
        },
        or: {
            'హోమ్': 'ହୋମ୍', 'జాతకం': 'କୁଣ୍ଡଳୀ', 'పంచాంగం & గోచారం': 'ପଞ୍ଜିକା ଓ ଗୋଚର',
            'ముహూర్తం': 'ମୁହୂର୍ତ୍ତ', 'జ్యోతిష్కులు': 'ଜ୍ୟୋତିଷୀ', 'కర్మ రహస్యం': 'କର୍ମ ରହସ୍ୟ',
            'పుస్తకాలు': 'ପୁସ୍ତକ', 'సేవ్ చేసిన జాతకాలు': 'ସଞ୍ଚିତ କୁଣ୍ଡଳୀ', 'ప్రొఫైల్': 'ପ୍ରୋଫାଇଲ୍',
            'సెట్టింగ్స్': 'ସେଟିଂସ୍', 'లాగిన్': 'ଲଗଇନ୍', 'లాగ్ అవుట్': 'ଲଗ୍ ଆଉଟ୍',
            'లాగిన్ అవ్వండి': 'ସାଇନ୍ ଇନ୍ କରନ୍ତୁ', 'మూసివేయండి': 'ବନ୍ଦ କରନ୍ତୁ', 'సేవ్ చేయండి': 'ସଞ୍ଚୟ କରନ୍ତୁ',
            'రీచార్జ్ చేయండి': 'ରିଚାର୍ଜ କରନ୍ତୁ', '+ రీచార్జ్ చేయండి': '+ ରିଚାର୍ଜ କରନ୍ତୁ',
            'వాలెట్ బ్యాలెన్స్': 'ୱାଲେଟ୍ ବାଲାନ୍ସ', 'సైన్ అవుట్': 'ସାଇନ୍ ଆଉଟ୍',
            'మొబైల్ నంబర్': 'ମୋବାଇଲ୍ ନମ୍ବର', 'పూర్తి పేరు': 'ପୂର୍ଣ୍ଣ ନାମ',
            'జన్మ తేదీ': 'ଜନ୍ମ ତାରିଖ', 'జన్మ సమయం': 'ଜନ୍ମ ସମୟ',
            'తర్వాత →': 'ପରବର୍ତ୍ତୀ →', '← వెనుకకు': '← ପଛକୁ', 'భాషను ఎంచుకోండి': 'ଭାଷା ଚୟନ କରନ୍ତୁ',
            'మా సేవలు': 'ଆମର ସେବା', 'ఈరోజు పంచాంగం': 'ଆଜିର ପଞ୍ଜିକା',
            'జాతకం చూడండి': 'କୁଣ୍ଡଳୀ ଦେଖନ୍ତୁ', 'మీ భవిష్యత్ మీ చేతిలో': 'ଆପଣଙ୍କ ଭବିଷ୍ୟତ ଆପଣଙ୍କ ହାତରେ',
            'ముహూర్తం చూడండి': 'ମୁହୂର୍ତ୍ତ ଦେଖନ୍ତୁ', 'ముహూర్తం రోజును ఎంచుకోండి': 'ମୁହୂର୍ତ୍ତ ଦିନ ବାଛନ୍ତୁ',
            'జ్యోతిష్కులను ఎంచుకోండి': 'ଜ୍ୟୋତିଷୀ ବାଛନ୍ତୁ', 'అందరూ': 'ସମସ୍ତେ',
            'సేవ్ చేసిన ప్రొఫైల్స్': 'ସଞ୍ଚିତ ପ୍ରୋଫାଇଲ୍', 'మొబైల్': 'ମୋବାଇଲ୍', 'స్థలం': 'ସ୍ଥାନ',
            'సరిచూడండి': 'ଯାଞ୍ଚ କରନ୍ତୁ', 'జన్మ వివరాలు': 'ଜନ୍ମ ବିବରଣୀ', 'మొబైల్ & పేరు': 'ମୋବାଇଲ୍ ଓ ନାମ'
        }
    };

    let currentLang = 'te';

    function setLang(code) {
        currentLang = code || 'te';
        try { localStorage.setItem('lrLang', currentLang); } catch (e) { }
        applyLang(currentLang);
    }

    function applyLang(code) {
        const dict = (code && code !== 'te') ? (I18N[code] || {}) : {};
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(function (node) {
            if (!node.__te) node.__te = node.nodeValue;
            const raw = node.__te;
            const key = raw.trim();
            if (!key) return;
            if (code === 'te' || !dict[key]) {
                node.nodeValue = raw;
                return;
            }
            const lead = raw.match(/^\s*/)[0];
            const trail = raw.match(/\s*$/)[0];
            node.nodeValue = lead + dict[key] + trail;
        });
        const sel = document.getElementById('langSelect');
        if (sel) sel.value = code;
        document.documentElement.lang = (code === 'or') ? 'or' : (code || 'te');
        document.body.classList.remove('lang-te', 'lang-en', 'lang-hi', 'lang-or');
        document.body.classList.add('lang-' + (code || 'te'));
    }

    function asSignOut() {
        if (!confirm('సైన్ అవుట్ అవ్వాలా?')) return;
        try { localStorage.removeItem('lrAstroState'); } catch (e) { }
        location.reload();
    }
    function openVisitorSettings() {
        closeDrawer();
        document.getElementById('visitorSettings').classList.add('open');
    }
    function closeVisitorSettings() {
        document.getElementById('visitorSettings').classList.remove('open');
    }
    function clearVisitorData() {
        if (!confirm('ఈ పరికరంలో సేవ్ చేసిన వివరాలు తీసేయాలా?')) return;
        try { localStorage.clear(); } catch (e) { }
        location.reload();
    }

    function asShowStep(n) {
        asStep = n;
        for (let i = 1; i <= 6; i++) {
            const p = document.getElementById('asPanel' + i);
            if (p) p.style.display = (i === n) ? 'block' : 'none';
        }
        document.querySelectorAll('.as-step').forEach(function (el) {
            const s = parseInt(el.dataset.step, 10);
            el.classList.toggle('active', s === n);
            el.classList.toggle('done', s < n);
        });
        const bar = document.getElementById('asSteps');
        if (bar) bar.style.display = (n === 6) ? 'none' : 'flex';
        const wc = document.getElementById('asWalletCard');
        if (wc) wc.style.display = (n === 6) ? 'block' : 'none';
        if (n === 6) {
            const who = document.getElementById('asWalletWho');
            if (who) who.textContent = (astroState && astroState.birth && astroState.birth.name) ? astroState.birth.name : 'సందర్శకుడు';
        }
        if (n === 6 && typeof renderWallet === 'function') renderWallet();
        if (n === 4 && typeof initFormSelectors === 'function') {
            initFormSelectors('as');
            const latEl = document.getElementById('asLat');
            const lonEl = document.getElementById('asLon');
            if (latEl && lonEl && typeof updateCoordsBadge === 'function') {
                updateCoordsBadge('as', parseFloat(latEl.value), parseFloat(lonEl.value));
            }
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function asLoginContinue() {
        const name = (document.getElementById('asName').value || '').trim();
        const mobile = (document.getElementById('asMobile').value || '').replace(/\D/g, '');
        const pass = (document.getElementById('asPass').value || '') || '';
        if (!name) { alert('మీ పేరు ఇవ్వండి.'); return; }
        if (mobile.length !== 10) { alert('10 అంకెల మొబైల్ నంబర్ ఇవ్వండి.'); return; }
        if (pass.length < 4) { alert('కనీసం 4 అక్షరాల పాస్‌కోడ్ ఇవ్వండి.'); return; }

        let p = profLoad();
        if (!p) {
            p = { mobile: mobile, pass: profHash(pass), name: name, dob: '', tob: '', place: '', photo: '', wallet: 0, tx: [], minutes: 0 };
        } else {
            if (p.mobile !== mobile || p.pass !== profHash(pass)) { alert('నంబర్ లేదా పాస్‌కోడ్ తప్పు.'); return; }
            p.name = name;
        }
        profSave(p);
        profSession = true;

        astroState.mobile = mobile;
        astroState.verified = true;
        asSessionVerified = true;
        try { saveAstroState(); } catch (e) { }

        // ప్రొఫైల్‌లో ఉన్న జన్మ వివరాలు ఉంటే నేరుగా జాబితాకు
        if (p.dob && p.tob && p.place) { asShowStep(6); return; }
        asShowStep(3);
    }

    function asSendOtp() {
        // OTP దశ తీసేశాం — నేరుగా జన్మ వివరాలకు
        try {
            const p = profLoad();
            const mob = document.getElementById('asMobile');
            if (p && p.mobile && mob && !mob.value) mob.value = p.mobile;
            const nmEl = document.getElementById('asName');
            if (p && p.name && nmEl && !nmEl.value) nmEl.value = p.name;
            astroState.mobile = (mob ? mob.value : '') || (p ? p.mobile : '');
            astroState.verified = true;
            asSessionVerified = true;
            saveAstroState();
        } catch (e) { }
        asShowStep(3);
        return;
    }
    function asSendOtpLegacy() {
        const el = document.getElementById('asMobile');
        const num = (el.value || '').replace(/\D/g, '');
        if (num.length !== 10) { alert('దయచేసి 10 అంకెల మొబైల్ నంబర్ ఇవ్వండి.'); el.focus(); return; }
        asOtpCode = String(Math.floor(100000 + Math.random() * 900000));
        document.getElementById('asMobileEcho').textContent = num;
        const demo = document.getElementById('asOtpDemo');
        if (demo) demo.innerHTML = 'డెమో మోడ్: ఈ ఫైల్ SMS పంపలేదు, కాబట్టి OTP ఇక్కడ చూపుతున్నాము — <b>' + asOtpCode + '</b>.<br>నిజమైన OTP కోసం సర్వర్ మరియు SMS సేవ (MSG91 / Twilio / Firebase) కనెక్ట్ చేయాలి.';
        const otp = document.getElementById('asOtp');
        if (otp) otp.value = '';
        const err = document.getElementById('asOtpErr');
        if (err) err.textContent = '';
        asShowStep(2);
        setTimeout(function () { if (otp) otp.focus(); }, 150);
    }

    // 6 అంకెలు పడగానే ఆటోమేటిక్‌గా తర్వాత పేజీ
    function onAsOtpInput() {
        const el = document.getElementById('asOtp');
        el.value = el.value.replace(/\D/g, '').slice(0, 6);
        const err = document.getElementById('asOtpErr');
        if (err) err.textContent = '';
        if (el.value.length !== 6) return;
        if (el.value === asOtpCode) {
            astroState.mobile = document.getElementById('asMobile').value;
            astroState.verified = true;
            asSessionVerified = true;
            saveAstroState();
            asShowStep(3);
        } else {
            if (err) err.textContent = 'OTP సరిపోలలేదు — మళ్లీ ప్రయత్నించండి.';
            el.value = '';
        }
    }

    function asChangeMobile() {
        asOtpCode = null;
        const otp = document.getElementById('asOtp');
        if (otp) otp.value = '';
        const err = document.getElementById('asOtpErr');
        if (err) err.textContent = '';
        const demo = document.getElementById('asOtpDemo');
        if (demo) demo.innerHTML = '';
        asShowStep(1);
        const mob = document.getElementById('asMobile');
        if (mob) { mob.focus(); }
    }

    function asNext3() {
        const name = (document.getElementById('asName').value || '').trim();
        const dob = document.getElementById('asDob').value;
        const tob = document.getElementById('asTob').value;
        if (!name) { alert('దయచేసి పేరు నమోదు చేయండి.'); return; }
        if (!dob) { alert('దయచేసి జన్మ తేదీ ఎంచుకోండి.'); return; }
        if (!tob) { alert('దయచేసి జన్మ సమయం ఇవ్వండి.'); return; }
        asShowStep(4);
    }

    function asNext4() {
        const city = (document.getElementById('asCityInput').value || '').trim();
        const lat = parseFloat(document.getElementById('asLat').value);
        const lon = parseFloat(document.getElementById('asLon').value);
        if (!city) { alert('దయచేసి గ్రామం / నగరం పేరు ఇవ్వండి.'); return; }
        if (isNaN(lat) || isNaN(lon)) { alert('దయచేసి అక్షాంశం, రేఖాంశం సరిచూసుకోండి.'); return; }
        // ప్రొఫైల్ ఖాతాలో స్థలం + జన్మ వివరాలు భద్రపరచడం
        try {
            const pf = profLoad();
            if (pf) {
                pf.place = city;
                pf.lat = String(lat);
                pf.lon = String(lon);
                pf.dob = document.getElementById('asDob').value || pf.dob || '';
                pf.tob = document.getElementById('asTob').value || pf.tob || '';
                pf.name = (document.getElementById('asName').value || '').trim() || pf.name;
                profSave(pf);
            }
        } catch (e) { }
        renderAsReview();
        asShowStep(5);
    }

    function renderAsReview() {
        const t = document.getElementById('asReviewTable');
        if (!t) return;
        const sel = document.getElementById('asCountry');
        const countryName = (sel && sel.selectedIndex >= 0) ? sel.options[sel.selectedIndex].text : '';
        asDraft = {
            name: (document.getElementById('asName').value || '').trim(),
            dob: document.getElementById('asDob').value,
            tob: document.getElementById('asTob').value,
            country: sel ? sel.value : '',
            countryName: countryName,
            city: (document.getElementById('asCityInput').value || '').trim(),
            lat: document.getElementById('asLat').value,
            lon: document.getElementById('asLon').value,
            tz: document.getElementById('asTz').value
        };
        t.innerHTML =
            '<tr><td>మొబైల్</td><td>+91 ' + escHtml(astroState.mobile || '') + '</td></tr>' +
            '<tr><td>పేరు</td><td>' + escHtml(asDraft.name) + '</td></tr>' +
            '<tr><td>జన్మ తేదీ</td><td>' + escHtml(asDraft.dob) + '</td></tr>' +
            '<tr><td>జన్మ సమయం</td><td>' + escHtml(asDraft.tob) + '</td></tr>' +
            '<tr><td>దేశం</td><td>' + escHtml(asDraft.countryName) + '</td></tr>' +
            '<tr><td>ప్రాంతం</td><td>' + escHtml(asDraft.city) + '</td></tr>' +
            '<tr><td>అక్షాంశం / రేఖాంశం</td><td>' + escHtml(asDraft.lat) + ', ' + escHtml(asDraft.lon) + '</td></tr>' +
            '<tr><td>టైమ్ జోన్</td><td>' + escHtml(asDraft.tz) + '</td></tr>';
    }

    function asSaveAll() {
        if (!asDraft) renderAsReview();
        astroState.birth = Object.assign({}, asDraft, { place: asDraft.city });
        astroState.saved = true;
        saveAstroState();
        asShowStep(6);
    }

    // విజార్డ్ కోసం renderAstro ను తిరిగి నిర్వచించడం
    function filterAstroList(q) {
        const term = String(q || '').trim().toLowerCase();
        document.querySelectorAll('#astroGrid .astro-card2').forEach(function (card) {
            card.style.display = (!term || card.innerText.toLowerCase().indexOf(term) > -1) ? 'flex' : 'none';
        });
    }
    function fillAstroTopbar() {
        try {
            const p = profLoad();
            const nm = document.getElementById('atbName');
            const pic = document.getElementById('atbPic');
            if (nm && p && p.name) nm.textContent = p.name;
            const w = document.getElementById('atbWallet');
            if (w) w.textContent = '₹' + Number((p && p.wallet) || 0).toLocaleString('en-IN');
            if (pic && p && p.photo) pic.innerHTML = '<img src="' + p.photo + '" alt="">';
        } catch (e) { }
    }

    function renderAstro(entry) {
        const chips = document.getElementById('langChips');
        if (chips) {
            const items = ['all'].concat(ASTRO_LANGS);
            chips.innerHTML = items.map(function (l) {
                const label = (l === 'all') ? 'అందరూ' : l;
                return '<div class="lang-chip' + (astroFilter === l ? ' active' : '') + '" onclick="setAstroLang(\'' + l + '\')">' + label + '</div>';
            }).join('');
        }

        const grid = document.getElementById('astroGrid');
        if (grid) {
            const list = ASTROLOGERS.filter(function (a) {
                return astroFilter === 'all' || a.langs.indexOf(astroFilter) !== -1;
            });
            if (!list.length) {
                grid.innerHTML = '<div class="astro-empty">ఈ భాషలో జ్యోతిష్కులు జాబితాలో లేరు.</div>';
            } else {
                grid.innerHTML = list.map(function (a) {
                    const idx = ASTROLOGERS.indexOf(a);
                    const initials = escHtml(a.name.trim().charAt(0));
                    return '<div class="astro-card2">' +
                        '<div class="ac2-left">' +
                            '<div class="ac2-avatar">' + initials + '</div>' +
                            '<div class="ac2-rate">⭐ ' + a.rating + '</div>' +
                        '</div>' +
                        '<div class="ac2-mid">' +
                            '<div class="ac2-name">' + escHtml(a.name) + '</div>' +
                            '<div class="ac2-spec">వేద జ్యోతిష్యం · ' + escHtml(a.spec) + '</div>' +
                            '<div class="ac2-langs">' + a.langs.join(', ') + '</div>' +
                            '<div class="ac2-exp">' + a.exp + ' సం. అనుభవం · ' + (a.rating * 100 | 0) + '+ ఆర్డర్లు</div>' +
                        '</div>' +
                        '<div class="ac2-right">' +
                            '<div class="ac2-fee2">₹' + a.fee + '<span> / నిమిషం</span></div>' +
                            '<div class="ac2-tick">✔</div>' +
                        '</div>' +
                        '<div class="ac2-actions">' +
                            '<button type="button" class="ac2-btn" onclick="openChat(' + idx + ')">చాట్</button>' +
                            '<button type="button" class="ac2-btn call" onclick="startCall(' + idx + ')">కాల్</button>' +
                        '</div>' +
                    '</div>';
                }).join('');
            }
        }

        fillAstroTopbar();
        const b = astroState.birth || {};
        const nm = document.getElementById('asName');
        if (nm) {
            nm.value = b.name || '';
            document.getElementById('asDob').value = b.dob || '';
            document.getElementById('asTob').value = b.tob || '';
        }
        const mob = document.getElementById('asMobile');
        if (mob && astroState.mobile && !mob.value) mob.value = astroState.mobile;

        renderWallet();

        if (entry) asShowStep(asSessionVerified ? (astroState.saved ? 6 : 3) : 1);
    }

    // ================= వాలెట్ + రీచార్జ్ =================
    let rechargePick = 500;

    function renderWallet() {
        const amt = document.getElementById('asWalletAmount');
        if (amt) amt.textContent = '₹' + (astroState.wallet || 0);
        const bal = document.getElementById('rechargeBalance');
        if (bal) bal.textContent = '₹' + (astroState.wallet || 0);
    }

    function openRecharge() {
        rechargePick = 500;
        const chips = document.getElementById('amountChips');
        if (chips) {
            chips.innerHTML = [100, 250, 500, 1000, 2000].map(function (v) {
                return '<div class="amount-chip' + (v === rechargePick ? ' active' : '') + '" data-amt="' + v + '" onclick="pickRecharge(' + v + ')">₹' + v + '</div>';
            }).join('');
        }
        const custom = document.getElementById('rechargeCustom');
        if (custom) custom.value = '';
        renderWallet();
        document.getElementById('rechargeModal').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function pickRecharge(v) {
        rechargePick = v;
        const custom = document.getElementById('rechargeCustom');
        if (custom) custom.value = '';
        document.querySelectorAll('#amountChips .amount-chip').forEach(function (el) {
            el.classList.toggle('active', parseInt(el.dataset.amt, 10) === v);
        });
    }

    function onRechargeCustom() {
        const custom = document.getElementById('rechargeCustom');
        const v = parseInt((custom.value || '').replace(/\D/g, ''), 10);
        document.querySelectorAll('#amountChips .amount-chip').forEach(function (el) {
            el.classList.toggle('active', v > 0 && parseInt(el.dataset.amt, 10) === v);
        });
    }

    function doRecharge() {
        const custom = document.getElementById('rechargeCustom');
        let amount = rechargePick;
        const typed = parseInt((custom.value || '').replace(/\D/g, ''), 10);
        if (typed > 0) amount = typed;
        if (!amount || amount < 10) { alert('దయచేసి కనీసం ₹10 ఇవ్వండి.'); return; }
        const rzpKey = (getSettings().razorpayKey || '').trim();
        if (rzpKey) { payWithRazorpay(amount); return; }
        astroState.wallet = (astroState.wallet || 0) + amount;
        try {
            const tx = JSON.parse(localStorage.getItem('lrWalletTxns') || '[]');
            tx.push({ type: 'credit', amount: amount, gateway: rechargeGateway, at: new Date().toISOString() });
            localStorage.setItem('lrWalletTxns', JSON.stringify(tx));
        } catch (e) {}
        // ప్రొఫైల్ ఖాతా వాలెట్ కూడా నవీకరించడం
        try {
            const pf = profLoad();
            if (pf) {
                pf.wallet = Number(pf.wallet || 0) + amount;
                pf.tx = pf.tx || [];
                pf.tx.push({ at: new Date().toISOString(), amt: amount, note: 'వాలెట్ రీచార్జ్ (' + (rechargeGateway || 'upi') + ')' });
                profSave(pf);
                if (typeof profRender === 'function') profRender();
                if (typeof fillAstroTopbar === 'function') fillAstroTopbar();
            }
        } catch (e) {}
        saveAstroState();
        renderWallet();
        closeRecharge();
        alert('₹' + amount + ' వాలెట్‌లో జోడించబడింది (డెమో). ప్రస్తుత బ్యాలెన్స్ ₹' + astroState.wallet + '.');
    }

    function closeRecharge() {
        const m = document.getElementById('rechargeModal');
        if (m) m.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ================= గేట్‌వే + చాట్ + కాల్ =================
    let rechargeGateway = 'upi';

    function pickGateway(gw, el) {
        rechargeGateway = gw;
        document.querySelectorAll('#gatewayChips .amount-chip').forEach(function (x) { x.classList.remove('active'); });
        if (el) el.classList.add('active');
    }

    function astroGateOk() {
        if (!astroState.verified) {
            alert('దయచేసి మొదట మొబైల్ OTPతో లాగిన్ అవ్వండి.');
            asShowStep(1);
            return false;
        }
        if (!astroState.birth) {
            alert('దయచేసి మీ జన్మ వివరాలు ఇవ్వండి.');
            asShowStep(3);
            return false;
        }
        return true;
    }

    function walletEnough(fee) {
        return (astroState.wallet || 0) >= fee;
    }

    function chargeWallet(fee, note) {
        astroState.wallet = (astroState.wallet || 0) - fee;
        try {
            const tx = JSON.parse(localStorage.getItem('lrWalletTxns') || '[]');
            tx.push({ type: 'debit', amount: fee, note: note, at: new Date().toISOString() });
            localStorage.setItem('lrWalletTxns', JSON.stringify(tx));
        } catch (e) {}
        saveAstroState();
        renderWallet();
    }

    // ---------- చాట్ ----------
    let chatIdx = -1;
    let chatPaid = {};


    // ---------- చాట్ ఛార్జింగ్ ----------
    let chatChargeTimer = null;

    function chatWallet() {
        const p = (typeof profLoad === 'function') ? profLoad() : null;
        return { prof: p, bal: Number((p && p.wallet) || astroState.wallet || 0) };
    }
    function chatDeduct(amount, note) {
        const w = chatWallet();
        if (w.bal < amount) return false;
        if (w.prof) {
            w.prof.wallet = w.bal - amount;
            w.prof.tx = w.prof.tx || [];
            w.prof.tx.push({ at: new Date().toISOString(), amt: -amount, note: note });
            profSave(w.prof);
            if (typeof profRender === 'function') profRender();
        }
        astroState.wallet = Math.max(0, Number(astroState.wallet || 0) - amount);
        try { saveAstroState(); } catch (e) { }
        if (typeof fillAstroTopbar === 'function') fillAstroTopbar();
        if (typeof renderWallet === 'function') renderWallet();
        return true;
    }
    function startChatCharging() {
        stopChatCharging();
        chatChargeTimer = setInterval(function () {
            const a = ASTROLOGERS[chatIdx];
            if (!a) return;
            const ok = chatDeduct(a.fee, 'చాట్ — ' + a.name + ' (1 నిమిషం)');
            if (!ok) {
                stopChatCharging();
                alert('వాలెట్ బ్యాలెన్స్ సరిపోలేదు — చాట్ ఆగిపోయింది. దయచేసి రీచార్జ్ చేయండి.');
                closeChat();
                openRecharge();
            }
        }, 60000);
    }
    function stopChatCharging() {
        if (chatChargeTimer) clearInterval(chatChargeTimer);
        chatChargeTimer = null;
    }
    function autoGrowChat(el) {
        el.style.height = 'auto';
        el.style.height = Math.min(el.scrollHeight, 120) + 'px';
    }
    function endChatSession() {
        stopChatCharging();
        closeChat();
    }

    function openChat(idx) {
        chatIdx = idx;
        const a = ASTROLOGERS[idx];

        // వాలెట్‌లో మొత్తం లేకపోతే ముందు రీచార్జ్
        const p = (typeof profLoad === 'function') ? profLoad() : null;
        const bal = Number((p && p.wallet) || astroState.wallet || 0);
        if (bal <= 0) {
            alert('చాట్ చేయడానికి వాలెట్‌లో మొత్తం ఉండాలి. రీచార్జ్ విండో తెరుస్తోంది.');
            openRecharge();
            return;
        }

        // మొదటి నిమిషం ఫీజు కట్ చేయడం
        if (!chatDeduct(a.fee, 'చాట్ ప్రారంభం — ' + a.name)) {
            alert('వాలెట్ బ్యాలెన్స్ సరిపోదు — దయచేసి రీచార్జ్ చేయండి.');
            openRecharge();
            return;
        }
        startChatCharging();
        chatPaid[idx] = true;
        const nameEl = document.getElementById('chatName');
        const avEl = document.getElementById('chatAvatar');
        if (nameEl) nameEl.textContent = a.name;
        if (avEl) avEl.textContent = a.name.trim().charAt(0);
        renderChatBody();
        document.getElementById('chatModal').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function renderChatBody() {
        const a = ASTROLOGERS[chatIdx];
        const body = document.getElementById('chatBody');
        const row = document.getElementById('chatInputRow');
        const paid = !!chatPaid[chatIdx];
        let msgs = [];
        try { msgs = JSON.parse(localStorage.getItem('lrChat_' + chatIdx) || '[]'); } catch (e) {}
        let html = '';
        if (!paid) {
            html += '<div class="chat-bubble sys">చాట్ ప్రారంభించడానికి ఫీజు ₹' + a.fee +
                ' — మీ వాలెట్ బ్యాలెన్స్ ₹' + (astroState.wallet || 0) + '. సలహా నచ్చని యెడల ఈ మొత్తం రిఫండ్ చేయబడును.</div>';
            html += '<button type="button" class="primary-btn" style="margin-top:6px;" onclick="startChat()">💬 చాట్ ప్రారంభించండి</button>';
        } else {
            html += '<div class="chat-bubble sys">డెమో చాట్ — మీ సందేశాలు ఈ పరికరంలో సేవ్ అవుతాయి. జ్యోతిష్కుడు ఆన్‌లైన్ కనెక్షన్‌లో ఉన్నప్పుడు మాత్రమే సమాధానం వస్తుంది.</div>';
            html += msgs.map(function (m) {
                const d = new Date(m.at || Date.now());
                const tm = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
                return '<div class="chat-bubble ' + (m.from === 'me' ? 'me' : 'sys') + '">'
                    + escHtml(m.text) + '<span class="wa-time">' + tm + '</span></div>';
            }).join('');
            if (!msgs.length) {
                html += '<div class="chat-bubble sys">నమస్కారం! మీ ప్రశ్న రాయండి.<span class="wa-time">' +
                    new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) + '</span></div>';
            }
        }
        body.innerHTML = html;
        row.style.display = paid ? 'flex' : 'none';
        body.scrollTop = body.scrollHeight;
    }

    function startChat() {
        const a = ASTROLOGERS[chatIdx];
        if (!walletEnough(a.fee)) {
            alert('వాలెట్ బ్యాలెన్స్ సరిపోదు — ఫీజు ₹' + a.fee + ', మీ బ్యాలెన్స్ ₹' + (astroState.wallet || 0) + '. దయచేసి రీచార్జ్ చేయండి.');
            return;
        }
        chargeWallet(a.fee, 'చాట్ — ' + a.name);
        chatPaid[chatIdx] = true;
        renderChatBody();
    }

    function sendChat() {
        const input = document.getElementById('chatInput');
        const text = (input.value || '').trim();
        if (!text) return;
        let msgs = [];
        try { msgs = JSON.parse(localStorage.getItem('lrChat_' + chatIdx) || '[]'); } catch (e) {}
        msgs.push({ from: 'me', text: text, at: new Date().toISOString() });
        try { localStorage.setItem('lrChat_' + chatIdx, JSON.stringify(msgs)); } catch (e) {}
        input.value = '';
        input.style.height = '40px';
        renderChatBody();
        const body = document.getElementById('chatBody');
        if (body) body.scrollTop = body.scrollHeight;
        if (input) input.focus();
    }

    function closeChat() {
        if (typeof stopChatCharging === 'function') stopChatCharging();
        const m = document.getElementById('chatModal');
        if (m) m.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ---------- కాల్ ప్రకటన (జ్యోతిష్కుడి పేరుతో) ----------
    const CALL_ANNOUNCE = {
        1: function (n) { return 'నమస్కారం... మీరు ' + n + ' గారికి కాల్ చేస్తున్నారు. దయచేసి వేచి ఉండండి, మీ కాల్ వారికి అనుసంధానం చేయబడుతోంది. శుభం భూయాత్!'; },
        2: function (n) { return 'మీరు కాల్ చేస్తున్న వ్యక్తి... ' + n + ' గారు. వారు ప్రస్తుతం మీ కాల్‌కు సమాధానం ఇవ్వడానికి సిద్ధమవుతున్నారు. దయచేసి లైన్‌లోనే వేచి ఉండండి.'; },
        3: function (n) { return 'నమస్కారం, ఇది ' + n + ' గారి నంబర్. మీ కాల్ కనెక్ట్ అవుతోంది, దయచేసి వేచి ఉండండి.'; },
        4: function (n) { return 'నమస్తే అండి! మీరు ' + n + ' గారికి ఫోన్ చేశారు. కొద్దిసేపట్లో వారు మీతో మాట్లాడుతారు, దయచేసి లైన్‌లో ఉండండి.'; }
    };
    let callAnnounceStyle = 2;

    function callAnnounceText(name) {
        const fn = CALL_ANNOUNCE[callAnnounceStyle] || CALL_ANNOUNCE[1];
        return fn(name || 'జ్యోతిష్కుడు');
    }

    function speakCall(name) {
        try {
            if (!('speechSynthesis' in window)) return;
            const text = callAnnounceText(name);
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'te-IN';
            u.rate = 0.92;
            u.pitch = 1.0;
            const voices = window.speechSynthesis.getVoices() || [];
            const tel = voices.filter(function (v) { return /te[-_]?IN/i.test(v.lang) || /telugu/i.test(v.name); })[0];
            if (tel) u.voice = tel;
            window.speechSynthesis.speak(u);
        } catch (e) { }
    }

    function stopSpeakCall() {
        try { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); } catch (e) { }
    }

    // ---------- డైలర్ టోన్ (మధురమైన నేపథ్య సంగీతం + రెండు ప్రకటనలు) ----------
    let dialerTimers = [], musicTimer = null, musicFading = false;

    function callLine1(name) {
        return 'నమస్కారం... మీరు ప్రముఖ జ్యోతిష్య పండితులు, శ్రీ ' + name + ' గారికి కాల్ చేస్తున్నారు.';
    }
    function callLine2(name) {
        return 'జ్యోతిష్యులు శ్రీ ' + name + ' గారు ప్రస్తుతం ఇతర సేవలలో నిమగ్నమై ఉన్నారు. దయచేసి కొద్ది క్షణాలు లైన్‌లోనే వేచి ఉండండి, మీ కాల్ త్వరలోనే కలుపబడుతుంది.';
    }

    function playMusicPhrase() {
        if (!ringCtx) return;
        const gainPeak = musicFading ? 0.018 : 0.045;
        // మృదువైన వేణువు లాంటి స్వరాలు (పెంటటానిక్)
        const notes = [523.25, 587.33, 659.25, 783.99, 880.00, 783.99, 659.25, 587.33];
        const t0 = ringCtx.currentTime;
        notes.forEach(function (f, i) {
            const t = t0 + i * 0.55;
            const o = ringCtx.createOscillator(), g = ringCtx.createGain();
            o.type = 'sine';
            o.frequency.value = f;
            g.gain.setValueAtTime(0.0001, t);
            g.gain.exponentialRampToValueAtTime(gainPeak, t + 0.35);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 2.1);
            o.connect(g);
            g.connect(ringCtx.destination);
            o.start(t);
            o.stop(t + 2.2);
        });
    }

    function startDialer() {
        stopDialer();
        try {
            ringCtx = ringCtx || new (window.AudioContext || window.webkitAudioContext)();
            if (ringCtx.state === 'suspended') ringCtx.resume();
        } catch (e) { }
        musicFading = false;
        playMusicPhrase();
        musicTimer = setInterval(playMusicPhrase, 4400);

        const a = (typeof callIdx !== 'undefined' && callIdx >= 0 && ASTROLOGERS[callIdx]) ? ASTROLOGERS[callIdx] : null;
        const nm = a ? a.name : 'జ్యోతిష్కుడు';
        const el = document.getElementById('callAnnounce');
        if (el) {
            el.innerHTML = '<div>' + escHtml(callLine1(nm)) + '</div><div style="margin-top:8px;">' + escHtml(callLine2(nm)) + '</div>';
        }

        dialerTimers.push(setTimeout(function () { speakLine(callLine1(nm)); }, 5000));   // మొదటి మాట
        dialerTimers.push(setTimeout(function () { speakLine(callLine2(nm)); }, 22000));  // రెండవ మాట
        dialerTimers.push(setTimeout(function () { musicFading = true; }, 30000));        // సంగీతం నెమ్మదిగా తగ్గడం
        dialerTimers.push(setTimeout(function () { stopDialer(); }, 36000));
    }

    function stopDialer() {
        dialerTimers.forEach(function (t) { clearTimeout(t); });
        dialerTimers = [];
        if (musicTimer) clearInterval(musicTimer);
        musicTimer = null;
        try { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); } catch (e) { }
    }

    function speakLine(text) {
        try {
            if (!('speechSynthesis' in window)) return;
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'te-IN';
            u.rate = 0.9;
            u.pitch = 1.0;
            const voices = window.speechSynthesis.getVoices() || [];
            const tel = voices.filter(function (v) { return /te[-_]?IN/i.test(v.lang) || /telugu/i.test(v.name); })[0];
            if (tel) u.voice = tel;
            window.speechSynthesis.speak(u);
        } catch (e) { }
    }

    // ---------- జ్యోతిష్కుడి ప్యానెల్ ----------
    let panelState = null;

    function panelMsg(t, ok) {
        const el = document.getElementById('panelStatus');
        if (!el) return;
        el.textContent = t;
        el.style.color = ok ? '#1f6f43' : '#b3221f';
    }

    function initPanelSelect() {
        const sel = document.getElementById('panelAstro');
        if (!sel || sel.options.length) return;
        sel.innerHTML = ASTROLOGERS.map(function (a, i) {
            return '<option value="' + i + '">' + escHtml(a.name) + ' — ' + escHtml(a.langs.join(' · ')) + '</option>';
        }).join('');
    }

    async function joinAstroPanel() {
        const s = getSettings();
        const appId = cleanAppId(s.agoraId);
        const problem = appIdProblem(appId);
        if (problem) { panelMsg(problem, false); return; }
        const sel = document.getElementById('panelAstro');
        const id = sel ? sel.value : '';
        try {
            panelMsg('కనెక్ట్ అవుతోంది...', true);
            const AgoraRTC = await loadAgoraSdk();
            const channel = 'lr_' + id;   // id = ASTROLOGERS ఇండెక్స్
            const uid = 1001;
            const token = await fetchAgoraToken(channel, uid);
            const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
            await client.join(appId, channel, token, uid);
            const mic = await AgoraRTC.createMicrophoneAudioTrack();
            await client.publish([mic]);
            client.on('user-published', async function (user, mediaType) {
                await client.subscribe(user, mediaType);
                if (mediaType === 'audio') { user.audioTrack.play(); panelMsg('కాల్ వచ్చింది — మాట్లాడండి', true); }
            });
            client.on('user-left', function () { panelMsg('కాల్ ముగిసింది — మళ్లీ వేచి ఉన్నారు', true); });
            panelState = { client: client, mic: mic, channel: channel };
            panelMsg('సిద్ధంగా ఉన్నారు — కాల్ కోసం వేచి ఉన్నారు (' + channel + ')', true);
        } catch (e) {
            panelMsg('కనెక్షన్ కుదరలేదు: ' + (e.message || e.name || ''), false);
        }
    }

    async function leaveAstroPanel() {
        if (!panelState) { panelMsg('ప్యానెల్ తెరిచి లేదు'); return; }
        const st = panelState;
        panelState = null;
        try { if (st.mic) { st.mic.stop(); st.mic.close(); } } catch (e) { }
        try { await st.client.leave(); } catch (e) { }
        panelMsg('ప్యానెల్ మూసివేయబడింది');
    }

    // App ID ను శుభ్రం చేసి, సరైనదో లేదో చూసే సహాయకుడు
    function cleanAppId(raw) {
        return String(raw || '').replace(/[\s"'<>]/g, '');
    }
    function appIdProblem(id) {
        if (!id) return 'Agora App ID ఇవ్వలేదు — ⚙️ సెట్టింగ్స్‌లో పెట్టండి.';
        if (id.length !== 32) return 'App ID ' + id.length + ' అక్షరాలు ఉంది — సరైన App ID 32 అక్షరాలు ఉంటుంది.';
        if (!/^[0-9a-f]+$/i.test(id)) return 'App ID లో తప్పు అక్షరాలు ఉన్నాయి — App ID ను మళ్లీ కాపీ చేయండి (App Certificate కాదు).';
        return '';
    }

    // ---------- Agora వాయిస్ కాల్ ----------
    const AGORA_SDK_URL = 'https://download.agora.io/sdk/web/AgoraRTC_N-production.js';
    let agoraState = null;

    function loadAgoraSdk() {
        return new Promise(function (resolve, reject) {
            if (window.AgoraRTC) { resolve(window.AgoraRTC); return; }
            const sc = document.createElement('script');
            sc.src = AGORA_SDK_URL;
            sc.async = true;
            sc.onload = function () { window.AgoraRTC ? resolve(window.AgoraRTC) : reject(new Error('SDK load failed')); };
            sc.onerror = function () { reject(new Error('SDK load failed')); };
            document.head.appendChild(sc);
        });
    }

    async function fetchAgoraToken(channel, uid) {
        const s = getSettings();
        if (!s.agoraToken) return null;
        const url = s.agoraToken + (s.agoraToken.indexOf('?') > -1 ? '&' : '?')
            + 'channel=' + encodeURIComponent(channel) + '&uid=' + uid;
        const r = await fetch(url);
        if (!r.ok) throw new Error('token server ' + r.status);
        const j = await r.json();
        return j.token || null;
    }

    async function startAgoraCall(astro, idx) {
        const s = getSettings();
        const appId = cleanAppId(s.agoraId);
        const problem = appIdProblem(appId);
        if (problem) { setCallStatus(problem, false); return false; }
        try {
            const AgoraRTC = await loadAgoraSdk();
            const channel = 'lr_' + idx;
            const uid = Math.floor(Math.random() * 100000) + 1;
            const token = await fetchAgoraToken(channel, uid);
            const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
            await client.join(appId, channel, token, uid);
            const mic = await AgoraRTC.createMicrophoneAudioTrack();
            await client.publish([mic]);
            client.on('user-published', async function (user, mediaType) {
                await client.subscribe(user, mediaType);
                if (mediaType === 'audio') user.audioTrack.play();
                setCallStatus('జ్యోతిష్కుడు లైన్‌లో ఉన్నారు — మాట్లాడవచ్చు', true);
            });
            client.on('user-left', function () { setCallStatus('జ్యోతిష్కుడు లైన్ నుంచి వెళ్లారు', false); });
            agoraState = { client: client, mic: mic, channel: channel };
            setCallStatus('కనెక్ట్ అయింది — మీ మైక్రోఫోన్ ఆన్‌లో ఉంది', true);
            return true;
        } catch (e) {
            setCallStatus('Agora కనెక్షన్ కుదరలేదు: ' + (e.message || e.name || 'తెలియదు'), false);
            return false;
        }
    }

    async function leaveAgoraCall() {
        if (!agoraState) return;
        const st = agoraState;
        agoraState = null;
        try { if (st.mic) { st.mic.stop(); st.mic.close(); } } catch (e) { }
        try { await st.client.leave(); } catch (e) { }
    }

    function setCallStatus(text, ok) {
        const el = document.getElementById('callStatus');
        if (!el) return;
        el.textContent = text;
        el.style.color = ok ? '#1f6f43' : '#b3221f';
    }

    // ---------- కాల్ ----------
    let callIdx = -1;
    let callTimer = null;
    let callSeconds = 0;

    function startCall(idx) {
        if (!astroGateOk()) return;
        callIdx = idx;
        const a = ASTROLOGERS[idx];
        const body = document.getElementById('callBody');
        body.innerHTML =
            '<div class="call-ring">📞</div>' +
            '<h3>' + escHtml(a.name) + '</h3>' +
            '<div class="astro-langs" style="margin-bottom:10px;">' + a.langs.join(' · ') + '</div>' +
            '<div class="call-announce" id="callAnnounce">' + escHtml(callLine1(a.name)) + '</div>' +
            '<div class="wallet-line"><span>కాల్ ఫీజు</span><span>₹' + a.fee + '</span></div>' +
            '<div class="wallet-line"><span>వాలెట్ బ్యాలెన్స్</span><span>₹' + (astroState.wallet || 0) + '</span></div>' +
            '<button type="button" class="primary-btn" style="margin-top:14px;" onclick="connectCall()">📞 కాల్ చేయండి</button>' +
            '<div class="refund-note">జ్యోతిష్కుని సలహా నచ్చని యెడల మీ అమౌంట్ రిఫండ్ చేయబడును.</div>' +
            '<div class="otp-demo">డెమో మోడ్: నిజమైన వాయిస్ కాల్ కోసం టెలిఫోనీ సేవ (Exotel / Twilio) కనెక్ట్ చేయాలి. ఇప్పుడు కాల్ స్క్రీన్ మాత్రమే చూపుతుంది.</div>';
        document.getElementById('callModal').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function connectCall() {
        const a = ASTROLOGERS[callIdx];
        if (!walletEnough(a.fee)) {
            alert('వాలెట్ బ్యాలెన్స్ సరిపోదు — ఫీజు ₹' + a.fee + ', మీ బ్యాలెన్స్ ₹' + (astroState.wallet || 0) + '. దయచేసి రీచార్జ్ చేయండి.');
            return;
        }
        chargeWallet(a.fee, 'కాల్ — ' + a.name);
        if (typeof startAgoraCall === 'function') { startAgoraCall(a, callIdx); }
        callSeconds = 0;
        const body = document.getElementById('callBody');
        body.innerHTML =
            '<div class="call-ring">📞</div>' +
            '<h3>' + escHtml(a.name) + '</h3>' +
            '<div class="call-status" id="callStatus">కాల్ కనెక్ట్ అవుతోంది...</div>' +
            '<div class="call-timer" id="callTimer">00:00</div>' +
            '<button type="button" class="call-end" onclick="endCall()">కాల్ ముగించండి</button>' +
            '<div class="otp-demo" style="margin-top:12px;">ఇది డెమో స్క్రీన్ మాత్రమే — వాయిస్ ట్రాన్స్‌ఫర్ కోసం Exotel / Twilio కనెక్షన్ అవసరం.</div>';
        clearInterval(callTimer);
        callTimer = setInterval(function () {
            callSeconds++;
            const m = String(Math.floor(callSeconds / 60)).padStart(2, '0');
            const s = String(callSeconds % 60).padStart(2, '0');
            const el = document.getElementById('callTimer');
            if (el) el.textContent = m + ':' + s;
        }, 1000);
    }

    function endCall() {
        clearInterval(callTimer);
        callTimer = null;
        closeCall();
    }

    function closeCall() {
        clearInterval(callTimer);
        callTimer = null;
        const m = document.getElementById('callModal');
        if (m) m.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ================= AI చాట్ (మొదటి 1 నిమిషం ఉచితం) =================
    let aiTimer = null;
    let aiLeft = 60;
    let aiPaid = false;
    let aiMsgs = [];

    function openAiChat() {
        if (!astroGateOk()) return;
        aiMsgs = [];
        aiPaid = false;
        aiLeft = 60;
        const body = document.getElementById('aiChatBody');
        if (body) body.innerHTML = '';
        addAiMsg('sys', 'నమస్కారం! మీ మొదటి 1 నిమిషం ఉచితం. జాతకం, పంచాంగం, ముహూర్తం గురించి ఏదైనా అడగండి.');
        document.getElementById('aiChatModal').classList.add('open');
        document.body.style.overflow = 'hidden';
        const row = document.getElementById('aiChatInputRow');
        if (row) row.style.display = 'flex';
        startAiTimer(60, false);
        const input = document.getElementById('aiChatInput');
        if (input) { input.value = ''; setTimeout(function () { input.focus(); }, 150); }
    }

    function startAiTimer(seconds, paid) {
        clearInterval(aiTimer);
        aiLeft = seconds;
        aiPaid = paid;
        renderAiTimer();
        aiTimer = setInterval(function () {
            aiLeft--;
            renderAiTimer();
            if (aiLeft <= 0) {
                clearInterval(aiTimer);
                aiTimer = null;
                lockAiChat();
            }
        }, 1000);
    }

    function renderAiTimer() {
        const el = document.getElementById('aiTimerLabel');
        if (!el) return;
        const m = String(Math.floor(Math.max(aiLeft, 0) / 60)).padStart(2, '0');
        const s = String(Math.max(aiLeft, 0) % 60).padStart(2, '0');
        el.textContent = (aiPaid ? 'చెల్లించిన సమయం: ' : 'ఉచిత సమయం: ') + m + ':' + s;
    }

    function lockAiChat() {
        const row = document.getElementById('aiChatInputRow');
        if (row) row.style.display = 'none';
        addAiMsg('sys', 'ఉచిత 1 నిమిషం ముగిసింది.');
        const body = document.getElementById('aiChatBody');
        if (body) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'ai-continue';
            btn.textContent = 'కొనసాగించండి — ₹10 / నిమిషం (వాలెట్ నుంచి)';
            btn.onclick = continueAiChat;
            body.appendChild(btn);
            body.scrollTop = body.scrollHeight;
        }
    }

    function continueAiChat() {
        if ((astroState.wallet || 0) < 10) {
            alert('వాలెట్ బ్యాలెన్స్ సరిపోదు — ₹10 అవసరం. దయచేసి రీచార్జ్ చేయండి.');
            return;
        }
        chargeWallet(10, 'AI చాట్ — 1 నిమిషం');
        addAiMsg('sys', '₹10 తీసుకోబడింది. మీకు మరో 1 నిమిషం సమయం ఇవ్వబడింది.');
        const row = document.getElementById('aiChatInputRow');
        if (row) row.style.display = 'flex';
        startAiTimer(60, true);
    }

    function addAiMsg(kind, text) {
        aiMsgs.push({ kind: kind, text: text });
        const body = document.getElementById('aiChatBody');
        if (!body) return;
        const div = document.createElement('div');
        div.className = 'chat-bubble ' + (kind === 'me' ? 'me' : 'sys');
        div.textContent = text;
        body.appendChild(div);
        body.scrollTop = body.scrollHeight;
        return div;
    }

    function sendAiChat() {
        const input = document.getElementById('aiChatInput');
        const text = (input.value || '').trim();
        if (!text) return;
        input.value = '';
        addAiMsg('me', text);
        setTimeout(function () { aiRespond(text); }, 300);
    }

    // ఇక్కడే నిజమైన AI API కాల్ చేయాలి (ఉదా. Sarvam AI / OpenAI). ఇప్పుడు డెమో సమాధానం.
    function aiDemoReply(text) {
        const t = String(text || '');
        if (t.indexOf('ముహూర్త') !== -1) {
            return 'ముహూర్తం కోసం "ముహూర్తం" పేజీలో మీ జన్మ నక్షత్రం ఇచ్చి చూడండి — దగ్గరలో ఉన్న శుభ తేదీల పట్టిక అక్కడ కనిపిస్తుంది. (డెమో సమాధానం)';
        }
        if (t.indexOf('జాతక') !== -1 || t.indexOf('కుండలి') !== -1) {
            return 'మీ జాతకం కోసం "జాతకం" పేజీలో జన్మ వివరాలు ఇవ్వండి — లగ్న కుండలి, దశలు, గ్రహ స్థితి అక్కడ కనిపిస్తాయి. (డెమో సమాధానం)';
        }
        if (t.indexOf('పంచాంగ') !== -1 || t.indexOf('గోచార') !== -1) {
            return 'నేటి తిథి, నక్షత్రం, గోచారం కోసం "పంచాంగం & గోచారం" పేజీ చూడండి. (డెమో సమాధానం)';
        }
        return 'డెమో మోడ్: ఇది నిజమైన AI సమాధానం కాదు — AI సేవ (ఉదా. Sarvam AI / OpenAI) API కీ కనెక్ట్ చేసిన తర్వాత ఇక్కడ పూర్తి సమాధానం వస్తుంది. మీ ప్రశ్న నమోదు అయింది.';
    }

    function closeAiChat() {
        clearInterval(aiTimer);
        aiTimer = null;
        const m = document.getElementById('aiChatModal');
        if (m) m.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ================= యజమాని సెట్టింగ్స్ (ఉచిత మోడ్) =================
    function getSettings() {
        try { return JSON.parse(localStorage.getItem('lrAppSettings') || '{}') || {}; } catch (e) { return {}; }
    }

    function saveSettings() {
        const s = {
            sarvamKey: (document.getElementById('setSarvamKey').value || '').trim(),
            razorpayKey: (document.getElementById('setRazorpayKey').value || '').trim(),
            book1Link: (document.getElementById('setBook1').value || '').trim(),
            book2Link: (document.getElementById('setBook2').value || '').trim(),
            agoraId: (document.getElementById('setAgoraId').value || '').trim(),
            agoraToken: (document.getElementById('setAgoraToken').value || '').trim(),
            visitsUrl: (document.getElementById('setVisitsUrl').value || '').trim()
        };
        try { localStorage.setItem('lrAppSettings', JSON.stringify(s)); } catch (e) {}
        updateModeBadges();
        closeSettings();
        alert('సెట్టింగ్స్ సేవ్ అయ్యాయి.');
    }

    function openSettings() {
        const s = getSettings();
        document.getElementById('setSarvamKey').value = s.sarvamKey || '';
        document.getElementById('setRazorpayKey').value = s.razorpayKey || '';
        document.getElementById('setBook1').value = s.book1Link || '';
        document.getElementById('setBook2').value = s.book2Link || '';
        document.getElementById('setAgoraId').value = s.agoraId || '';
        document.getElementById('setAgoraToken').value = s.agoraToken || '';
        document.getElementById('setVisitsUrl').value = s.visitsUrl || '';
        updateModeBadges();
        document.getElementById('settingsModal').classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeSettings() {
        const m = document.getElementById('settingsModal');
        if (m) m.classList.remove('open');
        document.body.style.overflow = '';
    }

    function updateModeBadges() {
        const s = getSettings();
        const ai = document.getElementById('aiBadge');
        if (ai) {
            ai.textContent = s.sarvamKey ? 'AI ఆన్' : 'డెమో';
            ai.className = 'mode-badge' + (s.sarvamKey ? ' live' : '');
        }
        const rz = document.getElementById('rzpBadge');
        if (rz) {
            if (!s.razorpayKey) { rz.textContent = 'డెమో'; rz.className = 'mode-badge'; }
            else if (s.razorpayKey.indexOf('rzp_test') === 0) { rz.textContent = 'టెస్ట్'; rz.className = 'mode-badge'; }
            else { rz.textContent = 'లైవ్'; rz.className = 'mode-badge live'; }
        }
    }

    // ---------- Sarvam AI (ఉచిత క్రెడిట్స్) ----------
    async function aiRespond(text) {
        const key = (getSettings().sarvamKey || '').trim();
        if (!key) { addAiMsg('sys', aiDemoReply(text)); return; }

        const bubble = addAiMsg('sys', 'ఆలోచిస్తున్నాను…');
        const history = aiMsgs.slice(-6).map(function (m) {
            return { role: m.kind === 'me' ? 'user' : 'assistant', content: m.text };
        });
        try {
            const res = await fetch('https://api.sarvam.ai/v1/chat/completions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'api-subscription-key': key },
                body: JSON.stringify({
                    model: 'sarvam-105b',
                    messages: [{ role: 'system', content: 'You are a helpful Vedic astrology assistant for Telugu users. Answer briefly in Telugu.' }].concat(history),
                    temperature: 0.6,
                    max_tokens: 400
                })
            });
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const data = await res.json();
            const answer = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || '';
            if (!answer) throw new Error('ఖాళీ సమాధానం');
            if (bubble) bubble.textContent = answer;
        } catch (e) {
            if (bubble) bubble.textContent = 'AI కాల్ విఫలమైంది (' + e.message + '). బ్రౌజర్ నుంచి నేరుగా కాల్ చేస్తే CORS బ్లాక్ అవ్వవచ్చు — అప్పుడు చిన్న సర్వర్ ప్రాక్సీ అవసరం. డెమో సమాధానం: ' + aiDemoReply(text);
        }
    }

    // ---------- Razorpay (టెస్ట్ మోడ్ ఉచితం) ----------
    let rzpLoading = null;

    function loadRazorpayScript() {
        if (window.Razorpay) return Promise.resolve(true);
        if (rzpLoading) return rzpLoading;
        rzpLoading = new Promise(function (resolve) {
            const s = document.createElement('script');
            s.src = 'https://checkout.razorpay.com/v1/checkout.js';
            s.onload = function () { resolve(true); };
            s.onerror = function () { resolve(false); };
            document.head.appendChild(s);
        });
        return rzpLoading;
    }

    function payWithRazorpay(amount) {
        const key = (getSettings().razorpayKey || '').trim();
        loadRazorpayScript().then(function (ok) {
            if (!ok || !window.Razorpay) {
                alert('Razorpay లోడ్ కాలేదు — ఇంటర్నెట్ కనెక్షన్ చూడండి. ప్రస్తుతానికి డెమో రీచార్జ్ చేయండి.');
                demoRecharge(amount);
                return;
            }
            const isTest = key.indexOf('rzp_test') === 0;
            const rzp = new window.Razorpay({
                key: key,
                amount: amount * 100,
                currency: 'INR',
                name: 'LR Astrology',
                description: 'వాలెట్ రీచార్జ్' + (isTest ? ' (టెస్ట్ మోడ్)' : ''),
                prefill: { contact: '+91' + (astroState.mobile || '') },
                notes: { gateway: rechargeGateway },
                theme: { color: '#0369a1' },
                handler: function (resp) {
                    astroState.wallet = (astroState.wallet || 0) + amount;
                    try {
                        const tx = JSON.parse(localStorage.getItem('lrWalletTxns') || '[]');
                        tx.push({ type: 'credit', amount: amount, gateway: 'razorpay', paymentId: resp.razorpay_payment_id, test: isTest, at: new Date().toISOString() });
                        localStorage.setItem('lrWalletTxns', JSON.stringify(tx));
                    } catch (e) {}
                    saveAstroState();
                    renderWallet();
                    closeRecharge();
                    alert((isTest ? 'టెస్ట్ మోడ్: ' : '') + '₹' + amount + ' వాలెట్‌లో జోడించబడింది. Payment ID: ' + resp.razorpay_payment_id);
                }
            });
            rzp.on('payment.failed', function (resp) {
                alert('చెల్లింపు విఫలమైంది: ' + ((resp.error && resp.error.description) || 'మళ్లీ ప్రయత్నించండి.'));
            });
            rzp.open();
        });
    }

    function demoRecharge(amount) {
        astroState.wallet = (astroState.wallet || 0) + amount;
        try {
            const tx = JSON.parse(localStorage.getItem('lrWalletTxns') || '[]');
            tx.push({ type: 'credit', amount: amount, gateway: rechargeGateway, demo: true, at: new Date().toISOString() });
            localStorage.setItem('lrWalletTxns', JSON.stringify(tx));
        } catch (e) {}
        saveAstroState();
        renderWallet();
        closeRecharge();
        alert('₹' + amount + ' వాలెట్‌లో జోడించబడింది (డెమో). ప్రస్తుత బ్యాలెన్స్ ₹' + astroState.wallet + '.');
    }

    // ================= సందర్శకుల లెక్క =================
    async function loadVisits() {
        const todayEl = document.getElementById('visToday');
        const totalEl = document.getElementById('visTotal');
        if (!todayEl || !totalEl) return;
        try {
            const cfg = getSettings();
            const custom = (cfg.visitsUrl || '').trim();
            // డిఫాల్ట్: మీ స్వంత విజిటర్ వర్కర్
            let endpoint = (custom || 'https://lr-visits.lrpadhi.workers.dev/api/visits').replace(/\/+$/, '');
            if (endpoint.indexOf('/api/visits') === -1) endpoint += '/api/visits';

            let ok = false;
            try {
                const res = await fetch(endpoint, { cache: 'no-store' });
                if (!res.ok) throw new Error('no endpoint');
                const data = await res.json();
                // వివిధ రకాల వర్కర్ సమాధానాలను స్వీకరించడం
                const totalVal = data.total !== undefined ? data.total
                    : (data.visits !== undefined ? data.visits
                    : (data.count !== undefined ? data.count : null));
                const todayVal = data.today !== undefined ? data.today
                    : (data.todayVisits !== undefined ? data.todayVisits
                    : (data.todayCount !== undefined ? data.todayCount : null));
                if (totalVal === null && todayVal === null) throw new Error('bad shape');
                todayEl.textContent = todayVal === null ? '—' : Number(todayVal).toLocaleString('en-IN');
                totalEl.textContent = totalVal === null ? '—' : Number(totalVal).toLocaleString('en-IN');
                ok = true;
            } catch (e1) { ok = false; }

            if (!ok) {
                // వర్కర్ కుదరకపోతే — ఉచిత పబ్లిక్ కౌంటర్ ప్రయత్నం
                const ns = 'lr-astrology-lrpadhi';
                const ist = new Date(Date.now() + 5.5 * 3600 * 1000);
                const dayKey = 'day-' + ist.toISOString().slice(0, 10);
                const base = 'https://abacus.jasoncameron.dev/hit/' + ns + '/';
                const r1 = await fetch(base + 'total', { cache: 'no-store' });
                const r2 = await fetch(base + dayKey, { cache: 'no-store' });
                if (!r1.ok || !r2.ok) throw new Error('no counter');
                const d1 = await r1.json();
                const d2 = await r2.json();
                todayEl.textContent = Number(d2.value || 0).toLocaleString('en-IN');
                totalEl.textContent = Number(d1.value || 0).toLocaleString('en-IN');
            }
        } catch (e) {
            todayEl.textContent = '—';
            totalEl.textContent = '—';
        }
    }

    // ================= పుస్తకాలు =================
    function buyBook(n) {
        const s = getSettings();
        const link = (n === 1 ? s.book1Link : s.book2Link) || '';
        if (!link) {
            alert('ఈ పుస్తకానికి చెల్లింపు లింక్ ఇంకా జోడించలేదు. Razorpay డాష్‌బోర్డ్‌లో Payment Link క్రియేట్ చేసి, ⚙️ సెట్టింగ్స్‌లో పేస్ట్ చేయండి.');
            return;
        }
        window.open(link, '_blank');
    }

    // యజమాని సెట్టింగ్స్ — ఫుటర్ కాపీరైట్‌పై వరుసగా 5 సార్లు నొక్కితే తెరుచుకుంటుంది
    let ownerTapCount = 0, ownerTapTimer = null;
    function initOwnerGate() {
        const el = document.querySelector('.footer-bottom');
        if (!el) return;
        el.addEventListener('click', function () {
            ownerTapCount++;
            clearTimeout(ownerTapTimer);
            ownerTapTimer = setTimeout(function () { ownerTapCount = 0; }, 2500);
            if (ownerTapCount >= 5) {
                ownerTapCount = 0;
                openSettings();
            }
        });
    }

    // రింగ్ సౌండ్ (డెమో — బ్రౌజర్ ఆడియోతో)
    let ringCtx = null, ringTimer = null;
    function ringBeep(freq, when, dur) {
        const o = ringCtx.createOscillator(), g = ringCtx.createGain();
        o.type = 'sine';
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.0001, when);
        g.gain.exponentialRampToValueAtTime(0.10, when + 0.06);
        g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
        o.connect(g);
        g.connect(ringCtx.destination);
        o.start(when);
        o.stop(when + dur + 0.05);
    }
    function startRing() { startDialer(); }
    function stopRing() { stopDialer(); }
    function initCallRing() {
        const modal = document.getElementById('callModal');
        if (!modal) return;
        new MutationObserver(function () {
            if (modal.classList.contains('open')) {
                startRing();
                // డైలర్ టోన్ మరియు ప్రకటనలు startDialer లోనే మొదలవుతాయి
            } else {
                stopRing();
                stopSpeakCall();
                stopDialer();
                if (typeof leaveAgoraCall === 'function') { leaveAgoraCall(); }
            }
        }).observe(modal, { attributes: true, attributeFilter: ['class'] });
    }

    function openFromHash() {
        const h = (location.hash || '').replace('#', '');
        const map = { books: 'booksPage', karma: 'karmaPage', panel: 'astroPanelPage', astrologers: 'astrologersPage', jatakam: 'jatakamPage',
                      panchangam: 'gocharamPage', muhurtam: 'muhurtamPage' };
        if (map[h]) showPage(map[h]);
    }

            window.onload = initAllForms;
