import React from 'react'
import Contact from './contact'
export default function Navbar() {
  return (
    <div className='navbar'>
        
            <ul>
                <li><a href="#">Logo</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About us</a></li>
            </ul>
        <Contact/>
    </div>

  )
}
