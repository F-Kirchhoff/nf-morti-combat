import { createElement } from '../lib/dom.js'
import fetchData from '../lib/fetchData.js'

import CardContainer from './CardContainer.js'
import Nav from './Nav.js'

import './App.css'

export default function App() {
  const nav = Nav(searchCharactersAndDisplay)
  const { el: cardContainer, displayCharacters } = CardContainer()

  const app = createElement(
    'div',
    {
      className: 'App',
    },
    nav,
    cardContainer
  )

  return app

  function searchCharactersAndDisplay(searchTerm) {
    fetchData(searchTerm).then(characters => {
      displayCharacters(characters)
    })
  }
}
