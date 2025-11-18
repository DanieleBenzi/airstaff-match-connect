import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Solution {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const SolutionsSection: React.FC = () => {
  const solutions: Solution[] = [
    {
      id: 'vms',
      title: 'Vendor Management',
      description: 'Digitalizza e centralizza la gestione dei fornitori per una collaborazione efficiente tra aziende e agenzie per il lavoro. Ottimizza tutti i processi - dalle richieste di personale alla fatturazione - e crea più trasparenza ed efficienza.',
      image: '/lovable-uploads/8b394d39-6908-44ea-98cd-58f4e39f5543.png',
      link: '/vendor-management'
    },
    {
      id: 'wms',
      title: 'Workforce Management',
      description: 'Ottimizza la pianificazione e la gestione della forza lavoro. Aumenta la produttività attraverso processi digitali - dalla rilevazione presenze alla gestione delle risorse - mantenendo il pieno controllo del personale.',
      image: '/lovable-uploads/f6d3364e-be08-46ee-86b1-60df40371ea8.png',
      link: '/workforce-management'
    },
    {
      id: 'tender',
      title: 'Tender Management',
      description: 'Copri rapidamente le esigenze di personale a breve termine o lancia nuove gare per partner con AirStaff Tender. La nostra AI ti aiuta a trovare l\'agenzia giusta da un pool di oltre 20 fornitori specializzati.',
      image: '/lovable-uploads/8b394d39-6908-44ea-98cd-58f4e39f5543.png',
      link: '/tender'
    },
    {
      id: 'marketplace',
      title: 'Marketplace',
      description: 'Accedi al marketplace AirStaff per cercare direttamente nei database aggregati di oltre 20 Agenzie Per il Lavoro. Come Skyscanner per i lavoratori, trova il candidato perfetto in un unico posto.',
      image: '/lovable-uploads/f6d3364e-be08-46ee-86b1-60df40371ea8.png',
      link: '/marketplace'
    }
  ];

  const [activeSolution, setActiveSolution] = useState(solutions[0]);

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Procurement e gestione - in un unico strumento
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveSolution(solution)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeSolution.id === solution.id
                  ? 'bg-airstaff-pink text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {solution.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">{activeSolution.title}</h3>
            <p className="text-lg text-gray-600">{activeSolution.description}</p>
            <Link
              to={activeSolution.link}
              className="inline-flex items-center gap-2 text-airstaff-pink hover:text-airstaff-blue font-semibold transition-colors"
            >
              Scopri di più
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={activeSolution.image}
              alt={activeSolution.title}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
