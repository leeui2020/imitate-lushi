const { isRequired } = require('../utils/validate')

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: '请输入组件名称',
    validate: isRequired('组件名')
  }
]
