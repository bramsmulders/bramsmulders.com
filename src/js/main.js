/*----------------------------------------------------------------------------*\
        Place any project specific javascript here
\*----------------------------------------------------------------------------*/

'use strict';

/*----------------------------------------------------------------------------*\
    $GETDATA
\*----------------------------------------------------------------------------*/

function getData(node) {
    var d = {},
        re_dataAttr = /^data\-(.+)$/;

    $.each(node.get(0).attributes, function(index, attr) {
        if (re_dataAttr.test(attr.nodeName)) {
            var key = attr.nodeName.match(re_dataAttr)[1];
            d[key] = attr.nodeValue;
        }
    });

    return d;
}





/*----------------------------------------------------------------------------*\
    $SCROLLER
    Varous scroll related functions
\*----------------------------------------------------------------------------*/

var scroller = {
    init: function(){
        this.preventHover();
    },

    currentYPosition: function() {
        if (self.pageYOffset) {
            return self.pageYOffset;
        } else {
            return 0;
        }
    },

    elementYPosition: function(elementID) {
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
        var stop = this.elementYPosition(elementID);
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
    },

    preventHover: function(){
        var body = document.body,
            timer;

        window.addEventListener('scroll', function() {
            clearTimeout(timer);
            if(!body.classList.contains('disable-hover')) {
                body.classList.add('disable-hover')
            }

            timer = setTimeout(function(){
                body.classList.remove('disable-hover')
            },100);
        }, false);
    }
};





/*----------------------------------------------------------------------------*\
    $LINKS
\*----------------------------------------------------------------------------*/

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
        }
        var links = document.querySelectorAll('a[href*="#"]:not([href="#"])');
        for(var key in links) {
            links[key].onclick = function(){
                if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                    var target = this.hash;
                    if (target.length) {
                        setTimeout(function() {
                            scroller.smoothScroll(target);
                        }, 200);
                        return false;
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
    scroller.init();
    links.init();
}
