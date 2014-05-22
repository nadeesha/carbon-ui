'use strict';

if (!carbon) {
  throw('carbon not initialized. Make sure you included carbon.js');
} else {
  console && console.log && console.log('Number of carbon modules registered: ' + carbon.getModules().length);
}

var carbonUi = angular
  .module('carbonUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
  ].concat(carbon.getModules()));

carbonUi.constant('moduleDir', 'carbon_components')
  .config(function($stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        navigationBar: {
          name: 'Home',
          glyphicon: 'home',
          weight: 1000
        }
      });
  })
  .run(function($state) {
    $state.go('home');
  });