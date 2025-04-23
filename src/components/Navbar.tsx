
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import GradientButton from './GradientButton';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop menu */}
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

        <div className="flex items-center gap-4 md:hidden">
          <a href="http://www.app.airstaff.it/" target="_blank" rel="noopener noreferrer" className="block">
            <GradientButton>
              Provalo gratis
            </GradientButton>
          </a>
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white p-5 shadow-lg z-50 flex flex-col space-y-4">
            <Link to="/" className="text-black hover:text-airstaff-blue font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/come-funziona" className="text-black hover:text-airstaff-blue font-medium" onClick={toggleMenu}>
              Come funziona
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
