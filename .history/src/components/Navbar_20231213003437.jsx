import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to={'/'} className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
            <p className='blue-gradient_text'>MT</p>

        </NavLink>

            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to={'/a'}>

                </NavLink>

            </nav>

    </header>
  )
}

export default Navbar