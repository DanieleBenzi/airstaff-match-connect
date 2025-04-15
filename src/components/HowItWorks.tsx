
import React from 'react';
import { ArrowRight, Database, Search, MessageCircle, Handshake, Calendar, UserCheck } from 'lucide-react';

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
            Una piattaforma innovativa che semplifica la connessione tra agenzie interinali e aziende
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Step 
            icon={<Database size={24} />}
            title="Caricamento dei talenti"
            description="Le staffing passano il loro pool di lavoratori ad AirStaff che li indicizza tramite Elastic Search"
            position={1}
          />
          <Step 
            icon={<Search size={24} />}
            title="Ricerca dei talenti"
            description="Le aziende cercano potenziali candidati sulla piattaforma, visualizzando profili anonimi"
            position={2}
          />
          <Step 
            icon={<MessageCircle size={24} />}
            title="Richiesta di contatto"
            description="Quando l'azienda trova il candidato ideale, può richiedere un colloquio con un semplice click"
            position={3}
          />
          <Step 
            icon={<Handshake size={24} />}
            title="Matching"
            description="La staffing riceve e valuta la richiesta, decidendo se procedere con il matching"
            position={4}
          />
          <Step 
            icon={<UserCheck size={24} />}
            title="Connessione"
            description="In caso di accettazione, AirStaff facilita lo scambio di informazioni tra le parti"
            position={5}
          />
          <Step 
            icon={<Calendar size={24} />}
            title="Ottimizzazione"
            description="Il sistema riduce i tempi di attesa tra una missione e l'altra, aumentando il fulfillment"
            position={6}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
