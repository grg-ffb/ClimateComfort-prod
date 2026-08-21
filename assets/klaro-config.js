// Klaro consent manager configuration — self-hosted, no external service.
// Defines the affiliate (CJ) service; consent is stored in a
// Klaro-managed cookie. Load this file BEFORE assets/klaro.js.
window.klaroConfig = {
  version: 1,
  elementID: 'klaro',
  privacyPolicy: { '/datenschutz.html': 'Privacy Policy / Datenschutzerklärung' },
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  cookieExpiresAfterDays: 182,
  default: false,
  mustConsent: false,
  translations: {
    en: {
      consentModal: {
        title: 'We value your privacy',
        description:
          'We use partner links (via CJ Affiliate). With your consent, the partner may set cookies to credit referrals. You can change your choice at any time in our privacy policy.',
      },
      consentNotice: {
        description:
          'We use partner links (via CJ Affiliate). With your consent, cookies may be set by the partner to credit referrals. No personal data is passed on by us.',
      },
    },
    de: {
      consentModal: {
        title: 'Wir respektieren deine Privatsphäre',
        description:
          'Wir verwenden Partnerlinks (über CJ Affiliate). Mit deiner Einwilligung kann der Partner Cookies zur Provisions-Zuordnung setzen. Du kannst deine Auswahl jederzeit ändern.',
      },
      consentNotice: {
        description:
          'Wir verwenden Partnerlinks (über CJ Affiliate). Mit deiner Einwilligung können Cookies des Partners zur Provisions-Zuordnung gesetzt werden. Von uns werden keine personenbezogenen Daten weitergegeben.',
      },
    },
    es: {
      consentModal: {
        title: 'Valoramos tu privacidad',
        description:
          'Usamos enlaces de socios (a través de CJ Affiliate). Con tu consentimiento, el socio puede establecer cookies para acreditar referencias. Puedes cambiar tu elección en cualquier momento.',
      },
      consentNotice: {
        description:
          'Usamos enlaces de socios (a través de CJ Affiliate). Con tu consentimiento, el socio puede establecer cookies para acreditar referencias. Nosotros no transmitimos datos personales.',
      },
    },
  },
  purposes: {
    marketing: { en: 'Marketing', de: 'Marketing', es: 'Marketing' },
  },
  services: [
    {
      name: 'affiliate',
      title: {
        en: 'Affiliate links',
        de: 'Partnerlinks',
        es: 'Enlaces de afiliados',
      },
      description: {
        en: 'Used to credit referrals when you click accommodation links. Cookies may be set by CJ Affiliate and the accommodation provider.',
        de: 'Dient der Provisions-Zuordnung, wenn du Unterkunfts-Links anklickst. Cookies können von CJ Affiliate und dem Unterkunfts-Anbieter gesetzt werden.',
        es: 'Se usa para acreditar referencias cuando haces clic en enlaces de alojamiento. CJ Affiliate y el proveedor de alojamiento pueden establecer cookies.',
      },
      purposes: ['marketing'],
      required: false,
      default: false,
    },
  ],
};

// Progressive homepage enhancement: keep the existing finder intact while
// loading the trip-intent flow (destination + month / month / surprise).
if (document.body || document.readyState !== 'loading') {
  loadTripJourney();
} else {
  document.addEventListener('DOMContentLoaded', loadTripJourney, { once: true });
}
function loadTripJourney() {
  if (!document.body?.classList.contains('finder-body')) return;
  if (!document.querySelector('link[data-trip-journey]')) {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'journey.css?v=1';
    css.dataset.tripJourney = 'true';
    document.head.append(css);
  }
  if (!document.querySelector('script[data-trip-journey]')) {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'journey.js?v=3';
    script.dataset.tripJourney = 'true';
    document.head.append(script);
  }
}
