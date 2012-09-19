/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {
	Drupal.behaviors.wefc = {
		attach : function(context, settings) {
// - - - - - - - - - - - - - - - - - - - - - - - - -		
			//console.log('jQuery version ' + $().jquery);
	
			$('p').addClass('hyphenate').attr("lang","en");
			Hyphenator.run();
			
            $('#edit-search-block-form--2').autofill({
                        value: Drupal.t('enter keyword to search'),
                        defaultTextColor: '#999',
                        activeTextColor: '#000'
                    });
/*          $('#edit-search-block-form--2').focus(function(){  // doesn't work! need to use live
                $(this).addClass('focused');
                }).blur(function(){
                    $(this).removeClass('focused');
                });     */
            $('#edit-search-block-form--2').live("focus", function(){ 
                                                                $(this).addClass('focused');
                                                            }).blur(function(){
                                                                    $(this).removeClass('focused');
                                                            });			

// - - - - - - - - - - - - - - - - - - - - - - - - -	
		}
	}
})(jQuery, Drupal, this, this.document);
