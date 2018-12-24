const path = require('path')
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('~@', path.resolve(__dirname, 'node_modules'))
    config.resolve.extensions.merge(['.styl'])
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
