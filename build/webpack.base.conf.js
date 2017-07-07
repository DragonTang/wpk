const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../src/main.js'),
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,  //必须公共加载器
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    })
  ]
}


// 1、webpack 配置文件中的路径相对于项目根路径，就是webpack.config.js所在路径
// 2、extract-text-webpack-plugin提取css到单独文件插件
