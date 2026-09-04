const CITIES = ['it-rome', 'pt-lisbon', 'gr-athens', 'es-barcelona', 'es-madrid', 'fr-paris', 'gb-london', 'nl-amsterdam', 'de-berlin', 'at-vienna', 'cz-prague', 'hu-budapest', 'dk-copenhagen', 'se-stockholm', 'it-milan', 'it-naples', 'hr-dubrovnik', 'tr-istanbul', 'es-valencia', 'pt-porto'];
const CITY_META = {
  'it-rome': { emoji: '🏛️', color: '#ef8354', month: 4 },
  'pt-lisbon': { emoji: '🚋', color: '#f4b942', month: 5 },
  'gr-athens': { emoji: '☀️', color: '#38a9dd', month: 4 },
  'es-barcelona': { emoji: '🎨', color: '#e2624f', month: 5 },
  'es-madrid': { emoji: '👑', color: '#d9a441', month: 5 },
  'fr-paris': { emoji: '🗼', color: '#7f9cf5', month: 4 },
  'gb-london': { emoji: '🎡', color: '#6c8ea0', month: 7 },
  'nl-amsterdam': { emoji: '🚲', color: '#d9756c', month: 4 },
  'de-berlin': { emoji: '🐻', color: '#9aa5b8', month: 5 },
  'at-vienna': { emoji: '🎻', color: '#b58a5c', month: 3 },
  'cz-prague': { emoji: '🏰', color: '#c98f9e', month: 4 },
  'hu-budapest': { emoji: '🌉', color: '#d67d54', month: 4 },
  'dk-copenhagen': { emoji: '🧜‍♀️', color: '#5b8ea9', month: 4 },
  'se-stockholm': { emoji: '⛴️', color: '#7aa6c4', month: 4 },
  'it-milan': { emoji: '🛍️', color: '#a8825c', month: 4 },
  'it-naples': { emoji: '🍕', color: '#e0a12e', month: 4 },
  'hr-dubrovnik': { emoji: '🏖️', color: '#4f9d92', month: 4 },
  'tr-istanbul': { emoji: '🕌', color: '#c1694f', month: 5 },
  'es-valencia': { emoji: '🥘', color: '#e8b83f', month: 5 },
  'pt-porto': { emoji: '🍷', color: '#5f8f8a', month: 5 },
};
const MONTH_NAMES = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
};
const COPY = {
  en: {
    title: 'Which city are you?', docTitle: 'Which city are you? Travel personality quiz | wherefeelsgood', subtitle: 'Ten quick questions reveal your travel personality—and a city to visit.', start: 'Start the game', question: 'Question', of: 'of 10', result: 'Your city personality is…', traits: 'Your strengths', bestMonthLabel: 'Best travel month', share: 'Share with friends', shareLabel: 'Share your result', copied: 'Link copied!', instaHint: 'Link copied — paste it into Instagram.', copyFailed: 'Could not copy automatically — select the link below to copy it.', retry: 'Play again', exit: 'City finder', explore: 'Explore more cities that fit you', affiliateLabel: 'Advertisement', affiliateNote: 'Compare hotel prices with Trivago. We may earn a commission from qualified referrals at no extra cost to you.', consentText: 'We use a Trivago affiliate widget via Awin. With your consent, the partners may process data and set cookies to credit referrals.', consentAccept: 'Accept', consentDecline: 'Decline', faqTitle: 'Frequently asked questions about the quiz', faq: [
    ['What type of traveler am I?', 'Answer ten quick questions about your preferences — from your perfect morning to your travel photo. The quiz reveals your city personality from your answers.'],
    ['Which city should I visit?', 'The quiz tells you your city personality with the best travel month. For a more detailed climate-comfort recommendation, use the city finder on the homepage.'],
    ['How does the quiz work?', 'Ten simple questions, one answer each. At the end you get your city — one of 20 European destinations — with its traits and a link to accommodation.'],
    ['What does my result mean?', 'Your city personality describes how you travel and what feels good for you. You also see the best travel month for “your” city — based on historical climate data.'],
  ],
    questions: [
      ['Your perfect morning begins with…',['Espresso on a sunlit piazza','A slow breakfast with an ocean breeze','A croissant on a Haussmann boulevard','Coffee and a fresh bun by the canals']],
      ['Choose an afternoon…',['Ancient lanes and a hidden temple','Mosaics, tapas and street art','A ferry crossing between two continents','Winding streets below a hilltop castle']],
      ['Your ideal evening has…',['A passeggiata past fountains and golden facades','Fado music drifting from a little bar','Late tapas in the Gothic Quarter','A waltz in a grand concert hall']],
      ['You feel most alive when…',['History surrounds you on every corner','You find a quiet corner with a perfect view','The city hums with stories from every direction','The night is just beginning in a buzzing club']],
      ['Pick the travel photo you would keep…',['A cobbled street with a trattoria cat','White stone beneath a deep blue sky','Colourful façades and a park by the sea','Golden rooftops and a river of bridges']],
      ['Which sounds most like you?',['Sun-warmed, easygoing and open to everyone','Elegant, curious and quietly confident','Bold, layered and full of atmosphere','Calm, practical and quietly stylish']],
      ['Your dream day trip…',['A boat ride through a thousand islands','A day at the thermal baths','A picnic in a royal park','A wine tasting in a riverside cellar']],
      ['Your ideal neighbourhood has…',['A stylish shopping street near the cathedral','Street food and loud, warm voices','A cosy canal-side café with bikes everywhere','Leafy boulevards and imperial palaces']],
      ['Which souvenir do you bring home?',['A hand-painted fan from a grand square','A classic tea tin from a royal arcade','A jar of paprika from the market hall','A tiny astronomical clock charm']],
      ['Your perfect weekend is…',['A hygge weekend with pastries and harbour walks','A fashion-forward weekend with aperitivo','A sun-soaked weekend of sea and old stone','A lazy weekend of paella and orange trees']],
    ],
    results: {
      'it-rome': ['Rome','Warm-hearted and timeless','Your experience gives you the wisdom to enjoy what truly matters, while your curiosity keeps you young at heart and full of energy. People who meet you remember your warmth long after you part. Like Rome, you carry stories and kindness wherever you go, and others feel at home with you. Being around you feels like a sunny afternoon — that is your gift.',['Wise','Warm','Curious','Full of life'],'Visit your Rome'],
      'pt-lisbon': ['Lisbon','Bright, welcoming and resilient','Years have given you calm confidence and wisdom, while your open mind remains youthful and full of energy. You are the person friends turn to when they need light in a grey week. Like Lisbon, you help people see the brighter view, and you do it with a warm smile. Your presence feels like the first sunny day after rain.',['Open-minded','Resilient','Welcoming','Adventurous'],'Visit your Lisbon'],
      'gr-athens': ['Athens','Bold, thoughtful and energetic','You combine hard-earned wisdom with a youthful spark that inspires everyone around you. Your clear mind, generous heart and steady energy encourage people just by being near you. Like Athens, you are timeless and always ready for another story. You make people feel braver — that is a rare and beautiful gift.',['Thoughtful','Bold','Inspiring','Energetic'],'Visit your Athens'],
      'es-barcelona': ['Barcelona','Colourful, creative and warm','You bring colour, energy and fresh ideas wherever you go, and people notice. You love art, good food and streets full of life, and you share that joy generously. Like Barcelona, you are warm and full of creative spirit. The room feels brighter when you walk in.',['Creative','Warm','Sociable','Full of life'],'Visit your Barcelona'],
      'es-madrid': ['Madrid','Vibrant, warm and full of life','You light up any room with your warmth and love of life. You know how to enjoy the moment — good food, late nights and laughter — and you invite everyone along. Like Madrid, you are vibrant, playful and full of heart. Your laugh is contagious; it is the kind people remember for years.',['Vibrant','Warm','Playful','Sociable'],'Visit your Madrid'],
      'fr-paris': ['Paris','Elegant, curious and timeless','You move through life with grace and curiosity. You appreciate beauty, good conversation and quiet corners, and you always find something worth seeing. Like Paris, you are elegant, refined and a little romantic. You listen like no one else — that is why people feel seen with you.',['Elegant','Curious','Refined','Romantic'],'Visit your Paris'],
      'gb-london': ['London','Eclectic, curious and resilient','You are endlessly curious and comfortable with change, which makes you wonderful company. You mix tradition with innovation and always find something new to explore. Like London, you are eclectic, open-minded and quietly strong. You make the world feel bigger and more possible.',['Curious','Resilient','Eclectic','Open-minded'],'Visit your London'],
      'nl-amsterdam': ['Amsterdam','Free-spirited, easy-going and bright','You value freedom, authenticity and the simple joys, and it shows in how you treat people. You are open-minded, creative and quietly rebellious in the best way. Like Amsterdam, you are free-spirited and easy to be around. Being with you feels like a deep breath of fresh air.',['Free-spirited','Creative','Easy-going','Authentic'],'Visit your Amsterdam'],
      'de-berlin': ['Berlin','Bold, creative and endlessly interesting','You think for yourself and love reinventing things, and that honesty is rare. You are raw, genuine and full of creative energy, and people respect that. Like Berlin, you are bold, independent and endlessly interesting. You never bore anyone — the conversation is always alive with you.',['Bold','Creative','Honest','Independent'],'Visit your Berlin'],
      'at-vienna': ['Vienna','Elegant, cultured and refined','You appreciate beauty, music and the finer things, and you share them gently. You are graceful, thoughtful and quietly impressive — the kind of person who makes an evening special. Like Vienna, you are elegant, cultured and refined. Your calm presence puts others at ease — that is your quiet magic.',['Elegant','Cultured','Thoughtful','Refined'],'Visit your Vienna'],
      'cz-prague': ['Prague','Romantic, mysterious and timeless','You see magic in old streets and hidden corners, and you notice what others walk past. You are romantic, clever and full of gentle mystery. Like Prague, you are timeless and quietly beautiful. You see the world with enchanted eyes — keep that, it is precious.',['Romantic','Clever','Mysterious','Timeless'],'Visit your Prague'],
      'hu-budapest': ['Budapest','Passionate, warm and resilient','You feel deeply and rise again stronger, and that strength touches people. You are warm, spirited and full of history, with a heart that gives generously. Like Budapest, you are passionate and resilient. Your warmth feels like coming home — and that is the truest thing about you.',['Passionate','Warm','Resilient','Spirited'],'Visit your Budapest'],
      'dk-copenhagen': ['Copenhagen','Cosy, balanced and quietly stylish','You believe in comfort, balance and good design — in life as in travel. You are calm, practical and quietly stylish, and people feel safe around you. Like Copenhagen, you make the everyday feel special. You have a gift for making things better without any fuss.',['Cosy','Balanced','Practical','Stylish'],'Visit your Copenhagen'],
      'se-stockholm': ['Stockholm','Calm, elegant and adventurous','You move through life with quiet confidence, and it inspires others. You are elegant, adventurous and at peace with yourself — a rare combination. Like Stockholm, you are composed, beautiful and full of hidden depths. Your presence is like a still lake: calm on the surface, full of life underneath.',['Calm','Elegant','Adventurous','Confident'],'Visit your Stockholm'],
      'it-milan': ['Milan','Stylish, ambitious and modern','You know what you want and you make it happen — with style and grace. You are modern, ambitious and always polished, yet you never make others feel small. Like Milan, you are stylish and forward-looking. You look like you have it all together — and you really do.',['Stylish','Ambitious','Modern','Polished'],'Visit your Milan'],
      'it-naples': ['Naples','Passionate, generous and alive','You live loudly, love fiercely and make everything more colourful. You are passionate, generous and full of flavour, and life is never boring around you. Like Naples, you are warm, vibrant and unforgettable. You make ordinary days feel like celebrations.',['Passionate','Generous','Vibrant','Warm'],'Visit your Naples'],
      'hr-dubrovnik': ['Dubrovnik','Proud, serene and sun-drenched','You carry yourself with quiet pride and a warm heart. You are timeless, serene and sun-warmed, and people feel rested in your company. Like Dubrovnik, you are beautiful in a lasting, gentle way. Peace follows you around — what a lovely thing to be known for.',['Proud','Serene','Warm-hearted','Timeless'],'Visit your Dubrovnik'],
      'tr-istanbul': ['Istanbul','Bold, layered and full of stories','You connect worlds with ease and never stop exploring, and your stories draw people in. You are grand, curious and impossible to pin down — that is your charm. Like Istanbul, you are layered and fascinating. Every conversation with you is a journey worth taking.',['Bold','Curious','Warm','Story-loving'],'Visit your Istanbul'],
      'es-valencia': ['Valencia','Sunny, fresh and joyful','You bring sunshine into every room, and people feel lighter around you. You are fresh, joyful and made for long, happy days, and your good mood spreads. Like Valencia, you are sunny, sociable and full of life. Your smile makes their day — you have that effect.',['Sunny','Joyful','Fresh','Sociable'],'Visit your Valencia'],
      'pt-porto': ['Porto','Warm, characterful and soulful','You are genuine, hard-working and full of soul, and people sense it immediately. You have character for days and a heart of gold, and you make others feel welcome. Like Porto, you are warm, characterful and quietly extraordinary. You are the kind of person everyone wishes they had met sooner.',['Genuine','Soulful','Warm','Characterful'],'Visit your Porto'],
    }
  },
  de: {
    title: 'Welche Stadt bist du?', docTitle: 'Welche Stadt bist du? Reise-Quiz | wherefeelsgood', subtitle: 'Zehn einfache Fragen zeigen deine Reisepersönlichkeit – und eine Stadt für dich.', start: 'Spiel starten', question: 'Frage', of: 'von 10', result: 'Deine Stadtpersönlichkeit ist …', traits: 'Deine Stärken', bestMonthLabel: 'Bester Reisemonat', share: 'Mit Freunden teilen', shareLabel: 'Teile dein Ergebnis', copied: 'Link kopiert!', instaHint: 'Link kopiert – füge ihn in Instagram ein.', copyFailed: 'Automatisches Kopieren nicht möglich – markiere den Link unten zum Kopieren.', retry: 'Noch einmal spielen', exit: 'Stadtfinder', explore: 'Entdecke mehr Städte, die zu dir passen', affiliateLabel: 'Anzeige', affiliateNote: 'Hotelpreise mit Trivago vergleichen. Für qualifizierte Vermittlungen können wir eine Provision erhalten – ohne Mehrkosten für dich.', consentText: 'Wir verwenden ein Trivago-Affiliate-Widget über Awin. Mit deiner Einwilligung können die Partner Daten verarbeiten und Cookies zur Provisions-Zuordnung setzen.', consentAccept: 'Akzeptieren', consentDecline: 'Ablehnen', faqTitle: 'Häufige Fragen zum Reise-Quiz', faq: [
    ['Welcher Urlaubstyp bin ich?', 'Beantworte zehn kurze Fragen zu deinen Vorlieben – von deinem perfekten Morgen bis zu deinem Reisefoto. Das Quiz erkennt daraus deine Stadtpersönlichkeit.'],
    ['Welche Stadt sollte ich besuchen?', 'Das Quiz verrät dir deine Stadtpersönlichkeit mit passender Reisezeit. Für eine detailliertere Empfehlung nach Klima-Komfort nutze den Stadtfinder auf der Startseite.'],
    ['Wie funktioniert das Quiz?', 'Zehn einfache Fragen, eine Antwort pro Frage. Am Ende bekommst du deine Stadt – eine von 20 europäischen Städten – samt Eigenschaften und Link zu Unterkünften.'],
    ['Was bedeutet mein Ergebnis?', 'Deine Stadtpersönlichkeit beschreibt, wie du reist und was dir guttut. Dazu siehst du den besten Reisemonat für „deine“ Stadt – basierend auf historischen Klimadaten.'],
  ],
    questions: [
      ['Dein perfekter Morgen beginnt mit …',['Espresso auf einer sonnigen Piazza','Ein langsames Frühstück mit Meeresbrise','Ein Croissant auf einem Haussmann-Boulevard','Kaffee und ein frisches Brötchen an den Kanälen']],
      ['Wähle einen Nachmittag …',['Antike Gassen und ein versteckter Tempel','Mosaike, Tapas und Street-Art','Eine Fährfahrt zwischen zwei Kontinenten','Verwinkelte Gassen unterhalb eines Schlosses']],
      ['Zu deinem idealen Abend gehört …',['Eine Passeggiata an Brunnen und goldenen Fassaden vorbei','Fado-Musik aus einer kleinen Bar','Späte Tapas im Gotischen Viertel','Ein Walzer in einem großen Konzertsaal']],
      ['Du fühlst dich besonders lebendig, wenn …',['Geschichte dich an jeder Ecke umgibt','Du einen ruhigen Ort mit perfekter Aussicht findest','Die Stadt aus allen Richtungen Geschichten erzählt','Die Nacht in einem lebendigen Club gerade beginnt']],
      ['Welches Reisefoto behältst du?',['Eine Kopfsteinpflastergasse mit Trattoria-Katze','Heller Stein unter tiefblauem Himmel','Bunte Fassaden und ein Park am Meer','Goldene Dächer und ein Fluss voller Brücken']],
      ['Was klingt am meisten nach dir?',['Sonnenverwöhnt, gelassen und offen für alle','Elegant, neugierig und ruhig selbstbewusst','Mutig, vielschichtig und voller Atmosphäre','Ruhig, praktisch und leise stilvoll']],
      ['Dein Traumtagesausflug …',['Eine Bootsfahrt durch tausend Inseln','Ein Tag in den Thermalbädern','Ein Picknick im königlichen Park','Eine Weinprobe im Weinkeller am Fluss']],
      ['Zu deinem idealen Viertel gehört …',['Eine stilvolle Einkaufsstraße nahe dem Dom','Streetfood und laute, warmherzige Stimmen','Ein gemütliches Café am Kanal mit überall Fahrrädern','Laubige Boulevards und kaiserliche Paläste']],
      ['Welches Souvenir bringst du mit?',['Einen handbemalten Fächer von einem großen Platz','Eine klassische Teedose aus einer königlichen Passage','Ein Glas Paprika aus der Markthalle','Einen kleinen Astronomischen-Uhr-Anhänger']],
      ['Dein perfektes Wochenende ist …',['Ein Hygge-Wochenende mit Gebäck und Hafen-Spaziergängen','Ein modebewusstes Wochenende mit Aperitivo','Ein sonniges Wochenende am Meer und altem Stein','Ein faules Wochenende mit Paella und Orangenbäumen']],
    ],
    results: {
      'it-rome': ['Rom','Warmherzig und zeitlos','Deine Erfahrung schenkt dir die Weisheit, das Wesentliche zu genießen, und deine Neugier hält dich jung im Herzen und voller Energie. Menschen, die dich treffen, vergessen deine Wärme so schnell nicht. Wie Rom bringst du Geschichten und Freundlichkeit mit, wohin du gehst, und andere fühlen sich bei dir sofort zu Hause. Bei dir fühlt es sich an wie ein sonniger Nachmittag – das ist dein Geschenk.',['Weise','Herzlich','Neugierig','Lebensfroh'],'Besuche dein Rom'],
      'pt-lisbon': ['Lissabon','Hell, herzlich und widerstandsfähig','Die Jahre haben dir gelassene Stärke und Weisheit gegeben, und dein offener Geist bleibt jung und voller Energie. Du bist der Mensch, an den sich Freunde wenden, wenn sie in einer grauen Woche Licht brauchen. Wie Lissabon zeigst du anderen die helle Seite – und das mit einem warmen Lächeln. Deine Nähe fühlt sich an wie der erste Sonnentag nach Regen.',['Offen','Stark','Gastfreundlich','Abenteuerlustig'],'Besuche dein Lissabon'],
      'gr-athens': ['Athen','Mutig, klug und voller Energie','Du verbindest gewachsene Weisheit mit einem jungen Funken, der alle um dich herum inspiriert. Dein klarer Verstand, dein großes Herz und deine ruhige Energie machen anderen Mut, nur indem du da bist. Wie Athen bist du zeitlos und immer bereit für eine weitere Geschichte. Du machst Menschen mutiger – das ist eine seltene, wunderschöne Gabe.',['Klug','Mutig','Inspirierend','Energiegeladen'],'Besuche dein Athen'],
      'es-barcelona': ['Barcelona','Bunt, kreativ und warmherzig','Du bringst Farbe, Energie und frische Ideen mit, wohin du auch gehst, und die Menschen merken es. Du liebst Kunst, gutes Essen und Straßen voller Leben und teilst diese Freude großzügig. Wie Barcelona bist du warmherzig und voller kreativem Geist. Der Raum wird heller, wenn du eintrittst.',['Kreativ','Warmherzig','Gesellig','Lebensfroh'],'Besuche dein Barcelona'],
      'es-madrid': ['Madrid','Lebhaft, warmherzig und voller Leben','Du bringst Wärme und Lebensfreude in jeden Raum. Du weißt, wie man den Moment genießt – gutes Essen, lange Nächte und Lachen – und alle dürfen mitmachen. Wie Madrid bist du lebhaft, verspielt und voller Herz. Dein Lachen ist ansteckend; es ist die Art Lachen, an die man sich jahrelang erinnert.',['Lebhaft','Warmherzig','Spielerisch','Gesellig'],'Besuche dein Madrid'],
      'fr-paris': ['Paris','Elegant, neugierig und zeitlos','Du gehst mit Anmut und Neugier durchs Leben. Du schätzt Schönheit, gute Gespräche und ruhige Ecken und findest immer etwas Sehenswertes. Wie Paris bist du elegant, stilvoll und ein wenig romantisch. Du hörst zu wie kein anderer – deshalb fühlen sich Menschen bei dir gesehen.',['Elegant','Neugierig','Stilvoll','Romantisch'],'Besuche dein Paris'],
      'gb-london': ['London','Vielseitig, neugierig und widerstandsfähig','Du bist unendlich neugierig und mit Veränderungen im Reinen, und genau das macht dich zu wunderbarer Gesellschaft. Du verbindest Tradition mit Innovation und findest immer etwas Neues zu entdecken. Wie London bist du vielseitig, offen und auf leise Art stark. Du lässt die Welt größer und möglich erscheinen.',['Neugierig','Widerstandsfähig','Vielseitig','Offen'],'Besuche dein London'],
      'nl-amsterdam': ['Amsterdam','Freiheitsliebend, unkompliziert und hell','Du schätzt Freiheit, Echtheit und die einfachen Freuden, und man sieht es daran, wie du mit Menschen umgehst. Du bist offen, kreativ und auf die beste Art leise rebellisch. Wie Amsterdam bist du freiheitsliebend und unkompliziert. Bei dir fühlt es sich an wie ein tiefer Atemzug frischer Luft.',['Freiheitsliebend','Kreativ','Unkompliziert','Authentisch'],'Besuche dein Amsterdam'],
      'de-berlin': ['Berlin','Mutig, kreativ und unendlich interessant','Du denkst selbst und liebst es, Dinge neu zu erfinden – diese Ehrlichkeit ist selten. Du bist ungeschliffen, echt und voller kreativer Energie, und das respektieren die Menschen. Wie Berlin bist du mutig, unabhängig und unendlich interessant. Mit dir langweilt man sich nie – das Gespräch ist mit dir immer lebendig.',['Mutig','Kreativ','Ehrlich','Unabhängig'],'Besuche dein Berlin'],
      'at-vienna': ['Wien','Elegant, kultiviert und feinsinnig','Du schätzt Schönheit, Musik und die feinen Dinge und gibst sie sanft weiter. Du bist anmutig, nachdenklich und auf leise Art beeindruckend – der Mensch, der einen Abend besonders macht. Wie Wien bist du elegant, kultiviert und feinsinnig. Deine Ruhe entspannt andere – das ist deine stille Magie.',['Elegant','Kultiviert','Nachdenklich','Feinsinnig'],'Besuche dein Wien'],
      'cz-prague': ['Prag','Romantisch, geheimnisvoll und zeitlos','Du siehst Magie in alten Gassen und versteckten Ecken und nimmst wahr, woran andere vorbeigehen. Du bist romantisch, klug und voller sanfter Geheimnisse. Wie Prag bist du zeitlos und auf leise Weise schön. Du siehst die Welt mit verzauberten Augen – behalte das, es ist kostbar.',['Romantisch','Klug','Geheimnisvoll','Zeitlos'],'Besuche dein Prag'],
      'hu-budapest': ['Budapest','Leidenschaftlich, warmherzig und widerstandsfähig','Du fühlst tief und stehst stärker wieder auf, und diese Stärke berührt die Menschen. Du bist warmherzig, temperamentvoll und voller Geschichte, mit einem Herzen, das großzügig gibt. Wie Budapest bist du leidenschaftlich und widerstandsfähig. Deine Wärme fühlt sich an wie Nachhausekommen – und das ist das Wahrste an dir.',['Leidenschaftlich','Warmherzig','Widerstandsfähig','Temperamentvoll'],'Besuche dein Budapest'],
      'dk-copenhagen': ['Kopenhagen','Gemütlich, ausgeglichen und leise stilvoll','Du glaubst an Komfort, Balance und gutes Design – im Leben wie auf Reisen. Du bist ruhig, praktisch und leise stilvoll, und Menschen fühlen sich bei dir geborgen. Wie Kopenhagen machst du aus dem Alltag etwas Besonderes. Du hast ein Geschenk dafür, Dinge ohne viel Aufhebens besser zu machen.',['Gemütlich','Ausgeglichen','Praktisch','Stilvoll'],'Besuche dein Kopenhagen'],
      'se-stockholm': ['Stockholm','Ruhig, elegant und abenteuerlustig','Du gehst mit ruhigem Selbstvertrauen durchs Leben, und das inspiriert andere. Du bist elegant, abenteuerlustig und im Reinen mit dir selbst – eine seltene Kombination. Wie Stockholm bist du besonnen, schön und voller verborgener Tiefe. Deine Gegenwart ist wie ein stiller See: ruhig an der Oberfläche, voller Leben darunter.',['Ruhig','Elegant','Abenteuerlustig','Selbstbewusst'],'Besuche dein Stockholm'],
      'it-milan': ['Mailand','Stilvoll, ambitioniert und modern','Du weißt, was du willst, und setzt es um – mit Stil und Anmut. Du bist modern, ehrgeizig und immer gepflegt, und doch lässt du andere nie klein dastehen. Wie Mailand bist du stilvoll und zukunftsorientiert. Du siehst aus, als hättest du alles im Griff – und das stimmt auch.',['Stilvoll','Ambitioniert','Modern','Gepflegt'],'Besuche dein Mailand'],
      'it-naples': ['Neapel','Leidenschaftlich, großzügig und voller Leben','Du lebst laut, liebst intensiv und machst alles bunter. Du bist leidenschaftlich, großzügig und voller Geschmack, und um dich wird das Leben nie langweilig. Wie Neapel bist du warmherzig, lebendig und unvergesslich. Du machst aus gewöhnlichen Tagen Feiertage.',['Leidenschaftlich','Großzügig','Lebendig','Warmherzig'],'Besuche dein Neapel'],
      'hr-dubrovnik': ['Dubrovnik','Stolz, gelassen und sonnendurchflutet','Du trägst dich mit stillem Stolz und einem warmen Herzen. Du bist zeitlos, gelassen und von der Sonne verwöhnt, und Menschen erholen sich in deiner Nähe. Wie Dubrovnik bist du auf eine bleibende, sanfte Art schön. Der Frieden folgt dir – was für eine wunderbare Eigenschaft, für die man bekannt ist.',['Stolz','Gelassen','Warmherzig','Zeitlos'],'Besuche dein Dubrovnik'],
      'tr-istanbul': ['Istanbul','Mutig, vielschichtig und voller Geschichten','Du verbindest Welten mit Leichtigkeit und hörst nie auf zu entdecken, und deine Geschichten ziehen Menschen in den Bann. Du bist groß, neugierig und nicht festzulegen – genau das ist dein Charme. Wie Istanbul bist du vielschichtig und faszinierend. Jedes Gespräch mit dir ist eine Reise, die sich lohnt.',['Mutig','Neugierig','Warmherzig','Geschichtenliebend'],'Besuche dein Istanbul'],
      'es-valencia': ['Valencia','Sonnig, frisch und lebensfroh','Du bringst Sonnenschein in jeden Raum, und Menschen fühlen sich um dich leichter. Du bist frisch, fröhlich und gemacht für lange, glückliche Tage, und deine gute Laune steckt an. Wie Valencia bist du sonnig, gesellig und voller Leben. Dein Lächeln rettet anderen den Tag – diese Wirkung hast du.',['Sonnig','Fröhlich','Frisch','Gesellig'],'Besuche dein Valencia'],
      'pt-porto': ['Porto','Warmherzig, charaktervoll und seelenvoll','Du bist echt, fleißig und voller Seele, und die Menschen spüren das sofort. Du hast unendlich viel Charakter und ein Herz aus Gold und lässt andere willkommen sein. Wie Porto bist du warmherzig, charaktervoll und auf leise Art außergewöhnlich. Du bist der Mensch, den alle gern früher kennengelernt hätten.',['Ehrlich','Seelenvoll','Warmherzig','Charaktervoll'],'Besuche dein Porto'],
    }
  },
  es: {
    title: '¿Qué ciudad eres?', docTitle: '¿Qué ciudad eres? Test de personalidad viajera | wherefeelsgood', subtitle: 'Diez preguntas sencillas revelan tu personalidad viajera y una ciudad para visitar.', start: 'Empezar el juego', question: 'Pregunta', of: 'de 10', result: 'Tu personalidad urbana es…', traits: 'Tus fortalezas', bestMonthLabel: 'Mejor mes para viajar', share: 'Compartir con amigos', shareLabel: 'Comparte tu resultado', copied: '¡Enlace copiado!', instaHint: 'Enlace copiado: pégalo en Instagram.', copyFailed: 'No se pudo copiar automáticamente — selecciona el enlace de abajo para copiarlo.', retry: 'Jugar otra vez', exit: 'Buscador de ciudades', explore: 'Explora más ciudades que encajan contigo', affiliateLabel: 'Publicidad', affiliateNote: 'Compara precios de hoteles con Trivago. Podemos recibir una comisión por referencias válidas sin coste adicional para ti.', consentText: 'Usamos un widget de afiliado de Trivago a través de Awin. Con tu consentimiento, los socios pueden procesar datos y establecer cookies para atribuir referencias.', consentAccept: 'Aceptar', consentDecline: 'Rechazar', faqTitle: 'Preguntas frecuentes sobre el test', faq: [
    ['¿Qué tipo de viajero soy?', 'Responde diez preguntas breves sobre tus preferencias — desde tu mañana perfecta hasta tu foto de viaje. El test descubre tu personalidad urbana a partir de tus respuestas.'],
    ['¿Qué ciudad debería visitar?', 'El test te revela tu personalidad urbana con el mejor mes para viajar. Para una recomendación más detallada según tu confort climático, usa el buscador de la página principal.'],
    ['¿Cómo funciona el test?', 'Diez preguntas sencillas, una respuesta por pregunta. Al final obtienes tu ciudad — una de 20 ciudades europeas — con sus rasgos y un enlace a alojamientos.'],
    ['¿Qué significa mi resultado?', 'Tu personalidad urbana describe cómo viajas y qué te sienta bien. También ves el mejor mes para “tu” ciudad — basado en datos climáticos históricos.'],
  ],
    questions: [
      ['Tu mañana perfecta comienza con…',['Un espresso en una plaza soleada','Un desayuno lento con brisa del mar','Un croissant en un bulevar haussmanniano','Café y un bollo fresco junto a los canales']],
      ['Elige una tarde…',['Calles antiguas y un templo escondido','Mosaicos, tapas y arte callejero','Un ferry entre dos continentes','Calles sinuosas bajo un castillo']],
      ['Tu noche ideal incluye…',['Un paseo junto a fuentes y fachadas doradas','Fado desde una pequeña barra','Tapas tardías en el Barrio Gótico','Un vals en una gran sala de conciertos']],
      ['Te sientes más vivo cuando…',['La historia te rodea en cada esquina','Encuentras un rincón tranquilo con vistas perfectas','La ciudad vibra con historias desde todas direcciones','La noche apenas comienza en un club lleno de vida']],
      ['¿Qué foto de viaje guardarías?',['Una calle empedrada con un gato de trattoria','Piedra blanca bajo un cielo azul profundo','Fachadas coloridas y un parque junto al mar','Tejados dorados y un río de puentes']],
      ['¿Cuál suena más a ti?',['Bañado por el sol, relajado y abierto a todos','Elegante, curioso y con confianza tranquila','Audaz, complejo y lleno de atmósfera','Tranquilo, práctico y discretamente elegante']],
      ['Tu excursión soñada…',['Un paseo en barco entre mil islas','Un día en los baños termales','Un picnic en un parque real','Una cata de vino en una bodega junto al río']],
      ['Tu barrio ideal incluye…',['Una calle comercial con estilo junto a la catedral','Comida callejera y voces cálidas y animadas','Un café acogedor junto al canal con bicis por todas partes','Bulevares arbolados y palacios imperiales']],
      ['¿Qué recuerdo te llevas?',['Un abanico pintado a mano de una gran plaza','Una lata de té clásica de una galería real','Un tarro de pimentón del mercado','Un colgante de reloj astronómico']],
      ['Tu fin de semana perfecto es…',['Un fin de semana hygge con pasteles y paseos por el puerto','Un fin de semana a la moda con aperitivo','Un fin de semana soleado de mar y piedra antigua','Un fin de semana tranquilo de paella y naranjos']],
    ],
    results: {
      'it-rome': ['Roma','Cálida y atemporal','Tu experiencia te da la sabiduría para disfrutar de lo importante, mientras tu curiosidad te mantiene joven de corazón y lleno de energía. Quienes te conocen no olvidan tu calidez. Como Roma, llevas historias y amabilidad allá donde vas, y los demás se sienten en casa contigo. Estar a tu lado es como una tarde soleada: ese es tu don.',['Sabio','Cálido','Curioso','Lleno de vida'],'Visita tu Roma'],
      'pt-lisbon': ['Lisboa','Luminosa, acogedora y resiliente','Los años te han dado confianza y sabiduría, y tu mente abierta sigue joven y llena de energía. Eres la persona a la que los amigos acuden cuando necesitan luz en una semana gris. Como Lisboa, ayudas a los demás a ver el lado luminoso, y lo haces con una sonrisa cálida. Tu presencia es como el primer día de sol después de la lluvia.',['Abierto','Resiliente','Acogedor','Aventurero'],'Visita tu Lisboa'],
      'gr-athens': ['Atenas','Valiente, reflexiva y enérgica','Combinas la sabiduría ganada con una chispa joven que inspira a todos los que te rodean. Tu mente clara, tu gran corazón y tu energía serena animan a los demás solo con estar cerca. Como Atenas, eres atemporal y siempre listo para otra historia. Haces a la gente más valiente: ese es un regalo raro y hermoso.',['Reflexivo','Valiente','Inspirador','Enérgico'],'Visita tu Atenas'],
      'es-barcelona': ['Barcelona','Colorida, creativa y cálida','Aportas color, energía e ideas frescas allá donde vas, y la gente lo nota. Amas el arte, la buena comida y las calles llenas de vida, y compartes esa alegría con generosidad. Como Barcelona, eres cálido y lleno de espíritu creativo. La habitación se ilumina cuando entras.',['Creativo','Cálido','Sociable','Lleno de vida'],'Visita tu Barcelona'],
      'es-madrid': ['Madrid','Vibrante, cálida y llena de vida','Iluminas cualquier sala con tu calidez y tu amor por la vida. Sabes disfrutar del momento —buena comida, noches largas y risas— e invitas a todos a participar. Como Madrid, eres vibrante, juguetón y lleno de corazón. Tu risa es contagiosa; es de esas que se recuerdan durante años.',['Vibrante','Cálido','Juguetón','Sociable'],'Visita tu Madrid'],
      'fr-paris': ['París','Elegante, curiosa y atemporal','Avanzas por la vida con gracia y curiosidad. Aprecias la belleza, la buena conversación y los rincones tranquilos, y siempre encuentras algo que merece la pena ver. Como París, eres elegante, refinado y un poco romántico. Escuchas como nadie: por eso la gente se siente vista contigo.',['Elegante','Curioso','Refinado','Romántico'],'Visita tu París'],
      'gb-london': ['Londres','Ecléctica, curiosa y resiliente','Eres infinitamente curioso y cómodo con el cambio, y eso te convierte en una compañía maravillosa. Combinas tradición e innovación y siempre encuentras algo nuevo que explorar. Como Londres, eres ecléctico, abierto y fuerte en silencio. Haces que el mundo parezca más grande y posible.',['Curioso','Resiliente','Ecléctico','Abierto'],'Visita tu Londres'],
      'nl-amsterdam': ['Ámsterdam','Libre, relajada y luminosa','Valoras la libertad, la autenticidad y los placeres simples, y se nota en cómo tratas a la gente. Eres abierto, creativo y discretamente rebelde en el mejor sentido. Como Ámsterdam, eres libre y fácil de estar contigo. Estar a tu lado es como respirar aire fresco.',['Libre','Creativo','Relajado','Auténtico'],'Visita tu Ámsterdam'],
      'de-berlin': ['Berlín','Audaz, creativa e infinitamente interesante','Piensas por ti mismo y te encanta reinventar las cosas, y esa honestidad es rara. Eres auténtico, directo y lleno de energía creativa, y la gente lo respeta. Como Berlín, eres audaz, independiente e infinitamente interesante. Contigo nadie se aburre: la conversación siempre está viva.',['Audaz','Creativo','Honesto','Independiente'],'Visita tu Berlín'],
      'at-vienna': ['Viena','Elegante, culta y refinada','Aprecias la belleza, la música y las cosas buenas, y las compartes con delicadeza. Eres elegante, reflexivo y discretamente impresionante, el tipo de persona que hace especial una velada. Como Viena, eres culto, refinado y con estilo. Tu calma relaja a los demás: esa es tu magia silenciosa.',['Elegante','Culto','Reflexivo','Refinado'],'Visita tu Viena'],
      'cz-prague': ['Praga','Romántica, misteriosa y atemporal','Ves magia en calles antiguas y rincones ocultos, y te fijas en lo que los demás pasan por alto. Eres romántico, inteligente y lleno de misterio suave. Como Praga, eres atemporal y hermoso en silencio. Ves el mundo con ojos encantados: consérvalo, es un tesoro.',['Romántico','Inteligente','Misterioso','Atemporal'],'Visita tu Praga'],
      'hu-budapest': ['Budapest','Apasionada, cálida y resiliente','Sientes profundamente y te levantas más fuerte, y esa fuerza conmueve a la gente. Eres cálido, animado y lleno de historia, con un corazón que da con generosidad. Como Budapest, eres apasionado y resiliente. Tu calidez se siente como volver a casa, y eso es lo más cierto de ti.',['Apasionado','Cálido','Resiliente','Animado'],'Visita tu Budapest'],
      'dk-copenhagen': ['Copenhague','Acogedora, equilibrada y discretamente elegante','Crees en la comodidad, el equilibrio y el buen diseño, en la vida y en los viajes. Eres tranquilo, práctico y discretamente elegante, y la gente se siente segura contigo. Como Copenhague, haces especial lo cotidiano. Tienes el don de mejorar las cosas sin aspavientos.',['Acogedor','Equilibrado','Práctico','Con estilo'],'Visita tu Copenhague'],
      'se-stockholm': ['Estocolmo','Tranquila, elegante y aventurera','Avanzas por la vida con confianza silenciosa, y eso inspira a los demás. Eres elegante, aventurero y en paz contigo mismo: una combinación rara. Como Estocolmo, eres sereno, hermoso y lleno de profundidad oculta. Tu presencia es como un lago quieto: calma en la superficie, vida debajo.',['Tranquilo','Elegante','Aventurero','Seguro'],'Visita tu Estocolmo'],
      'it-milan': ['Milán','Con estilo, ambiciosa y moderna','Sabes lo que quieres y lo consigues, con estilo y gracia. Eres moderno, ambicioso y siempre impecable, pero nunca haces sentir pequeño a nadie. Como Milán, eres elegante y con visión de futuro. Pareces tenerlo todo bajo control, y así es.',['Con estilo','Ambicioso','Moderno','Pulido'],'Visita tu Milán'],
      'it-naples': ['Nápoles','Apasionada, generosa y llena de vida','Vives a lo grande, amas con intensidad y haces todo más colorido. Eres apasionado, generoso y lleno de sabor, y la vida a tu lado nunca es aburrida. Como Nápoles, eres cálido, vibrante e inolvidable. Conviertes los días normales en celebraciones.',['Apasionado','Generoso','Vibrante','Cálido'],'Visita tu Nápoles'],
      'hr-dubrovnik': ['Dubrovnik','Orgullosa, serena y bañada por el sol','Caminas con orgullo tranquilo y un corazón cálido. Eres atemporal, sereno y bañado por el sol, y la gente descansa en tu compañía. Como Dubrovnik, eres hermoso de una manera duradera y suave. La paz te sigue: qué maravilloso don para ser conocido.',['Orgulloso','Sereno','Cálido','Atemporal'],'Visita tu Dubrovnik'],
      'tr-istanbul': ['Estambul','Audaz, compleja y llena de historias','Conectas mundos con facilidad y nunca dejas de explorar, y tus historias cautivan a la gente. Eres grandioso, curioso e imposible de encasillar: ese es tu encanto. Como Estambul, eres complejo y fascinante. Cada conversación contigo es un viaje que merece la pena.',['Audaz','Curioso','Cálido','Amante de historias'],'Visita tu Estambul'],
      'es-valencia': ['Valencia','Soleada, fresca y alegre','Llevas sol a cada habitación, y la gente se siente más ligera contigo. Eres fresco, alegre y hecho para días largos y felices, y tu buen humor contagia. Como Valencia, eres soleado, sociable y lleno de vida. Tu sonrisa alegra el día a los demás: ese efecto tienes.',['Soleado','Alegre','Fresco','Sociable'],'Visita tu Valencia'],
      'pt-porto': ['Oporto','Cálida, con carácter y con alma','Eres genuino, trabajador y lleno de alma, y la gente lo nota de inmediato. Tienes carácter de sobra y un corazón de oro, y haces sentir bienvenidos a los demás. Como Oporto, eres cálido, con carácter y extraordinario en silencio. Eres de esas personas a las que todos desearían haber conocido antes.',['Auténtico','Con alma','Cálido','Con carácter'],'Visita tu Oporto'],
    }
  }
};
// 10 questions × 4 answers = 40 slots; each of the 20 cities appears exactly 2×.
const ANSWER_CITY = [
  ['it-rome', 'pt-lisbon', 'fr-paris', 'nl-amsterdam'],
  ['gr-athens', 'es-barcelona', 'tr-istanbul', 'cz-prague'],
  ['it-rome', 'pt-lisbon', 'es-barcelona', 'at-vienna'],
  ['gr-athens', 'se-stockholm', 'tr-istanbul', 'de-berlin'],
  ['it-naples', 'hr-dubrovnik', 'es-valencia', 'pt-porto'],
  ['es-madrid', 'fr-paris', 'de-berlin', 'dk-copenhagen'],
  ['se-stockholm', 'hu-budapest', 'gb-london', 'pt-porto'],
  ['it-milan', 'it-naples', 'nl-amsterdam', 'at-vienna'],
  ['es-madrid', 'gb-london', 'hu-budapest', 'cz-prague'],
  ['dk-copenhagen', 'it-milan', 'hr-dubrovnik', 'es-valencia'],
];

