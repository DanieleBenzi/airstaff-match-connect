import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import GradientButton from '@/components/GradientButton';

interface Worker {
  job_title: string;
  location: string;
  ccnl: string;
  contratto: string;
}

interface WorkerWithAvailability extends Worker {
  availability: string;
}

const WorkerSearchBar: React.FC = () => {
  const [cosa, setCosa] = useState('');
  const [dove, setDove] = useState('');
  const [results, setResults] = useState<WorkerWithAvailability[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomAvailability = (): string => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 16); // 0 to 15 days
    const availabilityDate = new Date(today);
    availabilityDate.setDate(today.getDate() + randomDays);
    
    const day = String(availabilityDate.getDate()).padStart(2, '0');
    const month = String(availabilityDate.getMonth() + 1).padStart(2, '0');
    const year = availabilityDate.getFullYear();
    
    return `Disponibile dal ${day}/${month}/${year}`;
  };

  const normalizeString = (str: string): string => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const response = await fetch('/data/workers.csv');
      const csvText = await response.text();
      
      const lines = csvText.split('\n');
      const headers = lines[0].split(',');
      
      const workers: Worker[] = [];
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const values = line.split(',');
        if (values.length >= 4) {
          workers.push({
            job_title: values[0].trim(),
            location: values[1].trim(),
            ccnl: values[2].trim(),
            contratto: values[3].trim(),
          });
        }
      }
      
      // Filter workers
      const cosaTrimmed = cosa.trim();
      const doveTrimmed = dove.trim();
      
      let filtered = workers;
      
      if (cosaTrimmed) {
        const normalizedCosa = normalizeString(cosaTrimmed);
        filtered = filtered.filter(worker =>
          normalizeString(worker.job_title).includes(normalizedCosa)
        );
      }
      
      if (doveTrimmed) {
        const normalizedDove = normalizeString(doveTrimmed);
        filtered = filtered.filter(worker =>
          normalizeString(worker.location).includes(normalizedDove)
        );
      }
      
      // Take first 3 results and add random availability
      const top3 = filtered.slice(0, 3).map(worker => ({
        ...worker,
        availability: generateRandomAvailability(),
      }));
      
      setResults(top3);
    } catch (error) {
      console.error('Error loading workers:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardClick = () => {
    window.open('https://app.airstaff.it/', '_self');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Trova i Lavoratori Giusti per Te
        </h2>
        
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-[1fr,1fr,auto] gap-4 items-end">
            <div>
              <label htmlFor="cosa-search" className="block text-sm font-medium text-gray-700 mb-2">
                Cosa
              </label>
              <Input
                id="cosa-search"
                type="text"
                placeholder="Cosa cerchi (es. Magazziniere, Operaio)"
                value={cosa}
                onChange={(e) => setCosa(e.target.value)}
                className="w-full"
                aria-label="Cerca per mansione"
              />
            </div>
            
            <div>
              <label htmlFor="dove-search" className="block text-sm font-medium text-gray-700 mb-2">
                Dove
              </label>
              <Input
                id="dove-search"
                type="text"
                placeholder="Dove lo cerchi (es. Milano, Venezia)"
                value={dove}
                onChange={(e) => setDove(e.target.value)}
                className="w-full"
                aria-label="Cerca per località"
              />
            </div>
            
            <GradientButton
              onClick={handleSearch}
              className="w-full md:w-auto"
              icon={true}
            >
              <Search className="w-5 h-5 mr-2" />
              Cerca Lavoratori
            </GradientButton>
          </div>
        </div>

        {/* Results */}
        {hasSearched && (
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Caricamento...</p>
              </div>
            ) : results.length > 0 ? (
              <>
                <div className="grid gap-4 mb-6">
                  {results.map((worker, index) => (
                    <div
                      key={index}
                      onClick={handleCardClick}
                      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all cursor-pointer border border-gray-100 hover:border-airstaff-pink"
                    >
                      <div className="grid md:grid-cols-5 gap-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Ruolo</p>
                          <p className="font-semibold text-gray-900">{worker.job_title}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Località</p>
                          <p className="font-medium text-gray-700">{worker.location}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Disponibilità</p>
                          <p className="font-medium text-airstaff-blue">{worker.availability}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">CCNL</p>
                          <p className="font-medium text-gray-700 text-sm">{worker.ccnl}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Contratto</p>
                          <p className="font-medium text-gray-700">{worker.contratto}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <a
                    href="https://app.airstaff.it/"
                    target="_self"
                    className="text-airstaff-pink hover:text-airstaff-blue font-semibold text-lg transition-colors"
                  >
                    Accedi per vedere più risultati...
                  </a>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <p className="text-gray-700 text-lg">
                  Ops ... non abbiamo trovato nulla che corrisponda alla ricerca. 
                  Nessun problema,{' '}
                  <a
                    href="https://airstaff.it/apri-posizione"
                    target="_self"
                    className="text-airstaff-pink hover:text-airstaff-blue font-semibold transition-colors"
                  >
                    apri gratuitamente la posizione
                  </a>
                  {' '}su AirStaff e le nostre APL ti contatteranno per proporti un profilo adeguato.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkerSearchBar;
