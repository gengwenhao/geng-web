const path = require('node:path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './index.js',
  output: {
    clean: true,
    filename: 'bundle.cjs',
    path: path.resolve(__filename, '../', '../', 'dist')
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {from: 'templates', to: 'templates'}
      ]
    })
  ]
}
