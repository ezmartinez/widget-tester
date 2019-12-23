const env = process.env.NODE_ENV;

if (env !== 'production') {
  const mock = require('nordic-dev/mocks')(); // eslint-disable-line

  mock.intercept('http://api.internal.ml.com/', [
    '/sites/*',
  ]);
}
