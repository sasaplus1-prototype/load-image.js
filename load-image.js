/*!
 * @license load-image.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1-prototype/load-image.js
 * Released under the MIT license.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["loadImage"] = factory();
	else
		root["loadImage"] = factory();
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

	'use strict';

	var once = __webpack_require__(1);

	function load(src, callback) {
	  var image = new Image();

	  image.onabort = function(event) {
	    callback(new Error('onabort'), event);
	  };
	  image.onerror = function(event) {
	    callback(new Error('onerror'), event);
	  };

	  image.onload = function() {
	    callback(null, image);
	  };
	  image.src = src;

	  if (image.naturalWidth) {
	    callback(null, image);
	  }
	}

	module.exports = function(src, callback) {
	  if (typeof callback === 'function') {
	    load(src, once(callback));
	  } else {
	    return new Promise(function(resolve, reject) {
	      load(src, function(err, image) {
	        (err) ? reject(err) : resolve(image);
	      });
	    });
	  }
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*!
	 * @license once.js Copyright(c) 2016 sasa+1
	 * https://github.com/sasaplus1-prototype/once.js
	 * Released under the MIT license.
	 */
	'use strict';

	module.exports = function(fn) {
	  var count;

	  if (typeof fn !== 'function') {
	    throw new TypeError('fn must be a Function');
	  }

	  count = 1;

	  return function() {
	    var result;

	    if (count-- > 0) {
	      result = fn.apply(this, arguments);
	    }

	    fn = void 0;

	    return result;
	  };
	};


/***/ }
/******/ ])
});
;