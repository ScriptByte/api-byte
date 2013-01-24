'use strict';

/**
 * @author Script Bunny on 22/01/2013 at 11:08 PM
 */
apiByteApp.controller('SearchCtrl', function($scope, $rootScope, $routeParams, $location, Search) {

  $scope.totalVideos = 0;

  /**
   * Returns a promise which becomes available in future
   *
   * @param query is a search query
   */
  $scope.performSearch = function(query) {
    Search.youTube(query).then(function(result) {
      if(query) {
        $scope.videos = result.items;
        $scope.totalVideos = result.pageInfo.totalResults;
        $scope.nextPageToken = result.nextPageToken;
      } else {
        $scope.videos = null;
        $scope.totalVideos = 0;
      }
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
