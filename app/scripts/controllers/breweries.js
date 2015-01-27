'use strict';

/**
 * @ngdoc function
 * @name beerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beerAppApp
 */

var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
		"featureType": "administrative",
		"elementType": "labels",
		"stylers": [
			{ 
				"visibility": "off" 
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels",
		"stylers": [
			{ 
				"visibility": "off" 
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels",
		"stylers": [
			{ 
				"visibility": "off" 
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels",
		"stylers": [
			{ 
				"visibility": "off" 
			}
		]
	}
]

angular.module('beerApp')
  .controller('BreweryListController', ['$scope', '$http', function($scope, $http) {
		$http.get('beers/beers.json').success(function(data) {
			$scope.breweries = data;
		});
 
   		$scope.orderProp = 'name';

   		// Google Map Hero
   		$scope.map = { 
   			center: { 
   				latitude: 49.2764031, 
   				longitude: -123.0979068 
   			}, 
   			zoom: 14 ,
   			options: {
			   	scrollwheel: false,
			    navigationControl: false,
			    mapTypeControl: false,
			    scaleControl: false,
				zoom: 10,
				minZoom: 10,
				disableDefaultUI: true,
				styles: styles
   			}
   		}

}]);


  