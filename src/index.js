import React from 'react'

export default (transformations = []) => {
  const transform = Array.prototype.reduceRight.bind(
    [].concat(transformations),
    (props, tr) => tr(props)
  )

  return (Component) => (props) => <Component {...transform(props)}/>
}
