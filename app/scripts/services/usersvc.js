'use strict';

angular.module('carbonUiApp')
	.service('UserSvc', function UserSvc(localStorageService, $http, notificationService, RouteSvc, auth, API) {
		var user = localStorageService.get('user');
		var loggedIn = false;

		var login = function(username, password) {
			var credentials = JSON.stringify({
				username: username,
				password: password
			});

			return $http.post(RouteSvc.login, credentials).then(function(data) {
				auth.accessToken = data.accessToken;
				auth.accessTokenExpiredOn = data.accessTokenExpiredOn;
				notificationService.success('Successfully logged in');
				loggedIn = true;
				return true;
			}, function() {
				notificationService.error('Error logging in');
				return false;
			});
		};

		if (user) {
			loggedIn = moment(user.expiredOn).isAfter(Date.now);
		}

		return {
			login: login,
		};
	});