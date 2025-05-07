
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StaffingPartners from '@/components/StaffingPartners';
import AboutUs from '@/components/AboutUs';
import { Helmet } from 'react-helmet-async';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>AirStaff - il motore di ricerca per le agenzie per il lavoro</title>
        <meta name="description" content="La tua futura risorsa è già qui. Cerca. Trova. Richiedi." />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <AboutUs />
        <StaffingPartners />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
