import React from 'react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const StaffingPartners: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const {
        current
      } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  // Actual staffing partners with their logos
  const partners = [{
    name: 'Relizont',
    logo: '/lovable-uploads/3710a5e6-2cc0-410c-ba8c-fb5c26cb5532.png'
  }, {
    name: 'Direzione Lavoro',
    logo: '/lovable-uploads/929af065-7dc5-4e09-9bab-f5d7fa5a9c29.png'
  }, {
    name: 'Only Job',
    logo: '/lovable-uploads/e629ccca-d93a-461e-9a59-71836fc3189d.png'
  }];
  return <section className="px-6 md:px-12 lg:px-24 bg-gray-50 py-[30px]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Le staffing partner</h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Le agenzie per il lavoro che credono in noi:
          </p>
        </div>

        <div className="relative">
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2" aria-label="Scroll left">
            <ChevronLeft size={24} />
          </button>
          
          <div ref={scrollRef} className="flex gap-8 overflow-x-auto py-4 px-10 scroll-smooth scrollbar-hide" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            {partners.map((partner, index) => <div key={index} className="flex-none">
                <div className="w-60 h-32 bg-white shadow-md rounded-lg flex items-center justify-center p-6">
                  <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-full max-w-full object-contain" />
                </div>
              </div>)}
          </div>
          
          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2" aria-label="Scroll right">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>;
};
export default StaffingPartners;