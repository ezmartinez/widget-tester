FROM hub.furycloud.io/mercadolibre/nordic:10

ADD ./commands/hosts_config.sh /commands/hosts_config.sh

# To enable the code coverage reports please uncomment the next line and provide the real token from http://codecov.io/gh/mercadolibre/
# ENV CODECOV_TOKEN=""
