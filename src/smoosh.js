import { isIterable } from './is-iterable.js';

const peek = xs => xs[xs.length - 1];

/** 
 * Deep flattens an iterable and all of its nested iterables. 
 * Strings are not considered iterables for this function. 
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const smoosh = xs => ({
  [Symbol.iterator]: function * () {
    const pending = [ xs[Symbol.iterator]() ];
    while (pending.length > 0) {
      let { value, done } = peek(pending).next();
      if (done) {
        pending.pop();
      } else {
        if (typeof value !== 'string' && isIterable(value)) {
          pending.push(value[Symbol.iterator]());
        } else {
          yield value;
        }
      }
    }
  }
});
