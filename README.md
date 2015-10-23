# transform-props-with

**transformPropsWith** is a decorator for React components.

### Install

```shell
$ npm install transform-props-with --save
```

### Usage

```js
import transformPropsWith from 'transform-props-with';
import SmallComponent from './small-component'

const doubleSize = (oldProps) => {
  const { size, ...props } = oldProps;
  
  return {
    size: size * 2,
    ...props
  };
}

@transformPropsWith(doubleSize)
class BigComponent extends SmallComponent

ReactDOM.render(<BigComponent size={ 100 } />, node);
// Would render <SmallComponent size={ 200 } />
```

#### Note

**transformPropsWith** returns a stateless functional component, these were introduced in
React v0.14.0 ([release notes](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)).
