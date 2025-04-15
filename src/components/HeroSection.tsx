
import React from 'react';
import GradientButton from './GradientButton';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            AirStaff - Connettere <span className="text-airstaff-blue">staffing</span> e <span className="text-airstaff-pink">aziende</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Ottimizziamo l'incontro tra agenzie interinali e aziende, riducendo i tempi di ricerca e massimizzando il fulfillment dei talenti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <GradientButton icon className="px-8 py-3 text-lg">
              Inizia ora
            </GradientButton>
            <button className="btn-outline px-8 py-3 text-lg font-medium">
              Scopri di più
            </button>
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
