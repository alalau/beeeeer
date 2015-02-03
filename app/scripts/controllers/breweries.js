'use strict';

/*
 *
 * MAP STYLES
 *
 */

var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 26
            },
            {
                "color": "#425260"
            },
            {
                "lightness": 0
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
                "color": "#425260"
            },
            {
                "lightness": 6
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
                "color": "#425260"
            },
            {
                "lightness": 10
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#425260"
            },
            {
                "lightness": 7
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
                "color": "#425260"
            },
            {
                "lightness": 10
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#425260"
            },
            {
                "lightness": 11
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#425260"
            },
            {
                "lightness": 7
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#425260"
            },
            {
                "lightness": 19
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
                "color": "#425260"
            },
            {
                "lightness": 8
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#425260"
            },
            {
                "lightness": 6
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#425260"
            },
            {
                "lightness": 9
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3d4f5b"
            },
            {
                "lightness": 0
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


/*
 *
 * Controller
 *
 */

angular.module('beerApp')
  .controller('BreweryListController', ['$scope', '$http', function($scope, $http) {

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



        $scope.markers = [];
        var idNum = 0;

        $http.get('json/breweries.json').success(function(data) {
            $scope.breweries = data;

            angular.forEach(data, function(item) { 

                var address = "#/breweries/" + item.id;
                var marker = {
                  id: idNum,
                  coords: {
                    latitude: item.latitude,
                    longitude: item.longitude
                  },
                  icon: '../images/marker.png',
                  events: {
                    click: function () {
                        window.location.href = address;
                    }
                  }
                };
                $scope.markers.push(marker);
                idNum++;
            });

        });
 
        $scope.orderProp = 'name';

        $scope.pageClass = 'page-home';

        /* Resize Map */

        $scope.init = function () {
            var h = $(window).height();
            var w = $(window).width();
            var newH = h - (h / 8);
            if (w > 720) {
                $('#vancouverMap').css({
                    height: newH
                });
                $('.angular-google-map-container').css({
                    height: newH + 30
                });
            } else {
                $('#vancouverMap').css({
                    height: h - 56
                });
                $('.angular-google-map-container').css({
                    height: h - 30
                });
            }
        };

}]);
  