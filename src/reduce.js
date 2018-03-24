/** 
 * Performs a reduction of an iterable, starting from a given state and reducer function. 
 * Note that this function must not be called on an infinite iterable. 
 * This function is partially curried. 
 * @param {Object} s The initial state. 
 * @param {Object} f The reducer function. 
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const reduce = (s, f) => (xs) => {
  let w = s;
  for (const x of xs) {
    w = f(w, x);
  }
  return w;
};
