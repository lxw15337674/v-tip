import base from './rollup.base'
import babel from 'rollup-plugin-babel'
import { merge } from 'lodash'
const config =Object.assign({},base,{
  input: 'src/index.ts',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  output:{
    exports: 'named',
    file: 'dist/v-tip.js',
    format: 'umd',
    name: 'v-tip',
  }
})

export default config
