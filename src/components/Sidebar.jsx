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
  // Image assets from Figma for the card
  const img = "http://localhost:3845/assets/387e1d80c07c6bd019c80c696d8cc1a45692df1d.png";
  const imgBlob = "http://localhost:3845/assets/5fcbf96bd80e1424819140ab4e4f5b806396ad1e.svg";
  const imgFrame = "http://localhost:3845/assets/5fbd6d81be9f82a5dfbfbe1d2710c2379b6f6c78.svg";
  const imgFrame1 = "http://localhost:3845/assets/0d2d35f8422910359b02d5c41ae2603088560000.svg";

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
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Navigation */}
      <nav className="mt-8 px-4 flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 w-full ${
                  item.active
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
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
                  <div className="absolute flex h-[180.754px] items-center justify-center right-[-23.044px] top-[-34px] w-[206.029px]">
                    <div className="flex-none rotate-[2.838deg]">
                      <div className="h-[171.181px] relative w-[197.81px]" data-name="Blob">
                        <img
                          alt=""
                          className="block max-w-none size-full"
                          src={imgBlob}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[51px] relative shrink-0 w-[60px]" data-name="Oyster logo">
                    <div
                      className="absolute bg-center bg-cover bg-no-repeat bottom-0 left-[-0.431%] opacity-70 right-[0.431%] top-0"
                      data-name="Oyster_Icon_Black_RGB 1"
                      style={{ backgroundImage: `url('${img}')` }}
                    />
                  </div>
                  <div className="absolute right-2 size-4 top-2" data-name="Frame">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgFrame}
                    />
                  </div>
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
                          <div className="relative shrink-0 size-4" data-name="Frame">
                            <img
                              alt=""
                              className="block max-w-none size-full"
                              src={imgFrame1}
                            />
                          </div>
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