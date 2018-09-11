/*======================================================================

Project: JaguarCV - Responsive Resume Template
Version: 1.2
Author: Jaguar Themes

======================================================================*/
function main() {

(function () {
   'use strict';
   
  	    // PRE LOADER
        $(window).load(function(){
          $('.preloader').fadeOut(1000); // set duration in brackets    
        });

	
		// jQuery for page scrolling feature - requires jQuery Easing plugin
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: ($($anchor.attr('href')).offset().top - 50)
			}, 1250, 'easeInOutExpo');
			event.preventDefault();
		});

		// affix the navbar after scroll below header
		$('#nav').affix({
			  offset: {
				top: $('header').height()
			  }
		});	
		
	    // Highlight the top nav as scrolling occurs
		$('body').scrollspy({
			target: '#nav',
			offset: 51
		});
		
		// Closes the Responsive Menu on Menu Item Click
		 $(function () {
            $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
                    $('.navbar-toggle:visible').click();
            });
    	});

		// Skills Circle
		$('.skill-circle').circliful({
			animation: 1,
			animationStep: 5,
			animateInView: true,
			foregroundColor: '#ddd',
			backgroundColor: '#222',
			foregroundBorderWidth: 5,
			backgroundBorderWidth: 5,
			fontColor: '#fff'
		});

		//Skill Progress
	  $(".progress-element").each(function() {
		  $(this).waypoint(function() {
		  var progressBar = $(".progress-bar");
		  progressBar.each(function(indx){
			  $(this).css("width", $(this).attr("aria-valuenow") + "%");
		  });
	  }, {
		  triggerOnce: true,
		  offset: 'bottom-in-view'
		});
	   });

  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat').on('click','a',function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	}); 
	
}());


}
main();
/* ==================================== */
$(function() {	  		
/*------PhotoBox Js------------*/		
     !(function(){
          'use stnonerict';
		// finally, initialize photobox on all retrieved images
		jQuery('#gallery').photobox('.photobox_a');
	jQuery('#gallery').photobox('.photobox_a:first', { thumbs:false, time:0 }, imageLoaded);
	function imageLoaded(){
		console.log('image has been loaded...'
		);
	}
    
})();
	 
});
/* ==================================== */
// Scroll To top
	$(document).ready(function(){

		$(function(){
		 
			$(document).on( 'scroll', function(){
		 
				if ($(window).scrollTop() > 100) {
					$('.scroll-top-wrapper').addClass('show');
				} else {
					$('.scroll-top-wrapper').removeClass('show');
				}
			});
		 
			$('.scroll-top-wrapper').on('click', scrollToTop);
		});
		 
		function scrollToTop() {
			verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
			element = $('body');
			offset = element.offset();
			offsetTop = offset.top;
			$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
		}
		
	});
	//typed
	var typed3 = new Typed('#typed3', {
    strings: ['Front-end Developer', 'UI/UX Designer', 'Graphics Designer'],
    typeSpeed: 50,
    backSpeed: 30,
    smartBackspace: true, // this is a default
    loop: true
  });
  
  

