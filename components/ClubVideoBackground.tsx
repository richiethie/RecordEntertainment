'use client';

import { useState, useEffect, useRef } from 'react';

export default function ClubVideoBackground() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoLoaded = () => {
      setIsLoaded(true);
      video.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    };

    const handleVideoError = () => {
      console.error('Video failed to load');
    };

    video.addEventListener('loadeddata', handleVideoLoaded);
    video.addEventListener('error', handleVideoError);

    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleVideoLoaded);
      video.removeEventListener('error', handleVideoError);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Black background while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black"></div>
      )}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      >
        <source src="/assets/videos/club-vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark overlay to reduce brightness and flashiness - only when video is loaded */}
      {isLoaded && (
        <>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </>
      )}
    </div>
  );
}

