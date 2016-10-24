/*----------------------------------------------------------------------------*\
    Application JavaScript
\*----------------------------------------------------------------------------*/

/**
 * Use strict as per:
 * http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
 */
'use strict';

/**
 * Jshint global references
 * Please define all third party plugins that you use to not break jshinting
 */

/*global Modernizr */


/*  Easing
\*----------------------------------------------------------------------------*/

// t = current time
// b = start value
// c = change in value
// d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};



/*  Throttler
    Throttles all sorts of events
\*----------------------------------------------------------------------------*/

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    // throttle("resize", "optimizedResize");
    throttle("orientationchange", "optimizedOrientationchange");
})();


/*  VH Trick
    “fixes” the vh units change when url bar hides and shows
\*----------------------------------------------------------------------------*/

bs.vhTrick = {
    init: function () {
        this.initVhTrick();
    },

    initVhTrick: function ($context) {
        var $vhEl = document.querySelectorAll('.js--vh-trick');
        function resizeBackground() {
            for (var i = 0; i < $vhEl.length; ++i) {
                var $el = $vhEl[i];
                /**
                 * Timeout to let the device actually change its orientation
                 */
                setTimeout(function(){
                    var newHeight = window.innerHeight;
                    $el.setAttribute('style', 'min-height:'+newHeight+'px');
                }, 500);
            }
        }
        window.addEventListener('optimizedOrientationchange', function (event) {
            resizeBackground();
        });
        resizeBackground();
    }
};

window.addEventListener('load', function (event) {
    bs.vhTrick.init();
}, false);



/*  Offline support
\*----------------------------------------------------------------------------*/

// bs.sw = {
//     init: function () {
        // if ('serviceWorker' in navigator) {
        //     navigator.serviceWorker.register('/sw.js').then(function(registration) {
        //         // Registration was successful
        //         console.log('ServiceWorker registration successful with scope: ', registration.scope);
        //     }).catch(function(err) {
        //         // registration failed :(
        //         console.log('ServiceWorker registration failed: ', err);
        //     });
        // }
//     }
// };

// window.addEventListener('load', function (event) {
//     bs.sw.init();
// }, false);



/*  Scoller
\*----------------------------------------------------------------------------*/

bs.scroller = {
    init: function () {},

    scrollTo: function (element, to, duration) {
        var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

        var animateScroll = function(){
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
};



/*  Pjax
\*----------------------------------------------------------------------------*/

bs.pjax = {
    target: document.querySelector('.js--pjax__target'),
    transitionSpeed: 500,

    init: function () {
        if (Modernizr.webanimations && Modernizr.fetch && typeof Modernizr.animation === 'undefined') {
            this.initPjax();
        }
    },

    initPjax: function () {
        var self = this;
        document.addEventListener('click', function(e) {
            var el = e.target;

            // Go up in the nodelist until we find a node with .href (HTMLAnchorElement)
            while (el && !el.href) {
                el = el.parentNode;
            }

            if (el && el.classList.contains('js--pjax__link') && !(e.shiftKey || e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                history.pushState(null, null, el.href);
                self.changePage();
                return;
            }
        });

        window.addEventListener('popstate', self.changePage);
    },

    changePage: function () {
        var self = this;
        // Note, the URL has already been changed
        var url = window.location.href;

        bs.pjax.loadPage(url).then(function(responseText) {
            var wrapper = document.createElement('div');
            wrapper.innerHTML = responseText;

            var oldContent = document.querySelector('.js--pjax__content');
            var newContent = wrapper.querySelector('.js--pjax__content');

            bs.vhTrick.initVhTrick(newContent);

            bs.pjax.target.appendChild(newContent);
            bs.pjax.animate(oldContent, newContent, url);
        });
    },

    loadPage: function (url) {
        return fetch(url, {
            method: 'GET'
        }).then(function(response) {
            return response.text();
        });
    },

    animate: function (oldContent, newContent, url) {
        oldContent.style.position = 'absolute';

        var scrollTo = 0;
        var hash = window.location.hash.replace('#', '');


        if (hash) {
            scrollTo = document.getElementById(hash).offsetTop;
            // bs.scroller.scrollTo(document.body, scrollTo, 0);
        } else {
            bs.scroller.scrollTo(document.body, scrollTo, bs.pjax.transitionSpeed);
        }


        var fadeOut = oldContent.animate({
            opacity: [1, 0]
        }, bs.pjax.transitionSpeed);

        var fadeIn = newContent.animate({
            opacity: [0, 1]
        }, bs.pjax.transitionSpeed);

        fadeIn.onfinish = function() {
            oldContent.parentNode.removeChild(oldContent);
        };
    }
};

window.addEventListener('load', function (event) {
    bs.pjax.init();
}, false);