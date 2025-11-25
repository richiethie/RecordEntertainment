'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  image: string;
}

interface AnimatedClubServicesProps {
  services: Service[];
}

export default function AnimatedClubServices({ services }: AnimatedClubServicesProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
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
    <section ref={sectionRef} className="py-12 bg-dark relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-500/5 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Club DJ Services</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Whether it&apos;s for special events or a weekend night of non-stop dancing, trust us to elevate your Club DJ needs.
          </p>
        </div>

        {/* Desktop: Large cards with staggered animation */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              } transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass-card rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 h-full">
                {/* Image with parallax effect */}
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet: Medium cards */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl overflow-hidden ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } transition-all duration-500 ease-out hover:scale-105`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Compact cards with slide-in */}
        <div className="md:hidden space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl overflow-hidden ${
                visibleCards[index]
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              } transition-all duration-500 ease-out`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-200 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

