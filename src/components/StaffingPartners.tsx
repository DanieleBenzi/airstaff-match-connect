
import React from 'react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StaffingPartners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  // Example staffing partners logos - in a real scenario these would be actual partner logos
  const partners = [
    { name: 'Partner 1', logo: 'placeholder.svg' },
    { name: 'Partner 2', logo: 'placeholder.svg' },
    { name: 'Partner 3', logo: 'placeholder.svg' },
    { name: 'Partner 4', logo: 'placeholder.svg' },
    { name: 'Partner 5', logo: 'placeholder.svg' },
    { name: 'Partner 6', logo: 'placeholder.svg' },
    { name: 'Partner 7', logo: 'placeholder.svg' },
    { name: 'Partner 8', logo: 'placeholder.svg' },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Le staffing partner</h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            AirStaff ti mette in contatto con le principali agenzie per il lavoro in Italia.
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto py-4 px-10 scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partners.map((partner, index) => (
              <div key={index} className="flex-none">
                <div className="w-40 h-24 bg-white shadow-md rounded-lg flex items-center justify-center p-4">
                  <img 
                    src={`/${partner.logo}`} 
                    alt={`${partner.name} logo`} 
                    className="max-h-full max-w-full"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StaffingPartners;
