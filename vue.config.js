module.exports = {
  publicPath: '',
  outputDir: './www',
  devServer: {
    open: true,
    port: '8006',
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changOrigin: true
    //   }
    // }
  }
};
