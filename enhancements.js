const DATA_PATH = 'data/generated';
const STORAGE_KEY = 'climatecomfort-preferences-v2';
const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MAX_VISIBLE = 3;
let showAll = false;

const CITIES = [
  { id: 'it-rome', names: { en: 'Rome', de: 'Rom', es: 'Roma' }, countries: { en: 'Italy', de: 'Italien', es: 'Italia' } },
  { id: 'pt-lisbon', names: { en: 'Lisbon', de: 'Lissabon', es: 'Lisboa' }, countries: { en: 'Portugal', de: 'Portugal', es: 'Portugal' } },
  { id: 'gr-athens', names: { en: 'Athens', de: 'Athen', es: 'Atenas' }, countries: { en: 'Greece', de: 'Griechenland', es: 'Grecia' } },
  { id: 'es-barcelona', names: { en: 'Barcelona', de: 'Barcelona', es: 'Barcelona' }, countries: { en: 'Spain', de: 'Spanien', es: 'España' } },
  { id: 'es-madrid', names: { en: 'Madrid', de: 'Madrid', es: 'Madrid' }, countries: { en: 'Spain', de: 'Spanien', es: 'España' } },
  { id: 'fr-paris', names: { en: 'Paris', de: 'Paris', es: 'París' }, countries: { en: 'France', de: 'Frankreich', es: 'Francia' } },
  { id: 'gb-london', names: { en: 'London', de: 'London', es: 'Londres' }, countries: { en: 'United Kingdom', de: 'Vereinigtes Königreich', es: 'Reino Unido' } },
  { id: 'nl-amsterdam', names: { en: 'Amsterdam', de: 'Amsterdam', es: 'Ámsterdam' }, countries: { en: 'Netherlands', de: 'Niederlande', es: 'Países Bajos' } },
  { id: 'de-berlin', names: { en: 'Berlin', de: 'Berlin', es: 'Berlín' }, countries: { en: 'Germany', de: 'Deutschland', es: 'Alemania' } },
  { id: 'at-vienna', names: { en: 'Vienna', de: 'Wien', es: 'Viena' }, countries: { en: 'Austria', de: 'Österreich', es: 'Austria' } },
  { id: 'cz-prague', names: { en: 'Prague', de: 'Prag', es: 'Praga' }, countries: { en: 'Czechia', de: 'Tschechien', es: 'Chequia' } },
  { id: 'hu-budapest', names: { en: 'Budapest', de: 'Budapest', es: 'Budapest' }, countries: { en: 'Hungary', de: 'Ungarn', es: 'Hungría' } },
  { id: 'dk-copenhagen', names: { en: 'Copenhagen', de: 'Kopenhagen', es: 'Copenhague' }, countries: { en: 'Denmark', de: 'Dänemark', es: 'Dinamarca' } },
  { id: 'se-stockholm', names: { en: 'Stockholm', de: 'Stockholm', es: 'Estocolmo' }, countries: { en: 'Sweden', de: 'Schweden', es: 'Suecia' } },
  { id: 'it-milan', names: { en: 'Milan', de: 'Mailand', es: 'Milán' }, countries: { en: 'Italy', de: 'Italien', es: 'Italia' } },
  { id: 'it-naples', names: { en: 'Naples', de: 'Neapel', es: 'Nápoles' }, countries: { en: 'Italy', de: 'Italien', es: 'Italia' } },
  { id: 'hr-dubrovnik', names: { en: 'Dubrovnik', de: 'Dubrovnik', es: 'Dubrovnik' }, countries: { en: 'Croatia', de: 'Kroatien', es: 'Croacia' } },
  { id: 'tr-istanbul', names: { en: 'Istanbul', de: 'Istanbul', es: 'Estambul' }, countries: { en: 'Türkiye', de: 'Türkei', es: 'Türkiye' } },
  { id: 'es-valencia', names: { en: 'Valencia', de: 'Valencia', es: 'Valencia' }, countries: { en: 'Spain', de: 'Spanien', es: 'España' } },
  { id: 'pt-porto', names: { en: 'Porto', de: 'Porto', es: 'Oporto' }, countries: { en: 'Portugal', de: 'Portugal', es: 'Portugal' } },
];
const CITY_COLORS = {
  'it-rome': '#ef8354', 'pt-lisbon': '#f4b942', 'gr-athens': '#38a9dd',
  'es-barcelona': '#e2624f', 'es-madrid': '#d9a441', 'fr-paris': '#7f9cf5',
  'gb-london': '#6c8ea0', 'nl-amsterdam': '#d9756c', 'de-berlin': '#9aa5b8',
  'at-vienna': '#b58a5c', 'cz-prague': '#c98f9e', 'hu-budapest': '#d67d54',
  'dk-copenhagen': '#5b8ea9', 'se-stockholm': '#7aa6c4', 'it-milan': '#a8825c',
  'it-naples': '#e0a12e', 'hr-dubrovnik': '#4f9d92', 'tr-istanbul': '#c1694f',
  'es-valencia': '#e8b83f', 'pt-porto': '#5f8f8a',
};
const PROFILES = {
  balanced: { day: 28, night: 21, humidity: 'medium', rain: 'medium', walk: 'normal' },
  'heat-sensitive': { day: 25, night: 19, humidity: 'low', rain: 'medium', walk: 'normal' },
  'humidity-sensitive': { day: 28, night: 21, humidity: 'low', rain: 'medium', walk: 'normal' },
  'city-walker': { day: 26, night: 22, humidity: 'medium', rain: 'medium', walk: 'high' },
  'cool-nights': { day: 30, night: 18, humidity: 'medium', rain: 'medium', walk: 'light' },
};
// Small lifestyle tie-breakers complement the climate score. They are capped
// so a clearly unsuitable climate can never be hidden by a profile label.
const PROFILE_AFFINITY = {
  balanced: { 'pt-lisbon': 6 },
  'heat-sensitive': { 'it-rome': 6 },
  'humidity-sensitive': { 'gr-athens': 3 },
  'city-walker': { 'it-rome': 5 },
  'cool-nights': { 'it-rome': 5 },
};
const QUIZ_PREFERENCES = {
  'it-rome': { day: 29, night: 20, humidity: 'medium', rain: 'medium', walk: 'normal' },
  'pt-lisbon': { day: 27, night: 20, humidity: 'high', rain: 'low', walk: 'high' },
  'gr-athens': { day: 30, night: 22, humidity: 'low', rain: 'high', walk: 'high' },
};
const WALK_WEIGHTS = {
  light: { day: 25, night: 35, humidity: 15, rain: 15, variability: 10 },
  normal: { day: 32, night: 32, humidity: 16, rain: 12, variability: 8 },
  high: { day: 40, night: 28, humidity: 17, rain: 8, variability: 7 },
};
const TOLERANCE = { low: 1.25, medium: 1, high: 0.75 };
const TEXT = {
  en: {
    eyebrow: 'Travel ideas for your kind of comfort', hero: 'Find travel destinations with your personal feel-good climate', intro: 'Choose the statement that sounds most like you. One click is enough for your first recommendations.', quizCtaTitle: 'Prefer something playful?', quizCtaText: 'Discover which city you are in the feel-good game.', quizCtaPlay: 'Play', adLabel: 'Advertisement (dummy)', adText: 'longevity-lens.com — travel blog',
    quickKicker: 'One-click city finder', quickTitle: 'What matters most to you?', quickHint: 'There is no wrong choice. You can refine it afterwards.', personalize: 'Personalize my comfort', personalizeHint: 'Optional: adjust temperature, humidity, rain and walking.', resultsKicker: 'General recommendations', resultsTitle: 'All cities by your profile', resultsHint: 'These are general matches based on your comfort settings — independent of your request above. Open a city to see its best month and climate details.', method: 'How matching works',
    profiles: { balanced: ['I like a balanced climate','Comfortable days and easy evenings'], 'heat-sensitive': ['I avoid strong heat','Cooler days and restful nights'], 'humidity-sensitive': ['I dislike humid air','Drier conditions feel better'], 'city-walker': ['I am a strong walker','Good conditions for active city days'], 'cool-nights': ['I sleep best when it is cool','Fresh nights matter most'] },
    descriptions: { 'it-rome': 'Warm, expressive and rich in small discoveries. A rewarding match if you enjoy history, food and unhurried evening walks.', 'pt-lisbon': 'Bright, breezy and easygoing. A gentle choice for sea air, welcoming neighbourhoods and a relaxed city rhythm.', 'gr-athens': 'Lively, thoughtful and full of contrast. A strong fit for open-air culture, memorable views and energetic days.', 'es-barcelona': 'Colourful, coastal and creative. A great fit for architecture, food markets and lively evening streets.', 'es-madrid': 'Sunny, sociable and wonderfully dry. A comfortable match for long city days, plazas and late dinners.', 'fr-paris': 'Elegant, walkable and full of quiet corners. A refined fit for gardens, cafés and unhurried sightseeing.', 'gb-london': 'Green, layered and famously changeable. A good match for mild days, parks and indoor culture.', 'nl-amsterdam': 'Breezy, compact and cycle-friendly. A relaxed fit for canals, museums and easy walking distances.', 'de-berlin': 'Spacious, vibrant and pleasantly continental. A strong fit for culture, parks and long summer evenings.', 'at-vienna': 'Graceful, orderly and comfortably warm. A smooth fit for coffee houses, parks and classical evenings.', 'cz-prague': 'Fairytale, walkable and moderately warm. A lovely choice for historic streets and river views.', 'hu-budapest': 'Grand, thermal and surprisingly lively. A good fit for spa evenings, ruin bars and Danube walks.', 'dk-copenhagen': 'Hygge, harbour-side and mild. A gentle match for cycling, waterfront life and relaxed summer days.', 'se-stockholm': 'Island-scattered, fresh and light. A calm fit for water views, museums and cool summer nights.', 'it-milan': 'Stylish, fast and comfortably dry. A solid match for design, galleries and evening aperitivos.', 'it-naples': 'Passionate, historic and sun-warmed. A vivid fit for street food, bay views and bustling squares.', 'hr-dubrovnik': 'Dramatic, walled and sea-bright. A scenic match for old-town rambles and Adriatic views.', 'tr-istanbul': 'Bold, layered and atmospheric. A rich fit for bazaars, strait views and warm evenings.', 'es-valencia': 'Sunny, calm and garden-filled. A mellow choice for beaches, paella and unhurried days.', 'pt-porto': 'Riverside, tiled and unpretentious. A warm fit for port cellars, bridges and hilltop views.' },
    why: 'Why it fits', best: 'Best matching month', day: 'Warm-day range', night: 'Night temperature', humidity: 'Humid daytime hours', rain: 'Wet days', saved: 'Your settings are saved on this device.', error: 'We could not load the climate data. Please reload the page.', score: 'Match score', showAll: 'Show all {n} cities', showLess: 'Show top 3', yearTitle: 'Your personal travel year', yearHint: 'The best-fitting city for each month, based on your profile and preferences.', affiliateLabel: 'Advertisement', affiliateNote: 'Compare hotel prices with Trivago. We may earn a commission from qualified referrals at no extra cost to you.', consentText: 'We use a Trivago affiliate widget via Awin. With your consent, the partners may process data and set cookies to credit referrals.', consentAccept: 'Accept', consentDecline: 'Decline', seoLinksTitle: 'Popular cities & travel ideas', seoCitiesTitle: 'Popular cities', seoIdeasTitle: 'Travel ideas', seoIdeaTitles: { juli: 'Where is it not too hot in July?', august: 'Pleasant destinations in August', sommer: 'Summer holidays without heat', kuehle: 'Cool cities in Europe', beste: 'Best travel time in Europe' }, faqTitle: 'Frequently asked questions about travel climate', faq: [
      ['Where is it not too hot in July?', 'If you want to avoid strong heat in July, the city finder ranks cooler European destinations for you — for example cities with mild days and fresh nights. Just pick the profile “I avoid strong heat”.'],
      ['Where should I travel if I hate the heat?', 'The wherefeelsgood city finder compares 20 European cities by temperature, humidity and rain. You can see at a glance which city matches your feel-good climate in summer.'],
      ['Which European city has the best climate?', 'That depends on your preferences: cool, dry, low humidity or easy to walk. The finder ranks cities by your personal comfort profile — not by a generic list.'],
      ['Which city should I visit?', 'Answer one short question in the city finder about your comfort type — or play the “Which city are you?” quiz for a playful recommendation with the best travel month.'],
      ['When is the best time to visit Europe?', 'Many cities are most comfortable in spring (April–June) and early autumn (September). The finder shows the best travel month for each city based on your profile.'],
    ],
  },
  de: {
    eyebrow: 'Reiseideen für dein Wohlfühlklima', hero: 'Finde Reiseziele mit deinem persönlichen Wohlfühlklima', intro: 'Wähle die Aussage, die am besten zu dir passt. Ein Klick genügt für erste Empfehlungen.', quizCtaTitle: 'Welche Stadt passt zu Dir?', quizCtaText: 'Lust auf ein Spiel?', quizCtaPlay: 'Spielen', adLabel: 'Anzeige (Platzhalter)', adText: 'longevity-lens.com — Reise-Blog',
    quickKicker: 'Stadtfinder mit einem Klick', quickTitle: 'Was ist dir besonders wichtig?', quickHint: 'Es gibt keine falsche Wahl. Du kannst sie anschließend verfeinern.', personalize: 'Mein Wohlfühlklima anpassen', personalizeHint: 'Optional: Temperatur, Feuchtigkeit, Regen und Bewegung einstellen.', resultsKicker: 'Generelle Empfehlungen', resultsTitle: 'Alle Städte nach deinem Profil', resultsHint: 'Das sind allgemeine Treffer nach deinen Komfort-Einstellungen – unabhängig von deiner Anfrage oben. Öffne eine Stadt für Reisemonat und Klimadetails.', method: 'So funktioniert die Auswahl',
    profiles: { balanced: ['Ich mag ausgewogenes Klima','Angenehme Tage und entspannte Abende'], 'heat-sensitive': ['Ich vermeide starke Hitze','Kühlere Tage und erholsame Nächte'], 'humidity-sensitive': ['Ich mag keine feuchte Luft','Trockene Bedingungen fühlen sich besser an'], 'city-walker': ['Ich bin viel zu Fuß unterwegs','Gute Bedingungen für aktive Stadttage'], 'cool-nights': ['Ich schlafe am besten kühl','Frische Nächte sind mir besonders wichtig'] },
    descriptions: { 'it-rome': 'Warm, lebendig und voller kleiner Entdeckungen. Eine gute Wahl für Geschichte, Genuss und entspannte Abendspaziergänge.', 'pt-lisbon': 'Hell, luftig und gelassen. Eine angenehme Wahl für Meeresluft, freundliche Viertel und entspanntes Stadttempo.', 'gr-athens': 'Lebendig, klug und voller Kontraste. Passend für Kultur im Freien, besondere Ausblicke und aktive Tage.', 'es-barcelona': 'Bunt, küstennah und kreativ. Großartig für Architektur, Märkte und lebendige Abendstraßen.', 'es-madrid': 'Sonnig, gesellig und herrlich trocken. Eine angenehme Wahl für lange Stadttage, Plätze und späte Abendessen.', 'fr-paris': 'Elegant, gut zu Fuß und voller ruhiger Ecken. Passend für Gärten, Cafés und entspanntes Sightseeing.', 'gb-london': 'Grün, vielschichtig und berühmt wechselhaft. Gut für milde Tage, Parks und Kultur in Innenräumen.', 'nl-amsterdam': 'Luftig, kompakt und fahrradfreundlich. Entspannt passend für Kanäle, Museen und kurze Wege.', 'de-berlin': 'Weitläufig, lebendig und angenehm kontinental. Stark für Kultur, Parks und lange Sommerabende.', 'at-vienna': 'Anmutig, geordnet und angenehm warm. Passt zu Kaffeehäusern, Parks und klassischen Abenden.', 'cz-prague': 'Märchenhaft, gut zu Fuß und mäßig warm. Eine schöne Wahl für historische Gassen und Flussblicke.', 'hu-budapest': 'Großartig, thermal und überraschend lebendig. Gut für Thermalabende, Ruinenbars und Donau-Spaziergänge.', 'dk-copenhagen': 'Hygge, am Hafen und mild. Eine sanfte Wahl für Radfahren, Uferleben und entspannte Sommertage.', 'se-stockholm': 'Inselreich, frisch und licht. Eine ruhige Wahl für Wasserblicke, Museen und kühle Sommernächte.', 'it-milan': 'Stilvoll, schnell und angenehm trocken. Passend für Design, Galerien und abendliche Aperitifs.', 'it-naples': 'Leidenschaftlich, historisch und sonnenwarm. Eine lebendige Wahl für Streetfood, Buchtblicke und belebte Plätze.', 'hr-dubrovnik': 'Dramatisch, ummauert und meerhell. Eine malerische Wahl für Altstadt-Rundgänge und Adria-Blicke.', 'tr-istanbul': 'Mutig, vielschichtig und atmosphärisch. Passend für Basare, Bosporus-Blicke und warme Abende.', 'es-valencia': 'Sonnig, ruhig und gartenreich. Eine sanfte Wahl für Strände, Paella und entspannte Tage.', 'pt-porto': 'Am Fluss, gefliest und unprätentiös. Eine warme Wahl für Portwein-Keller, Brücken und Hügelblicke.' },
    why: 'Warum es passt', best: 'Bester Reisemonat', day: 'Warme Tagestemperatur', night: 'Nachttemperatur', humidity: 'Feuchte Tagesstunden', rain: 'Regentage', saved: 'Deine Einstellungen werden auf diesem Gerät gespeichert.', error: 'Die Klimadaten konnten nicht geladen werden. Bitte lade die Seite neu.', score: 'Punktzahl', showAll: 'Alle {n} Städte anzeigen', showLess: 'Nur Top 3 anzeigen', yearTitle: 'Dein persönliches Reisejahr', yearHint: 'Die beste Stadt für jeden Monat, basierend auf deinem Profil und deinen Einstellungen.', affiliateLabel: 'Anzeige', affiliateNote: 'Hotelpreise mit Trivago vergleichen. Für qualifizierte Vermittlungen können wir eine Provision erhalten – ohne Mehrkosten für dich.', consentText: 'Wir verwenden ein Trivago-Affiliate-Widget über Awin. Mit deiner Einwilligung können die Partner Daten verarbeiten und Cookies zur Provisions-Zuordnung setzen.', consentAccept: 'Akzeptieren', consentDecline: 'Ablehnen', seoLinksTitle: 'Beliebte Städte & Reiseideen', seoCitiesTitle: 'Beliebte Städte', seoIdeasTitle: 'Reiseideen', seoIdeaTitles: { juli: 'Wo ist es im Juli nicht zu heiß?', august: 'Angenehme Reiseziele im August', sommer: 'Sommerurlaub ohne Hitze', kuehle: 'Kühle Städte in Europa', beste: 'Beste Reisezeit in Europa' }, faqTitle: 'Häufige Fragen zum Reiseklima', faq: [
      ['Wo ist es im Juli nicht zu heiß?', 'Wer im Juli starke Hitze vermeiden möchte, findet mit dem Stadtfinder kühlere europäische Reiseziele – zum Beispiel Städte mit milden Tagen und frischen Nächten. Wähle einfach das Profil „Ich vermeide starke Hitze“.'],
      ['Wohin im Sommer ohne Hitze?', 'Der wherefeelsgood-Stadtfinder vergleicht 20 europäische Städte nach Temperatur, Luftfeuchtigkeit und Regen. So siehst du auf einen Blick, welche Stadt im Sommer zu deinem Wohlfühl-Klima passt.'],
      ['Welche europäische Stadt hat das beste Klima?', 'Das hängt von deinen Vorlieben ab: kühl, trocken, feuchtigkeitsarm oder gut zu Fuß. Der Finder rankt Städte nach deinem persönlichen Komfort-Profil – nicht nach einer allgemeinen Liste.'],
      ['Welche Stadt passt zu mir?', 'Beantworte im Stadtfinder eine kurze Frage zu deinem Komfort-Typ – oder spiele das Quiz „Welche Stadt bist du?“ für eine spielerische Empfehlung mit passender Reisezeit.'],
      ['Was ist die beste Reisezeit für europäische Städte?', 'Viele Städte sind im Frühling (April–Juni) und Frühherbst (September) am angenehmsten. Der Finder zeigt dir für jede Stadt den besten Reisemonat basierend auf deinem Profil.'],
    ],
  },
  es: {
    eyebrow: 'Ideas de viaje para tu clima ideal', hero: 'Encuentra destinos con tu clima de bienestar personal', intro: 'Elige la frase que mejor te representa. Un clic basta para ver las primeras recomendaciones.', quizCtaTitle: '¿Prefieres algo lúdico?', quizCtaText: 'Descubre qué ciudad eres en el juego del buen clima.', quizCtaPlay: 'Jugar', adLabel: 'Anuncio (simulado)', adText: 'longevity-lens.com — blog de viajes',
    quickKicker: 'Buscador con un clic', quickTitle: '¿Qué te importa más?', quickHint: 'No hay una elección incorrecta. Puedes personalizarla después.', personalize: 'Personalizar mi comodidad', personalizeHint: 'Opcional: ajusta temperatura, humedad, lluvia y caminatas.', resultsKicker: 'Recomendaciones generales', resultsTitle: 'Todas las ciudades según tu perfil', resultsHint: 'Estas son coincidencias generales según tus ajustes de confort, independientes de tu solicitud anterior. Abre una ciudad para ver su mejor mes y detalles climáticos.', method: 'Cómo funciona la selección',
    profiles: { balanced: ['Me gusta un clima equilibrado','Días agradables y tardes tranquilas'], 'heat-sensitive': ['Evito el calor intenso','Días más frescos y noches reparadoras'], 'humidity-sensitive': ['No me gusta el aire húmedo','Prefiero condiciones más secas'], 'city-walker': ['Camino mucho por la ciudad','Buenas condiciones para días activos'], 'cool-nights': ['Duermo mejor con noches frescas','Las noches frescas son lo más importante'] },
    descriptions: { 'it-rome': 'Cálida, expresiva y llena de pequeños descubrimientos. Ideal si disfrutas de la historia, la comida y los paseos tranquilos.', 'pt-lisbon': 'Luminosa, aireada y tranquila. Una opción amable para disfrutar del mar, barrios acogedores y un ritmo relajado.', 'gr-athens': 'Animada, reflexiva y llena de contrastes. Encaja con la cultura al aire libre, las vistas y los días activos.', 'es-barcelona': 'Colorida, costera y creativa. Ideal para arquitectura, mercados y calles animadas por la noche.', 'es-madrid': 'Soleada, sociable y maravillosamente seca. Una opción cómoda para días largos, plazas y cenas tardías.', 'fr-paris': 'Elegante, caminable y llena de rincones tranquilos. Encaja con jardines, cafés y visitas sin prisa.', 'gb-london': 'Verde, variada y famosamente cambiante. Buena opción para días suaves, parques y cultura de interior.', 'nl-amsterdam': 'Airosa, compacta y ciclista. Encaja con canales, museos y distancias cortas.', 'de-berlin': 'Amplia, vibrante y agradablemente continental. Ideal para cultura, parques y largas tardes de verano.', 'at-vienna': 'Elegante, ordenada y agradablemente cálida. Encaja con cafés, parques y veladas clásicas.', 'cz-prague': 'De cuento, caminable y moderadamente cálida. Una opción encantadora para calles históricas y vistas al río.', 'hu-budapest': 'Grandiosa, termal y sorprendentemente animada. Buena opción para baños, bares y paseos junto al Danubio.', 'dk-copenhagen': 'Hygge, junto al puerto y suave. Una opción tranquila para bicicleta, vida junto al agua y días relajados.', 'se-stockholm': 'De islas, fresca y luminosa. Una opción serena para vistas al agua, museos y noches frescas.', 'it-milan': 'Elegante, rápida y agradablemente seca. Encaja con diseño, galerías y aperitivos al atardecer.', 'it-naples': 'Apasionada, histórica y bañada por el sol. Una opción viva para comida callejera, bahía y plazas bulliciosas.', 'hr-dubrovnik': 'Dramática, amurallada y brillante junto al mar. Una opción escénica para pasear por el casco antiguo y el Adriático.', 'tr-istanbul': 'Audaz, compleja y llena de ambiente. Encaja con bazares, vistas al Bósforo y cálidas veladas.', 'es-valencia': 'Soleada, tranquila y llena de jardines. Una opción suave para playas, paella y días sin prisa.', 'pt-porto': 'Junto al río, de azulejos y sin pretensiones. Una opción cálida para bodegas, puentes y vistas a las colinas.' },
    why: 'Por qué encaja', best: 'Mejor mes', day: 'Temperatura diurna cálida', night: 'Temperatura nocturna', humidity: 'Horas diurnas húmedas', rain: 'Días lluviosos', saved: 'Tus ajustes se guardan en este dispositivo.', error: 'No se pudieron cargar los datos climáticos. Vuelve a cargar la página.', score: 'Puntuación', showAll: 'Mostrar las {n} ciudades', showLess: 'Mostrar solo las 3 mejores', yearTitle: 'Tu año de viaje personal', yearHint: 'La mejor ciudad para cada mes, según tu perfil y preferencias.', affiliateLabel: 'Publicidad', affiliateNote: 'Compara precios de hoteles con Trivago. Podemos recibir una comisión por referencias válidas sin coste adicional para ti.', consentText: 'Usamos un widget de afiliado de Trivago a través de Awin. Con tu consentimiento, los socios pueden procesar datos y establecer cookies para atribuir referencias.', consentAccept: 'Aceptar', consentDecline: 'Rechazar', seoLinksTitle: 'Ciudades populares e ideas de viaje', seoCitiesTitle: 'Ciudades populares', seoIdeasTitle: 'Ideas de viaje', seoIdeaTitles: { juli: '¿Dónde no hace demasiado calor en julio?', august: 'Destinos agradables en agosto', sommer: 'Vacaciones de verano sin calor', kuehle: 'Ciudades frescas en Europa', beste: 'Mejor época para viajar en Europa' }, faqTitle: 'Preguntas frecuentes sobre el clima de viaje', faq: [
      ['¿Dónde no hace demasiado calor en julio?', 'Si quieres evitar el calor intenso en julio, el buscador clasifica destinos europeos más frescos para ti — por ejemplo, ciudades con días suaves y noches frescas. Elige el perfil “Evito el calor intenso”.'],
      ['¿Dónde viajar sin calor en verano?', 'El buscador de wherefeelsgood compara 20 ciudades europeas por temperatura, humedad y lluvia. Así verás de un vistazo qué ciudad se ajusta a tu clima ideal en verano.'],
      ['¿Qué ciudad europea tiene mejor clima?', 'Depende de tus preferencias: fresco, seco, poca humedad o fácil de recorrer. El buscador clasifica las ciudades según tu perfil de confort personal — no según una lista genérica.'],
      ['¿Qué ciudad debería visitar?', 'Responde una pregunta corta en el buscador sobre tu tipo de confort — o juega al test “¿Qué ciudad eres?” para una recomendación divertida con el mejor mes para viajar.'],
      ['¿Cuál es la mejor época para visitar Europa?', 'Muchas ciudades son más agradables en primavera (abril–junio) y a principios de otoño (septiembre). El buscador muestra el mejor mes de viaje para cada ciudad según tu perfil.'],
    ],
  }
};

