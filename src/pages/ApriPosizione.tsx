import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
const ApriPosizione: React.FC = () => {
  return <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Apri una Posizione - AirStaff</title>
        <meta name="description" content="Non trovi un lavoratore? Te lo troviamo noi, gratis. Apri una posizione e le nostre agenze partner ti contatteranno entro 72h." />
        <meta name="keywords" content="apri posizione, ricerca lavoratori, agenzie lavoro, airstaff, staffing gratuito" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8">
              Non trovi un lavoratore?{' '}
              <span className="bg-gradient-to-r from-airstaff-blue to-airstaff-pink bg-clip-text text-transparent">
                Te lo troviamo noi, gratis.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Apri una posizione utilizzando il form qui sotto e noi contatteremo le Agenzie del lavoro al posto tuo. 
              Senza bisogno di creare nessun account.
              <br /><br />
              Nel giro di 72h, le nostre APL partner ti contatteranno e ti proporranno dei lavoratori in linea con la tua ricerca!
            </p>
            
            {/* SurveyMonkey Form */}
            <div className="mt-8 mb-16">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <iframe 
                  src="https://it.surveymonkey.com/r/D58SBND"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  className="w-full"
                  title="Form di Registrazione Posizione"
                />
              </div>
            </div>
            
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default ApriPosizione;