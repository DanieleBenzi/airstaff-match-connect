
import React from 'react';
import GradientButton from './GradientButton';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Connettere <span className="text-airstaff-blue">staffing</span> e <span className="text-airstaff-pink">aziende</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            AirStaff rivoluziona il modo in cui le agenzie interinali e le aziende si connettono, 
            ottimizzando il processo di ricerca e selezione del personale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <GradientButton icon className="px-8 py-3 text-lg">
              Inizia ora
            </GradientButton>
            <button className="border border-black text-black px-8 py-3 rounded-md font-medium hover:bg-black hover:text-white transition-colors">
              Scopri di più
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <img 
            src="/placeholder.svg" 
            alt="AirStaff Platform" 
            className="max-w-full h-auto rounded-lg shadow-xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
