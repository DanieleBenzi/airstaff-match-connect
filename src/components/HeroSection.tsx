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
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
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
      
      <div className="container mx-auto max-w-5xl">
        {/* Hero Content - Centered */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Ricerca lavoratori e assunzioni -{' '}
            <span className="bg-gradient-to-r from-airstaff-blue to-airstaff-pink bg-clip-text text-transparent">
              in un'unica piattaforma
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://calendly.com/airstaff_ita/30min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GradientButton icon className="px-8 py-3 text-lg">
                Prenota una demo
              </GradientButton>
            </a>
            <a 
              href="https://app.airstaff.it/guest/search-talents" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-medium text-gray-700 hover:text-airstaff-pink transition-colors border-2 border-gray-300 rounded-full hover:border-airstaff-pink"
            >
              Prova AirStaff
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/8b394d39-6908-44ea-98cd-58f4e39f5543.png" 
            alt="Interfaccia della piattaforma AirStaff che mostra come cercare lavoratori nelle agenzie per il lavoro" 
            className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl" 
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;