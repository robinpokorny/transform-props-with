import ReactDOM from 'react-dom'

import tx from 'transform-props-with'

import BaseComponent from './base-component'

const doubleSize = oldProps => {
  const { size, ...props } = oldProps

  return {
    size: size * 2,
    ...props
  }
}

const EnhancedComponent = tx(doubleSize)(BaseComponent)

ReactDOM.render(
  <EnhancedComponent size={100} />,
  document.getElementById('app')
)
// Would render <BaseComponent size={200} />
