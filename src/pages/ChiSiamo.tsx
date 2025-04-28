
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const ChiSiamo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Chi Siamo | AirStaff - La nostra storia e missione</title>
        <meta name="description" content="AirStaff è nata per connettere le aziende ai migliori lavoratori, rendendo il processo di ricerca e selezione più semplice ed efficiente per tutti." />
        <link rel="canonical" href="https://www.airstaff.it/chi-siamo" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Chi Siamo</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#3A78E6]">La nostra storia</h2>
            <p className="mb-8 text-lg text-gray-700">
              AirStaff è nata con una visione chiara: semplificare il processo di ricerca e selezione del personale, 
              mettendo in contatto diretto aziende e lavoratori attraverso le agenzie per il lavoro.
            </p>
            
            <div className="my-12 bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#D35B6F]">La nostra missione</h3>
              <p className="text-lg text-gray-700">
                Aiutare i lavoratori a trovare impieghi che valorizzino le loro competenze e supportare le aziende 
                nel trovare rapidamente i profili più adatti alle loro esigenze.
              </p>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#3A78E6]">Per i lavoratori</h3>
            <p className="mb-8 text-lg text-gray-700">
              AirStaff è stata creata per aiutare i lavoratori a trovare opportunità di lavoro in modo semplice e veloce. 
              Grazie alla nostra piattaforma, i professionisti possono essere facilmente individuati dalle aziende 
              che cercano le loro competenze specifiche, aumentando le possibilità di trovare l'impiego giusto.
            </p>
            
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#D35B6F]">Per le aziende</h3>
            <p className="mb-8 text-lg text-gray-700">
              Riconosciamo la sfida che i dipartimenti di Risorse Umane affrontano nella ricerca del personale qualificato. 
              AirStaff riduce drasticamente il tempo e l'impegno necessari per trovare il candidato ideale, 
              consentendo ai team HR di concentrarsi su attività a maggior valore aggiunto. Con un solo click, 
              è possibile accedere a oltre 12.000 profili verificati e disponibili.
            </p>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#3A78E6]">I nostri valori</h2>
            <ul className="space-y-4 mb-8 list-disc pl-6">
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Efficienza:</span> Ottimizziamo i processi di ricerca e selezione per risparmiare tempo prezioso.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Trasparenza:</span> Crediamo in relazioni chiare e aperte con tutti i nostri stakeholder.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Innovazione:</span> Utilizziamo tecnologie all'avanguardia per migliorare continuamente la nostra piattaforma.
              </li>
              <li className="text-lg text-gray-700">
                <span className="font-semibold">Qualità:</span> Garantiamo profili verificati e opportunità di lavoro concrete.
              </li>
            </ul>
            
            <p className="text-lg text-gray-700">
              Con AirStaff, il processo di matching tra domanda e offerta di lavoro diventa semplice, veloce ed efficiente.
              Siamo orgogliosi di contribuire a creare un mercato del lavoro più dinamico e inclusivo.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChiSiamo;
