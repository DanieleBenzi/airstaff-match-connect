import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import GradientButton from './GradientButton';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Menu size={24} className="text-gray-700" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[350px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link 
                    to="/apri-posizione" 
                    className="text-lg font-medium text-gray-700 hover:text-airstaff-pink transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Apri una posizione
                  </Link>
                  <Link 
                    to="/faq" 
                    className="text-lg font-medium text-gray-700 hover:text-airstaff-pink transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Domande frequenti
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        {/* Desktop menu - navigation links and CTA */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/apri-posizione" className="text-gray-700 hover:text-airstaff-pink font-medium transition-colors">
            Apri una posizione
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-airstaff-pink font-medium transition-colors">
            Domande frequenti
          </Link>
          <a href="https://app.airstaff.it/guest/search-talents" target="_blank" rel="noopener noreferrer" className="block">
            <GradientButton>
              Accedi
            </GradientButton>
          </a>
        </div>

        {/* Mobile - CTA only */}
        <div className="md:hidden">
          <a href="https://app.airstaff.it/guest/search-talents" target="_blank" rel="noopener noreferrer" className="block">
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
