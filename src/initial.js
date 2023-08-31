import Logo from './logo.png'
import Background from './ruby-interior.webp'
import home from './home'
import menu from './menu'
import contact from './contact'

export default function initial() {
  const page = document.querySelector('body')

  const createHeader = () => {
    const logo = new Image()
    logo.src = Logo

    const header = document.createElement('header')
    const ul = document.createElement('ul')

    const homeLink = document.createElement('li')
    homeLink.textContent = 'Home'
    homeLink.id = 'home'
    homeLink.addEventListener('click', () => {
      home()
    })

    const menuLink = document.createElement('li')
    menuLink.textContent = 'Menu'
    menuLink.id = 'menu'
    menuLink.addEventListener('click', () => {
      menu()
    })

    const contactLink = document.createElement('li')
    contactLink.textContent = 'Contact'
    contactLink.id = 'contact'
    contactLink.addEventListener('click', () => {
      contact()
    })

    ul.append(homeLink, menuLink, contactLink)
    header.append(logo, ul)
    page.prepend(header)
  }

  const addBackground = () => {
    const background = document.createElement('div')
    background.style.backgroundImage = `url(${Background})`
    background.id = 'background'
    page.prepend(background)
  }

  return { createHeader, addBackground }
}