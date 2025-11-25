import Link from 'next/link';
import Image from 'next/image';
import LeftOverlappingImages from '@/components/LeftOverlappingImages';
import LeftOverlappingImagesMobile from '@/components/LeftOverlappingImagesMobile';

interface CorporateService {
  title: string;
  description: string;
  image: string;
}

export default function CorporateEvents() {
  const corporateServices: CorporateService[] = [
    {
      title: 'Seminars & Conferences',
      description: 'Professional sound and music services for your business seminars and conferences. We provide clear audio for presentations, background music during breaks, and seamless transitions throughout your event.',
      image: '/assets/images/corporate1.jpg',
    },
    {
      title: 'Trade Shows & Expos',
      description: 'Make your booth stand out with our dynamic DJ services. We\'ll create an energetic atmosphere that draws attendees to your space while maintaining a professional environment.',
      image: '/assets/images/corporate2.jpg',
    },
    {
      title: 'Holiday Parties',
      description: 'Transform your company holiday party into an unforgettable celebration. Our DJs know how to get everyone on the dance floor while maintaining appropriate corporate standards.',
      image: '/assets/images/p-1.jpg',
    },
    {
      title: 'Product Launches',
      description: 'Create excitement and energy for your product launch events. We provide professional sound, lighting, and music to enhance your presentation and keep the energy high.',
      image: '/assets/images/p-2.jpg',
    },
    {
      title: 'Team Building Events',
      description: 'Enhance your team building activities with music and entertainment. We can provide background music, interactive games, and create a fun atmosphere that brings your team together.',
      image: '/assets/images/p-5.jpg',
    },
    {
      title: 'Awards Ceremonies',
      description: 'Professional sound and music for your awards ceremonies. We handle introductions, background music, and create an elegant atmosphere that honors your award recipients.',
      image: '/assets/images/p-6.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-dark-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Corporate Events/Parties</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Elevate Your Corporate Events</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Seminars, Expos, Meetings, Holiday or Special Events. Our extensive corporate event experience can elevate your next occasion.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-dark-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="block sm:hidden">
            <LeftOverlappingImagesMobile
              primaryImage="/assets/images/corporate1.jpg"
              secondaryImage="/assets/images/corporate2.jpg"
              primaryAlt="Corporate event"
              secondaryAlt="Corporate celebration"
            />
          </div>
          <div className="hidden sm:block">
            <LeftOverlappingImages
              primaryImage="/assets/images/corporate1.jpg"
              secondaryImage="/assets/images/corporate2.jpg"
              primaryAlt="Corporate event"
              secondaryAlt="Corporate celebration"
            />
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Corporate Event Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Professional DJ services tailored for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 rounded-xl mb-4 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Why Choose Record Entertainment?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-white">Professional</h3>
              <p className="text-gray-300">Experienced DJs who understand corporate event dynamics and maintain appropriate standards</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-white">Flexible</h3>
              <p className="text-gray-300">We adapt to your event timeline and requirements, ensuring everything runs smoothly</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-white">Reliable</h3>
              <p className="text-gray-300">Count on us to deliver professional service that reflects well on your company</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-500 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Corporate Event?</h2>
          <p className="text-xl mb-8 text-gray-300">Contact us today to discuss your corporate event needs</p>
          <Link
            href="/booking"
            className="inline-block bg-primary-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-200"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

