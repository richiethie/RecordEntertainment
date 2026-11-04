'use client';

import { useState } from 'react';
import Link from 'next/link';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage('');
    setStatusType('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message');
      }

      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setStatusType('success');
      setStatusMessage('Message sent successfully. We will get back to you soon.');
    } catch (error) {
      console.error('Contact form error:', error);
      setStatusType('error');
      setStatusMessage('Unable to send your message right now. Please try again shortly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative text-white overflow-x-hidden min-h-[30vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <VideoBackgroundRounded />
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full text-center">
          <div className="mb-4 sm:mb-8">
            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 glass-strong rounded-full">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-500 font-semibold">Contact</p>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">Have a question? Send us a message.</p>
        </div>
      </section>

      <section className="bg-dark py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Contact Us</h1>
          <p className="text-gray-300 mb-8">
            Have a question? Send us a message and we will reply as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
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
              disabled={isSubmitting}
              className="w-full bg-primary-500 text-black px-8 py-3 rounded-2xl font-bold hover:bg-gray-400 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {statusMessage && (
            <p className={`mt-4 text-sm ${statusType === 'success' ? 'text-primary-400' : 'text-red-400'}`}>
              {statusMessage}
            </p>
          )}

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-gray-300 mb-3">Need pricing for your event?</p>
            <Link
              href="/booking"
              className="inline-block bg-primary-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-primary-400 transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

