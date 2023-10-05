import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <NavLink to="/">Pagina1</NavLink>
        <NavLink to="/pagina2">Pagina2</NavLink>
        <NavLink to="/pagina3">Pagina3</NavLink>
        <NavLink to="/pagina4/G">Pagina4</NavLink>
    </nav>
  )
}

export default Nav