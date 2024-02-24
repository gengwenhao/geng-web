import path from 'node:path'

import copydir from 'copy-dir'

import {getDIRName} from './get-path.js'

export async function copyExamples(target) {
  const __dirname = await getDIRName()
  const exampleDir = path.resolve(__dirname, '..', '..', 'examples')
  copydir.sync(exampleDir, target)
}
