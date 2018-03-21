# seq

A simple library for manipulating generators and arrays in JavaScript. 

[![Travis](https://img.shields.io/travis/njlr/seq.svg)](https://travis-ci.org/njlr/seq) 

```
yarn add @njlr/seq
```


## Why? 🤔

 * Some of the built-in Array functions are mutating (e.g. `Array.prototype.sort`). 
 * Many array functions are missing. Where is `Array.prototype.flatMap`?
 * A chain of array functions creates a new array at every stage: the operations are not lazy. 
 * [lodash](https://lodash.com/) and [friends](https://github.com/jussi-kalliokoski/trine) require either a wrapper object or binding for chaining calls. We use the [pipeline operator](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-pipeline-operator) (`|>`) to achieve this at compile-time! 
 * This package is a good citizen. It has no dependencies and does not mutate any global objects. 


## Demo

```javascript=
import * as seq from '@njlr/seq';

const x = [ 1, 5, 1, 2, 7, 3, 3, 4, 5, 0 ] 
  |> seq.unique()
  |> seq.map(x => x * 2)
  |> seq.filter(x => x > 4)
  |> seq.sorted()
  |> seq.toArray;

// x is [ 6, 8, 10, 14 ]
```

Since seq works on iterables, you can also use `for...of` loops:

```javascript=
import * as seq from '@njlr/seq';

for (const x of seq.range(10) |> seq.map(x => x * x)) {
  console.log(x);
}
```

This library also plays nicely with spread syntax! 

```javascript=
const squares = [ ... seq.range(10) |> seq.map(x => x * x) ];
```


## Development

Dependencies are managed by Yarn: 

```bash=
yarn install --pure-lockfile
```

To run all tests:

```bash=
yarn test
```

To build the library:

```bash=
yarn build
```

To release a new version:

```bash=
npm publish --access public 
```
