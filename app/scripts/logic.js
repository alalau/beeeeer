$( window ).resize(function() {
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
	});
	
   	$(window).scroll(function(){

		var scrollTop = $(window).scrollTop();

        var w = $(window).width();

        if ($('#brewerResults').length){
	        beerTop = $("#brewerResults").offset().top - $(window).scrollTop();
	        if (w < 720) {
	        	if (beerTop < ($(window).height() / 2)) {
	        		$('#fab').addClass('mapIcon');
	        	} else {
	        		$('#fab').removeClass('mapIcon');
	        	}
	        } else {
	        	$('#fab').removeClass('mapIcon');
	        }
	    }

        if ($('#detailContent').length){
	        contentTop = $("#detailContent").offset().top - scrollTop;
	    	if (contentTop < 105) {
	    		$('header').removeClass('detail-view');
	    	} else {
	    		$('header').addClass('detail-view');
	    	}
			
			var newOpacity = 1 - $(window).scrollTop() / 300;
	        $(".shadow").css({
	            opacity: newOpacity
	        });   
	        $(".heroImage").css({
	            opacity: newOpacity
	        });   		
	    }
   });

	$('#fab').click(function() {
		var w = $(window).width();
		beerTop = $("#brewerResults").offset().top - $(window).scrollTop();
		if (w < 720) {	
			if (beerTop < ($(window).height() / 2)) {
				$('html, body').animate({
			        scrollTop: 0
			    }, 500);
			} else {
				$('html, body').animate({
		        	scrollTop: $('#brewerResults').offset().top - 64
		    	}, 500);
			}
		} else {
			$('html, body').animate({
		        scrollTop: $('#brewerResults').offset().top - 64
		    }, 500);
		}
	    return false;
	});

	$('#filterBtn2').click(function() {
		$('#filter-panel').toggleClass("open");
		$('#vancouverMap').toggleClass("makeSpaceForFilter");
		$('#beerResults').toggleClass("makeSpaceForFilter");
	});

	$('#menuBtn').click(function() {
		if ( menuhidden == false ) {
			$( menu ).animate({left: "-=250"}, 250);
			menuhidden = true;
		} else if ( menuhidden == true ) {
			$( menu ).animate({left: "+=250"}, 250);
			menuhidden = false;
		}
	});