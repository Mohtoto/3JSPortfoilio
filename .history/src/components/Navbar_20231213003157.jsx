import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to={'/'}>
            <p className='w-10'>MT</p>

        </NavLink>

    </header>
  )
}

export default Navbar