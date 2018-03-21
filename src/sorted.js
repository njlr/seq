import { defaultComparison } from './default-comparison.js';
import { toArray } from './to-array.js';

export const sorted = (c = defaultComparison) => {
  if (!c) {
    throw new TypeError('c must be defined');
  }
  return xs => ({
    [Symbol.iterator]: function * () {
      const ys = [ ...xs ];
      ys.sort(c);
      yield * ys;
    }
  });
};
