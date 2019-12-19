import * as seq from '../src';

const numericEquality = {
  hashCode: x => x,
  isEqual: (x ,y) => x === y,
};

test('distinctUntilChanged works for a simple case 1', () => {

  const actual = [ 0, 0, 2, 3, 4, 4, 3, 7, 0 ]
    |> seq.fromArray
    |> seq.distinctUntilChanged(numericEquality)
    |> seq.toArray;

  const expected = [ 0, 2, 3, 4, 3, 7, 0 ];

  expect(actual).toEqual(expected);
});

test('distinctUntilChanged works for a simple case 2', () => {

  const actual = [ 'a', 'b', 'a', 'c', 'c' ]
    |> seq.fromArray
    |> seq.distinctUntilChanged(seq.defaultEquality)
    |> seq.toArray;

  const expected = [ 'a', 'b', 'a', 'c' ];

  expect(actual).toEqual(expected);
});

test('distinctUntilChanged works for a simple case 3', () => {

  const actual = [ 'a', 'b', 'c' ]
    |> seq.fromArray
    |> seq.distinctUntilChanged()
    |> seq.toArray;

  const expected = [ 'a', 'b', 'c' ];

  expect(actual).toEqual(expected);
});

test('distinctUntilChanged works for a simple case 4', () => {

  const actual = [ { x: 'a'}, { x: 'b' }, { x: 'b' }, { x: 'a'}, { x: 'c'} ]
    |> seq.fromArray
    |> seq.distinctUntilChanged(seq.structuralEquality)
    |> seq.toArray;

  const expected = [ { x: 'a'}, { x: 'b' }, { x: 'a'}, { x: 'c'} ];

  expect(actual).toEqual(expected);
});

test('distinctUntilChanged works for the empty case', () => {

  const actual = []
    |> seq.fromArray
    |> seq.distinctUntilChanged(numericEquality)
    |> seq.toArray;

  const expected = [];

  expect(actual).toEqual(expected);
});
