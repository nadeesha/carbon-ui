'use strict';

angular
  .module('carbonUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'carbon.castamere'
  ])
  .constant('moduleDir', 'carbon_components')
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