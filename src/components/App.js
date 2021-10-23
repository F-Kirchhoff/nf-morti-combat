import { createElement } from '../lib/dom.js'
import CardContainer from './CardContainer.js'
import fetchData from '../lib/fetchData.js'
import './App.css'
import Nav from './Nav.js'

export default function App() {
  const model = {
    cards: [],
  }

  const { el: cardContainer, setCharacters } = CardContainer(model.cards)
  const nav = Nav(appendCard)

  const app = createElement(
    'div',
    {
      className: 'App',
    },
    nav,
    cardContainer
  )

  return app

  function appendCard(newCard) {
    model.cards = [...model.cards, newCard]
    fetchData(newCard).then(characters => {
      setCharacters(characters)
    })
  }
}
