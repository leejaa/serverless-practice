// webpack.config.js
const path = require('path')
const slsw = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // entry를 따로 설정하지 않아도 됨
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  // webpack의 critical warning 메시지를 피하기 위한 용도
  externals: [nodeExternals()],
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'] // src 디렉토리 내부에서 absolute import를 사용하기 위한 용도
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  }
}