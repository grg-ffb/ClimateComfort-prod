(function () {
  const copy = {
    de: {
      text: 'Aktiviere die Trivago-Anzeige, um das Angebot zu öffnen.',
      button: 'Trivago-Anzeige aktivieren',
    },
    en: {
      text: 'Enable the Trivago advertisement to open the offer.',
      button: 'Enable Trivago advertisement',
    },
    es: {
      text: 'Activa el anuncio de Trivago para abrir la oferta.',
      button: 'Activar anuncio de Trivago',
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
      const host = widget.querySelector('[data-affiliate-creative-host]');
      const template = widget.querySelector('[data-affiliate-creative-template]');
      if (!host || !template) return;
      if (consent && !host.childElementCount) host.append(template.content.cloneNode(true));
      if (!consent && host.childElementCount) host.replaceChildren();
      host.hidden = !consent;
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
