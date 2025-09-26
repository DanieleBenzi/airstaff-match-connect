import React from 'react';
import { Search, Filter, MessageCircle, Clock } from 'lucide-react';
interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: number;
}
const Step: React.FC<StepProps> = ({
  icon,
  title,
  description,
  position
}) => {
  return <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-cta text-white mb-4">
        {icon}
      </div>
      <div className="relative">
        
        <h3 className="text-xl font-bold mb-2 relative z-10">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>;
};
const HowItWorks: React.FC = () => {
  return <section id="come-funziona" className="px-6 md:px-12 lg:px-24 py-[30px]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Come funziona</h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Come Skyscanner aggrega i voli, AirStaff aggrega i lavoratori. Ti diamo <strong>accesso immediato</strong> ai database dei lavoratori con <strong>alto turnover</strong> come (ma non solo) logistica e industria. Filtra per competenze, zona e disponibilità e invia la richiesta con un semplice clic. L'APL riceve la tua richiesta e ti risponde in poche ore. Zero perdita di tempo, tutta sostanza.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Step icon={<Search size={24} />} title="Cerca" description="Lascia che l'IA trovi i migliori risultati per te" position={1} />
          <Step icon={<Filter size={24} />} title="Filtra" description="Filtra per competenze, località e disponibilità per trovare il lavoratore perfetto." position={2} />
          <Step icon={<MessageCircle size={24} />} title="Richiedi risorsa" description="Invia una richiesta di contatto all'agenzia per il lavoro." position={3} />
          <Step icon={<Clock size={24} />} title="Ricevi risposta in poche ore" description="L'APL ti contatterà per presentarti il lavoratore richiesto." position={4} />
        </div>

        {/* Video YouTube */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/3XnCvQqunKc"
                title="Come funziona AirStaff"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;