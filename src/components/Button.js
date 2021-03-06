import { createElement } from '../lib/dom.js'
import './Button.css'

export default function Button(text, onClick, className) {
  const button = createElement('button', {
    className: className,
    innerHTML: text,
  })

  button.addEventListener('click', () => {
    onClick()
  })

  return button
}
