// var webpack=require('webpack')
// var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var glob = require('glob')


var extractSass = new ExtractTextPlugin({
  filename: "[name].css"
});

var entries = function() {
  var entryFiles = glob.sync('./packages/**/index.js');
  var map = {};

  for (var i = 0; i < entryFiles.length; i++) {
    var filePath = entryFiles[i];
    var filename = filePath.split("/")[2];
    map[filename+"/index"] = filePath;
  }
  return map;
}
var entryJson = entries();

console.log(entryJson)

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: entryJson,
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
        extractCSS: true
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }, {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url?limit=8192'
    }, {
      test: /\.(html|tpl)$/,
      loader: 'vue-html'
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      })
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    extractSass
  ]
}