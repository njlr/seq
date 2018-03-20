import * as seq from '../src';

test('concat works for a simple case 1', () => {
  const actual = [] 
    |> seq.fromArray
    |> seq.concat([ 1, 2, 3] |> seq.fromArray)
    |> seq.toArray;
  const expected = [ 1, 2, 3 ];
  expect(actual).toEqual(expected);
});

test('concat works for a simple case 2', () => {
  const actual = [ 1, 2, 3 ]
    |> seq.fromArray
    |> seq.concat([ 7 ] |> seq.fromArray)
    |> seq.toArray;
  const expected = [ 1, 2, 3, 7 ];
  expect(actual).toEqual(expected);
});

test('concat works for a simple case 3', () => {
  const actual = [ 'a', 'b' ]
    |> seq.fromArray
    |> seq.concat([ 'c' ] |> seq.fromArray) 
    |> seq.toArray;
  const expected = [ 'a', 'b', 'c' ];
  expect(actual).toEqual(expected);
});
