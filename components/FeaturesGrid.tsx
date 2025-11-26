'use client';

import { useEffect, useRef, useState } from 'react';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesGridProps {
  features: Feature[];
  sectionTitle: string;
  bgColor?: string;
}

export default function FeaturesGrid({ features, sectionTitle, bgColor = 'bg-dark-500' }: FeaturesGridProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [features]);

  return (
    <section ref={sectionRef} className={`py-8 sm:py-16 ${bgColor} relative overflow-hidden`}>
      {/* Hash/grid background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-white">
            {sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const isLarge = index === 1;
            return (
              <div
                key={index}
                className={`group relative ${
                  isLarge ? 'md:row-span-2 md:col-span-1' : ''
                } ${
                  visibleItems[index]
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`glass-strong rounded-xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 h-full flex flex-col justify-between hover:scale-105 transition-all duration-500 ${
                  isLarge ? 'min-h-0 md:min-h-[400px]' : 'min-h-0 md:min-h-[300px]'
                }`}>
                  <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-16 sm:h-16 bg-primary-500 rounded-full flex items-center justify-center text-sm sm:text-2xl font-bold text-black shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="mt-1 sm:mt-4">
                    <h3 className={`font-bold text-white mb-1.5 sm:mb-4 group-hover:text-primary-500 transition-colors duration-300 ${
                      isLarge ? 'text-base sm:text-3xl' : 'text-base sm:text-2xl'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-gray-300 leading-relaxed ${
                      isLarge ? 'text-xs sm:text-lg' : 'text-xs sm:text-base'
                    }`}>
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-8 pt-3 sm:pt-6 border-t border-primary-500/30">
                    <div className="w-full h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 to-transparent transform group-hover:scale-x-110 transition-transform duration-300 origin-left"></div>
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

