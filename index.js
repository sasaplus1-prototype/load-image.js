'use strict';

var isFunction = require('type-check/is-function');

var once = require('once');

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
