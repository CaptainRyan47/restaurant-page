import './styles.css'
import initial from './initial.js'
import Coffee from './coffee.jpg'

initial().createHeader()
initial().addBackground()

const coffee = new Image()
coffee.src = Coffee
document.querySelector('main').append(coffee)