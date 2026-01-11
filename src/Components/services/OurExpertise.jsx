"use client";
import React, { useEffect, useState } from 'react';
import { ShoppingCart, Truck, Sprout, CreditCard } from 'lucide-react';

function OurExpertise() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Quality African Goods",
      desc: "Online cataloging of African commodities and natural resources.",
      icon: <ShoppingCart className="w-8 h-8 text-green-900" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      features: ["Catalog management", "Real-time tracking"]
    },
    {
      id: 2,
      title: "Supply Chain",
      desc: "Complete supply chain design from farmgate to final buyer.",
      icon: <Truck className="w-8 h-8 text-green-900" />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400",
      features: ["Logistics optimization", "Quality control"]
    },
    {
      id: 3,
      title: "Agri-Technology",
      desc: "Smart agriculture practices through digital tools and advisory.",
      icon: <Sprout className="w-8 h-8 text-green-900" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      features: ["IoT deployment", "Precision farming"]
    },
    {
      id: 4,
      title: "Secure Payments",
      desc: "Multi-currency gateway with blockchain-backed validation.",
      icon: <CreditCard className="w-8 h-8 text-green-900" />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
      features: ["Blockchain safety", "Fraud protection"]
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className={`inline-block px-3 py-1 text-xs font-bold text-emerald-700 bg-emerald-100 rounded-full mb-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            OUR EXPERTISE
          </span>
          <h2 className={`text-2xl sm:text-3xl font-bold text-gray-800 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Core Business Services
          </h2>
        </div>

        {/* Cards Grid - Reduced max-width for the whole container */}
        <div className="max-w-5xl mx-auto flex gap-4 overflow-x-auto pb-6 snap-x lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative bg-white border-2 border-transparent rounded-2xl shadow-sm overflow-hidden transition-all duration-500 
              hover:border-green-800 hover:shadow-xl hover:-translate-y-1 snap-start min-w-[280px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${400 + (index * 100)}ms` }}
            >
              
              {/* Image Container - Reduced height to h-40 */}
              <div className="relative h-44 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={service.title} 
                />
                
                {/* Overlay with Garden Colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-orange-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-lg transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content - Reduced padding */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 mb-4 line-clamp-2">
                  {service.desc}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-600">
                      <div className="w-4 h-4 rounded-full bg-green-600 flex items-center justify-center mr-2 text-white text-[8px]">✓</div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2.5 bg-green-900 text-white rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-md active:scale-95">
                  ➜ Let's Talk
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurExpertise;