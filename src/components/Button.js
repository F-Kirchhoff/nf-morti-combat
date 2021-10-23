import { createElement } from '../lib/dom.js'
import './Button.css'

export default function Button(text, onClick) {
  const button = createElement('button', {
    className: 'button',
    innerText: text,
  })

  button.addEventListener('click', () => {
    onClick()
  })

  return button
}
