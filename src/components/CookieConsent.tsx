"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookieConsent');
    if (!hasAcceptedCookies) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#00012E] text-white p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm md:text-base">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
          <Link href="/legal/cookie" className="underline hover:text-blue-400 transition">
            Learn more
          </Link>
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-white text-[#00012E] hover:bg-blue-400 hover:text-white transition rounded-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
} 