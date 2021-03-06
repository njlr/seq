import * as seq from '../src';

test('skipUntil works for a simple case 1', () => {
  const actual = [ 1, 2, 3, 4, 5, 6 ]
    |> seq.fromArray
    |> seq.skipUntil(x => x > 3)
    |> seq.toArray;
  const expected = [ 4, 5, 6 ];
  expect(actual).toEqual(expected);
});

test('skipUntil works for the empty case', () => {
  const actual = []
    |> seq.fromArray
    |> seq.skipUntil(x => true)
    |> seq.toArray;
  const expected = [];
  expect(actual).toEqual(expected);
});