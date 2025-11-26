'use client';

import Link from 'next/link';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';
import ServicesDiagonal from '@/components/ServicesDiagonal';
import FeaturesGrid from '@/components/FeaturesGrid';
import GalleryMasonry from '@/components/GalleryMasonry';

interface CorporateService {
  title: string;
  description: string;
  image: string;
}

export default function CorporateEvents() {
  const corporateServices: CorporateService[] = [
    {
      title: 'Seminars & Conferences',
      description: 'Professional sound and music services for your business seminars and conferences. We provide clear audio for presentations, background music during breaks, and seamless transitions throughout your event.',
      image: '/assets/images/corporate1.jpg',
    },
    {
      title: 'Trade Shows & Expos',
      description: 'Make your booth stand out with our dynamic DJ services. We\'ll create an energetic atmosphere that draws attendees to your space while maintaining a professional environment.',
      image: '/assets/images/corporate2.jpg',
    },
    {
      title: 'Holiday Parties',
      description: 'Transform your company holiday party into an unforgettable celebration. Our DJs know how to get everyone on the dance floor while maintaining appropriate corporate standards.',
      image: '/assets/images/p-1.jpg',
    },
    {
      title: 'Product Launches',
      description: 'Create excitement and energy for your product launch events. We provide professional sound, lighting, and music to enhance your presentation and keep the energy high.',
      image: '/assets/images/p-2.jpg',
    },
    {
      title: 'Team Building Events',
      description: 'Enhance your team building activities with music and entertainment. We can provide background music, interactive games, and create a fun atmosphere that brings your team together.',
      image: '/assets/images/p-5.jpg',
    },
    {
      title: 'Awards Ceremonies',
      description: 'Professional sound and music for your awards ceremonies. We handle introductions, background music, and create an elegant atmosphere that honors your award recipients.',
      image: '/assets/images/p-6.jpg',
    },
  ];

  const features = [
    {
      title: 'Professional',
      description: 'Experienced DJs who understand corporate event dynamics and maintain appropriate standards',
    },
    {
      title: 'Flexible',
      description: 'We adapt to your event timeline and requirements, ensuring everything runs smoothly',
    },
    {
      title: 'Reliable',
      description: 'Count on us to deliver professional service that reflects well on your company',
    },
  ];

  const galleryImages = [
    { src: '/assets/images/corporate1.jpg', alt: 'Corporate event' },
    { src: '/assets/images/corporate2.jpg', alt: 'Corporate celebration' },
    { src: '/assets/images/p-1.jpg', alt: 'Corporate gathering' },
    { src: '/assets/images/p-2.jpg', alt: 'Business event' },
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
          <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Corporate Events/Parties</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Elevate Your Corporate Events
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto text-glass">
            Seminars, Expos, Meetings, Holiday or Special Events. Our extensive corporate event experience can elevate your next occasion.
          </p>
        </div>
      </section>

      {/* Diagonal Services Section */}
      <ServicesDiagonal 
        services={corporateServices}
        sectionTitle="Corporate Event Services"
        sectionSubtitle="Professional DJ services tailored for your business needs"
        bgColor="bg-dark-500"
      />

      {/* Features Grid Section */}
      <FeaturesGrid 
        features={features}
        sectionTitle="Why Choose Record Entertainment?"
        bgColor="bg-dark-500"
      />

      {/* Gallery Section */}
      <GalleryMasonry 
        images={galleryImages}
        sectionTitle="Corporate Events"
        sectionSubtitle="See the professionalism and energy we bring to corporate events throughout Wisconsin."
        bgColor="bg-dark-500"
      />

    </div>
  );
}

