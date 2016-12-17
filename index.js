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

  if (image.naturalWidth || image.complete) {
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
