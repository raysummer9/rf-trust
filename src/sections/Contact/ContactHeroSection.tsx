"use client";
import React, { useState } from 'react';

const ContactHeroSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.consent) newErrors.consent = 'Please consent to the privacy notice';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        jobTitle: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        message: '',
        consent: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left: Blue background with text */}
      <div className="flex-1 bg-[#4A90E2] flex flex-col justify-center items-center px-6 py-16 md:py-0">
        <div className="max-w-md text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Here to simplify<br />
            the complex.<br />
            <span className="italic text-white/90">Let&apos;s talk</span>
          </h1>
          <p className="text-lg md:text-base font-normal text-white/90">
            Our team is committed to making life simpler for our clients, offering responsive support, expert guidance, and solutions tailored to your needs. Reach out today, let&apos;s take the next step together.
          </p>
        </div>
      </div>
      {/* Right: Contact Form */}
      <div className="flex-1 flex justify-center items-center px-4 py-16 md:py-0 bg-[#4A90E2]">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 md:p-12">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded">
              Thank you for your message. We&apos;ll get back to you soon!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded">
              Sorry, there was an error submitting your message. Please try again.
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">First name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400`}
                placeholder="e.g. John"
                required
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Last name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400`}
                placeholder="e.g. Doe"
                required
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`w-full border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400`}
                placeholder="e.g. Acme Inc"
                required
              />
              {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400"
                placeholder="e.g. CEO"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400`}
                placeholder="e.g. john@example.com"
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400"
                placeholder="e.g. +1 234 567 890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400`}
                placeholder="e.g. New York"
                required
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Country *</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400`}
                placeholder="e.g. United States"
                required
              />
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-800">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 min-h-[80px] placeholder-gray-400"
              placeholder="How can we help you?"
            />
          </div>
          <div className="text-xs text-gray-600 mb-2">
            We use this form to contact you. See our Privacy Notice to learn how we handle your data.
          </div>
          <div className="flex items-start mb-6">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className={`mt-1 mr-2 ${errors.consent ? 'border-red-500' : ''}`}
              required
            />
            <span className="text-xs text-gray-700">
              By clicking submit, I consent to RF Trust collecting the personal details outlined above and have read and understood <a href="/legal/privacy" className="underline text-blue-600">RF Trust&apos;s Privacy Notice</a>
            </span>
            {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#338DF3] text-white font-semibold py-3 rounded hover:bg-[#2563EB] transition ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactHeroSection; 