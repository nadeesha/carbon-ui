'use strict';

describe('Service: Usersvc', function () {

  // load the service's module
  beforeEach(module('carbonUiApp'));

  // instantiate service
  var Usersvc;
  beforeEach(inject(function (_Usersvc_) {
    Usersvc = _Usersvc_;
  }));

  it('should do something', function () {
    expect(!!Usersvc).toBe(true);
  });

});
