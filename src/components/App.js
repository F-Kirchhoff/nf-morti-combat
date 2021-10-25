import { createElement } from '../lib/dom.js'
import CardContainer from './CardContainer.js'
import fetchData from '../lib/fetchData.js'
import { createAdress } from '../lib/fetchData.js'
import { createAdressWithId } from '../lib/fetchData.js'
import './App.css'
import Nav from './Nav.js'
import Button from './Button.js'

const NumberOfCharacters = 671

export default function App() {
  const buttonAdresses = {
    prev: 'nothing here',
    next: 'hello :3',
  }

  const { el: cardContainer, setCharacters } = CardContainer()
  const { Form: nav, clearInput } = Nav(updateContent)
  const buttonPrevPage = Button(
    '<i class="im im-angle-left"></i>',
    onButtonPrev,
    'Button Button--prev Button--inactive'
  )
  const buttonNextPage = Button(
    '<i class="im im-angle-right"></i>',
    onButtonNext,
    'Button Button--next Button--inactive'
  )
  const buttonRandomCharacter = Button(
    '?',
    onButtonRandom,
    'Button Button--random'
  )

  const app = createElement(
    'div',
    {
      className: 'App',
    },
    nav,
    cardContainer,
    buttonPrevPage,
    buttonNextPage,
    buttonRandomCharacter
  )

  updateContent(createAdress('rick'))

  return app

  function updateContent(address) {
    clearInput()
    fetchData(address).then(fetchedData => {
      if (!fetchedData.info) {
        const singleCharacterResult = {
          info: {
            next: null,
            prev: null,
          },
          results: [fetchedData],
        }

        updatePageButtons(singleCharacterResult.info)
        setCharacters(singleCharacterResult.results)
      } else {
        updatePageButtons(fetchedData.info)
        setCharacters(fetchedData.results)
      }
    })
  }

  function setButtonAdresses(newAdresses) {
    buttonAdresses.prev = newAdresses.prev
    buttonAdresses.next = newAdresses.next
  }

  function onButtonPrev() {
    if (!buttonAdresses.prev) return
    updateContent(buttonAdresses.prev)
  }
  function onButtonNext() {
    if (!buttonAdresses.next) return
    updateContent(buttonAdresses.next)
  }
  function onButtonRandom() {
    const randomId = Math.ceil(Math.random() * NumberOfCharacters)
    const address = createAdressWithId(randomId)
    updateContent(address)
  }

  function updatePageButtons(infoObj) {
    if (infoObj.next) {
      buttonNextPage.classList.remove('Button--inactive')
    } else {
      buttonNextPage.classList.add('Button--inactive')
    }
    if (infoObj.prev) {
      buttonPrevPage.classList.remove('Button--inactive')
    } else {
      buttonPrevPage.classList.add('Button--inactive')
    }
    setButtonAdresses({
      next: infoObj.next,
      prev: infoObj.prev,
    })
  }
}
