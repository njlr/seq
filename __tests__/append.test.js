import * as seq from '../src';

test('append works for a simple case 1', () => {
  const actual = [] 
    |> (_ => seq.append(1, _)) 
    |> seq.toArray;
  const expected = [ 1 ];
  expect(actual).toEqual(expected);
});

test('append works for a simple case 2', () => {
  const actual = [ 1, 2, 3 ]
    |> (_ => seq.append(7, _)) 
    |> seq.toArray;
  const expected = [ 1, 2, 3, 7 ];
  expect(actual).toEqual(expected);
});

test('append works for a simple case 3', () => {
  const actual = [ 'b', 'c' ]
    |> (_ => seq.append('a', _)) 
    |> seq.toArray;
  const expected = [ 'b', 'c', 'a' ];
  expect(actual).toEqual(expected);
});
