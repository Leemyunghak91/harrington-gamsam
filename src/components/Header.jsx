import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: '사업개요', href: '#overview' },
    { title: '프리미엄', href: '#premium' },
    { title: '단지안내', href: '#complex' },
    { title: '평면안내', href: '#floorplans' },
    { title: '스마트시스템', href: '#systems' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center w-1/4">
            <a href="#" className="text-lg md:text-2xl font-serif font-bold text-primary flex flex-col md:flex-row md:items-center">
              <span>Harrington Place</span>
              <span className="md:ml-2 text-xs md:text-sm text-gray-500 font-medium">감삼 Ⅲ</span>
            </a>
          </div>

          {/* Contact Banner - Center */}
          <div className="flex-grow flex justify-center items-center w-2/4">
            <a href="tel:010-7551-4590" className="hover:opacity-80 transition-opacity">
              <img 
                src="/contact_banner.png" 
                alt="분양문의: 010-7551-4590" 
                className="h-12 md:h-16 object-contain" 
              />
            </a>
          </div>
          
          {/* Menu - Right */}
          <div className="hidden lg:flex justify-end space-x-6 w-1/4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-secondary font-medium transition-colors text-sm xl:text-base whitespace-nowrap"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Right */}
          <div className="lg:hidden flex items-center justify-end w-1/4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50 border-b border-gray-100 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
