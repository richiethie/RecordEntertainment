'use client';

import Link from 'next/link';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';
import ServicesDiagonal from '@/components/ServicesDiagonal';
import FeaturesGrid from '@/components/FeaturesGrid';
import GalleryMasonry from '@/components/GalleryMasonry';

export default function Weddings() {
  const weddingServices = [
    {
      title: 'Ceremony Music & Sound',
      description: 'DJ to provide mic for officiant, readers, musicians as necessary; will run sound and start music thirty minutes prior to ceremony start time, as your guests are being seated. After ceremony, DJ transitions to cocktail music and is available for announcements, etc.',
      image: '/assets/images/p-4.jpeg',
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
      image: '/assets/images/p-5.jpg',
    },
  ];

  const features = [
    {
      title: '7x Couple\'s Choice Award',
      description: 'Recognized excellence in wedding entertainment by couples across Wisconsin',
    },
    {
      title: '40+ Years Experience',
      description: 'Decades of creating unforgettable wedding memories with attention to every detail',
    },
    {
      title: '100% Dedicated',
      description: 'Committed to making your special day perfect from ceremony to last dance',
    },
  ];

  const galleryImages = [
    { src: '/assets/images/wedding1.jpg', alt: 'Wedding celebration' },
    { src: '/assets/images/p-4.jpeg', alt: 'Wedding event' },
    { src: '/assets/images/p-5.jpg', alt: 'Wedding reception' },
    { src: '/assets/images/p-6.jpg', alt: 'Wedding party' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-x-hidden min-h-[50vh] sm:min-h-[50vh] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <VideoBackgroundRounded />
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full text-center">
          <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Weddings</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Your Perfect Wedding Day
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto text-glass">
            We've helped countless couples bring their vision to life. Allow us to bring the energy to the next level while keeping the formalities elegant and timeless.
          </p>
        </div>
      </section>

      {/* Diagonal Services Section */}
      <ServicesDiagonal 
        services={weddingServices}
        sectionTitle="Wedding Services"
        sectionSubtitle="From ceremony to reception, we provide comprehensive DJ services to make your special day unforgettable."
        bgColor="bg-dark-500"
      />

      {/* Features Grid Section */}
      <FeaturesGrid 
        features={features}
        sectionTitle="Why Choose Record Entertainment for Your Wedding?"
        bgColor="bg-dark-500"
      />

      {/* Gallery Section */}
      <GalleryMasonry 
        images={galleryImages}
        sectionTitle="Wedding Memories"
        sectionSubtitle="See the elegance and joy we bring to weddings throughout Wisconsin."
        bgColor="bg-dark-500"
      />

    </div>
  );
}

