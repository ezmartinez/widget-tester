const demo = `{
  title: 'Ayuda con datos personales',
  source_id: 1,
  portal_access: {
    visible: true,
  },
  user_id: 88,
  env: 'dev',
  case_data: {
    payment_id: 1234,
    order_id: 1234,
    purchase_id: 1234,
  },
  entities: [
    {
      entity: {
        name: 'Users',
        department: 'cx',
        id: 88,
      },
      problem: {
        site_id: 'MLA',
        context: {
          type: 'CO',
          section: 'personal_data',
        },
      },
    },
    {
      entity: {
        name: 'ShippingSeller',
        department: 'cx',
        id: 56,
      },
      problem: {
        site_id: 'MLA',
        placeholders: {
          order_id: 1,
          shipment_id: 2,
        },
        context: {
          packDeliveredOpenClaim: 'true',
          ordersWithOpenClaim: 'one',
          earlyContact: 'true',
        },
      },
    },
  ],
  details: {
    image: 'https://http2.mlstatic.com/casco-ls2-doble-visor-320-stream-negro-mercado-full-fasmotos-D_NQ_NP_997772-MLA26734523308_012018-O.jpg',
    toptitle: '',
    title: 'Samsung Galaxy S7 32Gb 4g Lte + 12 Meses De Garatía de fabrica - 6 meses',
    subtitle: 'Comprador: Patricio Blanco',
  },
}`;

module.exports = demo;
