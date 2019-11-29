import { defaultComparison } from './default-comparison.js';
import { map } from './map.js';
import { toArray } from './to-array.js';

export const sortedByDesc = (f, c = defaultComparison) => {
  if (!f) {
    throw new TypeError('f must be defined');
  }
  if (!c) {
    throw new TypeError('c must be defined');
  }
  const reversedComparison = (i, j) => c(j.score, i.score);
  return xs => ({
    [Symbol.iterator]: function * () {
      const ys = [ ...map(x => ({ score: f(x), value: x }))(xs) ];
      ys.sort(reversedComparison);
      yield * map(x => x.value)(ys);
    }
  });
};
