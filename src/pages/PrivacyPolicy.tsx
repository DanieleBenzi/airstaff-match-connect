
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduzione</h2>
            <p>
              La presente Privacy Policy ha lo scopo di descrivere le modalità di gestione del sito www.airstaff.com in riferimento al 
              trattamento dei dati personali degli utenti che lo consultano. Si tratta di un'informativa resa ai sensi dell'art. 13 del 
              Regolamento UE 2016/679 a coloro che interagiscono con i servizi web di AirStaff, accessibili per via telematica.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento è AirStaff, con sede legale in Via Comelico 11, 20135 Milano, Italia.
              Per contattare il Titolare è possibile scrivere all'indirizzo email: info@airstaff.com
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Tipologie di Dati Raccolti</h2>
            <p>
              Tra i dati personali raccolti da questo sito, in modo autonomo o tramite terze parti, ci sono:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Cookie e Dati di utilizzo</li>
              <li>Nome, cognome ed email</li>
              <li>Dati di contatto aziendali</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Finalità del Trattamento</h2>
            <p>
              I dati dell'Utente sono raccolti per consentire al Titolare di fornire i propri servizi, così come per le seguenti finalità:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Registrazione ed autenticazione</li>
              <li>Gestione dei contatti e invio di messaggi</li>
              <li>Interazione con piattaforme esterne</li>
              <li>Ottimizzazione e distribuzione del traffico</li>
              <li>Statistica</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Modalità di Trattamento</h2>
            <p>
              Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
              Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Diritti dell'Utente</h2>
            <p>
              Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.
              In particolare, l'Utente ha il diritto di:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Revocare il consenso in ogni momento</li>
              <li>Opporsi al trattamento dei propri Dati</li>
              <li>Accedere ai propri Dati</li>
              <li>Verificare e chiedere la rettifica</li>
              <li>Ottenere la limitazione del trattamento</li>
              <li>Ottenere la cancellazione o rimozione dei propri Dati Personali</li>
              <li>Proporre reclamo all'autorità di controllo</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookie Policy</h2>
            <p>
              Questo sito utilizza Cookie per salvare le informazioni di sessione degli Utenti e per svolgere altre attività strettamente necessarie al funzionamento dello stesso.
              Vengono inoltre utilizzati Cookie per finalità statistiche e per migliorare l'esperienza di navigazione dell'Utente.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Modifiche alla Privacy Policy</h2>
            <p>
              Il Titolare si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento dandone pubblicità agli Utenti su questa pagina.
              Si prega dunque di consultare spesso questa pagina, prendendo come riferimento la data di ultima modifica indicata in fondo.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
