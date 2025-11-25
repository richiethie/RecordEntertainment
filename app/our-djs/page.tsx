'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';

interface DJ {
  name: string;
  title: string;
  description: string;
  image: string;
}

const djs: DJ[] = [
  {
    name: 'Kevin Flood',
    title: 'Owner/President - The Professional Perfectionist',
    description: 'This DJ personality is highly organized, detail-oriented, and focused on providing a flawless experience.',
    image: '/assets/images/Kevin.jpg',
  },
  {
    name: 'Josh Guy',
    title: 'The Versatile Maestro',
    description: 'DJ personality that is great for adapting their style to cater to different musical preferences.',
    image: '/assets/images/Josh_Guy.jpg',
  },
  {
    name: 'Johnny Ransom',
    title: 'A Smooth Operator',
    description: 'Their music selection is smooth and seamless, creating a seamless flow between songs and keeping the guests entertained with their polished style.',
    image: '/assets/images/Johnny_Ransom.jpg',
  },
  {
    name: 'Ike Holzmann',
    title: 'The Smooth Operator',
    description: 'This DJ personality is suave, composed, and exudes an air of sophistication with extensive knowledge in the events world.',
    image: '/assets/images/Ike_Holzmann.jpg',
  },
  {
    name: 'Santana Klepp',
    title: 'The Trendsetter',
    description: 'This DJ personality stays up to date with the latest music trends and knows how to create a modern and fresh atmosphere at any event.',
    image: '/assets/images/Santana_Klepp.jpg',
  },
  {
    name: 'Kerry Longrie',
    title: 'The Sentimental Specialist',
    description: 'This DJ personality understands the emotional significance of weddings with a knack for playing the perfect songs during key moments.',
    image: '/assets/images/Kerry_Longrie.jpg',
  },
  {
    name: 'Alan Martinez',
    title: 'The Energetic Entertainer',
    description: 'They are charismatic, outgoing, and excel at engaging with the crowd. They mix high energy tracks and use their microphone skills to pump up guests.',
    image: '/assets/images/Alan_Martinez.jpg',
  },
  {
    name: 'Andy Mueller',
    title: 'Another Fun and Quirky DJ',
    description: 'Years of experience with a knack for surprising the crowd and creating a memorable and entertaining experience.',
    image: '/assets/images/Andy_Mueller.jpg',
  },
  {
    name: 'Tom Otte',
    title: 'The Crowd-Pleaser',
    description: 'This personality thrives on interaction with the crowd. They actively engage with the guests, taking requests, and encouraging everyone to participate in fun activities.',
    image: '/assets/images/Tom_Otte.jpg',
  },
  {
    name: 'Paul Hammes',
    title: 'The Smooth, Sentimental Specialist',
    description: 'Above all, I care about keeping everything running smoothly and having the timing of the night planned out from the start, but I do get a funky feeling when the perfect part of a song happens during a memorable moment. My favorite party starter artists are Prince and Bowie, but I know the club types that do it right are Nicki Minaj and Pitbull. Paul is also a bartender and performer, so he has a thorough understanding of which elements of a party mix well to create the perfect mood from start to finish.',
    image: '/assets/images/Paul_Hammes.jpg',
  },
  {
    name: 'Cullen King',
    title: 'The Energetic Entertainer',
    description: 'This DJ personality is all about creating a vibrant and lively atmosphere at weddings and events.',
    image: '/assets/images/djs.png',
  },
  {
    name: 'Jimmy Miller',
    title: 'The Fun and Quirky DJ',
    description: 'This personality brings a sense of fun and playfulness to events. They are known for their unique style and creative mix.',
    image: '/assets/images/djs.png',
  },
  {
    name: 'Alex Tryon',
    title: 'A Trendsetter',
    description: 'This DJ is always on the lookout for new tracks, remixes, and mashups, ensuring their sets are cutting-edge and appealing to the younger crowd.',
    image: '/assets/images/Alex_Tryon.jpg',
  },
];

