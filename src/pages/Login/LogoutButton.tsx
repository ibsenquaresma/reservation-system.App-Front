import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../common/auth';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  console.log("LOGOUT accessToken: " + accessToken);

  const handleLogout = async () => {
    
    if (!accessToken) {
      console.error('No token found in localStorage');
      return;
    }
  
    if (isLoggingOut) return; // Previna múltiplos cliques
    setIsLoggingOut(true);

    try {
      const response = await fetch('http://localhost:3001/auth/logout', {
        method: 'POST'
      });
  
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      
      console.log("LOGOUT accessToken: " + localStorage.getItem('accessToken')) 
      console.log('Logout successful');
      logout();
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };
  

  return (
    <button
      onClick={handleLogout}
      className="text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      {isLoggingOut ? 'Logging out...' : 'Logout'}

    </button>
  );
};

export default LogoutButton;