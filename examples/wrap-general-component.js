import ReactDOM from 'react-dom'

import tx from 'transform-props-with'

import BaseComponent from './base-component'

const EnhancedComponent = tx({ prefix: 'vh-' })(BaseComponent)

ReactDOM.render(
  <EnhancedComponent bar={1936} />,
  document.getElementById('app')
)
// Would render <BaseComponent prefix='vh-' bar={1936} />
