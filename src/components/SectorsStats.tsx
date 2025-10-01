import React from 'react';
import { Truck, Factory, Briefcase, Heart } from 'lucide-react';

const SectorsStats: React.FC = () => {
  const sectors = [
    {
      name: 'Logistica',
      count: 2500,
      icon: Truck,
      gradient: 'from-blue-500 to-airstaff-blue',
    },
    {
      name: 'Industria',
      count: 2200,
      icon: Factory,
      gradient: 'from-airstaff-blue to-purple-500',
    },
    {
      name: 'Servizi',
      count: 1000,
      icon: Briefcase,
      gradient: 'from-purple-500 to-airstaff-pink',
    },
    {
      name: 'Ospedaliero',
      count: 600,
      icon: Heart,
      gradient: 'from-airstaff-pink to-red-500',
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            I nostri settori principali
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Migliaia di lavoratori qualificati pronti per la tua azienda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.name}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${sector.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  
                  <div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-airstaff-blue to-airstaff-pink bg-clip-text text-transparent mb-2">
                      {sector.count.toLocaleString('it-IT')}
                    </div>
                    <div className="text-lg font-semibold text-gray-700">
                      {sector.name}
                    </div>
                  </div>
                </div>

                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Database in continua crescita con nuovi profili ogni giorno
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectorsStats;