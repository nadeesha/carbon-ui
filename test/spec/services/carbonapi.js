'use strict';

describe('Service: carbonapi', function () {

  // load the service's module
  beforeEach(module('carbonUiApp'));

  // instantiate service
  var carbonapi;
  beforeEach(inject(function (_carbonapi_) {
    carbonapi = _carbonapi_;
  }));

  it('should do something', function () {
    expect(!!carbonapi).toBe(true);
  });

});
