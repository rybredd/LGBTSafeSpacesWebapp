angular.module('lgbtsafeSpacesWebappApp')
.service('dataService', ['$http', '$rootScope', '$q', function($http, $rootScope, $q) {
	var listings = [
      {
        "id": 1,
        "name": "UMD CSIC BUILDING",
        "lat": 38.990703,
        "lng": -76.937270,
        "verifiedSafeSpace": false,
        "genderNeutralBathroom": false,
        "crisisCenter": false,
        "shelter": false,
        "friendlyBusiness":true,
        "stars": 3
      },
      {
        "id": 2,
        "name": "Glenn L. Martin BUILDING",
        "lat": 38.988858,
        "lng": -76.938072,
        "verifiedSafeSpace": false,
        "genderNeutralBathroom": true,
        "crisisCenter": false,
        "shelter": false,
        "friendlyBusiness":true,
        "stars": 3
      },
      {
        "id": 3,
        "name": "Hornbake Library",
        "lat": 38.988134,
        "lng": -76.941564,
        "verifiedSafeSpace": true,
        "genderNeutralBathroom": true,
        "crisisCenter": false,
        "shelter": false,
        "friendlyBusiness":true,
        "stars": 5
      },
      {
        "id": 4,
        "name": "Stamp Student Union",
        "lat": 38.988111,
        "lng": -76.944729,
        "verifiedSafeSpace": true,
        "genderNeutralBathroom": true,
        "crisisCenter": false,
        "shelter": false,
        "friendlyBusiness":true,
        "stars": 5
      },
      {
        "id": 5,
        "name": "McKeldin Library",
        "lat": 38.985968,
        "lng": -76.945108,
        "verifiedSafeSpace": true,
        "genderNeutralBathroom": true,
        "crisisCenter": false,
        "shelter": false,
        "friendlyBusiness":true,
        "stars": 5
      },
      {
        "id": 6,
        "name": "Tawes Fine Arts Building",
        "lat": 38.986010,
        "lng": -76.948337,
        "verifiedSafeSpace": false,
        "genderNeutralBathroom": false,
        "crisisCenter": false,
        "shelter": false,
        "friendlyBusiness":true,
        "stars": 5
      },
      {
        "id": 7,
        "name": "Applebee's College Park",
        "lat": 38.979058,
        "lng":  -76.938312,
        "verifiedSafeSpace": true,
        "genderNeutralBathroom": false,
        "crisisCenter": false,
        "shelter": false,
        "friendlyBusiness":true,
        "stars": 5
      },
      {
        "id": 8,
        "name": "Starbucks College Park ",
        "lat": 38.980473,
        "lng":  -76.939097,
        "verifiedSafeSpace": false,
        "genderNeutralBathroom": true,
        "crisisCenter": false,
        "shelter": false,
        "friendlyBusiness":true,
        "stars": 5
      },
      {
        "id": 9,
        "name": "Lakelands Park Middle School",
        "lat": 39.115785,
        "lng": -77.232394,
        "verifiedSafeSpace": false,
        "genderNeutralBathroom": false,
        "crisisCenter": false,
        "shelter": false,
        "friendlyBusiness":true,
        "stars": 5
      },
      {
        "id": 10,
        "name": "Kentlands Starbucks",
        "lat": 39.122166,
        "lng": -77.235275,
        "verifiedSafeSpace": true,
        "genderNeutralBathroom": true,
        "crisisCenter": false,
        "shelter": false,
        "friendlyBusiness":true,
        "stars": 5
      }
    ];

    var reviews = 
    [
    	{
    		"id": 2,
    		"title": "Kind of crappy",
    		"stars": 2,
    		"content": "I wasn't super pleased with this location's bathroom. Why is it so dirty??"
    	}, {
    		"id": 2,
    		"title": "Decent...",
    		"stars": 3,
    		"content": "It's a decent place to go if you're in need. Definitely better places on campus though!"
    	}
    ]

    // gets the reviews for a location with id @id
	var filterReviews = function(listingID) {
		var list = [];

		for (var i in reviews) {
			reviews[i].id === listingID ? list.push(reviews[i]) : list.push();
		}
		console.log(list);
		return list;
	};

    this.getReviews = function(id) {
    	return filterReviews(parseInt(id));
    }

	// makes a GET request to the REST client to get all locations 
	this.getListings = function() {
		return $q(function(resolve, reject) {
			resolve(listings);
		});
	};

	// gets all ameneties for a certain location in an array
	this.getOffers = function(listing) {
		var offers = [];

		listing.crisisCenter ? offers.push("user") : offers.push();
		listing.genderNeutralBathroom ? offers.push("transgender-alt") : offers.push();
		listing.shelter ? offers.push("home") : offers.push();
		listing.verifiedSafeSpace ? offers.push("flag") : offers.push();

		return offers;
	}

	// makes a GET request to the REST client to get all locations within
	// a certain radius
	this.getRadius = function(radius) {

	};

	// returns the current listing
	this.getListing = function(id) {
		for (var i in listings) {
			if (listings[i].id == id) {
				return listings[i];
			}
		}
	}
}]);