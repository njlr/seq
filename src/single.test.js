import * as seq from '../src';

test('single works as expected', () => {
  expect([ 1 ] |> seq.fromArray |> seq.single()).toEqual(1);
  expect([ 'a' ] |> seq.fromArray |> seq.single()).toEqual('a');
});

test('single throws for an empty sequence', () => {
  expect(() => [] |> seq.fromArray |> seq.single()).toThrow();
});

test('single throws for sequences longer than 1', () => {
  expect(() => [ 1, 2 ] |> seq.fromArray |> seq.single()).toThrow();
  expect(() => [ 1, 2, 3 ] |> seq.fromArray |> seq.single()).toThrow();
});

test('single works with a custom function', () => {
  const entries = [ 
    { key: 1, value: 'a' }, 
    { key: 2, value: 'b' }, 
    { key: 3, value: 'c' } 
  ];
  expect(entries |> seq.single(x => x.key == 2)).toEqual({ key: 2, value: 'b' });
});
