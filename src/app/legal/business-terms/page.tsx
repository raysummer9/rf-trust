import React from 'react';
import Footer from '@/components/Footer';

export default function TermsOfBusiness() {
  return (
    <>
      <div className="min-h-screen bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#00012E] mb-8">Terms of Business</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Business set out the terms and conditions under which RF Trust provides its services to clients. By engaging our services, you agree to be bound by these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">2. Services</h2>
              <p className="text-gray-700 mb-4">
                RF Trust provides a range of financial and trust services, including but not limited to wealth management, trust administration, and corporate services. The specific services provided will be detailed in individual service agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">3. Client Obligations</h2>
              <p className="text-gray-700 mb-4">
                Clients are required to provide accurate and complete information, maintain appropriate insurance coverage, and comply with all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">4. Fees and Payment</h2>
              <p className="text-gray-700 mb-4">
                Our fees are based on the services provided and are detailed in individual service agreements. Payment terms are typically net 30 days from invoice date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">5. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We maintain strict confidentiality regarding client information and business affairs, subject to legal and regulatory requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">6. Liability</h2>
              <p className="text-gray-700 mb-4">
                Our liability is limited to the extent permitted by law and as detailed in individual service agreements. We maintain professional indemnity insurance as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">7. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate the business relationship in accordance with the terms specified in individual service agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">8. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms are governed by and construed in accordance with the laws of the jurisdiction in which RF Trust operates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">9. Contact</h2>
              <p className="text-gray-700 mb-4">
                For any questions regarding these Terms of Business, please contact us at business@rf-trust.com.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 