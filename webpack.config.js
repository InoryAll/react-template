/**
 * webpack配置
 * Created by tianrenjie on 2017/11/9
 */
/* eslint-disable */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + "/src/index.jsx",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,
    hot: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
          }, {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: {
          loader: "less-loader",
        },
      }
    ]
  },
  resolve: { // resolve.extensions用于指明程序自动补全哪些后缀
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),//热加载插件
  ],
};