import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
   <nav className='border-b-4 border-pink-700 text-center fixed top-0 bg-pink-600 font-bold w-full text-lg text-white'>
    <ul>
        <li className='inline-block py-4'>
            <Link to="/" className='pl-6 pr-8'>Home</Link>
            <Link to="/about"about className='pl-6 pr-8'>About Us</Link>
            <Link to="/articles-list" className='pl-6 pr-8'>Articles</Link>
        </li>
    </ul>

   </nav>
  )
}
