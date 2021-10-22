import { createElement, rerender } from '../lib/dom.js'
import './App.css'
import CardContainer from './CardContainer.js'
import Nav from './Nav.js'

export default function App({ query, cards }) {
  function setQuery(newQuery) {
    rerender(App, '.App', {
      query: newQuery,
      cards,
    })
  }

  const el = createElement(
    'div',
    {
      className: 'App',
    },
    Nav(query, setQuery),
    CardContainer(cards)
  )

  return el
}
