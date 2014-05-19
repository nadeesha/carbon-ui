'use strict';

angular.module('carbonUiApp')
	.directive('navigation', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/navigator.html',
			controller: function($scope, $state) {
				$scope.active = $state.current;

				$scope.navigatableStates = [];

				$state.get().forEach(function (state) {
					if(state.navigationBar) {
						$scope.navigatableStates.push(state);
					}
				});

				$scope.navigateTo = function(state) {
					$scope.active = state;
					$state.go(state.name);
				};
			}
		};
	});