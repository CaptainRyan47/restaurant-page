import './styles.css'
import initial from './initial.js'
import home from './home'

initial().createHeader()
initial().addBackground()

export function clearPage() {
  document.querySelectorAll('#content>*').forEach(element => {
    element.remove()
  });
}

home()