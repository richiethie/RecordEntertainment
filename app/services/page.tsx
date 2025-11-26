'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';

export default function Services() {
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean[] }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const standardServices = [
    {
      title: 'Ceremony Music & Sound',
      description: 'DJ to provide mic for officiant, readers, musicians as necessary; will run sound and start music thirty minutes prior to ceremony start time, as your guests are being seated. After ceremony, DJ transitions to cocktail music and is available for announcements, etc.',
      image: '/assets/images/p-1.jpg',
    },
    {
      title: 'Cocktail Music',
      description: 'Music for you and your guests to enjoy before your dinner begins. DJ will be available to make any necessary announcements during this time.',
      image: '/assets/images/cocktailhour.jpg',
    },
    {
      title: 'Dinner Music',
      description: 'You and your guests will be tapping their toes and moving in their seats because your DJ knows how to build the energy in the room all the way to the dance floor! DJ will facilitate introductions, speeches, and any other special happenings that you decide upon ahead of time, then seamlessly shift into dance mode to keep the party going all night long.',
      image: '/assets/images/dinnermusic.webp',
    },
    {
      title: 'Classic Package - Four Hours of Dancing',
      description: 'When the dance portion of your party begins, Record Entertainment leads the way - providing ALL THE MUSIC and ALL THE FUN! Professionally trained DJ kicks off your grand march, transitions into specialty dances, and reads the room to keep you and your guests on the dance floor. Everyone will be talking about the fun they had at your wedding for years to come! Pre-wedding consultation, travel, standard light show, and setup included.',
      image: '/assets/images/p-4.jpeg',
    },
  ];

  const auxiliaryServices = [
    {
      title: 'Photo Booth',
      description: '3 hours of our photo booth complete with props, unlimited photos for your guests, an attendant to operate the booth, and a book of all of the photos put together for the wedding couple. Travel & setup included.',
      image: '/assets/images/p-5.jpg',
    },
    {
      title: 'Uplights',
      description: 'Colorful accent lighting to highlight areas at your reception. Color(s), placement, and number of lights can be determined closer to the wedding.',
      image: '/assets/images/p-6.jpg',
    },
    {
      title: 'Monogram Light',
      description: 'A beautiful, custom designed monogram with your names, initials, and date; projected where you choose - above your head table, your dance floor, you name it!',
      image: '/assets/images/p-8.jpg',
    },
    {
      title: 'MultiMedia Memories',
      description: 'Video creation of 3 vignettes of your photos: 25 + 25 photos of each partner individually, and 25 photos of the couple together - edited to music selections of your choice and displayed on our projector and screen at your reception.',
      image: '/assets/images/p-7.jpg',
    },
  ];

  const additionalServices = [
    {
      title: 'Karaoke',
      description: 'Unleash your inner superstar and rock the night away with our electrifying DJ services, offering to turn any event into an unforgettable karaoke experience!',
      image: '/assets/images/karaoke1.jpg',
    },
    {
      title: 'Club DJ',
      description: 'Take your club experience to new heights with our dynamic DJ services, boasting a proven track record of success and seamless transitions. Whether its for special events or a weekend night of non-stop dancing, trust us to elevate your Club DJ needs.',
      image: '/assets/images/club1.jpg',
    },
    {
      title: 'Grad Party DJ Services',
      description: 'Age appropriate DJ and music suitable for your party; playing radio-edited music without offensive lyrics. Interactive DJ that knows what to play and when to play it to build energy at your event = All The Music, All The Fun!',
      image: '/assets/images/p-2.jpg',
    },
    {
      title: 'School Dances',
      description: 'Age-appropriate, professionally curated DJ services with radio-edited music. Our interactive DJs expertly build energy on the dancefloor with games and interaction. Price varies by hours needed.',
      image: '/assets/images/school1.jpg',
    },
    {
      title: 'Super DJ Lighting',
      description: 'An exhilarating visual spectacle with our overhead light truss featuring pulsating lights that ignite the dance floor. Seamlessly integrated into our dynamic light show kit to create an immersive party atmosphere.',
      image: '/assets/images/club2.jpg',
    },
    {
      title: 'Additional Hour(s)',
      description: 'Experience non-stop dancing and uninterrupted entertainment as we cater to your guests\' rhythm with options to extend your booking times, ensuring your party\'s timeline perfectly aligns with an unforgettable night of celebration.',
      image: '/assets/images/p-9.jpg',
    },
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observeSection = (sectionKey: string, items: any[]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              items.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleSections((prev) => ({
                    ...prev,
                    [sectionKey]: {
                      ...prev[sectionKey],
                      [index]: true,
                    },
                  }));
                }, index * 120);
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      const sectionElement = sectionRefs.current[sectionKey];
      if (sectionElement) {
        observer.observe(sectionElement);
        observers.push(observer);
      }
    };

    observeSection('standard', standardServices);
    observeSection('auxiliary', auxiliaryServices);
    observeSection('additional', additionalServices);

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen with Video Background */}
      <section className="relative text-white overflow-x-hidden min-h-[30vh] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <VideoBackgroundRounded />
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full text-center">
          <div className="mb-4 sm:mb-8">
            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 glass-strong rounded-full">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-500 font-semibold">Our Services</p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-white to-primary-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            All The Music, All The Fun!
          </p>
        </div>
      </section>

      {/* Standard Items - Split Screen Alternating */}
      <section 
        ref={(el) => { sectionRefs.current['standard'] = el; }}
        className="relative bg-dark overflow-hidden py-8 sm:py-12 lg:py-0"
      >
        {standardServices.map((service, index) => {
          const isEven = index % 2 === 0;
          const isVisible = visibleSections['standard']?.[index] || false;
          const isLast = index === standardServices.length - 1;
          
          return (
            <div
              key={index}
              className={`relative ${
                isLast ? '' : 'border-b border-white/5'
              }`}
            >
              <div className="flex flex-col lg:flex-row min-h-[400px] sm:min-h-[500px] lg:min-h-[700px]">
                {/* Image Side - Full Height - Alternates left/right */}
                <div className={`w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-[700px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`absolute inset-0 ${
                    isVisible
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  } transition-all duration-1000 ease-out`}
                  style={{ transitionDelay: `${index * 120}ms` }}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-black/80 via-black/40 to-transparent`}></div>
                    {/* Number indicator */}
                    <div className={`absolute ${
                      isEven ? 'top-4 left-4 sm:top-12 sm:left-12' : 'top-4 right-4 sm:top-12 sm:right-12'
                    }`}>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary-500/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-primary-500/50">
                        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-500">0{index + 1}</span>
                      </div>
                    </div>
                    {/* Diagonal cut effect - hidden on mobile */}
                    <div className={`hidden lg:block absolute ${
                      isEven ? 'bottom-0 right-0' : 'bottom-0 left-0'
                    } w-0 h-0 border-t-[100px] border-t-transparent ${
                      isEven 
                        ? 'border-l-[100px] border-l-dark' 
                        : 'border-r-[100px] border-r-dark'
                    }`}></div>
                  </div>
                </div>

                {/* Content Side - Full Height */}
                <div className={`w-full lg:w-1/2 relative flex items-center ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className={`w-full p-6 sm:p-8 lg:p-12 xl:p-16 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : isEven
                      ? 'opacity-0 -translate-x-12'
                      : 'opacity-0 translate-x-12'
                  } transition-all duration-1000 ease-out`}
                  style={{ transitionDelay: `${index * 120 + 200}ms` }}>
                    <div className="max-w-2xl mx-auto">
                      <div className="mb-4 sm:mb-6">
                        <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-primary-500 mb-2 sm:mb-4"></div>
                        <p className="text-xs sm:text-sm uppercase tracking-wider text-primary-500 font-semibold mb-1 sm:mb-2">
                          Standard Service
                        </p>
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 sm:w-12 h-0.5 bg-primary-500"></div>
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Auxiliary Items - Overlapping Cards */}
      <section 
        ref={(el) => { sectionRefs.current['auxiliary'] = el; }}
        className="py-12 sm:py-20 lg:py-24 xl:py-32 bg-dark-200 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-primary-500 mb-3 sm:mb-4 font-semibold">Enhance Your Event</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-white">Auxiliary Items</h2>
            <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-primary-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {auxiliaryServices.map((service, index) => {
              const isVisible = visibleSections['auxiliary']?.[index] || false;
              
              return (
                <div
                  key={index}
                  className={`group relative ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-16'
                  } transition-all duration-800 ease-out`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {/* Card with creative shape */}
                  <div className="relative glass-strong rounded-3xl overflow-hidden h-full hover:scale-[1.02] transition-transform duration-500">
                    {/* Image with creative mask */}
                    <div className="relative h-56 sm:h-64 lg:h-80 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40"></div>
                      
                      {/* Floating title on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2">
                          {service.title}
                        </h3>
                        <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-primary-500 transform group-hover:scale-x-150 transition-transform duration-300 origin-left"></div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-4 sm:p-6 lg:p-8">
                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-primary-500/30 rounded-full transform group-hover:scale-110 group-hover:border-primary-500 transition-all duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services - Creative Grid with Varying Sizes */}
      <section 
        ref={(el) => { sectionRefs.current['additional'] = el; }}
        className="py-12 sm:py-20 lg:py-24 xl:py-32 bg-dark relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-primary-500 mb-3 sm:mb-4 font-semibold">Extended Offerings</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-white">Additional Services</h2>
            <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-primary-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {additionalServices.map((service, index) => {
              const isVisible = visibleSections['additional']?.[index] || false;
              const isLarge = index === 0 || index === 3; // Make some cards larger
              
              return (
                <div
                  key={index}
                  className={`group relative ${
                    isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                  } ${
                    isVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-12 scale-95'
                  } transition-all duration-700 ease-out`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="glass-strong rounded-3xl overflow-hidden h-full hover:scale-[1.02] transition-all duration-500 relative">
                    {/* Image */}
                    <div className={`relative overflow-hidden ${isLarge ? 'h-56 sm:h-64 lg:h-72' : 'h-48 sm:h-56 lg:h-64'}`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
                      
                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                        <h3 className={`font-bold text-white mb-1 sm:mb-2 ${
                          isLarge ? 'text-lg sm:text-xl lg:text-2xl xl:text-3xl' : 'text-base sm:text-lg lg:text-xl xl:text-2xl'
                        }`}>
                          {service.title}
                        </h3>
                        <div className="w-12 sm:w-16 h-0.5 bg-primary-500 transform group-hover:scale-x-150 transition-transform duration-300 origin-left"></div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-4 sm:p-5 lg:p-6">
                      <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
