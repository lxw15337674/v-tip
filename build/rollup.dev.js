import base from './rollup.base'
const config =Object.assign({},base,{
  input: 'example/main.js',

  output: {
    file: 'public/assets/app.js',
    format: 'iife',
    sourcemap: false,
    name: 'app',
  },
})

export default config