let climate = [];
let currentProfile = 'balanced';
let quizCity = null;
const query = new URLSearchParams(location.search);
let lang = query.get('lang') || localStorage.getItem('cc-lang') || document.documentElement.lang || 'en';
if (!TEXT[lang]) lang = 'en';

const clamp = (value) => Math.max(0, Math.min(100, value));
const monthName = (month) => new Intl.DateTimeFormat(lang, { month: 'long' }).format(new Date(2024, month - 1, 1));
const prefs = () => ({
  day: Number(document.querySelector('#maxDay').value), night: Number(document.querySelector('#maxNight').value),
  humidity: document.querySelector('input[name="humidity"]:checked').value,
  rain: document.querySelector('input[name="rain"]:checked').value,
  walk: document.querySelector('input[name="walk"]:checked').value,
});

function score(item, preference) {
  const dayCold = clamp(Math.max(0, 18 - item.dayApparentC.p75) * 8 + Math.max(0, 13 - item.dayApparentC.p75) * 4);
  const nightCold = clamp(Math.max(0, 10 - item.nightMinC.p75) * 10 + Math.max(0, 6 - item.nightMinC.p75) * 6);
  const dayPenalty = clamp(Math.max(0, item.dayApparentC.p75 - preference.day) * 12 + Math.max(0, item.dayApparentC.p90 - preference.day) * 4 + dayCold);
  const nightPenalty = clamp(Math.max(0, item.nightMinC.p75 - preference.night) * 16 + Math.max(0, item.nightMinC.p90 - preference.night) * 5 + nightCold);
  const penalties = { day: dayPenalty, night: nightPenalty, humidity: clamp(item.humidHoursPct * TOLERANCE[preference.humidity]), rain: clamp(item.wetDaysPct * TOLERANCE[preference.rain]), variability: clamp(item.variability * 100) };
  const weights = WALK_WEIGHTS[preference.walk];
  const total = Object.keys(weights).reduce((sum, key) => sum + penalties[key] * weights[key], 0);
  return Math.max(0, Math.min(100, Math.round(100 - total / 100)));
}

