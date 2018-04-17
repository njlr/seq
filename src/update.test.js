import * as seq from '../src';

test('update works for simple cases', () => {
  expect(seq.just() |> seq.update(1, x => x * 2) |> seq.toArray).toEqual([]);
  expect(seq.just(1, 2, 3) |> seq.update(1, x => x * 2) |> seq.toArray).toEqual([ 1, 4, 3 ]);
});
