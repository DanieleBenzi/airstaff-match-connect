import React from 'react';
import { Brain, TrendingUp, Users, Bell } from 'lucide-react';
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description
}) => {
  return <div className="p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow bg-white">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-airstaff-pink text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};
const MainFeatures: React.FC = () => {
  return <section className="px-6 md:px-12 lg:px-24 bg-gray-50 py-[30px]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Le funzionalità principali</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={<Brain size={24} />} title="Ricerca avanzata basata sull'intelligenza artificiale" description="Ricerca oltre che per ruolo anche per competenze, CCNL e disponibilità." />
          <FeatureCard icon={<TrendingUp size={24} />} title="Lead tracking integrati" description="Monitora e gestisci tutte le tue richieste di personale in un'unica dashboard." />
          <FeatureCard icon={<Users size={24} />} title="Apri una posizione" description="Non trovi il lavoratore giusto per te? No problem, dicci cosa ti serve e noi lo giriamo al nostro network di APL." />
          <FeatureCard icon={<Bell size={24} />} title="Alert automatici" description="Ricevi notifiche automatiche quando nuovi talenti sono liberi." />
        </div>
      </div>
    </section>;
};
export default MainFeatures;