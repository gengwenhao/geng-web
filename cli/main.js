#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

import {program} from 'commander'
import commands from './commands/index.js'

import {getDIRName} from './utils/get-path.js'


(async function () {
  const dirName = await getDIRName()
  const packageDIR = path.join(dirName,'..', '..', 'package.json')
  const packageJSON = JSON.parse(fs.readFileSync(packageDIR))

  program
    .name(packageJSON.name)
    .version(packageJSON.version)

  // mount commands
  Object
    .values(commands)
    .forEach(commandHandler => {
      commandHandler(program)
    })

  program.parse()
})()
