'use strict';

angular.module('lgbtsafeSpacesWebappApp')
.controller('ReviewCtrl', ['$scope', '$rootScope', '$location', 'dataService', '$routeParams', function($scope, $rootScope, $location, dataService, $routeParams) {
	$scope.page = dataService.getListing($routeParams.id);

	$scope.review = {
		"title": "",
		"stars": 0,
		"content": ""
	}

	$scope.stars = [
		{
			"selected": false
		}, 
		{
			"selected": false
		}, 
		{
			"selected": false
		}, 
		{
			"selected": false
		}, 
		{
			"selected": false
		}
	];

	$scope.select = function(index) {
		// deselect all
		for (var j in $scope.stars) {
			$scope.stars[j].selected = false;
		}

		// select only stars that we want
		for (var i = 0; i <= index; i++) {
			$scope.stars[i].selected = true;
		}

		// set number of stars given
		$scope.review.stars = index+1;
	}

	$scope.submitReview = function() {
		dataService.addReview($scope.review);
		alert("Thanks for your review!");
		$location.path("/listing/" + $routeParams.id);
	}

	$scope.return = function() {
		$location.path("/");
	}

	$scope.add = function() {
		$location.path("/submit");
	}

	$scope.range = function(int) {
		return new Array(int);
	}
}]);
