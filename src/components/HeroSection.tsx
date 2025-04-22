
import React from 'react';
import GradientButton from './GradientButton';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Tutti i <span className="text-airstaff-pink">lavoratori</span> a tua disposizione dalle migliori <span className="text-airstaff-blue">Agenzie per il lavoro</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            AirStaff è il motore di ricerca intelligente che ti elenca, in una sola ricerca, tutti i lavoratori disponibili tramite le agenzie per il lavoro associate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a href="http://www.app.airstaff.it/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <GradientButton icon className="w-full sm:w-auto px-8 py-3 text-lg">
                Provalo gratis
              </GradientButton>
            </a>
            <a href="#come-funziona" className="btn-outline w-full sm:w-auto px-8 py-3 text-lg font-medium text-center">
              Scopri di più
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <img 
            src="/lovable-uploads/ca830ce1-c78e-4909-992c-dd0aebd3cb3b.png" 
            alt="AirStaff Platform Interface" 
            className="max-w-full h-auto rounded-xl shadow-xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
