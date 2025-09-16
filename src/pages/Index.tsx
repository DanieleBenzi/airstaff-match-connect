
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import MainFeatures from '@/components/MainFeatures';
import Benefits from '@/components/Benefits';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StaffingPartners from '@/components/StaffingPartners';
import BookDemoSection from '@/components/BookDemoSection';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.airstaff.it/"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Cos'è AirStaff e come funziona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AirStaff è una piattaforma che permette alle aziende di cercare lavoratori direttamente nei database delle Agenzie Per il Lavoro (ApL) partner. Puoi filtrare per competenze, località e disponibilità per trovare la risorsa perfetta per la tua azienda."
        }
      },
      {
        "@type": "Question",
        "name": "Quali sono i costi per utilizzare AirStaff?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AirStaff è gratuito per le aziende che cercano lavoratori. Non ci sono costi da sostenere né abbonamenti da sottoscrivere."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>AirStaff - il motore di ricerca per le agenzie per il lavoro</title>
        <meta name="description" content="AirStaff è il motore di ricerca intelligente che mette in contatto aziende e lavoratori tramite le agenzie per il lavoro. Trova il lavoratore giusto in pochi minuti." />
        <meta name="keywords" content="airstaff, agenzia interinale, trovare lavoratori, ricerca personale, staffing, risorse umane, HR, agenzie per il lavoro" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <MainFeatures />
        <Benefits />
        <BookDemoSection />
        <StaffingPartners />
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">
            <span className="font-bold">Hai domande?</span>
            <br />
            Scrivici a{' '}
            <a href="mailto:hello@airstaff.it" className="text-airstaff-pink hover:text-airstaff-blue transition-colors font-semibold">
              hello@airstaff.it
            </a>
            {' '}oppure guarda le{' '}
            <Link 
              to="/faq" 
              className="text-airstaff-pink hover:text-airstaff-blue transition-colors font-semibold"
            >
              Domande Frequenti
            </Link>
          </p>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
