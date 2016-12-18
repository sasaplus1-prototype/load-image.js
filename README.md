# load-image.js

load image

## Installation

```sh
$ npm install sasaplus1-prototype/load-image.js
```

## Usage

via `require()`

```js
var loadImage = require('load-image');
```

via `<script>`

```html
<script src="load-image.min.js"></script>
```

### Example

callback style:

```js
loadImage('path/to/image', function(err, image) {
  if (err) {
    throw err;
  }

  imageElement.src = image.src;
});
```

Promise style:

```js
loadImage('path/to/image')
  .then(function(image) {
    imageElement.src = image.src;
  })
  ['catch'](function(err) {
    throw err;
  });
```

if you want to use Promise polyfill:

```js
loadImage.Promise = require('bluebird');
```

## Functions

### loadImage(src[, callback])

- `src`
  - `String`
- `[callback]`
  - `Function`
- `[return]`
  - `Promise`

load image of `src`. return `Promise` if callback is not passed.

## License

The MIT license.
