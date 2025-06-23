import React, { useState } from 'react';
import {
  HomeIcon,
  UserGroupIcon,
  UserPlusIcon,
  CreditCardIcon,
  GiftIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const [isTeamExpanded, setIsTeamExpanded] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(currentPage === 'team-members' ? 'Team members' : null);

  const menuItems = [
    { icon: HomeIcon, label: 'Home' },
    { 
      icon: UserGroupIcon, 
      label: 'Team', 
      hasSubmenu: true,
      submenuItems: [
        { label: 'Team members' },
        { label: 'Time off' },
        { label: 'Time tracking' }
      ]
    },
    { icon: UserPlusIcon, label: 'Hire' },
    { icon: CreditCardIcon, label: 'Pay' },
    { icon: GiftIcon, label: 'Total rewards' },
    { icon: BanknotesIcon, label: 'Compensation', badge: true },
    { icon: ShieldCheckIcon, label: 'Compliance' },
    { icon: BuildingOfficeIcon, label: 'Company' },
    { icon: BookOpenIcon, label: 'Resources' },
    { icon: QuestionMarkCircleIcon, label: 'Help center' }
  ];

  return (
    <div className="w-64 bg-[#f0f2f5] h-full flex flex-col">
      {/* Navigation */}
      <nav className="mt-8 px-4 flex-1">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              {/* Main Menu Item */}
              <button
                                 className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 w-full group ${
                   (item.label === 'Home' && currentPage === 'home')
                     ? 'text-[#000000]'
                     : 'text-gray-600 hover:text-[#000000]'
                 }`}
                 style={{
                   backgroundColor: (item.label === 'Home' && currentPage === 'home') ? '#DBDFE7' : undefined
                 }}
                 onMouseEnter={(e) => {
                   if (!(item.label === 'Home' && currentPage === 'home')) {
                     e.target.style.backgroundColor = '#DBDFE7';
                   }
                 }}
                 onMouseLeave={(e) => {
                   if (!(item.label === 'Home' && currentPage === 'home')) {
                     e.target.style.backgroundColor = '';
                   }
                 }}
                                 onClick={() => {
                   if (item.hasSubmenu) {
                     setIsTeamExpanded(!isTeamExpanded);
                   } else if (item.label === 'Home') {
                     setCurrentPage('home');
                     setActiveSubmenu(null);
                   }
                 }}
              >
                                 <item.icon className={`w-5 h-5 mr-3 transition-colors duration-200 ${
                   (item.label === 'Home' && currentPage === 'home') 
                     ? 'text-[#000000]' 
                     : 'group-hover:text-[#000000]'
                 }`} />
                <span className="flex-1 text-left font-medium text-[14px] leading-[1.4] tracking-[-0.14px]">{item.label}</span>
                
                {/* Chevron for submenu */}
                {item.hasSubmenu && (
                  isTeamExpanded ? (
                    <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                  ) : (
                    <ChevronRightIcon className="w-4 h-4 text-gray-600" />
                  )
                )}
                
                {/* Badge for compensation */}
                {item.badge && (
                  <div className="bg-white border border-[#e4e4e4] rounded-[4px] px-1.5 py-0.5 flex items-center gap-1 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.1)]">
                    <span className="text-[#176247] text-xs font-bold leading-none">+</span>
                    <span className="text-[#176247] text-xs font-medium leading-none">Oi</span>
                  </div>
                )}
              </button>

              {/* Submenu Items */}
              {item.hasSubmenu && isTeamExpanded && (
                <ul className="mt-1 space-y-1">
                  {item.submenuItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <button
                        className={`flex items-center pl-11 pr-2 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 w-full ${
                          subItem.label === activeSubmenu
                            ? 'bg-[#DBDFE7] text-[#000000]'
                            : 'text-[#5c6d7a] hover:text-[#000000] hover:bg-[#DBDFE7]'
                        }`}
                                                 onClick={() => {
                           setActiveSubmenu(subItem.label);
                           if (subItem.label === 'Team members') {
                             setCurrentPage('team-members');
                           }
                         }}
                        onMouseEnter={(e) => {
                          if (subItem.label !== activeSubmenu) {
                            e.target.style.backgroundColor = '#DBDFE7';
                            e.target.style.color = '#000000';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (subItem.label !== activeSubmenu) {
                            e.target.style.backgroundColor = '';
                            e.target.style.color = '#5c6d7a';
                          }
                        }}
                      >
                        <span className="font-medium text-[14px] leading-[1.4] tracking-[-0.14px]">
                          {subItem.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* What's new in Oyster Card */}
      <div className="p-4">
        <div
          className="relative rounded-xl w-full"
          data-name="update card"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <div className="box-border flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
            <div className="bg-[#d9e1fb] relative shrink-0 w-full rounded-t-[0.75rem]">
              <div className="flex flex-col items-center justify-center relative size-full">
                <div className="box-border flex flex-col gap-2 items-center justify-center px-2 py-4 relative w-full">
                  <div className="text-2xl font-bold text-blue-800 relative z-10">
                    🌟
                  </div>
                  <button className="absolute right-2 top-2 text-blue-600 hover:text-blue-800">
                    ✕
                  </button>
                </div>
              </div>
            </div>
            <div
              className="bg-[#ffffff] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full"
              data-name="text"
            >
              <div className="overflow-clip relative size-full">
                <div className="box-border flex flex-row gap-1 items-start justify-start p-[12px] relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="box-border flex flex-col gap-1 items-start justify-start p-0 relative w-full">
                      <div className="relative shrink-0 w-full">
                        <div className="box-border flex flex-row items-center justify-between p-0 relative w-full">
                          <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[13px] text-left text-nowrap tracking-[-0.078px]">
                            <p className="block leading-[1.4] whitespace-pre">
                              What's new in Oyster!
                            </p>
                          </div>
                          <span className="text-gray-400">→</span>
                        </div>
                      </div>
                      <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#5c6d7a] text-[12px] text-left tracking-[-0.072px] w-full">
                        <p className="block leading-[1.4]">
                          Batch invoices, bulk contract changes and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_0px_3px_0px_rgba(0,0,0,0.06)]" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 