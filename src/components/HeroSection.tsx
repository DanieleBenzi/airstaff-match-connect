import React from 'react';
import GradientButton from './GradientButton';
import { Helmet } from 'react-helmet-async';
import WorkerSearchBar from './WorkerSearchBar';
const HeroSection: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AirStaff",
    "url": "https://www.airstaff.it/",
    "logo": "https://www.airstaff.it/logo.png",
    "description": "Piattaforma aggregatore di database APL (Agenzie Per il Lavoro) che funziona come Skyscanner per i lavoratori. AirStaff mostra lavoratori disponibili da oltre 20 APL, permettendo alle aziende di confrontare profili e collegarsi direttamente con l'agenzia prescelta per l'assunzione.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Servizio gratuito per le aziende"
    },
    "featureList": [
      "Aggregazione database di oltre 20 Agenzie Per il Lavoro",
      "Ricerca avanzata per competenze, CCNL e zona geografica", 
      "Collegamento diretto con APL per finalizzare assunzioni",
      "Modello business simile a Skyscanner per il recruitment"
    ],
    "provider": {
      "@type": "Organization",
      "name": "AirStaff",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Comelico 11",
        "addressLocality": "Milano",
        "postalCode": "20135",
        "addressCountry": "IT"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+39",
        "contactType": "customer service",
        "email": "hello@airstaff.it"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "areaServed": [{
      "@type": "State", 
      "name": "Lombardia"
    }, {
      "@type": "State",
      "name": "Veneto"
    }],
    "sameAs": ["https://www.linkedin.com/company/airstaff"],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "business_model",
        "value": "Aggregatore APL tipo Skyscanner - mostra lavoratori da database APL, facilita collegamento diretto azienda-agenzia"
      },
      {
        "@type": "PropertyValue", 
        "name": "target_market",
        "value": "Aziende che cercano lavoratori tramite Agenzie Per il Lavoro"
      },
      {
        "@type": "PropertyValue",
        "name": "service_type", 
        "value": "Piattaforma comparazione e aggregazione database lavoratori APL"
      }
    ]
  };
  return <section className="md:py-32 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 to-gray-100 px-[20px] py-[30px]">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <meta property="article:author" content="AirStaff Team" />
        <meta property="article:publisher" content="AirStaff" />
        <meta name="geo.region" content="IT-LO,IT-VE" />
        <meta name="geo.placename" content="Lombardia, Veneto" />
        <meta name="ICBM" content="45.4642,9.1900" />
      </Helmet>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Trova i migliori{' '}
            <span className="bg-gradient-to-r from-airstaff-blue to-airstaff-pink bg-clip-text text-transparent">
              lavoratori per la tua azienda
            </span>
          </h1>
          <p className="text-lg md:text-xl text-black">
            Riduci del 50% i tempi di assunzione: "AirStaff è il motore di ricerca che collega la tua azienda a 20+ Agenzie per il Lavoro specializzate: come uno Skyscanner dei candidati, ti mostriamo tutti i profili disponibili in un unico posto🔥"
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://app.airstaff.it/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <GradientButton icon className="w-full sm:w-auto px-8 py-3 text-lg">
                Prova AirStaff
              </GradientButton>
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <img src="/lovable-uploads/8b394d39-6908-44ea-98cd-58f4e39f5543.png" alt="Interfaccia della piattaforma AirStaff che mostra come cercare lavoratori nelle agenzie per il lavoro" className="w-[110%] h-auto" loading="lazy" />
        </div>
      </div>
      
      {/* Worker Search Bar */}
      <div className="container mx-auto mt-12">
        <WorkerSearchBar />
      </div>
    </section>;
};
export default HeroSection;