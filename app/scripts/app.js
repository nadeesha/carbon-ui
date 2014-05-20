'use strict';

angular
  .module('carbonUiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'carbon.castamere',
    'ui.router',
    'ui.bootstrap'
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