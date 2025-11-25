'use client';

import Image from 'next/image';

const years = [
  '2015.png',
  '2016.png',
  '2017.png',
  '2018.png',
  '2019.png',
  '2020.png',
  '2021.png',
  '2022.png',
];

export default function YearCarousel() {
  return (
    <div className="relative w-full overflow-hidden mt-6">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of years */}
        {years.map((year, i) => (
          <div
            key={`first-${i}`}
            className="inline-block px-2 flex-shrink-0"
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <Image
                src={`/assets/images/${year}`}
                alt={`Year ${year.replace('.png', '')}`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 96px, 128px"
              />
            </div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {years.map((year, i) => (
          <div
            key={`second-${i}`}
            className="inline-block px-2 flex-shrink-0"
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              <Image
                src={`/assets/images/${year}`}
                alt={`Year ${year.replace('.png', '')}`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 96px, 128px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

