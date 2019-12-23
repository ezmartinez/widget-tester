/* eslint-env browser */
const React = require('react');
const ReactDOM = require('react-dom');
const I18nProvider = require('nordic/i18n/I18nProvider');
const I18n = require('nordic/i18n');

module.exports = function startApp(Component) {
  const preloadedProps = window.__PRELOADED_STATE__;
  const { translations } = preloadedProps;
  const i18n = new I18n({ translations });

  ReactDOM.hydrate(
    <I18nProvider i18n={i18n}>
      <Component {...preloadedProps} />
    </I18nProvider>,
    document.getElementById('root-app'),
  );
};
