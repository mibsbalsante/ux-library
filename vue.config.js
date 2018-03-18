const path = require('path')

module.exports = {
  lintOnSave: true,
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    hotOnly: true
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: [ path.resolve('./src/assets') ],
        data: `@import "~${path.resolve('./src/assets/settings')}";`
      }
    }
  }
}
