'use strict';

describe('Service: Navigator', function () {

  // load the service's module
  beforeEach(module('carbonUiApp'));

  // instantiate service
  var Navigator;
  beforeEach(inject(function (_Navigator_) {
    Navigator = _Navigator_;
  }));

  it('should do something', function () {
    expect(!!Navigator).toBe(true);
  });

});
