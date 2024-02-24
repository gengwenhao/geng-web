const net = require('net')
const routes = require('./routes')
const {extractRequest} = require('./utils')

function bootstrap(host = '127.0.0.1', port = 3000) {
  return new Promise((resolve, reject) => {
    const server = net.createServer((socket) => {
      socket.on('data', data => {
        // 解析出 请求行 请求头 请求体
        const request = extractRequest(data.toString())

        // 分发给路由
        const res = routes(request)

        // 写入响应
        res && socket.write(res, 'utf8', () => socket.end())
      })
    })

    server.listen(port, host, data => resolve({port, host, data}))
  })
}

module.exports = bootstrap
