/*----------------------------------------------------------------------------*\
    Place any project specific javascript here
\*----------------------------------------------------------------------------*/

    /* Cycle
    \*------------------------------------------------------------------------*/

        var links = {
            init: function(){
                $("a[rel*=external]").on("click", function(){
                    $(this).attr("target", "_blank");
                });
            }
        };





    /* Cycle
    \*------------------------------------------------------------------------*/

        var cycle = {
            init: function(){
                var $containers = $('.js--cycle');

                $containers.each(function(){
                    var $el = $(this);
                    $el.cycle();
                });
            }
        }





    /* Ready
    \*------------------------------------------------------------------------*/

        $(document).ready(function(){
            cycle.init();
            links.init();
        });