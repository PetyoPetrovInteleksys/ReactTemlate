const HtmlWebpackPlugin = require('html-webpack-plugin');
var path=require('path');

module.exports = {  
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path:path.join( __dirname+'/public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          "presets": ["es2015-native-modules","react"]
        }
      }
    ]
  },
  plugins: [
 //   new HtmlWebpackPlugin({ title: 'Tree-shaking' })
  ]
}