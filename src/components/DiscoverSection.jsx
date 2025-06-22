import React from 'react';
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const DiscoverSection = () => {
  // Image asset from Figma
  const imgFrame = "http://localhost:3845/assets/65fce12b417c76d239970b392f9755e9325cf4ff.svg";

  const cards = [
    {
      id: 1,
      title: "Uncover your true hiring costs",
      description: "Calculate total employment costs in any country, including taxes, contributions, and Oyster fee.",
      formType: "hiring-costs",
      fields: [
        { label: "Where does your hire live?", placeholder: "I want to hire someone in", type: "select" },
        { label: "Gross annual salary", placeholder: "Enter salary amount", prefix: "USD", type: "input" }
      ]
    },
    {
      id: 2,
      title: "Optimize your hiring budget",
      description: "Compare employment costs across countries to make smarter, more cost-effective hiring decisions.",
      formType: "cost-comparison",
      fields: [
        { label: "Country comparison", placeholder: "Select countries to compare", type: "select" },
        { label: "Role type", placeholder: "Choose role category", type: "select" }
      ]
    },
    {
      id: 3,
      title: "Attract top talent with the right benefits",
      description: "Discover competitive perks that win and retain the best candidates in each local market.",
      formType: "benefits",
      fields: [
        { label: "Target country", placeholder: "Select target location", type: "select" },
        { label: "Industry sector", placeholder: "Choose your industry", type: "select" }
      ]
    },
    {
      id: 4,
      title: "Design competitive equity packages",
      description: "Get guidance on stock options and equity that attract and retain top talent.",
      formType: "equity",
      fields: [
        { label: "Company stage", placeholder: "Select company stage", type: "select" },
        { label: "Equity type", placeholder: "Choose equity structure", type: "select" }
      ]
    }
  ];

  const renderSalaryChart = () => (
    <div className="bg-white h-20 rounded shadow-sm overflow-hidden relative flex items-center justify-center w-full">
      <div className="text-center">
        <div className="text-sm font-medium text-gray-900 mb-2">Employer cost comparison</div>
        <div className="text-xs text-gray-500">Chart visualization coming soon</div>
      </div>
    </div>
  );

  const renderFormPreview = (card) => {
    if (card.id === 2) {
      return renderSalaryChart();
    }
    
    return (
      <div className="bg-white h-20 rounded shadow-sm overflow-hidden relative w-full">
        <div className="p-2 space-y-2 w-full">
          {card.fields.map((field, index) => (
            <div key={index} className="space-y-1 w-full">
              <div className="text-xs text-gray-500 font-normal leading-tight">
                {field.label}
              </div>
              <div className="border border-gray-200 rounded-sm px-2 py-1 flex items-center justify-between w-full">
                {field.prefix && (
                  <div className="flex items-center">
                    <span className="text-xs text-black font-normal mr-1">{field.prefix}</span>
                    <ChevronDownIcon className="w-2 h-2 text-gray-400" />
                  </div>
                )}
                <div className="text-xs text-gray-300 flex-1 truncate">
                  {field.placeholder}
                </div>
                {!field.prefix && (
                  <ChevronDownIcon className="w-2 h-2 text-gray-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-[460px] flex flex-col">
      <div className="flex items-center mb-6">
        <div 
          className="bg-[#ffffff] relative rounded-xl size-8 mr-3"
          style={{
            border: '1px solid #e8e8e8',
            boxShadow: '0px 1px 80px 16px #fae6e8'
          }}
        >
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border flex flex-row gap-2 items-center justify-start overflow-clip p-[8px] relative size-full">
              <div className="relative shrink-0 size-5" data-name="Frame">
                <img alt="" className="block max-w-none size-full" src={imgFrame} />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Discover what's best for you</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 overflow-y-auto">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="bg-gradient-to-b from-gray-100 to-white rounded-xl overflow-hidden hover:shadow-sm transition-shadow cursor-pointer h-[168px]"
          >
            {/* Form Preview Area */}
            <div className="p-4 pb-0 h-24 flex items-center w-full">
              {renderFormPreview(card)}
            </div>

            {/* Content Area */}
            <div className="p-4 pt-6 flex-1 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-3">
                  <h3 className="text-sm font-medium text-gray-900 leading-5 mb-1">
                    {card.title}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <ArrowRightIcon className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center flex-shrink-0">
        <button className="btn btn-link">
          View more →
        </button>
      </div>
    </div>
  );
};

export default DiscoverSection; 