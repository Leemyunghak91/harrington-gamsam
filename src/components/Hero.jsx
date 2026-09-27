import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-24 h-screen bg-gray-900 flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Apartment view" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-secondary text-xl md:text-2xl font-serif mb-4 tracking-widest uppercase">
          Post-Premium Place
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          삶의 가치가 남다른 프리미엄<br />꿈의 공간
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10">
          해링턴 플레이스 감삼 Ⅲ
        </p>
        <a 
          href="#overview"
          className="inline-block border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-primary transition-colors font-medium text-lg mb-12"
        >
          단지 알아보기
        </a>

        {/* Contact Banner in Hero */}
        <div className="flex justify-center animate-bounce-slow">
          <a 
            href="tel:010-7551-4590" 
            className="block bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-2xl shadow-2xl hover:scale-105 transition-transform border border-gray-200"
          >
            <img 
              src="/contact_banner.png" 
              alt="분양문의: 010-7551-4590" 
              className="h-14 md:h-20 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
