(function () {
  const copy = {
    de: {
      text: 'Aktiviere die Trivago-Suche, um Hotelpreise zu vergleichen.',
      button: 'Trivago-Suche aktivieren',
    },
    en: {
      text: 'Enable the Trivago search to compare hotel prices.',
      button: 'Enable Trivago search',
    },
    es: {
      text: 'Activa la búsqueda de Trivago para comparar precios de hoteles.',
      button: 'Activar búsqueda de Trivago',
    },
  };

  function manager() {
    if (!window.klaro || !window.klaroConfig) return null;
    return window.klaro.getManager(window.klaroConfig);
  }

  function language() {
    const value = document.documentElement.lang || 'de';
    return copy[value] ? value : 'de';
  }

  function sync() {
    const consent = Boolean(manager()?.getConsent('affiliate'));
    const text = copy[language()];
    document.querySelectorAll('[data-affiliate-consent]').forEach((placeholder) => {
      placeholder.hidden = consent;
      const description = placeholder.querySelector('[data-affiliate-consent-text]');
      const button = placeholder.querySelector('[data-affiliate-enable]');
      if (description) description.textContent = text.text;
      if (button) button.textContent = text.button;
    });
  }

  function enable() {
    const consentManager = manager();
    if (!consentManager) return;
    consentManager.updateConsent('affiliate', true);
    consentManager.saveAndApplyConsents('contextual');
    window.setTimeout(sync, 0);
  }

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-affiliate-enable]')) enable();
  });

  const observer = new MutationObserver(sync);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sync);
  else sync();
  window.addEventListener('load', sync);
})();