function bestCities() {
  const preference = prefs();
  const affinity = quizCity ? { [quizCity]: 8 } : (PROFILE_AFFINITY[currentProfile] || {});
  return CITIES.map((city) => climate.filter((item) => item.locationId === city.id).map((item) => ({ city, item, climateScore: score(item, preference) })).sort((a, b) => b.climateScore - a.climateScore)[0]).filter(Boolean).map((result) => ({ ...result, score: result.climateScore + (affinity[result.city.id] || 0) })).sort((a, b) => b.score - a.score || b.climateScore - a.climateScore);
}

// Best city per month for the personal travel-year overview, using the same
// preferences/affinity as the city ranking (quiz result, type or sliders).
// Best city per month for the personal travel-year overview, using the same
// preferences/affinity as the city ranking (quiz result, type or sliders).
// Greedy matching: each month gets its best still-unused city, so no city
// appears more than once in the year overview.
function travelYearPairs() {
  const preference = prefs();
  const affinity = quizCity ? { [quizCity]: 8 } : (PROFILE_AFFINITY[currentProfile] || {});
  const candidates = [];
  for (const city of CITIES) {
    for (const month of MONTHS) {
      const item = climate.find((c) => c.locationId === city.id && c.month === month);
      if (!item) continue;
      const climateScore = score(item, preference);
      candidates.push({ city, item, month, climateScore, score: climateScore + (affinity[city.id] || 0) });
    }
  }
  candidates.sort((a, b) => b.score - a.score || b.climateScore - a.climateScore);
  const usedCity = new Set();
  const usedMonth = new Set();
  const picks = [];
  for (const c of candidates) {
    if (usedCity.has(c.city.id) || usedMonth.has(c.month)) continue;
    usedCity.add(c.city.id);
    usedMonth.add(c.month);
    picks.push(c);
    if (picks.length === MONTHS.length) break;
  }
  picks.sort((a, b) => a.month - b.month);
  return picks;
}

