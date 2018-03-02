import * as seq from '../src';

test('append works for a simple case 1', () => {
  const actual = [] 
    |> seq.append(1)
    |> seq.toArray;
  const expected = [ 1 ];
  expect(actual).toEqual(expected);
});

test('append works for a simple case 2', () => {
  const actual = [ 1, 2, 3 ]
    |> seq.append(7)
    |> seq.toArray;
  const expected = [ 1, 2, 3, 7 ];
  expect(actual).toEqual(expected);
});

test('append works for a simple case 3', () => {
  const actual = [ 'b', 'c' ]
    |> seq.append('a')
    |> seq.toArray;
  const expected = [ 'b', 'c', 'a' ];
  expect(actual).toEqual(expected);
});
