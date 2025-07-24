import React from 'react';
import GradientButton from './GradientButton';
import { Helmet } from 'react-helmet-async';
const HeroSection: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AirStaff",
    "url": "https://www.airstaff.it/",
    "logo": "https://www.airstaff.it/logo.png",
    "description": "AirStaff è il motore di ricerca intelligente che mette in contatto aziende e lavoratori tramite le agenzie per il lavoro. Trova il lavoratore giusto in pochi minuti.",
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
    },
    "sameAs": ["https://www.linkedin.com/company/airstaff"],
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
    }]
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
            Trova i migliori lavoratori nel settore{' '}
            <span className="bg-gradient-to-r from-airstaff-blue to-airstaff-pink bg-clip-text text-transparent">
              logistica e industriale
            </span>
          </h1>
          <p className="text-lg md:text-xl text-black">
            Trova il personale per la logistica e l'industria in pochi secondi. Nessuna perdita di tempo. Tutto in un'unica piattaforma. 🔥
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://app.airstaff.it/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <GradientButton icon className="w-full sm:w-auto px-8 py-3 text-lg">
                Inizia la ricerca
              </GradientButton>
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <img src="/lovable-uploads/8b394d39-6908-44ea-98cd-58f4e39f5543.png" alt="Interfaccia della piattaforma AirStaff che mostra come cercare lavoratori nelle agenzie per il lavoro" className="w-[110%] h-auto" loading="lazy" />
        </div>
      </div>
    </section>;
};
export default HeroSection;