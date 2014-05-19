'use strict';

angular.module('carbonUiApp')
  .service('Navigator', function Navigator() {
  	var navigation = [];

    return {
    	initilize: function (states) {
    		state.forEach(function (state) {
    			if(state.navigationBar) {
    				navigation.push(state.navigationBar.name, state.name);
    			}
    		})
    	},
    	addNavigation: function () {
    		// body...
    	}
    }
  });