let lang = new URLSearchParams(location.search).get('lang') || localStorage.getItem('cc-lang') || document.documentElement.lang || 'de';
if (!COPY[lang]) lang = 'de';

let step = 0;
let answers = [];
let resultCity = new URLSearchParams(location.search).get('result');
if (!CITIES.includes(resultCity)) resultCity = null;
const byId = (id) => document.getElementById(id);
const show = (id) => byId(id).classList.remove('hidden');
const hide = (id) => byId(id).classList.add('hidden');

function applyStaticCopy() {
  const text = COPY[lang]; document.documentElement.lang = lang; document.title = text.docTitle || `${text.title} — wherefeelsgood`;
  byId('quizTitle').textContent = text.title; byId('quizSubtitle').textContent = text.subtitle; byId('quizStartHint').textContent = text.subtitle; byId('quizStartBtn').textContent = text.start; byId('quizFooter').textContent = 'wherefeelsgood — historical climate ideas for your next trip.';
  document.querySelector('.quiz-exit span').textContent = text.exit;
  byId('quizShareLabel').textContent = text.shareLabel;
  document.querySelectorAll('[data-affiliate-label]').forEach((el) => { el.textContent = text.affiliateLabel; });
  document.querySelectorAll('[data-affiliate-note]').forEach((el) => { el.textContent = text.affiliateNote; });
  const exploreLink = byId('quizExploreLink'); if (exploreLink) { exploreLink.textContent = text.explore; exploreLink.href = `index.html${lang === 'en' ? '' : '?lang=' + lang}`; }
  const faqTitle = byId('quiz-faq-title'); if (faqTitle) faqTitle.textContent = text.faqTitle;
  (text.faq || []).forEach(([q, a], index) => {
    const qEl = byId(`faq${index + 1}q`); const aEl = byId(`faq${index + 1}a`);
    if (qEl) qEl.textContent = q; if (aEl) aEl.textContent = a;
  });
  document.querySelectorAll('.lang-btn').forEach((button) => { const active = button.dataset.lang === lang; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
}
function showStart() { step = 0; answers = []; resultCity = null; hide('quizManualCopy'); show('quizStart'); hide('quizQuestions'); hide('quizResult'); }
function showQuestion() {
  hide('quizStart'); show('quizQuestions'); hide('quizResult'); const text = COPY[lang]; const [question, choices] = text.questions[step];
  byId('quizCounter').textContent = `${text.question} ${step + 1} ${text.of}`; byId('quizQuestionText').textContent = question; byId('quizProgressBar').style.width = `${(step / text.questions.length) * 100}%`;
  const box = byId('quizAnswers'); box.replaceChildren(); choices.forEach((choice, index) => { const button = document.createElement('button'); button.type = 'button'; button.className = 'quiz-answer'; button.textContent = choice; button.addEventListener('click', () => { answers.push(ANSWER_CITY[step][index]); step += 1; if (step === text.questions.length) finish(); else showQuestion(); }); box.append(button); });
}
function score() { const counts = Object.fromEntries(CITIES.map((city) => [city, 0])); answers.forEach((city) => counts[city] += 1); return [...CITIES].sort((a,b) => counts[b] - counts[a])[0]; }
function shareUrl() {
  const url = new URL(location.href); url.search = ''; url.searchParams.set('lang', lang); url.searchParams.set('result', resultCity);
  return url.toString();
}

// Share targets with brand icons (inline SVG). Instagram has no web share
// intent, so it copies the link and lets the user paste it into the app.
const SHARE_TARGETS = [
  { id: 'facebook', label: 'Facebook', color: '#1877f2', icon: '<path d="M13.5 21v-7h2.4l.4-2.9h-2.8V9.2c0-.84.23-1.42 1.44-1.42h1.5V5.2c-.28-.04-1.2-.12-2.28-.12-2.25 0-3.8 1.37-3.8 3.9v2.12H7.9V14h2.46v7h3.14z"/>', url: (u) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(u)}` },
  { id: 'instagram', label: 'Instagram', color: '#d62976', icon: '<rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.2" cy="6.8" r="1.3" fill="currentColor"/>', copy: true },
  { id: 'whatsapp', label: 'WhatsApp', color: '#25d366', icon: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.7 4.3 3.8 1.6.7 2.2.8 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.4-.3z"/>', url: (u) => `https://wa.me/?text=${encodeURIComponent(u)}` },
  { id: 'x', label: 'X', color: '#000000', icon: '<path d="M17.7 3h2.9l-6.4 7.3L21.8 21h-5.9l-4.6-6-5.3 6H3.1l6.8-7.8L2.5 3h6l4.2 5.5L17.7 3zm-1 16.2h1.6L7.5 4.7H5.8l10.9 14.5z"/>', url: (u) => `https://twitter.com/intent/tweet?text=${encodeURIComponent('Which city are you?')}&url=${encodeURIComponent(u)}` },
  { id: 'telegram', label: 'Telegram', color: '#229ed9', icon: '<path d="M21.9 4.6 18.9 19c-.2 1-.8 1.2-1.6.7l-4.6-3.4-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.7L18.4 6c.4-.3-.1-.5-.6-.2L7.1 12.6 2.5 11.3c-1-.3-1-1 .2-1.5L20.6 3.4c.8-.3 1.6.2 1.3 1.2z"/>', url: (u) => `https://t.me/share/url?url=${encodeURIComponent(u)}&text=${encodeURIComponent('Which city are you?')}` },
  { id: 'email', label: 'Email', color: '#64748b', icon: '<path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm8 7L4 7.5V17h16V7.5L12 12zm0-2 8-5H4l8 5z"/>', url: (u) => `mailto:?subject=${encodeURIComponent('Which city are you?')}&body=${encodeURIComponent(u)}` },
  { id: 'copy', label: 'Copy link', color: '#0f766e', icon: '<path d="M10.6 13.4a4 4 0 0 0 5.7 0l2.8-2.8a4 4 0 0 0-5.7-5.7l-1.4 1.4 1.4 1.4 1.4-1.4a2 2 0 0 1 2.8 2.8l-2.8 2.8a2 2 0 0 1-2.8 0l-1.4-1.4-1.4 1.4 1.4 1.4zm2.8 5.7-1.4 1.4a4 4 0 0 1-5.7-5.7l2.8-2.8a4 4 0 0 1 5.7 0l1.4 1.4 1.4-1.4-1.4-1.4a6 6 0 0 0-8.5 0l-2.8 2.8a6 6 0 0 0 8.5 8.5l1.4-1.4-1.4-1.4z"/>', copy: true },
];

// Clipboard with fallback for browsers/webviews without the async API.
function copyText(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).catch(() => legacyCopy(text));
  }
  return Promise.resolve(legacyCopy(text));
}
function legacyCopy(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); ta.setSelectionRange(0, text.length);
    const ok = document.execCommand('copy');
    ta.remove(); return ok;
  } catch { return false; }
}
function showShareNote(message) { const note = byId('quizShareNote'); note.textContent = message; show('quizShareNote'); }
// Clipboard blocked (common in in-app webviews) — show the link in a selectable field.
function revealShareLink(url) {
  const box = byId('quizManualCopy'); if (!box) return;
  const input = byId('quizManualCopyInput'); input.value = url; input.focus(); input.select();
  show('quizManualCopy'); byId('quizShareNote').textContent = COPY[lang].copyFailed;
}

