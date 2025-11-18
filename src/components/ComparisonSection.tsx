import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const withoutAirstaff = [
    "Tempi di assunzione lunghi: settimane per trovare candidati validi",
    "Troppo tempo perso: decine di email e telefonate con diverse agenzie",
    "Dati sparsi: informazioni sui candidati in fogli Excel e email separate",
    "Scarsa visibilità: non sai chi è disponibile nel mercato",
    "Costi nascosti: devi contattare ogni agenzia per avere preventivi",
    "Processi inefficienti: responsabilità poco chiare rallentano le decisioni"
  ];

  const withAirstaff = [
    "Riduzione del 50% dei tempi: trova candidati qualificati in poche ore",
    "Una sola piattaforma: tutti i database APL aggregati in un unico posto",
    "Dati centralizzati: informazioni aggregate per decisioni rapide",
    "Massima trasparenza: vedi tutti i profili disponibili da 20+ agenzie",
    "Zero costi per le aziende: il servizio è completamente gratuito",
    "Processi ottimizzati: ricerca avanzata e alert automatici"
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Cosa rende AirStaff imbattibile?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Without AirStaff */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Senza AirStaff</h3>
            <ul className="space-y-4">
              {withoutAirstaff.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100 flex-shrink-0 mt-1">
                    <X size={16} className="text-red-600" />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* With AirStaff */}
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8 md:p-10 border-2 border-airstaff-pink">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Con AirStaff</h3>
            <ul className="space-y-4">
              {withAirstaff.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0 mt-1">
                    <Check size={16} className="text-green-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
