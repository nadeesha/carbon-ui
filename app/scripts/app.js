'use strict';

if (!carbon) {
  throw ('carbon not initialized. Make sure you included carbon.js');
} else {
  if (console && console.log) {
    console.log('Number of carbon modules registered: ' + carbon.getModules().length);
  }
}

var carbonUi = angular
  .module('carbonUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule',
    'angularMoment',
    'ui.notify'
  ].concat(carbon.getModules()));

carbonUi
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
      })

      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });

  })
  .run(function($state, carbonApiProvider) {
    carbonApiProvider.setEndpoint('http://localhost:9763/carbon-api');
    $state.go('home');
  });