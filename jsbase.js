;var PROJECTGLOBALOBJECT = PROJECTGLOBALOBJECT || {};

(function(pp, $){
	"use strict";

	pp.moduleName = {}

	var mod = pp.moduleName;

	mod.init = function() {
		mod.setSelectors()
		mod.vars = mod.setVars();
		mod.setEvents();
	};

	mod.setSelectors = function() {
		mod.module = $('.mod-your-module');
	};

	mod.setVars = function() {
		return {
			examplevar: false,
			othervar: 'hello'
		};
	};

	mod.setEvents = function(){
		//events go here
	};

	return mod.init();

})(PROJECTGLOBALOBJECT, jQuery);