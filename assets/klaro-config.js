// Klaro consent manager configuration — self-hosted, no external service.
// Defines the Awin/Trivago affiliate service; consent is stored in a
// Klaro-managed cookie. Load this file BEFORE assets/klaro.js.
window.klaroConfig = {
  version: 1,
  elementID: 'klaro',
  privacyPolicy: { '/datenschutz.html': 'Privacy Policy / Datenschutzerklärung' },
  acceptAll: true,
  storageMethod: 'localStorage',
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
          'We use a Trivago affiliate widget via Awin. With your consent, the partners may process data and set cookies to credit referrals. You can change your choice at any time in our privacy policy.',
      },
      consentNotice: {
        description:
          'We use a Trivago affiliate widget via Awin. With your consent, the partners may process data and set cookies to credit referrals.',
      },
    },
    de: {
      consentModal: {
        title: 'Wir respektieren deine Privatsphäre',
        description:
          'Wir verwenden ein Trivago-Affiliate-Widget über Awin. Mit deiner Einwilligung können die Partner Daten verarbeiten und Cookies zur Provisions-Zuordnung setzen. Du kannst deine Auswahl jederzeit ändern.',
      },
      consentNotice: {
        description:
          'Wir verwenden ein Trivago-Affiliate-Widget über Awin. Mit deiner Einwilligung können die Partner Daten verarbeiten und Cookies zur Provisions-Zuordnung setzen.',
      },
    },
    es: {
      consentModal: {
        title: 'Valoramos tu privacidad',
        description:
          'Usamos un widget de afiliado de Trivago a través de Awin. Con tu consentimiento, los socios pueden procesar datos y establecer cookies para atribuir referencias. Puedes cambiar tu elección en cualquier momento.',
      },
      consentNotice: {
        description:
          'Usamos un widget de afiliado de Trivago a través de Awin. Con tu consentimiento, los socios pueden procesar datos y establecer cookies para atribuir referencias.',
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
        en: 'Loads the Trivago search widget from Awin and credits qualified referrals. Awin and Trivago may process technical data and set cookies.',
        de: 'Lädt das Trivago-Suchwidget von Awin und ordnet qualifizierte Vermittlungen zu. Awin und Trivago können technische Daten verarbeiten und Cookies setzen.',
        es: 'Carga el widget de búsqueda de Trivago desde Awin y atribuye referencias válidas. Awin y Trivago pueden procesar datos técnicos y establecer cookies.',
      },
      purposes: ['marketing'],
      required: false,
      default: false,
    },
  ],
};
