'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ScrollImageProps {
  src: string;
  alt: string;
  sizes?: string;
}

export default function ScrollImage({ src, alt, sizes = '(max-width: 1024px) 100vw, 50vw' }: ScrollImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      
      // Calculate scroll progress when container is in viewport
      if (containerTop < windowHeight && containerTop + containerHeight > 0) {
        // Calculate how far through the viewport the container is
        const scrollStart = windowHeight;
        const scrollEnd = -containerHeight;
        const scrollRange = scrollStart - scrollEnd;
        const currentScroll = containerTop;
        
        // Calculate progress (0 when at top of viewport, 1 when at bottom)
        const progress = Math.max(0, Math.min(1, (scrollStart - currentScroll) / scrollRange));
        
        // Apply parallax effect - image moves slower than scroll
        // Using a multiplier to create the parallax effect
        const parallaxSpeed = 0.3; // Adjust this to change the effect intensity
        const translateY = (progress - 0.5) * containerHeight * parallaxSpeed;
        setTransform(translateY);
      }
    };

    // Use requestAnimationFrame for smoother performance
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
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-96 rounded-lg overflow-hidden">
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{ 
          transform: `translateY(${transform}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
        />
      </div>
    </div>
  );
}

