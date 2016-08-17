tweetApp.controller('homeController', function($scope, $http, $location, $mdDialog, $mdMedia){
	$scope.message = 'test tweet for home controller';
	$scope.homePage = true;
	$scope.$watch(function(){
		return $location.path();
	}, 
	function(newPath){
		$scope.trump = '';
		$scope.hillary = '';
		$scope.home = '';
		$scope.search = '';
		console.log("The path changed. It's now " + newPath);	
		if(newPath == '/trump'){
			$scope.trump = 'active';
		}else if(newPath == '/hillary'){
			$scope.hillary = 'active';
		}else if(newPath == '/'){
			$scope.home = 'active';
		}else if(newPath == '/search'){
			$scope.search = 'active;'
		}
	}
	);

	 $scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('Who would you like to see? Trump? Hillary? Or something else in the Twitterverse?')
      .textContent('They never cease to amaze.')
      .placeholder('Search')
      .ariaLabel('Search')
      .targetEvent(ev)
      .ok('Go!')
      .cancel('Nah, there\'s too much crazy in my world already.');
    $mdDialog.show(confirm).then(function(result) {
      $location.path(result);
    }, function() {
      $scope.status = 'No worries, we totally understand';
    });
  };

});