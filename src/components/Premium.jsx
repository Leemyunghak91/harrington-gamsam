import React from 'react';
import { MapPin, Train, School, Building, Home, TrendingUp } from 'lucide-react';

const Premium = () => {
  const premiums = [
    {
      icon: <Home size={32} className="text-secondary" />,
      title: "죽전역 주거타운 프리미엄",
      desc: "약 4천여세대 초고층 주상복합타운의 중심"
    },
    {
      icon: <Building size={32} className="text-secondary" />,
      title: "All in 1km 중심생활",
      desc: "홈플러스, 하나로마트 등 집중된 생활인프라"
    },
    {
      icon: <Train size={32} className="text-secondary" />,
      title: "지하철 2호선 역세권",
      desc: "도보거리로 만날 수 있는 죽전역 및 용산역"
    },
    {
      icon: <MapPin size={32} className="text-secondary" />,
      title: "편리하고 빠른 교통",
      desc: "와룡로, 달구벌대로, 성서IC, 남대구IC, 서대구역"
    },
    {
      icon: <School size={32} className="text-secondary" />,
      title: "가깝고 우수한 학세권",
      desc: "장동초와 중·고교 및 학원가, 본리도서관"
    },
    {
      icon: <TrendingUp size={32} className="text-secondary" />,
      title: "더 기대되는 미래가치",
      desc: "대구시청 신청사 이전, 서대구역 복합환승센터"
    }
  ];

  return (
    <section id="premium" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">프리미엄 6</h2>
          <div className="w-16 h-1 bg-secondary mx-auto"></div>
          <p className="mt-4 text-xl text-gray-700 font-medium">죽전역과 본리네거리 중심에서 더 크게 누리는 프리미엄!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiums.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Premium;
