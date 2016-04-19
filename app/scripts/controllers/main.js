'use strict';

/**
 * @ngdoc function
 * @name lgbtsafeSpacesWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lgbtsafeSpacesWebappApp
 */
angular.module('lgbtsafeSpacesWebappApp')
  .controller('MainCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
    var updateList = function(filter) {
        for (var i in $scope.listings) {
            var listing = $scope.listings[i];
            if (listing.icon === filter) {
                listing.display = !listing.display;
            }
        }
    }

    $rootScope.filters = [
        {
            name: "user", 
            selected: true
        },
        {
            name: "transgender-alt", 
            selected: true
        },
        {
            name: "home", 
            selected: true
        },
        {
            name: "flag",
            selected: true
        }
    ];

    $scope.select = function(index) {
        if ($rootScope.filters[index].selected) {
            $rootScope.filters[index].selected = false;
        } else {
            $rootScope.filters[index].selected = true;
        }
        
        // update listings to show only filtered ones
        updateList($rootScope.filters[index].name);
    }

    $scope.listings = [
        {
            name: 'CrisisCenter1',
            icon: "user",
            id: 1,
            display: true,
            position: "[40.71, -74.21]",
            stars: 5
        },
        {
            name: 'Bathroom1',
            icon: "transgender-alt",
            id: 2,
            display: true,
            position: "[40.72, -74.14]",
            stars: 2
        },
        {
            name: 'Bathroom2',
            icon: "transgender-alt",
            id: 3,
            display: true,
            position: "[40.76, -74.20]",
            stars: 4
        },
        {
            name: 'CrisisCenter2',
            icon: "user",
            id: 4,
            display: true,
            position: "[40.72, -74.18]",
            stars: 1
        },
        {
            name: 'SafeSpace1',
            icon: "flag",
            id: 5,
            display: true,
            position: "[40.80, -74.12]",
            stars: 4
        },
        {
            name: "SafeSpace2",
            icon: "flag",
            id: 6,
            display: true,
            position: "[40.62, -74.20]",
            stars: 3
        }
    ];

    $scope.view = function(listing) {
        $location.path("/listing/" + listing.id);
    	$rootScope.current = listing;
    }
  }]);
