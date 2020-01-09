import * as seq from '../src';

test('allPairs works for the empty case', () => {
  expect([] |> seq.allPairs([]) |> seq.toArray).toEqual([]);
});

test('allPairs works for a simple case a', () => {
  const actual = [ 'a', 'b' ]
    |> seq.allPairs ([ 'x', 'y', 'z' ])
    |> seq.toArray;

  const expected = [
    [ 'a', 'x' ],
    [ 'a', 'y' ],
    [ 'a', 'z' ],
    [ 'b', 'x' ],
    [ 'b', 'y' ],
    [ 'b', 'z' ],
  ];

  expect(actual).toEqual(expected);
});

test('allPairs works for a simple case b', () => {
  const actual = [ 'a', 'b' ]
    |> seq.allPairs ([ 'x' ])
    |> seq.toArray;

  const expected = [
    [ 'a', 'x' ],
    [ 'b', 'x' ],
  ];

  expect(actual).toEqual(expected);
});

test('allPairs works for a simple case c', () => {
  const actual = []
    |> seq.allPairs ([ 'x', 'y' ])
    |> seq.toArray;

  const expected = [];

  expect(actual).toEqual(expected);
});

