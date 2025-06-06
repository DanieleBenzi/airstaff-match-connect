
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      id: 'faq-1',
      question: 'Cos\'è AirStaff e come funziona?',
      answer: 'AirStaff è una piattaforma che permette alle aziende di cercare lavoratori direttamente nei database delle Agenzie Per il Lavoro (ApL) partner. Puoi filtrare per competenze, località e disponibilità per trovare la risorsa perfetta per la tua azienda.'
    },
    {
      id: 'faq-2',
      question: 'Come posso richiedere un lavoratore attraverso AirStaff?',
      answer: 'Una volta trovato il lavoratore che ti interessa, puoi inviare gratuitamente una richiesta di contatto direttamente all\'agenzia per il lavoro (ApL) che gestisce la risorsa. L\'agenzia ti contatterà per presentarti il lavoratore e procedere con l\'inserimento nel tuo organico.'
    },
    {
      id: 'faq-3',
      question: 'Quali sono i costi per utilizzare AirStaff?',
      answer: 'AirStaff è completamente gratuito per le aziende che cercano lavoratori. Non ci sono costi da sostenere né abbonamenti da sottoscrivere.'
    },
    {
      id: 'faq-4',
      question: 'Che tipo di lavoratori posso trovare su AirStaff?',
      answer: 'Puoi trovare lavoratori di tutti i settori e livelli di esperienza, dai profili junior a quelli senior, in ambiti come IT, logistica, vendite, amministrazione, produzione e molti altri. Le competenze disponibili dipendono dalle agenzie partner collegate alla piattaforma.'
    },
    {
      id: 'faq-5',
      question: 'Come vengono verificate le competenze dei lavoratori?',
      answer: 'Tutti i profili presenti su AirStaff sono già stati verificati e validati dalle Agenzie Per il Lavoro partner. Ogni agenzia ha i propri standard di selezione e verifica delle competenze prima di inserire un lavoratore nel proprio database.'
    },
    {
      id: 'faq-6',
      question: 'Posso contattare direttamente il lavoratore?',
      answer: 'No, tutti i contatti avvengono tramite l\'agenzia per il lavoro che gestisce il lavoratore. Questo garantisce la conformità normativa e la tutela sia del lavoratore che dell\'azienda.'
    },
    {
      id: 'faq-7',
      question: 'Quanto tempo ci vuole per ricevere una risposta?',
      answer: 'I tempi di risposta variano a seconda dell\'agenzia partner, ma generalmente riceverai un contatto entro 24-48 ore dalla richiesta. Le agenzie sono incentivate a rispondere rapidamente per garantire un servizio efficiente.'
    },
    {
      id: 'faq-8',
      question: 'In quali regioni opera AirStaff?',
      answer: 'Attualmente AirStaff opera in Lombardia e Veneto, coprendo tutte le principali città e zone di queste regioni. La disponibilità di lavoratori dipende dalle agenzie partner presenti nelle diverse aree.'
    },
    {
      id: 'faq-9',
      question: 'Che garanzie ho sulla qualità del servizio?',
      answer: 'Tutte le agenzie partner di AirStaff sono selezionate e verificate. Inoltre, ogni agenzia mantiene la propria reputazione e standard di qualità. In caso di problemi, puoi sempre contattare il nostro supporto.'
    },
    {
      id: 'faq-10',
      question: 'Come posso registrarmi come azienda su AirStaff?',
      answer: 'Per registrarti come azienda, visita questo link: https://app.airstaff.it/auth/register e compila il modulo di registrazione.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Domande Frequenti - AirStaff | FAQ su come funziona la piattaforma</title>
        <meta name="description" content="Trova le risposte alle domande più frequenti su AirStaff. Scopri come funziona la nostra piattaforma per la ricerca di lavoratori tramite agenzie per il lavoro." />
        <meta name="keywords" content="FAQ AirStaff, domande frequenti, come funziona AirStaff, agenzie per il lavoro, ricerca lavoratori" />
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Domande <span className="bg-gradient-to-r from-airstaff-blue to-airstaff-pink bg-clip-text text-transparent">Frequenti</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Trova le risposte alle domande più comuni su AirStaff
            </p>
            
            {/* Search Box */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Cerca nelle domande frequenti..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg border-2 border-gray-200 focus:border-airstaff-blue rounded-full"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full space-y-4">
                {filteredFaqs.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id} 
                    className="border border-gray-200 rounded-lg px-6 py-2 hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-airstaff-blue">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">
                  Nessuna FAQ trovata per "{searchTerm}"
                </p>
                <p className="text-gray-400 mt-2">
                  Prova con termini di ricerca diversi
                </p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Non hai trovato quello che cercavi?
            </h2>
            <p className="text-gray-600 mb-6">
              Contattaci direttamente per ricevere assistenza personalizzata
            </p>
            <a 
              href="mailto:hello@airstaff.it" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-airstaff-blue to-airstaff-pink text-white font-medium rounded-full hover:scale-105 transition-transform"
            >
              Contattaci
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
