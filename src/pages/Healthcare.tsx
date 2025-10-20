import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GradientButton from '@/components/GradientButton';
import { Heart, Shield, Clock, Users, CheckCircle, Phone } from 'lucide-react';

const Healthcare: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AirStaff Healthcare - Trova Badanti e OSS Qualificati per la Tua Famiglia</title>
        <meta 
          name="description" 
          content="Cerca e trova badanti e operatori socio-sanitari (OSS) qualificati per l'assistenza domiciliare di anziani e persone con disabilità. Professionisti verificati, disponibili subito." 
        />
        <meta name="keywords" content="badante, OSS, assistenza domiciliare, cura anziani, assistenza disabili, operatore socio sanitario, caregiver" />
        <link rel="canonical" href="https://www.airstaff.it/healthcare" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AirStaff Healthcare - Trova Badanti e OSS Qualificati" />
        <meta property="og:description" content="Assistenza domiciliare professionale per anziani e persone con disabilità. Trova badanti e OSS qualificati in poche ore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.airstaff.it/healthcare" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AirStaff Healthcare",
            "description": "Servizio di ricerca e selezione di badanti e operatori socio-sanitari qualificati per assistenza domiciliare",
            "provider": {
              "@type": "Organization",
              "name": "AirStaff S.r.l.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Comelico 11",
                "addressLocality": "Milano",
                "postalCode": "20135",
                "addressCountry": "IT"
              },
              "email": "hello@airstaff.it"
            },
            "serviceType": "Assistenza domiciliare",
            "areaServed": "IT"
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-airstaff-pink/10 via-white to-airstaff-blue/10 px-6 md:px-12 lg:px-24 py-20 md:py-28">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Trova il <span className="text-airstaff-pink">Badante</span> o <span className="text-airstaff-blue">OSS</span> Perfetto per la Tua Famiglia
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Assistenza domiciliare professionale per anziani e persone con disabilità. 
              Professionisti qualificati, verificati e disponibili in poche ore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.airstaff.it/guest/search-talents" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <GradientButton icon className="w-full sm:w-auto px-8 py-3 text-lg">
                  Inizia la Ricerca
                </GradientButton>
              </a>
              <a href="mailto:hello@airstaff.it" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-airstaff-pink border-2 border-airstaff-pink px-8 py-3 rounded-full font-medium text-lg transition-all hover:bg-airstaff-pink hover:text-white flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contattaci
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Perché Scegliere AirStaff Healthcare */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Perché Scegliere AirStaff Healthcare?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-airstaff-pink/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-airstaff-pink" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professionisti Verificati</h3>
              <p className="text-gray-600">
                Tutti i nostri badanti e OSS sono selezionati e verificati dalle migliori agenzie specializzate
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-airstaff-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-airstaff-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Disponibilità Immediata</h3>
              <p className="text-gray-600">
                Trova il professionista giusto in poche ore, non settimane
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-airstaff-pink/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-airstaff-pink" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ampia Scelta</h3>
              <p className="text-gray-600">
                Accesso a 20+ agenzie specializzate in un'unica piattaforma
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-airstaff-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-airstaff-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assistenza Personalizzata</h3>
              <p className="text-gray-600">
                Ti aiutiamo a trovare il professionista più adatto alle tue esigenze specifiche
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Offerti */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            I Nostri Servizi di Assistenza
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-airstaff-pink mb-4">Badanti Qualificate</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-airstaff-pink flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Assistenza diurna e notturna</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-airstaff-pink flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cura personale e igiene</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-airstaff-pink flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Supporto nelle attività quotidiane</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-airstaff-pink flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Compagnia e supporto emotivo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-airstaff-pink flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Gestione della casa</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-airstaff-blue mb-4">Operatori Socio-Sanitari (OSS)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-airstaff-blue flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Assistenza sanitaria specializzata</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-airstaff-blue flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Somministrazione terapie</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-airstaff-blue flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Mobilizzazione e riabilitazione</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-airstaff-blue flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Assistenza post-operatoria</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-airstaff-blue flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Gestione pazienti con patologie specifiche</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Come Funziona */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Come Funziona?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-gradient-cta text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Descrivi le Tue Esigenze</h3>
                  <p className="text-gray-600">
                    Raccontaci di cosa hai bisogno: tipo di assistenza, orari, competenze specifiche richieste
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-gradient-cta text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ricevi i Profili Compatibili</h3>
                  <p className="text-gray-600">
                    In poche ore riceverai una selezione di badanti e OSS qualificati che corrispondono alle tue necessità
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-gradient-cta text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scegli e Inizia</h3>
                  <p className="text-gray-600">
                    Valuta i profili, conduci colloqui e scegli il professionista più adatto alla tua famiglia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-cta px-6 md:px-12 lg:px-24 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Inizia Oggi la Ricerca del Professionista Ideale
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Non perdere tempo prezioso. Trova il badante o l'OSS giusto per la tua famiglia in poche ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.airstaff.it/guest/search-talents" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-airstaff-pink px-8 py-3 rounded-full font-medium text-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
                Cerca Ora
              </button>
            </a>
            <a href="mailto:hello@airstaff.it" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-medium text-lg transition-all hover:bg-white hover:text-airstaff-pink flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Parlaci delle Tue Esigenze
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Healthcare */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Domande Frequenti
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Qual è la differenza tra badante e OSS?</h3>
              <p className="text-gray-600">
                Il badante si occupa dell'assistenza di base e delle attività quotidiane, mentre l'OSS (Operatore Socio-Sanitario) 
                ha una formazione sanitaria specifica e può svolgere attività assistenziali più complesse come la somministrazione 
                di terapie e la gestione di pazienti con patologie.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quanto costa il servizio?</h3>
              <p className="text-gray-600">
                AirStaff è completamente gratuito per le famiglie. Pagate solo il compenso del professionista scelto, 
                concordato direttamente con l'agenzia che lo propone.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">I professionisti sono assicurati?</h3>
              <p className="text-gray-600">
                Sì, tutti i professionisti proposti dalle agenzie partner sono regolarmente assicurati e hanno i requisiti 
                legali necessari per svolgere l'attività di assistenza domiciliare.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Posso cambiare professionista se non sono soddisfatto?</h3>
              <p className="text-gray-600">
                Certamente. Se il professionista scelto non soddisfa le tue aspettative, possiamo aiutarti a trovare 
                un'alternativa più adatta alle tue esigenze.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Healthcare;