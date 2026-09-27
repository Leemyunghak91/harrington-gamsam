import React from 'react';
import { Smartphone, Wind, Leaf, ShieldCheck } from 'lucide-react';

const SmartSystems = () => {
  return (
    <section id="systems" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">스마트 & 특화시스템</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
          <p className="mt-4 text-gray-600">더욱 편리하고 안전한 해링턴 라이프</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Smartphone className="text-secondary mr-4" size={32} />
              <h3 className="text-2xl font-bold text-primary">해링턴 홈 IoT</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">스마트폰 앱을 통한 조명, 난방, 가스 제어</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">엘리베이터 호출 및 주차위치 확인</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">방문차량 예약 및 무인택배 알림</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Wind className="text-secondary mr-4" size={32} />
              <h3 className="text-2xl font-bold text-primary">청정 환기 시스템</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">초미세먼지까지 걸러주는 헤파필터 전열교환기</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">단지 내 미세먼지 신호등 및 공기질 알림</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">주방 후드 연동 환기 시스템</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Leaf className="text-secondary mr-4" size={32} />
              <h3 className="text-2xl font-bold text-primary">친환경 시스템</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">세대 내 전등 100% LED 조명 적용</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">친환경 마감재 및 가구 적용</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">태양광 발전설비를 통한 공용부 에너지 절감</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <ShieldCheck className="text-secondary mr-4" size={32} />
              <h3 className="text-2xl font-bold text-primary">안전 시스템</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">지하주차장 비상벨 및 고화질 CCTV</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">공동현관 안면인식 출입 시스템</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span className="text-gray-700">대피공간 안전 시스템 및 스마트 알림</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSystems;
