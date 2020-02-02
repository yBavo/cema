import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to='/'>Accueil</NavLink>
      </li>
      <li>
        <NavLink to='/addUsers'>Ajouter Proclamateur</NavLink>
      </li>
      <li>
        <NavLink to='/addDep'>Ajouter Départements</NavLink>
      </li>
    </ul>
  )
}

export default Header
