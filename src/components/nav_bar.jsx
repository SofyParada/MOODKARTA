import React from 'react'
import { NavLink } from 'react-router-dom'

import Inicio from '../assets/Inicio.png'
import Contacto from '../assets/contacto.png'
import recursos from '../assets/recursos.png'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <NavLink
        className={navLinkClass}
        to='/'
      >
        <img src={Inicio} alt='Inicio' className='nav-bar__icon' />
      </NavLink>
      <NavLink className={navLinkClass} to='/tendencias'>
        <img src={recursos} alt='Tendencias' className='nav-bar__icon' />
      </NavLink>
      <NavLink className={navLinkClass} to='/apoyo'>
        <img src={Contacto} alt='Apoyo' className='nav-bar__icon' />
      </NavLink>
    </nav>
  )
}
 
export default NavBar
