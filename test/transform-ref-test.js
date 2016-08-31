/* eslint-env jest */

jest.dontMock('../lib/transform-ref')

var transformRef = require('../lib/transform-ref').default

describe('tranformRef', function () {
  it('renames __ref to ref', function () {
    const newProps = transformRef({ __ref: 1 })
    expect(newProps.ref).toEqual(1)
  })

  it('does\'t provide fake ref', function () {
    const newProps = transformRef({ size: 2 })
    expect(newProps.ref).toBe(undefined)
  })

  it('doesn\'t throw an exception when no arguments', function () {
    expect(function () {
      transformRef()
    }).not.toThrow()
  })
})
