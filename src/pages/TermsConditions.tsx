
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Termini e Condizioni</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Accettazione dei Termini</h2>
            <p>
              Utilizzando il sito web di AirStaff e i servizi correlati, l'utente accetta di essere vincolato dai presenti Termini e Condizioni. 
              Se non si accettano tutti i termini e le condizioni, non è possibile accedere al sito o utilizzare i servizi offerti.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Descrizione del Servizio</h2>
            <p>
              AirStaff è una piattaforma che mette in contatto agenzie interinali (Staffing) e Aziende con lo scopo di semplificare l'hiring 
              e ridurre il turnover dei lavoratori. La piattaforma consente alle Staffing di caricare profili anonimi dei lavoratori che 
              possono essere visualizzati dalle Aziende interessate.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Account Utente</h2>
            <p>
              Per utilizzare alcuni servizi della piattaforma AirStaff, potrebbe essere richiesto all'utente di creare un account e fornire 
              determinate informazioni. L'utente è responsabile del mantenimento della riservatezza delle credenziali del proprio account e 
              di tutte le attività che si verificano sotto il proprio account.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Proprietà Intellettuale</h2>
            <p>
              Tutti i diritti di proprietà intellettuale in relazione al sito web e ai servizi AirStaff sono di proprietà di AirStaff o dei 
              suoi licenziatari. Nessuna parte del sito o dei suoi contenuti può essere riprodotta, duplicata, copiata, venduta, rivenduta o 
              sfruttata per qualsiasi scopo senza l'espressa autorizzazione scritta di AirStaff.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitazione di Responsabilità</h2>
            <p>
              AirStaff non è responsabile per eventuali danni diretti, indiretti, incidentali, consequenziali o punitivi derivanti dall'uso 
              o dall'impossibilità di utilizzare i servizi. AirStaff funge da intermediario tra Staffing e Aziende e non è responsabile per 
              le azioni delle parti coinvolte.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Privacy dei Dati</h2>
            <p>
              AirStaff si impegna a proteggere la privacy degli utenti. I dati personali dei lavoratori rimangono anonimi per le Aziende fino 
              a quando la Staffing non accetta una richiesta di contatto. Per maggiori informazioni sul trattamento dei dati, consultare la 
              nostra Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Modifiche ai Termini</h2>
            <p>
              AirStaff si riserva il diritto di modificare questi termini e condizioni in qualsiasi momento. Le modifiche entrano in vigore 
              immediatamente dopo la pubblicazione sul sito. È responsabilità dell'utente verificare periodicamente eventuali modifiche.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Legge Applicabile</h2>
            <p>
              I presenti Termini e Condizioni sono regolati dalle leggi italiane. Qualsiasi controversia relativa ai presenti termini sarà 
              sottoposta alla giurisdizione esclusiva del Foro di Milano.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contatti</h2>
            <p>
              Per qualsiasi domanda relativa ai presenti Termini e Condizioni, si prega di contattare AirStaff all'indirizzo email: info@airstaff.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;
