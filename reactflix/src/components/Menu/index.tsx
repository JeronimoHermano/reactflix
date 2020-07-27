import React from 'react'

import Logo from '../../assets/Logo.png'
import './Menu.css'
// import ButtonLink from './ButtonLink'
import Button from '../Button'

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Reactflix logo"/>
      </a>

      {/* <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink> */}

      <Button as="a">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu
