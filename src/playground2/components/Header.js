import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to='/'>Dasboard</NavLink>
      </li>
      <li>
        <NavLink to='/page2'>Page2</NavLink>
      </li>
      <li>
        <NavLink to='/page3'>Page3</NavLink>
      </li>
    </ul>
  )
}

export default Header
