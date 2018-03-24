import * as seq from '../src';

test('last works as expected', () => {
  expect([ 1 ] |> seq.fromArray |> seq.last()).toEqual(1);
  expect([ 'a', 'b', 'c' ] |> seq.fromArray |> seq.last()).toEqual('c');
});

test('last throws for an empty sequence', () => {
  expect(() => [] |> seq.fromArray |> seq.last()).toThrow();
});

test('last throws with a custom function', () => {
  expect([ 1, 2, 3, 4, 5 ] |> seq.last(x => x % 2 == 0)).toEqual(4);
});
