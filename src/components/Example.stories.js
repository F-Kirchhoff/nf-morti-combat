import Example from './Example'

export default {
  title: 'components/Example',
  component: Example,
}

export const ShortText = () => Example('Short text')
export const LongText = () =>
  Example('This is a very long text to show how the component behaves')
