import React, { useState } from 'react';
import { ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

const TimeTrackingSection = () => {
  const [activeTab, setActiveTab] = useState('pending-approval');

  // Image assets from Figma
  const imgEllipse7 = "http://localhost:3845/assets/ae5c44bb6e37ecc89a3b188d6554cc2049acf416.png";
  const imgEllipse9 = "http://localhost:3845/assets/c37b923bead0b27ba72da4d4dcec9d71f997bf9e.png";
  const imgEllipse6 = "http://localhost:3845/assets/ff7c5b7963a5e4c61cf64d00281c09a0eb08240d.png";
  const imgUnitedKingdomGb = "http://localhost:3845/assets/e9add274e1f6172cc59594233ec77ef4884c05c3.svg";
  const imgEllipse8 = "http://localhost:3845/assets/defd74c70023db9ce2f6844639a87043d8774965.svg";
  const imgFrame = "http://localhost:3845/assets/317075af6d430559bd2b395e25ce0f53e1439f0b.svg";
  const imgBlob = "http://localhost:3845/assets/9e6a27f530b98679e92fef21d4d6cc97f3420a3b.svg";
  const imgAustraliaAu = "http://localhost:3845/assets/fd8dddbfc9f906d539e7644ad3ca4e4b9ff54249.svg";
  const imgGhanaGh = "http://localhost:3845/assets/2003d7d8b612a3c943a50d9654bbe23456f0d015.svg";
  const imgFrame1 = "http://localhost:3845/assets/dd1afab95e44165e25e83617fa855cb15bf2a929.svg";
  const imgBlob1 = "http://localhost:3845/assets/6ea4a5b4a26186ed9b6d94d0f4570db4370b7c89.svg";
  const imgArgentinaAr = "http://localhost:3845/assets/68f9d6c3e43dd5596d5dd7817e463ce16f201fb3.svg";
  const imgSwedenSe = "http://localhost:3845/assets/13a8b9e0a95587ab139eaa6c825bad0284d41c17.svg";

  const pendingApprovalEntries = [
    {
      id: 1,
      name: 'Jason Kai',
      month: 'March 2025',
      status: 'Overtime',
      statusColor: '#976d04',
      avatar: { type: 'image', src: imgEllipse7 },
      flag: imgUnitedKingdomGb,
      action: 'Review',
      showStatusIcon: true
    },
    {
      id: 2,
      name: 'Lewis Bourne',
      month: 'March 2025',
      status: '',
      avatar: { type: 'initials', text: 'LB', bg: '#d9e1fb', color: '#2a375f', blob: imgBlob },
      flag: imgAustraliaAu,
      action: 'Review',
      showStatusIcon: false
    },
    {
      id: 3,
      name: 'Ella Kwarteng',
      month: 'March 2025',
      status: 'Overtime + more',
      statusColor: '#9c6f00',
      avatar: { type: 'image', src: imgEllipse9 },
      flag: imgGhanaGh,
      action: 'Review',
      showStatusIcon: true
    },
    {
      id: 4,
      name: 'James Icardi',
      month: 'March 2025',
      status: '',
      avatar: { type: 'initials', text: 'JI', bg: '#e2f6db', color: '#253c31', blob: imgBlob1 },
      flag: imgArgentinaAr,
      action: 'Review',
      showStatusIcon: false
    },
    {
      id: 5,
      name: 'Lagarta Lothbrok',
      month: 'March 2025',
      status: '',
      avatar: { type: 'image', src: imgEllipse6 },
      flag: imgSwedenSe,
      action: 'Review',
      showStatusIcon: false
    },
    {
      id: 6,
      name: 'James Icardi',
      role: 'People Operations Specialist',
      month: 'March 2025',
      status: '',
      avatar: { type: 'initials', text: 'JI', bg: '#e2f6db', color: '#253c31', blob: imgBlob1 },
      flag: imgArgentinaAr,
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
      avatar: { type: 'initials', text: 'AC', bg: '#fef3c7', color: '#92400e' },
      flag: imgUnitedKingdomGb,
      action: 'Clarify',
      showStatusIcon: true
    },
    {
      id: 8,
      name: 'Maria Garcia',
      month: 'March 2025',
      status: 'Project allocation unclear',
      statusColor: '#dc2626',
      avatar: { type: 'initials', text: 'MG', bg: '#fce7f3', color: '#be185d' },
      flag: imgArgentinaAr,
      action: 'Clarify',
      showStatusIcon: true
    },
    {
      id: 9,
      name: 'Tom Wilson',
      month: 'March 2025',
      status: 'Weekend work',
      statusColor: '#dc2626',
      avatar: { type: 'initials', text: 'TW', bg: '#e0e7ff', color: '#3730a3' },
      flag: imgAustraliaAu,
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
    if (entry.avatar.type === 'image') {
      return (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-8">
            <img
              alt=""
              className="block max-w-none size-full"
              height="32"
              src={entry.avatar.src}
              width="32"
            />
          </div>
          <div
            className="[grid-area:1_/_1] h-3 ml-4 mt-5 relative w-4"
            data-name="Country Flag"
          >
            <div className="absolute bottom-[-4.167%] left-[-3.125%] right-[-3.125%] top-[-4.167%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={entry.flag}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div
            className="[grid-area:1_/_1] ml-0 mt-0 overflow-clip relative rounded-[32px] size-8"
            style={{ backgroundColor: entry.avatar.bg }}
            data-name="avatar"
          >
            {entry.avatar.blob && (
              <div className="absolute bottom-[-3.576%] flex items-center justify-center left-[21.731%] right-[-90.993%] top-[-44.922%]">
                <div className="flex-none h-[45px] rotate-[2.838deg] w-[52px]">
                  <div className="relative size-full" data-name="Blob">
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={entry.avatar.blob}
                    />
                  </div>
                </div>
              </div>
            )}
            <div
              className="absolute font-medium leading-[0] not-italic text-[14px] text-center text-nowrap tracking-[-0.14px] translate-x-[-50%]"
              style={{
                top: "calc(50% - 10px)",
                left: "calc(50% + 0.5px)",
                color: entry.avatar.color,
                fontFamily: "'Inter', sans-serif"
              }}
            >
              <p className="block leading-[1.4] whitespace-pre">
                {entry.avatar.text}
              </p>
            </div>
          </div>
          <div
            className="[grid-area:1_/_1] h-3 ml-4 mt-5 relative w-4"
            data-name="Country Flag"
          >
            <img
              alt=""
              className="block max-w-none size-full"
              src={entry.flag}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-[460px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <ClockIcon className="w-4 h-4 text-purple-600" />
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
      <div className="box-border flex flex-col gap-2 items-start justify-start p-0 relative w-full flex-1 overflow-y-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
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
                                  <div className="relative shrink-0 size-0.5">
                                    <img
                                      alt=""
                                      className="block max-w-none size-full"
                                      src={imgEllipse8}
                                    />
                                  </div>
                                  <div className="relative shrink-0">
                                    <div className="box-border flex flex-row gap-1 items-center justify-start p-0 relative">
                                      <div className="relative shrink-0">
                                        <div className="box-border flex flex-row gap-1 items-center justify-start p-0 relative">
                                          <div className="relative shrink-0 size-4" data-name="Frame">
                                            <img
                                              alt=""
                                              className="block max-w-none size-full"
                                              src={entry.status.includes('+') ? imgFrame1 : imgFrame}
                                            />
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