import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';

const TimeOffSection = () => {
  const requests = [
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

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
            <CalendarIcon className="w-4 h-4 text-gray-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Time off</h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 mb-6">
        <button className="flex items-center text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-2">
          Requests
          <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">14</span>
        </button>
        <button className="text-sm font-medium text-gray-500 pb-2">
          Upcoming
        </button>
      </div>

      {/* Request List */}
      <div className="space-y-4">
        {requests.map((request) => (
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
              <button className="px-3 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded hover:bg-gray-50">
                {request.action}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View requests →
        </button>
      </div>
    </div>
  );
};

export default TimeOffSection; 