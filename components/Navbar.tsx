"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const logoUrl =
  "https://www.figma.com/api/mcp/asset/76f4444d-a669-4ac4-a5c3-4f330c516445";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "How it works", href: "/how-it-works" },
];

const moreLinks = ["About", "Blog", "Contact"];

export default function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#e6efff] w-full shrink-0 overflow-hidden">
      <div className="flex h-[72px] items-center justify-center overflow-hidden px-16 w-full">
        <div className="flex flex-1 items-center justify-between min-w-0">
          {/* Left: logo + links */}
          <div className="flex items-center gap-6 shrink-0">
            <Link href="/" className="relative h-9 w-[84px] shrink-0 overflow-hidden">
              <Image
                src={logoUrl}
                alt="Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8 overflow-hidden shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#000906] text-base font-normal leading-[1.5] whitespace-nowrap hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {link.label}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative shrink-0">
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="flex items-center justify-center gap-1 text-[#000906] text-base font-normal leading-[1.5] whitespace-nowrap hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  More
                  <span className="relative size-6 shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {moreOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setMoreOpen(false)}
                    />
                    <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-[rgba(0,9,6,0.1)] py-1 z-50">
                      {moreLinks.map((item) => (
                        <Link
                          key={item}
                          href={`/${item.toLowerCase()}`}
                          className="block px-4 py-2 text-sm text-[#000906] hover:bg-[#e6efff] transition-colors"
                          onClick={() => setMoreOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right: actions */}
          <div className="hidden md:flex items-center justify-center gap-4 shrink-0">
            <Link
              href="/signin"
              className="bg-[rgba(0,9,6,0.05)] border border-transparent flex items-center justify-center px-[10px] py-1 rounded-md text-[#000906] text-base font-medium leading-[1.5] whitespace-nowrap hover:bg-[rgba(0,9,6,0.1)] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="bg-[#0b5fff] border border-[#0b5fff] flex items-center justify-center px-[10px] py-1 rounded-md text-white text-base font-medium leading-[1.5] whitespace-nowrap hover:bg-[#0047e0] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Register
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#000906]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#e6efff] border-t border-[rgba(0,9,6,0.15)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#000906] text-base font-normal leading-[1.5]"
              style={{ fontFamily: "var(--font-inter)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {moreLinks.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[#000906] text-base font-normal leading-[1.5]"
              style={{ fontFamily: "var(--font-inter)" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link
              href="/signin"
              className="flex-1 text-center bg-[rgba(0,9,6,0.05)] px-3 py-2 rounded-md text-[#000906] text-sm font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="flex-1 text-center bg-[#0b5fff] px-3 py-2 rounded-md text-white text-sm font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
