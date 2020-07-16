import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';
import esbuild from 'rollup-plugin-esbuild';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import typescript from 'rollup-plugin-typescript2';

const production = !process.env.ROLLUP_WATCH;
const port = 8080;
export default {
  plugins: [
    alias({
      entries: [
        { find: '@', replacement:'../src' }
      ]
    }),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    postcss({ extract: true }),
    vue({ css: true }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({ extensions: ['.js', '.vue','.ts'], browser: true, preferBuiltins: true }),
    commonjs(),
    esbuild({
      minify: production,
      target: 'es2015',
    }),
    !production &&
    serve({
      open: true,
      contentBase: 'public',
      historyApiFallback: true,
      port,
    }),
    !production && livereload({ watch: 'public' }),
  ],
};
