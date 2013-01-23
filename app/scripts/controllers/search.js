'use strict';

/**
 * @author Script Bunny on 22/01/2013 at 11:08 PM
 */
apiByteApp.controller('SearchCtrl', function($scope, $routeParams, Search) {


  /**
   * Returns a promise which becomes available in future
   *
   * @param query is a search query
   */
  $scope.performSearch = function(query) {
    Search.youTube(query).then(function(result) {
      $scope.videos = result.items;
      $scope.nextPageToken = result.nextPageToken;
    });
  };

  /**
   * Loads more data when user scrolls down the window
   */
  $scope.loadMore = function() {
    Search.youTube(null, $scope.nextPageToken).then(function(result) {
      $scope.videos.push.apply($scope.videos, result.items);
      $scope.nextPageToken = result.nextPageToken;
    });
  };
});
