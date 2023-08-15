import './styles.css'
import initial from './initial.js'
import menu from './menu.js'
// import Coffee from './coffee.jpg'

initial().createHeader()
initial().addBackground()

export function clearPage() {
  document.querySelectorAll('#content>*').forEach(element => {
    element.remove()
  });
}

// const coffee = new Image()
// coffee.src = Coffee
// document.querySelector('main').append(coffee)