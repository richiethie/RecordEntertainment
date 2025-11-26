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

    </div>
  );
}

