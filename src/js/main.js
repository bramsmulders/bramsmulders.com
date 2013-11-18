/*----------------------------------------------------------------------------*\
        Place any project specific javascript here
\*----------------------------------------------------------------------------*/

'use strict';

/*----------------------------------------------------------------------------*\
    $LINKS
\*----------------------------------------------------------------------------*/

var links = {
    root: null,
    init: function(){
        var self = this;
        self.root = $('html, body');

        $('a[rel*=external]').on('click', function(){
            $(this).attr('target', '_blank');
        });

        self.anchor();
    },

    anchor: function(){
        var self = this,
            ancloc = window.location.hash
        ;

        if(ancloc.length){
            self.locate(ancloc);
            if(event && typeof event.preventDefault() === 'function'){
                event.preventDefault();
            }
        }

        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = this.hash;
                if (target.length) {
                    if(event && typeof event.preventDefault() === 'function'){
                        event.preventDefault();
                    }
                    setTimeout(function() {
                        self.locate(target);
                    }, 200);
                }
            }
        });

        return false;
    },

    locate: function(ancloc){
        var self = this;
        self.root.animate({
            scrollTop: $(ancloc).offset().top
        }, 300, function () {
            window.location.hash = ancloc;
        });
        return false;
    }
};





/*----------------------------------------------------------------------------*\
    $INIT
    Fire ALL the things
\*----------------------------------------------------------------------------*/

$(document).ready(function(){
    links.init();
});