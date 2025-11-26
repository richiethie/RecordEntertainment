'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServicesDiagonalProps {
  services: Service[];
  sectionTitle: string;
  sectionSubtitle?: string;
  bgColor?: string;
}

export default function ServicesDiagonal({ services, sectionTitle, sectionSubtitle, bgColor = 'bg-dark-500' }: ServicesDiagonalProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [services]);

  return (
    <section ref={sectionRef} className={`py-16 ${bgColor} relative overflow-hidden`}>
      {/* Hash/grid background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">WHAT WE OFFER</p>
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {sectionSubtitle}
            </p>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4 sm:space-y-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid grid-cols-2 items-stretch gap-3 sm:gap-8 ${
                  visibleItems[index]
                    ? 'opacity-100 translate-x-0'
                    : isEven
                    ? 'opacity-0 -translate-x-12'
                    : 'opacity-0 translate-x-12'
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image Side */}
                <div 
                  className={`w-full mt-4 ${!isEven ? 'order-2' : 'order-1'}`}
                >
                  <div className={`relative w-full h-full min-h-[128px] sm:min-h-[256px] rounded-xl sm:rounded-2xl overflow-hidden group ${
                    isEven 
                      ? 'w-[180%] -mr-[80%] sm:w-full sm:mr-0' 
                      : 'w-[180%] -ml-[80%] sm:w-full sm:ml-0'
                  }`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className={`absolute ${isEven ? 'bottom-0 left-0' : 'top-0 right-0'} w-32 h-1 bg-primary-500 transform ${isEven ? 'skew-x-12' : '-skew-x-12'}`}></div>
                  </div>
                </div>

                {/* Content Side */}
                <div 
                  className={`w-full mb-4 flex flex-col ${!isEven ? 'order-1' : 'order-2'}`}
                >
                  <div className="glass-card rounded-xl sm:rounded-3xl p-4 sm:p-8 hover:scale-105 transition-transform duration-500 relative overflow-hidden h-full flex flex-col justify-center">
                    <div className="absolute inset-0 bg-primary-900/10 pointer-events-none"></div>
                    <div className="relative z-10">
                      <h3 className="text-base sm:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-primary-500 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-3 sm:mt-6 flex items-center gap-2 sm:gap-3">
                        <div className="w-6 sm:w-12 h-0.5 sm:h-1 bg-primary-500"></div>
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const extraSpacing = index === 1 ? 'mb-32' : '';
            return (
              <div
                key={index}
                className={`flex items-center gap-12 mb-24 ${extraSpacing} flex-row ${
                  visibleItems[index]
                    ? 'opacity-100 translate-x-0'
                    : isEven
                    ? 'opacity-0 -translate-x-12'
                    : 'opacity-0 translate-x-12'
                } transition-all duration-700 ease-out`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  marginTop: isEven ? '0' : '4rem'
                }}
              >
                {/* Image Side */}
                <div className={`flex-shrink-0 w-1/2 ${isEven ? 'order-1' : 'order-2'}`}>
                  <div className="relative w-full h-[500px] rounded-3xl overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className={`absolute ${isEven ? 'bottom-0 left-0' : 'top-0 right-0'} w-32 h-1 bg-primary-500 transform ${isEven ? 'skew-x-12' : '-skew-x-12'}`}></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`flex-1 ${isEven ? 'order-2' : 'order-1'}`}>
                  <div className="glass-strong rounded-3xl p-10 hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary-900/10 pointer-events-none"></div>
                    <div className="relative z-10">
                      <h3 className="text-5xl font-bold text-white mb-6 group-hover:text-primary-500 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-1 bg-primary-500"></div>
                        <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

