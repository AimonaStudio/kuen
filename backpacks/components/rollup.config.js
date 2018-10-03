import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'
// import serve from 'rollup-plugin-serve'
import commonjs from 'rollup-plugin-commonjs'
// import { uglify } from 'rollup-plugin-uglify'
// import { terser } from 'rollup-plugin-terser'
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
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3005

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

// MARK: Use Vue-cli
// if (nodeEnv === dev) {
//   devRollup = {
//     input: './dev/module.js',
//     output: [
//       { file: './dist/main.js', format: 'iife', sourcemap: true }
//     ],
//     plugins: [
//       ...bffPlugins,
//       serve({
//         contentBase: ['./dist', './dev'],
//         publicPath: '/dev/',
//         host: host,
//         port: port,
//         historyApiFallback: true,
//         open: true,
//         headers: {
//           'Access-Control-Allow-Origin': '*'
//         }
//       })
//     ],
//     watch: {
//       include: './dev/**'
//     }
//   }
//   otherConfig['watch'] = {
//     include: './src/**'
//   }
//   exports.push(devRollup)
// }

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
