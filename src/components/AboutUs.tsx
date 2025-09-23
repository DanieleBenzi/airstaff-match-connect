
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Chi Siamo</h2>
          <p className="text-lg text-black mb-8 leading-relaxed">
            AirStaff permette alle aziende di accedere ai database di oltre 20 Agenzie Per il Lavoro (APL) in una sola ricerca, proprio come Skyscanner fa con le compagnie aeree. Vedi tutti i lavoratori disponibili, li confronti per competenze e zona, poi ti colleghi direttamente con l'APL prescelta per finalizzare l'assunzione.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
