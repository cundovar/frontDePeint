import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveIndex(0);
        break;
      case "/peinture":
        setActiveIndex(1);
        break;
      case "/digital":
        setActiveIndex(2);
        break;
      case "/contact":
        setActiveIndex(3);
        break;
    
      default:
        setActiveIndex(0);
    }
  }, [location.pathname]);

  return (
    <nav className='nav  absolute    z-[9999] flex items-center justify-center'>
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 absolute right-0 -top-8"
        aria-controls="mega-menu-full"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div id="mega-menu-full " className={`max-sm:mt-20 max-xl:mt-24 p-2 rounded-xl bg-gradient-to-r from-cyan-600 max-xl:to-blue-500 items-center justify-between font-medium ${isMenuOpen ? 'flex' : 'hidden'} w-full xl:flex md:w-auto md:order-1 mt-2`}>
        <ul className='flex flex-col w-full space-y-5  border-orange-400'>
          <li className={`text-2xl ${activeIndex === 0 ? 'active:bg-cyan-800  border-b border-t' : ''} trux border-t-emerald-200`}>
            <Link onClick={toggleMenu} to="/">Accueil</Link>
          </li>
          <li className={`text-2xl ${activeIndex === 1 ? 'active:bg-cyan-800 border-b border-t' : ''} trux`}>
            <Link to="/peinture" onClick={toggleMenu}>Peinture</Link>
          </li>
          <li className={`text-2xl ${activeIndex === 2 ? 'active:bg-cyan-800  border-b border-t' : ''} trux`}>
            <Link onClick={toggleMenu} to="/digital">Digital</Link>
          </li>
          <li className={`text-2xl ${activeIndex === 3 ? 'active:bg-cyan-800  border-b border-t' : ''} trux`}>
            <Link onClick={toggleMenu} to="/contact">Contact</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};


