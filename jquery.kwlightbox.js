(function($) {
    // Shell for the plugin code
    // $.fn is an alias for jQuery.prototype
    $.fn.kwLightbox = function(options) { // jQuery hook, highlightOnce could be any name.
        // Code of the plugin
        $.fn.kwLightbox.defaults = {
            'lightbox': 'lightbox',
            'overlay': 'overlay',
            'keyCode': 27,
            'scrollbar': 'hidden'
        }
        
        // Get the pre-set overflow
        var overflowMode = $('body').css('overflow-y');
        function removeLightbox() {
            $('#' + options.overlay + ', #' + options.lightbox).fadeOut('slow', function() {
                $(this).remove();
                $('body').css('overflow-y', overflowMode); 
            });
        }
        // Set options
        options = $.extend({}, $.fn.kwLightbox.defaults, options);

        // Must go through each element in the selection, or everything will be affected
        return this.each(function() {
            // code
            $('.' + options.lightbox).click(function() {
                
                $('body').css('overflow-y', options.scrollbar);
                
                $('<div id="' + options.overlay + '"></div>')
                .css('top', '0')
                .css('opacity', '0')
                .animate({'opacity': '0.5'}, 'slow')
                .appendTo('body');
                
                $('<div id="' + options.lightbox + '"></div>').hide().appendTo('body');
                
                var img = $('<img>').attr('src', $(this).attr('src'))
                img
                .load(function() {
                    var top = ($(window).height() - $('#' + options.lightbox).height()) / 2;
                    var left = ($(window).width() - $('#' + options.lightbox).height()) / 2;
                    $('#' + options.lightbox).css({
                        'top': top,
                        'left': left 
                    }).fadeIn();
                });
                
                img.click(function() {
                    removeLightbox();
                }).appendTo('#' + options.lightbox);
                
                $(document).keyup(function(e) {
                    if (e.keyCode === options.keyCode) {
                        removeLightbox();
                    }
                }).appendTo('#' + options.lightbox);
            });
        });
    }
}) (jQuery);