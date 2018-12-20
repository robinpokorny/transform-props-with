# Transform Props With

*Transform Props With* is a functional approach to React component reuse.

[![npm](https://img.shields.io/npm/v/transform-props-with.svg?style=flat-square)](https://www.npmjs.com/package/transform-props-with)
[![Build Status](https://img.shields.io/badge/build-passed-brightgreen.svg?style=flat-square)](https://semaphoreci.com/robinpokorny/transform-props-with)
[![license](https://img.shields.io/npm/l/transform-props-with.svg?style=flat-square)](https://github.com/robinpokorny/transform-props-with/blob/master/LICENSE)
[![git3moji](https://img.shields.io/badge/git3moji-%E2%9A%A1%EF%B8%8F%F0%9F%90%9B%F0%9F%93%BA%F0%9F%91%AE%F0%9F%94%A4-fffad8.svg?style=flat-square)](https://robinpokorny.github.io/git3moji/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Managed by Yarn](https://img.shields.io/badge/managed%20by-Yarn-2C8EBB.svg?style=flat-square)](https://yarnpkg.com/)
[![Developed at Wimdu](https://img.shields.io/badge/developed%20at-Wimdu-FCAF16.svg?style=flat-square)](http://tech.wimdu.com/)

> **Compose small testable functions to modify props for components.**

## Install

```shell
$ npm install transform-props-with --save
```

or with [Yarn](https://github.com/yarnpkg/yarn)

```shell
$ yarn add transform-props-with
```

## Usage

```js
import tx from 'transform-props-with'

import BaseComponent from './base-component'

const doubleSize = (oldProps) => {
  const { size, ...props } = oldProps

  return {
    size: size * 2,
    ...props
  }
}

const EnhancedComponent = tx(doubleSize)(BaseComponent)

ReactDOM.render(<EnhancedComponent size={100} />, node)
// Would render <BaseComponent size={200} />
```

See the full [API documentation](docs/api.md) for details.

### Merge objects

Pass an object to merge it with provided props automatically.

```js
const EnhancedComponent = tx({ stars: 10 })(BaseComponent)

ReactDOM.render(<EnhancedComponent size={100} />, node)
// Would render <BaseComponent size={100} stars={ 10 } />

```

Note: this is *not* a deep merge. It is equal to this transformation:

```js
const setStarsTo10 = (oldProps) => Object.assign({}, oldProps, { stars: 10 })
```

### Multiple transformations

Pass an array of transformations to the function, and they will all be combined
to a single transformation *left to right*.

In the following example, `addFive` would be applied first, and `doubleSize`
will be called with props returned by it.

```js
const EnhancedComponent =
  tx([ addFive, doubleSize ])(BaseComponent)
```

Of course, transformations and object merges can be mixed.

```js
const EnhancedComponent =
  tx([ addFive, { stars: 10 }, doubleSize ])(BaseComponent)
```

### Refs to Components

React enables to get references to the DOM elements using `ref` props, cf. [documentation](https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute). When passed to an enhanced component this would point to the *wrapper*. The library will rename `__ref` to `ref` so the developer can access the DOM element of the inner component.

## Examples

* [Change a prop value](examples/double-size.js)
* [Wrap general component](examples/wrap-general-component.js)
* [Switch two props](examples/switch-foo-bar.js)
* [Track click](examples/track-click.js) (decorating `onClick`)
* [Build BEM components](https://github.com/agudulin/dumb-bem#usage) using [dumb-bem](https://www.npmjs.com/package/dumb-bem)

### Notes

* *Transform Props With* returns a stateless functional component; these were introduced in
React v0.14.0 ([release notes](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)).

* Polyfill for
[Array.prototype.reduce] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
might be needed to support older browsers.
