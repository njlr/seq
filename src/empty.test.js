import * as seq from '../src';

test('empty is actually empty', () => {

  const actual = seq.empty 
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
