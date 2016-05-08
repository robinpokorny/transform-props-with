import React from 'react'
import objectAssign from 'object-assign'
import castArray from 'lodash/castArray'
import isPlainObject from 'lodash/isPlainObject'

const expandShorthands = (tr) => {
  if (typeof tr === 'function') {
    return tr
  }

  if (isPlainObject(tr)) {
    return (oldProps) => objectAssign({}, oldProps, tr)
  }

  throw new Error('Transformation must be a function or a plain object.')
}

export default (transformations = []) => {
  const transformsList = castArray(transformations).map(expandShorthands)

  const transform = Array.prototype.reduceRight.bind(
    transformsList,
    (props, tr) => tr(props)
  )

  return (Component) => (props) => <Component {...transform(props)} />
}
