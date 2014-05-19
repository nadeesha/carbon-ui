'use strict';

angular.module('carbonCastamere', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider.state('castamereHome', {
        	url: '/castamere',
            templateUrl: 'carbon_components/castamere/main.html',
            navigationBar: {
            	name: 'Catamere',
            	glyphicon: 'asterisk',
            	weight: 0
            }
        });
    });