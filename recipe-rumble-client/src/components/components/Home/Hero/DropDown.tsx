import React, { useState } from 'react';
import Link from 'next/link';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="inline-block">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange-500"
        >
          Recipe Categories
        </button>
        {isOpen && (
          <div className="absolute bg-white text-black mt-1 origin-top-right left-0 w-[160px] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <Link
                href="/marketplace"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Food Marketplace
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Recipe Services
              </Link>
              <Link
                href="/challenges"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Recipe Challenges
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
