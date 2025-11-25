import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-dark-200 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8 md:py-12">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Company Info - Full Width on Mobile */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Record Entertainment</h3>
            <p className="text-gray-400 mb-1">Decades of Experience</p>
            <p className="text-gray-400 mb-4">Unparalleled Talent</p>
            <Link
              href="/booking"
              className="inline-block bg-primary-500 text-black px-6 py-2 rounded-lg font-semibold text-sm hover:bg-primary-600 transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <h4 className="text-base font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/our-djs" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Our DJs
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/booking" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Booking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h4 className="text-base font-semibold mb-3">Service Areas</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/service-areas/fond-du-lac" className="hover:text-white transition-colors">
                    Fond du Lac
                  </Link>
                </li>
                <li>
                  <Link href="/service-areas/fox-valley" className="hover:text-white transition-colors">
                    Fox Valley
                  </Link>
                </li>
                <li>
                  <Link href="/service-areas/green-bay" className="hover:text-white transition-colors">
                    Green Bay
                  </Link>
                </li>
                <li>
                  <Link href="/service-areas/madison" className="hover:text-white transition-colors">
                    Madison
                  </Link>
                </li>
                <li>
                  <Link href="/service-areas/milwaukee" className="hover:text-white transition-colors">
                    Milwaukee
                  </Link>
                </li>
                <li>
                  <Link href="/service-areas/sheboygan" className="hover:text-white transition-colors">
                    Sheboygan
                  </Link>
                </li>
                <li>
                  <Link href="/service-areas/wisconsin-dells" className="hover:text-white transition-colors">
                    Wisconsin Dells
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info - Full Width */}
          <div>
            <h4 className="text-base font-semibold mb-3">Contact Us</h4>
            <div className="space-y-1 text-gray-400 text-sm">
              <p>258 S Main St</p>
              <p>Fond du Lac, WI 54935</p>
              <p>
                <a href="tel:9209486887" className="hover:text-white transition-colors">
                  (920) 948-6887
                </a>
              </p>
              <p>
                <a href="mailto:Kevin@recordentertainment.com" className="hover:text-white transition-colors text-xs break-all">
                  Kevin@recordentertainment.com
                </a>
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="pt-4 border-t border-white/5">
            <h4 className="text-base font-semibold mb-3 text-center">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors text-sm">
                The Knot
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors text-sm">
                WeddingWire
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors text-sm">
                HoneyBook
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-white/5 text-center text-gray-400 text-xs">
            <p>Copyright © {new Date().getFullYear()} Record Entertainment</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Record Entertainment</h3>
            <p className="text-gray-400 mb-2">Decades of Experience</p>
            <p className="text-gray-400 mb-4">Unparalleled Talent</p>
            <Link
              href="/booking"
              className="inline-block bg-primary-500 text-black px-6 py-2 rounded-lg font-semibold text-sm hover:bg-primary-600 transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Our Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Details</h4>
            <ul className="space-y-2 text-gray-400">
              <li>258 S Main St</li>
              <li>Fond du Lac, WI 54935</li>
              <li>
                <a href="tel:9209486887" className="hover:text-white transition-colors">
                  (920) 948-6887
                </a>
              </li>
              <li>
                <a href="mailto:Kevin@recordentertainment.com" className="hover:text-white transition-colors">
                  Kevin@recordentertainment.com
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/service-areas/fond-du-lac" className="hover:text-white transition-colors">
                  Fond du Lac
                </Link>
              </li>
              <li>
                <Link href="/service-areas/fox-valley" className="hover:text-white transition-colors">
                  Fox Valley
                </Link>
              </li>
              <li>
                <Link href="/service-areas/green-bay" className="hover:text-white transition-colors">
                  Green Bay
                </Link>
              </li>
              <li>
                <Link href="/service-areas/madison" className="hover:text-white transition-colors">
                  Madison
                </Link>
              </li>
              <li>
                <Link href="/service-areas/milwaukee" className="hover:text-white transition-colors">
                  Milwaukee
                </Link>
              </li>
              <li>
                <Link href="/service-areas/sheboygan" className="hover:text-white transition-colors">
                  Sheboygan
                </Link>
              </li>
              <li>
                <Link href="/service-areas/wisconsin-dells" className="hover:text-white transition-colors">
                  Wisconsin Dells
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-white transition-colors">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-djs" className="text-gray-400 hover:text-white transition-colors">
                  Our DJs
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Follow Us Section - Desktop */}
        <div className="hidden md:block mt-12 pt-8 border-t border-white/5">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                The Knot
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                WeddingWire
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                HoneyBook
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Desktop */}
        <div className="hidden md:block mt-8 pt-8 border-t border-white/5 text-center text-gray-400">
          <p>Copyright © {new Date().getFullYear()} Record Entertainment | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

