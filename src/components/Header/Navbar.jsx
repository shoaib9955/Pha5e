import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navList = [
    { label: '', path: '/' },
    { label: 'OUR VISION', path: '/our-vision' },
    { label: 'OUR TEAM', path: '/our-team' },
    { label: 'CONTACT US', path: '/contact' },
    { label: 'FR/EN', path: '/language' },
  ];

  return (
    <div className="bg-gray-700 w-full border-b-2">
      <div className="flex items-center justify-between p-3">
        <img
          src="https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/logo.svg"
          alt="phase image"
          className="h-4"
        />

        
        <ul className="text-white gap-4 hidden sm:flex">
          {navList.map((item, index) => (
            <li
              key={index}
              className="transition hover:scale-125 active:bg-black transform-border"
            >
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

      
        <FaBars
          className="text-white text-xl sm:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

    
      {menuOpen && (
        <ul className="sm:hidden bg-gray-800 px-4 py-2 text-white space-y-2">
          {navList.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
