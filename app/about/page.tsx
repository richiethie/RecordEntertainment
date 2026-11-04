'use client';

import Link from 'next/link';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';

const serviceAreas = [
  { name: 'Door County', href: '/service-areas/door-county' },
  { name: 'Fond du Lac', href: '/service-areas/fond-du-lac' },
  { name: 'Fox Valley', href: '/service-areas/fox-valley' },
  { name: 'Green Bay', href: '/service-areas/green-bay' },
  { name: 'Madison', href: '/service-areas/madison' },
  { name: 'Milwaukee', href: '/service-areas/milwaukee' },
  { name: 'Sheboygan', href: '/service-areas/sheboygan' },
  { name: 'Stevens Point', href: '/service-areas/stevens-point' },
  { name: 'Wisconsin Dells', href: '/service-areas/wisconsin-dells' },
];

export default function AboutPage() {
  const yearsOfExperience = new Date().getFullYear() - 1983;

  return (
    <div className="min-h-screen">
      <section className="relative text-white overflow-x-hidden min-h-[30vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <VideoBackgroundRounded />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full text-center">
          <div className="mb-4 sm:mb-8">
            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 glass-strong rounded-full">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-500 font-semibold">About</p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-white to-primary-500 bg-clip-text text-transparent">
              About Record Entertainment
            </span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            All The Music. All The Fun. Serving Wisconsin since 1983.
          </p>
        </div>
      </section>

      <section className="relative z-10 py-12 sm:py-16 lg:py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Our Story</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Built for the dance floor
              </h2>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4">
                Record Entertainment, Inc. started in 1983. For more than {yearsOfExperience} years, the company has provided music, sound, and event production for weddings, corporate gatherings, school dances, and club nights across Wisconsin.
              </p>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4">
                Owner Kevin Flood leads the company with a simple approach: every celebration is different, and the entertainment should match it.
              </p>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed">
                The company has helped thousands of couples celebrate, and it is a seven-time recent Couples&apos; Choice award recipient. Record Entertainment, Inc. is also a BBB Accredited business.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                &quot;This is your wedding, and it should be exactly the way you want it to be.&quot;
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.18em] text-primary-500 font-semibold">
                Kevin Flood, Owner
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 sm:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl sm:text-6xl font-bold text-primary-500 mb-2">{yearsOfExperience}+</div>
              <p className="text-lg text-gray-300">Years of experience</p>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-bold text-primary-500 mb-2">7x</div>
              <p className="text-lg text-gray-300">Recent Couples&apos; Choice Awards</p>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-bold text-primary-500 mb-2">WI</div>
              <p className="text-lg text-gray-300">Weddings, parties, and nightlife</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 sm:py-16 lg:py-20 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">More than a playlist</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Weddings</h3>
              <p className="text-gray-300 leading-relaxed">
                Ceremony sound, cocktail hour, dinner, and the dance floor. A base wedding booking includes the sound system, microphones, dance-floor lighting, a pre-wedding consultation, travel within our service area, and setup.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Events and production</h3>
              <p className="text-gray-300 leading-relaxed">
                Corporate gatherings, school dances, grad parties, and clubs. Add a photo booth, uplighting, a monogram light, multimedia photo films, karaoke, or a larger lighting show when the room calls for it.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Wedding film</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Wedding videography is available in partnership with Studio Solutions in Fond du Lac, so the ceremony, toasts, and reception can be booked alongside the music.
              </p>
              <a
                href="https://studiosolutionsfdl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-400 font-semibold"
              >
                Studio Solutions →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 sm:py-16 lg:py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">The Team</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">DJs chosen for the room</h2>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4">
                Record Entertainment matches a DJ to the style of the event. Many of the DJs come from music, radio, and performance backgrounds. They are comfortable on the microphone, and they plan the timing of introductions, speeches, and special dances before the first guest arrives.
              </p>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-8">
                Closer to the date, you meet with your DJ to set must-play songs, songs to skip, and the flow of the night. On the day, they read the room and keep the floor moving.
              </p>
              <Link
                href="/our-djs"
                className="inline-block bg-primary-500 text-black px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-600 transition-all duration-200"
              >
                Meet Our DJs
              </Link>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Where We Work</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Across Wisconsin</h2>
              <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-6">
                We come to the venue. Travel is included for events in our service area, from Door County and Green Bay through the Fox Valley, Madison, Milwaukee, and the Dells.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <li key={area.href}>
                    <Link href={area.href} className="text-gray-300 hover:text-primary-500 transition-colors">
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="glass-card rounded-2xl p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Reach us</p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Call or email</h2>
                <p className="text-gray-300 leading-relaxed mb-1">
                  <a href="tel:9209486887" className="hover:text-primary-500 transition-colors">(920) 948-6887</a>
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <a href="mailto:Kevin@recordentertainment.com" className="hover:text-primary-500 transition-colors">
                    Kevin@recordentertainment.com
                  </a>
                </p>
                <p className="text-sm text-gray-400 mb-4">We answer calls and email Monday through Friday, 9:00 AM to 5:00 PM.</p>
                <p className="text-sm text-gray-400">
                  Mailing address
                  <br />
                  258 S Main St
                  <br />
                  Fond du Lac, WI 54935
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 sm:gap-4">
                <Link
                  href="/booking"
                  className="inline-block text-center bg-primary-500 text-black px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-600 transition-all duration-200"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-block text-center glass-strong text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/10 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
