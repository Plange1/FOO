import React from 'react';
import { DocumentTextIcon, CheckIcon } from '@heroicons/react/24/outline';

const InvoicesSection = () => {
  const invoices = [
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

      {/* Invoice List */}
      <div className="space-y-3">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center flex-1">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mr-3">
                <DocumentTextIcon className="w-4 h-4 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{invoice.id}</p>
                <p className="text-xs text-gray-500">{invoice.type}</p>
              </div>
              <div className="text-right mr-3">
                <p className="text-sm font-medium text-gray-900">{invoice.amount}</p>
              </div>
              <CheckIcon className="w-5 h-5 text-green-500" />
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

export default InvoicesSection; 