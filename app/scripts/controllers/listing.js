'use strict';

angular.module('lgbtsafeSpacesWebappApp')
.controller('ListingCtrl', ['$scope', '$rootScope', '$location', 'dataService', function($scope, $rootScope, $location, dataService) {
	$scope.page = dataService.getListing();

	$scope.return = function() {
		$location.path("/");
	}
}]);
