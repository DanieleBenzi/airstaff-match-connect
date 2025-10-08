import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const ApriPosizione: React.FC = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.airstaff.it/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Apri una Posizione",
        "item": "https://www.airstaff.it/apri-posizione"
      }
    ]
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Servizio di Ricerca Lavoratori",
    "provider": {
      "@type": "Organization",
      "name": "AirStaff",
      "url": "https://www.airstaff.it"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Italia"
    },
    "description": "Servizio gratuito per trovare lavoratori tramite network di Agenzie Per il Lavoro. Contatto garantito entro 72 ore.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Apri una Posizione Lavorativa Gratis | AirStaff Network APL</title>
        <meta name="description" content="Non trovi il lavoratore giusto? Apri una posizione gratis su AirStaff. Il nostro network di 20+ Agenzie Per il Lavoro ti contatterà entro 72h con candidati qualificati." />
        <meta name="keywords" content="apri posizione lavorativa, ricerca lavoratori gratis, agenzie lavoro, airstaff, staffing gratuito, trova personale" />
        <link rel="canonical" href="https://www.airstaff.it/apri-posizione" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceData)}
        </script>
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
    </div>
  );
};

export default ApriPosizione;
