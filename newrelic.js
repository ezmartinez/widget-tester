/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */

const { APPLICATION, SCOPE, NODE_ENV } = process.env;

exports.config = {
  /**
   * Array of application names.
   */
  app_name: [`${APPLICATION}-${SCOPE}`],
  /**
   * New Relic license key (MELI key)
   */
  license_key: '9a84196d7cc629ddd9fb15d2ca99a2f3eb12048f',
  /**
   * Prevents the agent from starting up and connecting to New Relic's servers in
   * environments different to `production`
   */
  agent_enabled: NODE_ENV === 'production',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info',
  },
  error_collector: {
    enabled: true,
  },
  rules: {
    ignore: [
      '^/ping',
    ],
  },
};
