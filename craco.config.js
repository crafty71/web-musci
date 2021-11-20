const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 32
})

module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components")
    }
  },
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}