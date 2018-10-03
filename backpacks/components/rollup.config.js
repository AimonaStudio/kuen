import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import pkg from './package.json'

const dev = 'development'
const prod = 'production'

function parseNodeEnv (nodeEnv) {
  if (nodeEnv === prod || nodeEnv === dev) {
    return nodeEnv
  }
  return dev
}

const nodeEnv = parseNodeEnv(process.env.NODE_ENV)

const bffPlugins = [
  resolve({
    jsnext: true
  }),
  commonjs({
    jail: './src',
    only: 'node_modules/**'
  }),
  vue(),
  typescript(),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true
  })
]
const otherConfig = {}

let devRollup = {}

let prodRollup = {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  external: id => [
    '@bff',
    'babel-runtime',
    'lodash'
  ].some(s => id.includes(s)),
  plugins: bffPlugins,
  ...otherConfig
}

let exports = [
  prodRollup
]

if (nodeEnv === prod) {
  bffPlugins.push(
    // FIXME:  (terser plugin) Error: Farm is ended, no more calls can be done to it
    // terser({
    //   toplevel: false,
    //   output: {
    //     beautify: false
    //   }
    // }) // minify generated bundle
  )
}

export default exports
