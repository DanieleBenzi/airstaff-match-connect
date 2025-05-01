
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-100 to-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Chi Siamo</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            AirStaff è una piattaforma digitale che connette aziende e agenzie per il lavoro (APL), 
            permettendo alle imprese di accedere direttamente e in modo anonimo ai database dei lavoratori. 
            Il nostro obiettivo è semplificare l'hiring, ridurre i tempi di selezione e aumentare la continuità lavorativa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
