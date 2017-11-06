/** 
 * @desc Sample YouTube video playlist app
 * uses components to setup controllers, along with video service
 * to retrieve json data for all videos
 * @author James Doherty jameskdoherty009@gmail.com
 * @required have node running and type 'gulp' or 'gulp serve' to get this going
 */

'use strict';

var myApp = angular.module('app', ['ui.router', 'ngAnimate']);

myApp.config(function($stateProvider, $locationProvider) {

    /**
     * @desc array of state definitions - videos state gets all videos, videoItem gets selected video
     * @param number $stateParams - holds the id for each video
     * @return promise - returns specific video item
     */
    var states = [{
        name: 'videos',
        url: '/',
        component: 'videos',
        resolve: {
            videos: function(VideoService) {
                return VideoService.getAllVideos();
            }
        }
    }, {
        name: 'videos.videoItem',
        url: '{videoId}',
        component: 'videoItem',
        resolve: {
            videoItem: function(videos, $stateParams) {
                return videos.find(function(videoItem) {
                    return videoItem.id === $stateParams.videoId;
                });
            }
        }
    }, {
        name: 'home',
        url: '/',
        component: 'home'
    }]

    // Loop over the state definitions and register them
    states.forEach(function(state) {
        $stateProvider.state(state);
    });

    // set html5Mode to true allow regular URL paths
    $locationProvider.html5Mode(true);
});

myApp.run(function($http, ng1UIRouter, $rootScope, $location, $window) {
    
    // Use $http service to retrieve JSON from YouTube Feed API
    $http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw', { cache: true });


});