import React from 'react';
import { CreditCardIcon } from '@heroicons/react/24/outline';

const ExpensesSection = () => {
  const expenses = [
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

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
            <CreditCardIcon className="w-4 h-4 text-gray-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Expenses</h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 mb-6">
        <button className="flex items-center text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-2">
          Pending approval
          <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">28</span>
        </button>
        <button className="text-sm font-medium text-gray-500 pb-2">
          Overview
        </button>
      </div>

      {/* Expense List */}
      <div className="space-y-3">
        {expenses.map((expense) => (
          <div key={expense.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center flex-1">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mr-3">
                <CreditCardIcon className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{expense.title}</p>
                {expense.user && (
                  <p className="text-xs text-gray-500">{expense.user}</p>
                )}
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{expense.amount}</p>
                <p className="text-xs text-orange-600">{expense.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View invoices →
        </button>
      </div>
    </div>
  );
};

export default ExpensesSection; 