import React, { useState } from 'react';
import { PlusIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

const HiringProgress = () => {
  const [activeTab, setActiveTab] = useState('for-you');

  const forYouTasks = [
    {
      id: 1,
      title: "Complete Laboeur's hiring form",
      action: "Complete form",
      status: "pending"
    },
    {
      id: 2,
      title: "Invite Kwadwo Sheldon to the Oyster platform",
      action: "Send invite",
      status: "pending"
    },
    {
      id: 3,
      title: "Pay Laboeur Francois' security deposit",
      action: "Pay deposit",
      status: "pending"
    },
    {
      id: 4,
      title: "Review 🔥 Justine's employment agreement",
      action: "Review",
      status: "review"
    },
    {
      id: 5,
      title: "Review 🔥 Justine's employment agreement",
      action: "Review",
      status: "review"
    }
  ];

  const forTeamTasks = [
    {
      id: 6,
      title: "Onboard new team member - Sarah Johnson",
      action: "Start onboarding",
      status: "pending"
    },
    {
      id: 7,
      title: "Setup workspace for Alex Chen",
      action: "Configure",
      status: "pending"
    },
    {
      id: 8,
      title: "Schedule orientation meeting",
      action: "Schedule",
      status: "pending"
    }
  ];

  const currentTasks = activeTab === 'for-you' ? forYouTasks : forTeamTasks;

  const tabs = [
    { 
      id: 'for-you', 
      label: 'For you', 
      count: forYouTasks.length 
    },
    { 
      id: 'for-team', 
      label: 'For team member', 
      count: forTeamTasks.length 
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
            <ClockIcon className="w-4 h-4 text-gray-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Hiring progress</h2>
        </div>
        <button className="flex items-center px-3 py-2 text-sm font-medium text-accent-600 hover:text-accent-700 border border-accent-200 rounded-lg hover:bg-accent-50">
          <PlusIcon className="w-4 h-4 mr-2" />
          New hire
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

      {/* Task List */}
      <div className="space-y-3">
        {currentTasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center flex-1">
              <div className="w-5 h-5 border-2 border-gray-300 rounded-full mr-3"></div>
              <span className="text-sm text-gray-700">{task.title}</span>
            </div>
            <button className="px-3 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded hover:bg-gray-50">
              {task.action}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="text-sm font-medium text-accent-600 hover:text-accent-700">
          View hires →
        </button>
      </div>
    </div>
  );
};

export default HiringProgress; 