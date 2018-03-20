import { defaultComparison } from './default-comparison.js';
import { toArray } from './to-array.js';

export const sorted = (c = defaultComparison) => {
  if (!c) {
    throw new TypeError('c must be defined');
  }
  return xs => () => function * () {
    const ys = xs |> toArray;
    ys.sort(c);
    yield * ys;
  };
};
