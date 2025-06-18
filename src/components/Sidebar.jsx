import React from 'react';
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
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const menuItems = [
    { icon: HomeIcon, label: 'Home', active: true },
    { icon: UserGroupIcon, label: 'Team' },
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
    <div className="w-64 bg-white border-r border-gray-200 h-full">
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  item.active
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="bg-accent-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    •
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 