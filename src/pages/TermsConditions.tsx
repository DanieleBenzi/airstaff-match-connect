
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
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Oggetto e Accettazione</h2>
            <p className="mb-3">
              1.1 I presenti Termini e Condizioni ("Termini") regolano l'accesso e l'utilizzo del sito, dell'applicazione e dei servizi digitali offerti da AirStaff (congiuntamente, i "Servizi").
            </p>
            <p className="mb-3">
              1.2 Creando un account o utilizzando i Servizi l'utente dichiara di aver letto, compreso e accettato i Termini. Se non li accetta, non può utilizzare i Servizi.
            </p>
            <p>
              1.3 In caso di conflitto tra questi Termini e accordi specifici (es. Master Service Agreement, Ordine di Acquisto, Data Processing Agreement), prevalgono questi ultimi.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Definizioni</h2>
            <p className="mb-2"><strong>Azienda:</strong> soggetto che ricerca personale tramite la Piattaforma.</p>
            <p className="mb-2"><strong>Staffing:</strong> agenzia per il lavoro o soggetto assimilato abilitato ai sensi di legge.</p>
            <p className="mb-2"><strong>Piattaforma:</strong> l'infrastruttura tecnologica di AirStaff.</p>
            <p className="mb-2"><strong>Profili:</strong> dati (anche anonimizzati) relativi a lavoratori potenziali o candidati.</p>
            <p><strong>Contenuti Utente:</strong> ogni dato, informazione, file o materiale immesso dagli utenti (Staffing/Aziende).</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Ruolo di AirStaff (No Placement / No Agenzia)</h2>
            <p className="mb-3">
              3.1 AirStaff fornisce soltanto una piattaforma tecnologica di contatto e gestione informativa tra Staffing e Aziende.
            </p>
            <p className="mb-3">
              3.2 AirStaff non svolge attività di intermediazione al lavoro ai sensi del D.Lgs. 276/2003 né assume alcun ruolo di datore di lavoro, selezionatore o somministratore.
            </p>
            <p>
              3.3 Ogni decisione di contatto, selezione, assunzione o incarico è assunta autonomamente dalle parti coinvolte, che se ne assumono ogni responsabilità.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Idoneità e Account</h2>
            <p className="mb-3">
              4.1 Per usare i Servizi serve la capacità di agire e, per gli operatori, l'abilitazione di legge.
            </p>
            <p className="mb-3">
              4.2 Gli utenti devono fornire informazioni veritiere, aggiornate e complete, mantenere riservate le credenziali ed essere responsabili di tutte le attività svolte tramite il proprio account.
            </p>
            <p>
              4.3 AirStaff può sospendere o chiudere account in caso di violazioni, rischi di sicurezza o frodi.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Utilizzo della Piattaforma</h2>
            <p className="mb-3">
              5.1 È vietato: (a) caricare dati falsi/illegali; (b) eludere le misure di sicurezza; (c) effettuare scraping, mining massivo, uso non autorizzato di bot/API; (d) violare diritti di terzi; (e) usare i Servizi per finalità in contrasto con la legge, inclusa discriminazione illecita.
            </p>
            <p>
              5.2 AirStaff può applicare limitazioni di traffico, rate limit, o sospensioni per garantire integrità e prestazioni del sistema.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Contenuti Utente e Licenze</h2>
            <p className="mb-3">
              6.1 L'utente mantiene la titolarità dei Contenuti Utente che carica, dichiarando di avere tutti i diritti necessari.
            </p>
            <p className="mb-3">
              6.2 Con il caricamento, concede ad AirStaff una licenza non esclusiva, mondiale, gratuita per usare, riprodurre, ospitare, visualizzare e processare i Contenuti Utente al solo fine di erogare i Servizi (inclusi miglioramenti, backup, sicurezza e conformità).
            </p>
            <p>
              6.3 Gli Anonymized Profiles: ove la Staffing carichi profili anonimizzati, garantisce che la pseudonimizzazione sia conforme alla normativa privacy e che vi sia idoneo fondamento giuridico.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Proprietà Intellettuale della Piattaforma</h2>
            <p className="mb-3">
              7.1 Software, interfacce, banche dati, marchi, loghi e contenuti della Piattaforma sono di proprietà di AirStaff o dei suoi licenzianti.
            </p>
            <p>
              7.2 È vietato copiare, modificare, creare opere derivate, disassemblare, decompilare o sfruttare la Piattaforma oltre quanto espressamente consentito dai Termini.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Privacy e Protezione Dati</h2>
            <p className="mb-3">
              8.1 AirStaff tratta i dati personali secondo l'Informativa Privacy e, ove applicabile, mediante Data Processing Agreement (DPA) che disciplina i ruoli (titolare/contitolare/responsabile).
            </p>
            <p className="mb-3">
              8.2 Le Staffing dichiarano di avere una base giuridica valida per il caricamento dei dati dei lavoratori e per la loro condivisione (anche anonimizzata) con le Aziende tramite la Piattaforma, nonché di aver assolto gli obblighi informativi verso gli interessati.
            </p>
            <p className="mb-3">
              8.3 Le Aziende si impegnano a trattare i dati ricevuti solo per finalità di selezione/valutazione e nel rispetto della normativa applicabile (GDPR e normativa lavoro).
            </p>
            <p>
              8.4 Non vanno caricati dati appartenenti a categorie particolari (art. 9 GDPR) salvo ove strettamente necessario e nel rispetto delle cautele di legge e del DPA.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Rapporti tra Staffing e Aziende</h2>
            <p className="mb-3">
              9.1 Eventuali accordi commerciali (tariffe, success fee, penali, non-solicitation, ecc.) tra Staffing e Aziende non coinvolgono AirStaff, salvo diverso contratto scritto.
            </p>
            <p>
              9.2 Le parti si impegnano a non aggirare le reciproche obbligazioni assunte tramite la Piattaforma (es. bypass degli accordi caricati/accettati), fermo restando che tali pattuizioni vincolano esclusivamente le parti stesse.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Corrispettivi e Fatturazione (se applicabile)</h2>
            <p className="mb-3">
              10.1 L'uso dei Servizi può essere soggetto a piani a pagamento o commissioni, come da listino/ordine di acquisto.
            </p>
            <p className="mb-3">
              10.2 I corrispettivi sono al netto di imposte. Ritardi di pagamento possono comportare sospensione dei Servizi.
            </p>
            <p>
              10.3 Non sono rimborsabili fee già maturate, salvo diverso obbligo di legge o quanto previsto nel contratto commerciale specifico.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Disponibilità del Servizio e Supporto</h2>
            <p className="mb-3">
              11.1 AirStaff adotta misure ragionevoli per garantire la disponibilità dei Servizi, ma non garantisce disponibilità ininterrotta o priva di errori.
            </p>
            <p>
              11.2 Manutenzioni programmate o emergenziali possono causare interruzioni. AirStaff cercherà di limitarne impatto e durata.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Garanzie e Dichiarazioni degli Utenti</h2>
            <p className="mb-3">
              12.1 Ogni utente dichiara e garantisce: (a) la liceità dei dati caricati; (b) la veridicità delle informazioni fornite; (c) la conformità a leggi e regolamenti (incluse norme sul lavoro e antidiscriminatorie); (d) di agire per scopi professionali (B2B).
            </p>
            <p>
              12.2 Le Staffing garantiscono di essere abilitate e in regola con gli adempimenti di legge.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Manleva</h2>
            <p>
              L'utente manleva e terrà indenne AirStaff da qualsiasi pretesa, danno, sanzione, costo (incluse spese legali ragionevoli) derivante da: (i) violazione dei Termini; (ii) Contenuti Utente illeciti o non autorizzati; (iii) violazioni di diritti di terzi; (iv) uso improprio dei dati personali.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">14. Limitazione di Responsabilità</h2>
            <p className="mb-3">
              14.1 Nei limiti massimi consentiti dalla legge, AirStaff non risponde di danni indiretti, perdita di profitto, perdita di avviamento, interruzione di attività, perdita/corruzione di dati.
            </p>
            <p className="mb-3">
              14.2 La responsabilità complessiva di AirStaff verso l'utente, per qualunque pretesa, è limitata all'importo effettivamente pagato dall'utente ad AirStaff nei 12 mesi antecedenti l'evento dannoso (o a € 1.000 se non è stato pagato alcun corrispettivo).
            </p>
            <p>
              14.3 Nulla esclude o limita la responsabilità per dolo o colpa grave e per le ipotesi inderogabili di legge.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">15. Sospensione e Chiusura</h2>
            <p>
              AirStaff può sospendere o chiudere l'account in caso di: violazione dei Termini, rischi per sicurezza/rete, ordini dell'autorità, mancati pagamenti, o uso che arrechi danno alla Piattaforma o a terzi. In tali casi, eventuali dati potranno essere conservati secondo legge e policy interne.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">16. Modifiche ai Termini</h2>
            <p>
              AirStaff può modificare i Termini. Le modifiche hanno effetto dalla pubblicazione; per cambi sostanziali AirStaff potrà inviare un preavviso ragionevole. L'uso continuato dei Servizi vale come accettazione delle modifiche.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">17. Terze Parti e Link</h2>
            <p>
              La Piattaforma può integrare servizi di terzi. AirStaff non è responsabile dei contenuti, delle policy e delle pratiche di tali terzi, che restano soggetti alle rispettive condizioni.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">18. Legge Applicabile e Foro</h2>
            <p>
              I Termini sono regolati dalla legge italiana. Foro esclusivo: Milano, Italia. Se l'utente è un consumatore, si applicano le tutele inderogabili del proprio foro di residenza (ma i Servizi sono pensati per uso professionale B2B).
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">19. Comunicazioni</h2>
            <p>
              Le comunicazioni legali possono essere inviate via email all'indirizzo associato all'account o tramite avvisi in Piattaforma. Per AirStaff: hello@airstaff.it (o diverso recapito indicato sul sito).
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;
