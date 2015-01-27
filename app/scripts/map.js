window.onload = function () {

    var minZoomLevel = 7;

    var styles = [
    ];

    var centerMap = new google.maps.LatLng(43.038642,11.931495);

    var myOptions = {
        zoom: 10,
        minZoom: minZoomLevel,
        center: centerMap,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        disableDefaultUI: true,
        styles: styles
    };

    map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);


var infowindow = new google.maps.InfoWindow();
var marker, i;
var markers = [];

var locations = [
    ['<div>Pitigliano</div>', 42.6364588,11.6730086, 'map_icon_2.png'],
    ['<div">Saturnia</div>', 42.6590351,11.5191416, 'map_icon_2.png'],
    ['<div>Orvieto', 42.7189736,12.1121443, 'map_icon_2.png'],
    ['<div>Dolciano</div>', 43.038642,11.931495, 'map_icon.png'],
    ['<div>San Biagio</div>', 43.0908, 11.7744, 'map_icon.png'],
    ['<div>Pienza</div>', 43.0786, 11.6789, 'map_icon.png'],
    ['<div>Sant Antimo</div>', 42.999628, 11.515634, 'map_icon.png'],
    ['<div>Mt Amiata</div>', 42.9, 11.6333333, 'map_icon.png'],
    ['<div>Bagno Vignoni</div>', 43.0277065, 11.6183779, 'map_icon.png'],
    ['<div>Siena</div>', 43.3333, 11.3333, 'map_icon.png'],
    ['<div>Segis</div>', 43.4644993, 11.1229496, 'map_icon.png'],
    ['<div>San Gimignano</div>', 43.4683103, 11.0365893, 'map_icon.png'],
    ['<div>Perugia</div>', 43.1000, 12.3833, 'map_icon.png'],
    ['<div>Norcia</div>', 42.7889434, 13.0942116, 'map_icon.png'],
    ['<div>Foligno</div>', 42.9534456, 12.7049408, 'map_icon.png'],
];

var detailedMarker, j;
var detailedMarkers = [];

/* Get the markers from the array */
for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
        map: map,
        visible: true, // or false. Whatever you need.
        icon: locations[i][3],
        zIndex: 10
    });

    /* Open marker on mouseover */
    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
    return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
    }
    })(marker, i));
    markers.push(marker);

    /* zoom in on click */
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
        map = marker.getMap();
        map.setCenter(marker.getPosition());
        smoothZoom(map, 18, map.getZoom());
        infowindow.setContent(locations[i][0]);
        infowindow.close(map, marker);
    }
    })(marker, i));
    markers.push(marker);

    /* smooth zoom */
    function smoothZoom (map, max, cnt) {
        if (cnt >= max) {
                return;
            }
        else {
            z = google.maps.event.addListener(map, 'zoom_changed', function(event){
                google.maps.event.removeListener(z);
                smoothZoom(map, max, cnt + 1);
            });
            setTimeout(function(){map.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
        }
    }

    /* Change markers on zoom */
    google.maps.event.addListener(map, 'zoom_changed', function() {
        var zoom = map.getZoom();
        // iterate over markers and call setVisible
        for (i = 0; i < locations.length; i++) {
            markers[i].setVisible(zoom <= 14);
        }
    });
}

    /* PITIGLIANO MARKERS */
    var pitigliano_1 = new google.maps.LatLng(42.6327553,11.6716944);
    var pitigliano_1_marker = new RichMarker({ position: pitigliano_1, map: map, visible: false, content: '<div class="detailedMarker">1</div>'});

    google.maps.event.addListener(map, 'zoom_changed', function() {
        var zoom = map.getZoom(); 
        pitigliano_1_marker.setVisible(zoom > 14);
    });

    google.maps.event.addListener(pitigliano_1_marker, 'click', function() { popup(); $('#pitigliano_1').addClass("windowOn"); });

}