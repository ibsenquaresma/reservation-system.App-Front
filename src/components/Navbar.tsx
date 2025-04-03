import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Room Booking
        </Link>
        <div className="flex gap-4">
          <Link to="/home" className="hover:text-gray-300">
            Home
          </Link>
          {/* <Link to="/rooms" className="hover:text-gray-300">
            Rooms
          </Link> */}
          <Link to="/floor-plan" className="hover:text-gray-300">
            Rooms
          </Link>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
