import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Database, Building, TabletSmartphone, ArrowDownCircle, RefreshCw, Share2 } from 'lucide-react';
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
              AirStaff connette agenzie interinali e aziende tramite una piattaforma innovativa che ottimizza il processo di matching.
            </p>
          </div>
        </section>

        {/* Flow Diagram */}
        <section className="px-6 md:px-12 lg:px-24 py-0">
          <div className="container mx-auto">
            <div className="relative">
              {/* Main image */}
              

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
                  
                  {/* Right side: Airstaff Frontend */}
                  <div className="bg-blue-500 bg-opacity-10 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">AirStaff Frontend (website)</h3>
                    
                    <div className="space-y-8">
                      <div className="grid grid-cols-2 gap-x-8">
                        <div className="flex flex-col items-center">
                          <FlowStep number={2} title="Azienda" icon={<Building size={32} className="text-blue-600" />} bgColor="bg-red-500" />
                          <div className="h-12 border-l-2 border-gray-400 my-2"></div>
                        </div>
                        <div></div> {/* Empty cell for alignment */}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                          <FlowStep number={4} title="Dashboard Company" icon={<TabletSmartphone size={32} className="text-blue-600" />} />
                          <div className="h-12 border-l-2 border-gray-400 my-2"></div>
                        </div>
                        <div className="flex flex-col items-center">
                          <FlowStep number={6} title="Dashboard Staffing" icon={<TabletSmartphone size={32} className="text-blue-600" />} />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                          <FlowStep number={5} title="Ricerca" icon={<ArrowDownCircle size={32} className="text-blue-600" />} />
                          <div className="h-12 border-l-2 border-gray-400 my-2"></div>
                        </div>
                        <div className="flex flex-col items-center mt-16">
                          <div className="w-16 h-0 border-t-2 border-gray-400"></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                          <FlowStep number={7} title="Lead" icon={<Share2 size={32} className="text-blue-600" />} />
                          <div className="flex w-full justify-end">
                            <div className="border-t-2 border-gray-400 w-1/2 mt-10"></div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center pt-20">
                          <FlowStep number={8} title="Lead accettata" icon={<Share2 size={32} className="text-blue-600" />} />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-8 pt-8">
                        <div className="flex flex-col items-center">
                          <FlowStep number={9} title="Condivisione dati staffing all'azienda" icon={<Share2 size={32} className="text-blue-600" />} />
                        </div>
                        <div className="flex flex-col items-center">
                          <FlowStep number={10} title="Condivisione dati azienda alla staffing" icon={<Share2 size={32} className="text-blue-600" />} />
                        </div>
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
      </main>
      
      <Footer />
    </div>;
};
export default ComeFunziona;