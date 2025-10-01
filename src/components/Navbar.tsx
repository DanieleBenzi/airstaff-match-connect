
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

        {/* Desktop menu - navigation links and CTA */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/apri-posizione" className="text-gray-700 hover:text-airstaff-pink font-medium transition-colors">
            Apri una posizione
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-airstaff-pink font-medium transition-colors">
            Domande frequenti
          </Link>
          <a href="https://app.airstaff.it/" target="_blank" rel="noopener noreferrer" className="block">
            <GradientButton>
              Accedi
            </GradientButton>
          </a>
        </div>

        {/* Mobile - only logo and CTA aligned to the right */}
        <div className="md:hidden flex justify-end">
          <a href="https://app.airstaff.it/" target="_blank" rel="noopener noreferrer" className="block">
            <GradientButton>
              Accedi
            </GradientButton>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
