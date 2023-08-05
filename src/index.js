import './styles.css'
import Logo from './logo.png'

const logo = new Image()
logo.src = Logo

document.querySelector('#content>header').prepend(logo)