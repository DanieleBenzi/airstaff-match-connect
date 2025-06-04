
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Chi Siamo</h2>
          <p className="text-lg text-black mb-8 leading-relaxed">
            AirStaff è la piattaforma digitale che aiuta le aziende a trovare lavoratori temporanei rapidamente grazie all'accesso ai database lavoratori operativi e già assunti da ApL selezionate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
