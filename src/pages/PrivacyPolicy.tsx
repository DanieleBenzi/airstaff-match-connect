
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
            <p className="text-lg mb-6">Ultimo aggiornamento: 07/10/2025</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduzione</h2>
            <p>
              La presente Privacy Policy descrive come AirStaff S.r.l. ("AirStaff" o "Titolare") tratta i dati personali degli utenti 
              che interagiscono con il sito web <a href="https://www.airstaff.it" className="text-primary hover:underline">www.airstaff.it</a> e 
              con i relativi servizi digitali (di seguito, i "Servizi").
              L'informativa è resa ai sensi dell'art. 13 del Regolamento (UE) 2016/679 ("GDPR") e della normativa italiana di attuazione.
            </p>
            <p className="mt-4">
              L'informativa non riguarda eventuali siti web o servizi di terze parti cui si possa accedere tramite link presenti sul sito.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Titolare del trattamento</h2>
            <p>
              <strong>AirStaff S.r.l.</strong><br />
              Sede legale: Via Comelico 11, 20135 Milano (MI) – Italia<br />
              Email: <a href="mailto:hello@airstaff.it" className="text-primary hover:underline">hello@airstaff.it</a>
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Tipologie di dati trattati</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Dati forniti volontariamente dall'utente</h3>
            <p>
              Quando compili moduli di contatto, richiedi informazioni, crei un account o comunichi con AirStaff, potremmo raccogliere:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>nome, cognome e indirizzo email;</li>
              <li>dati di contatto professionali (telefono, ruolo, azienda);</li>
              <li>informazioni fornite nei messaggi o nelle richieste inviate.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Dati raccolti automaticamente</h3>
            <p>
              Durante la navigazione vengono raccolti automaticamente alcuni dati tecnici, come:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>indirizzo IP, tipo di browser, sistema operativo, orario di accesso;</li>
              <li>dati di utilizzo del sito e cookie (vedi Cookie Policy).</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Dati aziendali e profili anonimizzati</h3>
            <p>
              Nel caso di utilizzo della piattaforma da parte di agenzie per il lavoro ("Staffing") o aziende, possono essere caricati 
              dati professionali e profili anonimizzati di lavoratori.
              Tali dati vengono trattati solo per finalità di matching e collaborazione tra le parti e restano di esclusiva titolarità 
              dei soggetti che li caricano.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Finalità e basi giuridiche del trattamento</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Finalità</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Base giuridica (art. 6 GDPR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">a) Fornire accesso ai servizi digitali e gestire l'account utente</td>
                    <td className="border border-gray-300 px-4 py-2">Esecuzione di un contratto o misure precontrattuali</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">b) Rispondere a richieste di contatto o informazioni</td>
                    <td className="border border-gray-300 px-4 py-2">Legittimo interesse o misure precontrattuali</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">c) Gestire rapporti commerciali B2B tra Staffing e Aziende</td>
                    <td className="border border-gray-300 px-4 py-2">Esecuzione contrattuale</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">d) Analisi statistiche anonime, miglioramento UX e sicurezza</td>
                    <td className="border border-gray-300 px-4 py-2">Legittimo interesse del Titolare</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">e) Invio di comunicazioni commerciali e newsletter (facoltativo)</td>
                    <td className="border border-gray-300 px-4 py-2">Consenso esplicito dell'interessato</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">f) Adempimento di obblighi legali o fiscali</td>
                    <td className="border border-gray-300 px-4 py-2">Obbligo legale</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">g) Prevenzione abusi, frodi e uso illecito della piattaforma</td>
                    <td className="border border-gray-300 px-4 py-2">Legittimo interesse del Titolare</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Il conferimento dei dati è necessario per le finalità contrattuali; il mancato conferimento può rendere impossibile 
              l'erogazione dei Servizi.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Modalità del trattamento e sicurezza</h2>
            <p>
              Il trattamento è svolto con modalità elettroniche e informatiche, secondo principi di liceità, correttezza e trasparenza.
              AirStaff adotta misure tecniche e organizzative adeguate per proteggere i dati da accessi non autorizzati, perdita, 
              alterazione o distruzione, in conformità all'art. 32 GDPR.
            </p>
            <p className="mt-4">
              I dati sono trattati da personale interno autorizzato o da fornitori nominati Responsabili del trattamento ai sensi 
              dell'art. 28 GDPR.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Conservazione dei dati</h2>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Dati di contatto:</strong> conservati per il tempo necessario a gestire la richiesta e per un massimo di 24 mesi.</li>
              <li><strong>Dati contrattuali e di account:</strong> per tutta la durata del rapporto e fino a 10 anni dopo la cessazione (obblighi civilistici/fiscali).</li>
              <li><strong>Dati di navigazione:</strong> generalmente 12 mesi.</li>
              <li><strong>Dati per finalità di marketing:</strong> fino alla revoca del consenso o massimo 24 mesi.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Comunicazione e trasferimento dei dati</h2>
            <p>
              I dati possono essere comunicati a:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>fornitori di servizi tecnici, cloud o di hosting;</li>
              <li>consulenti legali, fiscali o commerciali;</li>
              <li>autorità pubbliche, su richiesta legittima.</li>
            </ul>
            <p>
              I dati non vengono diffusi pubblicamente.
              Eventuali trasferimenti verso Paesi extra-UE avvengono solo verso soggetti che garantiscono livelli adeguati di protezione 
              (decisioni di adeguatezza o clausole contrattuali standard UE).
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Diritti dell'interessato</h2>
            <p>
              In qualità di interessato, puoi esercitare in qualsiasi momento i diritti previsti dagli articoli 15–22 del GDPR, tra cui:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>diritto di accesso, rettifica o cancellazione ("diritto all'oblio");</li>
              <li>diritto di limitazione o opposizione al trattamento;</li>
              <li>diritto alla portabilità dei dati;</li>
              <li>diritto di revocare il consenso, ove prestato;</li>
              <li>diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a>).</li>
            </ul>
            <p>
              Le richieste possono essere inviate a <a href="mailto:hello@airstaff.it" className="text-primary hover:underline">hello@airstaff.it</a>.
              AirStaff risponderà entro 30 giorni, salvo casi complessi.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Cookie</h2>
            <p>
              Il sito utilizza cookie tecnici e, previo consenso, cookie analitici e di profilazione.
              Per maggiori dettagli, consultare la <a href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</a>.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Modifiche alla presente informativa</h2>
            <p>
              AirStaff potrà aggiornare questa Privacy Policy in qualsiasi momento per conformarsi a modifiche normative o organizzative.
              Le modifiche saranno pubblicate su questa pagina con l'indicazione della data di ultimo aggiornamento.
              Ti invitiamo a consultarla periodicamente.
            </p>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="font-semibold">Titolare del trattamento:</p>
              <p>
                <strong>AirStaff S.r.l.</strong><br />
                Via Comelico 11, 20135 Milano – Italia<br />
                Email: <a href="mailto:hello@airstaff.it" className="text-primary hover:underline">hello@airstaff.it</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
