
import React from 'react';
import GradientButton from './GradientButton';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-10 md:p-12 lg:p-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Pronto a rivoluzionare il tuo processo di staffing?
            </h2>
            <p className="text-gray-300">
              Prenota una demo personalizzata e scopri come AirStaff può trasformare il tuo business.
            </p>
            <GradientButton icon className="mt-4">
              Prenota una demo
            </GradientButton>
          </div>
          <div className="hidden md:block h-full">
            <img 
              src="/lovable-uploads/c6517c9e-4494-43ab-b7a1-adfb2f820bb2.png"
              alt="AirStaff Demo Button"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
