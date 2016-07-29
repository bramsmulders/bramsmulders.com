/*----------------------------------------------------------------------------*\
    Application JavaScript
\*----------------------------------------------------------------------------*/

/**
 * Use strict as per:
 * http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
 */
'use strict';


/**
 * Check if bs object exists, otherwise create it
 */
var bs = bs || {};


/**
 * Jshint global references
 * Please define all third party plugins that you use to not break jshinting
 */

/*global Modernizr */


/**
 * Start jQuery closure
 * this will throw jquery into noConflict mode and assign it to $j variable.
 * Which then is mapped to $ again in the closure.
 */

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
    throttle("resize", "optimizedResize");
    throttle("orientationchange", "optimizedOrientationchange");
})();


/*  VH Trick
    “fixes” the vh units change when url bar hides and shows
\*----------------------------------------------------------------------------*/

bs.vhTrick = {
    init: function () {
        if (bs.cutsMustard) {
            this.initVhTrick();
        }
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
                    $el.setAttribute('style', 'min-height: 0px');
                    var height = $el.offsetHeight;
                    var newHeight = window.innerHeight;
                    if (height > newHeight) {
                        newHeight = height;
                    }
                    $el.setAttribute('style', 'min-height:'+newHeight+'px');
                }, 200);
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