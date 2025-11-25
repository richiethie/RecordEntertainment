'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface OverlappingImagesMobileProps {
  primaryImage: string;
  secondaryImage?: string;
  primaryAlt: string;
  secondaryAlt?: string;
}

export default function OverlappingImagesMobile({
  primaryImage,
  secondaryImage,
  primaryAlt,
  secondaryAlt,
}: OverlappingImagesMobileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
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
  }, [hasAnimated]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !hasAnimated) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      
      if (containerTop < windowHeight && containerTop + containerHeight > 0) {
        const scrollStart = windowHeight;
        const scrollEnd = -containerHeight;
        const scrollRange = scrollStart - scrollEnd;
        const currentScroll = containerTop;
        const progress = Math.max(0, Math.min(1, (scrollStart - currentScroll) / scrollRange));
        
        // Enhanced scroll-based motion effects
        const primarySpeed = 0.4;
        const secondarySpeed = 0.25;
        const overlaySpeed = 0.15;
        
        const translateY1 = (progress - 0.5) * containerHeight * primarySpeed;
        const translateY2 = (progress - 0.5) * containerHeight * secondarySpeed;
        const translateYOverlay = (progress - 0.5) * containerHeight * overlaySpeed;
        
        const translateX1 = (progress - 0.5) * 30;
        const translateX2 = (progress - 0.5) * -20;
        
        const rotate1 = (progress - 0.5) * 3;
        const rotate2 = (progress - 0.5) * -2;
        
        const scale1 = 1 + (progress - 0.5) * 0.05;
        const scale2 = 1 + (progress - 0.5) * 0.03;
        
        if (primaryRef.current) {
          primaryRef.current.style.transform = `translate(${translateX1}px, ${translateY1}px) rotate(${rotate1}deg) scale(${scale1})`;
        }
        
        if (secondaryRef.current) {
          secondaryRef.current.style.transform = `translate(${translateX2}px, ${translateY2}px) rotate(${rotate2}deg) scale(${scale2})`;
        }
        
        if (overlayRef.current) {
          overlayRef.current.style.transform = `translateY(${translateYOverlay}px)`;
        }
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className="relative w-full h-[400px] overflow-hidden">
      {/* White Overlay Shape - Top Right (behind images) */}
      <div 
        ref={overlayRef}
        className={`absolute top-4 left-12 w-40 h-[240px] bg-white/10 z-0 shadow-2xl backdrop-blur-sm will-change-transform transition-all duration-1000 ${
          hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      ></div>
      
      {/* Secondary Image (behind, bottom right) - positioned to overlap with primary */}
      {secondaryImage && (
        <div
          ref={secondaryRef}
          className={`absolute bottom-0 right-16 translate-x-[0px] w-[220px] h-[200px] overflow-hidden z-10 will-change-transform shadow-xl transition-all duration-1000 ease-out ${
            hasAnimated ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-10 translate-y-10 opacity-0'
          }`}
        >
          <Image
            src={secondaryImage}
            alt={secondaryAlt || ''}
            fill
            className="object-cover"
            sizes="220px"
          />
        </div>
      )}
      
      {/* Primary Image (top left, overlapping) - positioned to overlap with secondary */}
      <div
        ref={primaryRef}
        className={`absolute top-0 right-12 -translate-x-[20px] w-[200px] h-[240px] overflow-hidden z-20 will-change-transform shadow-2xl transition-all duration-1000 ease-out ${
          hasAnimated ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-x-10 -translate-y-10 opacity-0'
        }`}
        style={{ transitionDelay: hasAnimated ? '0ms' : '200ms' }}
      >
        <Image
          src={primaryImage}
          alt={primaryAlt}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
    </div>
  );
}

