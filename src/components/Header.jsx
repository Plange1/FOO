import React from 'react';
import { 
  MagnifyingGlassIcon, 
  BellIcon, 
  Cog6ToothIcon,
  UserCircleIcon 
} from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="logo-container">
            <div className="logo-icon">
              <span className="text-white font-bold text-sm tracking-tight">O</span>
            </div>
            <span className="logo-text">Oyster</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-6">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search companies, team members, invoices..."
                className="search-input w-full"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="header-actions">
            {/* Notifications */}
            <div className="relative">
              <button className="action-button text-gray-600 hover:text-gray-900">
                <BellIcon className="w-5 h-5" />
                <span className="notification-badge">5</span>
              </button>
            </div>
            
            {/* Settings */}
            <button className="action-button text-gray-600 hover:text-gray-900">
              <Cog6ToothIcon className="w-5 h-5" />
            </button>
            
            {/* User Avatar */}
            <div className="user-avatar">
              <span className="text-white text-sm font-medium">D</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 