import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
            <li>About Me</li>
            <li>Skills</li>
            <Link className='list-none' to='/projects'>Projects</Link>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar