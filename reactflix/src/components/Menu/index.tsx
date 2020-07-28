import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/Logo.png'
import './Menu.css'
import Button from '../Button'

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Reactflix logo"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu
