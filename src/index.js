/** @module transform-props-with */

import React from 'react'
import objectAssign from 'object-assign'
import castArray from 'lodash/castArray'
import isPlainObject from 'lodash/isPlainObject'

/**
 * A number, or a string containing a number.
 * @typedef {object} Props
 */

/**
 * This callback is displayed as part of the Requester class.
 * @callback SimpleTransformation
 * @param {Props} oldProps
 * @return {Props}
 */

/**
 * Higher-order React Component.
 * @callback HigherOrderComponent
 * @param {React.Component} BaseComponent
 * @return {React.Component}
 */

/**
 * A number, or a string containing a number.
 * @typedef {(SimpleTransformation|object)} Transformation
 */

/**
 * Returns the sum of a and b
 * @param {Transformation} tr
 * @returns {SimpleTransformation}
 */
const expandShorthands = (tr) => {
  if (typeof tr === 'function') {
    return tr
  }

  if (isPlainObject(tr)) {
    return (oldProps) => objectAssign({}, oldProps, tr)
  }

  throw new Error('Transformation must be a function or a plain object.')
}

/**
 * Returns the sum of a and b
 * @function
 * @param {Transformation|Transformation[]} [transformations = []]
 * @returns {HigherOrderComponent}
 */
export default (transformations = []) => {
  const transformsList = castArray(transformations).map(expandShorthands)

  const transform = Array.prototype.reduce.bind(
    transformsList,
    (props, tr) => tr(props)
  )

  return (Component) => (props) => <Component {...transform(props)} />
}
