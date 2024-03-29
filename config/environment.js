/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    podModulePrefix: 'frontend/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicyHeader: 'Content-Security-Policy',
    contentSecurityPolicy: {
      'default-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'img-src':     "* 'unsafe-inline' 'unsafe-eval'",
      'frame-src':   "'self' 'unsafe-inline' 'unsafe-eval'",
      'connect-src': "* 'unsafe-inline' 'unsafe-eval'",
      'font-src':    "'self' 'unsafe-inline' 'unsafe-eval'",
      'media-src':   "'self' 'unsafe-inline' 'unsafe-eval'",
      'object-src':  "'self' 'unsafe-inline' 'unsafe-eval'",
      'style-src':   "'self' 'unsafe-inline' 'unsafe-eval'",
      'script-src':  "'self' 'unsafe-inline' 'unsafe-eval'"
    }
  };

  if (environment === 'development') {
    ENV.APP.base_url = 'http://localhost:3000';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.base_url = 'http://production-url.com';
  }

  return ENV;
};
