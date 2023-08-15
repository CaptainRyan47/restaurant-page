import Logo from './logo.png'
import Background from './ruby-interior.webp'
import menu from './menu'

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
      console.log(homeLink)
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
      console.log(contactLink)
    })

    ul.append(homeLink, menuLink, contactLink)
    header.append(logo, ul)
    page.prepend(header)
  }

  const addBackground = () => {
    const background = document.createElement('div')
    background.style.backgroundImage = `url(${Background})`
    background.id = 'background'
    document.querySelector('body').prepend(background)
  }

  return { createHeader, addBackground }
}