function renderTravelYear(target, text) {
  const section = document.createElement('section'); section.className = 'year-overview';
  const heading = document.createElement('h3'); heading.textContent = text.yearTitle;
  const hint = document.createElement('p'); hint.className = 'hint'; hint.textContent = text.yearHint;
  const grid = document.createElement('div'); grid.className = 'year-grid';
  travelYearPairs().forEach((best) => {
    const { month, city, item, score: matchScore } = best;
    const cell = document.createElement('article'); cell.className = 'year-month';
    const color = CITY_COLORS[city.id] || 'var(--teal)';
    cell.style.setProperty('--city-color', color);
    cell.style.backgroundImage = `url('assets/city-bg/${city.id}.svg?v=2')`;
    const monthNameEl = document.createElement('span'); monthNameEl.className = 'year-month-name'; monthNameEl.textContent = monthName(month);
    const cityName = document.createElement('strong'); cityName.textContent = city.names[lang];
    const country = document.createElement('small'); country.className = 'year-country'; country.textContent = city.countries[lang];
    const badge = document.createElement('span'); badge.className = 'year-score'; badge.textContent = `${Math.round(matchScore)}/100`; badge.title = `${text.score}: ${Math.round(matchScore)}/100`;
    cell.append(monthNameEl, cityName, country, badge); grid.append(cell);
  });
  section.append(heading, hint, grid); target.append(section);
}

