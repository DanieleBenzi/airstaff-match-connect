import React from 'react';
import { Rabbit, Target, Clock } from 'lucide-react';
interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description
}) => {
  return <div className="p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow bg-gradient-to-br from-pink-50 to-white">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-airstaff-pink text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>;
};
const Benefits: React.FC = () => {
  return <section id="vantaggi" className="px-6 md:px-12 lg:px-24 py-[30px]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vantaggi per la tua azienda:</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitCard icon={<Rabbit size={24} />} title="Veloce" description="AirStaff aggrega in tempo reale oltre 20 database APL. Come Skyscanner, AirStaff ti mostra tutto in una singola ricerca così che tu non debba chiamare ogni agenzia singolarmente." />
          <BenefitCard icon={<Target size={24} />} title="Gratuito" description="AirStaff <strong>non</strong> chiede commissioni alle aziende. Ti mette in contatto direttamente con l'APL e sarai tu a trattare le condizioni." />
          <BenefitCard icon={<Clock size={24} />} title="Risparmia tempo" description="Non ci sarà più bisogno di dover chiamare ogni singola APL. Noi aggreghiamo i lavoratori per te, tu scegli quello più idoneo." />
        </div>
      </div>
    </section>;
};
export default Benefits;