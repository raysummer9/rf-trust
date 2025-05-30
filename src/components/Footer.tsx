import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00012E] text-white pt-16 pb-8 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top: 6-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-start">
          {/* Logo and Slogan */}
          <div className="flex flex-col items-start md:items-start md:col-span-2">
            <Link href="/">
              <Image src="/img/rf-logo.png" alt="RF Trust" width={100} height={41} className="mb-8" />
            </Link>
            <div className="text-3xl md:text-4xl font-bold mb-8 mt-4 leading-tight whitespace-pre-line">TOGETHER WE DELIVER SUCCESS</div>
            <div className="space-y-4 text-white/90">
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm">West Wing Trafalgar Court, 4th Floor</p>
                  <p className="text-sm">GY1 3RL, Guernsey</p>
                  <p className="text-sm">Channel Islands</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm">contact@rf-trust.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm">+44 (0) 1481 727577</p>
                </div>
              </div>
            </div>
          </div>
          {/* Services */}
          <div>
            <div className="font-bold text-lg mb-4">SERVICES</div>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link href="/services#services-grid" className="hover:text-blue-400 transition">Funds</Link></li>
              <li><Link href="/services#services-grid" className="hover:text-blue-400 transition">Private Clients</Link></li>
              <li><Link href="/services#services-grid" className="hover:text-blue-400 transition">Corporate Clients</Link></li>
            </ul>
          </div>
          {/* About Us */}
          <div>
            <div className="font-bold text-lg mb-4">ABOUT US</div>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/about#our-journey" className="hover:text-blue-400 transition">Awards & Accolades</Link></li>
              <li><Link href="/about#team" className="hover:text-blue-400 transition">Meet our People</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <div className="font-bold text-lg mb-4">CONTACT</div>
            <ul className="space-y-2">
              <li><Link href="/contact#location" className="hover:text-blue-400 transition">Location</Link></li>
              <li><Link href="/contact#staff" className="hover:text-blue-400 transition">Staff Directory</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Make an enquiry</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition">Careers</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <div className="font-bold text-lg mb-4">LEGAL</div>
            <ul className="space-y-2">
              <li><Link href="/legal/terms" className="hover:text-blue-400 transition">Terms of Use</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-blue-400 transition">Privacy & Data Protection</Link></li>
              <li><Link href="/legal/business-terms" className="hover:text-blue-400 transition">Terms of Business</Link></li>
              <li><Link href="/legal/cookie" className="hover:text-blue-400 transition">Cookie</Link></li>
            </ul>
          </div>
        </div>
        {/* Bottom: 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-8 w-full">
          {/* Back to Top */}
          <div className="flex justify-start">
            <a href="#" className="text-lg border-b border-white pb-1 hover:opacity-80 transition whitespace-nowrap">Back to Top ↑</a>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center gap-8">
            <a href="https://twitter.com/rftrust" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center border border-white rounded-full text-2xl hover:bg-white hover:text-[#00012E] transition">
              <span className="sr-only">X</span>
              <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M20.5 7.5l-13 13m0-13l13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
            <a href="https://linkedin.com/company/rftrust" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center border border-white rounded-full text-2xl transition group hover:bg-[#00012E] hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg width="35" height="35" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="14" className="transition-colors group-hover:fill-[#00012E]"/>
                <path d="M9.333 11.667H12V19H9.333V11.667ZM10.667 10.333C11.4034 10.333 12 9.73642 12 9C12 8.26358 11.4034 7.66699 10.667 7.66699C9.93058 7.66699 9.33398 8.26358 9.33398 9C9.33398 9.73642 9.93058 10.333 10.667 10.333ZM14 11.667H16.333V12.666H16.367C16.703 12.034 17.503 11.367 18.667 11.367C21.333 11.367 21.667 13.034 21.667 15.034V19H19V15.367C19 14.367 19 13.034 17.667 13.034C16.333 13.034 16.333 14.234 16.333 15.367V19H14V11.667Z" fill="#fff"/>
              </svg>
            </a>
          </div>
          {/* Search Bar */}
          <div className="flex justify-end">
            <form className="flex items-center w-full md:w-[340px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-3 rounded-l-lg bg-transparent border border-white text-white placeholder-white focus:outline-none"
              />
              <button type="submit" className="px-4 py-3 bg-transparent border-t border-b border-r border-white rounded-r-lg text-white hover:bg-white hover:text-[#00012E] transition">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </form>
          </div>
        </div>
        {/* Copyright at the very bottom left under logo/slogan */}
        <div className="w-full flex">
          <div className="text-base text-white/70 mt-8">©2025 RF Trust</div>
        </div>
      </div>
    </footer>
  );
} 