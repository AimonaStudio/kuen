const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const extractCSS = isProd || process.env.TARGET === 'development'

const cssLoader = [
  'style-loader',
  'css-loader'
]

const stylusLoader = [
  extractCSS ? MiniCssExtractPlugin.loader : 'style-loader',
  { loader: 'css-loader', options: { sourceMap: !isProd } },
  { loader: 'postcss-loader', options: { sourceMap: !isProd } },
  { loader: 'stylus-loader', options: { sourceMap: !isProd } }
]

module.exports = {
  entry: path.resolve(__dirname, './src', 'main.js'),
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: cssLoader
      },
      {
        test: /\.styl(us)?$/,
        use: stylusLoader
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ],
  optimization: {
    minimize: isProd,
    minimizer: [
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          discardComments: { removeAll: true },
          postcssZindex: false,
          reduceIdents: false
        },
        canPrint: false
      })
    ]
  },
  performance: {
    hints: false
  },
  stats: { children: false }
}
