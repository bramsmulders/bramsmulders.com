/*----------------------------------------------------------------------------*\
    Main.js
    Defines globals and initialises conditioner.js
\*----------------------------------------------------------------------------*/

/*  Throttling
    Throttles the `oriantationchange` event
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

    /**
     * init - you can init any event
     */
    throttle("orientationchange", "optimizedOrientationchange");
})();



/*  Setup require.js
\*----------------------------------------------------------------------------*/

requirejs.config({
    urlArgs: "v=v1",
    baseUrl: '/assets',
    paths: {
        app: 'js/app'
    },
    map:{
        '*':{
            conditioner:'bower_components/conditioner-js/conditioner'
        }
    }
});


/**
 * Initialise conditioner
 */
require(['conditioner'],function(conditioner) {
    conditioner.init();
});