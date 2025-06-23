import React from 'react';
import { MagnifyingGlassIcon, ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const DiscoverSection = () => {
  return (
    <div className="bg-white rounded-[1rem] border border-[#efedeb] p-6 h-[460px] flex flex-col shadow-[0px_0px_2px_0px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-white border border-[#e8e8e8] rounded-[12px] flex items-center justify-center mr-3">
          <MagnifyingGlassIcon className="w-5 h-5 text-[#D64865]" />
        </div>
        <h2 className="text-lg font-semibold text-gray-900">
          Discover what's best for you
        </h2>
      </div>

      {/* Cards Grid - Scrollable Content */}
      <div className="flex-1 scrollable-content">
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1: Uncover your true hiring costs */}
          <div className="bg-[#f8f8f8] rounded-xl overflow-hidden flex flex-col h-[168px]">
            <div className="flex-1 flex flex-col items-center justify-center pt-6 px-4">
              <div className="bg-white rounded-[4.5px] shadow-[0px_0.57px_6.8px_0.57px_rgba(0,0,0,0.06)] w-[203px] h-[72px] p-[7px] mb-2.5">
                {/* Form field 1 */}
                <div className="mb-[7px]">
                  <div className="text-[#5c6d7a] text-[5px] leading-[1.4] tracking-[-0.03px] mb-[3px]">
                    Where does your hire live?
                  </div>
                  <div className="border border-[#e6e6e6] rounded-[3.6px] px-[5px] py-[3.6px] flex items-center justify-between">
                    <span className="text-[#eef0f2] text-[5.7px] leading-[1.4] tracking-[-0.034px] flex-1">
                      I want to hire someone in
                    </span>
                    <ChevronDownIcon className="w-[7px] h-[7px] text-gray-400" />
                  </div>
                </div>
                {/* Form field 2 */}
                <div>
                  <div className="text-[#5c6d7a] text-[5px] leading-[1.4] tracking-[-0.03px] mb-[3px]">
                    Gross annual salary
                  </div>
                  <div className="border border-[#e6e6e6] rounded-[3.6px] px-[5px] py-[3.6px] flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-[#000000] text-[5.7px] leading-[1.4] tracking-[-0.034px] mr-1">USD</span>
                      <ChevronDownIcon className="w-[7px] h-[7px] text-gray-400 mr-[3px]" />
                    </div>
                    <span className="text-[#eef0f2] text-[5.7px] leading-[1.4] tracking-[-0.034px] flex-1">
                      Enter salary amount
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-transparent to-white to-[34%] p-4 flex items-center justify-between">
              <h3 className="text-[14px] font-medium text-[#171717] leading-[20px] tracking-[-0.154px] flex-1">
                Uncover your true hiring costs
              </h3>
              <div className="p-1">
                <ArrowRightIcon className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Card 2: Employer cost comparison */}
          <div className="bg-[#f8f8f8] rounded-xl overflow-hidden flex flex-col h-[168px]">
            <div className="flex-1 flex flex-col items-center justify-center pt-6 px-4">
              <div className="bg-white rounded-[5.3px] shadow-[0px_0.89px_10.65px_-0.89px_rgba(0,0,0,0.06)] w-[190px] h-[88px] relative overflow-hidden mb-2.5">
                <img 
                  src="/employer-cost-comparison.svg" 
                  alt="Employer cost comparison chart" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="bg-gradient-to-b from-transparent to-white to-[34%] p-4 flex items-center justify-between">
              <h3 className="text-[14px] font-medium text-[#171717] leading-[24px] tracking-[-0.154px] flex-1">
                Employer cost comparison
              </h3>
              <div className="p-1">
                <ArrowRightIcon className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Card 3: Attract top talent with the right benefits */}
          <div className="bg-[#f8f8f8] rounded-xl overflow-hidden flex flex-col h-[168px]">
            <div className="flex-1 flex flex-col items-center justify-center pt-6 px-4">
              <div className="bg-white rounded-[6.4px] shadow-[0px_0.67px_8.05px_0.67px_rgba(0,0,0,0.06)] w-[167px] p-[8.5px] mb-2.5">
                <div className="flex items-center justify-center mb-[8.5px]">
                  <span className="text-[#000000] text-[6px] font-medium leading-[1.4] tracking-[-0.036px] mr-[3px]">
                    Statutory benefits in
                  </span>
                  <div className="flex items-center">
                    <div className="w-[8.7px] h-[5.8px] rounded-sm shadow-[0px_0.36px_0.73px_-0.36px_rgba(0,0,0,0.1),0px_0.36px_1.09px_0px_rgba(0,0,0,0.1)] overflow-hidden mr-[2px]">
                      <div className="w-full h-full bg-red-600"></div>
                    </div>
                    <span className="text-[#000000] text-[6px] font-medium leading-[1.4] tracking-[-0.036px]">
                      Canada
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-[2.7px]">
                  <div className="bg-white border border-[#e4e4e4] rounded-[10px] px-[5.4px] py-[2.7px]">
                    <span className="text-[#000000] text-[5.4px] leading-[1.4] tracking-[-0.032px]">
                      State health insurance
                    </span>
                  </div>
                  <div className="bg-white border border-[#e4e4e4] rounded-[10px] px-[5.4px] py-[2.7px]">
                    <span className="text-[#000000] text-[5.4px] leading-[1.4] tracking-[-0.032px]">
                      State pension fund
                    </span>
                  </div>
                  <div className="bg-white border border-[#e4e4e4] rounded-[10px] px-[5.4px] py-[2.7px]">
                    <span className="text-[#000000] text-[5.4px] leading-[1.4] tracking-[-0.032px]">
                      Parental leave
                    </span>
                  </div>
                  <div className="bg-white border border-[#e4e4e4] rounded-[10px] px-[5.4px] py-[2.7px]">
                    <span className="text-[#000000] text-[5.4px] leading-[1.4] tracking-[-0.032px]">
                      Annual leave
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-transparent to-white to-[40%] p-4 flex items-start justify-between">
              <h3 className="text-[14px] font-medium text-[#171717] leading-[24px] tracking-[-0.154px] flex-1">
                Attract top talent with the right benefits
              </h3>
              <div className="p-1">
                <ArrowRightIcon className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Card 4: Design competitive equity packages */}
          <div className="bg-[#f8f8f8] rounded-xl overflow-hidden flex flex-col h-[168px]">
            <div className="flex-1 flex flex-col items-center justify-center pt-6 px-4">
              <div className="bg-white rounded-[5.6px] shadow-[0px_0.58px_7.02px_0.58px_rgba(0,0,0,0.06)] w-[150px] p-[7.4px] mb-2.5">
                <div className="text-[#000000] text-[5.3px] font-medium leading-[1.4] tracking-[-0.032px] mb-[7.4px]">
                  Equity types per country
                </div>
                <div className="space-y-[7px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-[7.6px] h-[5.1px] rounded-sm shadow-[0px_0.32px_0.63px_-0.32px_rgba(0,0,0,0.1),0px_0.32px_0.95px_0px_rgba(0,0,0,0.1)] overflow-hidden mr-[2.3px]">
                        <div className="w-full h-full bg-black"></div>
                      </div>
                      <span className="text-[#000000] text-[4.7px] font-medium leading-[1.4] tracking-[-0.028px]">
                        GER
                      </span>
                    </div>
                    <span className="text-[#5c6d7a] text-[4.7px] leading-[1.4] tracking-[-0.028px]">
                      Stock, RSU, Cash plans
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-[7.6px] h-[5.1px] rounded-sm shadow-[0px_0.32px_0.63px_-0.32px_rgba(0,0,0,0.1),0px_0.32px_0.95px_0px_rgba(0,0,0,0.1)] overflow-hidden mr-[2.3px]">
                        <div className="w-full h-full bg-green-600"></div>
                      </div>
                      <span className="text-[#000000] text-[4.7px] font-medium leading-[1.4] tracking-[-0.028px]">
                        POR
                      </span>
                    </div>
                    <span className="text-[#5c6d7a] text-[4.7px] leading-[1.4] tracking-[-0.028px]">
                      Stock, RSU, Cash plans
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-[7.6px] h-[5.1px] rounded-sm shadow-[0px_0.32px_0.63px_-0.32px_rgba(0,0,0,0.1),0px_0.32px_0.95px_0px_rgba(0,0,0,0.1)] overflow-hidden mr-[2.3px]">
                        <div className="w-full h-full bg-blue-600"></div>
                      </div>
                      <span className="text-[#000000] text-[4.7px] font-medium leading-[1.4] tracking-[-0.028px]">
                        FRA
                      </span>
                    </div>
                    <span className="text-[#5c6d7a] text-[4.7px] leading-[1.4] tracking-[-0.028px]">
                      Cash plans
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-transparent to-white to-[34%] p-4 flex items-start justify-between">
              <h3 className="text-[14px] font-medium text-[#171717] leading-[24px] tracking-[-0.154px] flex-1 self-stretch">
                Design competitive equity packages
              </h3>
              <div className="p-1">
                <ArrowRightIcon className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View More Button - Fixed at bottom */}
      <div className="mt-4 text-center">
        <button className="btn btn-link">
          View more →
        </button>
      </div>
    </div>
  );
};

export default DiscoverSection; 