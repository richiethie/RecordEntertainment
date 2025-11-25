'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      message: '',
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-gray-300">Get in touch with us today</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
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
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-300 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-300 mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 glass border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500/50 bg-white/5 text-white placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full glass-strong bg-primary-500/90 text-black px-8 py-3 rounded-2xl font-bold hover:bg-primary-500 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Details</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">258 S Main St</p>
                  <p className="text-gray-300">Fond du Lac, WI 54935</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:9209486887" className="text-primary-400 hover:text-primary-500">
                    (920) 948-6887
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:Kevin@recordentertainment.com" className="text-primary-400 hover:text-primary-500">
                    Kevin@recordentertainment.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Service Areas</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Fond du Lac</li>
                    <li>• Fox Valley</li>
                    <li>• Green Bay</li>
                    <li>• Madison</li>
                    <li>• Milwaukee</li>
                    <li>• Sheboygan</li>
                    <li>• Wisconsin Dells</li>
                  </ul>
                </div>
                <div className="pt-6">
                  <div className="h-64 bg-gray-700 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

