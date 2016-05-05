'use strict';

angular.module('lgbtsafeSpacesWebappApp')
.controller('SubmitCtrl', ['$scope', '$rootScope', '$location', 'dataService', '$routeParams', function($scope, $rootScope, $location, dataService, $routeParams) {
	$scope.page = {
		"id": 100,
        "name": null,
        "lat": null,
        "lng": null,
        "crisisCenter": false,
        "genderNeutralBathroom": false,
        "shelter": false,
        "verifiedSafeSpace": false,
        "friendlyBusiness":true,
        "stars": 0
	}; // blank page as model

	$scope.submitLocation = function() {
		navigator.geolocation.getCurrentPosition(function(position) {
			$scope.page.lat = position.coords.latitude;
			$scope.page.lng = position.coords.longitude;
		});

		setTimeout(function() {
			console.log($scope.page);	
			alert("You submitted " + $scope.page.name + " at position [" +
			$scope.page.lat + ", " + $scope.page.lng + "]");
		},300);
	}

	$scope.return = function() {
		$location.path("/");
	}

	$scope.range = function(int) {
		return new Array(int);
	}
}]);
