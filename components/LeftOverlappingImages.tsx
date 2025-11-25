'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface LeftOverlappingImagesProps {
  primaryImage: string;
  secondaryImage?: string;
  primaryAlt: string;
  secondaryAlt?: string;
}

export default function LeftOverlappingImages({
  primaryImage,
  secondaryImage,
  primaryAlt,
  secondaryAlt,
}: LeftOverlappingImagesProps) {
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
        
        // Enhanced scroll-based motion effects (mirrored)
        // Different speeds and directions for parallax
        const primarySpeed = 0.4;
        const secondarySpeed = 0.25;
        const overlaySpeed = 0.15;
        
        // Vertical movement
        const translateY1 = (progress - 0.5) * containerHeight * primarySpeed;
        const translateY2 = (progress - 0.5) * containerHeight * secondarySpeed;
        const translateYOverlay = (progress - 0.5) * containerHeight * overlaySpeed;
        
        // Horizontal movement (reversed for mirror effect)
        const translateX1 = (progress - 0.5) * -30;
        const translateX2 = (progress - 0.5) * 20;
        
        // Rotation effect (reversed)
        const rotate1 = (progress - 0.5) * -3;
        const rotate2 = (progress - 0.5) * 2;
        
        // Scale effect
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
    <div ref={containerRef} className="relative w-full h-[550px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* White Overlay Shape - Bottom Left (behind images) */}
      <div 
        ref={overlayRef}
        className={`absolute bottom-8 left-2 sm:bottom-10 sm:left-6 lg:bottom-16 lg:left-8 w-40 h-[240px] sm:w-64 sm:h-[320px] lg:w-80 lg:h-[420px] bg-white/10 z-0 shadow-2xl backdrop-blur-sm will-change-transform transition-all duration-1000 ${
          hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      ></div>
      
      {/* Secondary Image (behind, top left) */}
      {secondaryImage && (
        <div
          ref={secondaryRef}
          className={`absolute top-0 left-2 md:left-4 lg:left-12 w-[360px] h-[280px] md:w-[420px] md:h-[320px] lg:w-[520px] lg:h-[380px] overflow-hidden z-10 will-change-transform shadow-xl transition-all duration-1000 ease-out ${
            hasAnimated ? 'translate-x-0 translate-y-0 opacity-100' : '-translate-x-20 -translate-y-20 opacity-0'
          }`}
        >
          <Image
            src={secondaryImage}
            alt={secondaryAlt || ''}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 220px, (max-width: 768px) 360px, (max-width: 1024px) 420px, 520px"
          />
        </div>
      )}
      
      {/* Primary Image (bottom right, overlapping) */}
      <div
        ref={primaryRef}
        className={`absolute bottom-0 right-0 w-[280px] h-[320px] md:w-[320px] md:h-[380px] lg:w-[380px] lg:h-[480px] overflow-hidden z-20 will-change-transform shadow-2xl transition-all duration-1000 ease-out ${
          hasAnimated ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-20 translate-y-20 opacity-0'
        }`}
        style={{ transitionDelay: hasAnimated ? '0ms' : '200ms' }}
      >
        <Image
          src={primaryImage}
          alt={primaryAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
        />
      </div>
    </div>
  );
}

