import React from 'react';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <>
      <div className="min-h-screen bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#00012E] mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                <li>Preference cookies: Remember your settings and preferences</li>
                <li>Marketing cookies: Used to track visitors across websites</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">3. Types of Cookies We Use</h2>
              <p className="text-gray-700 mb-4">
                We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period of time).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                Some cookies are placed by third-party services that appear on our pages. We use these cookies to analyze how you use our website and to provide you with relevant content and advertisements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">5. Managing Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">6. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this cookie policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">7. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies, please contact us at privacy@rf-trust.com.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 