'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';
import InnovativeCarousel from '@/components/InnovativeCarousel';
import OverlappingImages from '@/components/OverlappingImages';
import OverlappingImagesMobile from '@/components/OverlappingImagesMobile';
import LeftOverlappingImages from '@/components/LeftOverlappingImages';
import LeftOverlappingImagesMobile from '@/components/LeftOverlappingImagesMobile';
import AnimatedFeatureItems from '@/components/AnimatedFeatureItems';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import CountingNumber from '@/components/CountingNumber';
import YearCarousel from '@/components/YearCarousel';

export default function Home() {
  const [animationPhase, setAnimationPhase] = useState<'text-in' | 'text-out' | 'logo-in'>('text-in');
  const [showText, setShowText] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  useEffect(() => {
    // Calculate total time for character animations
    // Fade in: 1s duration + (charCount * 0.05s stagger) ≈ 2.5s
    // Wait: 0.4s
    // Fade out: 0.5s duration + (charCount * 0.05s stagger) ≈ 1.5s
    const textLength = 'Rethink your event\'s potential.'.length;
    const fadeInTime = 1000 + (textLength * 50); // 1s + stagger
    const waitTime = 100; // 0.1s wait
    const fadeOutTime = 500 + (textLength * 50); // 0.5s + stagger
    
    // Phase 1: Text fades in character by character
    const textInTimer = setTimeout(() => {
      setAnimationPhase('text-out');
    }, fadeInTime + waitTime);

    // Phase 2: Text fades out character by character (from end)
    const textOutTimer = setTimeout(() => {
      setShowText(false);
      setShowLogo(true);
      setAnimationPhase('logo-in');
      // Trigger fade-in after a tiny delay to ensure DOM is ready
      setTimeout(() => {
        setLogoOpacity(1);
      }, 10);
    }, fadeInTime + waitTime + fadeOutTime);

    return () => {
      clearTimeout(textInTimer);
      clearTimeout(textOutTimer);
    };
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white overflow-x-hidden min-h-[calc(100vh-4rem)] flex items-start justify-center pt-[30vh]">
        {/* Video Background - Full Screen */}
        <div className="fixed inset-0 w-full h-full z-0">
          <VideoBackgroundRounded />
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full">
          {/* Text Content - Centered */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">MAKE IT COUNT</p>
            
            {/* Animated Text */}
            {showText && (
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-12 md:mb-6 leading-tight text-glass mt-4">
                {'Rethink your event\'s potential.'.split(/(\s+)/).map((segment, segmentIndex, segments) => {
                  // Calculate global character index for this segment
                  const globalStartIndex = segments.slice(0, segmentIndex).join('').length;
                  const isSpace = /^\s+$/.test(segment);
                  
                  return (
                    <span 
                      key={segmentIndex} 
                      className="inline-block whitespace-pre-wrap"
                      style={{ 
                        wordBreak: isSpace ? 'normal' : 'keep-all',
                        whiteSpace: isSpace ? 'pre' : 'nowrap'
                      }}
                    >
                      {segment.split('').map((char, charIndex) => {
                        const globalIndex = globalStartIndex + charIndex;
                        return (
                          <span
                            key={charIndex}
                            className={`inline-block ${
                              animationPhase === 'text-in' 
                                ? 'animate-char-fade-in' 
                                : animationPhase === 'text-out'
                                ? 'animate-char-fade-out'
                                : 'opacity-0'
                            }`}
                            style={{
                              animationDelay: animationPhase === 'text-in' 
                                ? `${globalIndex * 0.05}s`
                                : animationPhase === 'text-out'
                                ? `${('Rethink your event\'s potential.'.length - 1 - globalIndex) * 0.05}s`
                                : '0s',
                            }}
                          >
                            {char}
                          </span>
                        );
                      })}
                    </span>
                  );
                })}
              </h1>
            )}

            {/* Logo */}
            {showLogo && (
              <div 
                className="mb-6 transition-opacity duration-[2000ms] ease-in"
                style={{ opacity: logoOpacity }}
              >
                <Image
                  src="/assets/images/reinameonlyinverted.PNG"
                  alt="Record Entertainment"
                  width={500}
                  height={150}
                  className="mx-auto h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto object-contain"
                  priority
                />
              </div>
            )}

            <div className="flex justify-center">
              <Link
                href="/booking"
                className="bg-primary-500 text-black px-4 py-2 sm:px-8 sm:py-4 rounded-lg font-semibold text-md sm:text-lg hover:bg-primary-600 transition-all duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Services Section */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-20">
            <div className="text-center pb-8 md:pb-0 border-b md:border-b-0 border-gray-600/30">
              <CountingNumber target={40} duration={2500} />
              <div className="text-xl text-gray-300">Years of experience</div>
            </div>
            <div className="text-center md:pt-0">
              <div className="text-6xl font-bold text-primary-500 mb-2">7x</div>
              <div className="text-xl text-gray-300">Couple's Choice Award Recipient</div>
              <YearCarousel />
            </div>
          </div>

        </div>
      </section>

      {/* Weddings Section */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Weddings</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Weddings</h2>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-6">
                We've helped countless couples bring their vision to life. Allow us to bring the energy to the next level while keeping the formalities elegant and timeless.
              </p>
              <Link
                href="/weddings"
                className="inline-block bg-primary-500 text-black px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-600 transition-all duration-200"
              >
                Learn More About Weddings
              </Link>
            </div>
            <div>
              {/* Mobile version */}
              <div className="block sm:hidden">
                <OverlappingImagesMobile
                  primaryImage="/assets/images/wedding1.jpg"
                  secondaryImage="/assets/images/p-4.jpeg"
                  primaryAlt="Wedding event"
                  secondaryAlt="Wedding celebration"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <OverlappingImages
                  primaryImage="/assets/images/wedding1.jpg"
                  secondaryImage="/assets/images/p-4.jpeg"
                  primaryAlt="Wedding event"
                  secondaryAlt="Wedding celebration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Events Section */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 text-right sm:text-left">
              <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Corporate Events/Parties</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Corporate Events/Parties</h2>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-6">
                Seminars, Expos, Meetings, Holiday or Special Events. Our extensive corporate event experience can elevate your next occasion.
              </p>
              <Link
                href="/corporate-events"
                className="inline-block bg-primary-500 text-black px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-600 transition-all duration-200"
              >
                Learn More About Corporate Events
              </Link>
            </div>
            <div className="lg:order-1">
              {/* Mobile version */}
              <div className="block sm:hidden">
                <LeftOverlappingImagesMobile
                  primaryImage="/assets/images/corporate1.jpg"
                  secondaryImage="/assets/images/corporate2.jpg"
                  primaryAlt="Corporate event"
                  secondaryAlt="Corporate celebration"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <LeftOverlappingImages
                  primaryImage="/assets/images/corporate1.jpg"
                  secondaryImage="/assets/images/corporate2.jpg"
                  primaryAlt="Corporate event"
                  secondaryAlt="Corporate celebration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Dances Section */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">School Dances</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">School Dances</h2>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-6">
                Age-appropriate, professionally curated DJ services with radio-edited music. Our interactive DJs expertly build energy on the dancefloor with games and interaction = All The Music, All The Fun! Price varies by hours needed.
              </p>
              <Link
                href="/school-dances"
                className="inline-block bg-primary-500 text-black px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-600 transition-all duration-200"
              >
                Learn More About School Dances
              </Link>
            </div>
            <div>
              {/* Mobile version */}
              <div className="block sm:hidden">
                <OverlappingImagesMobile
                  primaryImage="/assets/images/school1.jpg"
                  secondaryImage="/assets/images/school2.jpg"
                  primaryAlt="School dance event"
                  secondaryAlt="School dance celebration"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <OverlappingImages
                  primaryImage="/assets/images/school1.jpg"
                  secondaryImage="/assets/images/school2.jpg"
                  primaryAlt="School dance event"
                  secondaryAlt="School dance celebration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Club DJ Section */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 text-right sm:text-left">
              <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Club DJ</p>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Club DJ</h2>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-6">
                Take your club experience to new heights with our dynamic DJ services, boasting a proven track record of success and seamless transitions. Whether its for special events or a weekend night of non-stop dancing, trust us to elevate your Club DJ needs.
              </p>
              <Link
                href="/club-dj"
                className="inline-block bg-primary-500 text-black px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-600 transition-all duration-200"
              >
                Learn More About Club DJ
              </Link>
            </div>
            <div className="lg:order-1">
              {/* Mobile version */}
              <div className="block sm:hidden">
                <LeftOverlappingImagesMobile
                  primaryImage="/assets/images/club1.jpg"
                  secondaryImage="/assets/images/club2.jpg"
                  primaryAlt="Club DJ event"
                  secondaryAlt="Club DJ celebration"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <LeftOverlappingImages
                  primaryImage="/assets/images/club1.jpg"
                  secondaryImage="/assets/images/club2.jpg"
                  primaryAlt="Club DJ event"
                  secondaryAlt="Club DJ celebration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exceptional Section */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Exceptional</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Let's make your day count</h2>
            <p className="text-sm sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive event production services. From sound & lighting to special effects & photo booths, we'll help you create an unforgettable experience. We collaborate with industry-leading professionals to deliver the perfect solution for your event.
            </p>
          </div>
          <AnimatedFeatureItems />
        </div>
      </section>

      {/* Innovative Section */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20 bg-dark-200 overflow-hidden">
        <div className="w-full">
          <div className="mb-4">
            <InnovativeCarousel />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center">
                  <p className="text-sm sm:text-xl lg:text-3xl xl:text-4xl text-gray-300 max-w-4xl mx-auto mt-8 md:mt-24 leading-[2.0] sm:leading-[2.2] lg:leading-[2.4]">
                    We're revolutionizing{' '}
                    <span className="inline-block relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 align-middle mx-1.5">
                      <Image
                        src="/assets/images/p-4.jpeg"
                        alt=""
                        fill
                        className="object-cover rounded-full"
                        sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                      />
                    </span>{' '}
                    the event industry by leveraging decades of expertise{' '}
                    <span className="inline-block relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 align-middle mx-1.5">
                      <Image
                        src="/assets/images/p-5.jpg"
                        alt=""
                        fill
                        className="object-cover rounded-full"
                        sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                      />
                    </span>{' '}
                    to deliver unforgettable {' '}
                    <span className="inline-block relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 align-middle mx-1.5">
                      <Image
                        src="/assets/images/p-8.jpg"
                        alt=""
                        fill
                        className="object-cover rounded-full"
                        sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                      />
                    </span>{' '}
                    moments that blend immersive soundscapes, dynamic energy, and sophisticated elegance into one seamless{' '}
                    <span className="inline-block relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 align-middle mx-1.5">
                      <Image
                        src="/assets/images/p-9.jpg"
                        alt=""
                        fill
                        className="object-cover rounded-full"
                        sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 56px"
                      />
                    </span>{' '}
                    <span className="font-bold text-white">experience</span>.
                  </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">REVIEWS</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">What Our Clients Say</h2>
            <Link
              href="/reviews"
              className="text-primary-500 hover:text-primary-400 font-semibold inline-flex items-center"
            >
              See All Reviews <span className="ml-1">→</span>
            </Link>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="relative z-10 py-16 sm:py-20 lg:py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Common Questions</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFAQIndex(openFAQIndex === 0 ? null : 0)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white pr-4">What's included in your wedding packages?</h3>
                <svg
                  className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                    openFAQIndex === 0 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQIndex === 0 && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-300">
                    Our packages include professional DJ services, sound equipment, lighting, pre-wedding consultation, travel, and setup. Additional services like photo booths and uplights can be added.
                  </p>
                </div>
              )}
            </div>
            <div className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFAQIndex(openFAQIndex === 1 ? null : 1)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white pr-4">How far in advance should I book?</h3>
                <svg
                  className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                    openFAQIndex === 1 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQIndex === 1 && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-300">
                    We recommend booking as soon as you have your date confirmed, especially for popular wedding dates. Many clients book 6-12 months in advance.
                  </p>
                </div>
              )}
            </div>
            <div className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFAQIndex(openFAQIndex === 2 ? null : 2)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white pr-4">Do you provide music for ceremonies?</h3>
                <svg
                  className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                    openFAQIndex === 2 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQIndex === 2 && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-300">
                    Yes! We provide ceremony music and sound, including microphones for the officiant and readers, starting 30 minutes before your ceremony begins.
                  </p>
                </div>
              )}
            </div>
            <div className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFAQIndex(openFAQIndex === 3 ? null : 3)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white pr-4">Can I request specific songs?</h3>
                <svg
                  className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                    openFAQIndex === 3 ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQIndex === 3 && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-gray-300">
                    Absolutely! During your pre-event consultation, we'll discuss your music preferences, must-play songs, and do-not-play list to ensure your event reflects your style.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/faq"
              className="inline-block text-primary-500 hover:text-primary-400 font-semibold text-lg inline-flex items-center"
            >
              View All FAQs <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
