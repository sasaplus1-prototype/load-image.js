/*!
 * @license load-image.js ver.1.0.0 Copyright(c) 2016 sasa+1
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

	var isFunction = __webpack_require__(1);

	var once = __webpack_require__(2);

	/**
	 * callback when image loaded
	 *
	 * @param {String} src
	 * @param {Function} callback
	 */
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

	  if (image.naturalWidth || image.complete) {
	    callback(null, image);
	  }
	}

	/**
	 * load image
	 *
	 * @param {String} src
	 * @param {Function} [callback]
	 * @return {Promise}
	 */
	function loadImage(src, callback) {
	  if (isFunction(callback)) {
	    load(src, once(callback));
	  } else {
	    return new loadImage.Promise(function(resolve, reject) {
	      load(src, function(err, image) {
	        (err) ? reject(err) : resolve(image);
	      });
	    });
	  }
	}

	// NOTE: get global object by any environment
	loadImage.Promise = Function('return this')().Promise;

	module.exports = loadImage;


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var toString = Object.prototype.toString;

	module.exports = function isFunction(value) {
	  return (
	    typeof value === 'function' || toString.call(value) === '[object Function]'
	  );
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFunction = __webpack_require__(1);

	/**
	 * return converted function
	 *
	 * @param {Function} fn
	 * @throws {TypeError}
	 * @return {Function}
	 */
	module.exports = function once(fn) {
	  var count;

	  if (!isFunction(fn)) {
	    throw new TypeError('fn must be a Function');
	  }

	  count = 1;

	  return function() {
	    var args, call;

	    if (count-- <= 0) {
	      return;
	    }

	    args = arguments;
	    call = 'call';

	    switch (args.length) {
	      case 0:
	        return fn[call](this);
	      case 1:
	        return fn[call](this, args[0]);
	      case 2:
	        return fn[call](this, args[0], args[1]);
	      case 3:
	        return fn[call](this, args[0], args[1], args[2]);
	      default:
	        return fn.apply(this, args);
	    }
	  };
	};


/***/ }
/******/ ])
});
;