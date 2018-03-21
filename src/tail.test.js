import * as seq from '../src';

test('tail works for simple cases', () => {
  expect([ 1, 2, 3 ] |> seq.tail |> seq.toArray).toEqual([ 2, 3 ]);
  expect([ 1 ] |> seq.tail |> seq.toArray).toEqual([]);
  expect(() => [] |> seq.tail |> seq.toArray).toThrow();
});
