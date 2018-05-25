
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/docs',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /.*\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
}