// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
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

// Place any jQuery/helper plugins in here.

$(w).resize(function(){ //Update dimensions on resize
  sw = document.documentElement.clientWidth;
    sh = document.documentElement.clientHeight;
      checkMobile();
      });
        
	//Check if Mobile
	function checkMobile() {
	mobile = (sw > breakpoint) ? false : true;

	if (!mobile) { //If Not Mobile
	  $('[role="tabpanel"],#nav,#search').show(); //Show full navigation and search
	  } else { //Hide 
	      if(!$('#nav-anchors a').hasClass('active')) {
	       $('#nav,#search').hide(); //Hide full navigation and search
	  }
   }}	
}