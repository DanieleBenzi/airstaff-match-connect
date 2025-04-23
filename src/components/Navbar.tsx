
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import GradientButton from './GradientButton';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);

  return (
    <nav className="py-4 px-2 md:px-12 lg:px-24 sticky top-0 z-50 shadow-none bg-transparent">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* DESKTOP */}
        <div className="hidden md:flex w-full justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-black hover:text-airstaff-blue transition-colors font-medium">
              Home
            </Link>
            <Link to="/come-funziona" className="text-black hover:text-airstaff-blue transition-colors font-medium">
              Come funziona
            </Link>
            <a href="http://www.app.airstaff.it/" target="_blank" rel="noopener noreferrer" className="block">
              <GradientButton>
                Provalo gratis
              </GradientButton>
            </a>
          </div>
        </div>

        {/* MOBILE NAVBAR CLOSED/OPENED */}
        <div className="md:hidden w-full flex flex-col items-center">
          <div
            className="flex items-center w-full justify-between rounded-full shadow-md px-4 py-2 transition-all sticky top-0 z-50 bg-transparent"
            style={{ 
              borderRadius: "32px", // For mobile, higher radius
            }}
          >
            <Link to="/">
              <Logo />
            </Link>
            <a
              href="http://www.app.airstaff.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 ml-2"
            >
              <GradientButton className="px-4 py-2 text-sm">
                Provalo gratis
              </GradientButton>
            </a>
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
              className="ml-2 text-black focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* MOBILE MENU: ONLY WHEN MENU OPEN */}
          {isOpen && (
            <div
              className="absolute left-1/2 -translate-x-1/2 mt-2 w-[95vw] max-w-xs bg-white/90 rounded-3xl shadow-xl py-5 flex flex-col space-y-3 z-50 animate-fade-in-up backdrop-blur-md"
              style={{
                top: '60px', // Space below navbar
                minWidth: 220,
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white
              }}
            >
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-black text-base font-medium px-6 py-2 hover:text-airstaff-blue rounded-2xl transition-colors"
              >
                Home
              </Link>
              <Link
                to="/come-funziona"
                onClick={() => setIsOpen(false)}
                className="block text-black text-base font-medium px-6 py-2 hover:text-airstaff-blue rounded-2xl transition-colors"
              >
                Come funziona
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
