import React, { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';

const TimeOffSection = () => {
  const [activeTab, setActiveTab] = useState('pending-requests');

  // Simple fallback for country flags
  const getCountryFlag = (country) => {
    const flags = {
      'AU': '🇦🇺',
      'US': '🇺🇸', 
      'GB': '🇬🇧',
      'CA': '🇨🇦',
      'DE': '🇩🇪'
    };
    return flags[country] || '🌍';
  };

  const pendingRequests = [
    {
      id: 1,
      name: 'Lewis Bourne',
      role: 'Wellness Coach',
      avatar: 'LB',
      dates: '3 - 15 March',
      duration: 'PTO - 12 days',
      action: 'Review',
      country: 'AU'
    },
    {
      id: 2,
      name: 'Beatrice Bediker',
      role: 'Workforce Scheduling Ana...',
      avatar: 'BB',
      dates: '8 - 13 Mar',
      duration: 'PTO - 5 days',
      action: 'Review',
      country: 'CA'
    },
    {
      id: 3,
      name: 'Laboeur Francois',
      role: 'Backend Engineer',
      avatar: 'LF',
      dates: '11 - 19 Apr',
      duration: 'Sick leave - 8 days',
      action: 'Review',
      country: 'GB'
    },
    {
      id: 4,
      name: 'Aiko Kawasaki',
      role: 'AI/ML Engineer',
      avatar: 'AK',
      dates: '11 - 19 Apr',
      duration: 'PTO - 8 days',
      action: 'Review',
      country: 'US'
    }
  ];

  const approvedRequests = [
    {
      id: 5,
      name: 'Marcus Thompson',
      role: 'Product Designer',
      avatar: 'MT',
      dates: '20 - 24 Feb',
      duration: 'PTO - 5 days',
      action: 'Approved',
      country: 'DE'
    },
    {
      id: 6,
      name: 'Elena Rodriguez',
      role: 'Frontend Developer',
      avatar: 'ER',
      dates: '15 - 22 Mar',
      duration: 'PTO - 6 days',
      action: 'Approved',
      country: 'AU'
    },
    {
      id: 7,
      name: 'James Wilson',
      role: 'Data Analyst',
      avatar: 'JW',
      dates: '5 - 9 Apr',
      duration: 'PTO - 4 days',
      action: 'Approved',
      country: 'CA'
    }
  ];

  const currentRequests = activeTab === 'pending-requests' ? pendingRequests : approvedRequests;

  const tabs = [
    { 
      id: 'pending-requests', 
      label: 'Pending requests', 
      count: pendingRequests.length 
    },
    { 
      id: 'approved', 
      label: 'Approved', 
      count: approvedRequests.length 
    }
  ];

  return (
    <div className="bg-white rounded-[1rem] border border-[#e2e2e2] p-6 h-[460px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white border border-[#e8e8e8] rounded-[12px] flex items-center justify-center mr-3">
            <CalendarIcon className="w-4 h-4 text-[#5C6D7A]" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Time off</h2>
        </div>
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

      {/* Request List - Pixel-perfect match to Figma */}
      <div className="space-y-0 flex-1 scrollable-content">
        {currentRequests.map((request) => (
          <div key={request.id} className="relative w-full" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="flex flex-row items-center relative w-full">
              <div className="box-border flex flex-row gap-6 items-center justify-start p-2 relative w-full">
                {/* Left section with avatar and user info */}
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                  <div className="box-border flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                    {/* Avatar with flag overlay */}
                    <div className="relative">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-800 text-xs font-medium">
                          {request.avatar}
                        </span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 flex items-center justify-center text-xs bg-white rounded-full shadow-sm">
                        {getCountryFlag(request.country)}
                      </div>
                    </div>
                    
                    {/* User info */}
                    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                      <div className="box-border flex flex-col items-start justify-start p-0 relative w-full">
                        <div className="relative shrink-0 w-full">
                          <div className="box-border flex flex-row items-center justify-start p-0 relative w-full">
                            <div className="flex flex-col font-medium justify-end leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-900 text-nowrap tracking-[-0.14px]">
                              <p className="block leading-[1.3] whitespace-pre">
                                {request.name}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#5c6d7a] text-[13px] text-left"
                          style={{ width: "min-content" }}
                        >
                          <p className="block leading-[1.4]">{request.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Date and duration section */}
                <div className="relative shrink-0 w-[180px]">
                  <div className="box-border flex flex-col items-start justify-center p-0 relative w-[180px]">
                    <div className="relative shrink-0">
                      <div className="box-border flex flex-row gap-1 items-center justify-start p-0 relative">
                        <div className="flex flex-col font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap tracking-[-0.14px]">
                          <p className="block leading-[20px] whitespace-pre">
                            {request.dates}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-normal justify-end leading-[0] not-italic relative shrink-0 text-[#5c6d7a] text-[14px] text-left text-nowrap tracking-[-0.14px]">
                      <p className="block leading-[24px] whitespace-pre">
                        {request.duration}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Action button */}
                <button className="btn btn-secondary btn-xs">
                  {request.action}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="btn btn-link">
          View requests →
        </button>
      </div>
    </div>
  );
};

export default TimeOffSection; 