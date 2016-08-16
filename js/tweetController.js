tweetApp.controller('tweetController', function($scope, $http, $location, $routeParams){
	$scope.message = "I am working";
	$scope.tweetArr = tweetArr;

	// console.log($location.hash());
	console.log($routeParams);

	if($routeParams.searchTerm){
		var searchTerm = $routeParams.searchTerm;
	}else{
		var searchTerm = 'trump';
	}

	var randoUrl = "http://digitalcrafts.com/students/twitter/hashtag.php?user=true";
	var trumpUrl = "http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=trump";
	var clintonUrl = "http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=clinton";
	var twitterUrl = "http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=";

	$http({
			method: "GET",
			url: twitterUrl + searchTerm
		}).then(
			function successFunction(tweetData){
				$scope.tweetArr = tweetData.data.statuses;
				console.log(tweetData.data.statuses);
			}, 
			function failureFunction(tweetData){
				console.log(tweetData);
		});

	// //loads up some random tweets for the user upon arrival at the page
	// $http({
	// 		method: "GET",
	// 		url: randoUrl	
	// 	}).then(
	// 		function successFunction(tweetData){
	// 			$scope.tweetArr = tweetData.data.statuses;
	// 			console.log(tweetData.data.statuses);
	// 		}, 
	// 		function failureFunction(tweetData){
	// 			console.log(tweetData);
	// 	});

	// // displays Trump related tweets
	// $scope.trumpClick = function(){
	// 	$http({
	// 		method: "GET",
	// 		url: trumpUrl
	// 	}).then(
	// 		function successFunction(tweetData){
	// 			$scope.tweetArr = tweetData.data.statuses;
	// 			console.log(tweetData.data.statuses);
	// 		}, 
	// 		function failureFunction(tweetData){
	// 			console.log(tweetData);
	// 	});
	// }	

	// //displays Hillary related tweets
	// $scope.hillaryClick = function(){
	// 	$http({
	// 		method: "GET",
	// 		url: clintonUrl
	// 	}).then(
	// 		function successFunction(tweetData){
	// 			$scope.tweetArr = tweetData.data.statuses;
	// 			console.log(tweetData.data.statuses);
	// 		}, 
	// 		function failureFunction(tweetData){
	// 			console.log(tweetData);
	// 	});
	// }	

	// //displays any hashtag users search for related tweets
	// $scope.getNewTweets = function(){
	// 	$http({
	// 		method: "GET",
	// 		url: twitterUrl + $scope.searchbar
	// 	}).then(
	// 		function successFunction(tweetData){
	// 			$scope.tweetArr = tweetData.data.statuses;
	// 			console.log(tweetData.data.statuses);
	// 		}, 
	// 		function failureFunction(tweetData){
	// 			console.log(tweetData);
	// 	});
	// }
});