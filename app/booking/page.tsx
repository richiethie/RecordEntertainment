'use client';

import { useState, useEffect } from 'react';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';
import Image from 'next/image';

export default function Booking() {
  // Load Honeybook widget script for tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (function(h: any, b: Document, s: string, n: string, i: string) {
        h._HB_ = h._HB_ || {};
        h._HB_.pid = i;
        const t = b.createElement(s) as HTMLScriptElement;
        t.type = "text/javascript";
        t.async = true;
        t.src = n;
        const e = b.getElementsByTagName(s)[0];
        if (e && e.parentNode) {
          e.parentNode.insertBefore(t, e);
        }
      })(window, document, "script", "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js", "5ddd379ab8a407001bb8c4d0");
    }
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    eventType: '',
    numberOfGuests: '',
    services: [] as string[],
    additionalInfo: '',
  });

  const availableServices = [
    'Ceremony Music & Sound',
    'Cocktail Music',
    'Dinner Music',
    'Classic Package - Four Hours of Dancing',
    'Photo Booth',
    'Uplights',
    'Monogram Light',
    'MultiMedia Memories',
    'Karaoke',
    'Club DJ',
    'Grad Party DJ Services',
    'School Dances',
    'Super DJ Lighting',
    'Additional Hour(s)',
  ];

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Submit to our API route which will forward to Honeybook
      const response = await fetch('/api/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventDate: formData.eventDate,
          eventTime: formData.eventTime,
          eventLocation: formData.eventLocation,
          eventType: formData.eventType,
          numberOfGuests: formData.numberOfGuests,
          services: formData.services.join(', '),
          additionalInfo: formData.additionalInfo,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Send Honeybook tracking pixel
        const trackingImg = document.createElement('img');
        trackingImg.src = `https://www.honeybook.com/p.png?pid=5ddd379ab8a407001bb8c4d0&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`;
        
        alert('Thank you for your booking request! We will contact you soon to discuss your event.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          eventTime: '',
          eventLocation: '',
          eventType: '',
          numberOfGuests: '',
          services: [],
          additionalInfo: '',
        });
      } else {
        throw new Error(result.error || 'Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again or contact us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-x-hidden min-h-[30vh] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <VideoBackgroundRounded />
        </div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full text-center">
          <div className="mb-4 sm:mb-8">
            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 glass-strong rounded-full">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-500 font-semibold">Get a Quote</p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-white to-primary-500 bg-clip-text text-transparent">
              Book Our DJ Services
            </span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Tell us about your event and we'll get back to you with a quote
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex flex-col items-center">
            {/* Image - Above form on desktop */}


            {/* Custom Styled Form - Centered */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Event Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-300 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        paddingRight: '2.5rem',
                      }}
                    >
                      <option value="" className="bg-dark text-white">Select an event type</option>
                      <option value="wedding" className="bg-dark text-white">Wedding</option>
                      <option value="corporate" className="bg-dark text-white">Corporate Event</option>
                      <option value="school" className="bg-dark text-white">School Dance</option>
                      <option value="grad" className="bg-dark text-white">Grad Party</option>
                      <option value="club" className="bg-dark text-white">Club Event</option>
                      <option value="other" className="bg-dark text-white">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-300 mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventTime" className="block text-sm font-medium text-gray-300 mb-2">
                      Event Time
                    </label>
                    <input
                      type="time"
                      id="eventTime"
                      name="eventTime"
                      value={formData.eventTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-300 mb-2">
                      Event Location
                    </label>
                    <input
                      type="text"
                      id="eventLocation"
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-300 mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      id="numberOfGuests"
                      name="numberOfGuests"
                      min="1"
                      value={formData.numberOfGuests}
                      onChange={handleChange}
                      className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Services Interested In
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {availableServices.map((service) => (
                      <label key={service} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 text-primary-500 border-white/20 rounded focus:ring-primary-500 bg-white/5"
                        />
                        <span className="text-sm text-gray-300">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white placeholder-gray-400"
                    placeholder="Tell us anything else we should know about your event..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full glass-strong bg-primary-500/90 text-black px-8 py-3 rounded-2xl font-bold hover:bg-primary-500 transition-all duration-200"
                >
                  Submit Quote Request
                </button>
              </form>
              
              {/* Hidden Honeybook tracking */}
              <div className="hidden">
                <div className="hb-p-5ddd379ab8a407001bb8c4d0-5"></div>
                <img 
                  height={1} 
                  width={1} 
                  style={{ display: 'none' }} 
                  src="https://www.honeybook.com/p.png?pid=5ddd379ab8a407001bb8c4d0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

