const fs = require('fs')
const ejs = require('ejs')
const path = require('path')

// 检查是否存在文件路径
exports.checkFileExist = function (pathFromWorkspace) {
  const filePath = path.resolve(__dirname, '../../', pathFromWorkspace)
  if (!fs.existsSync(filePath)) {
    return false
  }
  const stat = fs.statSync(filePath)
  return stat.isFile()
}

// 检查是否存在目录路径
exports.checkFolderExist = function (pathFromWorkspace) {
  const folderPath = path.resolve(__dirname, '../../', pathFromWorkspace)
  if (!fs.existsSync(folderPath)) {
    return false
  }
  const stat = fs.statSync(folderPath)
  return stat.isDirectory()
}

// 当目录不存在创建目录
exports.ensureFolder = function (pathFromWorkspace) {
  if (exports.checkFolderExist(pathFromWorkspace)) {
    return
  }

  exports.ensureFolder(path.dirname(pathFromWorkspace))
  const folderPath = path.resolve(__dirname, '../../', pathFromWorkspace)
  fs.mkdirSync(folderPath)
}

// 渲染模板
exports.renderFile = function (pathFromWorkspace, template, data) {
  const templateFilePath = path.resolve(__dirname, '../template/', template)
  const templateContent = fs.readFileSync(templateFilePath, { encoding: 'utf-8' })
  const renderContent = ejs.render(templateContent, data)
  const filePath = path.resolve(__dirname, '../../', pathFromWorkspace)
  fs.writeFileSync(filePath, renderContent)
}

// 给文件追加内容
exports.appendContent = function (pathFromWorkspace, content, data) {
  const filePath = path.resolve(__dirname, '../../', pathFromWorkspace)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const newContent = [fileContent, ejs.render(content, data)].join('')
  fs.writeFileSync(filePath, newContent)
}