function render() {
  if (!climate.length) return;
  const text = TEXT[lang];
  const target = document.querySelector('#visualSummary');
  target.replaceChildren();
  renderTravelYear(target, text);
  const results = bestCities();
  const visible = showAll ? results : results.slice(0, MAX_VISIBLE);
  visible.forEach(({ city, item, score: matchScore }, index) => {
    const card = document.createElement('article'); card.className = `city-match${index === 0 ? ' top-match' : ''}`;
    card.style.setProperty('--city-color', CITY_COLORS[city.id] || 'var(--teal)');
    card.style.backgroundImage = `url('assets/city-bg/${city.id}.svg?v=2')`;
    const rank = document.createElement('span'); rank.className = 'city-rank'; rank.textContent = String(index + 1);
    const badge = document.createElement('span'); badge.className = 'city-score'; badge.textContent = `${Math.round(matchScore)}/100`; badge.title = `${text.score}: ${Math.round(matchScore)}/100`;
    const content = document.createElement('div'); content.className = 'city-match-copy';
    const title = document.createElement('h3'); title.textContent = city.names[lang];
    const country = document.createElement('p'); country.className = 'country'; country.textContent = city.countries[lang];
    const description = document.createElement('p'); description.className = 'gentle-description'; description.textContent = text.descriptions[city.id];
    const details = document.createElement('details'); details.className = 'city-more';
    const summary = document.createElement('summary'); summary.textContent = text.why;
    const month = document.createElement('p'); month.className = 'best-month'; month.textContent = `${text.best}: ${monthName(item.month)}`;
    const metrics = document.createElement('ul');
    [`${text.day}: ${item.dayApparentC.p75}°C`, `${text.night}: ${item.nightMinC.p75}°C`, `${text.humidity}: ${item.humidHoursPct}%`, `${text.rain}: ${item.wetDaysPct}%`].forEach((value) => { const li = document.createElement('li'); li.textContent = value; metrics.append(li); });
    details.append(summary, month, metrics);
    content.append(title, country, description, details); card.append(rank, badge, content); target.append(card);
  });
  if (results.length > MAX_VISIBLE) {
    const toggle = document.createElement('button'); toggle.type = 'button'; toggle.className = 'show-more';
    toggle.textContent = showAll ? text.showLess : text.showAll.replace('{n}', String(results.length));
    toggle.addEventListener('click', () => { showAll = !showAll; render(); });
    target.append(toggle);
  }
}

