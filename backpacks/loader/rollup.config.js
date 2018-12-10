import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

// local config
import pkg from './package.json'

/*
const dev = 'development'
const prod = 'production'

function parseNodeEnv (nodeEnv) {
  if (nodeEnv === prod || nodeEnv === dev) {
    return nodeEnv
  }
  return dev
}

const nodeEnv = parseNodeEnv(process.env.NODE_ENV)
*/

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  external: id => [
    '@kuen',
    '@babel/runtime',
    'lodash'
  ].some(s => id.includes(s)),
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    commonjs({
      include: 'node_modules/**'
    })
  ],
  watch: {
    include: 'src/**'
  }
}
