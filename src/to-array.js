/** 
 * Takes an iterable and converts it into an array. 
 * This shuld only be called on finite iterables. 
 * @param {Object} xs The iterable.
 * @returns {Array}
 */
export const toArray = xs => {
  if (Array.isArray(xs)) {
    return xs;
  }
  const result = [];
  for (const x of xs) {
    result.push(x);
  }
  return result;
};
