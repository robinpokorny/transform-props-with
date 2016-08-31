/** @module transform-props-with */

import React from 'react'
import castArray from 'lodash/castArray'
import isPlainObject from 'lodash/isPlainObject'

/**
 * A plain object. Should not be mutated.
 * @typedef {object} Props
 * @global
 */

/**
 * Middleware function for changing props.
 * A function which takes Props as input and returns new Props.
 * @callback SimpleTransformation
 * @param {Props} oldProps
 * @return {Props}
 * @global
 */

/**
 * Higher-order React Component.
 * A function that enhances passed component.
 * @callback HigherOrderComponent
 * @param {React.Component} BaseComponent
 * @return {React.Component}
 * @global
 */

/**
 * When a plane object is passed it will be used to
 * extend props (with override).
 * @typedef {(SimpleTransformation|object)} Transformation
 * @global
 */

/**
 * Returns the sum of a and b
 * @param {Transformation} tr
 * @returns {SimpleTransformation}
 * @alias expandShorthands
 * @private
 */
const expandShorthands = (tr) => {
  if (typeof tr === 'function') {
    return tr
  }

  if (isPlainObject(tr)) {
    return (oldProps) => Object.assign({}, oldProps, tr)
  }

  throw new Error('Transformation must be a function or a plain object.')
}

/**
 * Transforms __ref to ref
 * @param {object} props
 * @returns {object}
 * @private
 */
const transformRef = ({ __ref, ...props }) => __ref ? { ref: __ref, ...props } : props

/**
 * A list of default transformations
 */
const defaultTransformations = [transformRef]

/**
 * Higher-order component generator.
 * Will change props with passed transformaton(s).
 * Array of transformatons is evaluated left to right.
 * @function default
 * @param {Transformation|Transformation[]} [transformations = []]
 * @returns {HigherOrderComponent}
 */
export default (transformations = []) => {
  const transformsList = defaultTransformations.concat(
    castArray(transformations)
  ).map(expandShorthands)

  const transform = Array.prototype.reduce.bind(
    transformsList,
    (props, tr) => tr(props)
  )

  return (Component) => (props) => <Component {...transform(props)} />
}
