tweetApp.controller('trumpController', function($scope, $http, $location, $routeParams){
	$scope.test = 'test tweet for trump controller';
	$scope.tweetArr = tweetArr;

$http({
		method: 'GET',
		url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=trump'
	}).then(
		function successFunction(tweetData){
			$scope.tweetArr = tweetData.data.statuses;
			console.log(tweetData.data.statuses);

		},function failureFunction(tweetData){
			console.log(tweetData);
	});	
	$scope.test = "I am set";

});