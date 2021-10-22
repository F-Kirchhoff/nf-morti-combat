import { createElement } from '../lib/dom.js'

import './Card.css'

export default function Card(text) {
  const el = createElement('li', {
    className: 'Card',
    innerText: text,
  })

  return el
}
