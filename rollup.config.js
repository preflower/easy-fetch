import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'easyFetch',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    typescript(),
  ],
};