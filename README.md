# transform-props-with

**transformPropsWith** is a decorator for React components.

[![npm](https://img.shields.io/npm/v/transform-props-with.svg)](https://www.npmjs.com/package/transform-props-with)
[![license](https://img.shields.io/npm/l/transform-props-with.svg)](https://github.com/robinpokorny/transform-props-with/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/react-v0.14-brightgreen.svg)](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)

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

@transformPropsWith(doubleSize)
class DecoratedComponent extends BaseComponent {}

ReactDOM.render(<DecoratedComponent size={ 100 } />, node);
// Would render <BaseComponent size={ 200 } />
```

#### Multiple transformations

Pass an array of transformations to the function and they will all be applied *right to left*.

The following two examples are then equivalent.

```js
@transformPropsWith([doubleSize, addFive])
class DecoratedComponent extends BaseComponent {}
```

```js
@transformPropsWith(doubleSize)
@transformPropsWith(addFive)
class DecoratedComponent extends BaseComponent {}
```

#### Direct use without decorators

If you do not like [decorators](https://github.com/wycats/javascript-decorators),
need them (because you use stateless functional components),
or do not feel comfortable using them yet you can apply transformations directly.

```js
const DecoratedComponent = transformPropsWith(doubleSize)(BaseComponent)
```

### Examples

* [Change a prop value](examples/double-size.js)
* [Switch two props](examples/switch-foo-bar.js)
* [Track click](examples/track-click.js) (decorating `onClick`)

#### Notes

* **transformPropsWith** returns a stateless functional component, these were introduced in
React v0.14.0 ([release notes](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)).

* Polyfill for
[Array.prototype.reduceRight] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
might be needed to support older browsers.
