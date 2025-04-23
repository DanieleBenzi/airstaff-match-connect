import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import GradientButton from './GradientButton';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll to add floating/rounded style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // On mount, check scroll position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile navbar classes
  const mobileBarClass = 
    "fixed left-1/2 -translate-x-1/2 top-3 transition-all duration-300 z-[100] px-4 py-2 flex items-center w-[95vw] max-w-[700px]" +
    (scrolled || isOpen
      ? " rounded-full bg-black/80 shadow-lg"
      : " rounded-full bg-black/70 shadow")
    +
    " md:hidden";
  
  // When menu is open, modal for mobile menu navigation
  const mobileMenuClass =
    "fixed top-0 left-0 w-full h-full z-[90] flex flex-col items-center justify-start pt-[85px] transition-all" +
    (isOpen ? "" : " pointer-events-none invisible") +
    " md:hidden";
  const menuBoxClass =
    "bg-black/90 text-white w-[90vw] max-w-[600px] mx-auto rounded-3xl p-7 flex flex-col items-stretch gap-5 shadow-2xl";

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 bg-white sticky top-0 z-50 shadow-sm">
      {/* Desktop menu */}
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
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

      {/* Mobile: floating bar */}
      <div className={mobileBarClass}>
        <Link to="/" className="flex items-center flex-1">
          <Logo />
        </Link>
        <a href="http://www.app.airstaff.it/" target="_blank" rel="noopener noreferrer" className="block mr-2">
          <GradientButton>
            Provalo gratis
          </GradientButton>
        </a>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu" className="text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile: overlay rounded modal menu */}
      <div className={mobileMenuClass} style={{background: isOpen ? "rgba(0,0,0,0.4)" : "transparent"}}>
        {isOpen && (
          <div className={menuBoxClass}>
            <Link to="/" className="text-white text-lg font-medium py-2 rounded-md hover:bg-white/10 transition" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/come-funziona" className="text-white text-lg font-medium py-2 rounded-md hover:bg-white/10 transition" onClick={() => setIsOpen(false)}>
              Come funziona
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
