
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Cosa sono i cookie?</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, 
              dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive. 
              I cookie sono utilizzati per diverse finalità, hanno caratteristiche diverse, e possono essere utilizzati 
              sia dal titolare del sito che si sta visitando, sia da terze parti.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Tipologie di Cookie utilizzati</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Cookie tecnici</h3>
            <p>
              Questi cookie sono necessari per il corretto funzionamento del sito. Permettono la navigazione delle 
              pagine, la memorizzazione delle credenziali d'accesso per rendere più rapido l'ingresso nel sito e 
              per mantenere attive le preferenze durante la navigazione.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Cookie analitici</h3>
            <p>
              Questi cookie ci permettono di capire come gli utenti utilizzano il sito, per poterne analizzare il 
              traffico e capire come si muovono gli utenti all'interno del sito. Utilizziamo questi dati in forma 
              aggregata per migliorare il sito e l'esperienza di navigazione.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Gestione dei Cookie</h2>
            <p>
              L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. 
              La disabilitazione dei cookie tecnici, tuttavia, potrebbe compromettere l'esperienza di navigazione 
              all'interno del sito.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Come disabilitare i cookie dai principali browser</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Chrome: Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li>Firefox: Impostazioni → Privacy & Sicurezza → Cookie e dati dei siti</li>
              <li>Safari: Preferenze → Privacy → Cookie e dati dei siti web</li>
              <li>Edge: Impostazioni → Cookie e autorizzazioni sito</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Aggiornamenti della Cookie Policy</h2>
            <p>
              La presente Cookie Policy può essere soggetta ad aggiornamenti. Gli utenti sono pertanto invitati a 
              verificarne periodicamente il contenuto.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
