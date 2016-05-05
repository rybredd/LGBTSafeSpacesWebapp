'use strict';

/**
 * @ngdoc function
 * @name lgbtsafeSpacesWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lgbtsafeSpacesWebappApp
 */
angular.module('lgbtsafeSpacesWebappApp')
  .controller('MainCtrl', ['$scope', '$location', '$rootScope', 'NgMap', 'dataService', function($scope, $location, $rootScope, NgMap, dataService) {
    var updateList = function(filter) {
        for (var i in $scope.listings) {
            var listing = $scope.listings[i];
            if (listing.icon === filter) {
                listing.display = !listing.display;
            }
        }
    }

    NgMap.getMap().then(function(map) {
        console.log('map', map);
        $scope.map = map;
    });

    $scope.range = function(int) {
        return new Array(int);
    }

    $rootScope.filters = [
        {
            name: "user", 
            selected: true,
            label: "Crisis Centers"
        },
        {
            name: "transgender-alt", 
            selected: true,
            label: "Bathrooms"
        },
        {
            name: "home", 
            selected: true,
            label: "Shelters"
        },
        {
            name: "flag",
            selected: true,
            label: "Safe Spaces"
        }
    ];

    $scope.display = function (listing) {
        return (listing.verifiedSafeSpace === true && $rootScope.filters[3].selected) ||
                (listing.genderNeutralBathroom === true && $rootScope.filters[1].selected) ||
                (listing.crisisCenter === true && $rootScope.filters[0].selected) ||
                    (listing.shelter === true && $rootScope.filters[1].selected);
    }

    $scope.selected = {};

    $scope.select = function(index) {
        $rootScope.filters[index].selected = !$rootScope.filters[index].selected;

        // update listings to show only filtered ones
        // updateList($rootScope.filters[index].name);
    }

    dataService.getListings()
    .then(function(data) {
        $scope.listings2 = data;
    }, function(error) {
        $scope.listings2 = [];
    });

    
    $scope.listings2 = []; 

    $scope.view = function(listing) {
        $location.path("/listing/" + listing.id);
    	$rootScope.current = listing;
    }

    $scope.submitLocation = function() {
        $location.path("/submit");
    }

    $scope.safety = function() {
        $location.path("/safety");
    }

    $scope.showDetails = function(event, listing) {
        $scope.selected = listing;
        $scope.map.showInfoWindow("info-window", this);
    };

    $scope.getOffers = function(listing) {
        return dataService.getOffers(listing);
    }
  }]);
