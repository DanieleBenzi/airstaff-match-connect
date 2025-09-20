import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const ApriPosizione: React.FC = () => {
  const surveyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const existing = document.getElementById('smcx-sdk');
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
      // @ts-ignore
      if (typeof window !== 'undefined' && (window as any).SMCX) {
        try { delete (window as any).SMCX; } catch {}
      }
    } catch {}

    if (surveyRef.current) {
      const inline = document.createElement('script');
      inline.type = 'text/javascript';
      inline.async = true;
      inline.innerHTML = `(function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdw44d65fYrkc5le4GIspU_2FEXQeYLWIYieWmr5JusKySk.js",a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");`;
      surveyRef.current.appendChild(inline);
    }

    return () => {
      try {
        const existing2 = document.getElementById('smcx-sdk');
        if (existing2 && existing2.parentNode) existing2.parentNode.removeChild(existing2);
        if (surveyRef.current) surveyRef.current.innerHTML = '';
        // @ts-ignore
        if (typeof window !== 'undefined' && (window as any).SMCX) {
          try { delete (window as any).SMCX; } catch {}
        }
      } catch {}
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Apri una Posizione - AirStaff</title>
        <meta name="description" content="Non trovi un lavoratore? Te lo troviamo noi, gratis. Apri una posizione e le nostre agenze partner ti contatteranno entro 72h." />
        <meta name="keywords" content="apri posizione, ricerca lavoratori, agenzie lavoro, airstaff, staffing gratuito" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-8">
              Non trovi un lavoratore?{' '}
              <span className="bg-gradient-to-r from-airstaff-blue to-airstaff-pink bg-clip-text text-transparent">
                Te lo troviamo noi, gratis.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Apri una posizione utilizzando il form qui sotto e noi contatteremo le Agenzie del lavoro al posto tuo. 
              Senza bisogno di creare nessun account.
              <br /><br />
              Nel giro di 72h, le nostre APL partner ti contatteranno e ti proporranno dei lavoratori in linea con la tua ricerca!
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div ref={surveyRef} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApriPosizione;