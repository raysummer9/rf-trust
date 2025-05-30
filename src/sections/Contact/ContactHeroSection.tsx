"use client";
import React, { useState } from 'react';

const ContactHeroSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    jobTitle: '',
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
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phone: '',
        city: '',
        country: '',
        jobTitle: '',
        message: '',
        consent: false
      });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrors({ 
        submit: error instanceof Error ? error.message : 'Failed to submit form. Please try again.' 
      });
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
          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 mt-1 mr-3 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="text-white/90">
                <p className="font-medium">Address</p>
                <p className="text-sm">West Wing Trafalgar Court, 4th Floor</p>
                <p className="text-sm">GY1 3RL, Guernsey</p>
                <p className="text-sm">Channel Islands</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 mt-1 mr-3 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="text-white/90">
                <p className="font-medium">Email</p>
                <p className="text-sm">contact@rf-trust.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 mt-1 mr-3 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-white/90">
                <p className="font-medium">Phone</p>
                <p className="text-sm">+44 (0) 1481 727577</p>
              </div>
            </div>
          </div>
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
              <label className="block text-sm font-medium mb-1 text-gray-800">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400 text-gray-900`}
                placeholder="Enter your first name"
                required
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400 text-gray-900`}
                placeholder="Enter your last name"
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
                className={`w-full border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400 text-gray-900`}
                placeholder="Enter your company name"
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
                className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400 text-gray-900"
                placeholder="Enter your job title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400 text-gray-900`}
                placeholder="Enter your email address"
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400 text-gray-900`}
                placeholder="Enter your phone number"
                required
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400 text-gray-900`}
                placeholder="Enter your city"
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
                className={`w-full border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 placeholder-gray-400 text-gray-900`}
                placeholder="Enter your country"
                required
              />
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-800">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 min-h-[80px] placeholder-gray-400 text-gray-900`}
              placeholder="Enter your message"
              required
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
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