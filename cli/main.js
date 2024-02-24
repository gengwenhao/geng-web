#!/usr/bin/env node
import {program} from 'commander'
import commands from './commands/index.js'
import fs from 'node:fs'

(function () {
  const packageJSON = JSON.parse(fs.readFileSync('package.json'))

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
