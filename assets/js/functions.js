(function($) {
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

    $(window).resize(function () {
    	var imgH = $('.team-member img').height();
    	$('.team-member').each(function () {
    		$(this).css('height', imgH);
    		$(this).find('p').css('margin-top', (imgH - 56) / 2);
    	});
    }).resize();

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



    /**
    * Particles Text
    * Solution found in http://codepen.io/chapko/pen/IlvmJ
    */

    var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	var WIDTH = 1036;
	var HEIGHT = 410;
	var ALPHA_THRESHOLD = 60;

	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	var canvasX;
	var canvasY;
	var isMouseDown = false;
	var particles;
	var imageData = context.createImageData(WIDTH, HEIGHT);

	function updateCanvasCoordinates() {
	    var rect = canvas.getBoundingClientRect();
	    canvasX = rect.left;
	    canvasY = rect.top;
	}
	updateCanvasCoordinates();
	window.onresize = updateCanvasCoordinates;


	function createParticles(context, xoffset, yoffset) {
	    var w = context.canvas.width;
	    var h = context.canvas.height;
	    var imageData = context.getImageData(0, 0, w, h);
	    var pixels = imageData.data;
	    var particles = [], x, y;
	    for (var i = 0; i < pixels.length; i += 4) {
	        if (pixels[i + 3] > ALPHA_THRESHOLD) {
	            var color = [
	                pixels[i],
	                pixels[i + 1],
	                pixels[i + 2],
	                pixels[i + 3]
	            ];
	            x = (i / 4) % imageData.width;
	            y = (i / 4) / imageData.width | 0;
	            particles.push({
	                x: Math.random() * WIDTH,
	                y: Math.random() * HEIGHT,
	                sx: x + xoffset,
	                sy: y + yoffset,
	                fx: 0,
	                fy: 0,
	                vx: 0,
	                vy: 0,
	                color: color
	            });
	        }
	    }
	    return particles;
	}

	function init () {
	    var canvas = document.createElement('canvas');
	    var context = canvas.getContext('2d');
	    var xoffset = (WIDTH - this.width) / 2;
	    var yoffset = (HEIGHT - this.height) / 2;
	    canvas.width = this.width;
	    canvas.height = this.height;
	    context.drawImage(this, 0, 0, this.width, this.height);
	    particles = createParticles(context, xoffset, yoffset);
	    initEvents();
	    start();
	}


	var image = new Image();
	image.crossOrigin = 'Anonymous';
	image.onload = init;
	image.src = 'dist/img/text-explode.png'; 

	function start() {
	    draw();
	}

	function update() {
	    var p, dx, dy;
	    for (var i = 0; i < particles.length; i++) {
	        p = particles[i];
	        dx = (p.sx - p.x);
	        dy = (p.sy - p.y);
	        p.vx = p.fx + dx * 0.04;
	        p.vy = p.fy + dy * 0.04;
	        p.x += p.vx;
	        p.y += p.vy;
	    }
	}

	function draw() {
	    requestAnimationFrame(draw);
	    var i, d = imageData.data;
	    for (i = 3; i < d.length; i += 4) {
	        d[i] = 0;
	    }
	    for (i = 0; i < particles.length; i++) {
	        fillPixel(d, particles[i].x, particles[i].y, particles[i].color);
	    }
	    context.putImageData(imageData, 0, 0);
	    update();
	}

	function fillPixel(data, x, y, color) {
	    x = Math.round(x);
	    y = Math.round(y);
	    if (x < 0 || y < 0 || x >= WIDTH || y >= HEIGHT) {
	        return;
	    }
	    var index = (y * WIDTH + x) * 4;
	    data[index] = color[0];
	    data[index + 1] = color[1];
	    data[index + 2] = color[2];
	    data[index + 3] = color[3];
	}

	function initEvents() {
	    canvas.addEventListener('mousedown', function (event) {
	        cursorForce(event);
	        isMouseDown = true;
	    });
	    
	    document.body.addEventListener('mousemove', function (event) {
	        if (isMouseDown) {
	            cursorForce(event);
	        }
	    });
	    
	    document.body.addEventListener('mouseup', function () {
	        clearForce();
	        isMouseDown = false;
	    });
	}

	function randomForce() {
	    for (var i = 0; i < particles.length; i++) {
	        particles[i].fx = (Math.random() - 0.5) * 15;
	        particles[i].fy = (Math.random() - 0.5) * 15;
	    }
	}

	function cursorForce(event) {
	    var mx = event.pageX - canvasX;
	    var my = event.pageY - canvasY;
	    var p, dx, dy, d;
	    for (var i = 0; i < particles.length; i++) {
	        p = particles[i];
	        dx = p.x - mx;
	        dy = p.y - my;
	        d = Math.sqrt(dx*dx + dy*dy);

	        // randomize direction
	        dx += (Math.random() - 0.5) * d * 1;
	        dy += (Math.random() - 0.5) * d * 1;

	        // Newton's magic
	        d = d * d * d;
	        p.fx = Math.min(50000 / d, 0.3) * dx;
	        p.fy = Math.min(50000 / d, 0.3) * dy;
	    }
	}

	function clearForce() {
	    for (var i = 0; i < particles.length; i++) {
	        particles[i].fx = particles[i].fy = 0;
	    }
	}


} )( jQuery );
