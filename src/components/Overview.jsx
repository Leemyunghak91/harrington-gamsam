import React from 'react';

const Overview = () => {
  return (
    <section id="overview" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">사업개요</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
          <p className="mt-4 text-gray-600">총 566가구 中 공동주택 363세대, 오피스텔 203실 공급</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-gray-200">
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">대지위치</h3>
              <p className="mt-2 text-lg font-medium text-gray-900">대구광역시 달서구 감삼동 505-1번지 외 8필지</p>
            </div>
            <div className="p-6 border-b md:border-b-0 lg:border-r border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">건축규모</h3>
              <p className="mt-2 text-lg font-medium text-gray-900">지하 4층 ~ 지상 48층, 3개동</p>
            </div>
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">세대수</h3>
              <p className="mt-2 text-lg font-medium text-gray-900">공동주택 363세대<br/>오피스텔 203실</p>
            </div>
            <div className="p-6">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">입주예정</h3>
              <p className="mt-2 text-lg font-medium text-gray-900">2025년 09월 (예정)</p>
            </div>
          </div>
          
          <div className="p-6 bg-primary text-white">
            <h3 className="text-lg font-bold mb-4">아파트 총 7개 타입 구성</h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {['84A', '84B', '84C', '84D', '94A', '94A-1', '94B'].map((type) => (
                <div key={type} className="px-4 py-2 border border-white/30 rounded-full font-medium">
                  {type} Type
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
