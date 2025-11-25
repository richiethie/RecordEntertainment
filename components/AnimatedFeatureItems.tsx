'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedFeatureItems() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const items = [
    { title: 'Award Winning' },
    { title: 'Established Team' },
    { title: 'Innovative' },
    { title: 'Professional' },
  ];

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 text-center mt-12">
      {items.map((item, index) => (
        <div
          key={index}
          className={`transition-opacity duration-[4000ms] ease-out ${
            isVisible
              ? 'opacity-100'
              : 'opacity-0'
          }`}
          style={{
            transitionDelay: `${index * 600}ms`,
          }}
        >
          <div className="glass-strong rounded-full px-4 md:px-8 py-2 inline-block">
            <h3 className="text-md md:text-lg font-semibold text-white tracking-tight">
              {item.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

