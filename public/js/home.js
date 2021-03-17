'use strict'

import { addHead } from './head.js'
import { deletePreWhiteSpace, deleteParaWhiteSpace } from './xinet-js/delete-white-space.js'
import { inlineCodeTomd } from './xinet-js/markdown.js'

// 主函数
function main() {
  addHead() // 添加 <head> 元素信息
  deletePreWhiteSpace()
  deleteParaWhiteSpace()
  inlineCodeTomd()
  let body = document.body
  // 添加主题
  body.classList.add('w3-pale-yellow')
}

/* 函数调用 */
main()