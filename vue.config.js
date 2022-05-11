const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData:`
          @import "~@/styles/sass/abstracts/mixins";
          @import "~@/styles/sass/abstracts/varibles";
          @import "~@/styles/sass/abstracts/function";
          @import "~@/styles/sass/base/utilities";
          @import "~@/styles/sass/base/base";     
        `
      }
    }
  },
  devServer: {
    port: 8080,
    host: '192.168.31.228'
  },
  lintOnSave: false,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html'
}