'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryMasonryProps {
  images: GalleryImage[];
  sectionTitle: string;
  sectionSubtitle?: string;
  bgColor?: string;
}

export default function GalleryMasonry({ images, sectionTitle, sectionSubtitle, bgColor = 'bg-dark-500' }: GalleryMasonryProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            images.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 100);
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
  }, [images]);

  return (
    <section ref={sectionRef} className={`py-16 ${bgColor} relative overflow-hidden`}>
      {/* Hash/grid background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">OUR WORK</p>
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {sectionSubtitle}
            </p>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-3 sm:space-y-6">
          {/* First row */}
          <div className="flex sm:grid sm:grid-cols-12 gap-2 sm:gap-4">
            {images.slice(0, 2).map((image, index) => (
              <div
                key={index}
                className={`relative ${index === 0 ? 'w-[65%] sm:col-span-4' : 'w-[35%] sm:col-span-8'} h-32 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden group ${
                  visibleItems[index]
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                } transition-all duration-500 ease-out`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-4 h-4 sm:w-8 sm:h-8 border-2 border-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Second row - reversed order */}
          {images.length > 2 && (
            <div className="flex sm:grid sm:grid-cols-12 gap-2 sm:gap-4">
              {images.slice(2, 4).reverse().map((image, index) => (
                <div
                  key={index + 2}
                  className={`relative ${index === 0 ? 'w-[35%] sm:col-span-8' : 'w-[65%] sm:col-span-4'} h-32 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden group ${
                    visibleItems[index + 2]
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  } transition-all duration-500 ease-out`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-4 h-4 sm:w-8 sm:h-8 border-2 border-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-full h-80 rounded-2xl overflow-hidden group ${
                visibleItems[index]
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              } transition-all duration-500 ease-out`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

