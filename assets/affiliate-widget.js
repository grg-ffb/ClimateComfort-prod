(function () {
  const copy = {
    de: {
      text: 'Aktiviere die Trivago-Suche, um Hotelpreise zu vergleichen.',
      button: 'Trivago-Suche aktivieren',
      title: 'Hotelpreise bei Trivago vergleichen',
      linkText: 'Öffnet Trivago in einem neuen Tab.',
      linkButton: 'Zu Trivago →',
    },
    en: {
      text: 'Enable the Trivago search to compare hotel prices.',
      button: 'Enable Trivago search',
      title: 'Compare hotel prices on Trivago',
      linkText: 'Opens Trivago in a new tab.',
      linkButton: 'Open Trivago →',
    },
    es: {
      text: 'Activa la búsqueda de Trivago para comparar precios de hoteles.',
      button: 'Activar búsqueda de Trivago',
      title: 'Compara precios de hoteles en Trivago',
      linkText: 'Abre Trivago en una pestaña nueva.',
      linkButton: 'Abrir Trivago →',
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
    document.querySelectorAll('.affiliate-widget').forEach((widget) => {
      const link = widget.querySelector('[data-affiliate-link]');
      if (link) {
        link.hidden = !consent;
        const title = link.querySelector('[data-affiliate-title]');
        const description = link.querySelector('[data-affiliate-text]');
        const button = link.querySelector('[data-affiliate-button]');
        if (title) title.textContent = text.title;
        if (description) description.textContent = text.linkText;
        if (button) button.textContent = text.linkButton;
      }
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
