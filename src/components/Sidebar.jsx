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
    <div className="w-64 bg-[#F4F4F4] h-full flex flex-col">
      {/* Navigation */}
      <nav className="mt-8 px-4 flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 w-full group ${
                  item.active
                    ? 'bg-[#e2e2e2] text-[#000000]'
                    : 'text-gray-600 hover:bg-[#e2e2e2] hover:text-[#000000]'
                }`}
              >
                <item.icon className={`w-5 h-5 mr-3 transition-colors duration-200 ${
                  item.active 
                    ? 'text-[#000000]' 
                    : 'group-hover:text-[#000000]'
                }`} />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="bg-accent-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    •
                  </span>
                )}
              </button>
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