import * as seq from '../src';

test('remove works for simple cases', () => {
  expect(seq.just() |> seq.remove(1) |> seq.toArray).toEqual([]);
  expect(seq.just(1, 2, 3) |> seq.remove(1) |> seq.toArray).toEqual([ 1, 3 ]);
});
