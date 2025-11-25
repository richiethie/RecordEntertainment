import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';
import AnimatedServicesSection from '@/components/AnimatedServicesSection';
import AnimatedWhyChooseSection from '@/components/AnimatedWhyChooseSection';

interface LocationData {
  name: string;
  displayName: string;
  description: string;
}

const locations: Record<string, LocationData> = {
  'fond-du-lac': {
    name: 'Fond du Lac',
    displayName: 'Fond du Lac',
    description: 'Serving Fond du Lac and surrounding areas with professional DJ services for weddings, corporate events, school dances, and more.',
  },
  'fox-valley': {
    name: 'Fox Valley',
    displayName: 'Fox Valley',
    description: 'Bringing exceptional entertainment to the Fox Valley region. From Appleton to Oshkosh, we provide top-tier DJ services for all your event needs.',
  },
  'green-bay': {
    name: 'Green Bay',
    displayName: 'Green Bay',
    description: 'Professional DJ services throughout the Green Bay area. We bring the energy and expertise to make your event unforgettable.',
  },
  'madison': {
    name: 'Madison',
    displayName: 'Madison',
    description: 'Serving Madison and the surrounding areas with award-winning DJ services. We make your special day truly memorable.',
  },
  'milwaukee': {
    name: 'Milwaukee',
    displayName: 'Milwaukee',
    description: 'Premier DJ services in the Milwaukee area. Decades of experience creating unforgettable events throughout the region.',
  },
  'sheboygan': {
    name: 'Sheboygan',
    displayName: 'Sheboygan',
    description: 'Professional entertainment services for Sheboygan and nearby communities. We bring All The Music and All The Fun to your event.',
  },
  'wisconsin-dells': {
    name: 'Wisconsin Dells',
    displayName: 'Wisconsin Dells',
    description: 'Serving Wisconsin Dells with exceptional DJ services. From intimate gatherings to large celebrations, we deliver unforgettable experiences.',
  },
};

export async function generateStaticParams() {
  return Object.keys(locations).map((location) => ({
    location: location,
  }));
}

export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const locationData = locations[params.location];

  if (!locationData) {
    return {
      title: 'Service Area Not Found',
    };
  }

  return {
    title: `DJ Services in ${locationData.displayName}, WI | Record Entertainment`,
    description: `Professional DJ services in ${locationData.displayName}, Wisconsin. ${locationData.description} Contact us for weddings, corporate events, school dances, and more.`,
  };
}

export default function ServiceAreaPage({ params }: { params: { location: string } }) {
  const locationData = locations[params.location];

  if (!locationData) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-x-hidden min-h-[50vh] sm:min-h-[50vh] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <VideoBackgroundRounded />
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full text-center">
          <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">SERVICE AREA</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            DJ Services in {locationData.displayName}, WI
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto text-glass">
            {locationData.description}
          </p>
        </div>
      </section>

      {/* Services Overview - Animated */}
      <AnimatedServicesSection locationName={locationData.displayName} />

      {/* Why Choose Us - Animated */}
      <AnimatedWhyChooseSection locationName={locationData.displayName} />

      {/* Gallery Section */}
      <section className="py-12 bg-dark">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">OUR WORK</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Events in {locationData.displayName}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See the energy and excitement we bring to events throughout {locationData.displayName} and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src="/assets/images/p-1.jpg"
                alt="Event gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src="/assets/images/p-2.jpg"
                alt="Event gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src="/assets/images/p-9.jpg"
                alt="Event gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
              <Image
                src="/assets/images/wedding1.jpg"
                alt="Event gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-dark-500 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event in {locationData.displayName}?</h2>
          <p className="text-xl mb-8 text-gray-300">Contact us today to discuss your event needs</p>
          <div className="flex flex-row gap-4 justify-center items-center">
            <Link
              href="/booking"
              className="inline-block bg-primary-500 text-black px-6 py-3 rounded-lg font-semibold text-base hover:bg-primary-600 transition-all duration-200"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-block glass-strong text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

