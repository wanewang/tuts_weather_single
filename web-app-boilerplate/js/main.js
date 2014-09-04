require.config({
  // paths....
  paths: {
    'jquery': 'libs/jquery-1.11.0.min',
    'underscore': 'libs/underscore-1.7.0',
    'backbone': 'libs/backbone-1.1.2',
    'bootstrap': 'libs/bootstrap'
  },
  // make js to module(jquery have already do that)
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      // backbone has a dependency based on underscore, jquery
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    // bootstrap does not export, it add some function to jquery
    'bootstrap': {
      deps: [
        'jquery'
      ]
    }
  }

});

require([
  'backbone',
  // add custom js
  'app/app',
  'bootstrap'
  ], function (Backbone, App, bootstrap) {
    'use strict';

    App.initialize();
  });
