// ----------------------------------------------------------------------------------
// Swipe menu out function. NOTE this is hidden with css for desktop view port sizes.
// ----------------------------------------------------------------------------------

// var h = $(window).height(); //May require later.
	var w = $(window).width();
    var pad = document.getElementById("swipe-area");
    var menu = document.getElementById("menu");
	var menu = document.getElementById("menu");
	var menuhidden = true;

$(function() {
    if ( w <= 480 ) {
	    Hammer(pad).on("swipeleft", function() {
	    	if ( menuhidden == false ) {
	    		$( menu ).animate({left: "-=250"}, 250);
	    		menuhidden = true;
	    	} else{
	          	alert("Swipe right or tap the menu icon.");
	    	}
	    });
	    
	    Hammer(pad).on("swiperight", function() {
	    	if ( menuhidden == true ) {
	    		$( menu ).animate({left: "+=250"}, 250);
	    		menuhidden = false;
	    	} else{
	    		$( menu ).animate({left: "-2"}, 10).effect( "shake",
	    			{distance:2}, 500 );
	    		$( menu ).animate({left: "0"}, 10);
	    	}
	    });
	}
});
