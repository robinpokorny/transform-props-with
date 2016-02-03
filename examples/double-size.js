import React from 'react'
import ReactDOM from 'react-dom'

import transformPropsWith from 'transform-props-with'
import BaseComponent from './base-component'

const doubleSize = (oldProps) => {
  const { size, ...props } = oldProps

  return {
    size: size * 2,
    ...props
  }
}

@transformPropsWith(doubleSize)
class DecoratedComponent extends BaseComponent {}

ReactDOM.render(
  <DecoratedComponent size={ 100 } />,
  document.getElementById('app')
)
// Would render <BaseComponent size={ 200 } />
