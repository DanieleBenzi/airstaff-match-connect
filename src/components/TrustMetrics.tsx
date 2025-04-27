
import React from 'react';

const TrustMetrics = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-center mb-12">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex justify-center">
              <img
                src={`https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&q=80`}
                alt={`Agency Logo ${index}`}
                className="h-12 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-center text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold">12.500</span> profili disponibili
          </div>
          <span className="hidden md:inline text-gray-300">•</span>
          <div className="flex items-center gap-2">
            <span className="font-semibold">18</span> agenzie partner
          </div>
          <span className="hidden md:inline text-gray-300">•</span>
          <div className="flex items-center gap-2">
            &lt;6 min per trovare un profilo
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
