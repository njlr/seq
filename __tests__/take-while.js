import * as seq from '../src';

test('takeWhile works for a simple case 1', () => {
  const actual = [ 1, 2, 3, 4, 1, 2, 3, 4 ] 
    |> (_ => seq.takeWhile(x => x < 4, _))
    |> seq.toArray;
  const expected = [ 1, 2, 3 ];
  expect(actual).toEqual(expected);
});

test('takeWhile works for the empty case', () => {
  const actual = [] 
    |> (_ => seq.takeWhile(x => true, _))
    |> seq.toArray;
  const expected = [];
  expect(actual).toEqual(expected);
});
