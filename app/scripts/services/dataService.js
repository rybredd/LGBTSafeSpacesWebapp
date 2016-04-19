angular.module('lgbtsafeSpacesWebappApp')
.service('dataService', ['$http', '$rootScope', function($http, $rootScope) {

	// makes a GET request to the REST client to get all locations 
	this.getLocationList = function() {

	};

	// makes a GET request to the REST client to get all locations within
	// a certain radius
	this.getRadius = function(radius) {

	};

	// returns the current listing
	this.getListing = function() {
		return $rootScope.current;
	}
}]);