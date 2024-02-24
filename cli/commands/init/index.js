import ora from 'ora'
import {copyExamples} from '../../utils/copy-examples.js'

export default function (program) {
  program
    .command('init <dirName>')
    .description('建立本地代码练习项目')
    .action((dirName, options) => {
      const spinner = ora('创建中...').start()
      copyExamples(dirName)
      spinner.succeed('创建完成')
    })
}
