
// jshint unused:false
// jshint esnext: true

const $ = require('jquery');
//const jQuery = $;
require('imports?jQuery=jquery!bootstrap-sass');
//const bootstrap = require('bootstrap-sass');




(function () {
   'use strict';


	const config = {
		debug: true,
		istouch:false,
		touchOrClick: '',
		apiKey: '3218024-d24c238798354fc806b9e1f45',
		url: 'https://pixabay.com/api/',
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
			this.getImage('yellow flower');

			// data.success(function(json){
			// 	console.log(json);
			// });
		},
		getImage: function(searchTerm){
			$.get({
					url: config.url,
					data: {
						key: config.apiKey,
						q: searchTerm
					}
			})
			.done(function( data ) {

			});
		}
	};
	app.init();

}());