import Logo from './logo.png'
import Background from './ruby-interior.webp'

export default function initial() {
  const page = document.querySelector('#content')

  const createHeader = () => {
    const logo = new Image()
    logo.src = Logo

    const header = document.createElement('header')
    const ul = document.createElement('ul')

    const homeLink = document.createElement('li')
    homeLink.textContent = 'Home'
    homeLink.addEventListener('click', () => {
      console.log(homeLink)
    })

    const menuLink = document.createElement('li')
    menuLink.textContent = 'Menu'
    menuLink.addEventListener('click', () => {
      console.log(menuLink)
    })

    const contactLink = document.createElement('li')
    contactLink.textContent = 'Contact'
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