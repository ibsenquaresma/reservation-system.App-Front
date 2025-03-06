import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full p-4">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:bg-gray-700 p-2 rounded block">
            Home
          </Link>
        </li>
        <li>
          <Link to="/rooms" className="hover:bg-gray-700 p-2 rounded block">
            Rooms
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:bg-gray-700 p-2 rounded block">
            About
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:bg-gray-700 p-2 rounded block">
            Login
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
