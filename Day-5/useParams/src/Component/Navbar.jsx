import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around bg-slate-300 py-3 text-xl'>
        <div>
            <h2>Logo</h2>
        </div>
        <ul className='flex gap-7'>
            <Link to='/'>Home</Link>
            <Link to='/products'>Product</Link>
        </ul>
    </div>
  )
}

export default Navbar