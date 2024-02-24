import path from 'node:path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)

// 项目根目录
export const BASE_DIR = path.resolve(__filename, '..', '..')

// 项目模板目录
export const TEMPLATES_DIR = process.env.NODE_ENV === 'production'
  ? path.join(BASE_DIR, 'dist', 'templates')
  : path.join(BASE_DIR, 'templates')
