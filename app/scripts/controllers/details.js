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
		    	processing.setup = function(){
		    		processing.size(300, 50);
		    		processing.background(100);
		    		processing.noStroke();
		    		processing.frameRate(10);
		    	};
				processing.draw = function(){
					//processing.colorMode(processing.HSB, 360, 100, 100, 100);
					//processing.fill(processing.random(20, 35), 100, processing.random(30, 80), processing.random(30, 80));
					//processing.ellipse(processing.random(0, processing.width*($scope.beer.alcohol)/100), processing.random(0, processing.height),
					//	processing.random(5, 10), processing.random(5, 10));
					processing.fill(255);
					processing.rect(processing.width*($scope.beer.alcohol)/100, 0,
						processing.width*(1-$scope.beer.alcohol/100), processing.height);
				};
			}

			function sketchBitterness(processing){
		    	processing.setup = function(){
		    		processing.size(500, 500);
		    		processing.background(255);
		    	};
				processing.draw = function(){
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