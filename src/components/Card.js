import { createElement } from '../lib/dom.js'

import './Card.css'

export default function Card(character) {
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
    innerText: '\u{1F87b}',
  })

  ExpandButton.addEventListener('click', () => {
    _state = {
      ..._state,
      isOpen: !_state.isOpen,
    }
    ExpandButton.innerText = _state.isOpen ? '\u{1F879}' : '\u{1F87b}'
    renderInfo(_state)
  })

  const el = createElement(
    'li',
    {
      className: 'Card',
    },
    Name,
    Img,
    ExpandButton,
    Info
  )
  el.dataset.id = id

  renderInfo(_state)

  return el

  function renderInfo(state) {
    const { isOpen } = state
    Info.innerHTML = ''
    if (isOpen) {
      Info.append(InfoText)
    }
  }
}
