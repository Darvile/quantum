"use strict";

module.exports = function( grunt ) {

	// Load all tasks
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// Watch
		watch: {
			options: {
		      livereload: true,
		    },
			css: {
				files: [ 'assets/scss/**/*' ],
				tasks: [ 'sass', 'cssmin', 'autoprefixer' ]
			},
			js: {
				files: 'assets/js/**/*',
				tasks: [ 'uglify', 'jshint' ]
			},
			html: {
	            files: ['index.html'],
	            options: {
	                livereload: true
	            }
	        }
		},

		sass: {
		    dist: {
		     files: {                         
		        'assets/css/main.css': 'assets/scss/main.scss'
		      }
		    }
		},

		cssmin: {
		  options: {
		    shorthandCompacting: false,
		    sourcemap: 'none',
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'dist/css/main.min.css': 'assets/css/main.css'
		    }
		  }
		},

		autoprefixer: {
		    options: {
		      browsers: ['last 2 versions', 'ie 8', 'ie 9']
		    },
		    target: {
		      src: 'dist/css/main.min.css',
              dest: 'dist/css/main.min.css'
		    },
		},

		jshint: {
			all: ['assets/js/functions.js']
		},

		// Concat and minify javascripts
		uglify: {
			options: {
				mangle: false,
				beautify: false,
				compress: {
					drop_console: false
				}
			},
			dist: {
				files: {
					'dist/js/main.min.js': [
						'assets/js/lib/jquery-1.11.1.js',
						'assets/js/lib/particles.text.js',
						'assets/js/lib/three.js',
						'assets/js/lib/projector.js',
						'assets/js/lib/canvas.renderer.js',
						'assets/js/lib/canvas.lines.js',
						'assets/js/lib/jquery.slickSlider.js',
						'assets/js/functions.js'
					]
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Registering default task
	grunt.registerTask( 'default', [ 'watch' ] );

};