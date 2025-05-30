"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (consent: "accepted" | "refused") => {
    localStorage.setItem("cookieConsent", consent);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center items-end">
      <div className="bg-white shadow-2xl rounded-t-2xl w-full p-6 md:p-8 mb-0 md:mb-6 border border-gray-200">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-[#00012E] mb-2">Did someone say ... cookies?</h2>
          <p className="text-gray-700 text-base">
            We use cookies to provide you with a better, safer and faster service and to support our business. Some cookies are necessary to use our services, improve our services and make sure that they work properly. You can choose to accept all cookies or refuse non-essential cookies. For more details, see our {" "}
            <a href="/legal/privacy" className="underline text-blue-600 hover:text-blue-800">Privacy Policy</a>.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button
            onClick={() => handleConsent("accepted")}
            className="flex-1 bg-[#338DF3] text-white font-semibold py-3 rounded-lg hover:bg-[#2563EB] transition text-lg"
          >
            Accept all cookies
          </button>
          <button
            onClick={() => handleConsent("refused")}
            className="flex-1 bg-gray-200 text-[#00012E] font-semibold py-3 rounded-lg hover:bg-gray-300 transition text-lg"
          >
            Refuse non-essential cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 