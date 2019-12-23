# Widget Tester

> Environment to test the help widget.


## Environment setup

 - Install [Node.js](https://nodejs.org/)
   - Recommended method is by using [NVM](https://github.com/creationix/nvm)
   - Recommended Node.js version is the [active LTS](https://github.com/nodejs/LTS#lts-schedule1)
 - Update `npm` to the latest version by running `npm i -g npm@latest`
 - **While staying connected to VPN**, run `npm install` to install the project dependencies
 - For the e2e tests install locally selenium, chromedriver and geckodriver by running `npm run install-selenium`
 - Edit your `/etc/hosts` file by adding virtual hosts required for the app running:

*These are just examples, please indicate the real list of domains that is used in project*

```
    127.0.0.1 dev.mercadolibre.com.ar dev.mercadolibre.com.mx dev.mercadolibre.com.co
    127.0.0.1 dev.mercadopago.com.ar
    127.0.0.1 dev.mercadolivre.com.br
    # In case you run the project by `fury run` you should add also these ones
    192.168.99.100 dev.mercadolibre.com.ar dev.mercadolibre.com.mx dev.mercadolibre.com.co
    192.168.99.100 dev.mercadopago.com.ar
    192.168.99.100 dev.mercadolivre.com.br
```

- You may find convenient editing your `.bash_profile` to [auto pick the Node version](https://github.com/mercadolibre/frontend/wiki/Auto-Picking-Node-version) of each project.


## Development

### 1) Build the assets:

```
npm run build
```

*Alternatively you may use the watcher for automatic assets rebuilding: `npm run watch`*

### 2) Run the app:

```
npm run start-dev
```

### 3) Navigate to:
```
https://dev.mercadolibre.com.ar:8443/
```

### 4) Fix HTTPS connection warnings:

The SSL certificate used in the app is self-signed, so you need to add an exception
 for it in your browser. To do it in Chrome, just follow these steps:

- Click on "ADVANCED".
- Click on "Proceed to dev.mercadolibre.com.ar (unsafe)".

**Note**: if your app should run over HTTP please remove `NODE_HTTPS=true` form the npm scripts.
```json
"start-dev": "NODE_ENV=development nodemon ./index.js"
```

## License

© 2019 Mercado Libre
