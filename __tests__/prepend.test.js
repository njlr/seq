import * as seq from '../src';

test('prepend works for a simple case 1', () => {
  const actual = [] 
    |> (_ => seq.prepend(1, _)) 
    |> seq.toArray;
  const expected = [ 1 ];
  expect(actual).toEqual(expected);
});

test('prepend works for a simple case 2', () => {
  const actual = [ 1, 2, 3 ]
    |> (_ => seq.prepend(7, _)) 
    |> seq.toArray;
  const expected = [ 7, 1, 2, 3 ];
  expect(actual).toEqual(expected);
});

test('prepend works for a simple case 3', () => {
  const actual = [ 'b', 'c' ]
    |> (_ => seq.prepend('a', _)) 
    |> seq.toArray;
  const expected = [ 'a', 'b', 'c' ];
  expect(actual).toEqual(expected);
});
