'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

function usePlayWhenVisible() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function VideographyShowcase() {
  const cameraRef = usePlayWhenVisible();
  const weddingRef = usePlayWhenVisible();

  return (
    <section id="videography" className="relative z-10 py-8 sm:py-12 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">
              Wedding Videography
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">The day, on film</h2>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4">
              Record Entertainment offers wedding videography in partnership with Studio Solutions in Fond du Lac. Their film team captures the ceremony, the toasts, and the dance floor so the music and the moments stay with you.
            </p>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-8">
              Book the sound and the film together, and one celebration is covered from the first look through the last song.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://studiosolutionsfdl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-primary-500 text-black px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-600 transition-all duration-200"
              >
                Visit Studio Solutions
              </a>
              <Link
                href="/booking"
                className="inline-block text-center glass-strong text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[400px] overflow-hidden sm:h-[550px] md:h-[600px] lg:h-[650px]">
            <div className="absolute top-4 left-12 z-0 h-[240px] w-40 bg-white/10 shadow-2xl backdrop-blur-sm sm:left-auto sm:right-6 sm:top-6 sm:h-[320px] sm:w-64 lg:right-8 lg:top-8 lg:h-[420px] lg:w-80" />
            <div className="absolute bottom-0 right-16 z-10 h-[200px] w-[220px] overflow-hidden bg-black shadow-xl sm:right-2 sm:h-[280px] sm:w-[360px] md:right-4 md:h-[320px] md:w-[420px] lg:right-12 lg:h-[380px] lg:w-[520px]">
              <video
                key="camera"
                ref={cameraRef}
                className="absolute inset-0 h-full w-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Film camera recording"
              >
                <source src="/assets/videos/videography1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute top-0 right-12 z-20 h-[240px] w-[200px] -translate-x-[20px] overflow-hidden bg-black shadow-2xl sm:left-0 sm:right-auto sm:h-[320px] sm:w-[280px] sm:translate-x-0 md:h-[380px] md:w-[320px] lg:h-[480px] lg:w-[380px]">
              <video
                key="wedding"
                ref={weddingRef}
                className="absolute inset-0 h-full w-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Wedding highlight filmed by Studio Solutions"
              >
                <source src="/assets/videos/v-wedding-highlight.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
