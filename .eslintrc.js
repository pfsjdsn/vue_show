module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // // 强制在 function的左括号之前使用一致的空格 
    // 'space-before-function-paren': 0,
    // // 强制使用一致的缩进
    // 'indent': 'off',
    // // 强制使用一致的反勾号、双引号或单引号
    // 'quotes': 'off',
    // //  要求或禁止使用分号而不是 ASI 
    // 'semi': 'off',
    // // 结尾多逗号
    // 'comma-dangle': 'off',
    // // 禁止出现未使用过的表达式 
    // 'no-unused-expressions': 2

  }
}
