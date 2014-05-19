'use strict';

angular
  .module('carbonUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'carbonCastamere',
    'ui.router',
    'ui.bootstrap'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
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
  })