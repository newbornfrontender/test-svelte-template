import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import preprocess from 'svelte-preprocess';
import babel from 'rollup-plugin-babel';

const isProd = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  treeshake: isProd,
  output: {
    sourcemap: true,
    format: 'esm',
    file: 'public/bundle.js',
  },
  plugins: [
    svelte({
      dev: !isProd,
      preprocess: preprocess({
        postcss: {
          isProd,
        },
      }),
      css: (css) => {
        css.write('public/bundle.css');
      },
    }),
    resolve(),
    babel(),
    !isProd && livereload('public'),
    isProd &&
      terser({
        module: true,
      }),
  ],
  watch: {
    clearScreen: false,
  },
};
