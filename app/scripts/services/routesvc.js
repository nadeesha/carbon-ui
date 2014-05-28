'use strict';

angular.module('carbonUiApp')
  .service('RouteSvc', function RouteSvc(API) {
    return {
    	login: API + '/login'
    }
  });
