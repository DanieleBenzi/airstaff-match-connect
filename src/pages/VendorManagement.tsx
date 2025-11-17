import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, TrendingUp, FileText, Users, DollarSign, FileCheck, BarChart3, Plug } from 'lucide-react';
import GradientButton from '../components/GradientButton';

const VendorManagement: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Job Request alle Agenzie per il Lavoro",
      description: "Apri una posizione e inviala con un solo click alle Agenzie per il Lavoro presenti nel circuito AirStaff. Risparmia tempo e aumenta l'efficienza.",
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Gestione Preventivi e Contratti",
      description: "Gestisci preventivi e contratti in modo intelligente. Visualizza e confronta più preventivi contemporaneamente per prendere decisioni informate.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Revisione Candidati con AI",
      description: "L'AI di AirStaff analizza i CV ricevuti dalle Agenzie per il Lavoro ed estrae automaticamente i profili più in linea con le tue esigenze.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Performance delle Agenzie per il Lavoro",
      description: "Monitora le performance di tutte le Agenzie per il Lavoro con cui collabori. Identifica i partner migliori e ottimizza le tue scelte.",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: "Gestione Fatture",
      description: "Raccolta automatica dei dati per generare fatture accurate. Riduci gli errori e semplifica il processo di fatturazione tra Agenzie per il Lavoro e aziende.",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "Compliance Documentale",
      description: "Assicurati che tutti i documenti obbligatori siano aggiornati, completi e conformi alla legge: passaporti, carte d'identità, permessi speciali e altro.",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Business Intelligence Completa",
      description: "Dashboard completa con i KPI principali per monitorare le performance delle Agenzie per il Lavoro e dei lavoratori in tempo reale.",
    },
    {
      icon: <Plug className="w-12 h-12 text-primary" />,
      title: "API Aperte",
      description: "Integra facilmente il VMS di AirStaff con le tue tecnologie esistenti grazie alle nostre API aperte e documentate.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AirStaff - Vendor Management System (VMS) | Gestione Agenzie del Lavoro</title>
        <meta 
          name="description" 
          content="Il Vendor Management System di AirStaff ottimizza la gestione delle agenzie del lavoro con job request automatiche, AI per la selezione candidati, analytics e compliance documentale." 
        />
        <meta name="keywords" content="vendor management system, VMS, gestione staffing agencies, agenzie del lavoro, AI recruiting, business intelligence staffing" />
        <link rel="canonical" href="https://www.airstaff.it/vendor-management" />
        
        <meta property="og:title" content="AirStaff - Vendor Management System (VMS)" />
        <meta property="og:description" content="Ottimizza la gestione delle tue agenzie del lavoro con il VMS di AirStaff" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.airstaff.it/vendor-management" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AirStaff Vendor Management System",
            "description": "Sistema di gestione completo per ottimizzare la collaborazione con le agenzie del lavoro",
            "provider": {
              "@type": "Organization",
              "name": "AirStaff"
            },
            "areaServed": "IT",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.airstaff.it/vendor-management"
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
              Vendor Management System (VMS)
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ottimizza la gestione delle tue agenzie del lavoro con il VMS di AirStaff. 
              Automatizza le richieste, analizza le performance e prendi decisioni basate sui dati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton 
                onClick={() => window.location.href = 'https://calendly.com/airstaff_ita/30min'}
                className="px-8 py-4 text-lg"
              >
                Prenota una Demo
              </GradientButton>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Le Funzionalità del VMS AirStaff
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Perché Scegliere il VMS di AirStaff?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Risparmio di Tempo</h3>
                  <p className="text-muted-foreground">
                    Riduci il tempo speso nella gestione delle agenzie del lavoro fino all'80% grazie all'automazione.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Decisioni Basate sui Dati</h3>
                  <p className="text-muted-foreground">
                    Accedi a analytics in tempo reale per identificare le migliori Agenzie per il Lavoro e ottimizzare i costi.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
                  <p className="text-muted-foreground">
                    L'intelligenza artificiale seleziona automaticamente i candidati più adatti alle tue esigenze.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Compliance Garantita</h3>
                  <p className="text-muted-foreground">
                    Mantieni tutti i documenti aggiornati e conformi alle normative senza sforzo manuale.
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
              Pronto a Rivoluzionare la Gestione delle Tue Agenzie per il Lavoro?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Scopri come il VMS di AirStaff può trasformare il modo in cui gestisci le agenzie del lavoro.
            </p>
            <div className="flex justify-center">
              <GradientButton 
                onClick={() => window.location.href = 'mailto:hello@airstaff.it'}
                className="px-8 py-4 text-lg"
              >
                Contattaci Ora
              </GradientButton>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default VendorManagement;
