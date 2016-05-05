'use strict';

angular.module('lgbtsafeSpacesWebappApp')
.controller('ListingCtrl', ['$scope', '$rootScope', '$location', 'dataService', '$routeParams', function($scope, $rootScope, $location, dataService, $routeParams) {
	$scope.page = dataService.getListing($routeParams.id);
	$scope.reviews = dataService.getReviews($routeParams.id);
	$scope.offers = dataService.getOffers($scope.page);

	$scope.review = function() {
		$location.path("/write/" + $routeParams.id);
	}

	$scope.return = function() {
		$location.path("/");
	}

	$scope.range = function(int) {
		return new Array(int);
	}
}]);
