import * as seq from '../src';

test('sortedByDesc works for the empty case', () => {

  const actual = []
    |> seq.fromArray
    |> seq.sortedByDesc(x => Math.abs(x))
    |> seq.toArray;

  expect(actual).toEqual([]);
});

test('sortedByDesc works for a simple case 1', () => {

  const actual = [ -4, 3, -1, 7 ]
    |> seq.fromArray
    |> seq.sortedByDesc(x => Math.abs(x))
    |> seq.toArray;

  const expected = [ 7, -4, 3, -1 ];

  expect(actual).toEqual(expected);
});
