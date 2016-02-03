import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'

import transformPropsWith from 'transform-props-with'

const addElementStyles = (oldProps) => {
  const { modifier, name, ...props } = oldProps

  return {
    className: cx({
      [`header__${name}`]: name,
      [`header__${name}--${modifier}`]: name && modifier
    }),
    ...props
  }
}
const addBodyElementStyles = (props) => Object.assign({}, props, { name: 'body' })
const addTitleElementStyles = (props) => Object.assign({}, props, { name: 'title' })

const HeaderBody = transformPropsWith([
  addBodyElementStyles,
  addElementStyles
])('div')
const HeaderTitle = transformPropsWith([
  addTitleElementStyles,
  addElementStyles
])('h1')

ReactDOM.render(
  <div className='header'>
    <HeaderTitle>Dozens of Cousins</HeaderTitle>
    <HeaderBody modifier='copyright'>
      Copyright 1975 Václav Havel
    </HeaderBody>
  </div>,
  document.getElementById('app')
)
// Would render:
// <div class='header'>
//   <h1 class='header__title'>Dozens of Cousins</h1>
//   <div class='header__body header__body--copyright'>...</div>
// </div>
