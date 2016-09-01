/**
 * Transforms __ref to ref
 * @param {object} props
 * @returns {object}
 * @private
 */
export default (oldProps = {}) => {
  const { __ref, ...props } = oldProps

  if (!__ref) return oldProps

  return ({ ...props, ref: __ref })
}
