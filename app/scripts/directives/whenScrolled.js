'use strict';

/**
 * Directive for infinite scroll on a web page
 *
 * @author ScriptByte on 23/01/2013 at 12:33 AM
 */
apiByteApp.directive('whenScrolled', function() {
  return {
    link: function postLink(scope, element, attrs) {
      var raw = element[0];

      window.onscroll = function() {
        if(window.innerHeight + document.body.scrollTop >= document.body.offsetHeight) {
          scope.$apply(attrs.whenScrolled);
        }
      };
    }
  };
});
