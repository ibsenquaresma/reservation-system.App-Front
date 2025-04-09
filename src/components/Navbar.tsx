// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/home" className="text-2xl font-bold">
//           Room Booking
//         </Link>
//         <div className="flex gap-4">
//           <Link to="/home" className="hover:text-gray-300">
//             Home
//           </Link>
//           {/* <Link to="/rooms" className="hover:text-gray-300">
//             Rooms
//           </Link> */}
//           <Link to="/floor-plan" className="hover:text-gray-300">
//             Rooms
//           </Link>
//           <Link to="/login" className="hover:text-gray-300">
//             Login
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import '../style/NavBar.css';
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.jpg";

interface NavItem {
  name: string;
  path: string;
  icon?: string;
}

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const handleClick = () => {
    navigate('/login');
    // ou com estado:
    // navigate('/pagina', { state: { id: 1 } });
  };

  const navItems: NavItem[] = [
    { name: 'Home', path: '/home', icon: '🏠' },
    { name: 'Reservation', path: '/floor-plan', icon: '🛠️' },
    { name: 'About', path: '/about', icon: 'ℹ️' },
    { name: 'Contact', path: '/contact', icon: '✉️' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
        <a href="/home" className="logo">
          <img 
            src=""
            alt="img"
            className='img'
          />
        </a>
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
                onClick={() => handleItemClick(item.name)}
              >
                {item.icon && <span className="nav-icon">{item.icon}</span>}
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="btn-primary" onClick={handleClick}>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;