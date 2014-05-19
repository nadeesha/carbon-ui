'use strict';

angular.module('carbonUiApp')
  .service('Components', function Components() {
  	var componentList = [{
  		title: 'The north remembers',
  		name: 'north',
  		'default': true
  	}];

  	return {
  		all: function () {
  			return componentList;
  		}
  	};
  });
