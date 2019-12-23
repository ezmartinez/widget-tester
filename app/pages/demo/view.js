/**
 * Module dependencies
 */
const React = require('react');
const Head = require('react-declarative-head');
const MeliGA = require('nordic/analytics/meli-ga');
const MelidataTrack = require('nordic/melidata/melidata-track');
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const injectI18n = require('nordic/i18n/injectI18n');

/**
 * View Component
 */
class View extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Click using React!');
  }

  render() {
    const { i18n, translations, site, siteId, lowEnd, deviceType, company } = this.props;
    return (
      <div className="demo">
        <MeliGA
          section="universal"
          page="test"
        />

        <MelidataTrack path="/demo" event_data={{ demo: 'data' }} />

        <Head>
          <title>Demo Page</title>
        </Head>

        <Style href="demo.css" />
        <Script>
          {`
            window.__PRELOADED_STATE__ = ${serialize({ translations, site, siteId, lowEnd, deviceType, company }, { isJSON: true })};
            console.log('Demo page is loaded!');
          `}
        </Script>
        <Script src="vendor.js" />
        <Script src="demo.js" />

        <button id="demo-button" onClick={this.handleClick}>Click Me!</button>

        <h2>Site details:</h2>
        <p>Country: {site.name}, default currency: {site.default_currency_id}, company: {company}</p>

        <h2>Device details:</h2>
        <p>Is low-end: {String(lowEnd)}, type: {deviceType}</p>

        <h2>API endpoints:</h2>
        <ul>
          <li><a href="/api/demo/platform">Platform</a></li>
          <li><a href="/api/demo/user">User</a></li>
          <li><a href="/api/demo/device">Device</a></li>
          <li><a href="/api/demo/browser">Browser</a></li>
        </ul>

        <h2>i18n</h2>
        <p>{i18n.gettext('Usuarios')}</p>
      </div>
    );
  }
}

/**
 * Inject i18n context as props into View.
 */
module.exports = injectI18n(View);
