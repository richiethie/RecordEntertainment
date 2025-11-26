import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const serviceAreas = [
    { name: 'Fond du Lac', href: '/service-areas/fond-du-lac' },
    { name: 'Fox Valley', href: '/service-areas/fox-valley' },
    { name: 'Green Bay', href: '/service-areas/green-bay' },
    { name: 'Madison', href: '/service-areas/madison' },
    { name: 'Milwaukee', href: '/service-areas/milwaukee' },
    { name: 'Sheboygan', href: '/service-areas/sheboygan' },
    { name: 'Wisconsin Dells', href: '/service-areas/wisconsin-dells' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our DJs', href: '/our-djs' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
    { name: 'Booking', href: '/booking' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/recordentertainment', external: true },
    { name: 'Instagram', href: 'https://www.instagram.com/recordentertainment', external: true },
    { name: 'The Knot', href: 'https://www.theknot.com/marketplace/record-entertainment-inc-fond-du-lac-wi-592648', external: true },
    { name: 'WeddingWire', href: 'https://www.weddingwire.com/biz/record-entertainment-inc/afb581ec2c349eb0.html', external: true },
    { name: 'HoneyBook', href: '/booking', external: false },
  ];

  return (
    <footer className="relative z-20 bg-dark-200 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Diagonal accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Top CTA Section - Desktop Only */}
        <div className="hidden lg:block pt-12 pb-8">
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="mb-4">
              <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 glass-strong rounded-full">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-500 font-semibold">READY TO GET STARTED?</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white via-white to-primary-500 bg-clip-text text-transparent">
              Ready to Make Your Event Unforgettable?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              With over 40 years of experience, we're here to bring All The Music and All The Fun to your special day.
            </p>
            <Link
              href="/booking"
              className="inline-block bg-primary-500 text-black px-8 py-3 rounded-xl font-bold text-lg hover:bg-primary-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/20"
            >
              Get a Quote Today
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="pt-8 lg:pt-12 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/assets/images/reinameonlyinverted.PNG"
                  alt="Record Entertainment"
                  width={280}
                  height={65}
                  className="h-14 w-auto object-contain mb-4"
                />
                <div className="space-y-1">
                  <p className="text-primary-500 font-semibold text-sm">Decades of Experience</p>
                  <p className="text-gray-400 text-sm">Unparalleled Talent</p>
                </div>
              </div>
              
              {/* Mobile CTA Button */}
              <div className="lg:hidden mb-6">
                <Link
                  href="/booking"
                  className="inline-block bg-primary-500 text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary-400 transition-all duration-300 text-center"
                >
                  Get a Quote
                </Link>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">258 S Main St</p>
                  <p className="text-gray-400 text-sm">Fond du Lac, WI 54935</p>
                </div>
                <div>
                  <a 
                    href="tel:9209486887" 
                    className="text-white hover:text-primary-500 transition-colors text-sm font-medium block"
                  >
                    (920) 948-6887
                  </a>
                  <a 
                    href="mailto:Kevin@recordentertainment.com" 
                    className="text-gray-400 hover:text-primary-500 transition-colors text-sm block break-all"
                  >
                    Kevin@recordentertainment.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary-500"></span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary-500 transition-all duration-200 text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500/0 rounded-full mr-3 group-hover:bg-primary-500 transition-all duration-200"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas Column */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Service Areas
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary-500"></span>
              </h4>
              <ul className="space-y-3">
                {serviceAreas.map((area) => (
                  <li key={area.name}>
                    <Link 
                      href={area.href} 
                      className="text-gray-400 hover:text-primary-500 transition-all duration-200 text-sm flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500/0 rounded-full mr-3 group-hover:bg-primary-500 transition-all duration-200"></span>
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Awards Column */}
            <div>
              <h4 className="text-lg font-bold mb-6 relative inline-block">
                Connect With Us
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary-500"></span>
              </h4>
              
              {/* Social Links */}
              <div className="space-y-3 mb-8">
                {socialLinks.map((social) => {
                  const LinkComponent = social.external ? 'a' : Link;
                  const linkProps = social.external 
                    ? { href: social.href, target: '_blank', rel: 'noopener noreferrer' }
                    : { href: social.href };
                  
                  return (
                    <div key={social.name}>
                      <LinkComponent
                        {...linkProps}
                        className="text-gray-400 hover:text-primary-500 transition-all duration-200 text-sm flex items-center group"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500/0 rounded-full mr-3 group-hover:bg-primary-500 transition-all duration-200"></span>
                        {social.name}
                      </LinkComponent>
                    </div>
                  );
                })}
              </div>

              {/* Awards Badge */}
              <div className="glass-card rounded-xl p-4 border-l-4 border-primary-500 inline-block">
                <p className="text-primary-500 font-bold text-sm mb-1">7x Couple's Choice</p>
                <p className="text-gray-400 text-xs">Award Recipient</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>Copyright © {new Date().getFullYear()} Record Entertainment | All Rights Reserved.</p>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <span>Made with</span>
              <span className="text-primary-500">❤️</span>
              <span>in Wisconsin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
