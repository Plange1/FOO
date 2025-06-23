import React, { useState } from 'react';
import { DocumentTextIcon, CheckIcon } from '@heroicons/react/24/outline';

const InvoicesSection = () => {
  const [activeTab, setActiveTab] = useState('pending-approval');

  const pendingInvoices = [
    {
      id: 'OY-ACME-itJs4tPG-0325-D-INV6',
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
    <div className="bg-white rounded-[1rem] border border-[#efedeb] p-6 h-[460px] flex flex-col shadow-[0px_0px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white border border-[#e8e8e8] rounded-[12px] flex items-center justify-center mr-3">
            <DocumentTextIcon className="w-4 h-4 text-[#5C6D7A]" />
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
      <div className="space-y-3 flex-1 scrollable-content">
        {currentData.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-2">
            <div className="flex items-center flex-1">
              {/* Invoice Icon Container - Pixel Perfect */}
              <div className="w-9 h-9 bg-[#f4f4f4] rounded-xl flex items-center justify-center mr-3 p-2">
                <DocumentTextIcon className="w-5 h-5 text-gray-600" />
              </div>
              
              {/* Invoice Details */}
              <div className="flex-1">
                <p className="text-[14px] font-normal text-[#000000] leading-[1.3] tracking-[-0.14px]">
                  {item.id}
                </p>
                <p className="text-[13px] font-normal text-[#5c6d7a] leading-[1.3] tracking-[-0.13px] mt-1">
                  {item.type}
                </p>
              </div>
              
              {/* Amount */}
              <div className="text-right mr-3">
                <p className="text-[14px] font-semibold text-[#171717] leading-[1.3] tracking-[-0.14px]">
                  {item.amount}
                </p>
              </div>
              
              {/* Check Icon - Pixel Perfect */}
              {activeTab === 'pending-approval' && (
                <div 
                  className="w-9 h-9 bg-white rounded-[28px] flex items-center justify-center p-2 relative"
                  style={{
                    boxShadow: '0px -1px 4px 0px inset rgba(0,0,0,0.06)',
                    border: '1px solid #e2e2e2'
                  }}
                >
                  <CheckIcon className="w-5 h-5 text-gray-600" />
                </div>
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