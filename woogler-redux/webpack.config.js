const path = require('path');

module.exports ={
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.jsx','.js','.tsx','ts'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
    }]
  },
  plugins: [],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist');
    publicPath: '/dist',
  }
}