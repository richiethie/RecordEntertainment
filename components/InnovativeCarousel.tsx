'use client';

export default function InnovativeCarousel() {
  const words = ['_elegant_', '_energetic_', '_professional_', '_unforgettable_'];
  
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of items */}
        {words.map((word, i) => (
          <span
            key={`first-${i}`}
            className="inline-block text-6xl sm:text-7xl md:text-8xl font-bold text-primary-500 italic px-8 flex-shrink-0"
          >
            {word}
          </span>
        ))}
        {/* Duplicate set for seamless loop */}
        {words.map((word, i) => (
          <span
            key={`second-${i}`}
            className="inline-block text-6xl sm:text-7xl md:text-8xl font-bold text-primary-500 italic px-8 flex-shrink-0"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

