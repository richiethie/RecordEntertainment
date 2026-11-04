'use client';

import { useLayoutEffect, useRef, useState } from 'react';
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
import VideographyShowcase from '@/components/VideographyShowcase';

const landingLinks = [
  { label: 'Weddings', href: '/weddings' },
  { label: 'Corporate', href: '/corporate-events' },
  { label: 'Schools', href: '/school-dances' },
  { label: 'Clubs', href: '/club-dj' },
  { label: 'Videography', href: '#videography' },
];

export default function Home() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const yearsOfExperience = new Date().getFullYear() - 1983;
  const linkRowRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const row = linkRowRef.current;
    if (!row) return;

    const updateSeparators = () => {
      const items = Array.from(row.querySelectorAll<HTMLElement>('[data-landing-link]'));
      items.forEach((item, index) => {
        const separator = item.querySelector<HTMLElement>('[data-landing-separator]');
        if (!separator) return;
        const previous = items[index - 1];
        const sameLine = !!previous && Math.abs(item.offsetTop - previous.offsetTop) < 2;
        separator.style.opacity = sameLine ? '1' : '0';
      });
    };

    updateSeparators();
    const observer = new ResizeObserver(updateSeparators);
    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative z-10 text-white bg-black lg:h-[65vh] lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 w-full py-16 sm:py-20 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <p className="text-sm uppercase tracking-[0.22em] text-primary-500 mb-5 font-semibold">Make it count</p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                All the music. All the fun.
              </h1>
              <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-xl mb-6">
                Sound, lighting, and a dance floor that stays full. Record Entertainment has been doing that for weddings and events across Wisconsin since 1983.
              </p>
              <p className="text-sm uppercase tracking-[0.18em] text-white/80 mb-8">
                Music <span className="text-primary-500">·</span> Light <span className="text-primary-500">·</span> The room
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/booking"
                  className="inline-block text-center bg-primary-500 text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-lg hover:bg-primary-600 transition-all duration-200"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-block text-center glass-strong text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-sm sm:text-lg hover:bg-white/10 transition-all duration-200"
                >
                  See Services
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-black lg:aspect-auto lg:h-[48vh]">
                <VideoBackgroundRounded />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 pointer-events-none">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary-500 font-semibold">Wisconsin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-dark border-y border-white/10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <nav
            ref={linkRowRef}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-5 sm:gap-x-8 sm:py-6 lg:gap-x-14"
            aria-label="Event types"
          >
            {landingLinks.map((item, index) => (
              <div key={item.href} data-landing-link className="relative flex items-center">
                {index > 0 && (
                  <span
                    data-landing-separator
                    className="absolute top-1/2 left-[-0.625rem] sm:left-[-1rem] lg:left-[-1.75rem] h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-white/35"
                    aria-hidden="true"
                  />
                )}
                <Link
                  href={item.href}
                  className="py-2 text-xs sm:text-sm uppercase tracking-[0.18em] text-gray-300 hover:text-primary-500 transition-colors"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </section>

      {/* Stats & Services Section */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            <div className="text-center pb-8 md:pb-0 border-b md:border-b-0 border-gray-600/30">
              <CountingNumber target={yearsOfExperience} duration={2500} />
              <div className="text-xl text-gray-300">Years of experience</div>
            </div>
            <div className="text-center md:pt-0">
              <div className="text-6xl font-bold text-primary-500 mb-2">7x</div>
              <div className="text-xl text-gray-300">Recent Couples&apos; Choice Awards</div>
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
                We&apos;ve helped thousands of couples make their dream weddings a reality.
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
                Seminars, Expos, Fundraisers, Holiday Parties, and Special Events. Our extensive experience can elevate your next gathering.
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
                Age-appropriate, professionally curated DJ services with radio-edited music. Our interactive DJs expertly build energy on the dance floor, adhering to school rules and expectations.
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
                Whether it&apos;s a special one-night-only engagement or a full weekend of nonstop dancing, we can take your club experience to the next level, boasting a proven track record of high energy and seamless transitions.
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

      <VideographyShowcase />

      {/* Exceptional Section */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Exceptional</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Let's make your day count</h2>
            <p className="text-sm sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive event production services. From sound and lighting to photo booths and special effects, we&apos;ll help to create an unforgettable experience. We work in collaboration with your chosen vendors and other industry professionals to deliver the perfect solution for your event.
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
                    Our packages are entirely customizable, meaning we can be there for as much of your celebration as you need. Our base rate includes all necessary sound equipment, microphones, dance floor lighting, pre-wedding consultation, travel, and setup.
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
                    We recommend booking our services as soon as you have your date and venue confirmed, especially for dates May through October. Most of our clients lock us in 6-12 months in advance.
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
                    Yes! We provide music and sound services, including microphones for your officiant and readers. Prelude music is also included, starting 30 minutes before your ceremony begins.
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
                    Absolutely! During your pre-wedding consultation, we&apos;ll discuss your song selections for all your special moments, as well as a must-play and do-not-play list to ensure your event reflects your style and preferences.
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
