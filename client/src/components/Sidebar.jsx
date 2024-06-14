import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <nav className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/shop" className="hover:underline">Shop</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
    </div>
  )
}

export default Sidebar
