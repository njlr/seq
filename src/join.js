/** 
 * Joins all elements in an iterable using the given seperator. 
 * If the iterable is empty then the empty string is returned. 
 * @param {String=} s The seperator string. 
 * @param {Object} xs The iterable to join. 
 * @returns {String}
 */
export const join = (s = '') => xs => {
  if (!xs || !xs[Symbol.iterator]) {
    throw new TypeError('xs must be iterable');
  }
  let result = '';
  let isFirst = true;
  for (const x of xs) {
    if (isFirst) {
      result = x;
      isFirst = false;
    } else {
      result = result + s + x;
    }
  }
  return result;
};
