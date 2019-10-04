/** 
 * Takes an iterable and converts it into a set. 
 * This should only be called on finite iterables. 
 * @param {Object} xs The iterable.
 * @returns {Set}
 */
export const toSet = xs => {
  return new Set(xs);
};
