const inquirer = require('inquirer')
const kebabCase = require('lodash/kebabCase')
const { checkFolderExist, ensureFolder, checkFileExist, renderFile, appendContent } = require('../utils/common')
const prompts = require('./prompts');

(async () => {
  const answers = await inquirer.prompt(prompts)
  const name = kebabCase(answers.name)

  const componentFolderPath = `src/components/${name}`
  const indexFilePath = 'src/components/index.js'

  if (checkFolderExist(componentFolderPath)) {
    throw new Error('该组件已经存在')
  }

  ensureFolder('src/components')
  ensureFolder(componentFolderPath)

  renderFile(`${componentFolderPath}/index.js`, 'components/component-index-js', { name })
  renderFile(`${componentFolderPath}/index.module.scss`, 'components/component-index-scss')

  if (!checkFileExist(indexFilePath)) {
    renderFile(indexFilePath, 'components/index-js')
  }

  appendContent(indexFilePath, `Vue.component('app-${name}', () => import('./${name}'))\n`)

  console.info(`组件路径：${componentFolderPath}/index.js`)
})()
