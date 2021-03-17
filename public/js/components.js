'use strict'

import { addStart } from './xinet-js/starter.js'

// 定义内联代码样式
class InlineCode extends HTMLElement {
  constructor() {
    super()
    this.classList.add('w3-card', 'w3-padding-small', 'w3-round-xxlarge', 'w3-light-gray')
  }
}

customElements.define("inline-code", InlineCode)

// 定义 pre 的代码块样式
class BlockCode extends HTMLPreElement {
  constructor() {
    super()
    this.classList.add('w3-card', 'w3-code', 'w3-pale-green',
      'w3-padding-small', 'w3-round-xlarge', 'w3-text-purple')
  }
}

customElements.define("block-code", BlockCode, { extends: 'pre' })

class DomStarter extends HTMLElement {
  constructor(navClass = 'w3-center') {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.article = document.createElement('article')
    this.header = document.createElement('header')
    this.nav = this.createNav(navClass)

    this.shadow.append(this.article)
    addStart(this.article)
    this.article.append(this.header)
    this.header.append(this.nav)
  }

  addLi(href, fasClass, text) {
    const li = document.createElement('li')
    li.innerHTML = `<a href=${href}><i class="${fasClass} w3-padding-8">&nbsp;${text}</i></a>`
    return li
  }

  createNav(navClass) {
    const nav = document.createElement('nav')
    nav.classList.add(...navClass.split(' '))
    const ul = document.createElement('ul')
    ul.classList.add('main-nav')
    const home = this.addLi('./index.html', "fa fa-home", '首页')
    const about = this.addLi('./about.html', "fa fa-user-circle", '关于')
    const book = this.addLi('./book.html', "fa fa-search", '资料库')
    const help = this.addLi('./help.html', "fa fa-question", '帮助')
    about.classList.add('push')
    // const contact = this.addLi('./contact.html', "fa fa-comments", '联系')

    nav.appendChild(ul)
    ul.append(home, book, about, help)
    return nav
  }
}

customElements.define("dom-starter", DomStarter)

class PageHeader extends DomStarter {
  // w3-top 
  constructor(navClass = 'w3-center w3-card w3-blue') {
    super(navClass)
  }
}

customElements.define("page-header", PageHeader)

class UserCard extends HTMLElement {
  constructor() {
    super()
    let shadow = this.attachShadow({ mode: 'open' })
    let templateElem = document.querySelector('.userCardTemplate')
    let content = templateElem.content.cloneNode(true)
    content.querySelector('img').setAttribute('src', this.getAttribute('image'))
    shadow.appendChild(content)
  }
}

customElements.define("user-card", UserCard)

class TabedTool extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.shadow.classList.add('w3-card', 'w3-pale-green',
      'w3-padding-small', 'w3-round-xlarge', 'w3-text-purple')
    addStart(this.shadow)
  }
}

customElements.define('tabed-tool', TabedTool, { extends: 'article' })