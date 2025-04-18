
import React from 'react';
import { Building, Clock, Users, LineChart, Target, ThumbsUp } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow bg-gradient-to-br from-pink-50 to-white">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-airstaff-pink text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section id="vantaggi" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vantaggi di AirStaff</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trova i lavoratori giusti per la tua azienda in modo semplice e veloce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard 
            icon={<Clock size={24} />}
            title="Risparmio di Tempo"
            description="Trova i lavoratori in pochi minuti invece che in giorni o settimane"
          />
          <BenefitCard 
            icon={<Target size={24} />}
            title="Ricerca Mirata"
            description="Usa filtri avanzati per trovare esattamente il profilo di cui hai bisogno"
          />
          <BenefitCard 
            icon={<ThumbsUp size={24} />}
            title="Qualità Garantita"
            description="Accedi solo a lavoratori già selezionati dalle migliori agenzie"
          />
          <BenefitCard 
            icon={<LineChart size={24} />}
            title="Risultati Immediati"
            description="Visualizza subito la disponibilità dei lavoratori e le loro competenze"
          />
          <BenefitCard 
            icon={<Users size={24} />}
            title="Accesso a Più Agenzie"
            description="Cerca tra i lavoratori di tutte le agenzie con un'unica ricerca"
          />
          <BenefitCard 
            icon={<Building size={24} />}
            title="Processo Semplificato"
            description="Gestisci tutte le richieste da un'unica piattaforma intuitiva"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
