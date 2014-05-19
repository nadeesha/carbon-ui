'use strict';

describe('Service: Components', function () {

  // load the service's module
  beforeEach(module('carbonUiApp'));

  // instantiate service
  var Components;
  beforeEach(inject(function (_Components_) {
    Components = _Components_;
  }));

  it('should do something', function () {
    expect(!!Components).toBe(true);
  });

});
