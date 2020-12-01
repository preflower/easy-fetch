import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.esm.js",
      format: "es",
    },
    {
      name: 'easyFetch',
      file: "dist/bundle.umd.js",
      format: "umd",
    }
  ],
  plugins: [typescript(), terser()],
};
