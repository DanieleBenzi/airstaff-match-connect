import React from 'react';
import { Calendar } from 'lucide-react';

const SalesCallSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-[30px] bg-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-airstaff-pink text-white">
              <Calendar size={32} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Parla con un sales
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Hai domande o vuoi scoprire come AirStaff può aiutare la tua azienda? 
            Prenota una chiamata di 30 minuti con il nostro team.
          </p>
          <a 
            href="https://calendly.com/airstaff_ita/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-cta text-white px-8 py-4 rounded-full font-medium text-lg transition-transform hover:scale-105"
          >
            <Calendar size={20} />
            Prenota una chiamata
          </a>
        </div>
      </div>
    </section>
  );
};

export default SalesCallSection;
