'use client';

import { useEffect, useRef, useState } from 'react';

interface CountingNumberProps {
  target: number;
  duration?: number;
  suffix?: string;
}

export default function CountingNumber({ target, duration = 2000, suffix = '+' }: CountingNumberProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    updateCount();
  };

  return (
    <div ref={elementRef} className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-primary-500 mb-2">
      {count}{suffix}
    </div>
  );
}

