import * as seq from '../src';

test('sortedBy works for a simple case 1', () => {

  const actual = [ -4, 3, -1, 7 ] 
    |> seq.fromArray
    |> seq.sortedBy(x => Math.abs(x))
    |> seq.toArray;
  
  const expected = [ -1, 3, -4, 7 ];

  expect(actual).toEqual(expected);
});