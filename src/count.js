/** 
 * Counts the number of elements in an iterable. 
 * @param {Object} xs The iterable.
 * @returns {number}
 */
export const count = xs => {
  let i = 0;
  for (const _ of xs) {
    i++;
  }
  return i;
};
