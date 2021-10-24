import { createElement } from '../lib/dom.js'
import './Nav.css'

export default function Nav(onSubmit) {
  const InputField = createElement('input', {
    type: 'text',
    name: 'query',
    placeholder: 'Search for a character',
    className: 'js-nav-input Nav__input',
  })
  const SubmitButton = createElement('button', {
    type: 'submit',
    className: 'Nav__Button',
    innerHTML: '<i class="im im-magnifier"></i>',
  })

  const Form = createElement(
    'form',
    {
      className: 'Nav',
    },
    InputField,
    SubmitButton
  )

  onSubmit('rick')

  Form.addEventListener('submit', event => {
    event.preventDefault()
    onSubmit(Form.elements.query.value)
  })

  return Form
}
