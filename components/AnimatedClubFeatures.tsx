'use client';

import { useEffect, useRef, useState } from 'react';

interface Feature {
  title: string;
  description: string;
}

interface AnimatedClubFeaturesProps {
  features: Feature[];
}

export default function AnimatedClubFeatures({ features }: AnimatedClubFeaturesProps) {
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
              }, index * 200);
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
    <section ref={sectionRef} className="py-12 bg-dark-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Why Clubs Choose Record Entertainment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 text-center ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              } transition-all duration-700 ease-out hover:scale-105`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
              {/* Decorative line */}
              <div className="w-20 h-1 bg-primary-500 mt-6 mx-auto transform group-hover:scale-x-150 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