export default function OurDJs() {
  const [visibleDJs, setVisibleDJs] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            djs.forEach((_, index) => {
              setTimeout(() => {
                setVisibleDJs((prev) => {
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
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-x-hidden min-h-[30vh] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <VideoBackgroundRounded />
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full text-center">
          <div className="mb-4 sm:mb-8">
            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 glass-strong rounded-full">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-500 font-semibold">Meet The Team</p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-white to-primary-500 bg-clip-text text-transparent">
              Our DJs
            </span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Meet the talented professionals who make your events unforgettable
          </p>
        </div>
      </section>

      {/* DJs Section - Creative Alternating Layout */}
      <section ref={sectionRef} className="py-12 sm:py-20 lg:py-32 bg-dark relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
          <div className="space-y-8 lg:space-y-16">
            {djs.map((dj, index) => {
              const isVisible = visibleDJs[index] || false;
              const isLeft = index % 2 === 0; // 0, 2, 4 = left; 1, 3, 5 = right
              
              return (
                <div
                  key={index}
                  className={`flex flex-row items-stretch gap-2 sm:gap-4 lg:gap-12 ${
                    isLeft ? '' : 'flex-row-reverse'
                  } ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : isLeft
                      ? 'opacity-0 -translate-x-12'
                      : 'opacity-0 translate-x-12'
                  } transition-all duration-1000 ease-out`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Image Side - Sharp Edges */}
                  <div className="w-2/5 sm:w-1/3 lg:w-1/3">
                    <div className="group relative h-48 sm:h-64 lg:h-[500px] overflow-hidden">
                      <Image
                        src={dj.image}
                        alt={dj.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 33vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                      
                      {/* Number badge */}
                      <div className={`absolute ${
                        isLeft ? 'top-2 left-2 sm:top-4 sm:left-4' : 'top-2 right-2 sm:top-4 sm:right-4'
                      }`}>
                        <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 bg-primary-500/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-primary-500/50">
                          <span className="text-xs sm:text-lg lg:text-3xl font-bold text-primary-500">{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Diagonal accent line */}
                      <div className={`absolute ${
                        isLeft ? 'bottom-0 left-0' : 'bottom-0 right-0'
                      } w-20 sm:w-32 lg:w-40 h-0.5 sm:h-1 bg-primary-500 transform ${isLeft ? 'skew-x-12' : '-skew-x-12'}`}></div>
                    </div>
                  </div>

                  {/* Content Side - Sharp Edges */}
                  <div className="w-3/5 sm:w-2/3 lg:w-2/3 flex flex-col justify-center">
                    <div className="glass-strong p-3 sm:p-6 lg:p-10 relative overflow-hidden h-full">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `radial-gradient(circle, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
                          backgroundSize: '20px 20px'
                        }}></div>
                      </div>
                      
                      <div className="relative z-10">
                        {/* Title section */}
                        <div className="mb-2 sm:mb-4 lg:mb-6">
                          <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-primary-500 mb-1 sm:mb-2 lg:mb-3"></div>
                          <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider text-primary-500 font-semibold mb-1 sm:mb-2">
                            DJ Profile
                          </p>
                        </div>
                        
                        <h2 className="text-base sm:text-2xl lg:text-5xl font-bold mb-2 sm:mb-4 lg:mb-6 text-white group-hover:text-primary-500 transition-colors duration-300">
                          {dj.name}
                        </h2>
                        
                        <p className="text-xs sm:text-base lg:text-2xl text-primary-500 font-semibold mb-2 sm:mb-4 lg:mb-8">
                          {dj.title}
                        </p>
                        
                        <p className="text-[10px] sm:text-sm lg:text-lg text-gray-300 leading-relaxed mb-2 sm:mb-4 lg:mb-6 line-clamp-3 sm:line-clamp-none">
                          {dj.description}
                        </p>
                        
                        {/* Decorative elements */}
                        <div className="flex items-center gap-1.5 sm:gap-3">
                          <div className="w-6 sm:w-10 lg:w-12 h-0.5 bg-primary-500"></div>
                          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-primary-500 rounded-full"></div>
                          <div className="w-6 sm:w-10 lg:w-12 h-0.5 bg-primary-500"></div>
                        </div>
                      </div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Note - Enhanced */}
      <section className="py-12 sm:py-20 lg:py-24 bg-dark-200 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center relative z-10">
          <div className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
              More DJs Coming Soon!
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              All of our DJs undergo extensive training with numerous veteran performers to ensure they'll deliver only the very best when it's time to go solo!
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <div className="w-24 h-1 bg-primary-500"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
