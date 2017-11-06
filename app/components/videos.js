/** 
 * @desc Videos List - component for list view of videos 
 * each video item has a thumbnail image and associated description
 * updates title and meta data
 */
angular.module('app').component('videos', {
  bindings: { videos: '<' },
  
  templateUrl: 'views/videos.html',
  controller: function($rootScope) {
  	
    $rootScope.title = 'Videos List';
    $rootScope.metaDescription = 'List of videos from the YouTube service';
  }
});




