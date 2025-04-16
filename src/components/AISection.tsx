
import React from 'react';
import { Users } from 'lucide-react';

const AISection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Come funziona l'AI di AirStaff?</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="p-4 bg-purple-100 rounded-full">
                <div className="p-6 bg-purple-200 rounded-full">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Users size={64} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                AirStaff usa l'intelligenza artificiale per ordinare i risultati delle ricerche in maniera che siano il più in linea possibile 
                con l'Azienda che sta effettuando la ricerca. L'obbiettivo dell'AI è quella di massimizzare la qualità del matching e imparare 
                sulle abitudini di ricerca delle Aziende che utilizzano AirStaff.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-lg mb-2 text-blue-700">Apprendimento Continuo</h4>
                  <p>Il sistema migliora continuamente analizzando i pattern di ricerca e i risultati di matching di successo.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h4 className="font-bold text-lg mb-2 text-purple-700">Matching Personalizzato</h4>
                  <p>L'AI personalizza i risultati basandosi sulle preferenze e sulle precedenti selezioni dell'Azienda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
