import React from 'react';
import { 
  MagnifyingGlassIcon, 
  BellIcon, 
  Cog6ToothIcon,
  UserCircleIcon 
} from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">O</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">Oyster</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search companies, team members, invoices..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <BellIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              5
            </span>
          </div>
          <Cog6ToothIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">D</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 