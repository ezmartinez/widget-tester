const demo = require('./');

describe('Demo Page', () => {
  it('When: User accesses the web app, he should land on the demo page', () => {
    demo.isLoaded();
  });
  it('Then: User wants to click on the `Click Me` button and open an Alert message', () => {
    demo.clickDemoButton();
  });
  it('Then: User wants to see the text `Click using React!` in the alert being displayed', () => {
    demo.validateAlertDisplay();
  });
  it('Then: User wants to dismiss the alert', () => {
    demo.dismissAlert();
  });
});
