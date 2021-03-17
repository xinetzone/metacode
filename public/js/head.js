'use strict'

import { addStartAfter } from './xinet-js/starter.js'

// 主函数
function addHead() {
    // 添加 <head> 元素信息
    let head = document.querySelector('head')
    let headTitle = document.querySelector('head > title')
    addStartAfter(headTitle)
    let componentScript = document.createElement('script')
    componentScript.type = 'module'
    componentScript.src = "/static/js/components.js"
    componentScript.async = true
    head.append(componentScript)
}

export { addHead }