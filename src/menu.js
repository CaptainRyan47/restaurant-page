import { clearPage } from "."
import Coffee from './coffee.jpg'
import RubyClub from './ruby-club.jpg'
import ChiliCheeseDog from './chili-cheese-dog.jpg'


export default function menu() {
  let menuItems = []

  const addMenuItem = (name, image, price) => {
    menuItems.push({ name, image, price })
  }

  const coffee = new Image()
  coffee.src = Coffee
  addMenuItem('Coffee', coffee, '$1')

  const rubyClub = new Image()
  rubyClub.src = RubyClub
  addMenuItem('Ruby Club', rubyClub, '$7')

  const chiliCheeseDog = new Image()
  chiliCheeseDog.src = ChiliCheeseDog
  addMenuItem('Chili Cheese Dog', chiliCheeseDog, '$10')

  const addMenuToPage = () => {
    const page = document.querySelector('#content')
    let title = document.createElement('h1')
    title.textContent = 'Menu'

    let menuContainer = document.createElement('div')
    menuContainer.id = 'menu-container'

    menuItems.forEach(item => {
      const menuItem = document.createElement('div')
      menuItem.classList = 'menu-item'

      const name = document.createElement('h2')
      name.textContent = item.name

      const price = document.createElement('p')
      price.textContent = item.price

      const div = document.createElement('div')
      div.append(item.image, price)

      menuItem.append(name, div)

      menuContainer.append(menuItem)
    })
    page.append(title, menuContainer)
  }

  clearPage()
  addMenuToPage()
}