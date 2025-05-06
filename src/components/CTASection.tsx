
import React from 'react';
import GradientButton from './GradientButton';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-10 md:p-12 lg:p-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Pronto a trovare i lavoratori perfetti per la tua azienda?
            </h2>
            <p className="text-white">
              Prova AirStaff ora, è gratis! Richiedi accesso in anteprima.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScJCXG9WzJZ9D7xXkNWqPO-muGG_F9aW-Uwdm6gGLbMoXy7wQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
              <GradientButton icon className="mt-4">
                Prova Gratis
              </GradientButton>
            </a>
          </div>
          <div className="hidden md:block h-full">
            <img 
              alt="AirStaff Demo" 
              className="h-full w-full object-cover"
              loading="lazy"
              src="/lovable-uploads/f6d3364e-be08-46ee-86b1-60df40371ea8.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
