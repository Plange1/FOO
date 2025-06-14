import React from 'react';
import { ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

const TimeTrackingSection = () => {
  const entries = [
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

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
            <ClockIcon className="w-4 h-4 text-gray-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Time tracking</h2>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <CalendarIcon className="w-4 h-4 mr-1" />
          March 2025
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 mb-6">
        <button className="flex items-center text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-2">
          Pending approval
          <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">20</span>
        </button>
        <button className="text-sm font-medium text-gray-500 pb-2">
          Clarification requested
          <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">8</span>
        </button>
      </div>

      {/* Time Tracking List */}
      <div className="space-y-3">
        {entries.map((entry) => (
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
                  <span className="text-xs text-orange-600">{entry.status}</span>
                </div>
              )}
              <button className="px-3 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded hover:bg-gray-50">
                {entry.action}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View timesheets →
        </button>
      </div>
    </div>
  );
};

export default TimeTrackingSection; 