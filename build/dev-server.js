const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const devWebpackConf = require('./webpack.dev.conf')
const { dev } = require('../config')
const port = process.env.PORT || dev.port

const app = express()

const compiler = webpack(devWebpackConf, (err, stats) => {
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

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/" // Same as `output.publicPath` in most cases.
}))

app.listen(port, function () {
  console.log("Listening on port " + port);
})
