import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
  <div className="navbar bg-base-100">
    
    <div className="flex flex-wrap justify-around w-full">
      <div>
        <h1 className='text-4xl font-semibold text-blue-400'>Prajwal Kumar</h1>
      </div>
      <ul className="menu menu-horizontal px-1 text-blue-300">
        <Link className='btn btn-ghost normal-case text-xl' to='/'>Home</Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/about'>About</Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/projects'>Projects</Link>
        <Link className='btn btn-ghost normal-case text-xl' to='/contact'>Contact</Link>
      </ul>
      <div className='flex gap-4 text-blue-300'>
        <a href='https://github.com/kumpraj' target='_blank'><FaGithub className='pr-2 text-3xl hover:text-4xl duration-300'/></a>
        <a href='https://www.linkedin.com/in/prajwal-kumar-3004/' target='_blank'><FaLinkedin className='pr-2 text-3xl hover:text-4xl duration-300'/></a>
      </div>
    </div>
</div>
  )
}

export default Navbar