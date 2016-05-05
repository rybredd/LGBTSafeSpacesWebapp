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
      .when('/safety', {
        templateUrl: 'views/safetyinfo.html'
      })
      .when('/write/:id', {
        templateUrl: 'views/review.html',
        controller: 'ReviewCtrl',
        controllerAs: "review"
      })
      .when('/submit', {
        templateUrl: 'views/submit.html',
        controller: 'SubmitCtrl',
        controllerAs: "submit"
      })
      .otherwise({
        redirectTo: '/'
      });
  });
