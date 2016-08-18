tweetApp.controller('hillaryController', function($scope, $http, $location, $routeParams){
	$scope.message = "hillary controller working";
	$scope.tweetArr = tweetArr;

$http({
		method: 'GET',
		url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=hillary'
	}).then(
		function successFunction(tweetData){
			$scope.tweetArr = tweetData.data.statuses;
			console.log(tweetData.data.statuses);

		},function failureFunction(tweetData){
			console.log(tweetData);
	});	
	$scope.test = "I am set";

});