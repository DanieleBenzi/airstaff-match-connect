
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
            AirStaff mette in contatto agenzie interinali e Aziende, risolvendo due problemi principali:
          </p>
          <ul className="text-left max-w-3xl mx-auto mt-6 space-y-2">
            <li className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <span>Aumentare il fulfillment dei lavoratori, raddoppiandolo</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <span>Ridurre i tempi morti tra la fine di una missione e l'inizio della successiva</span>
            </li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Step 
            icon={<Database size={24} />}
            title="Caricamento dei talenti"
            description="Le Staffing passano il loro pool di lavoratori ad AirStaff che li indicizza"
            position={1}
          />
          <Step 
            icon={<Search size={24} />}
            title="Ricerca dei talenti"
            description="Le Aziende tramite una ricerca basata sull'AI, cercano potenziali lavoratori, visualizzando profili anonimi"
            position={2}
          />
          <Step 
            icon={<MessageCircle size={24} />}
            title="Richiesta di contatto"
            description="Quando l'Azienda trova il lavoratore ideale, invia una richiesta di contatto alla Staffing"
            position={3}
          />
          <Step 
            icon={<Handshake size={24} />}
            title="Matching"
            description="La Staffing riceve e valuta la richiesta, decidendo se procedere con il matching"
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

        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Cosa risolve AirStaff</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3">Per le agenzie interinali</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-airstaff-blue">•</span>
                  <span>Aumentare il fulfillment dei lavoratori, raddoppiandolo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-airstaff-blue">•</span>
                  <span>Diminuire il turn over dei talenti riducendo i tempi morti tra mission</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-airstaff-blue">•</span>
                  <span>Massimizzare l'efficienza del pool di talenti disponibili</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-3">Per le Aziende</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-airstaff-pink">•</span>
                  <span>Ridurre drasticamente i tempi di ricerca e assunzione</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-airstaff-pink">•</span>
                  <span>Accesso a talenti preselezionati e già disponibili</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-airstaff-pink">•</span>
                  <span>Processo semplificato con un unico punto di contatto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
