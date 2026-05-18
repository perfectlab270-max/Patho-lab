"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteData } from "./site-data";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t("menu.tests"), href: "/tests" },
    { name: t("menu.book"), href: "/book" },
    { name: t("menu.reports"), href: "/reports" },
    { name: t("menu.gallery"), href: "/gallery" }
  ];

  return (
    <header className="bg-white border-b border-teal-50 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Left Side: Brand signature without icon */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="group flex flex-col">
            <span className="font-serif font-black text-xl sm:text-2xl tracking-tight text-slate-900 leading-none group-hover:text-teal-600 transition duration-300">
              {siteData.name}
            </span>
            <span className="text-[9px] text-slate-400 font-semibold tracking-wider uppercase mt-1">
              {t("logo.subtitle")}
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav with wide spread margins */}
        <nav className="hidden lg:flex gap-5 xl:gap-10 items-center text-[13px] sm:text-sm font-semibold text-slate-600 justify-center whitespace-nowrap">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="relative py-1.5 hover:text-teal-600 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-teal-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side: Language Switcher & Call-to-action button */}
        <div className="hidden md:flex gap-3 lg:gap-5 items-center flex-1 justify-end">
          
          {/* Language Toggle Pill */}
          <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200 flex-shrink-0">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                language === "en" 
                  ? "bg-white text-teal-700 shadow-xs" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                language === "hi" 
                  ? "bg-white text-teal-700 shadow-xs" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              हिंदी
            </button>
          </div>

          <Link 
            href="/book"
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap flex-shrink-0"
          >
            {t("cta.book")}
          </Link>
        </div>

        {/* Mobile Nav Toggle with quick language toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Small Language Toggle for Mobile */}
          <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                language === "en" ? "bg-white text-teal-700 shadow-xs" : "text-slate-500"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                language === "hi" ? "bg-white text-teal-700 shadow-xs" : "text-slate-500"
              }`}
            >
              हिं
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 focus:outline-hidden p-1.5"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-3 shadow-md animate-fadeIn">
          <nav className="flex flex-col gap-3 text-sm font-bold text-slate-700">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-teal-600 py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link 
              href="/book" 
              onClick={() => setIsOpen(false)}
              className="bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-full text-center text-xs font-bold transition"
            >
              {t("cta.book")}
            </Link>
            <a 
              href={`https://wa.me/${siteData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-full text-center text-xs font-bold transition"
            >
              {t("cta.whatsapp")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
