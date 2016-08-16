// initialize the app
var tweetApp = angular.module('tweetApp', ['ngRoute']);

tweetApp.directive('customMenu', function(){
	return {
		restrict: 'E', //E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'views/menu.html'
	}
});	

tweetApp.config(function($routeProvider){
	$routeProvider.when('/', { // at /, load up home with home controller
		templateUrl: 'views/home.html',
		controller: 'homeController'
	});
	$routeProvider.when('/trump', { // at Trump, load up the same template but new controller
		templateUrl: 'views/home.html',
		controller: 'trumpController'
	});
	$routeProvider.when('/hillary', { // at Hillary, load up the same template but new controller
		templateUrl: 'views/home.html',
		controller: 'hillaryController'
	});
	$routeProvider.otherwise('/'); //default
});

	
function Tweet(twitterHandle, userPicture, tweet, time){
	this.twitterHandle = twitterHandle;
	this.userPicture = userPicture;
	this.tweet = tweet;
	this.time = time;
}

var tweetArr = [];

var newTweet1 = new Tweet("@pniedri", "https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500", "this is a test", "Mon Aug 15" );
tweetArr.push(newTweet1);
var newTweet2 = new Tweet("@pniedri", "https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500", "this is a test", "Mon Aug 15" );
tweetArr.push(newTweet2);
var newTweet3 = new Tweet("@pniedri", "https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500", "this is a test", "Mon Aug 15" );
tweetArr.push(newTweet3);
var newTweet4 = new Tweet("@pniedri", "https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500", "this is a test", "Mon Aug 15" );
tweetArr.push(newTweet4);
var newTweet5 = new Tweet("@pniedri", "https://pbs.twimg.com/profile_banners/30318720/1398951622/1500x500", "this is a test", "Mon Aug 15" );
tweetArr.push(newTweet5);
