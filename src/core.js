import net from 'node:net'

import {extractRequest} from './http/request.js'
import router from './router/index.js'

/**
 * 框架的入口
 * @param host
 * @param port
 * @param routes
 */
export default function bootstrap(
  host = '127.0.0.1',
  port = 3000,
  routes = null
) {
  return new Promise((resolve, reject) => {
    const server = net.createServer((socket) => {
      socket.on('data', data => {
        // 解析出 请求行 请求头 请求体
        const request = extractRequest(data.toString())

        // 分发给路由
        global.__routeMap = routes || {}
        const res = router(request)

        // 写入响应
        res && socket.write(res, 'utf8', () => socket.end())
      })
    })

    server.listen(port, host, data => resolve({port, host, data}))
  })
}
