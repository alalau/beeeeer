'use strict';

/**
 * @ngdoc function
 * @name beerAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beerAppApp
 */
angular.module('beerApp')
  .controller('BeerDetailsController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('beers/' + $routeParams.beerId + '.json').success(function(data) {
      $scope.beer = data;
    });
}]);