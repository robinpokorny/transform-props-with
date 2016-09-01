/* eslint-env jest */

var transformRef = require('../lib/transform-ref').default

describe('tranformRef', function () {
  it('renames __ref to ref', function () {
    const newProps = transformRef({ __ref: 1 })
    expect(newProps.ref).toEqual(1)
  })

  it('does not changes props when __ref is missing', function () {
    const oldProps = { size: 2 }
    const newProps = transformRef(oldProps)
    expect(newProps).toBe(oldProps)
  })

  it('overides ref when it is also present', function () {
    const oldProps = { ref: 2, __ref: 1 }
    const newProps = transformRef(oldProps)
    expect(newProps.ref).toBe(1)
  })

  it('does not throw an exception when no arguments', function () {
    expect(transformRef).not.toThrow()
  })
})
