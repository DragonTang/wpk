const webpack = require('webpack')
const prodWebpackConf = require('./webpack.prod.conf')


webpack(prodWebpackConf, (err, stats) => {
  // spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
