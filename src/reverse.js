import { toArray } from './to-array.js';

export const reverse = xs => ({
  [Symbol.iterator]: function * () {
    const ys = [ ...xs ];
    ys.reverse();
    yield * ys;
  }
});
