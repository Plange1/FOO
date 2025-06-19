import React, { useState } from 'react';
import { DocumentTextIcon, CheckIcon } from '@heroicons/react/24/outline';

const InvoicesSection = () => {
  const [activeTab, setActiveTab] = useState('pending-approval');

  const pendingInvoices = [
    {
      id: 'OY-ACME-1Js4tPG-0325-D-INV6',
      type: 'Deposit',
      amount: 'USD 1,052.58',
      status: 'approved'
    },
    {
      id: 'OY-ACME-LOKI-wriDHMF-0000023',
      type: 'Contractor monthly payment',
      amount: 'USD 5,146.02',
      status: 'approved'
    },
    {
      id: 'OY-ACME-1Js4tPG-0325-D-INV4',
      type: 'Deposit',
      amount: 'USD 2,104.43',
      status: 'approved'
    },
    {
      id: 'OY-ACME-1Js4tPG-0225-CF-INV1',
      type: 'Oyster fees',
      amount: 'USD 201.00',
      status: 'approved'
    },
    {
      id: 'OY-ACME-SARA-HwSPABCx-0000016',
      type: 'Contractor monthly payment',
      amount: 'USD 15,100.00',
      status: 'approved'
    }
  ];

  const overviewData = [
    {
      id: 'overview-1',
      type: 'Total processed this month',
      amount: 'USD 24,500.03',
      status: 'processed'
    },
    {
      id: 'overview-2',
      type: 'Average processing time',
      amount: '2.4 days',
      status: 'metric'
    },
    {
      id: 'overview-3',
      type: 'Pending payment',
      amount: 'USD 8,452.12',
      status: 'pending'
    }
  ];

  const currentData = activeTab === 'pending-approval' ? pendingInvoices : overviewData;

  const tabs = [
    { 
      id: 'pending-approval', 
      label: 'Pending approval', 
      count: pendingInvoices.length 
    },
    { 
      id: 'overview', 
      label: 'Overview', 
      count: null 
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
            <DocumentTextIcon className="w-4 h-4 text-gray-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Invoices</h2>
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
            {tab.count && <span className="tab-badge">{tab.count}</span>}
          </div>
        ))}
      </div>

      {/* Content List */}
      <div className="space-y-3">
        {currentData.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center flex-1">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mr-3">
                <DocumentTextIcon className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{item.id}</p>
                <p className="text-xs text-gray-500">{item.type}</p>
              </div>
              <div className="text-right mr-3">
                <p className="text-sm font-medium text-gray-900">{item.amount}</p>
              </div>
              {activeTab === 'pending-approval' && (
                <CheckIcon className="w-5 h-5 text-green-500" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="btn btn-link">
          View invoices →
        </button>
      </div>
    </div>
  );
};

export default InvoicesSection; 