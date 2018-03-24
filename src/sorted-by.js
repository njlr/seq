import { defaultComparison } from './default-comparison.js';
import { map } from './map.js';
import { toArray } from './to-array.js';

export const sortedBy = (f, c = defaultComparison) => {
  if (!f) {
    throw new TypeError('f must be defined');
  }
  if (!c) {
    throw new TypeError('c must be defined');
  }
  const comparison = (i, j) => c(i.score, j.score);
  return xs => ({
    [Symbol.iterator]: function * () {
      const ys = [ ...map(x => ({ score: f(x), value: x }))(xs) ];
      ys.sort(comparison);
      yield * map(x => x.value)(ys);
    }
  });
};
