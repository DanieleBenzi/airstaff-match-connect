import React from 'react';
import GradientButton from './GradientButton';

const BookDemoSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-[30px] bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prenota una demo</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Vuoi vedere AirStaff in azione? Prenota una demo personalizzata e scopri come possiamo aiutarti a trovare i lavoratori giusti per la tua azienda in pochi minuti.
        </p>
        <div className="flex justify-center">
          <a 
            href="https://calendly.com/daniele-benzi-db/30min" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GradientButton>
              Prenota una demo
            </GradientButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookDemoSection;