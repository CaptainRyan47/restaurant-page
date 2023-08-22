import { clearPage } from "."
import Coffees from './coffees.jpg'

export default function home() {

  const addHomeScreenToPage = () => {
    const page = document.querySelector('#content')

    const title = document.createElement('h1')
    title.textContent = 'Welcome to The Ruby Cafe!'
    title.id = 'home-title'

    const about = document.createElement('h2')
    about.textContent = 'A culinary staple in the Dog River community'

    const coffees = new Image()
    coffees.src = Coffees
    coffees.id = 'coffees'

    page.append(title, about, coffees)
  }

  clearPage()
  addHomeScreenToPage()
}