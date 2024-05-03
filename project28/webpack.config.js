const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
//const WebpackDevServer = require('webpack-dev-server');
module.exports = {
   mode: 'development',
   entry: './script.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
     // Имя файла со сборкой:
     filename: 'bundle.js',
   },
   plugins: [
      
      new CleanWebpackPlugin(),
     // new HotModuleReplacementPlugin(),
      //new CopyWebpackPlugin(),
     // new WebpackDevServer(),
   ],
   

}
