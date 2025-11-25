'use client';

import { useState } from 'react';

export default function Booking() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-dark-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get a Quote</h1>
          <p className="text-xl text-gray-300">Tell us about your event and we'll get back to you with a quote</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-6 text-white">Event Information</h2>

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
                    className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white"
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="school">School Dance</option>
                    <option value="grad">Grad Party</option>
                    <option value="club">Club Event</option>
                    <option value="other">Other</option>
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
        </div>
      </section>
    </div>
  );
}

