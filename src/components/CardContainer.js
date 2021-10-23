import { createElement } from '../lib/dom.js'
// import Card from './Card.js'

import './CardContainer.css'

export default function CardContainer() {
  let characters = []

  const el = createElement('ul', {
    className: 'CardContainer',
  })

  displayCharacters(characters)

  return { el, displayCharacters }

  function displayCharacters(newCharacters) {
    characters = newCharacters

    renderCards(characters)
  }
  function renderCards(characters) {
    console.log(characters)
  }
}
