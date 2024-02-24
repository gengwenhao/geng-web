import chalk from 'chalk'

export function warn(msg) {
  console.log.call(this, chalk.bgYellow.bold(' WARNING ') + ' ' + msg)
}

export function success(msg) {
  console.log.call(this, chalk.bgGreen.bold(' SUCCESS ') + ' ' + msg)
}

export function error(msg) {
  console.log.call(this, chalk.bgRed.bold(' ERROR ') + ' ' + msg)
}
