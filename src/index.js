import App from './components/App'
import { getBySelector } from './lib/dom'
import './styles/index.css'

const app = App({ cards: [] })

getBySelector('#app').append(app)
