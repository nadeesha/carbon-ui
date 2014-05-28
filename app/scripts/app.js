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
  .value('auth', {
    accessToken: null,
    accessTokenExpiredOn: null
  })
  .constant('API', 'http://localhost:9763/carbon-api')
  .config(function($stateProvider, $provide, $httpProvider) {
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

    $provide.factory('defaultInterceptor', function(auth) {
      return {
        'request': function(config) {
          if(auth.accessToken) {
            config.headers.Authorization = 'Bearer ' + auth.accessToken;
            config.headers['Content-type'] = 'application/json';
          }

          return config;
        }
      };
    });

    $httpProvider.interceptors.push('defaultInterceptor');
  })
  .run(function($state) {
    $state.go('home');
  });