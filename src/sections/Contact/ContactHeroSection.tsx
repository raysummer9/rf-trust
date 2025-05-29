"use client";
import React from 'react';

const ContactHeroSection = () => {
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
        <form className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">First name *</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400" placeholder="e.g. Jane Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Last name *</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400" placeholder="e.g. Jane Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Company Name*</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400" placeholder="e.g. Jane Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Job Title</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400" placeholder="e.g. Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Email *</label>
              <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400" placeholder="e.g. Jane Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Phone</label>
              <input type="tel" className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400" placeholder="e.g. Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">City *</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400" placeholder="e.g. Jane Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Country*</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 placeholder-gray-400" placeholder="e.g. Jane Doe" required />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-800">Message</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 min-h-[80px] placeholder-gray-400" placeholder="e.g. Jane Doe" />
          </div>
          <div className="text-xs text-gray-600 mb-2">
            We use this form to contact you. See our Privacy Notice to learn how we handle your data.
          </div>
          <div className="flex items-start mb-6">
            <input type="checkbox" className="mt-1 mr-2" required />
            <span className="text-xs text-gray-700">By clicking submit, I consent to RF Trust collecting the personal details outlined above and have read and understood <a href="#" className="underline text-blue-600">RF Trust&apos;s Privacy Notice</a></span>
          </div>
          <button type="submit" className="w-full bg-[#338DF3] text-white font-semibold py-3 rounded hover:bg-[#2563EB] transition">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactHeroSection; 