'use strict';

/**
 * @ngdoc overview
 * @name lgbtsafeSpacesWebappApp
 * @description
 * # lgbtsafeSpacesWebappApp
 *
 * Main module of the application.
 */
angular
  .module('lgbtsafeSpacesWebappApp', [
    'ngRoute',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/listing/:id', {
        templateUrl: 'views/listing.html',
        controller: 'ListingCtrl',
        controllerAs: "listing"
      })
      .otherwise({
        redirectTo: '/'
      });
  });
