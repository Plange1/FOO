import React, { useState, useRef, useEffect } from 'react';
import { 
  MagnifyingGlassIcon, 
  BellIcon, 
  Cog6ToothIcon,
  XMarkIcon,
  BuildingOfficeIcon,
  UserIcon,
  DocumentIcon
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const overlayRef = useRef(null);

  // Close search overlay when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isSearchOpen]);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const recentSearches = [
    {
      id: 1,
      name: 'Jason Kai',
      role: 'Medical Data Analyst at Carbon Health',
      type: 'Team member',
      avatar: 'JK',
      country: 'GB'
    },
    {
      id: 2,
      name: 'Sara Koslov',
      role: 'Credentialing Specialist at Carbon Health',
      type: 'Team member',
      avatar: 'SK',
      country: 'UA'
    },
    {
      id: 3,
      name: 'Carbon Health',
      role: 'United States',
      type: 'Company',
      icon: 'company'
    }
  ];

  return (
    <>
      <header className="w-full bg-[#f0f2f5] sticky top-0 z-50">
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
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search companies, team members, invoices..."
                  className="search-input w-full cursor-pointer"
                  onClick={handleSearchClick}
                  readOnly
                />
              </div>
            </div>

            {/* Right side actions */}
            <div className="header-actions">
              {/* Notifications */}
              <div className="relative">
                <button className="action-button text-gray-600 hover:text-gray-900">
                  <BellIcon className="w-5 h-5" />
                  <span className="notification-badge">12</span>
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

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-2">
          {/* Overlay Background */}
          <div className="absolute inset-0 bg-black bg-opacity-16"></div>
          
          {/* Search Panel */}
          <div 
            ref={overlayRef}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 border border-gray-200"
            style={{ 
              boxShadow: '0px 24px 48px -12px rgba(0,0,0,0.16)' 
            }}
          >
            {/* Search Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
              <div className="flex items-center flex-1">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 mr-3" />
                <div className="h-5 w-px bg-gray-300 mr-3"></div>
                <input
                  type="text"
                  placeholder="Search companies, team members, invoices..."
                  className="flex-1 text-gray-600 text-15px placeholder-gray-400 bg-transparent border-none outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
              <button 
                onClick={handleCloseSearch}
                className="p-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 px-5 py-3">
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-gray-200 bg-white">
                <BuildingOfficeIcon className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-black">Company</span>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-gray-200 bg-white">
                <UserIcon className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-black">Team member</span>
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-gray-200 bg-white">
                <DocumentIcon className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-black">Invoice</span>
              </div>
            </div>

            {/* Search Results */}
            <div className="px-3 py-1 pb-3">
              {/* Recent Searches Header */}
              <div className="px-2 py-0 mb-2">
                <p className="text-sm text-gray-500 tracking-[-0.07px]">Recent searches</p>
              </div>

              {/* Search Results List */}
              <div className="space-y-0">
                {recentSearches.map((item) => (
                  <div 
                    key={item.id}
                    className="flex items-center justify-between px-2 py-1 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {/* Avatar/Icon */}
                      <div className="relative">
                        {item.icon === 'company' ? (
                          <div className="w-8 h-8 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                            <BuildingOfficeIcon className="w-4 h-4 text-gray-600" />
                          </div>
                        ) : (
                          <div className="relative">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium text-white">{item.avatar}</span>
                            </div>
                            {/* Country Flag */}
                            <div className="absolute -bottom-0 -right-0 w-3 h-3 bg-blue-500 rounded-sm border border-white flex items-center justify-center">
                              <span className="text-[8px] text-white font-bold">
                                {item.country}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Name and Role */}
                      <div className="flex items-center gap-1">
                        <span className="text-15px font-medium text-gray-900 tracking-[-0.15px]">
                          {item.name}
                        </span>
                        <span className="text-13px text-gray-500 tracking-[-0.065px]">
                          –– {item.role}
                        </span>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="px-2 py-1 rounded-lg border border-gray-100 bg-white">
                      <span className="text-13px text-gray-500">{item.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 