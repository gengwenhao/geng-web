import fs from 'node:fs'
import path from 'node:path'

import Handlebars from 'handlebars'

/**
 * 拼接 HTTP 响应
 * @param head
 * @param body
 * @returns {string}
 */
export function createdResponse(head, body) {
  return `${head}\r\n\r\n${body}`
}

/**
 * 渲染模板文件
 * @param request
 * @param templateName
 * @param data
 * @returns {string}
 */
export function render(request, templateName = '404.html', data = null) {
  const settings = global.__SETTINGS__

  const head = `HTTP/1.1 200 OK
content-type: text/html`

  const templatePath = path.join(settings.TEMPLATES_DIR, templateName)
  const templateStr = fs.readFileSync(templatePath).toString()

  // 模板渲染
  const template = Handlebars.compile(templateStr)

  return createdResponse(head, template(data))
}

/**
 * 返回 json 数据
 * @param o
 */
export function json(o) {
  const head = `HTTP/1.1 200 OK
content-type: application/json; charset=utf-8`
  const body = JSON.stringify(o)

  return createdResponse(head, body)
}


