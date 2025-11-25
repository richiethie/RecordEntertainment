'use client';

import Link from 'next/link';
import ClubVideoBackground from '@/components/ClubVideoBackground';
import ClubServicesDiagonal from '@/components/ClubServicesDiagonal';
import ClubFeaturesGrid from '@/components/ClubFeaturesGrid';
import ClubGalleryMasonry from '@/components/ClubGalleryMasonry';

export default function ClubDJ() {
  const clubServices = [
    {
      title: 'Weekend Nights',
      description: 'Keep the party going all weekend long with our dynamic DJ services. We bring the energy and seamless transitions that keep the dance floor packed.',
      image: '/assets/images/club1.jpg',
    },
    {
      title: 'Special Events',
      description: "Whether it's a themed night, holiday celebration, or special occasion, we create the perfect atmosphere for your club event.",
      image: '/assets/images/club2.jpg',
    },
    {
      title: 'Seamless Transitions',
      description: 'Our DJs are masters of mixing and transitions, keeping the energy high and the music flowing without interruption.',
      image: '/assets/images/club3.jpg',
    },
    {
      title: 'Proven Track Record',
      description: 'Years of experience in club environments means we know how to read the crowd and deliver exactly what they want to hear.',
      image: '/assets/images/club4.jpg',
    },
  ];

  const features = [
    {
      title: 'Dynamic Energy',
      description: 'DJs who know how to keep the dance floor packed all night long',
    },
    {
      title: 'Seamless Mixing',
      description: 'Expert transitions and mixing that keeps the energy flowing',
    },
    {
      title: 'Proven Success',
      description: 'Track record of success in club environments',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-x-hidden min-h-[50vh] sm:min-h-[50vh] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <ClubVideoBackground />
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full text-center">
          <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Club DJ</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Elevate Your Club Experience
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto text-glass">
            Take your club experience to new heights with our dynamic DJ services, boasting a proven track record of success and seamless transitions.
          </p>
        </div>
      </section>

      {/* Diagonal Services Section */}
      <ClubServicesDiagonal services={clubServices} />

      {/* Features Grid Section */}
      <ClubFeaturesGrid features={features} />

      {/* Masonry Gallery Section */}
      <ClubGalleryMasonry />

      {/* CTA Section - Redesigned */}
      <section className="py-12 sm:py-20 lg:py-32 bg-dark-500 text-white relative overflow-hidden">
        {/* Hash/grid background pattern - matching rest of page */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center relative z-10">
          {/* Glass card container */}
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Content */}
            <div className="relative z-10">
              {/* Pulsing audio waveform - smaller on mobile */}
              <div className="flex justify-center items-end gap-1 sm:gap-1.5 mb-4 sm:mb-6 h-8 sm:h-12">
                {[30, 60, 45, 80, 35, 70, 50, 90, 40, 65, 55, 75, 45, 85, 50, 70, 60, 80, 45, 65].map((height, i) => (
                  <div
                    key={i}
                    className="w-1 sm:w-1.5 bg-primary-500 rounded-full"
                    style={{
                      height: `${height}%`,
                      animation: `pulse ${0.5 + (i % 3) * 0.2}s ease-in-out infinite`,
                      animationDelay: `${i * 0.08}s`
                    }}
                  ></div>
                ))}
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-white to-primary-500 bg-clip-text text-transparent">
                Ready to Elevate Your Club?
              </h2>
              
              <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Contact us today to discuss your Club DJ needs and transform your venue into the ultimate nightlife destination.
              </p>

              {/* Enhanced CTA Button - smaller on mobile */}
              <Link
                href="/booking"
                className="group relative inline-block bg-primary-500 text-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:bg-primary-400 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Quote
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              {/* Secondary link - smaller on mobile */}
              <div className="mt-4 sm:mt-6">
                <Link
                  href="/contact"
                  className="text-primary-500 hover:text-primary-400 font-semibold text-sm sm:text-base lg:text-lg inline-flex items-center gap-2 transition-colors duration-300"
                >
                  Or contact us directly
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

