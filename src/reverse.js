import { toArray } from './to-array.js';

export const reverse = xs => ({
  [Symbol.iterator]: function * () {
    const ys = xs |> toArray;
    ys.reverse();
    yield * ys;
  }
});
