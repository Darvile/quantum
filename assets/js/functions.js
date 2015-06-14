(function($) {
	$(window).load(function () {
	    /**
	    * Apps main code documentation
	    * Description
	    * @constructor
	    * @param {type} parameter - description.
	    */

	    /**
	    * Menu animation effect
	    */

	    $('#toggle').on('click', function () {
	    	var lines = $(this).find('.lines');
	    	$(lines).toggleClass('lines-after lines-before');
	    	$('#menu').toggleClass('open');
	    });

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


		$(window).on('scroll', function () {
			// var top = $(this).scrollTop();
			// if(top >= 6000) {
			// 	$('#team .title-wrap').css('position', 'fixed');
			// } else {
			// 	$('#team .title-wrap').css('position', 'initial');
			// }
		});
	});

} )( jQuery );
