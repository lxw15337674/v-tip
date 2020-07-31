import base from './rollup.base'
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { merge } from 'lodash'

const port = 8080;

const config = merge(base, {
  input: 'example/main.js',
  plugins: [
    serve({
      open: true,
      contentBase: 'public',
      historyApiFallback: true,
      port,
    }),
    livereload({ watch: 'public' }),
  ],
  output: {
    file: 'public/assets/app.js',
    format: 'iife',
    sourcemap: false,
    name: 'app',
  },
})
export default config
