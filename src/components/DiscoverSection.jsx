import React from 'react';
import { ChartBarIcon, TrophyIcon } from '@heroicons/react/24/outline';

const DiscoverSection = () => {
  const cards = [
    {
      id: 1,
      title: "Uncover your true hiring costs",
      description: "Get a clear picture of what you're really spending",
      type: "chart",
      image: "📊"
    },
    {
      id: 2,
      title: "Employer cost comparison",
      description: "See how your costs stack up",
      type: "comparison",
      image: "📈"
    },
    {
      id: 3,
      title: "Attract top talent with the right benefits",
      description: "Learn what candidates really want",
      type: "benefits",
      image: "🎯"
    },
    {
      id: 4,
      title: "Design competitive equity packages",
      description: "Build packages that compete",
      type: "equity",
      image: "💎"
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
          <span className="text-red-600 text-lg">🎯</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">Discover what's best for you</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card) => (
          <div key={card.id} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-colors">
            <div className="mb-3">
              <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-2xl">
                {card.image}
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">{card.title}</h3>
            <p className="text-xs text-gray-500 mb-3">{card.description}</p>
            <button className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center">
              Learn more →
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View more →
        </button>
      </div>
    </div>
  );
};

export default DiscoverSection; 