import * as seq from '../src';

test('just works for simple cases', () => {
  expect(seq.just() |> seq.toArray).toEqual([]);
  expect(seq.just(1, 2, 3) |> seq.toArray).toEqual([ 1, 2, 3 ]);
});
