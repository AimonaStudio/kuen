const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')

module.exports = () => ({
  plugins: [
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    mqpacker()
  ]
})
