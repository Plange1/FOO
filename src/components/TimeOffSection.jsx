import React, { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';

const TimeOffSection = () => {
  const [activeTab, setActiveTab] = useState('pending-requests');

  // Image assets from Figma
  const imgBlob = "http://localhost:3845/assets/9e6a27f530b98679e92fef21d4d6cc97f3420a3b.svg";
  const imgAustraliaAu = "http://localhost:3845/assets/fd8dddbfc9f906d539e7644ad3ca4e4b9ff54249.svg";

  const pendingRequests = [
    {
      id: 1,
      name: 'Lewis Bourne',
      role: 'Wellness Coach',
      avatar: 'LB',
      dates: '3 - 15 March',
      duration: 'PTO - 12 days',
      action: 'Review',
      flag: imgAustraliaAu
    },
    {
      id: 2,
      name: 'Beatrice Bediker',
      role: 'Workforce Scheduling Ana...',
      avatar: 'BB',
      dates: '8 - 13 Mar',
      duration: 'PTO - 5 days',
      action: 'Review',
      flag: imgAustraliaAu
    },
    {
      id: 3,
      name: 'Laboeur Francois',
      role: 'Backend Engineer',
      avatar: 'LF',
      dates: '11 - 19 Apr',
      duration: 'Sick leave - 8 days',
      action: 'Review',
      flag: imgAustraliaAu
    },
    {
      id: 4,
      name: 'Aiko Kawasaki',
      role: 'AI/ML Engineer',
      avatar: 'AK',
      dates: '11 - 19 Apr',
      duration: 'PTO - 8 days',
      action: 'Review',
      flag: imgAustraliaAu
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
      flag: imgAustraliaAu
    },
    {
      id: 6,
      name: 'Elena Rodriguez',
      role: 'Frontend Developer',
      avatar: 'ER',
      dates: '15 - 22 Mar',
      duration: 'PTO - 6 days',
      action: 'Approved',
      flag: imgAustraliaAu
    },
    {
      id: 7,
      name: 'James Wilson',
      role: 'Data Analyst',
      avatar: 'JW',
      dates: '5 - 9 Apr',
      duration: 'PTO - 4 days',
      action: 'Approved',
      flag: imgAustraliaAu
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
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-[460px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <CalendarIcon className="w-4 h-4 text-blue-600" />
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
      <div className="space-y-0 flex-1 overflow-y-auto">
        {currentRequests.map((request) => (
          <div key={request.id} className="relative w-full" style={{ fontFamily: "'Inter', sans-serif" }}>
            <div className="flex flex-row items-center relative w-full">
              <div className="box-border flex flex-row gap-6 items-center justify-start p-2 relative w-full">
                {/* Left section with avatar and user info */}
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                  <div className="box-border flex flex-row gap-3 items-center justify-start p-0 relative w-full">
                    {/* Avatar with flag overlay - exact positioning */}
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                      <div
                        className="[grid-area:1_/_1] bg-[#d9e1fb] ml-0 mt-0 overflow-clip relative rounded-[32px]"
                        style={{ width: '32px', height: '32px' }}
                        data-name="avatar"
                      >
                        <div className="absolute bottom-[-3.576%] flex items-center justify-center left-[21.731%] right-[-90.993%] top-[-44.922%]">
                          <div className="flex-none h-[45px] rotate-[2.838deg] w-[52px]">
                            <div className="relative w-full h-full" data-name="Blob">
                              <img
                                alt=""
                                className="block max-w-none w-full h-full"
                                src={imgBlob}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="absolute font-medium leading-[0] not-italic text-[#2a375f] text-[14px] text-center text-nowrap tracking-[-0.14px] translate-x-[-50%]"
                          style={{
                            top: "calc(50% - 10px)",
                            left: "calc(50% + 0.5px)",
                            fontFamily: "'Inter', sans-serif"
                          }}
                        >
                          <p className="block leading-[1.4] whitespace-pre">
                            {request.avatar}
                          </p>
                        </div>
                      </div>
                      <div
                        className="[grid-area:1_/_1] h-3 ml-4 mt-5 relative w-4"
                        data-name="Australia (AU)"
                      >
                        <img
                          alt=""
                          className="block max-w-none w-full h-full"
                          src={request.flag}
                        />
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