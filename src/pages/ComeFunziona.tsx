
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Database, Building, TabletSmartphone, ArrowDownCircle, RefreshCw, Share2, Search, MessageCircle, Check, Users } from 'lucide-react';
import GradientButton from '@/components/GradientButton';

const FlowStep = ({
  number,
  title,
  icon,
  bgColor = "bg-airstaff-blue"
}: {
  number: number;
  title: string;
  icon: React.ReactNode;
  bgColor?: string;
}) => {
  return <div className="flex flex-col items-center text-center">
      <div className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center text-white text-2xl font-bold mb-2`}>
        {number}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md min-h-[120px] w-full flex flex-col items-center justify-center">
        <div className="mb-2">{icon}</div>
        <p className="font-medium">{title}</p>
      </div>
    </div>;
};

const ComeFunziona: React.FC = () => {
  return <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Come funziona tecnicamente AirStaff</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              AirStaff connette agenzie interinali e Aziende tramite una piattaforma innovativa che ottimizza il processo di matching.
            </p>
          </div>
        </section>

        {/* Flow Diagram */}
        <section className="px-6 md:px-12 lg:px-24 py-0">
          <div className="container mx-auto">
            <div className="relative">
              {/* Interactive flow */}
              <div className="mt-16 bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-12">Il flusso di AirStaff</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  {/* Left side: Airstaff Backend */}
                  <div className="bg-blue-500 bg-opacity-10 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">AirStaff Backend</h3>
                    
                    <div className="space-y-12">
                      <div className="flex flex-col items-center">
                        <FlowStep number={1} title="CSV Lavoratori" icon={<Database size={32} className="text-blue-600" />} bgColor="bg-red-500" />
                        <div className="h-12 border-l-2 border-gray-400 my-2"></div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <FlowStep number={3} title="Normalizzazione e mappatura dati" icon={<RefreshCw size={32} className="text-blue-600" />} />
                        <div className="h-12 border-l-2 border-gray-400 my-2"></div>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="bg-white p-6 rounded-lg shadow-md w-full flex flex-col items-center">
                          <Database size={48} className="text-blue-600 mb-3" />
                          <p className="font-bold text-lg">Database AirStaff</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side: Airstaff Website */}
                  <div className="bg-blue-500 bg-opacity-10 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">AirStaff Website</h3>
                    
                    <div className="space-y-8">
                      <div className="grid grid-cols-2 gap-x-8">
                        <div className="flex flex-col items-center">
                          <FlowStep number={2} title="Azienda" icon={<Building size={32} className="text-blue-600" />} bgColor="bg-red-500" />
                          <div className="h-12 border-l-2 border-gray-400 my-2"></div>
                        </div>
                        <div></div> {/* Empty cell for alignment */}
                      </div>
                      
                      <div className="grid grid-cols-1 gap-8">
                        <div className="flex flex-col items-center">
                          <FlowStep number={4} title="Ricerca Lavoratori" icon={<Search size={32} className="text-blue-600" />} />
                          <div className="h-12 border-l-2 border-gray-400 my-2"></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-8">
                        <div className="flex flex-col items-center">
                          <FlowStep number={5} title="Richiesta di Contatto" icon={<MessageCircle size={32} className="text-blue-600" />} />
                          <div className="h-12 border-l-2 border-gray-400 my-2"></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                          <FlowStep number={6} title="Dashboard Staffing" icon={<TabletSmartphone size={32} className="text-blue-600" />} />
                          <div className="h-12 border-l-2 border-gray-400 my-2"></div>
                        </div>
                        <div></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                          <FlowStep number={7} title="Accettazione Richiesta" icon={<Check size={32} className="text-blue-600" />} />
                          <div className="h-12 border-l-2 border-gray-400 my-2"></div>
                        </div>
                        <div></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                          <FlowStep number={8} title="Condivisione Dati Staffing" icon={<Share2 size={32} className="text-blue-600" />} />
                        </div>
                        <div className="flex flex-col items-center">
                          <FlowStep number={9} title="Condivisione Dati Azienda" icon={<Share2 size={32} className="text-blue-600" />} />
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg shadow-sm border border-yellow-200 mt-6">
                        <h4 className="font-bold text-center mb-2">Nota sulla Privacy</h4>
                        <p className="text-sm text-gray-700">
                          In tutto il processo, i dati personali del lavoratore non sono mai condivisi con l'Azienda. 
                          I dati per contattare la Staffing sono condivisi solo quando la Staffing accetta la richiesta di contatto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center mt-20">
              <h3 className="text-2xl font-bold mb-4">Vuoi saperne di più?</h3>
              <a href="https://calendly.com/daniele-benzi-db/30min" target="_blank" rel="noopener noreferrer">
                <GradientButton icon className="mx-auto mt-4">
                  Prenota una demo
                </GradientButton>
              </a>
            </div>
          </div>
        </section>

        {/* AI Section */}
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
      </main>
      
      <Footer />
    </div>;
};

export default ComeFunziona;
