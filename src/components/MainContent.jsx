import React from 'react';
import HiringProgress from './HiringProgress';
import DiscoverSection from './DiscoverSection';
import InvoicesSection from './InvoicesSection';
import ExpensesSection from './ExpensesSection';
import TimeOffSection from './TimeOffSection';
import TimeTrackingSection from './TimeTrackingSection';

const MainContent = () => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm text-gray-500 mb-1">Monday, February 17</p>
            <h1 className="text-2xl font-semibold text-gray-900">Good afternoon, Daisy</h1>
          </div>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
            <span className="mr-2">⚙️</span>
            Customize
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <HiringProgress />
            <InvoicesSection />
            <TimeOffSection />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <DiscoverSection />
            <ExpensesSection />
            <TimeTrackingSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent; 