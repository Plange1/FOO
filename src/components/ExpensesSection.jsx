import React, { useState } from 'react';
import { CreditCardIcon } from '@heroicons/react/24/outline';

const ExpensesSection = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const pendingExpenses = [
    {
      id: 1,
      title: 'Trip to Barcelona',
      user: '🔥 Justine Ankrah',
      amount: 'USD 152',
      status: 'Pending'
    },
    {
      id: 2,
      title: 'Four Seasons Stay 4 days',
      user: '😊 Lewis Bourne',
      amount: 'USD 152',
      status: 'Pending'
    },
    {
      id: 3,
      title: 'Car rental',
      user: '😊 Aiko Kawasaki',
      amount: 'USD 152',
      status: 'Pending'
    },
    {
      id: 4,
      title: 'Breakfast club',
      user: '🔥 Justine Ankrah',
      amount: 'USD 152',
      status: 'Pending'
    },
    {
      id: 5,
      title: 'Hackathon transport',
      user: '',
      amount: 'USD 152',
      status: 'Pending'
    }
  ];

  const approvedExpenses = [
    {
      id: 6,
      title: 'Office supplies',
      user: '💼 Sarah Chen',
      amount: 'USD 89',
      status: 'Approved'
    },
    {
      id: 7,
      title: 'Client dinner',
      user: '🍽️ Marcus Johnson',
      amount: 'USD 245',
      status: 'Approved'
    },
    {
      id: 8,
      title: 'Software license',
      user: '💻 David Kim',
      amount: 'USD 299',
      status: 'Approved'
    }
  ];

  const currentExpenses = activeTab === 'pending' ? pendingExpenses : approvedExpenses;

  const tabs = [
    { 
      id: 'pending', 
      label: 'Pending approval', 
      count: pendingExpenses.length 
    },
    { 
      id: 'approved', 
      label: 'Approved', 
      count: approvedExpenses.length 
    }
  ];

  return (
    <div className="bg-white rounded-[1rem] border border-[#e2e2e2] p-6 h-[460px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white border border-[#e8e8e8] rounded-[12px] flex items-center justify-center mr-3">
            <CreditCardIcon className="w-4 h-4 text-[#5C6D7A]" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Expenses</h2>
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

      {/* Expense List */}
      <div className="space-y-0 flex-1 scrollable-content">
        {currentExpenses.map((expense) => (
          <div key={expense.id} className="flex items-center p-2">
            <div className="flex items-center flex-1">
              {/* Icon Container */}
              <div className="w-8 h-8 bg-[#f4f4f4] rounded-xl flex items-center justify-center mr-3">
                <CreditCardIcon className="w-5 h-5 text-gray-600" />
              </div>
              
              {/* Content Container */}
              <div className="flex-1">
                {/* Title */}
                <div className="text-[14px] font-medium text-black leading-[1.3] tracking-[-0.14px] mb-1">
                  {expense.title}
                </div>
                
                {/* User Info */}
                {expense.user && (
                  <div className="flex items-center">
                    {/* User Avatar */}
                    <div className="w-4 h-4 bg-[#fae6e8] rounded-full flex items-center justify-center mr-1">
                      <span className="text-[7px] font-medium text-[#3c1b30] leading-[1.4] tracking-[-0.07px]">
                        {expense.user.includes('🔥') ? 'JA' : 
                         expense.user.includes('😊') && expense.user.includes('Lewis') ? 'LB' :
                         expense.user.includes('😊') && expense.user.includes('Aiko') ? 'AK' :
                         expense.user.includes('💼') ? 'SC' :
                         expense.user.includes('🍽️') ? 'MJ' :
                         expense.user.includes('💻') ? 'DK' : 'JA'}
                      </span>
                    </div>
                    {/* User Name */}
                    <span className="text-[13px] font-normal text-[#5c6d7a] leading-[1.3] tracking-[-0.13px]">
                      {expense.user.replace(/[🔥😊💼🍽️💻]/g, '').trim()}
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Side - Amount and Status */}
            <div className="flex flex-col items-end gap-1">
              {/* Amount */}
              <div className="text-[14px] font-semibold text-gray-900 leading-[1.3] tracking-[-0.14px]">
                {expense.amount}
              </div>
              
              {/* Status Badge */}
              <div className={`px-2 py-0.5 rounded-[27px] ${
                activeTab === 'pending' 
                  ? 'bg-[rgba(247,182,29,0.1)]' 
                  : 'bg-[rgba(34,197,94,0.1)]'
              }`}>
                <span className={`text-[13px] font-normal leading-[20px] tracking-[-0.13px] ${
                  activeTab === 'pending' ? 'text-[#845f07]' : 'text-[#166534]'
                }`}>
                  {expense.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="btn btn-link">
          View expenses →
        </button>
      </div>
    </div>
  );
};

export default ExpensesSection; 