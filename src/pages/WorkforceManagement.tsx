import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, Calendar, MapPin, Settings, Smartphone } from 'lucide-react';
import GradientButton from '../components/GradientButton';

const WorkforceManagement: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Gestione Completa del Lavoratore",
      description: "App mobile per i lavoratori che permette di segnare presenze, malattie, ferie e turni. Tutto in un'unica piattaforma facile da usare.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      title: "Monitoraggio in Tempo Reale",
      description: "Visualizza chi sta lavorando dove in tempo reale. Aziende e Agenzie per il Lavoro possono controllare le presenze istantaneamente.",
    },
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "Integrazione con Sistemi HR",
      description: "Integrabile con la maggior parte dei sistemi HR e payroll providers. Sincronizzazione automatica dei dati per una gestione fluida.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AirStaff - Workforce Management System (WMS) | Gestione Forza Lavoro</title>
        <meta 
          name="description" 
          content="Il Workforce Management System di AirStaff ottimizza la gestione dei lavoratori con app mobile per presenze, monitoraggio in tempo reale e integrazione con sistemi HR." 
        />
        <meta name="keywords" content="workforce management system, WMS, gestione lavoratori, presenze, turni, HR integration, payroll" />
        <link rel="canonical" href="https://www.airstaff.it/workforce-management" />
        
        <meta property="og:title" content="AirStaff - Workforce Management System (WMS)" />
        <meta property="og:description" content="Gestisci la tua forza lavoro in modo efficiente con il WMS di AirStaff" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.airstaff.it/workforce-management" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AirStaff Workforce Management System",
            "description": "Sistema di gestione completo per ottimizzare la gestione della forza lavoro",
            "provider": {
              "@type": "Organization",
              "name": "AirStaff"
            },
            "areaServed": "IT",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.airstaff.it/workforce-management"
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
              Workforce Management System (WMS)
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Gestisci la tua forza lavoro in modo efficiente con il WMS di AirStaff. 
              Presenze, turni e monitoraggio in tempo reale, tutto in un'unica piattaforma.
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
              Le Funzionalità del WMS AirStaff
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

        {/* App Features Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              App Mobile per i Lavoratori
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex gap-3">
                    <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Segnalazione Presenze</h3>
                      <p className="text-muted-foreground">
                        I lavoratori possono registrare le loro presenze con un semplice tap dall'app mobile.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Gestione Ferie e Malattie</h3>
                      <p className="text-muted-foreground">
                        Richiedi ferie o comunica malattie direttamente dall'app in modo semplice e veloce.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Visualizzazione Turni</h3>
                      <p className="text-muted-foreground">
                        Consulta i tuoi turni pianificati e ricevi notifiche per eventuali modifiche.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Geolocalizzazione</h3>
                      <p className="text-muted-foreground">
                        Conferma la presenza sul posto di lavoro tramite geolocalizzazione automatica.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Perché Scegliere il WMS di AirStaff?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visibilità Totale</h3>
                  <p className="text-muted-foreground">
                    Monitoraggio in tempo reale di tutti i lavoratori attivi, ovunque si trovino.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Automazione Completa</h3>
                  <p className="text-muted-foreground">
                    Elimina il data entry manuale con l'integrazione automatica con i sistemi HR e payroll.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Facilità d'Uso</h3>
                  <p className="text-muted-foreground">
                    App intuitiva che non richiede formazione. I lavoratori possono iniziare ad usarla immediatamente.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integrabile</h3>
                  <p className="text-muted-foreground">
                    Si integra perfettamente con la maggior parte dei sistemi HR, payroll e gestionali esistenti.
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
              Semplifica la gestione della Tua forza lavoro
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Scopri come il WMS di AirStaff può ottimizzare la gestione dei tuoi lavoratori 👷
            </p>
            <div className="flex justify-center">
              <GradientButton 
                onClick={() => window.location.href = 'mailto:hello@airstaff.it'}
                className="px-8 py-4 text-lg"
              >
                Parliamo
              </GradientButton>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WorkforceManagement;
