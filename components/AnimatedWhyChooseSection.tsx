'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface AnimatedWhyChooseSectionProps {
  locationName: string;
}

const features = [
  {
    number: '40+',
    label: 'Years of Experience',
    description: 'Decades of creating unforgettable events in Wisconsin',
    image: '/assets/images/p-6.jpg',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    number: '7x',
    label: "Couple's Choice Award",
    description: 'Recognized excellence in wedding entertainment',
    image: '/assets/images/p-7.jpg',
    gradient: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    number: '100%',
    label: 'Dedicated',
    description: 'Committed to making your event perfect',
    image: '/assets/images/p-8.jpg',
    gradient: 'from-pink-500/20 to-red-500/20',
  },
];

export default function AnimatedWhyChooseSection({ locationName }: AnimatedWhyChooseSectionProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [countedNumbers, setCountedNumbers] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the item animations
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
                
                // Start counting animation for numbers
                if (features[index].number.includes('+')) {
                  const target = parseInt(features[index].number);
                  animateCount(index, 0, target, 2000);
                } else if (features[index].number === '100%') {
                  animateCount(index, 0, 100, 2000);
                }
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
  }, []);

  const animateCount = (index: number, start: number, end: number, duration: number) => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeOutQuart);
      
      setCountedNumbers((prev) => {
        const newCounts = [...prev];
        newCounts[index] = current;
        return newCounts;
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <section ref={sectionRef} className="py-12 bg-dark-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">WHY CHOOSE US</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Why Choose Record Entertainment in {locationName}?
          </h2>
        </div>

        {/* Desktop: Large feature cards with side-by-side layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              } transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Main card */}
              <div className="relative h-full glass-card rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500">
                {/* Background image with parallax */}
                <div className="absolute inset-0">
                  <Image
                    src={feature.image}
                    alt={feature.label}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="relative p-8 flex flex-col items-center text-center h-full min-h-[500px]">
                  {/* Centered content */}
                  <div className="flex-1 flex flex-col items-center justify-center">
                    {/* Number with counting animation */}
                    <div className="mb-4">
                      {feature.number.includes('+') ? (
                        <div className="text-7xl font-bold text-primary-500 mb-2">
                          {countedNumbers[index] || 0}+
                        </div>
                      ) : feature.number === '100%' ? (
                        <div className="text-7xl font-bold text-primary-500 mb-2">
                          {countedNumbers[index] || 0}%
                        </div>
                      ) : (
                        <div className="text-7xl font-bold text-primary-500 mb-2">
                          {feature.number}
                        </div>
                      )}
                    </div>

                    {/* Label */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                      {feature.label}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative line at bottom */}
                  <div className="w-20 h-1 bg-primary-500 mt-auto transform group-hover:scale-x-150 transition-transform duration-300"></div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet: Medium cards */}
        <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl overflow-hidden ${
                visibleItems[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } transition-all duration-500 ease-out hover:scale-105`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.label}
                  fill
                  className="object-cover opacity-30"
                  sizes="(max-width: 1024px) 33vw, 25vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`}></div>
              </div>
              <div className="p-6 text-center">
                <div className="text-5xl font-bold text-primary-500 mb-2">
                  {feature.number.includes('+') ? `${countedNumbers[index] || 0}+` : 
                   feature.number === '100%' ? `${countedNumbers[index] || 0}%` : feature.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.label}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical stack with slide-in */}
        <div className="md:hidden space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl overflow-hidden ${
                visibleItems[index]
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              } transition-all duration-500 ease-out`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center p-6">
                <div className="flex-1">
                  <div className="text-4xl font-bold text-primary-500 mb-1">
                    {feature.number.includes('+') ? `${countedNumbers[index] || 0}+` : 
                     feature.number === '100%' ? `${countedNumbers[index] || 0}%` : feature.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{feature.label}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

