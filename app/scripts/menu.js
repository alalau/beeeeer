// ----------------------------------------------------------------------------------
// Swipe menu out function. NOTE this is hidden with css for desktop view port sizes.
// ----------------------------------------------------------------------------------
var pad = document.getElementById("swipe-area");

function closeMenu() {
	$('#menu').removeClass("open");
	$('#dim').removeClass("dimmed");
}

$('.menuBtn').click(function() {
	$('#menu').toggleClass("open");
	$('#dim').toggleClass("dimmed");
});

$('#menu a').click(function() {
	closeMenu();
});

$('#close-menu').click(function() {
	closeMenu();
});

$('#dim').click(function() {
	closeMenu();
});

//SPLASH STUFF TO BE MOVED
function splash(e) {
	$('#splash h1').delay(600).fadeToggle(1200);
	$('#splash').delay(7200).fadeToggle(1600);
	e.stopPropagation();
}

function updateSplashSize() {
	$("#splash").css('height', $(window).height());
	$("#splash").css('width', $(window).width());
	$("#splash").css('padding-top', $(window).height()/2-80);
}

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


$(document).ready(updateSplashSize);
$(document).ready(splash);
$(window).resize(updateSplashSize);