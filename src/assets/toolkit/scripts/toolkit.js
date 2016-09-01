
// jshint unused:false
// jshint esnext: true

const $ = require('jquery');
require('imports?jQuery=jquery!bootstrap-sass');




(function () {
   'use strict';


	const config = {
		debug: true,
		istouch:false,
		touchOrClick: '',

		init: function(){
			let $htmlElem=$('html');
			this.istouch = $htmlElem.hasClass('touch')? true : false;
			this.touchOrClick = this.istouch? 'touchend' :'click' ;
		}

	};
	config.init();
	const  log = {
	  debug: function(content){
			if ((window.console && window.console.log) && config.debug){
				console.log(content);
			}
		}
	};



	const app = {
		init: function() {

		}
	};
	app.init();

}());