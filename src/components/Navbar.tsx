import React, { useState } from 'react';
import '../style/NavBar.css';
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.jpg";
import LogoutButton from "../pages/Login/LogoutButton";

interface NavItem {
  name: string;
  path: string;
  icon?: string;
}

const NavBar: React.FC = () => {
  
  console.log("Navbar accessToken "+ localStorage.getItem("accessToken"));
  console.log("Navbar refreshToken: " + localStorage.getItem("refreshToken"))


  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const handleClick = () => {
    navigate('/login');
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
          <LogoutButton />
        </div>

      </div>
    </nav>
  );
};

export default NavBar;