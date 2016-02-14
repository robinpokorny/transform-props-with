# transform-props-with

**transform-props-with** is a decorator for React components.

[![npm](https://img.shields.io/npm/v/transform-props-with.svg?style=flat-square)](https://www.npmjs.com/package/transform-props-with)
[![Build Status](https://img.shields.io/badge/build-passed-brightgreen.svg?style=flat-square)](https://semaphoreci.com/robinpokorny/transform-props-with)
[![license](https://img.shields.io/npm/l/transform-props-with.svg?style=flat-square)](https://github.com/robinpokorny/transform-props-with/blob/master/LICENSE)
[![react](https://img.shields.io/badge/react->%3D%200.14-brightgreen.svg?style=flat-square)](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/)


### Install

```shell
$ npm install transform-props-with --save
```

### Usage

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

ReactDOM.render(<DecoratedComponent size={ 100 } />, node);
// Would render <BaseComponent size={ 200 } />
```

#### Merge objects

Pass an object to automatically merge it with provided props.

```js
const DecoratedComponent = tx({ stars: 10 })(BaseComponent)

ReactDOM.render(<DecoratedComponent size={ 100 } />, node);
// Would render <BaseComponent size={ 100 } stars={ 10 } />

```

Note: this is *not* a deep merge. It is equal to this transformation:

```js
const setSizeTo200 = (oldProps) => objectAssign({}, oldProps, { stars: 10 })
```

#### Multiple transformations

Pass an array of transformations to the function and they will all be applied *right to left*.

The following two examples are then equivalent.

```js
const DecoratedComponent =
  tx([doubleSize, addFive])(BaseComponent)
```

```js
const DecoratedComponent =
  tx(doubleSize)(
    tx(addFive)(BaseComponent)
  )
```

Of course, transformations and object merges can be mixed.

```js
const DecoratedComponent =
  tx([doubleSize, { stars: 10 }, addFive])(BaseComponent)
```

#### ES7 decorators

If you like [decorators](https://github.com/wycats/javascript-decorators),
you can use to apply transformations.

```js
@tx(doubleSize)
class DecoratedComponent extends BaseComponent {}
```

### Examples

* [Change a prop value](examples/double-size.js)
* [Build BEM components](examples/bem.js)
* [Switch two props](examples/switch-foo-bar.js)
* [Track click](examples/track-click.js) (decorating `onClick`)

#### Notes

* **transform-props-with** returns a stateless functional component, these were introduced in
React v0.14.0 ([release notes](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)).

* Polyfill for
[Array.prototype.reduceRight] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
might be needed to support older browsers.
