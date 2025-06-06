
import React from 'react';
import GradientButton from './GradientButton';
import { Helmet } from 'react-helmet-async';

const HeroSection: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AirStaff",
    "url": "https://www.airstaff.it/",
    "logo": "https://www.airstaff.it/logo.png",
    "description": "La tua futura risorsa è già qui. Cerca. Trova. Richiedi."
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 to-gray-100">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            <span className="bg-gradient-to-r from-airstaff-blue to-airstaff-pink bg-clip-text text-transparent">AirStaff</span> - Cerca tra i <span className="text-[#D35B6F]">Lavoratori</span> delle migliori <span className="text-black">Agenzie per il Lavoro</span>!
          </h1>
          <p className="text-lg md:text-xl text-black">
            La tua futura risorsa è già qui. Cerca. Trova. Richiedi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://app.airstaff.it/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <GradientButton icon className="w-full sm:w-auto px-8 py-3 text-lg">
                Prova gratis
              </GradientButton>
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <img 
            src="/lovable-uploads/ca830ce1-c78e-4909-992c-dd0aebd3cb3b.png" 
            alt="AirStaff Platform Interface" 
            className="max-w-full h-auto rounded-xl shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
