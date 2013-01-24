'use strict';

describe('Controller: PlayCtrl', function() {

  // load the controller's module
  beforeEach(module('apiByteApp'));

  var PlayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    PlayCtrl = $controller('PlayCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
