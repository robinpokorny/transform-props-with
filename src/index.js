import React from 'react'
import objectAssign from 'object-assign'

export default (transformations = []) => {
  const transformsList = []
    .concat(transformations)
    .map((tr) => {
      if (typeof tr === 'object') {
        return (oldProps) => objectAssign({}, oldProps, tr)
      }

      return tr
    })

  const transform = Array.prototype.reduceRight.bind(
    transformsList,
    (props, tr) => tr(props)
  )

  return (Component) => (props) => <Component {...transform(props)}/>
}
