import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, FileSearch, Users, TrendingUp, Shield, Clock } from 'lucide-react';
import GradientButton from '../components/GradientButton';

const Tender: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Definisci le Tue Esigenze",
      description: "Compila un form semplice e veloce specificando il ruolo ricercato, numero di lavoratori, location e altre esigenze specifiche.",
    },
    {
      number: "02",
      title: "Pubblichiamo il Tender",
      description: "Il tuo tender viene pubblicato automaticamente alle Agenzie per il Lavoro più qualificate del nostro network in base ai tuoi criteri.",
    },
    {
      number: "03",
      title: "Ricevi le Proposte",
      description: "Le agenzie del lavoro inviano le loro proposte con candidati, condizioni economiche e tempi di consegna. Tutto in un'unica dashboard.",
    },
    {
      number: "04",
      title: "Scegli il Partner Migliore",
      description: "Confronta le proposte ricevute, analizza le performance storiche delle Agenzie per il Lavoro e seleziona il partner ideale per te.",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Risparmia Tempo",
      description: "Ricevi multiple offerte da diverse Agenzie per il Lavoro senza doverle contattare una per una.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Migliori Condizioni",
      description: "La competizione tra le agencies porta a condizioni economiche più vantaggiose per la tua azienda.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Accesso a Più Talenti",
      description: "Raggiungi un pool di candidati più ampio attraverso le diverse Agenzie per il Lavoro del network.",
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Qualità Garantita",
      description: "Lavora solo con Agenzie per il Lavoro pre-qualificate e verificate da AirStaff.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AirStaff - Tender | Trova le Migliori Agenzie per il Lavoro</title>
        <meta 
          name="description" 
          content="Pubblica tender per trovare le migliori Agenzie per il Lavoro. Ricevi proposte competitive, confronta offerte e scegli il partner ideale per la tua azienda." 
        />
        <meta name="keywords" content="tender agenzie lavoro, gara appalto lavoro temporaneo, ricerca agenzie del lavoro, appalto personale" />
        <link rel="canonical" href="https://www.airstaff.it/tender" />
        
        <meta property="og:title" content="AirStaff - Tender per Agenzie per il Lavoro" />
        <meta property="og:description" content="Pubblica tender e trova le migliori Agenzie per il Lavoro per la tua azienda" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.airstaff.it/tender" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AirStaff Tender",
            "description": "Piattaforma per pubblicare tender e trovare le migliori Agenzie per il Lavoro",
            "provider": {
              "@type": "Organization",
              "name": "AirStaff"
            },
            "areaServed": "IT",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.airstaff.it/tender"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              AirStaff Tender
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Trova le migliori staffing agencies in pochi click. 
              Pubblica un tender, ricevi proposte competitive e scegli il partner ideale per te.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton 
                onClick={() => window.location.href = 'mailto:hello@airstaff.it'}
                className="px-8 py-4 text-lg"
              >
                Contattaci
              </GradientButton>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Come Funziona
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative"
                >
                  <div className="bg-card p-6 rounded-xl shadow-lg border border-border h-full">
                    <div className="text-5xl font-bold text-primary/20 mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              I Vantaggi di AirStaff Tender
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border text-center"
                >
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Can Request Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Cosa Puoi Richiedere con un Tender
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contratti Quadro</h3>
                  <p className="text-muted-foreground">
                    Trova partner per contratti a lungo termine e collaborazioni continuative.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Singole Assunzioni</h3>
                  <p className="text-muted-foreground">
                    Richieste per singoli profili o posizioni specifiche con consegna rapida.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Master Vendor</h3>
                  <p className="text-muted-foreground">
                    Seleziona un partner principale per gestire l'intero processo di ricerca personale.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Neutral Vendor</h3>
                  <p className="text-muted-foreground">
                    Trova un partner neutrale per coordinare più Agenzie per il Lavoro.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contratti d'Opera</h3>
                  <p className="text-muted-foreground">
                    Richiedi proposte per contratti d'opera e progetti specifici.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Team Completi</h3>
                  <p className="text-muted-foreground">
                    Richiedi team completi per progetti speciali o aperture di nuove sedi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-primary/10 to-purple-600/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Inizia Ora con AirStaff Tender
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pubblica il tuo primo tender e ricevi proposte dalle migliori Agenzie per il Lavoro in pochi giorni.
            </p>
            <GradientButton 
              onClick={() => window.location.href = 'mailto:hello@airstaff.it'}
              className="px-8 py-4 text-lg"
            >
              Contattaci
            </GradientButton>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Tender;
