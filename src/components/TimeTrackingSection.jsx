import React, { useState } from 'react';
import { ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

// Warning icon component - exact SVG from Figma
const WarningIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.134 2.75L1.384 12.5C1.23267 12.7733 1.15 13.08 1.15 13.392C1.15 13.704 1.23267 14.0107 1.384 14.284C1.53533 14.5573 1.75067 14.7873 2.01133 14.9533C2.272 15.1193 2.56733 15.216 2.87 15.234H14.37C14.6727 15.216 14.968 15.1193 15.2287 14.9533C15.4893 14.7873 15.7047 14.5573 15.856 14.284C16.0073 14.0107 16.09 13.704 16.09 13.392C16.09 13.08 16.0073 12.7733 15.856 12.5L10.106 2.75C9.95467 2.47667 9.73933 2.24667 9.47867 2.08067C9.218 1.91467 8.922 1.826 8.62 1.826C8.318 1.826 8.022 1.91467 7.76133 2.08067C7.50067 2.24667 7.28533 2.47667 7.134 2.75Z" fill="#F59E0B"/>
    <path d="M8.62 11.5C8.88614 11.5 9.12 11.2761 9.12 11C9.12 10.7239 8.88614 10.5 8.62 10.5C8.35386 10.5 8.12 10.7239 8.12 11C8.12 11.2761 8.35386 11.5 8.62 11.5Z" fill="white"/>
    <path d="M8.62 6V9" stroke="white" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

const TimeTrackingSection = () => {
  const [activeTab, setActiveTab] = useState('pending-approval');

  // Simple fallback helpers
  const getCountryFlag = (country) => {
    const flags = {
      'AU': '🇦🇺', 'US': '🇺🇸', 'GB': '🇬🇧', 'CA': '🇨🇦', 'DE': '🇩🇪', 
      'GH': '🇬🇭', 'AR': '🇦🇷', 'SE': '🇸🇪'
    };
    return flags[country] || '🌍';
  };

  const getAvatarColor = (name) => {
    const colors = ['bg-blue-100', 'bg-green-100', 'bg-purple-100', 'bg-pink-100', 'bg-yellow-100'];
    const textColors = ['text-blue-800', 'text-green-800', 'text-purple-800', 'text-pink-800', 'text-yellow-800'];
    const index = name.charCodeAt(0) % colors.length;
    return { bg: colors[index], text: textColors[index] };
  };

  const pendingApprovalEntries = [
    {
      id: 1,
      name: 'Jason Kai',
      month: 'March 2025',
      status: 'Overtime',
      statusColor: '#976d04',
      avatar: 'JK',
      country: 'GB',
      action: 'Review',
      showStatusIcon: true
    },
    {
      id: 2,
      name: 'Lewis Bourne',
      month: 'March 2025',
      status: '',
      avatar: 'LB',
      country: 'AU',
      action: 'Review',
      showStatusIcon: false
    },
    {
      id: 3,
      name: 'Ella Kwarteng',
      month: 'March 2025',
      status: 'Overtime + more',
      statusColor: '#9c6f00',
      avatar: 'EK',
      country: 'GH',
      action: 'Review',
      showStatusIcon: true
    },
    {
      id: 4,
      name: 'James Icardi',
      month: 'March 2025',
      status: '',
      avatar: 'JI',
      country: 'AR',
      action: 'Review',
      showStatusIcon: false
    },
    {
      id: 5,
      name: 'Lagarta Lothbrok',
      month: 'March 2025',
      status: '',
      avatar: 'LL',
      country: 'SE',
      action: 'Review',
      showStatusIcon: false
    },
    {
      id: 6,
      name: 'James Icardi',
      role: 'People Operations Specialist',
      month: 'March 2025',
      status: '',
      avatar: 'JI',
      country: 'AR',
      action: 'Review',
      showStatusIcon: false,
      showRole: true
    }
  ];

  const clarificationEntries = [
    {
      id: 7,
      name: 'Alex Chen',
      month: 'March 2025',
      status: 'Missing hours',
      statusColor: '#dc2626',
      avatar: 'AC',
      country: 'GB',
      action: 'Clarify',
      showStatusIcon: true
    },
    {
      id: 8,
      name: 'Maria Garcia',
      month: 'March 2025',
      status: 'Project allocation unclear',
      statusColor: '#dc2626',
      avatar: 'MG',
      country: 'AR',
      action: 'Clarify',
      showStatusIcon: true
    },
    {
      id: 9,
      name: 'Tom Wilson',
      month: 'March 2025',
      status: 'Weekend work',
      statusColor: '#dc2626',
      avatar: 'TW',
      country: 'AU',
      action: 'Clarify',
      showStatusIcon: true
    }
  ];

  const currentEntries = activeTab === 'pending-approval' ? pendingApprovalEntries : clarificationEntries;

  const tabs = [
    { 
      id: 'pending-approval', 
      label: 'Pending approval', 
      count: pendingApprovalEntries.length 
    },
    { 
      id: 'clarification', 
      label: 'Clarification requested', 
      count: clarificationEntries.length 
    }
  ];

  const renderAvatar = (entry) => {
    const colors = getAvatarColor(entry.name);
    return (
      <div className="relative">
        <div className={`w-8 h-8 ${colors.bg} rounded-full flex items-center justify-center`}>
          <span className={`${colors.text} text-xs font-medium`}>
            {entry.avatar}
          </span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 flex items-center justify-center text-xs bg-white rounded-full shadow-sm">
          {getCountryFlag(entry.country)}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-[1rem] border border-[#efedeb] p-6 h-[460px] flex flex-col shadow-[0px_0px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white border border-[#e8e8e8] rounded-[12px] flex items-center justify-center mr-3">
            <ClockIcon className="w-4 h-4 text-[#5C6D7A]" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Time tracking</h2>
        </div>
        <button className="btn btn-secondary btn-sm">
          <CalendarIcon className="icon" />
          This month
        </button>
      </div>

      {/* Interactive Tabs */}
      <div className="tab-container">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? 'active' : 'inactive'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            <span className="tab-badge">{tab.count}</span>
          </div>
        ))}
      </div>

      {/* Time Tracking List - Pixel-perfect match to Figma */}
      <div className="box-border flex flex-col gap-2 items-start justify-start p-0 relative w-full flex-1 scrollable-content" style={{ fontFamily: "'Inter', sans-serif" }}>
        {currentEntries.map((entry) => (
          <div key={entry.id} className="relative shrink-0 w-full">
            <div className="flex flex-row items-center relative w-full">
              <div className="box-border flex flex-row items-center justify-between p-2 relative w-full">
                <div className="relative shrink-0">
                  <div className="box-border flex flex-row gap-3 items-center justify-start p-0 relative">
                    {renderAvatar(entry)}
                    <div className="relative shrink-0">
                      <div className="box-border flex flex-col items-start justify-center p-0 relative">
                        <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap tracking-[-0.14px]">
                          <p className="block leading-[1.4] whitespace-pre">
                            {entry.name}
                          </p>
                        </div>
                        {entry.showRole ? (
                          <div
                            className="font-normal leading-[0] not-italic relative shrink-0 text-[#5c6d7a] text-[13px] text-left"
                            style={{ width: "195.2px" }}
                          >
                            <p className="block leading-[1.4]">
                              {entry.role}
                            </p>
                          </div>
                        ) : (
                          <div className="relative shrink-0">
                            <div className="box-border flex flex-row gap-1.5 items-center justify-center p-0 relative">
                              <div className="relative shrink-0">
                                <div className="box-border flex flex-row gap-1 items-center justify-start p-0 relative">
                                  <div className="font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#5c6d7a] text-[13px] text-left text-nowrap tracking-[-0.13px]">
                                    <p className="block leading-[20px] whitespace-pre">
                                      {entry.month}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {entry.showStatusIcon && entry.status && (
                                <>
                                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                  <div className="relative shrink-0">
                                    <div className="box-border flex flex-row gap-1 items-center justify-start p-0 relative">
                                      <div className="relative shrink-0">
                                        <div className="box-border flex flex-row gap-1 items-center justify-start p-0 relative">
                                          <div className="w-4 h-4 flex items-center justify-center">
                                            <WarningIcon />
                                          </div>
                                          <div
                                            className="font-normal justify-end leading-[0] not-italic relative shrink-0 text-[13px] text-left text-nowrap tracking-[-0.13px]"
                                            style={{ color: entry.statusColor }}
                                          >
                                            <p className="block leading-[20px] whitespace-pre">
                                              {entry.status}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                                 <button className="btn btn-secondary btn-xs">
                   {entry.action}
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="btn btn-link">
          View timesheets →
        </button>
      </div>
    </div>
  );
};

export default TimeTrackingSection; 