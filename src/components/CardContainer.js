import { createElement } from '../lib/dom.js'
import Card from './Card.js'

import './CardContainer.css'

export default function CardContainer(cards) {
  const el = createElement('ul', {
    className: 'CardContainer',
  })

  setCards(cards)

  return { el, setCards }

  function setCards(cards) {
    el.innerHTML = ''
    el.append(...cards.map(text => Card(text)))
  }
}
