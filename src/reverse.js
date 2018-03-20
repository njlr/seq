import { toArray } from './to-array.js';

export const reverse = xs => () => function * () {
  const ys = xs |> toArray;
  ys.reverse();
  yield * ys;
};
