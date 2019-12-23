class Page {
  open(path) {
    browser.url(`https://dev.mercadolibre.com.ar:8443/${path}`);
  }
}

module.exports = Page;