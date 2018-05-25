
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/docs',
  },
  module: {
    rules: [
      {
        test: /.*\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
}