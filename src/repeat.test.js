import * as seq from '../src';

test('repeat works for a simple case 1', () => {
  const actual = [ 1, 2, 3 ] 
    |> seq.fromArray
    |> seq.repeat(3)
    |> seq.toArray;
  const expected = [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ];
  expect(actual).toEqual(expected);
});
