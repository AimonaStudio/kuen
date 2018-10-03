import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
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

export default {
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
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    vue(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [
        'external-helpers'
      ]
    })
  ],
  watch: {
    include: 'src/**'
  }
}
