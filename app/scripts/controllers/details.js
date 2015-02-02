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
		    		processing.size(500, 500);
		    	};
				processing.draw = function(){
					processing.size(processing.displayWidth, processing.displayHeight);
					processing.background(0);
					processing.fill(100);
					processing.noStroke();
					processing.rect(0, 0,
						processing.width*($scope.beer.alcohol)/100, processing.height);
				};
			}

			function sketchBitterness(processing){
	    	//still can't figure out why the canvas size won't change from  the  default :(
		    	processing.setup = function(){
		    		processing.size(500, 500);
		    	};
				processing.draw = function(){
					processing.size(processing.displayWidth, processing.displayHeight);
					processing.background(0);
					processing.fill(100);
					processing.noStroke();
					processing.rect(0, 0, 
						processing.width*($scope.beer.bitterness)/100, processing.height);
				};
			}

			var canvasA = document.getElementById("canvasAlcohol");
			var pA = new Processing(canvasA, sketchAlcohol);

			var canvasB = document.getElementById("canvasBitterness");
			var pB = new Processing(canvasB, sketchBitterness);
    	});
    });
    $scope.pageClass = 'page-details';
}]);