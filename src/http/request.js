/**
 * 解析 HTTP 请求报文
 * @param str
 * @returns {{head: string, path: *, method: string, line: unknown, body: *, others: *}}
 */
export function extractRequest(str) {
  const [fullHead, body] = str.split('\r\n\r\n')

  // 展出完整请求头（包含请求行）
  const fullHeadLines = fullHead.split('\n')

  // 摘出请求行
  const requestLine = fullHeadLines.shift()

  // 拼接剩余请求头
  const head = fullHeadLines.join('\n')

  // 处理请求行
  const [method, fullPath, ...others] = requestLine.split(' ')
  const [path, queryString = ''] = fullPath.split('?')
  const queryDict = queryString
    .split('&')
    .reduce((dict, kv) => {
      const [k, v] = kv.split('=')
      k && (dict[k] = v)
      return dict
    }, {})

  return {
    line: requestLine,
    head,
    body,
    method: method.toUpperCase(),
    fullPath,
    path,
    queryString,
    queryDict,
    others
  }
}
