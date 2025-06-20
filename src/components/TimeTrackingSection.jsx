import React, { useState } from 'react';
import { ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

const TimeTrackingSection = () => {
  const [activeTab, setActiveTab] = useState('pending-approval');

  const pendingApprovalEntries = [
    {
      id: 1,
      name: 'Jason Kai',
      month: 'March 2025',
      status: 'Overtime',
      badge: '⚠️',
      action: 'Review'
    },
    {
      id: 2,
      name: 'Lewis Bourne',
      month: 'March 2025',
      status: '',
      action: 'Review'
    },
    {
      id: 3,
      name: 'Ella Kwarteng',
      month: 'March 2025',
      status: 'Overtime + more',
      badge: '⚠️',
      action: 'Review'
    },
    {
      id: 4,
      name: 'James Icardi',
      month: 'March 2025',
      status: '',
      action: 'Review'
    },
    {
      id: 5,
      name: 'Lagarta Lothbrok',
      month: 'March 2025',
      status: '',
      action: 'Review'
    }
  ];

  const clarificationEntries = [
    {
      id: 6,
      name: 'Alex Chen',
      month: 'March 2025',
      status: 'Missing hours',
      badge: '❓',
      action: 'Clarify'
    },
    {
      id: 7,
      name: 'Maria Garcia',
      month: 'March 2025',
      status: 'Project allocation unclear',
      badge: '❓',
      action: 'Clarify'
    },
    {
      id: 8,
      name: 'Tom Wilson',
      month: 'March 2025',
      status: 'Weekend work',
      badge: '❓',
      action: 'Clarify'
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

      {/* Time Tracking List */}
      <div className="space-y-3 flex-1 overflow-y-auto">
        {currentEntries.map((entry) => (
          <div key={entry.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center flex-1">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-800 text-xs font-medium">
                  {entry.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{entry.name}</p>
                <p className="text-xs text-gray-500">{entry.month}</p>
              </div>
              {entry.status && (
                <div className="flex items-center mr-3">
                  {entry.badge && <span className="mr-1">{entry.badge}</span>}
                  <span className={`text-xs ${
                    activeTab === 'pending-approval' ? 'text-orange-600' : 'text-blue-600'
                  }`}>
                    {entry.status}
                  </span>
                </div>
              )}
              <button className="btn btn-secondary btn-xs">
                {entry.action}
              </button>
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