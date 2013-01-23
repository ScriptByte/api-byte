'use strict';

/**
 * Performs a custom search in the YouTube API Version 3
 *
 * @author ScriptByte on 22/01/2013 at 11:16 PM
 */
apiByteApp.factory('Search', function($timeout, $q, $rootScope, $http) {
  var GAPI = 'AIzaSyC8G6B8zaccTOSQEtkdG9_SvDjYBXiEFqs';

  /**
   * Searches the YouTube using the given query
   *
   * @param query is a search query
   * @param nPageToken is a next page token
   */
  var searchYouTube = function(query, nPageToken) {
    var youTubeDataDeferred = $q.defer();

    var requestOptions = {
      part: 'snippet'
    }

    if(nPageToken) {
      requestOptions.pageToken = nPageToken;
      requestOptions.maxResults = 2;
    } else if(query) {
      requestOptions.q = query;
      requestOptions.maxResults = 5;
    }

    gapi.client.load('youtube', 'v3', function() {
      gapi.client.setApiKey(GAPI);
      var request = gapi.client.youtube.search.list(requestOptions);
      request.execute(function(response) {
        $rootScope.$apply(function() {
          youTubeDataDeferred.resolve(response.result);
        });
      });
    });

    return youTubeDataDeferred.promise;
  };

  /**
   * Public accessible API
   */
  return {
    /**
     * Performs search in YouTube for the given query
     *
     * @param query is a search query
     * @param nPageToken is a next page token
     * @return {*} a promise object
     */
    youTube: function(query, nPageToken) {
      return searchYouTube(query, nPageToken);
    }
  };
});
