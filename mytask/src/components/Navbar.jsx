import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">Task Manager</div>
      <button 
        onClick={handleLogout} 
        className="bg-white text-blue-600 font-semibold py-2 px-4 rounded">
        Logout
      </button>
    </nav>
  );
}
