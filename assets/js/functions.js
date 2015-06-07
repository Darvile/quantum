(function($) {
    /**
    * Apps main code documentation
    * Description
    * @constructor
    * @param {type} parameter - description.
    */

    /**
    * Menu animation effect
    * Description
    * @constructor
    * @param {type} parameter - description.
    */

    $('#toggle').on('click', function () {
    	var lines = $(this).find('.lines');
    	$(lines).toggleClass('lines-after lines-before');
    	$('#menu').toggleClass('open');
    });

} )( jQuery );
