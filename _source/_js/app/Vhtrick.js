/*----------------------------------------------------------------------------*\
    vhTrick
    Pin the height of an element which is styled using the `vh` unit
\*----------------------------------------------------------------------------*/

define(() => {

    return {

        // load method, required when no constructor available
        load: (element, options) => {
            function resizeBackground() {
                /**
                 * Timeout to let the device actually change its orientation
                 */
                setTimeout(() => {
                    const newHeight = (window.innerHeight/100) * options.vh;
                    element.setAttribute('style', `min-height: ${newHeight}px`);
                }, 500);
            }

            window.addEventListener('optimizedOrientationchange', () => {
                resizeBackground();
            });

            resizeBackground();
        },

        options: {
            vh: 100
        }
    };

});