'use strict';

angular.module('carbonUiApp')
  .controller('LoginCtrl', function ($scope, UserSvc, $state) {
    $scope.login = function () {
    	UserSvc.login($scope.username, $scope.password).then(function (success) {
    		if(success) {
    			$state.go('home');
    		} else {
    			// do error handling here
    		}	
    	});
    };
  });
