import base from './rollup.base'
const config =Object.assign({},base,{
  input: 'src/index.ts',
  output:{
    exports: 'named',
    file: 'dist/v-tip.js',
    format: 'umd',
    name: 'v-tip',
  }
})

export default config