function renderShareRow() {
  const row = byId('quizShareRow'); row.replaceChildren();
  SHARE_TARGETS.forEach((target) => {
    const btn = document.createElement('button'); btn.type = 'button'; btn.className = `share-btn share-${target.id}`; btn.title = target.label; btn.setAttribute('aria-label', target.label);
    btn.style.background = target.color; btn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${target.icon}</svg>`;
    btn.addEventListener('click', () => {
      const url = shareUrl();
      if (target.id === 'instagram') {
        // Instagram has no web share intent. On mobile, the native share sheet
        // lets users pick the Instagram app; on desktop (where navigator.share
        // exists but has no Instagram target) just copy the link instead.
        const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.userAgentData && navigator.userAgentData.mobile);
        if (navigator.share && isMobile) {
          navigator.share({ url, title: document.title }).catch((err) => {
            if (err && err.name === 'AbortError') return; // user cancelled the sheet
            copyText(url).then((ok) => ok ? showShareNote(COPY[lang].instaHint) : revealShareLink(url));
          });
        } else {
          copyText(url).then((ok) => ok ? showShareNote(COPY[lang].instaHint) : revealShareLink(url));
        }
      } else if (target.copy) {
        copyText(url).then((ok) => ok ? showShareNote(COPY[lang].copied) : revealShareLink(url));
      } else {
        window.open(target.url(url), '_blank', 'noopener,width=600,height=500');
      }
    });
    row.append(btn);
  });
}

function finish(forcedCity = null) {
  hide('quizManualCopy'); resultCity = forcedCity || score(); hide('quizStart'); hide('quizQuestions'); show('quizResult'); const text = COPY[lang]; const [city, headline, body, traits] = text.results[resultCity]; const meta = CITY_META[resultCity];
  byId('quizResultEyebrow').textContent = text.result; byId('quizResultEmoji').textContent = meta.emoji; byId('quizResultEmoji').style.background = meta.color; byId('quizResultHeadline').textContent = `${city}: ${headline}`; byId('quizResultBody').textContent = body;
  const monthEl = byId('quizResultMonth'); if (monthEl) monthEl.textContent = `📅 ${text.bestMonthLabel}: ${MONTH_NAMES[lang][meta.month - 1]}`;
  byId('quizTraitsTitle').textContent = text.traits;
  const list = byId('quizTraits'); list.replaceChildren(); traits.forEach((trait) => { const item = document.createElement('li'); item.textContent = trait; list.append(item); });
  byId('quizRetryBtn').textContent = `✨ ${text.retry}`;
  renderShareRow();
}

byId('quizStartBtn').addEventListener('click', () => { step = 0; answers = []; showQuestion(); }); byId('quizRetryBtn').addEventListener('click', showStart);
document.querySelectorAll('.lang-btn').forEach((button) => button.addEventListener('click', () => { lang = button.dataset.lang; localStorage.setItem('cc-lang', lang); applyStaticCopy(); if (resultCity) finish(resultCity); else if (step > 0) showQuestion(); else showStart(); }));
applyStaticCopy(); if (resultCity) finish(resultCity); else showStart();
