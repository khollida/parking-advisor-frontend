/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
  //Import JS for sidebar
  app.import('vendor/index.js');
  app.import('bower_components/animate.css/animate.min.css');
  app.import('bower_components/normalize-css/normalize.css');
  app.import('bower_components/components-font-awesome/css/font-awesome.min.css');
  app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.eot');
  app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.svg');
  app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.ttf');
  app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.woff');
  app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.woff2');
  app.import('bower_components/components-font-awesome/fonts/FontAwesome.otf');
  app.import('bower_components/jquery-knob/dist/jquery.knob.min.js');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
