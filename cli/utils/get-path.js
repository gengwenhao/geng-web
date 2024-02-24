import path from 'node:path'
import {fileURLToPath} from 'node:url'

export function getCurrentScriptPath() {
  return new URL(import.meta.url).pathname
}

export function getDIRName() {
  return path.dirname(fileURLToPath(import.meta.url))
}
