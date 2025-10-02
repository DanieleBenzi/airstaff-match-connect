import React from 'react';
import { Clock, Users, Sparkles, Banknote } from 'lucide-react';
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perché AirStaff</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard icon={<Clock size={24} />} title="Risparmio di tempo" description="Riduci del 50% il time-to-hire, coprendo posizioni vacanti più velocemente" />
          <BenefitCard icon={<Users size={24} />} title="Più lavoratori qualificati" description="Attingi ai database unificati di oltre 20 agenzie specializzate" />
          <BenefitCard icon={<Sparkles size={24} />} title="Semplicità" description="Una sola piattaforma, un solo contratto, niente più dozzine di telefonate o email a vuoto" />
          <BenefitCard icon={<Banknote size={24} />} title="Zero costi" description="Il servizio per le aziende è gratuito, AirStaff è remunerata dalle agenzie: tu ottieni il personale senza spese extra" />
        </div>
      </div>
    </section>;
};
export default Benefits;