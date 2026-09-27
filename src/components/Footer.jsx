import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-800 pb-8 mb-8">
          <div>
            <h2 className="text-white text-2xl font-serif font-bold mb-4">Harrington Place</h2>
            <p className="text-sm leading-relaxed">
              바래지 않는 멋스러움과 합리적 실용성을 겸비한<br />당신만의 공간, Post-Premium Place
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">고객센터</h3>
            <p className="text-xl text-secondary font-bold mb-2">1577-0000</p>
            <p className="text-sm">운영시간: 10:00 ~ 18:00</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">견본주택 안내</h3>
            <p className="text-sm mb-2">대구광역시 달서구 이곡동 000-0번지</p>
            <a href="#" className="text-secondary hover:text-white transition-colors text-sm underline">오시는 길</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>시공: 효성중공업(주) | 시행: (주)에이치디시티</p>
          <p className="mt-4 md:mt-0">© HYOSUNG HEAVY INDUSTRIES. All rights reserved.</p>
        </div>
        
        <div className="mt-8 text-xs text-gray-600">
          <p>※ 본 웹사이트의 CG, 사진, 일러스트 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다.</p>
          <p>※ 단지 주변 교통 및 개발계획 등은 해당 기관 및 지자체의 사정에 따라 변경 또는 취소될 수 있습니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
