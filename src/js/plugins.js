/*----------------------------------------------------------------------------*\
        Place any jQuery/helper plugins in here,
        instead of separate, slower script files.
\*----------------------------------------------------------------------------*/

'use strict';

/*----------------------------------------------------------------------------*\
    $CONSOLE
    Prevents error when .log is not available
    Reference: paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
\*----------------------------------------------------------------------------*/

(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());





/*----------------------------------------------------------------------------*\
    $VISIBLE
    A small plugin that checks whether elements are within the user visible
    viewport of a web browser.
    Only accounts for vertical position, not horizontal.
\*----------------------------------------------------------------------------*/

(function($) {
    $.fn.visible = function(partial) {
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom
        ;
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
})(jQuery);