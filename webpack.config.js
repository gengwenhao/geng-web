const {resolve} = require('url')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './index.js',
  output: {
    clean: true,
    filename: 'dist-[hash:8].js',
    path: resolve(__filename, 'dist')
  }
}
