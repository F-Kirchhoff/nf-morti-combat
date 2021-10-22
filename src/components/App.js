import { createElement } from '../lib/dom.js'
import './App.css'
import CardContainer from './CardContainer.js'
import Nav from './Nav.js'

export default function App() {
  const model = {
    cards: [],
  }

  const { el: cardContainer, setCards } = CardContainer(model.cards)

  function appendCard(newCard) {
    model.cards = [...model.cards, newCard]
    setCards(model.cards)
  }

  const el = createElement(
    'div',
    {
      className: 'App',
    },
    Nav(appendCard),
    cardContainer
  )

  return el
}
