import { createElement } from '../lib/dom.js'
import CardContainer from './CardContainer.js'
import fetchData from '../lib/fetchData.js'
import './App.css'
import Nav from './Nav.js'
import Button from './Button.js'

export default function App() {
  const { el: cardContainer, setCharacters } = CardContainer()
  const nav = Nav(searchCharactersAndDisplay)
  const buttonPreviousPage = Button(
    ' \u{1F878}',
    onButtonPrev,
    'Button Button--prev Button--inactive'
  )
  const buttonNextPage = Button(
    '\u{1F87a}',
    onButtonNext,
    'Button Button--next'
  )

  const app = createElement(
    'div',
    {
      className: 'App',
    },
    nav,
    cardContainer,
    buttonPreviousPage,
    buttonNextPage
  )

  return app

  function searchCharactersAndDisplay(searchTerm) {
    fetchData(searchTerm).then(fetchedData => {
      setCharacters(fetchedData.results)
      const next = fetchedData.info.next
      const prev = fetchedData.info.prev
      console.log({ next, prev })
    })
  }

  function onButtonPrev() {
    console.log('Prev Button was clicked!')
  }
  function onButtonNext() {
    console.log('Next Button was clicked!')
  }
}
