
import React from 'react';
import { TrendingUp, Clock, UserCheck, Building, LineChart, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isStaffing?: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, isStaffing = false }) => {
  return (
    <div className={cn(
      "p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow",
      isStaffing ? "bg-gradient-to-br from-blue-50 to-white" : "bg-gradient-to-br from-pink-50 to-white"
    )}>
      <div className={cn(
        "w-12 h-12 flex items-center justify-center rounded-full mb-4",
        isStaffing ? "bg-airstaff-blue text-white" : "bg-airstaff-pink text-white"
      )}>
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
            Ottimizza il processo di ricerca e selezione del personale per entrambe le parti
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-airstaff-blue">Per le Staffing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitCard 
                icon={<TrendingUp size={24} />}
                title="Aumento del Fulfillment"
                description="Trova lavoro per il 100% dei talenti nel tuo pool, migliorando significativamente rispetto alla media del settore"
                isStaffing
              />
              <BenefitCard 
                icon={<Clock size={24} />}
                title="Riduzione Tempi Morti"
                description="Elimina i tempi di attesa tra la fine di una missione e l'inizio di una nuova"
                isStaffing
              />
              <BenefitCard 
                icon={<UserCheck size={24} />}
                title="Minor Turnover"
                description="Mantieni i tuoi talenti impegnati e soddisfatti, riducendo il rischio di perderli"
                isStaffing
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-airstaff-pink">Per le Aziende</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitCard 
                icon={<Building size={24} />}
                title="Accesso a Talenti Qualificati"
                description="Trova rapidamente il personale con le competenze specifiche di cui hai bisogno"
              />
              <BenefitCard 
                icon={<LineChart size={24} />}
                title="Riduzione Tempi di Hiring"
                description="Velocizza il processo di selezione grazie al sistema di matching intelligente"
              />
              <BenefitCard 
                icon={<Users size={24} />}
                title="Maggiore Flessibilità"
                description="Adatta facilmente il tuo organico alle esigenze aziendali in continua evoluzione"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
