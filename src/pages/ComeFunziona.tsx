import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, UserCheck, MessageCircle, Handshake } from 'lucide-react';
import GradientButton from '@/components/GradientButton';

const ComeFunziona: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Come trovare i lavoratori con{' '}
              <span className="bg-gradient-to-r from-airstaff-blue to-airstaff-pink bg-clip-text text-transparent">
                AirStaff
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ti guidiamo passo dopo passo nel processo di ricerca dei lavoratori più adatti alle tue esigenze
            </p>
          </div>
        </section>

        {/* Step by Step Guide */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto space-y-20">
              {/* Step 1: Registration */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <div className="bg-blue-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">1. Registrazione semplice</h3>
                    <p className="text-gray-700">
                      Registrati gratuitamente alla piattaforma per accedere a tutti i lavoratori disponibili. 
                      Basta inserire i dati della tua azienda e sei pronto per iniziare!
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <UserCheck size={40} />
                  </div>
                </div>
              </div>

              {/* Step 2: Search */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 flex justify-center md:order-1">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <Search size={40} />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-green-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">2. Cerca i lavoratori</h3>
                    <p className="text-gray-700">
                      Usa il nostro motore di ricerca intelligente: inserisci la mansione che stai cercando, 
                      quando ne hai bisogno, dove dovrà lavorare e quanto vuoi offrire. L'AI ti mostrerà i profili 
                      più adatti alle tue esigenze.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: Contact Request */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <div className="bg-purple-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">3. Invia una richiesta di contatto</h3>
                    <p className="text-gray-700">
                      Hai trovato il lavoratore perfetto? Clicca sul bottone "Contatta l'agenzia" e invia 
                      la tua richiesta. L'agenzia riceverà subito la notifica e valuterà la tua richiesta.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white">
                    <MessageCircle size={40} />
                  </div>
                </div>
              </div>

              {/* Step 4: Finalize */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 flex justify-center md:order-1">
                  <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center text-white">
                    <Handshake size={40} />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-pink-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">4. Chiudi il contratto</h3>
                    <p className="text-gray-700">
                      L'agenzia ti contatterà per definire tutti i dettagli e far iniziare il lavoratore. 
                      Nessuna complicazione burocratica: l'agenzia si occupa di tutto!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="mt-16 max-w-4xl mx-auto bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <h4 className="font-bold mb-2">📱 Nota sulla privacy</h4>
              <p className="text-gray-700">
                La tua privacy è importante per noi. I dati personali dei lavoratori sono protetti e non verranno mai condivisi su AirStaff. Verranno condivisi solo dopo che l'agenzia avrà accettato la tua richiesta di contatto. In questo modo, garantiamo la massima sicurezza per tutti.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold mb-4">Pronto a trovare i lavoratori giusti?</h3>
              <a href="http://www.app.airstaff.it/" target="_blank" rel="noopener noreferrer">
                <GradientButton icon className="mx-auto">
                  Provalo gratis
                </GradientButton>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComeFunziona;
