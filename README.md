# transform-props-with

**transformPropsWith** is a decorator for React components.

[![npm](https://img.shields.io/npm/v/transform-props-with.svg)](https://www.npmjs.com/package/transform-props-with)
[![Build Status](https://semaphoreci.com/api/v1/projects/952af448-0e60-472d-9e34-4d330e25da5f/684163/shields_badge.svg)](https://semaphoreci.com/robinpokorny/transform-props-with)
[![license](https://img.shields.io/npm/l/transform-props-with.svg)](https://github.com/robinpokorny/transform-props-with/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/react-v0.14-brightgreen.svg)](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-lightgrey.svg)](http://standardjs.com/)


### Install

```shell
$ npm install transform-props-with --save
```

### Usage

```js
import transformPropsWith from 'transform-props-with'

import BaseComponent from './base-component'

const doubleSize = (oldProps) => {
  const { size, ...props } = oldProps;

  return {
    size: size * 2,
    ...props
  };
};

const DecoratedComponent = transformPropsWith(doubleSize)(BaseComponent)

ReactDOM.render(<DecoratedComponent size={ 100 } />, node);
// Would render <BaseComponent size={ 200 } />
```

#### Merge objects

Pass an object to automatically merge it with provided props.

```js
const DecoratedComponent = transformPropsWith({ stars: 10 })(BaseComponent)

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
  transformPropsWith([doubleSize, addFive])(BaseComponent)
```

```js
const DecoratedComponent =
  transformPropsWith(doubleSize)(
    transformPropsWith(addFive)(BaseComponent)
  )
```

Of course, transformations and object merges can be mixed.

```js
const DecoratedComponent =
  transformPropsWith([doubleSize, { stars: 10 }, addFive])(BaseComponent)
```

#### ES7 decorators

If you like [decorators](https://github.com/wycats/javascript-decorators),
you can use to apply transformations.

```js
@transformPropsWith(doubleSize)
class DecoratedComponent extends BaseComponent {}
```

### Examples

* [Change a prop value](examples/double-size.js)
* [Build BEM components](examples/bem.js)
* [Switch two props](examples/switch-foo-bar.js)
* [Track click](examples/track-click.js) (decorating `onClick`)

#### Notes

* **transformPropsWith** returns a stateless functional component, these were introduced in
React v0.14.0 ([release notes](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)).

* Polyfill for
[Array.prototype.reduceRight] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
might be needed to support older browsers.
