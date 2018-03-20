import * as seq from '../src';

test('prepend works for a simple case 1', () => {
  const actual = [] 
    |> seq.fromArray
    |> seq.prepend(1)
    |> seq.toArray;
  const expected = [ 1 ];
  expect(actual).toEqual(expected);
});

test('prepend works for a simple case 2', () => {
  const actual = [ 1, 2, 3 ]
    |> seq.fromArray
    |> seq.prepend(7)
    |> seq.toArray;
  const expected = [ 7, 1, 2, 3 ];
  expect(actual).toEqual(expected);
});

test('prepend works for a simple case 3', () => {
  const actual = [ 'b', 'c' ]
    |> seq.fromArray
    |> seq.prepend('a')
    |> seq.toArray;
  const expected = [ 'a', 'b', 'c' ];
  expect(actual).toEqual(expected);
});
