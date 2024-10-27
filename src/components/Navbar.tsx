import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { Trophy, User, LogOut } from 'lucide-react';

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();

  if (!isAuthenticated) return null;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">SportsTip</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/profile" 
              className="flex items-center space-x-2 hover:text-blue-600"
            >
              <User className="w-5 h-5" />
              <span>{user?.name}</span>
            </Link>
            <button
              onClick={logout}
              className="flex items-center text-gray-600 hover:text-gray-900 relative group"
              aria-label="Logout"
            >
              <LogOut className="w-5 h-5" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}