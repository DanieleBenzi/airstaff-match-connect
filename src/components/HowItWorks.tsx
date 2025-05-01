
import React from 'react';
import { Search, MessageCircle, Handshake } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, position }) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-cta text-white mb-4">
        {icon}
      </div>
      <div className="relative">
        <span className="absolute -left-10 top-0 text-5xl font-bold text-gray-100">
          {position}
        </span>
        <h3 className="text-xl font-bold mb-2 relative z-10">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="come-funziona" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Come funziona AirStaff</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AirStaff permette alle aziende di cercare lavoratori direttamente nei database lavoratori delle APL partner.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Step 
            icon={<Search size={24} />}
            title="Cerca lavoratori"
            description="Cerca i profili di cui hai bisogno filtrando per competenze, località e disponibilità. Consulta in questo modo migliaia di lavoratori direttamente nell'organico delle APL associate."
            position={1}
          />
          <Step 
            icon={<MessageCircle size={24} />}
            title="Richiedi la risorsa"
            description="Quando trovi il lavoratore giusto (non candidato potenziale), invia una richiesta di contatto all'APL che gestisce il lavoratore."
            position={2}
          />
          <Step 
            icon={<Handshake size={24} />}
            title="Finalizza"
            description="L'agenzia ti contatterà per presentarti il lavoratore richiesto e inserirlo nel tuo organico"
            position={3}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
