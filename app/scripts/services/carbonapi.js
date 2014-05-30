'use strict';

angular.module('carbonUiApp')
  .provider('carbonApiProvider', function($httpProvider, $provide) {

    $provide.factory('jsonHeaderInterceptor', function() {
      return {
        'request': function(config) {
          config.headers['Content-type'] = 'application/json';
          return config;
        }
      };
    });

    $httpProvider.interceptors.push('jsonHeaderInterceptor');

    // holding the access token and it's expiration
    var _accessToken;
    var _accessTokenExpiredOn;
    var _endpoint;

    this.setAccessToken = function(pAccessToken, pAccessTokenExpiredOn) {

      // upon setting the access token, let's tell the $httpProvider
      // that we need that to be appended to all the requests
      _accessToken = pAccessToken;
      _accessTokenExpiredOn = pAccessTokenExpiredOn;

      $provide.factory('authHeaderInterceptor', function() {
        return {
          'request': function(config) {
            config.headers.Authorization = 'Bearer ' + pAccessToken;
            return config;
          }
        };
      });

      $httpProvider.interceptors.push('authHeaderInterceptor');
    };

    this.setEndpoint = function (pEndpoint) {
      _endpoint = pEndpoint;
    };

    this.url = function (url) {
      return _endpoint + url;
    };

    // method for instantiating
    this.$get = function() {
      return this;
    };
  });