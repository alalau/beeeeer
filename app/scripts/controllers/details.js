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
    $http.get('json/beers.json').success(function(data) {
      	angular.forEach(data, function(item) {
          	if (item.id == $routeParams.beerId) 
            	$scope.beer = item;

	        function sketchAlcohol(processing){
	    	//still can't figure out why the canvas size won't change from  the  default :(
		    	processing.setup = function(){
		    		processing.size(500, 100);
		    	};
				processing.draw = function(){
					processing.size(processing.displayWidth, processing.displayHeight);
					processing.background(0);
					processing.fill(255, 0, 0);
					processing.noStroke();
					processing.rect(processing.width/10, processing.height/10, 
						processing.width*($scope.beer.alcohol)/100, processing.height/8);
				};
			}

			var canvas = document.getElementById("canvasAlcohol");
			var p = new Processing(canvas, sketchAlcohol);
    	});
    });
    $scope.pageClass = 'page-details';
}]);