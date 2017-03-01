/*----------------------------------------------------------------------------*\
    navigation
\*----------------------------------------------------------------------------*/

define(function(){

    return {

        // load method, required when no constructor available
        load: function (element, options) {
            const $burger = element.querySelector('.js--navigation__toggle');

            function toggleMenu () {
                element.classList.toggle('is-menu-open');
            }

            $burger.addEventListener('click', toggleMenu);
        }
    };

});