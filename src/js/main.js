/*----------------------------------------------------------------------------*\
        Place any project specific javascript here
\*----------------------------------------------------------------------------*/

'use strict';

/*----------------------------------------------------------------------------*\
    $LINKS
\*----------------------------------------------------------------------------*/

var scroller = {
    currentYPosition: function() {
        if (self.pageYOffset) {
            return self.pageYOffset;
        } else {
            return 0;
        }
    },

    elmYPosition: function(elementID) {
        var elm = document.querySelector(elementID);
        var y = elm.offsetTop;
        while (elm.offsetParent && elm.offsetParent != document.body) {
            elm = elm.offsetParent;
            y += elm.offsetTop;
        }
        return y;
    },

    smoothScroll: function(elementID) {
        var start = this.currentYPosition();
        var stop = this.elmYPosition(elementID);
        var distance = (stop > start)
            ? stop - start
            : start - stop
        ;
        if (distance < 100) {
            scrollTo(0, stop);
            return;
        }
        var speed = 7;
        if (speed >= 20) {
            speed = 20;
        }
        var step = Math.round(distance / 25);
        var leap = (stop > start)
            ? start + step
            : start - step
        ;
        var timer = 0;
        if (stop > start) {
            for ( var i=start; i<stop; i+=step ) {
                setTimeout("window.scrollTo(0, "+leap+")", timer * speed);
                leap += step;
                if (leap > stop){
                    leap = stop;
                }
                timer++;
            } return;
        }
        for ( var i=start; i>stop; i-=step ) {
            setTimeout("window.scrollTo(0, "+leap+")", timer * speed);
            leap -= step;
            if (leap < stop){
                leap = stop;
            }
            timer++;
        }
    }
};




var links = {
    init: function(){
        this.target();
        this.anchor();
    },

    target: function(){
        var links = document.querySelectorAll('a[rel="external"]');
        for(var key in links){
            links[key].onclick = function(){
                this.setAttribute('target', '_blank');
            }
        }
    },

    anchor: function(){
        var self = this,
            ancloc = window.location.hash
        ;

        if(ancloc.length){
            scroller.smoothScroll(ancloc);
            if(event && typeof event.preventDefault() === 'function'){
                event.preventDefault();
            }
        }
        var links = document.querySelectorAll('a[href*="#"]:not([href="#"])');
        for(var key in links) {
            links[key].onclick = function(){
                if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                    var target = this.hash;
                    if (target.length) {
                        if(event && typeof event.preventDefault() === 'function'){
                            event.preventDefault();
                        }
                        setTimeout(function() {
                            scroller.smoothScroll(target);
                        }, 200);
                    }
                }
            };
        }
        return false;
    }
};





/*----------------------------------------------------------------------------*\
    $INIT
    Fire ALL the things
\*----------------------------------------------------------------------------*/

window.onload = function(){
    links.init();
}
