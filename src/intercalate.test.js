import * as seq from '../src';

test('intercalate works for simple cases', () => {
  expect([] |> seq.intercalate('x') |> seq.toArray).toEqual([]);

  expect(
    [ 'a' ]
    |> seq.intercalate('x')
    |> seq.toArray
  ).toEqual([ 'a' ]);

  expect(
    [ 'a', 'b', 'c' ]
    |> seq.intercalate('x')
    |> seq.toArray
  ).toEqual([ 'a', 'x', 'b', 'x', 'c' ]);
});
