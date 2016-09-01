/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import { wrap } from 'react-stateless-wrapper'

import tx from '../'

const BaseComponent = (props) =>
  React.createElement('div', null, props.size) // eslint-disable-line

const doubleSize = (oldProps) =>
  ({ size: oldProps.size * 2 })

const addFive = (oldProps) =>
  ({ size: oldProps.size + 5 })

describe('transformPropsWith', () => {
  it('works', () => {
    const EnhancedComponent = wrap(
      tx(doubleSize)(BaseComponent)
    )
    const component = TestUtils.renderIntoDocument(
      React.createElement(EnhancedComponent, { size: 10 })
    )
    const node = ReactDOM.findDOMNode(component)

    expect(node.textContent).toEqual('20')
  })

  it('does not modify original component with no transformations', () => {
    const EnhancedComponent = wrap(
      tx()(BaseComponent)
    )
    const component = TestUtils.renderIntoDocument(
      React.createElement(EnhancedComponent, { size: 10 })
    )
    const node = ReactDOM.findDOMNode(component)

    expect(node.textContent).toEqual('10')
  })

  it('accepts array of transformations', () => {
    const EnhancedComponent = wrap(
      tx([ addFive, doubleSize ])(BaseComponent)
    )
    const component = TestUtils.renderIntoDocument(
      React.createElement(EnhancedComponent, { size: 10 })
    )
    const node = ReactDOM.findDOMNode(component)

    expect(node.textContent).toEqual('30')
  })

  it('merges props with object', () => {
    const EnhancedComponent = wrap(
      tx({ size: 30 })(BaseComponent)
    )
    const component = TestUtils.renderIntoDocument(
      React.createElement(EnhancedComponent, { size: 10 })
    )
    const node = ReactDOM.findDOMNode(component)

    expect(node.textContent).toEqual('30')
  })

  it('accepts mixed array of transformations and objects', () => {
    const EnhancedComponent = wrap(
      tx([ { size: 10 }, doubleSize ])(BaseComponent)
    )
    const component = TestUtils.renderIntoDocument(
      React.createElement(EnhancedComponent, {})
    )
    const node = ReactDOM.findDOMNode(component)

    expect(node.textContent).toEqual('20')
  })

  it('throws an error on unsupported input', () => {
    expect(() => { tx('Pludek') }).toThrow()
    expect(() => { tx(1963) }).toThrow()
    expect(() => { tx(null) }).toThrow()
    expect(() => { tx([doubleSize, []]) }).toThrow()
    expect(() => { tx(Symbol()) }).toThrow()
    expect(() => { tx(Promise.resolve()) }).toThrow()
  })
})
