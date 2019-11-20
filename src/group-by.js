import { defaultEquality } from './default-equality.js';
import { dict } from './dict.js';
import { fromGenerator } from './from-generator.js';
import { filter } from './filter.js';
import { buffer } from './buffer.js';

/**
 * Returns an iterable of iterables split by the grouping function.
 * If the iterable is empty then an error is thrown.
 * This function is partially curried.
 * @param {Object} f the grouping function.
 * @param {Object} [equality=defaultEquality] The equality system to use.
 * @param {Object} xs The iterable.
 * @returns {Object}
 */
export const groupBy = (f, equality = defaultEquality) => xs => {
  const { hashCode, isEqual } = equality;

  return fromGenerator(function * () {
    const d = dict(equality);

    for (const x of xs |> buffer) {
      const key = f(x);
      const group = d.get(key);

      if (group === undefined) {
        const keyHashCode = hashCode(key);

        const group = xs
          |> filter(y => {
            const z = f(y);
            return hashCode(z) === keyHashCode && isEqual(key, z);
          });

        yield [ key, group ];

        d.set(key, group);
      }
    }
  });
};
