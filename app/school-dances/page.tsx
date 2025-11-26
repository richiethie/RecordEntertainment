'use client';

import Link from 'next/link';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';
import ServicesDiagonal from '@/components/ServicesDiagonal';
import FeaturesGrid from '@/components/FeaturesGrid';
import GalleryMasonry from '@/components/GalleryMasonry';

export default function SchoolDances() {
  const schoolServices = [
    {
      title: 'Age-Appropriate Music',
      description: 'All music is radio-edited and free from offensive lyrics. We ensure a safe, fun environment that is appropriate for students while keeping the energy high.',
      image: '/assets/images/school1.jpg',
    },
    {
      title: 'Interactive DJs',
      description: 'Our DJs know how to build energy on the dancefloor with games, interaction, and expert music selection. They understand what to play and when to play it to keep students engaged.',
      image: '/assets/images/school2.jpg',
    },
    {
      title: 'Flexible Pricing',
      description: 'Price varies by hours needed. We work with school budgets to provide quality entertainment that fits your needs.',
      image: '/assets/images/p-2.jpg',
    },
    {
      title: 'Professional Equipment',
      description: 'High-quality sound and lighting systems that create an exciting atmosphere while maintaining safety standards for school events.',
      image: '/assets/images/p-5.jpg',
    },
  ];

  const features = [
    {
      title: 'Safe & Appropriate',
      description: 'Radio-edited music and age-appropriate content that administrators can trust',
    },
    {
      title: 'Engaging',
      description: 'Interactive DJs who know how to get students on the dance floor and keep them there',
    },
    {
      title: 'Budget-Friendly',
      description: 'Flexible pricing based on hours needed to fit school budgets',
    },
  ];

  const galleryImages = [
    { src: '/assets/images/school1.jpg', alt: 'School dance event' },
    { src: '/assets/images/school2.jpg', alt: 'School dance celebration' },
    { src: '/assets/images/p-2.jpg', alt: 'Student event' },
    { src: '/assets/images/p-5.jpg', alt: 'School party' },
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
          <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">School Dances</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            School Dance Entertainment
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto text-glass">
            Age-appropriate, professionally curated DJ services tailored for students and administrators, featuring radio-edited music free from offensive lyrics.
          </p>
        </div>
      </section>

      {/* Diagonal Services Section */}
      <ServicesDiagonal 
        services={schoolServices}
        sectionTitle="School Dance Services"
        sectionSubtitle="All The Music, All The Fun! Our interactive DJs expertly build energy on the dancefloor with games and interaction."
        bgColor="bg-dark-500"
      />

      {/* Features Grid Section */}
      <FeaturesGrid 
        features={features}
        sectionTitle="Why Schools Choose Record Entertainment"
        bgColor="bg-dark-500"
      />

      {/* Gallery Section */}
      <GalleryMasonry 
        images={galleryImages}
        sectionTitle="School Dance Events"
        sectionSubtitle="See the fun and energy we bring to school dances throughout Wisconsin."
        bgColor="bg-dark-500"
      />

    </div>
  );
}

