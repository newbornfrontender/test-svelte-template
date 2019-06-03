import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import preprocess from 'svelte-preprocess';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  treeshake: production,
  output: {
    sourcemap: true,
    format: 'esm',
    file: 'public/bundle.js',
  },
  plugins: [
    replace({
      NODE_ENV: production && JSON.stringify('production'),
    }),
    svelte({
      dev: !production,
      preprocess: preprocess({
        postcss: true,
      }),
      css: (css) => {
        css.write('public/bundle.css');
      },
    }),
    resolve(),
    babel(),
    !production && livereload('public'),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
