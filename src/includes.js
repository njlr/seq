import { defaultEquality } from './default-equality.js';

/** 
 * Tests if a an iterable contains a given element. 
 * Also takes an equality object as an optional argument. 
 * This function is partially curried. 
 * @param {Object} element The element to look for. 
 * @param {Object} [equality=defaultEquality] The equality system to use. 
 * @param {Object} xs The iterable to search. 
 * @returns {boolean}
 */
export const includes = (element, equality = defaultEquality) => {
  const { isEqual } = equality;
  if (!isEqual) {
    throw new TypeError('equality must have a isEqual property');
  }
  return xs => {
    for (const x of xs) {
      if (isEqual(element, x)) {
        return true;
      }
    }
    return false;
  };
};
