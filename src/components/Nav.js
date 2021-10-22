import { createElement } from '../lib/dom.js'
import './Nav.css'

export default function Nav(handleSubmit) {
  const InputField = createElement('input', {
    type: 'text',
    name: 'query',
    placeholder: 'Search for a character',
    className: 'js-nav-input Nav__input',
  })
  const SubmitButton = createElement('button', {
    type: 'submit',
    className: 'Nav__Button',
    innerText: 'search',
  })

  const Form = createElement(
    'form',
    {
      className: 'Nav',
    },
    InputField,
    SubmitButton
  )

  Form.addEventListener('submit', event => {
    event.preventDefault()
    handleSubmit(Form.elements.query.value)
  })

  return Form
}
