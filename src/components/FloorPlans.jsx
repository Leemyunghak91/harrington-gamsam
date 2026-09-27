import React, { useState } from 'react';

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState('84A');

  const plans = {
    '84A': { units: 28, features: '4Bay 판상형, 맞통풍, 알파룸', image: '/floor_plan_4bay.jpg' },
    '84B': { units: 32, features: '이면 개방형, 채광 우수', image: '/floor_plan_tower.jpg' },
    '84C': { units: 149, features: '거실 이면 개방형, 파노라마 뷰', image: '/floor_plan_tower.jpg' },
    '84D': { units: 41, features: '거실 이면 개방형, 공간활용 우수', image: '/floor_plan_tower.jpg' },
    '94A': { units: 33, features: '4Bay, 넓은 드레스룸, 팬트리', image: '/floor_plan_4bay.jpg' },
    '94A-1': { units: 42, features: '4Bay, 수납 특화', image: '/floor_plan_4bay.jpg' },
    '94B': { units: 38, features: '이면 개방, 마스터룸 특화', image: '/floor_plan_tower.jpg' },
  };

  return (
    <section id="floorplans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">평면안내</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(plans).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-lg font-medium rounded-t-lg transition-colors ${
                activeTab === tab
                  ? 'bg-primary text-white border-t border-l border-r border-primary'
                  : 'bg-white text-gray-600 border-b-2 border-transparent hover:text-primary hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 min-h-[400px] border border-gray-100 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl w-full">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{activeTab} 타입</h3>
            <p className="text-lg text-secondary font-medium mb-8">총 {plans[activeTab].units}세대</p>
            
            <div className="mb-8 flex items-center justify-center w-full">
              <img 
                src={plans[activeTab].image} 
                alt={`${activeTab} 평면도`} 
                className="w-full h-auto max-h-[600px] object-contain rounded-lg shadow-sm border border-gray-100 p-2"
              />
            </div>

            <div className="bg-blue-50 text-primary p-6 rounded-lg text-left">
              <h4 className="font-bold mb-2 flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                특장점
              </h4>
              <p className="text-gray-700">{plans[activeTab].features}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
