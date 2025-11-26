'use client';

import Link from 'next/link';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-x-hidden min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <VideoBackgroundRounded />
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full text-center">
          <div className="mb-4 sm:mb-8">
            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 glass-strong rounded-full">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-500 font-semibold">Page Not Found</p>
            </div>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 sm:mb-6">
            <span className="block bg-gradient-to-r from-white via-white to-primary-500 bg-clip-text text-transparent">
              404
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto font-light">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
              Let's Get You Back on Track
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for might have been moved, deleted, or doesn't exist. But don't worry - we've got plenty of other great content for you to explore!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link
                href="/"
                className="group relative inline-block bg-primary-500 text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:bg-primary-400 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  Go Home
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
              </Link>
              
              <Link
                href="/contact"
                className="group relative inline-block glass-strong text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  Contact Us
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10">
              <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 sm:mb-6 font-semibold">Quick Links</p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link href="/services" className="text-gray-400 hover:text-primary-500 transition-colors text-sm sm:text-base">
                  Services
                </Link>
                <Link href="/our-djs" className="text-gray-400 hover:text-primary-500 transition-colors text-sm sm:text-base">
                  Our DJs
                </Link>
                <Link href="/reviews" className="text-gray-400 hover:text-primary-500 transition-colors text-sm sm:text-base">
                  Reviews
                </Link>
                <Link href="/booking" className="text-gray-400 hover:text-primary-500 transition-colors text-sm sm:text-base">
                  Booking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

