import * as seq from '../src';

test('set works for simple cases', () => {
  expect(seq.just() |> seq.set(1, 'a') |> seq.toArray).toEqual([]);
  expect(seq.just(1, 2, 3) |> seq.set(1, 'a') |> seq.toArray).toEqual([ 1, 'a', 3 ]);
});
