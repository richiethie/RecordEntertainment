'use client';

import { useState, useEffect, useRef } from 'react';

const videos = [
  '/assets/videos/vid-1.mp4',
  '/assets/videos/vid-2.mp4',
  '/assets/videos/vid-3.mp4',
  '/assets/videos/vid-4.mp4',
  '/assets/videos/vid-5.mp4',
];

export default function VideoBackgroundRounded() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setIsLoaded(false);
    };

    const handleVideoLoaded = () => {
      setIsLoaded(true);
      video.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    };

    const handleVideoError = () => {
      console.error('Video failed to load, moving to next video');
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('loadeddata', handleVideoLoaded);
    video.addEventListener('error', handleVideoError);

    video.load();

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('loadeddata', handleVideoLoaded);
      video.removeEventListener('error', handleVideoError);
    };
  }, [currentVideoIndex]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Black background while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black"></div>
      )}
      <video
        ref={videoRef}
        key={currentVideoIndex}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        playsInline
        loop={false}
        preload="auto"
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Subtle overlay for better text readability - only when video is loaded */}
      {isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      )}
    </div>
  );
}

