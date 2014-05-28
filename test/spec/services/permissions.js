'use strict';

describe('Service: Permissions', function () {

  // load the service's module
  beforeEach(module('carbonUiApp'));

  // instantiate service
  var Permissions;
  beforeEach(inject(function (_Permissions_) {
    Permissions = _Permissions_;
  }));

  it('should do something', function () {
    expect(!!Permissions).toBe(true);
  });

});
