import * as seq from '../src';

test('max works for simple cases', () => {
  
  expect(seq.just(2) |> seq.max()).toEqual(2);
  expect(seq.just(2, 3, 1, 4) |> seq.max()).toEqual(4);
  expect(seq.just(3, 2, 1) |> seq.max()).toEqual(3);
  expect(seq.just(-2, 2) |> seq.max()).toEqual(2);

  expect([ 2 ] |> seq.max()).toEqual(2);
  expect([ 2, 3, 1, 4 ] |> seq.max()).toEqual(4);

  expect(() => seq.just() |> seq.max()).toThrow();
});
