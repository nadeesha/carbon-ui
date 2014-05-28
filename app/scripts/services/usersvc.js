'use strict';

angular.module('carbonUiApp')
	.service('UserSvc', function UserSvc(localStorageService, $http, notificationService, carbonApiProvider) {
		var user = localStorageService.get('user');

		this.login = function(username, password) {
			var credentials = JSON.stringify({
				username: username,
				password: password
			});

			return $http.post(carbonApiProvider.url('/login'), credentials).then(function(data) {

				// on success

				carbonApiProvider.setAccessToken(data.accessToken, data.accessTokenExpiredOn);
				notificationService.success('Successfully logged in');
				return true;
			}, function() {

				// on failure

				notificationService.error('Error logging in');
				return false;
			});
		};

		if (user && moment(user.expiredOn).isAfter(Date.now)) {

			// user is already logged in
			// do something here

		}
	});