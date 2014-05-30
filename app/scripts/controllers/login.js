'use strict';

angular.module('carbonUiApp')
  .controller('LoginCtrl', function ($scope, userSvc, $state) {
    $scope.login = function () {
    	userSvc.login($scope.username, $scope.password).then(function (success) {
    		if(success) {
    			$state.go('home');
    		} else {
    			// do error handling here
    		}	
    	});
    };
  });
