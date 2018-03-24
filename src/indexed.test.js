import * as seq from '../src';

test('indexed works for simple cases', () => {
  expect([] |> seq.indexed |> seq.toArray).toEqual([]);
  expect([ 'a' ] |> seq.indexed |> seq.toArray).toEqual([ [ 0, 'a' ] ]);
  expect([ 'a', 'b', 'c' ] |> seq.indexed |> seq.toArray).toEqual([ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ]);
});
