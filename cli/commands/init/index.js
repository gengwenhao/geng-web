import fs from 'node:fs'

import ora from 'ora'

export default function (program) {
  program
    .command('init')
    .description('建立本地代码练习项目')
    .option('-d, --dir <string>', '项目名称', 'web-demo')
    .action((options) => {
      const spinner = ora('创建中...').start()
      fs.mkdirSync(options.dir)
      spinner.succeed('创建完成')
    })
}
