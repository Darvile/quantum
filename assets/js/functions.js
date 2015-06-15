(function($) {
	$(window).load(function () {
	    /**
	    * Apps main code documentation
	    */

	    /**
	    * Menu animation effect
	    */

	    $('#toggle').on('click', function () {
	    	var lines = $(this).find('.lines');
	    	$(lines).toggleClass('lines-after lines-before');
	    	$('#menu').toggleClass('open');
	    });

	    $(document).on('click', '[data-menu]', function(e){
            e.stopPropagation();
            e.preventDefault();

            // Close menu
            $('.open').removeClass();
            $('#menu').removeClass('open');
            $('body').find('.lines').removeClass('lines-after lines-before');

            $('.active').removeClass('active');
            $(this).addClass('active');

            var target = $(this).attr('data-menu');
            var elWrapped = $('[data-target="' + target + '"]');

			scrollToDiv(elWrapped,40);
			
			return false;
        });

        function scrollToDiv(element, navheight){
			var offset = element.offset();
			var offsetTop = offset.top;
			var totalScroll = offsetTop;
			
			$('body, html').animate({
					scrollTop: totalScroll
			}, 500);
		}

		/**
	    * Parallax animation
	    */

		// $('.scene').parallax({
		//   calibrateX: false,
		//   calibrateY: true,
		//   invertX: false,
		//   invertY: true,
		//   limitX: false,
		//   limitY: 10,
		//   scalarX: 2,
		//   scalarY: 8,
		//   frictionX: 0.2,
		//   frictionY: 0.8,
		//   originX: 0.0,
		//   originY: 1.0
		// });
		
		var s = skrollr.init();

	    /**
	    * Change image size on window resize
	    */

	    function setImage() {
	    	var imgH = $('.team-member img').height();
	    	$('.team-member').each(function () {
	    		$(this).css('height', imgH);
	    		$(this).find('p').css('margin-top', (imgH - 56) / 2);
	    	});
	    } 

	    setImage();

	    $(window).resize(function () {
	    	setImage();
	    });

	    /**
	    * Slick Slider
	    * Clients section slider
	    */

	    $('.clients-logo-wrap').slick({
	    	arrows: false,
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
			{
			  	breakpoint: 1024,
			  	settings: {
				    slidesToShow: 3,
				    slidesToScroll: 3,
				    infinite: true,
				    dots: false
				}
			},
			{
				breakpoint: 600,
			  	settings: {
			    	slidesToShow: 2,
			    	slidesToScroll: 2
			  	}
			},
			{
			  	breakpoint: 480,
			  	settings: {
			    	slidesToShow: 1,
			    	slidesToScroll: 1
			  	}
			}
		  ]
		});

	    /**
	    * Changes the menu toggle color
	    */

		$(window).on('scroll', function () {
			var top = $(this).scrollTop();
			if(top >= 717) {
				$('.lines').addClass('ln-white');
			} else {
				$('.lines').removeClass('ln-white');
			}
		});
	});

} )( jQuery );
