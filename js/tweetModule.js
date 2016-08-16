// initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute']);

// tweetApp.directive('customMenu', function(){
// 	return {
// 		restrict: 'E', //E = Element, A = Attribute, C = Class, M = Comment
// 		templateUrl: 'views/menu.html'
// 	}
// });	

tweetApp.config(function($routeProvider){
	// at /, load up home with home controller
	$routeProvider.when('/', { 
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	});
	// at Trump, load up the same template but new controller
	$routeProvider.when('/:searchTerm', { 
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	});
	$routeProvider.when('/:searchTerm*', { 
		templateUrl: 'views/home.html',
		controller: 'tweetController'
	});
	// at Hillary, load up the same template but new controller
	// $routeProvider.when('/hillary', { 
	// 	templateUrl: 'views/home.html',
	// 	controller: 'hillaryController'
	// });
	//default
	// $routeProvider.otherwise('/'); 
});
