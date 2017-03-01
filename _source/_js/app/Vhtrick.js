/*----------------------------------------------------------------------------*\
    vhTrick
    Pin the height of an element which is styled using the `vh` unit
\*----------------------------------------------------------------------------*/

define(function(){

    return {

        // load method, required when no constructor available
        load: function (element, options) {
            function resizeBackground() {
                /**
                 * Timeout to let the device actually change its orientation
                 */
                setTimeout(function(){
                    const newHeight = (window.innerHeight/100) * options.vh;
                    element.setAttribute('style', `min-height: ${newHeight}px`);
                }, 500);
            }

            window.addEventListener('optimizedOrientationchange', function (event) {
                resizeBackground();
            });

            resizeBackground();
        },

        options: {
            vh: 100
        }
    };

});