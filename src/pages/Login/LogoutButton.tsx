import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken'); // ou o nome que você usou
  console.log("LOGOUT accessToken: " + localStorage.getItem('accessToken'))

  const handleLogout = async () => {
    const token = localStorage.getItem('accessToken'); // Pega o token do localStorage
  
    if (!token) {
      console.error('No token found in localStorage');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3001/auth/logout', {
        method: 'POST'
      });
  
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      
      console.log("LOGOUT accessToken: " + localStorage.getItem('accessToken')) 
      console.log('Logout successful');
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  

  return (
    <button
      onClick={handleLogout}
      className="text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;