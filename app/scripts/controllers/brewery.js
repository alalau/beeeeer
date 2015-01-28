'use strict';

/**
 * @ngdoc function
 * @name beerAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beerAppApp
 */
angular.module('beerApp')
  .controller('BreweryDetailsController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('json/breweries.json').success(function(data) {
      	angular.forEach(data, function(item) {
          if (item.id == $routeParams.breweryId) 
            $scope.brewery = item;
        });
    });
}]);