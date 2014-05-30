'use strict';

angular.module('carbonUiApp')
	.directive('navigation', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/navigator.html',
			controller: function($scope, $state, userSvc) {
				$scope.active = $state.current;

				// update states on permissions change of the user
				$scope.$watch(function() {
					return userSvc.permissions;
				}, function() {
					refreshStates();
				});

				function refreshStates() {
					$scope.navigatableStates = [];
					
					$state.get().forEach(function(state) {
						state.visible = true;

						if (state.navigationBar) {
							if (state.permissions && state.permissions.length > 0) {
								for (var i = state.permissions.length - 1; i >= 0; i--) {
									if (!userSvc.hasPermission(state.permissions[i])) {
										state.visible = false;
										break;
									}
								}
							}

							$scope.navigatableStates.push(state);
						}
					});
				}

				$scope.navigateTo = function(state) {
					$scope.active = state;
					$state.go(state.name);
				};
			}
		};
	});