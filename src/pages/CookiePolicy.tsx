
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
            <p className="text-lg mb-6">Ultimo aggiornamento: 07/10/2025</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati inviano al dispositivo dell'utente (computer, tablet, smartphone), 
              dove vengono memorizzati per poi essere ritrasmessi agli stessi siti in occasione di visite successive.
              Possono essere installati dal titolare del sito (cookie di prima parte) o da altri domini (cookie di terze parti).
              I cookie permettono al sito di riconoscere il dispositivo dell'utente, migliorare la navigazione, ricordare preferenze e 
              raccogliere informazioni statistiche o di marketing.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Tipologie di cookie utilizzati</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Cookie tecnici (necessari)</h3>
            <p className="mb-3">
              Questi cookie sono indispensabili per il corretto funzionamento del sito e non richiedono consenso.
              Includono, ad esempio:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>cookie di sessione per la gestione della navigazione;</li>
              <li>cookie di autenticazione e sicurezza;</li>
              <li>cookie per salvare le preferenze dell'utente (lingua, account, consenso cookie).</li>
            </ul>
            <p>
              <strong>Base giuridica:</strong> esecuzione del contratto o misure precontrattuali (art. 6.1.b GDPR).
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Cookie analitici</h3>
            <p className="mb-3">
              Servono a raccogliere informazioni in forma aggregata sull'uso del sito (es. pagine visitate, tempo di permanenza, provenienza geografica).
              Utilizziamo questi dati per migliorare le prestazioni del sito e l'esperienza utente.
              Se i cookie analitici non consentono l'identificazione diretta dell'utente (es. IP anonimizzato), possono essere usati senza consenso; 
              diversamente, è richiesto il consenso esplicito.
            </p>
            <p className="mb-2"><strong>Esempi:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google Analytics 4 (GA4) – servizio fornito da Google Ireland Ltd. (IP anonimizzato)</li>
              <li>Hotjar / Microsoft Clarity (solo se abilitati, per analisi UX)</li>
            </ul>
            <p>
              <strong>Base giuridica:</strong> consenso (art. 6.1.a GDPR) o legittimo interesse (art. 6.1.f GDPR, se anonimizzati).
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Cookie di profilazione o marketing (eventuali)</h3>
            <p className="mb-3">
              Possono essere utilizzati per mostrare annunci mirati in base agli interessi dell'utente o per misurare l'efficacia delle campagne pubblicitarie.
              Questi cookie vengono installati solo previo consenso esplicito dell'utente tramite il banner o la sezione "Gestisci preferenze".
            </p>
            <p className="mb-2"><strong>Esempi (se implementati):</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Meta Ads (Facebook Pixel)</li>
              <li>LinkedIn Insight Tag</li>
              <li>Google Ads Remarketing</li>
            </ul>
            <p>
              <strong>Base giuridica:</strong> consenso (art. 6.1.a GDPR).
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Gestione e disabilitazione dei cookie</h2>
            <p className="mb-4">L'utente può:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accettare, rifiutare o personalizzare le preferenze tramite il banner di consenso;</li>
              <li>Modificare in qualsiasi momento la scelta cliccando su "Gestisci preferenze cookie" (link nel footer del sito);</li>
              <li>Oppure intervenire manualmente tramite le impostazioni del browser.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Come disabilitare i cookie nei principali browser</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Chrome</strong> → Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li><strong>Firefox</strong> → Impostazioni → Privacy e sicurezza → Cookie e dati dei siti</li>
              <li><strong>Safari</strong> → Preferenze → Privacy → Gestisci dati siti web</li>
              <li><strong>Edge</strong> → Impostazioni → Cookie e autorizzazioni sito</li>
            </ul>
            <p className="italic">
              La disattivazione dei cookie tecnici può compromettere il corretto funzionamento del sito.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookie di terze parti</h2>
            <p className="mb-3">
              Alcune funzionalità del sito possono utilizzare servizi di terze parti (es. analytics, mappe, video, social plugin) che impostano 
              cookie indipendenti. Le informazioni raccolte e le modalità di trattamento sono disciplinate dalle policy di tali soggetti terzi, 
              disponibili ai seguenti link:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy & Termini</a></li>
              <li><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn Privacy Policy</a></li>
              <li><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Meta Privacy Policy</a></li>
            </ul>
            <p>
              AirStaff non ha controllo diretto su questi cookie e non è responsabile per l'uso che le terze parti ne fanno.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Aggiornamenti della Cookie Policy</h2>
            <p className="mb-3">
              La presente Cookie Policy può essere aggiornata per conformarsi a modifiche normative o tecniche.
              Le modifiche saranno pubblicate su questa pagina con la relativa data di aggiornamento.
            </p>
            <p>
              Ti invitiamo a consultarla periodicamente per rimanere informato sull'uso dei cookie.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
