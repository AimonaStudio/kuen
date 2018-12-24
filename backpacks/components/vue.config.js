const path = require('path')

// mini
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

// postcss plugins
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('~@', path.resolve(__dirname, 'node_modules'))
    config.resolve.extensions.merge(['.styl'])
    config.plugin('lodash-webpack-plugin').use(LodashModuleReplacementPlugin)
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            browsers: ['>0.5%', 'last 2 versions', 'not dead', 'not op_mini all']
          }),
          mqpacker()
        ]
      }
    }
  }
}
