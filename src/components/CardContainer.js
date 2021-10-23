import { createElement } from '../lib/dom.js'
import Card from './Card.js'

import './CardContainer.css'

export default function CardContainer() {
  let characters = []

  const el = createElement('ul', {
    className: 'CardContainer',
  })

  setCharacters(characters)

  return { el, setCharacters }

  function setCharacters(newCharacters) {
    characters = newCharacters

    renderCards(characters)
  }
  function renderCards(characters) {
    el.innerHTML = '' //reset innerHTML
    el.append(...characters.map(character => Card(character)))
  }
}
