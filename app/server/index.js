/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const config = require('nordic/config');
const { layoutMiddleware } = require('nordic/layout');
const i18nMiddleware = require('nordic/i18n/middleware');

/**
 * Set up mocks
 */
require('../../mocks');

/**
 * Routers
 */
const widgetTesterRoute = require('../pages/widget-tester');

/**
 * Use global middlewares
 */
router.use(layoutMiddleware());
router.use(i18nMiddleware(config.i18n));

/**
 * Redirect
 */
router.get('/', (req, res) => res.redirect(`${config.ragnar.basePath}widget-tester`));

/**
 * Mount routers
 */
router.use('/widget-tester', widgetTesterRoute);

/**
 * Expose router
 */
module.exports = router;
