'use strict';

/**
 * @ngdoc function
 * @name beerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beerAppApp
 */


// var beerApp = angular.module('beerApp', []);

angular.module('beerApp')
  .controller('BeerListController', ['$scope', '$http', function($scope, $http) {
		$http.get('beers/beers.json').success(function(data) {
			$scope.beers = data;
		});
 
   		$scope.orderProp = 'name';
}]);


  