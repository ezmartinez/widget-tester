/**
 * Module dependencies
 */
const React = require('react');
const config = require('nordic/config');
const I18nProvider = require('nordic/i18n/I18nProvider');

const View = require('./View/index.js');

const { basePath } = config.ragnar;

/**
 * Render Tester
 */
exports.render = function render(req, res) {
  /**
   * View with I18nProvider
   */
  const Tester = props => (
    <I18nProvider i18n={req.i18n}>
      <View {...props} />
    </I18nProvider>
  );

  /**
   * Render View
   */
  res.render(Tester, {
    nickname: req.user ? req.user.nickname : undefined,
    baseURL: `${basePath}widget-tester`,
    staticMarkup: false,
    type: 'full',
    site: res.locals.site,
    siteId: req.platform.siteId,
    lowEnd: req.device.lowEnd,
    deviceType: req.device.type,
    translations: req.translations,
    company: config.get('companyName', req.platform.id, req.platform.siteId),
  });
};
