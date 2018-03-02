import * as seq from '../src';

test('takeWhile works for a simple case 1', () => {
  const actual = [ 1, 2, 3, 4, 1, 2, 3, 4 ] 
    |> seq.takeWhile(x => x < 4)
    |> seq.toArray;
  const expected = [ 1, 2, 3 ];
  expect(actual).toEqual(expected);
});

test('takeWhile works for the empty case', () => {
  const actual = [] 
    |> seq.takeWhile(x => true)
    |> seq.toArray;
  const expected = [];
  expect(actual).toEqual(expected);
});
