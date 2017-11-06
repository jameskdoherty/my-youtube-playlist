/** 
 * @desc Video Service - setup $http service 
 * to retrieve json data for all videos and
 * return specific video item to corresponding link clicked
 */

angular.module('app').service('VideoService', function($http) {
  
  var service = {
    getAllVideos: function() {
      return $http.get('data/videos.json', { cache: true }).then(function(response) {
        return response.data.items;
      })
      .catch(function(response) {
        console.error('Playlist Error', response.status, response.data);
      })
      .finally(function() {
        console.log('Playlist items have loaded successfully');
      });
    },
    
    getVideo: function(id) {
      function videoMatchesParam(videoItem) {
        return videoItem.id === id;
      }
      
      return service.getAllVideos().then(function (videos) {
        return videos.find(videoMatchesParam)
      });
    }
  }
  
  return service;
})