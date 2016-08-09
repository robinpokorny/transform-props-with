# Transform Props With

*Transform Props With* is a functional approach to React component reuse.

[![npm](https://img.shields.io/npm/v/transform-props-with.svg?style=flat-square)](https://www.npmjs.com/package/transform-props-with)
[![Build Status](https://img.shields.io/badge/build-passed-brightgreen.svg?style=flat-square)](https://semaphoreci.com/robinpokorny/transform-props-with)
[![license](https://img.shields.io/npm/l/transform-props-with.svg?style=flat-square)](https://github.com/robinpokorny/transform-props-with/blob/master/LICENSE)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/)
[![Developed at Wimdu](https://img.shields.io/badge/developed%20at-Wimdu-orange.svg?style=flat-square)](http://tech.wimdu.com/)

> Compose small testable functions to modify props for components.

## Install

```shell
$ npm install transform-props-with --save
```

## Usage

```js
import tx from 'transform-props-with'

import BaseComponent from './base-component'

const doubleSize = (oldProps) => {
  const { size, ...props } = oldProps;

  return {
    size: size * 2,
    ...props
  };
};

const DecoratedComponent = tx(doubleSize)(BaseComponent)

ReactDOM.render(<DecoratedComponent size={100} />, node);
// Would render <BaseComponent size={200} />
```

See the full [API documentation](docs/api.md) for details.

### Merge objects

Pass an object to automatically merge it with provided props.

```js
const DecoratedComponent = tx({ stars: 10 })(BaseComponent)

ReactDOM.render(<DecoratedComponent size={100} />, node);
// Would render <BaseComponent size={100} stars={ 10 } />

```

Note: this is *not* a deep merge. It is equal to this transformation:

```js
const setStarsTo10 = (oldProps) => Object.assign({}, oldProps, { stars: 10 })
```

### Multiple transformations

Pass an array of transformations to the function and they will all be combined
to a single transformation *left to right*.

In the following example `addFive` would be applied first and `doubleSize`
will be called with props returned by it.

```js
const DecoratedComponent =
  tx([ addFive, doubleSize ])(BaseComponent)
```

Of course, transformations and object merges can be mixed.

```js
const DecoratedComponent =
  tx([ addFive, { stars: 10 }, doubleSize ])(BaseComponent)
```

## Examples

* [Change a prop value](examples/double-size.js)
* [Wrap general component](examples/wrap-general-component.js)
* [Switch two props](examples/switch-foo-bar.js)
* [Track click](examples/track-click.js) (decorating `onClick`)
* [Build BEM components](https://github.com/agudulin/dumb-bem#usage) using [dumb-bem](https://www.npmjs.com/package/dumb-bem)

### Notes

* *Transform Props With* returns a stateless functional component, these were introduced in
React v0.14.0 ([release notes](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)).

* Polyfill for
[Array.prototype.reduce] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
might be needed to support older browsers.
