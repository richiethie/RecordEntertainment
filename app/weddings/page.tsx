import Link from 'next/link';
import Image from 'next/image';
import OverlappingImages from '@/components/OverlappingImages';
import OverlappingImagesMobile from '@/components/OverlappingImagesMobile';

export default function Weddings() {
  const weddingServices = [
    {
      title: 'Ceremony Music & Sound',
      description: 'DJ to provide mic for officiant, readers, musicians as necessary; will run sound and start music thirty minutes prior to ceremony start time, as your guests are being seated. After ceremony, DJ transitions to cocktail music and is available for announcements, etc.',
      image: '/assets/images/p-4.jpeg',
    },
    {
      title: 'Cocktail Music',
      description: 'Music for you and your guests to enjoy before your dinner begins. DJ will be available to make any necessary announcements during this time.',
      image: '/assets/images/cocktailhour.jpg',
    },
    {
      title: 'Dinner Music',
      description: 'You and your guests will be tapping their toes and moving in their seats because your DJ knows how to build the energy in the room all the way to the dance floor! DJ will facilitate introductions, speeches, and any other special happenings that you decide upon ahead of time, then seamlessly shift into dance mode to keep the party going all night long.',
      image: '/assets/images/dinnermusic.webp',
    },
    {
      title: 'Classic Package - Four Hours of Dancing',
      description: 'When the dance portion of your party begins, Record Entertainment leads the way - providing ALL THE MUSIC and ALL THE FUN! Professionally trained DJ kicks off your grand march, transitions into specialty dances, and reads the room to keep you and your guests on the dance floor. Everyone will be talking about the fun they had at your wedding for years to come! Pre-wedding consultation, travel, standard light show, and setup included.',
      image: '/assets/images/p-5.jpg',
    },
  ];

  const addOnServices = [
    {
      title: 'Photo Booth',
      description: '3 hours of our photo booth complete with props, unlimited photos for your guests, an attendant to operate the booth, and a book of all of the photos put together for the wedding couple. Travel & setup included.',
      image: '/assets/images/p-6.jpg',
    },
    {
      title: 'Uplights (4)',
      description: 'Colorful accent lighting to highlight areas at your reception. Color(s), placement, and number of lights can be determined closer to the wedding.',
      image: '/assets/images/p-7.jpg',
    },
    {
      title: 'Monogram Light',
      description: 'A beautiful, custom designed monogram with your names, initials, and date; projected where you choose - above your head table, your dance floor, you name it!',
      image: '/assets/images/p-8.jpg',
    },
    {
      title: 'MultiMedia Memories',
      description: 'Video creation of 3 vignettes of your photos: 25 + 25 photos of each partner individually, and 25 photos of the couple together - edited to music selections of your choice and displayed on our projector and screen at your reception.',
      image: '/assets/images/p-9.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-dark-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">Weddings</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Your Perfect Wedding Day</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've helped countless couples bring their vision to life. Allow us to bring the energy to the next level while keeping the formalities elegant and timeless.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-dark-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="block sm:hidden">
            <OverlappingImagesMobile
              primaryImage="/assets/images/wedding1.jpg"
              secondaryImage="/assets/images/p-4.jpeg"
              primaryAlt="Wedding event"
              secondaryAlt="Wedding celebration"
            />
          </div>
          <div className="hidden sm:block">
            <OverlappingImages
              primaryImage="/assets/images/wedding1.jpg"
              secondaryImage="/assets/images/p-4.jpeg"
              primaryAlt="Wedding event"
              secondaryAlt="Wedding celebration"
            />
          </div>
        </div>
      </section>

      {/* Standard Wedding Services */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Wedding Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From ceremony to reception, we provide comprehensive DJ services to make your special day unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weddingServices.map((service, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 rounded-xl mb-4 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Add-On Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Enhance your wedding experience with these additional services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOnServices.map((service, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 rounded-xl mb-4 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Why Choose Record Entertainment for Your Wedding?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">7x</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Couple's Choice Award</h3>
              <p className="text-gray-300">Recognized excellence in wedding entertainment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">40+</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Years of Experience</h3>
              <p className="text-gray-300">Decades of creating unforgettable wedding memories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Dedicated</h3>
              <p className="text-gray-300">Committed to making your day perfect</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-500 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Perfect Wedding?</h2>
          <p className="text-xl mb-8 text-gray-300">Contact us today to discuss your wedding DJ needs</p>
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

