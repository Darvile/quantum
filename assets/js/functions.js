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

        /**
	    * Smooth scrolling.
	    * @param element {string} - Jquery elemento to scroll to.
	    */

        function scrollToDiv(element){
			var offset = element.offset();
			var offsetTop = offset.top;
			var totalScroll = offsetTop;
			
			$('body, html').animate({
					scrollTop: totalScroll
			}, 500);
		}

		/**
	    * Parallax animation.
	    * Check if is mobile to execute parallax effect.
	    */
		
		function isMobile(){
        	return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)));
    	}

	    if(!isMobile()) {
	    	var s = skrollr.init();
	    }

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
