const fs = require('node:fs')
const path = require('node:path')

const Handlebars = require('handlebars')

const BASE_DIR = path.resolve(__dirname, '..')

/**
 * 解析 HTTP 请求报文
 * @param str
 * @returns {{head: string, path: *, method: string, line: unknown, body: *, others: *}}
 */
function extractRequest(str) {
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

/**
 * 拼接 HTTP 响应
 * @param head
 * @param body
 * @returns {string}
 */
function createdResponse(head, body) {
  return `${head}\r\n\r\n${body}`
}

/**
 * 渲染模板文件
 * @param request
 * @param templateName
 * @param data
 * @returns {string}
 */
function render(request, templateName = '404.html', data = null) {
  const head = `HTTP/1.1 200 OK
content-type: text/html`

  const templatePath = path.join(BASE_DIR, 'templates', templateName)
  const templateStr = fs.readFileSync(templatePath).toString()

  // 模板渲染
  const template = Handlebars.compile(templateStr)

  return createdResponse(head, template(data))
}

/**
 * 返回 json 数据
 * @param o
 */
function json(o) {
  const head = `HTTP/1.1 200 OK
content-type: application/json; charset=utf-8`
  const body = JSON.stringify(o)

  return createdResponse(head, body)
}

module.exports = {
  BASE_DIR,
  extractRequest,
  createdResponse,
  render,
  json
}
