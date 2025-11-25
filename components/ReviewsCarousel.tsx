'use client';

import Image from 'next/image';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  image?: string;
}

const reviews: Review[] = [
  {
    name: 'Jared R.',
    rating: 5,
    text: 'All around happy with our DJ! We had a really good experience with our DJ, Kerry! He was great to work with and created a fun enviornment for us and our guests! Everyon seemed to have a ton of fun and people were dancing all night.',
    date: '09/29/2020',
    image: '/assets/images/Jared R.webp',
  },
  {
    name: 'Taylor T.',
    rating: 5,
    text: 'Dance Floor was Always Full!! Alex did such a great job making our wedding day special! He was very professional and easy to work with. He was very flexible and was able to provide ceremony and reception music.',
    date: '07/12/2021',
    image: '/assets/images/Taylor.webp',
  },
  {
    name: 'Krista L.',
    rating: 5,
    text: 'Awesome Music! We really enjoyed having Record Entertainment as our dj for our wedding! Our DJ was able to keep the party going and make sure everyone had a great time! Made our night unforgettable!',
    date: '07/01/2021',
    image: '/assets/images/Krista.webp',
  },
  {
    name: 'Alexandria J.',
    rating: 5,
    text: 'Get ready to Party ALL NIGHT LONG!!! We had Mike with Record Entertainment as our DJ for our wedding. He was amazing to work with, super responsive to last minuet requests and played a wide variety of music that had people on the dance floor till the venue closed.',
    date: '06/22/2021',
    image: '/assets/images/Alexandria.webp',
  },
];

export default function ReviewsCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of reviews */}
        {reviews.map((review, i) => (
          <div
            key={`first-${i}`}
            className="inline-block px-4 flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 border-l-4 border-primary-500 h-[400px] sm:h-[450px] flex flex-col whitespace-normal">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed flex-grow overflow-hidden line-clamp-6 whitespace-normal break-words">{review.text}</p>
              <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto">
                <div className="flex items-center gap-3">
                  {review.image && (
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  )}
                  <p className="font-semibold text-white text-xs sm:text-sm">- {review.name}</p>
                </div>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {reviews.map((review, i) => (
          <div
            key={`second-${i}`}
            className="inline-block px-4 flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 border-l-4 border-primary-500 h-[400px] sm:h-[450px] flex flex-col whitespace-normal">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-xl">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed flex-grow overflow-hidden line-clamp-6 whitespace-normal break-words">{review.text}</p>
              <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto">
                <div className="flex items-center gap-3">
                  {review.image && (
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  )}
                  <p className="font-semibold text-white text-xs sm:text-sm">- {review.name}</p>
                </div>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

