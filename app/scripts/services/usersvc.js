'use strict';

angular.module('carbonUiApp')
	.service('userSvc', function userSvc(localStorageService, $http, notificationService, carbonApiProvider) {
		var user = JSON.parse(localStorageService.get('user'));

		this.permissions = [];

		this.login = function(username, password) {
			var credentials = JSON.stringify({
				username: username,
				password: password
			});

			var that = this;

			return $http.post(carbonApiProvider.url('/login'), credentials).then(function(response) {
				// on success
				carbonApiProvider.setAccessToken(response.data.accessToken, response.data.accessTokenExpiredOn);
				that.permissions = response.data.permissions;

				notificationService.success('Successfully logged in');
				return true;
			}, function() {
				// on failure
				notificationService.error('Error logging in');
				return false;
			});
		};

		this.hasPermission = function(permission) {
			if (this.permissions.indexOf(permission) === -1) {
				return false;
			} else {
				return true;
			}
		};

		if (user && moment(user.expiredOn).isAfter(Date.now)) {

			// user is already logged in
			// do something here
		}
	});