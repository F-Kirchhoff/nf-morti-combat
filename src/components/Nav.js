import { createElement } from '../lib/dom.js'
import './App.css'

export default function Nav(query, setQuery) {
  const el = createElement(
    'div',
    {
      className: 'Nav',
    },
    `Navbar: ${query}`
  )

  el.addEventListener('click', () => {
    setQuery('It is amazing!!')
  })

  return el
}
