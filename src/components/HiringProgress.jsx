import React from 'react';
import { PlusIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

const HiringProgress = () => {
  const tasks = [
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

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
            <ClockIcon className="w-4 h-4 text-gray-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Hiring progress</h2>
        </div>
        <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50">
          <PlusIcon className="w-4 h-4 mr-2" />
          New hire
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 mb-6">
        <button className="flex items-center text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-2">
          For you
          <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">5</span>
        </button>
        <button className="flex items-center text-sm font-medium text-gray-500 pb-2">
          For team member
          <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">8</span>
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task) => (
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
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View hires →
        </button>
      </div>
    </div>
  );
};

export default HiringProgress; 