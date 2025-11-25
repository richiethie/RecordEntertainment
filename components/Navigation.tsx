'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/our-djs', label: 'Our DJs' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="bg-dark-200/80 backdrop-blur-md sticky top-0 z-[100] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center h-16">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center h-full py-2 flex-shrink-0">
            <Image
              src="/assets/images/reinameonlyinverted.PNG"
              alt="Record Entertainment"
              width={200}
              height={60}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-primary-500 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Book Now Button - Right */}
          <div className="hidden md:flex items-center flex-shrink-0 ml-8">
            <Link
              href="/booking"
              className="bg-primary-500 text-black px-6 py-2 rounded-lg font-semibold text-sm hover:bg-primary-600 transition-all duration-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto text-white hover:text-primary-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

              {/* Mobile Navigation */}
              {isOpen && (
                <div className="md:hidden py-4 border-t border-white/10">
                  <div className="flex flex-col items-center gap-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block w-full glass-strong text-white hover:text-primary-500 transition-colors duration-200 font-medium text-center py-3 px-6 rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      href="/booking"
                      className="block mt-2 bg-primary-500 text-black px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-600 transition-all duration-200 text-center w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              )}
      </div>
    </nav>
  );
}

