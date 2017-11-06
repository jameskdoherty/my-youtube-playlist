/** 
 * @desc Video Detail - component for detail view of video selected 
 * uses sce service to only render trusted values for iframe
 * updates title and meta data
 */

angular.module('app').component('videoItem', {
    bindings: { videoItem: '<' },
    templateUrl: 'views/videoItem.html' ,
    controller: function($rootScope, $scope, $stateParams, VideoService, $sce) {
    	
        console.log("the Item ID: " + $stateParams.videoId);

    	VideoService.getVideo($stateParams.videoId).then(function(resolveData){
    			console.log("Title: "+resolveData.snippet.title);
                console.log("VideoId: "+resolveData.snippet.resourceId.videoId);
    			
                // updates title in browser tab and description for SEO
                $rootScope.title = resolveData.snippet.title;
    			$rootScope.metaDescription = 'Currently Playing:' + resolveData.snippet.channelTitle + ":" + resolveData.snippet.title;

                // setup trusted render value for iframe received from YouTube embed
                $scope.iFrameSrc = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+resolveData.snippet.resourceId.videoId+"?autoplay=1&origin=http://example.com");  
    	});
    }
});



