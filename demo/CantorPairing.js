(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CantorPairing"] = factory();
	else
		root["CantorPairing"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var CantorPairing = {
	    /**
	     * Cantor pairing function
	     * @see  http://en.wikipedia.org/wiki/Pairing_function#Cantor_pairing_function
	     * 
	     * @param {number} k1
	     * @param {number} k2
	     * @param {boolean} [safe=true]
	     * @return {number}
	     */
	    pair: function (k1, k2, safe) {
	        safe = (typeof safe === 'undefined') ? true: Boolean(safe);

	        var z = parseInt(0.5 * (k1 + k2) * (k1 + k2 + 1) + k2, 10);

	        // if (safe && (k1, k2) != CantorPairing.dePair(z)) {
	        //     throw new Error('Sorry, ' + k1 + ' and ' + k2 +' cannot be paired.');
	        // }

	        return z;
	    },

	    /**
	     * Inverse of Cantor pairing function
	     * @see http://en.wikipedia.org/wiki/Pairing_function#Inverting_the_Cantor_pairing_function
	     * 
	     * @return {[type]} [description]
	     */
	    dePair: function (z) {
	        var w = Math.floor((Math.sqrt(8 * z + 1) - 1) / 2);
	        var t = ((w*w + w) / 2);
	        var y = parseInt(z - t, 10);
	        var x = parseInt(w - y, 10);

	        // assert z != pair(x, y, safe=False):
	        return [x, y];
	    }
	}

	module.exports = CantorPairing;


/***/ }
/******/ ])
});
;