function setValues(values) {
  document.querySelector('#maxDay').value = values.day; document.querySelector('#maxDayOut').value = `${values.day}°C`;
  document.querySelector('#maxNight').value = values.night; document.querySelector('#maxNightOut').value = `${values.night}°C`;
  for (const [name, value] of [['humidity', values.humidity], ['rain', values.rain], ['walk', values.walk]]) document.querySelector(`input[name="${name}"][value="${value}"]`).checked = true;
}
function save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ profile: currentProfile, quizCity, ...prefs() })); } catch { /* Storage is optional. */ } }
function selectProfile(profile, scroll = true) {
  currentProfile = profile; quizCity = null; setValues(PROFILES[profile]);
  document.querySelectorAll('.type-card').forEach((button) => button.classList.toggle('active', button.dataset.quickProfile === profile));
  save(); render(); if (scroll) document.querySelector('#results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function restore() {
  const shared = query.get('o')?.match(/^(it-rome|pt-lisbon|gr-athens)-\d{1,2}$/)?.[1] || null;
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (shared) { quizCity = shared; currentProfile = 'quiz'; setValues(QUIZ_PREFERENCES[shared]); save(); }
    else if (saved?.day) { currentProfile = saved.profile || 'custom'; quizCity = saved.quizCity || null; setValues(saved); }
    else setValues(PROFILES.balanced);
  } catch { setValues(PROFILES.balanced); }
  document.querySelectorAll('.type-card').forEach((button) => button.classList.toggle('active', button.dataset.quickProfile === currentProfile));
}
function updateLanguage() {
  document.documentElement.lang = lang; const text = TEXT[lang];
  document.querySelectorAll('[data-affiliate-label]').forEach((el) => { el.textContent = text.affiliateLabel; });
  document.querySelectorAll('[data-affiliate-note]').forEach((el) => { el.textContent = text.affiliateNote; });
  const values = { heroEyebrow: text.eyebrow, 'hero-title': text.hero, heroText: text.intro, quickKicker: text.quickKicker, 'quick-title': text.quickTitle, quickHint: text.quickHint, personalizeTitle: text.personalize, personalizeHint: text.personalizeHint, resultsKicker: text.resultsKicker, 'results-title': text.resultsTitle, resultsSubtitle: text.resultsHint, methodologyBtn: text.method, savedNote: text.saved };
  Object.entries(values).forEach(([id, value]) => { document.getElementById(id).textContent = value; });
  const cta = document.querySelector('#quizCta'); if (cta) { cta.querySelector('strong').textContent = text.quizCtaTitle; cta.querySelector('small').textContent = text.quizCtaText; cta.querySelector('b').textContent = text.quizCtaPlay; }
  const adLabel = document.getElementById('adLabel'); if (adLabel) adLabel.textContent = text.adLabel;
  const adText = document.getElementById('adText'); if (adText) adText.textContent = text.adText;
  const faqTitle = document.getElementById('faq-title'); if (faqTitle) faqTitle.textContent = text.faqTitle;
  (text.faq || []).forEach(([q, a], index) => {
    const qEl = document.getElementById(`faq${index + 1}q`); const aEl = document.getElementById(`faq${index + 1}a`);
    if (qEl) qEl.textContent = q; if (aEl) aEl.textContent = a;
  });
  const seoLinksTitle = document.getElementById('seo-links-title'); if (seoLinksTitle) seoLinksTitle.textContent = text.seoLinksTitle;
  const seoCitiesTitle = document.getElementById('seoCitiesTitle'); if (seoCitiesTitle) seoCitiesTitle.textContent = text.seoCitiesTitle;
  const seoIdeasTitle = document.getElementById('seoIdeasTitle'); if (seoIdeasTitle) seoIdeasTitle.textContent = text.seoIdeasTitle;
  document.querySelectorAll('.seo-links-grid a[data-city]').forEach((a) => { const c = CITIES.find((x) => x.id === a.dataset.city); if (c) a.textContent = c.names[lang] || c.names.de; });
  document.querySelectorAll('.seo-links-grid a[data-idea]').forEach((a) => { const t = text.seoIdeaTitles?.[a.dataset.idea]; if (t) a.textContent = t; });
  document.querySelectorAll('.type-card').forEach((button) => { const copy = text.profiles[button.dataset.quickProfile]; button.querySelector('strong').textContent = copy[0]; button.querySelector('small').textContent = copy[1]; });
  document.querySelectorAll('.lang-btn').forEach((button) => { const active = button.dataset.lang === lang; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
  render();
}
async function loadClimate() {
  // Fast path: one bundled file (generated by scripts/bundle-data.mjs).
  try {
    const res = await fetch(`${DATA_PATH}/bundle.json`);
    if (res.ok) {
      const bundle = await res.json();
      climate = Object.values(bundle.cities).flatMap((city) => Object.values(city));
      render();
      return;
    }
  } catch { /* fall back to per-file loading */ }
  const requests = CITIES.flatMap((city) => MONTHS.map((month) => fetch(`${DATA_PATH}/${city.id}-${String(month).padStart(2, '0')}.json`).then((response) => { if (!response.ok) throw new Error(`Climate data ${response.status}`); return response.json(); })));
  climate = await Promise.all(requests); render();
}

document.querySelectorAll('.type-card').forEach((button) => button.addEventListener('click', () => selectProfile(button.dataset.quickProfile)));
document.querySelectorAll('#maxDay, #maxNight').forEach((input) => input.addEventListener('input', () => { document.querySelector(`#${input.id}Out`).value = `${input.value}°C`; currentProfile = 'custom'; save(); render(); }));
document.querySelectorAll('input[type="radio"]').forEach((input) => input.addEventListener('change', () => { currentProfile = 'custom'; save(); render(); }));
document.querySelectorAll('.lang-btn').forEach((button) => button.addEventListener('click', () => { lang = button.dataset.lang; localStorage.setItem('cc-lang', lang); updateLanguage(); }));
document.querySelector('#methodologyBtn').addEventListener('click', () => document.querySelector('#methodologyDialog').showModal());
document.querySelector('#methodologyClose').addEventListener('click', () => document.querySelector('#methodologyDialog').close());
document.querySelector('#methodologyDialog').addEventListener('click', (event) => { if (event.target.id === 'methodologyDialog') event.target.close(); });

restore(); updateLanguage();
loadClimate().catch((error) => { console.error(error); document.querySelector('#visualSummary').replaceChildren(); const notice = document.querySelector('#dataNotice'); notice.textContent = TEXT[lang].error; notice.classList.remove('hidden'); });
