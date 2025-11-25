import Link from 'next/link';
import Image from 'next/image';
import OverlappingImages from '@/components/OverlappingImages';
import OverlappingImagesMobile from '@/components/OverlappingImagesMobile';

export default function SchoolDances() {
  const schoolServices = [
    {
      title: 'Age-Appropriate Music',
      description: 'All music is radio-edited and free from offensive lyrics. We ensure a safe, fun environment that's appropriate for students while keeping the energy high.',
      image: '/assets/images/school1.jpg',
    },
    {
      title: 'Interactive DJs',
      description: 'Our DJs know how to build energy on the dancefloor with games, interaction, and expert music selection. They understand what to play and when to play it to keep students engaged.',
      image: '/assets/images/school2.jpg',
    },
    {
      title: 'Flexible Pricing',
      description: 'Price varies by hours needed. We work with school budgets to provide quality entertainment that fits your needs.',
      image: '/assets/images/p-2.jpg',
    },
    {
      title: 'Professional Equipment',
      description: 'High-quality sound and lighting systems that create an exciting atmosphere while maintaining safety standards for school events.',
      image: '/assets/images/p-5.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-dark-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-primary-500 mb-4 font-semibold">School Dances</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">School Dance Entertainment</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Age-appropriate, professionally curated DJ services tailored for students and administrators, featuring radio-edited music free from offensive lyrics.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-dark-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="block sm:hidden">
            <OverlappingImagesMobile
              primaryImage="/assets/images/school1.jpg"
              secondaryImage="/assets/images/school2.jpg"
              primaryAlt="School dance event"
              secondaryAlt="School dance celebration"
            />
          </div>
          <div className="hidden sm:block">
            <OverlappingImages
              primaryImage="/assets/images/school1.jpg"
              secondaryImage="/assets/images/school2.jpg"
              primaryAlt="School dance event"
              secondaryAlt="School dance celebration"
            />
          </div>
        </div>
      </section>

      {/* School Services */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">School Dance Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              All The Music, All The Fun! Our interactive DJs expertly build energy on the dancefloor with games and interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schoolServices.map((service, index) => (
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
      <section className="py-16 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Why Schools Choose Record Entertainment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-white">Safe & Appropriate</h3>
              <p className="text-gray-300">Radio-edited music and age-appropriate content that administrators can trust</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-white">Engaging</h3>
              <p className="text-gray-300">Interactive DJs who know how to get students on the dance floor and keep them there</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-white">Budget-Friendly</h3>
              <p className="text-gray-300">Flexible pricing based on hours needed to fit school budgets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-500 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your School Dance?</h2>
          <p className="text-xl mb-8 text-gray-300">Contact us today to discuss your school dance needs</p>
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

