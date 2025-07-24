
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import GradientButton from './GradientButton';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop menu - only CTA */}
        <div className="hidden md:flex items-center">
          <a href="https://app.airstaff.it/" target="_blank" rel="noopener noreferrer" className="block">
            <GradientButton>
              Inizia la ricerca
            </GradientButton>
          </a>
        </div>

        {/* Mobile - only logo and CTA aligned to the right */}
        <div className="md:hidden flex justify-end">
          <a href="https://app.airstaff.it/" target="_blank" rel="noopener noreferrer" className="block">
            <GradientButton>
              Inizia la ricerca
            </GradientButton>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
