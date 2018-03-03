import * as seq from '../src';

test('range works as expected', () => {

  expect(seq.range(0) |> seq.toArray).toEqual([]);
  expect(seq.range(1) |> seq.toArray).toEqual([ 0 ]);
  expect(seq.range(3) |> seq.toArray).toEqual([ 0, 1, 2 ]);

  expect(seq.range() |> seq.take(3) |> seq.toArray).toEqual([ 0, 1, 2 ]);

  expect(() => seq.range(-3) |> seq.toArray).toThrow(RangeError);
  expect(() => seq.range('3') |> seq.toArray).toThrow(TypeError);
});
