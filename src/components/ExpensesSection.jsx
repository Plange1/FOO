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
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
            <CreditCardIcon className="w-4 h-4 text-orange-600" />
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
      <div className="space-y-3">
        {currentExpenses.map((expense) => (
          <div key={expense.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center flex-1">
              <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center mr-3">
                <CreditCardIcon className="w-4 h-4 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{expense.title}</p>
                <p className="text-xs text-gray-500">{expense.user}</p>
              </div>
              <div className="text-right mr-3">
                <p className="text-sm font-medium text-gray-900">{expense.amount}</p>
                <p className={`text-xs ${activeTab === 'pending' ? 'text-orange-600' : 'text-green-600'}`}>
                  {expense.status}
                </p>
              </div>
              <button className="px-3 py-1 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded hover:bg-gray-50">
                {activeTab === 'pending' ? 'Review' : 'View'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="text-sm font-medium text-accent-600 hover:text-accent-700">
          View expenses →
        </button>
      </div>
    </div>
  );
};

export default ExpensesSection; 