'use strict';

/**
 * @ngdoc overview
 * @name beerAppApp
 * @description
 * # beerAppApp
 *
 * Main module of the application.
 */
angular.module('beerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/beers', {
        templateUrl: 'views/beers.html',
        controller: 'BeerListController'
      })
      .when('/beers/:beerId', {
        templateUrl: 'views/details.html',
        controller: 'BeerDetailsController'
      })
      .otherwise({
        redirectTo: '/beers'
      });
  });
