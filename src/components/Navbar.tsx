"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Dialog, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import MegaMenu from "@/components/MegaMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest("#services-menu-btn")
      ) {
        setMegaMenuOpen(false);
      }
    }
    if (megaMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [megaMenuOpen]);

  // Handler for Executive Members link
  const handleExecMembersClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/about") {
      e.preventDefault();
      const el = document.getElementById("team");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`w-full z-50 border-b sticky top-0 transition-colors duration-300 ${
        scrolled ? "bg-[#0A0C2C] border-[#0A0C2C]" : "bg-white border-[#C6C6C6]"
      }`}
      style={{ borderBottomWidth: "1px" }}
    >
      <div className="max-w-7xl mx-auto w-full py-[30px] px-8 flex items-center">
        {/* Mobile: Logo and Hamburger on same row */}
        <div className="flex w-full items-center justify-between md:hidden">
          <Link href="/">
            <div className="flex items-center gap-2">
              {scrolled ? (
                <Image 
                  src="/img/rf-logo-white.png" 
                  alt="RF Trust Logo" 
                  width={40} 
                  height={15} 
                  priority 
                />
              ) : (
                <Image 
                  src="/img/rf-logo.png" 
                  alt="RF Trust Logo" 
                  width={40} 
                  height={15} 
                  priority 
                />
              )}
              <span className={`text-lg font-semibold ${scrolled ? "text-white" : "text-black"}`}>RF Trust</span>
            </div>
          </Link>
          <button
            className={`inline-flex items-center justify-center p-2 rounded ${scrolled ? "text-white" : "text-black"} hover:bg-gray-100 focus:outline-none`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-7 w-7" />
          </button>
        </div>
        {/* Desktop: Logo, Nav, Button */}
        <div className="flex-shrink-0 hidden md:block">
          <Link href="/">
            <div className="flex items-center gap-2">
              {scrolled ? (
                <Image 
                  src="/img/rf-logo-white.png" 
                  alt="RF Trust Logo" 
                  width={60} 
                  height={23} 
                  priority 
                />
              ) : (
                <Image 
                  src="/img/rf-logo.png" 
                  alt="RF Trust Logo" 
                  width={60} 
                  height={23} 
                  priority 
                />
              )}
              <span className={`text-xl font-semibold ${scrolled ? "text-white" : "text-black"}`}>RF Trust</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 justify-center flex-wrap items-center gap-2">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className={`flex items-center text-sm font-normal tracking-wide px-4 py-2 rounded transition focus:outline-none ${scrolled ? "text-white hover:text-blue-200" : "text-black hover:text-blue-700"}`}>
              ABOUT <ChevronDownIcon className="ml-1 h-4 w-4" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-white border border-gray-200 rounded shadow-lg focus:outline-none z-50">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about"
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 ${active ? "bg-blue-50" : ""}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about#team"
                      scroll={false}
                      onClick={handleExecMembersClick}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 ${active ? "bg-blue-50" : ""}`}
                    >
                      Executive Members
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
          {/* SERVICES menu */}
          <li className="relative group hidden md:block">
            <button
              id="services-menu-btn"
              type="button"
              className={`flex items-center text-sm font-normal tracking-wide px-4 py-2 rounded transition focus:outline-none ${scrolled ? "text-white hover:text-blue-200" : "text-black hover:text-blue-700"}`}
              onClick={() => setMegaMenuOpen((open) => !open)}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={megaMenuOpen}
            >
              SERVICES
              <svg className={`ml-1 w-4 h-4 transition-transform ${megaMenuOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* MegaMenu: Desktop only */}
            <div
              ref={megaMenuRef}
              className={`fixed left-0 top-[90px] w-full z-50 ${megaMenuOpen ? "block" : "hidden"}`}
            >
              <MegaMenu />
            </div>
          </li>
          {/* ACCOUNTS menu */}
          <Link
            href="/services#accounts"
            className={`flex items-center text-sm font-normal tracking-wide px-4 py-2 rounded transition focus:outline-none ${scrolled ? "text-white hover:text-blue-200" : "text-black hover:text-blue-700"}`}
          >
            ACCOUNTS
          </Link>
          {/* LOANS menu */}
          <Link
            href="/services#loans"
            className={`flex items-center text-sm font-normal tracking-wide px-4 py-2 rounded transition focus:outline-none ${scrolled ? "text-white hover:text-blue-200" : "text-black hover:text-blue-700"}`}
          >
            LOANS
          </Link>
          {/* RESOURCES menu (unchanged) */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className={`flex items-center text-sm font-normal tracking-wide px-4 py-2 rounded transition focus:outline-none ${scrolled ? "text-white hover:text-blue-200" : "text-black hover:text-blue-700"}`}>
              RESOURCES <ChevronDownIcon className="ml-1 h-4 w-4" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 mt-2 w-64 origin-top-left bg-white border border-gray-200 rounded shadow-lg focus:outline-none z-50">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/resources/faqs" className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 ${active ? "bg-blue-50" : ""}`}>FAQs</Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
          {/* CONTACT link */}
          <Link
            href="/contact"
            className={`text-sm font-normal tracking-wide px-4 py-2 rounded transition ${scrolled ? "text-white hover:text-blue-200" : "text-black hover:text-blue-700"}`}
          >
            CONTACT
          </Link>
        </div>
        {/* Button on the far right */}
        <div className="flex-shrink-0 ml-auto hidden md:block">
          <a href="https://secure.rf-trust.com" target="_blank" rel="noopener noreferrer" className={`px-8 py-3 rounded-none transition font-semibold text-base shadow-none ${scrolled ? "bg-[#3B82F6] text-white hover:bg-blue-600" : "bg-blue-500 text-white hover:bg-blue-600"}`}>Online Banking</a>
        </div>
      </div>
      {/* Mobile Menu Dialog */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-50 bg-black/40" aria-hidden="true" />
        <Dialog.Panel className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6">
          <div className="flex items-center justify-between mb-8">
            <Link href="/">
              <div className="flex items-center gap-2">
                {scrolled ? (
                  <Image 
                    src="/img/rf-logo-white.png" 
                    alt="RF Trust Logo" 
                    width={35} 
                    height={13} 
                    priority 
                  />
                ) : (
                  <Image 
                    src="/img/rf-logo.png" 
                    alt="RF Trust Logo" 
                    width={35} 
                    height={13} 
                    priority 
                  />
                )}
                <span className="text-lg font-semibold text-black">RF Trust</span>
              </div>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <XMarkIcon className="h-7 w-7 text-black" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="flex items-center text-base font-normal tracking-wide px-2 py-2 rounded transition focus:outline-none text-black hover:text-blue-700">
                ABOUT <ChevronDownIcon className="ml-1 h-4 w-4" />
              </Menu.Button>
              <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-white border border-gray-200 rounded shadow-lg focus:outline-none z-50">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/about"
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 ${active ? "bg-blue-50" : ""}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        About Us
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/about#team"
                        scroll={false}
                        onClick={e => {
                          handleExecMembersClick(e);
                          setMobileMenuOpen(false);
                        }}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 ${active ? "bg-blue-50" : ""}`}
                      >
                        Executive Members
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="flex items-center text-base font-normal tracking-wide px-2 py-2 rounded transition focus:outline-none text-black hover:text-blue-700">
                SERVICES <ChevronDownIcon className="ml-1 h-4 w-4" />
              </Menu.Button>
              <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left bg-white border border-gray-200 rounded shadow-lg focus:outline-none z-50">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/services" className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 ${active ? "bg-blue-50" : ""}`}>Our Services</Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/services#services-grid" className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 ${active ? "bg-blue-50" : ""}`}>Fund Services</Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/services#services-grid" className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 ${active ? "bg-blue-50" : ""}`}>Private Client Services</Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/services#services-grid" className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 ${active ? "bg-blue-50" : ""}`}>Additional Services</Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
            <Link
              href="/services#accounts"
              className="text-black text-base font-normal hover:text-blue-700 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              ACCOUNTS
            </Link>
            <Link
              href="/services#loans"
              className="text-black text-base font-normal hover:text-blue-700 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              LOANS
            </Link>
            <Link
              href="/contact"
              className="text-black text-base font-normal hover:text-blue-700 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <a href="https://secure.rf-trust.com" target="_blank" rel="noopener noreferrer" className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-none hover:bg-blue-600 transition font-normal text-base shadow-none text-center">Online Banking</a>
          </nav>
        </Dialog.Panel>
      </Dialog>
    </nav>
  );
}