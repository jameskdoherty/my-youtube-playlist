/** 
 * @desc Home Component - Just the default path 
 * sets up meta description and keywords for SEO purposes
 */

angular.module('app').component('home', {
  templateUrl:  'views/home.html',
             
  controller: function($rootScope) {
    
    $rootScope.title = 'Home';
    $rootScope.metaDescription = 'Home';
    $rootScope.metaKeywords = 'Home page for YouTube video playlist app';
  }
})