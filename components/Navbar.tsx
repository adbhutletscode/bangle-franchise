"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/franchise-model", label: "Franchise Model" },
    { href: "/why-choose-us", label: "Why Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-maroon text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl">💍</div>
          <div>
            <h1 className="text-xl font-serif font-bold text-white">
              Bangle Franchise
            </h1>
            <p className="text-xs text-gold">Premium Ethnic Business</p>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:relative top-16 md:top-0 left-0 right-0 bg-dark-maroon md:bg-transparent p-4 md:p-0`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block md:inline text-white hover:text-gold transition-colors py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/enquiry"
            className="block md:inline mt-4 md:mt-0 px-4 py-2 bg-gold text-maroon font-semibold rounded hover:bg-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
