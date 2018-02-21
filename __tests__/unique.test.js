import * as seq from '../src';

const numberEquality = {
  hashCode: x => x, 
  isEqual: (x ,y) => x === y,
};

test('unique works for a simple case 1', () => {

  const actual = [ 0, 0, 2, 3, 4, 4, 3, 7, 0 ] 
    |> (_ => seq.unique(numberEquality, _))
    |> seq.toArray;
  
  const expected = [ 0, 2, 3, 4, 7 ];

  expect(actual).toEqual(expected);
});

test('unique works for a simple case 2', () => {

  const actual = [ 'a', 'b', 'a', 'c', 'c' ] 
    |> (_ => seq.unique(seq.defaultEquality, _))
    |> seq.toArray;
  
  const expected = [ 'a', 'b', 'c' ];

  expect(actual).toEqual(expected);
});

test('unique works for a simple case 3', () => {

  const actual = [ 'a', 'b', 'c' ] 
    |> (_ => seq.unique(seq.defaultEquality, _))
    |> seq.toArray;
  
  const expected = [ 'a', 'b', 'c' ];

  expect(actual).toEqual(expected);
});

test('unique works for the empty case', () => {

  const actual = [] 
    |> (_ => seq.unique(numberEquality, _))
    |> seq.toArray;
  
  const expected = [];

  expect(actual).toEqual(expected);
});
