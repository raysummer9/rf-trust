import React from 'react';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#00012E] mb-8">Privacy & Data Protection</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information that you provide directly to us, including but not limited to your name, email address, postal address, phone number, and any other information you choose to provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not share your personal information with third parties except as described in this privacy policy. We may share your information with service providers who perform services on our behalf.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing and against accidental loss, destruction, or damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">5. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">6. Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this privacy policy, please contact us at privacy@rf-trust.com.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 