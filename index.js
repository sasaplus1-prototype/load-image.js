/*!
 * @license load-image.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1-prototype/load-image.js
 * Released under the MIT license.
 */
'use strict';

var once = require('once');

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
