/**
 * Module dependencies
 */
const React = require('react');
const { shape, func, string } = require('prop-types');
const Head = require('react-declarative-head');
const Script = require('nordic/script');
const Style = require('nordic/style');
const serialize = require('serialize-javascript');
const injectI18n = require('nordic/i18n/injectI18n');

const Card = require('@andes/card');
const Button = require('@andes/button');
const TextField = require('@andes/textfield');

const demo = require('./demo.js');
const { parseString } = require('./utils');

const { useState } = React;

/**
 * View Component
 */
const View = (props) => {
  const { i18n, nickname } = props;
  const [context, setContext] = useState('');

  const triggerWidget = () => {
    if (nickname) {
      try {
        let evaluate;
        const errors = [];

        if (!context) {
          throw new Error('empty');
        }

        // Validate JSON
        try {
          evaluate = JSON.parse(context);
        } catch (err) {
          errors.push('JSON inválido.');
        }

        // Validate JS
        try {
          evaluate = parseString(context);
        } catch (err) {
          errors.push('JS inválido.');
        }

        if (evaluate) {
          window.CxWidget(evaluate);
        } else {
          throw new Error(errors[errors.length - 1]);
        }
      } catch (err) {
        if (err.message === 'empty') {
          alert(i18n.gettext('Context inválido.'));
        } else {
          alert(err.message);
        }
      }
    } else {
      alert(i18n.gettext('No se detecto el usuario! Por favor iniciar sesión y volve a recargar la página.'));
    }
  };

  const insertDemo = (e) => {
    e.preventDefault();
    setContext(demo);
  };

  const handleChangeContext = (e) => {
    const { value } = e.target;
    setContext(value);
  };

  const title = i18n.gettext('Widget Tester');

  return (
    <div className="widget-tester">
      <Head>
        <title>{title}</title>
      </Head>

      <Style href="widget-tester.css" />
      <Script>
        {`window.__PRELOADED_STATE__ = ${serialize(props, { isJSON: true })};`}
      </Script>
      <Script src="vendor.js" />
      <Script src="widget-tester.js" />
      <Script src="https://http2.mlstatic.com/resources/frontend/statics/ml-widgets/cx/v1.4.1/cxWidget.js" />

      <div className="widget-tester__main">
        <h1>{title}</h1>
        <Card className="widget-tester__context-controller" paddingSize={24}>
          <h2>{i18n.gettext('Contexto (js/json):')}</h2>
          <button className="widget-tester__insert-demo" onClick={insertDemo}>
            {i18n.gettext('Insertar demo')}
          </button>
          <TextField
            className="widget-tester__input"
            onChange={handleChangeContext}
            value={context}
            multiline
            textbox
            maxLength={3000}
            countdown
          />
          <Button onClick={triggerWidget}>
            {i18n.gettext('Probar')}
          </Button>
        </Card>
      </div>
    </div>
  );
};

View.propTypes = {
  i18n: shape({
    gettext: func.isRequired,
  }).isRequired,
  nickname: string,
};

View.defaultProps = {
  nickname: '',
};

/**
 * Inject i18n context as props into View.
 */
module.exports = injectI18n(View);
