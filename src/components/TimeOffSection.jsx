import React, { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';

const TimeOffSection = () => {
  const [activeTab, setActiveTab] = useState('pending-requests');

  const pendingRequests = [
    {
      id: 1,
      name: 'Lewis Bourne',
      role: 'Wellness Coach',
      avatar: 'LB',
      dates: '3 - 15 March',
      duration: 'PTO • 12 days',
      action: 'Review'
    },
    {
      id: 2,
      name: 'Beatrice Bediker',
      role: 'Workforce Scheduling Ana...',
      avatar: 'BB',
      dates: '8 - 13 Mar',
      duration: 'PTO • 5 days',
      action: 'Review'
    },
    {
      id: 3,
      name: 'Laboeur Francois',
      role: 'Backend Engineer',
      avatar: 'LF',
      dates: '11 - 19 Apr',
      duration: 'Sick leave • 8 days',
      action: 'Review'
    },
    {
      id: 4,
      name: 'Aiko Kawasaki',
      role: 'AI/ML Engineer',
      avatar: 'AK',
      dates: '11 - 19 Apr',
      duration: 'PTO • 8 days',
      action: 'Review'
    }
  ];

  const approvedRequests = [
    {
      id: 5,
      name: 'Marcus Thompson',
      role: 'Product Designer',
      avatar: 'MT',
      dates: '20 - 24 Feb',
      duration: 'PTO • 5 days',
      action: 'Approved'
    },
    {
      id: 6,
      name: 'Elena Rodriguez',
      role: 'Frontend Developer',
      avatar: 'ER',
      dates: '15 - 22 Mar',
      duration: 'PTO • 6 days',
      action: 'Approved'
    },
    {
      id: 7,
      name: 'James Wilson',
      role: 'Data Analyst',
      avatar: 'JW',
      dates: '5 - 9 Apr',
      duration: 'PTO • 4 days',
      action: 'Approved'
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

      {/* Request List */}
      <div className="space-y-4 flex-1 overflow-y-auto">
        {currentRequests.map((request) => (
          <div key={request.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center flex-1">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-800 text-sm font-medium">{request.avatar}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{request.name}</p>
                <p className="text-xs text-gray-500">{request.role}</p>
              </div>
              <div className="text-right mr-4">
                <p className="text-sm font-medium text-gray-900">{request.dates}</p>
                <p className="text-xs text-gray-500">{request.duration}</p>
              </div>
              <button className={`btn btn-xs ${
                activeTab === 'pending-requests' 
                  ? 'btn-secondary'
                  : 'btn-success'
              }`}>
                {request.action}
              </button>
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