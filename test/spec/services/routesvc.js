'use strict';

describe('Service: Routesvc', function () {

  // load the service's module
  beforeEach(module('carbonUiApp'));

  // instantiate service
  var Routesvc;
  beforeEach(inject(function (_Routesvc_) {
    Routesvc = _Routesvc_;
  }));

  it('should do something', function () {
    expect(!!Routesvc).toBe(true);
  });

});
