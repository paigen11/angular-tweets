tweetApp.controller('tweetController', function($scope, $http, $location, $routeParams){
	$scope.message = "I am working";
	$scope.tweetArr = tweetArr;

	var randoUrl = "http://digitalcrafts.com/students/twitter/hashtag.php?user=true";
	var trumpUrl = "http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=trump";
	var clintonUrl = "http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=clinton";
	var twitterUrl = "http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash=";

	// console.log($scope.test);

	// console.log($location.hash());
	// console.log($routeParams);

	if($routeParams.searchTerm){
		var searchTerm = $routeParams.searchTerm;
	}else{
		randoUrl;
	}

	$http({
		method: 'GET',
		url: 'http://digitalcrafts.com/students/twitter/hashtag.php?user=true&hash='+searchTerm
	}).then(
		function successFunction(tweetData){
			$scope.tweetArr = tweetData.data.statuses;
			console.log(tweetData.data.statuses);

		},function failureFunction(tweetData){
			console.log(tweetData);
	});	
	$scope.test = "I am set";

});