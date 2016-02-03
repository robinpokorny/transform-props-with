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

const DecoratedComponent = transformPropsWith(doubleSize)(BaseComponent)

ReactDOM.render(
  <DecoratedComponent size={ 100 } />,
  document.getElementById('app')
)
// Would render <BaseComponent size={ 200 } />
