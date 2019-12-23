const Mock = require('nordic-dev/mocks');
const DemoService = require('../../services/demo');

const mock = Mock();
const apiDomain = 'http://api.internal.ml.com';

describe('Demo service', () => {
  beforeAll(() => {
    mock.intercept(apiDomain, ['/sites/*']);
  });

  afterAll(() => {
    mock.restore(apiDomain, ['/sites/*']);
  });

  test('should fetch the data of site for the specified platform', (done) => {
    DemoService
      .getSite('MLA')
      .then((data) => {
        expect(typeof data).toBe('object');
        expect(Object.keys(data)).toEqual(
          expect.arrayContaining(['id', 'name', 'country_id', 'sale_fees_mode', 'mercadopago_version',
            'default_currency_id', 'immediate_payment', 'payment_method_ids', 'settings', 'currencies', 'mocked'])
        );
        expect(data.mocked).toBe('value');
        expect(data.currencies).toEqual([{ id: 'USD', symbol: 'U$S' }, { id: 'ARS', symbol: '$' }]);
        done();
      });
  });
});
