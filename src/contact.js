import { clearPage } from "."
import RubyExterior from './ruby-exterior.webp'

export default function contact() {
  const page = document.querySelector('#content')

  const addContactToPage = () => {
    const title = document.createElement('h1')
    title.textContent = 'Contact Us'

    const rubyExterior = new Image()
    rubyExterior.src = RubyExterior
    rubyExterior.style = 'border-radius: 30px'

    const contactContainer = document.createElement('div')
    contactContainer.style =
      'display: grid; grid-template-columns: 1fr 1fr; gap: 1em; font-size: 2rem; padding: 1em; min-width: 50vw'
    
    const contactTitleStyle = 'margin: 0; text-align: left;'
    const contactStyle = 'text-align: right; margin: 0;'

    const addressTitle = document.createElement('h3')
    addressTitle.textContent = 'Address'
    addressTitle.style = contactTitleStyle

    const address = document.createElement('p')
    address.textContent = 'Just on the edge of town by Corner Gas'
    address.style = contactStyle

    const phoneTitle = document.createElement('h3')
    phoneTitle.textContent = 'Phone'
    phoneTitle.style = contactTitleStyle

    const phone = document.createElement('p')
    phone.textContent = '555-5555'
    phone.style = contactStyle

    contactContainer.append(addressTitle, address, phoneTitle, phone)

    page.append(title, rubyExterior, contactContainer)
  }

  clearPage()
  addContactToPage()
}