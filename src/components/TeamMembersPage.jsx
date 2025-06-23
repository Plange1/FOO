import React, { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const TeamMembersPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    { name: 'All', count: 321 },
    { name: 'Active', count: 315 },
    { name: 'Terminated', count: 6 }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Jason Kai',
      role: 'Medical Data Analyst',
      type: 'EOR team member',
      employment: 'Full-time',
      country: 'United Kingdom',
      countryFlag: '🇬🇧',
      startDate: '22 Jan 2021',
      email: 'j.kai@healthtech.com',
      avatar: 'JK',
      avatarType: 'initials',
      avatarBg: '#e3f2fd',
      avatarText: '#1565c0'
    },
    {
      id: 2,
      name: 'Ella Kwarteng',
      role: 'Behavioral Health Specialist',
      type: 'EOR team member',
      employment: 'Full-time',
      country: 'Ghana',
      countryFlag: '🇬🇭',
      startDate: '22 Jan 2021',
      email: 'e.kwarteng@wellness.com',
      avatar: 'EK',
      avatarType: 'initials',
      avatarBg: '#f3e5f5',
      avatarText: '#7b1fa2'
    },
    {
      id: 3,
      name: 'Lewis Bourne',
      role: 'Wellness Coach',
      type: 'Contractor',
      employment: 'PAYG (Pay As You Go)',
      country: 'Australia',
      countryFlag: '🇦🇺',
      startDate: '22 Jan 2021',
      email: 'l.bourne@fitnesscorp.com',
      avatar: 'LB',
      avatarType: 'initials',
      avatarBg: '#d9e1fb',
      avatarText: '#2a375f'
    },
    {
      id: 4,
      name: 'Cardi Gonzalez',
      role: 'Product Designer',
      type: 'EOR team member',
      employment: 'Full-time',
      country: 'Venezuela',
      countryFlag: '🇻🇪',
      startDate: '22 Jan 2021',
      email: 'c.gonzalez@designstudio.com',
      avatar: 'CG',
      avatarType: 'initials',
      avatarBg: '#fff3e0',
      avatarText: '#ef6c00'
    },
    {
      id: 5,
      name: 'Lagarta Lothbrok',
      role: 'Credentialing Specialist',
      type: 'EOR team member',
      employment: 'Full-time',
      country: 'Sweden',
      countryFlag: '🇸🇪',
      startDate: '22 Jan 2021',
      email: 'l.lothbrok@medcredentials.com',
      avatar: 'LL',
      avatarType: 'initials',
      avatarBg: '#e8f5e8',
      avatarText: '#2e7d32'
    },
    {
      id: 6,
      name: 'Justin Van Dyjk',
      role: 'Backend Engineer',
      type: 'Contractor',
      employment: 'Fixed',
      country: 'Netherlands',
      countryFlag: '🇳🇱',
      startDate: '22 Jan 2021',
      email: 'j.vandyjk@techsolutions.com',
      avatar: 'JD',
      avatarType: 'initials',
      avatarBg: '#fae6e8',
      avatarText: '#3c1b30'
    },
    {
      id: 7,
      name: 'Aiko Kawasaki',
      role: 'AI/ML Engineer',
      type: 'EOR team member',
      employment: 'Full-time',
      country: 'Japan',
      countryFlag: '🇯🇵',
      startDate: '22 Jan 2021',
      email: 'a.kawasaki@aitech.com',
      avatar: 'AK',
      avatarType: 'initials',
      avatarBg: '#fce4ec',
      avatarText: '#c2185b'
    },
    {
      id: 8,
      name: 'Beatrice Bødtker',
      role: 'Workforce Scheduling Analyst',
      type: 'EOR team member',
      employment: 'Full-time',
      country: 'Switzerland',
      countryFlag: '🇨🇭',
      startDate: '22 Jan 2021',
      email: 'b.bodtker@workforce.com',
      avatar: 'BB',
      avatarType: 'initials',
      avatarBg: '#fbf0be',
      avatarText: '#2c2c2c'
    },
    {
      id: 9,
      name: 'James Icardi',
      role: 'People Operations Specialist',
      type: 'EOR team member',
      employment: 'Full-time',
      country: 'Argentina',
      countryFlag: '🇦🇷',
      startDate: '22 Jan 2021',
      email: 'j.icardi@peopleops.com',
      avatar: 'JI',
      avatarType: 'initials',
      avatarBg: '#e2f6db',
      avatarText: '#253c31'
    }
  ];

  const renderAvatar = (member) => {
    return (
      <div 
        className="overflow-clip relative rounded-[32px] shrink-0 size-8 flex items-center justify-center"
        style={{ backgroundColor: member.avatarBg }}
      >
        <div
          className="font-['Inter'] font-medium leading-[0] not-italic text-[14px] text-center text-nowrap tracking-[-0.14px]"
          style={{ color: member.avatarText }}
        >
          {member.avatar}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-auto bg-[#ffffff] border border-[#DEE0E4] rounded-[16px]">
      <div className="p-6">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="pb-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">Team members</h1>
              <button 
                className="px-4 py-2 text-white font-medium hover:opacity-90 transition-opacity"
                style={{ 
                  backgroundColor: '#176247',
                  borderRadius: '28px'
                }}
              >
                Add new hire
              </button>
            </div>

            {/* Tabs */}
            <div className="flex space-x-6 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-sm transition-colors ${
                    activeTab === tab.name
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>{tab.name}</span>
                  <span className="text-gray-500">{tab.count}</span>
                </button>
              ))}
            </div>

            {/* Search and Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  style={{ 
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e2e2',
                    borderRadius: '12px'
                  }}
                />
              </div>
              <button className="btn btn-primary btn-md">
                <FunnelIcon className="icon" />
                Filter
              </button>
              <button className="btn btn-primary btn-md">
                <EllipsisHorizontalIcon className="icon" />
                Bulk actions
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="relative flex-1 overflow-hidden border border-[#f0f2f5] rounded-[12px]">
            <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative size-full">
              
              {/* Team member column */}
              <div className="relative flex-1" style={{ minWidth: '280px' }}>
                <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative w-full">
                  {/* Header */}
                  <div className="bg-[#ffffff] h-11 relative shrink-0 w-full border-b border-[#f0f2f5]">
                    <div className="flex flex-col justify-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-11 items-start justify-center px-4 py-3 relative w-full">
                        <div className="font-['Inter'] font-medium leading-[0] not-italic relative shrink-0 text-[#5c6d7a] text-[14px] text-left tracking-[-0.14px] w-full">
                          Team member
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rows */}
                  {teamMembers.map((member) => (
                    <div key={member.id} className="bg-[#ffffff] h-[72px] relative shrink-0 w-full border-b border-[#f0f2f5]">
                      <div className="flex flex-row items-center overflow-clip relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-2 h-[72px] items-center justify-start px-4 py-3.5 relative">
                          {renderAvatar(member)}
                                                     <div className="relative shrink-0">
                             <div className="box-border content-stretch flex flex-col items-start justify-center not-italic p-0 relative text-left">
                               <div className="font-['Inter'] font-medium relative shrink-0 text-[#000000] text-[14px] text-nowrap tracking-[-0.14px] leading-[20px]">
                                 {member.name}
                               </div>
                               <div className="font-['Inter'] font-normal relative shrink-0 text-[#5c6d7a] text-[13px] tracking-[-0.13px] leading-[18px] mt-1">
                                 {member.role}
                               </div>
                             </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Type column */}
              <div className="relative flex-1" style={{ minWidth: '200px' }}>
                <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative w-full">
                  {/* Header */}
                  <div className="bg-[#ffffff] h-11 relative shrink-0 w-full border-b border-[#f0f2f5]">
                    <div className="flex flex-col justify-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-11 items-start justify-center px-4 py-3 relative w-full">
                        <div className="font-['Inter'] font-medium leading-[0] not-italic relative shrink-0 text-[#5c6d7a] text-[14px] text-left tracking-[-0.14px] w-full">
                          Type
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rows */}
                  {teamMembers.map((member) => (
                    <div key={member.id} className="bg-[#ffffff] h-[72px] relative shrink-0 w-full border-b border-[#f0f2f5]">
                      <div className="flex flex-col justify-center overflow-clip relative size-full">
                                                 <div className="box-border content-stretch flex flex-col font-['Inter'] h-[72px] items-start justify-center not-italic px-4 py-3.5 relative text-left w-full">
                           <div className="relative shrink-0 text-[#000000] text-[14px] tracking-[-0.14px] w-full font-medium leading-[20px]">
                             {member.type}
                           </div>
                           <div className="relative shrink-0 text-[#5c6d7a] text-[13px] w-full font-normal leading-[18px] mt-1">
                             {member.employment}
                           </div>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Country column */}
              <div className="relative flex-1" style={{ minWidth: '180px' }}>
                <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative w-full">
                  {/* Header */}
                  <div className="bg-[#ffffff] h-11 relative shrink-0 w-full border-b border-[#f0f2f5]">
                    <div className="flex flex-col justify-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-11 items-start justify-center px-4 py-3 relative w-full">
                        <div className="font-['Inter'] font-medium leading-[0] not-italic relative shrink-0 text-[#5c6d7a] text-[14px] text-left tracking-[-0.14px] w-full">
                          Country
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rows */}
                  {teamMembers.map((member) => (
                    <div key={member.id} className="bg-[#ffffff] h-[72px] relative shrink-0 w-full border-b border-[#f0f2f5]">
                      <div className="flex flex-row items-center overflow-clip relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-2 h-[72px] items-center justify-start px-4 py-3 relative w-full">
                          <div className="h-[15px] relative shrink-0 w-5 text-[15px]">
                            {member.countryFlag}
                          </div>
                          <div className="font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap tracking-[-0.14px]">
                            {member.country}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Start date column */}
              <div className="relative flex-1" style={{ minWidth: '120px' }}>
                <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative w-full">
                  {/* Header */}
                  <div className="bg-[#ffffff] h-11 relative shrink-0 w-full border-b border-[#f0f2f5]">
                    <div className="flex flex-col justify-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-11 items-start justify-center px-4 py-3 relative w-full">
                        <div className="font-['Inter'] font-medium leading-[0] not-italic relative shrink-0 text-[#5c6d7a] text-[14px] text-left tracking-[-0.14px] w-full">
                          Start date
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rows */}
                  {teamMembers.map((member) => (
                    <div key={member.id} className="bg-[#ffffff] h-[72px] relative shrink-0 w-full border-b border-[#f0f2f5]">
                      <div className="flex flex-col justify-center overflow-clip relative size-full">
                        <div className="box-border content-stretch flex flex-col h-[72px] items-start justify-center px-4 py-3 relative w-full">
                          <div className="font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[#000000] text-[14px] text-left tracking-[-0.14px] w-full">
                            {member.startDate}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email address column */}
              <div className="relative flex-1" style={{ minWidth: '220px' }}>
                <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative w-full">
                  {/* Header */}
                  <div className="bg-[#ffffff] h-11 relative shrink-0 w-full border-b border-[#f0f2f5]">
                    <div className="flex flex-col justify-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-11 items-start justify-center px-4 py-3 relative w-full">
                        <div className="font-['Inter'] font-medium leading-[0] not-italic relative shrink-0 text-[#5c6d7a] text-[14px] text-left tracking-[-0.14px] w-full">
                          Email address
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rows */}
                  {teamMembers.map((member) => (
                    <div key={member.id} className="bg-[#ffffff] h-[72px] relative shrink-0 w-full border-b border-[#f0f2f5]">
                      <div className="flex flex-col justify-center overflow-clip relative size-full">
                        <div className="box-border content-stretch flex flex-col h-[72px] items-start justify-center px-4 py-3.5 relative w-full">
                          <div className="font-['Inter'] font-normal leading-[20px] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap tracking-[-0.14px] w-full">
                            {member.email}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action column */}
              <div className="absolute right-0 shadow-[-2px_0px_2px_0px_rgba(0,0,0,0.04)] top-0">
                <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative">
                  {/* Header */}
                  <div className="bg-[#ffffff] h-11 relative shrink-0 border-b border-[#f0f2f5]">
                    <div className="flex flex-col justify-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-col h-11 items-start justify-center px-4 py-3 relative">
                        <div className="font-['Inter'] font-medium leading-[0] not-italic relative shrink-0 text-[#5c6d7a] text-[14px] text-left tracking-[-0.14px] w-full">
                          Action
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Rows */}
                  {teamMembers.map((member) => (
                    <div key={member.id} className="bg-[#ffffff] h-[72px] relative shrink-0 w-full border-b border-[#f0f2f5]">
                      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
                        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-4 py-3 relative w-full">
                          <div className="bg-[#ffffff] relative rounded-lg shrink-0 border border-[#e2e2e2] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)]">
                            <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[6px] relative">
                                <div className="relative shrink-0 size-5">
                                  <EllipsisHorizontalIcon className="w-5 h-5 text-gray-400" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembersPage; 