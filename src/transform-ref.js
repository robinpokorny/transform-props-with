/**
 * Transforms __ref to ref
 * @param {object} props
 * @returns {object}
 * @private
 */
export default ({ __ref, ...props } = {}) =>
  __ref
    ? { ref: __ref, ...props }
    : props
