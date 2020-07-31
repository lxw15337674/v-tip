import base from './rollup.base'
import babel from 'rollup-plugin-babel'
import { merge } from 'lodash'
const config = merge(base, {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  output: {
    exports: 'named',
    file: 'dist/index.js',
    format: 'umd',
    name: 'index',
    assetFileNames: "[name]-[hash][extname]",
  }
})
export default config
