import React from 'react'
import ReactDOM from 'react-dom'

import tx from 'transform-props-with'

import { sendTrackInfo } from './path/to/analytics'

const trackClick = (oldProps) => {
  const { onClick, trackInfo, ...props } = oldProps

  if (!trackInfo) {
    return oldProps
  }

  props.onClick = (event) => {
    sendTrackInfo(trackInfo)

    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return props
}

const DecoratedComponent = tx(trackClick)('a')

ReactDOM.render(
  <DecoratedComponent
    href='https://en.wikipedia.org/wiki/Van%C4%9Bk_plays'
    onClick={this.handleClick}
    trackInfo='Vaňek_1'
  >
    Audience
  </DecoratedComponent>,
  document.getElementById('app')
)
// Would render <a href=…>Audience</a>
// The click is first tracked and then this.handleClick is executed
