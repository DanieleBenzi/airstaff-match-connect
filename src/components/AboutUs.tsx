
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Chi Siamo</h2>
          <p className="text-lg text-black mb-8 leading-relaxed">
            AirStaff permette alle aziende di cercare lavoratori del settore logistico e industriale direttamente nei database delle Agenzie Per il Lavoro (APL) partner. Puoi filtrare per competenze, località e disponibilità per trovare la risorsa perfetta per la tua azienda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
