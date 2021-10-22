import { createElement } from '../lib/dom.js'

import './App.css'

export default function CardContainer() {
  const el = createElement(
    'ul',
    {
      className: 'CardContainer',
    },
    'cardcontainer'
  )

  return el
}
