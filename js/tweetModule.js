// initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute']);

// tweetApp.directive('customMenu', function(){
// 	return {
// 		restrict: 'E', //E = Element, A = Attribute, C = Class, M = Comment
// 		templateUrl: 'views/menu.html'
// 	}
// });	

// tweetApp.config(function($routeProvider){
// 	$routeProvider.when('/', { // at /, load up home with home controller
// 		templateUrl: 'views/home.html',
// 		controller: 'homeController'
// 	});
// 	$routeProvider.when('/trump', { // at Trump, load up the same template but new controller
// 		templateUrl: 'views/home.html',
// 		controller: 'trumpController'
// 	});
// 	$routeProvider.when('/hillary', { // at Hillary, load up the same template but new controller
// 		templateUrl: 'views/home.html',
// 		controller: 'hillaryController'
// 	});
// 	$routeProvider.otherwise('/'); //default
// });
