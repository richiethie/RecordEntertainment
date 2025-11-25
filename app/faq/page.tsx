'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    category: 'Booking & Pricing',
    question: 'How far in advance should I book?',
    answer: 'We recommend booking as soon as you have your date confirmed, especially for popular wedding dates. Many clients book 6-12 months in advance to ensure availability. For corporate events and school dances, we typically need at least 2-4 weeks notice.',
  },
  {
    category: 'Booking & Pricing',
    question: 'What is your pricing structure?',
    answer: 'Pricing varies based on event type, duration, location, and services needed. Our wedding packages start with our Classic Package (4 hours of dancing), and additional services can be added. For school dances, pricing varies by hours needed. Contact us for a personalized quote based on your specific event requirements.',
  },
  {
    category: 'Booking & Pricing',
    question: 'Do you require a deposit?',
    answer: 'Yes, we typically require a deposit to secure your date. The remaining balance is due closer to your event date. Specific payment terms will be discussed during the booking process.',
  },
  {
    category: 'Wedding Services',
    question: 'What\'s included in your wedding packages?',
    answer: 'Our packages include professional DJ services, high-quality sound equipment, standard lighting, pre-wedding consultation, travel, and setup. The Classic Package includes 4 hours of dancing. Additional services like photo booths, uplights, monogram lights, and multimedia memories can be added.',
  },
  {
    category: 'Wedding Services',
    question: 'Do you provide music for ceremonies?',
    answer: 'Yes! We provide ceremony music and sound services, including microphones for the officiant and readers. We start music 30 minutes before your ceremony begins as guests are being seated, and can transition seamlessly to cocktail music afterward.',
  },
  {
    category: 'Wedding Services',
    question: 'Can I request specific songs?',
    answer: 'Absolutely! During your pre-wedding consultation, we\'ll discuss your music preferences, must-play songs, do-not-play list, and special songs for key moments (first dance, parent dances, etc.). We want your event to reflect your unique style and preferences.',
  },
  {
    category: 'Wedding Services',
    question: 'How long is a typical wedding reception?',
    answer: 'Most wedding receptions last 4-6 hours, which includes cocktail hour, dinner, and dancing. Our Classic Package includes 4 hours of dancing, and additional hours can be added if needed. We work with you to create a timeline that fits your event perfectly.',
  },
  {
    category: 'Equipment & Setup',
    question: 'What equipment do you provide?',
    answer: 'We provide professional-grade sound systems, microphones, lighting equipment, and all necessary cables and stands. Our equipment is regularly maintained and updated to ensure the best quality. For larger events, we can provide additional speakers and lighting as needed.',
  },
  {
    category: 'Equipment & Setup',
    question: 'How early do you arrive for setup?',
    answer: 'We typically arrive 1-2 hours before your event start time to set up equipment, test sound levels, and ensure everything is ready. For ceremonies, we arrive 30 minutes before the ceremony begins to start background music.',
  },
  {
    category: 'Equipment & Setup',
    question: 'Do you provide backup equipment?',
    answer: 'Yes, we always bring backup equipment to ensure your event runs smoothly. This includes backup microphones, cables, and other essential equipment. We\'re prepared for any technical issues that might arise.',
  },
  {
    category: 'Corporate Events',
    question: 'What types of corporate events do you service?',
    answer: 'We provide DJ services for a wide variety of corporate events including seminars, conferences, trade shows, expos, holiday parties, product launches, team building events, and awards ceremonies. We understand corporate event dynamics and maintain appropriate professional standards.',
  },
  {
    category: 'Corporate Events',
    question: 'Can you provide background music during presentations?',
    answer: 'Yes, we can provide appropriate background music during breaks, networking sessions, and other parts of your corporate event. We work with you to select music that fits the tone and atmosphere of your event.',
  },
  {
    category: 'School Dances',
    question: 'Is your music appropriate for school events?',
    answer: 'Absolutely! All music for school dances is radio-edited and free from offensive lyrics. We ensure age-appropriate content that administrators can trust while still keeping the energy high and students engaged.',
  },
  {
    category: 'School Dances',
    question: 'What makes your school dance services interactive?',
    answer: 'Our DJs are experts at building energy on the dancefloor through games, crowd interaction, and expert music selection. They know what to play and when to play it to keep students engaged and having fun throughout the event.',
  },
  {
    category: 'General',
    question: 'What areas do you service?',
    answer: 'We service Fond du Lac, Fox Valley, Green Bay, Madison, Milwaukee, Sheboygan, Wisconsin Dells, and surrounding areas. Travel is included in our packages for events within our service area.',
  },
  {
    category: 'General',
    question: 'How do I choose the right DJ for my event?',
    answer: 'We have a diverse team of DJs with different styles and personalities. During the booking process, we\'ll discuss your event needs and preferences to match you with the DJ who best fits your event style. You can also view our DJ profiles on the "Our DJs" page.',
  },
  {
    category: 'General',
    question: 'What if I need to make changes to my booking?',
    answer: 'We understand that plans can change. Contact us as soon as possible if you need to make changes to your booking, including date, time, services, or other details. We\'ll work with you to accommodate changes when possible.',
  },
  {
    category: 'General',
    question: 'Do you have insurance?',
    answer: 'Yes, we carry comprehensive liability insurance. We can provide proof of insurance if your venue requires it. Just let us know during the booking process.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-dark-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">Find answers to common questions about our services</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-black'
                    : 'glass-card text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-white pr-4">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-dark-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-gray-300">We're here to help! Contact us and we'll get back to you as soon as possible.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-primary-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/booking"
              className="inline-block glass-strong text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

