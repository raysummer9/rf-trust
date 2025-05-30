import React from 'react';

export default function TermsOfUse() {
  return (
    <>
      <div className="min-h-screen bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#00012E] mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">2. Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on RF Trust&apos;s website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">3. Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The materials on RF Trust&apos;s website are provided on an &apos;as is&apos; basis. RF Trust makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">4. Limitations</h2>
              <p className="text-gray-700 mb-4">
                In no event shall RF Trust or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RF Trust&apos;s website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">5. Revisions and Errata</h2>
              <p className="text-gray-700 mb-4">
                The materials appearing on RF Trust&apos;s website could include technical, typographical, or photographic errors. RF Trust does not warrant that any of the materials on its website are accurate, complete or current.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">6. Links</h2>
              <p className="text-gray-700 mb-4">
                RF Trust has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by RF Trust of the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">7. Modifications</h2>
              <p className="text-gray-700 mb-4">
                RF Trust may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#00012E] mb-4">8. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
} 