/** 
 * Tests if a given object is an iterable 
 * @param {Object} xs The object to test.
 * @returns {Boolean}
 */
export const isIterable = xs => !!xs && !!xs[Symbol.iterator];
