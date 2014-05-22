'use strict';

var carbon = (function () {
	var modules = [];

	var registerModule = function (name) {
		modules.push(name);
	}

	var getModules = function () {
		return modules;
	}

	return {
		registerModule: registerModule,
		getModules: getModules
	}
})();