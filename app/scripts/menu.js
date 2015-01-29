// ----------------------------------------------------------------------------------
// Swipe menu out function. NOTE this is hidden with css for desktop view port sizes.
// ----------------------------------------------------------------------------------
var pad = document.getElementById("swipe-area");

$('.menuBtn').click(function() {
	$('#menu').toggleClass("open");
});

$('#menu a').click(function() {
	$('#menu').removeClass("open");
});

$(function() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		Hammer(pad).on("swipeleft", function() {
	    	$('#menu').removeClass("open");
	    });
	    
	    Hammer(pad).on("swiperight", function() {
	    	$('#menu').addClass("open");
	    });
	}
});
