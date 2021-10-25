import { createElement } from '../lib/dom.js'
import Button from './Button.js'

import './Card.css'

export default function Card(character, setPlayerCard, playerCards) {
  const { status, id, name, species, gender, origin, location, image } =
    character

  let _state = { isOpen: false }

  const Name = createElement('h2', {
    className: 'Card__title',
    innerText: name,
  })
  const Img = createElement('img', { src: image, className: 'Card__img' })
  const Info = createElement('div')
  const InfoText = createElement('p', {
    className: 'Card__text',
    innerText: `Status: ${status}, Species: ${species}, Gender: ${gender}, Origin: ${origin.name}, Current Location: ${location.name}`,
  })
  const ExpandButton = createElement('button', {
    className: 'Card__button',
    innerHTML: '<i class="im im-angle-down"></i>',
  })
  const P1Button = Button('P1', setP1, 'Card__button Card__button--P1')
  const P2Button = Button('P2', setP2, 'Card__button Card__button--P2')

  ExpandButton.addEventListener('click', () => {
    _state = {
      ..._state,
      isOpen: !_state.isOpen,
    }
    ExpandButton.innerHTML = _state.isOpen
      ? '<i class="im im-angle-up"></i>'
      : '<i class="im im-angle-down"></i>'
    renderInfo(_state)
  })

  const card = createElement(
    'li',
    {
      className: 'Card',
    },
    Name,
    Img,
    ExpandButton,
    Info,
    P1Button,
    P2Button
  )
  card.dataset.id = id

  renderInfo(_state)

  if (playerCards.p1 && playerCards.p1.dataset.id === card.dataset.id) {
    card.classList.add('Card--P1')
    card.classList.remove('Card--P2')
  } else if (playerCards.p2 && playerCards.p2.dataset.id === card.dataset.id) {
    card.classList.remove('Card--P1')
    card.classList.add('Card--P2')
  }

  return card

  function renderInfo(state) {
    const { isOpen } = state
    Info.innerHTML = ''
    if (isOpen) {
      Info.append(InfoText)
    }
  }

  function setP1() {
    // if player 1 already chosen this card, untoggle it
    if (playerCards.p1 && card.dataset.id === playerCards.p1.dataset.id) {
      card.classList.remove('Card--P1')
      setPlayerCard('p1', null)
      return
    }
    // if player 2 already chosen this card, prevent P1 from taking it
    if (playerCards.p2 && card.dataset.id === playerCards.p2.dataset.id) {
      console.log('is already chosen')
      return
    }
    // if player 1 already chosen another card, remove the Styling from that card
    if (playerCards.p1 && card.dataset.id !== playerCards.p1.dataset.id) {
      playerCards.p1.classList.remove('Card--P1')
    }

    setPlayerCard('p1', card)
    card.classList.add('Card--P1')
    card.classList.remove('Card--P2')
  }
  function setP2() {
    // if player 2 already chosen this card, untoggle it
    if (playerCards.p2 && card.dataset.id === playerCards.p2.dataset.id) {
      card.classList.remove('Card--P2')
      setPlayerCard('p2', null)
      return
    }
    // if player 1 already chosen this card, prevent P2 from taking it
    if (playerCards.p1 && card.dataset.id === playerCards.p1.dataset.id) {
      console.log('is already chosen')
      return
    }
    // if player 2 already chosen another card, remove the Styling from that card
    if (playerCards.p2 && card.dataset.id !== playerCards.p1.dataset.id) {
      playerCards.p2.classList.remove('Card--P2')
    }

    setPlayerCard('p2', card)
    card.classList.add('Card--P2')
    card.classList.remove('Card--P1')
  }
}
