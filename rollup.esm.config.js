import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'esm/index.js',
    format: 'esm'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
