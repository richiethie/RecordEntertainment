'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AnimatedServicesSectionProps {
  locationName: string;
}

const services = [
  {
    title: 'Weddings',
    description: 'Professional wedding DJ services to make your special day unforgettable.',
    image: '/assets/images/wedding1.jpg',
    href: '/weddings',
    color: 'from-pink-500/20 to-purple-500/20',
  },
  {
    title: 'Corporate Events',
    description: 'Elevate your corporate events with professional DJ services.',
    image: '/assets/images/corporate1.jpg',
    href: '/corporate-events',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'School Dances',
    description: 'Age-appropriate entertainment for school events and dances.',
    image: '/assets/images/school1.jpg',
    href: '/school-dances',
    color: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    title: 'Club DJ',
    description: 'Dynamic DJ services for clubs and nightlife venues.',
    image: '/assets/images/club1.jpg',
    href: '/club-dj',
    color: 'from-green-500/20 to-emerald-500/20',
  },
];

export default function AnimatedServicesSection({ locationName }: AnimatedServicesSectionProps) {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the card animations
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
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-dark relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-500/5 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Event Services in {locationName}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive DJ and entertainment services for all types of events in {locationName} and surrounding areas.
          </p>
        </div>

        {/* Desktop: Large featured cards with motion */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group relative overflow-hidden rounded-3xl ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              } transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image with parallax effect */}
              <div className="relative h-96 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 inline-flex items-center text-primary-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          ))}
        </div>

        {/* Tablet: Medium cards */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group glass-card rounded-2xl overflow-hidden ${
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
            </Link>
          ))}
        </div>

        {/* Mobile: Compact cards with scroll animation */}
        <div className="md:hidden space-y-6">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className={`block glass-card rounded-2xl overflow-hidden ${
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
            </Link>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="hidden lg:block absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden lg:block absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}

