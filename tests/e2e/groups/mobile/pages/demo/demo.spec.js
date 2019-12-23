const demo = require('./');

describe('Demo Page', () => {
  it('When: User accesses the web app, he should land on the demo page', () => {
    demo.isLoaded();
  });
});
