"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "./site-data";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function Home() {
  const { language, t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "/small_lab_single_person.png",
      alt: "State of the art Pathology Lab",
      title: language === "hi" ? "विश्वसनीय पैथोलॉजी लैब" : "Trusted Pathology Laboratory",
      ctaText: language === "hi" ? "जांच दरें देखें →" : "View Tests & Pricing →",
      ctaLink: "/tests"
    },
    {
      image: "/indian_home_sample_collection.png",
      alt: "Friendly home sample collection",
      title: language === "hi" ? "फ्री होम सैंपल कलेक्शन" : "Free Home Sample Collection",
      ctaText: language === "hi" ? "होम कलेक्शन बुक करें →" : "Book Home Collection →",
      ctaLink: "/book"
    },
    {
      image: "/indian_molecular_analyzer.png",
      alt: "Precise Roche Cobas Analyzer",
      title: language === "hi" ? "सटीक एवं प्रमाणित मशीनें" : "Precise Certified Analyzers",
      ctaText: language === "hi" ? "गुणवत्ता ऑडिट देखें →" : "View Quality Audits →",
      ctaLink: "/quality"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      
      {/* Hero Section - 50/50 Split Screen Immersive Layout (Cut in the Middle) */}
      <section className="w-full min-h-[420px] md:h-[460px] bg-white grid md:grid-cols-12 overflow-hidden border-b border-slate-200">
        
        {/* Left Column: Solid Pure White Background (Top to Bottom) */}
        <div className="md:col-span-6 bg-white flex items-center h-full">
          <div className="w-full max-w-xl mx-auto px-6 sm:px-12 md:pl-20 md:pr-10 py-10 md:py-0 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-slate-900 tracking-tight leading-tight">
              {t("hero.title1")} <br />
              <span className="text-teal-600">{t("hero.title2")}</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t("hero.desc")}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link 
                href="/book"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition duration-200"
              >
                {t("cta.book")}
              </Link>
              <Link 
                href="/tests"
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition duration-200"
              >
                {t("service.catalog.cta")}
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Sliding Immersive Clinical Carousel (Cut from Middle) */}
        <div className="md:col-span-6 relative w-full h-[280px] md:h-full overflow-hidden bg-slate-950">
          {/* Slides */}
          {slides.map((slide, idx) => (
            <div 
              key={idx} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <img 
                src={slide.image} 
                alt={slide.alt} 
                className="w-full h-full object-cover"
              />
              {/* Soft visual protection overlay */}
              <div className="absolute inset-0 bg-slate-950/15"></div>
            </div>
          ))}

          {/* Quick Access Info HUD (Hidden on Mobile to fit perfectly) */}
          <div className="hidden sm:flex absolute bottom-6 right-6 z-20 flex items-center gap-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 shadow-lg">
            <div className="text-left pr-4 border-r border-white/20">
              <p className="text-[9px] text-teal-400 font-extrabold uppercase tracking-wider">
                {language === "hi" ? "परफेक्ट डायग्नोस्टिक्स" : "Perfect Diagnostics"}
              </p>
              <p className="text-white text-xs font-bold truncate mt-0.5 max-w-[140px]">
                {slides[activeSlide].title}
              </p>
            </div>
            
            <Link 
              href={slides[activeSlide].ctaLink}
              className="bg-white hover:bg-slate-50 text-slate-900 px-3.5 py-1.5 rounded-lg text-[10px] font-black tracking-wide text-center shrink-0 shadow-sm transition duration-200"
            >
              {slides[activeSlide].ctaText}
            </Link>

            {/* Dots Indicator */}
            <div className="flex gap-1.5 pl-1">
              {slides.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeSlide ? "bg-white scale-125" : "bg-white/40"}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Small screen mobile dot pagination overlay */}
          <div className="sm:hidden absolute bottom-4 right-4 z-20 flex gap-1 bg-slate-950/50 p-1.5 rounded-full">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeSlide ? "bg-white" : "bg-white/30"}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Timings Bar - Custom Editorial Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-8 mb-4">
        <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border border-slate-200 bg-white rounded-[2rem] overflow-hidden shadow-xs">
          
          <div className="p-6 sm:p-8 flex items-center gap-5 group hover:bg-slate-50 transition-colors duration-300">
            <svg className="w-12 h-12 text-teal-700 shrink-0 transform group-hover:rotate-[15deg] transition-transform duration-500" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
              <circle cx="16" cy="16" r="12" />
              <path d="M16 8v8l6 3" />
              <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
              <path d="M16 2A14 14 0 0 1 30 16" strokeDasharray="1 3" />
            </svg>
            <div>
              <p className="text-[10px] text-teal-700 font-bold uppercase tracking-widest mb-1">{t("timings.weekdays")}</p>
              <p className="text-sm font-extrabold text-slate-900 leading-tight">{siteData.timings.weekdays}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex items-center gap-5 group hover:bg-slate-50 transition-colors duration-300">
            <svg className="w-12 h-12 text-teal-700 shrink-0 transform group-hover:-rotate-[5deg] transition-transform duration-500" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
              <rect x="6" y="8" width="20" height="18" />
              <path d="M10 4v4M22 4v4" />
              <path d="M6 14h20" />
              <circle cx="16" cy="20" r="2" fill="currentColor" stroke="none" />
            </svg>
            <div>
              <p className="text-[10px] text-teal-700 font-bold uppercase tracking-widest mb-1">{t("timings.sunday")}</p>
              <p className="text-sm font-extrabold text-slate-900 leading-tight">{siteData.timings.sunday}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex items-center gap-5 group hover:bg-teal-50/30 transition-colors duration-300 bg-teal-50/10">
            <svg className="w-12 h-12 text-teal-700 shrink-0 transform group-hover:-translate-y-1 transition-transform duration-500" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M16 4C10.5 4 6 8.5 6 14C6 21 16 29 16 29C16 29 26 21 26 14C26 8.5 21.5 4 16 4Z" />
              <circle cx="16" cy="13" r="4" />
              <path d="M16 10v3l2 1.5" />
            </svg>
            <div>
              <p className="text-[10px] text-teal-700 font-bold uppercase tracking-widest mb-1">{t("timings.collection")}</p>
              <p className="text-sm font-extrabold text-slate-900 leading-tight">{siteData.timings.collection}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Action Cards - Custom Editorial Grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">{t("services.header")}</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              {t("services.desc")}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border border-slate-200 bg-white rounded-[2rem] overflow-hidden shadow-xs">
            
            {/* Custom Block 1: Catalog */}
            <div className="p-8 sm:p-12 group flex flex-col justify-between hover:bg-slate-50 transition-colors duration-300">
              <div>
                <svg className="w-16 h-16 text-teal-700 mb-10 transform group-hover:-translate-y-2 transition-transform duration-500" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
                  <rect x="4" y="4" width="40" height="40" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M14 16V34M24 10V34M34 22V34" />
                  <path d="M8 34H40" />
                  <circle cx="14" cy="16" r="2" fill="currentColor" stroke="none" />
                  <circle cx="24" cy="10" r="2" fill="currentColor" stroke="none" />
                  <circle cx="34" cy="22" r="2" fill="currentColor" stroke="none" />
                  <path d="M14 16L24 10L34 22" strokeDasharray="2 3" />
                </svg>
                <h3 className="font-serif font-bold text-slate-900 text-2xl tracking-tight">{t("service.catalog.title")}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-4">
                  {t("service.catalog.desc")}
                </p>
              </div>
              <Link href="/tests" className="text-teal-700 font-extrabold text-[11px] tracking-widest uppercase mt-12 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                {t("service.catalog.cta")} <span className="text-lg leading-none">→</span>
              </Link>
            </div>

            {/* Custom Block 2: Home Collection */}
            <div className="p-8 sm:p-12 group flex flex-col justify-between hover:bg-slate-50 transition-colors duration-300">
              <div>
                <svg className="w-16 h-16 text-teal-700 mb-10 transform group-hover:-translate-y-2 transition-transform duration-500" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
                  <rect x="4" y="4" width="40" height="40" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M24 8C15 8 10 15 10 23C10 33 24 40 24 40C24 40 38 33 38 23C38 15 33 8 24 8Z" />
                  <path d="M24 16V30M17 23H31" />
                  <circle cx="34" cy="12" r="1.5" fill="currentColor" stroke="none" />
                  <path d="M24 8A18 18 0 0 1 42 26" strokeDasharray="1 3" />
                </svg>
                <h3 className="font-serif font-bold text-slate-900 text-2xl tracking-tight">{t("service.book.title")}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-4">
                  {t("service.book.desc")}
                </p>
              </div>
              <Link href="/book" className="text-teal-700 font-extrabold text-[11px] tracking-widest uppercase mt-12 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                {t("service.book.cta")} <span className="text-lg leading-none">→</span>
              </Link>
            </div>

            {/* Custom Block 3: Reports */}
            <div className="p-8 sm:p-12 group flex flex-col justify-between hover:bg-slate-50 transition-colors duration-300">
              <div>
                <svg className="w-16 h-16 text-teal-700 mb-10 transform group-hover:-translate-y-2 transition-transform duration-500" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
                  <rect x="4" y="4" width="40" height="40" stroke="currentColor" strokeWidth="0.5" />
                  <rect x="14" y="10" width="20" height="28" />
                  <path d="M6 24H16L20 14L28 34L32 24H42" />
                  <circle cx="20" cy="14" r="2" fill="currentColor" stroke="none" />
                  <circle cx="28" cy="34" r="2" fill="currentColor" stroke="none" />
                </svg>
                <h3 className="font-serif font-bold text-slate-900 text-2xl tracking-tight">{t("service.reports.title")}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mt-4">
                  {t("service.reports.desc")}
                </p>
              </div>
              <Link href="/reports" className="text-teal-700 font-extrabold text-[11px] tracking-widest uppercase mt-12 flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                {t("service.reports.cta")} <span className="text-lg leading-none">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* Patient Reviews - Custom Editorial Grid */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">{t("reviews.header")}</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              {t("reviews.desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border border-slate-200 rounded-[2rem] overflow-hidden shadow-xs">
            {siteData.testimonials.map((testi, i) => (
              <div key={i} className="p-8 sm:p-12 flex flex-col justify-between hover:bg-slate-50 transition-colors duration-300">
                <div className="space-y-6">
                  <div className="flex gap-1 text-teal-700">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </div>
                  <p className="text-slate-800 text-lg sm:text-xl font-serif leading-relaxed italic">
                    "{language === "hi" ? testi.reviewHindi : testi.review}"
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-slate-200">
                  <p className="font-extrabold text-slate-900 tracking-tight">{language === "hi" ? testi.nameHindi : testi.name}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-[10px] text-teal-700 font-extrabold uppercase tracking-widest">{language === "hi" ? testi.roleHindi : testi.role}</p>
                    <span className="text-[10px] text-slate-400 font-bold tracking-wider">{language === "hi" ? testi.dateHindi : testi.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic Clinical Gallery Preview - Sharp Masonry */}
      <section className="bg-slate-50 py-20 px-4 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-wrap justify-between items-end gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">
                {language === "hi" ? "हमारी आधुनिक प्रयोगशाला" : "Our Clinical Facility"}
              </h2>
              <p className="text-slate-500 text-sm max-w-xl">
                {language === "hi"
                  ? "हमारी उच्च-स्तरीय मशीनों और कीटाणुरहित वातावरण की वास्तविक तस्वीरें।"
                  : "Real photography from our sterile labs and certified analytical equipment."}
              </p>
            </div>
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-teal-700 text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest rounded-full shadow-md transition-colors duration-300 shrink-0"
            >
              <span>{language === "hi" ? "गैलरी देखें" : "View Full Gallery"}</span>
              <span className="text-lg leading-none">→</span>
            </Link>
          </div>

          {/* 3 flat, sharp-edge grid items */}
          <div className="grid sm:grid-cols-3 gap-[1px] bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
            {siteData.gallery.slice(0, 3).map((item, idx) => (
              <div key={idx} className="group aspect-[4/3] overflow-hidden bg-white relative">
                <img 
                  src={item.url} 
                  alt="Clinical laboratory capture"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-slate-900/10 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Embed facility branch block - Sharp Edges */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h3 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">
              {language === "hi" ? "हमारी मुख्य प्रयोगशाला शाखा" : "Visit Our Lab Facility"}
            </h3>
            <p className="text-slate-500 text-sm">
              {language === "hi" ? "आपातकालीन सैंपल जमा करने या रिपोर्ट सहायता के लिए पधारें।" : "Conveniently located for direct emergency biological drop-offs and urgent guidance."}
            </p>
          </div>
          <div className="border border-slate-200 min-h-[400px] w-full bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl grid md:grid-cols-12 text-white">
            <div className="md:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-teal-950">
              <div className="space-y-4">
                <span className="inline-block bg-teal-800/80 text-teal-200 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                  {language === "hi" ? "मुख्य शाखा" : "Primary Facility"}
                </span>
                <h4 className="text-2xl font-serif font-bold text-white">
                  {language === "hi" ? "परफेक्ट लैबोरेट्री शाखा" : "Perfect Laboratory, Vapi"}
                </h4>
                <div className="space-y-3 text-sm text-teal-100">
                  <p className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold">📍</span>
                    <span>Perfect Laboratory, Vapi, Gujarat 396191</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold">📞</span>
                    <span>{siteData.emergencyContact}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold">⏰</span>
                    <span>{siteData.timings.weekdays}</span>
                  </p>
                </div>
              </div>
              <a 
                href={siteData.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-md text-sm text-center"
              >
                {language === "hi" ? "गूगल मैप्स पर रास्ता देखें" : "Open in Google Maps"}
              </a>
            </div>
            
            <div className="md:col-span-7 relative bg-slate-950 flex items-center justify-center p-8 overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10 text-center space-y-6 max-w-sm">
                <div className="w-20 h-20 bg-teal-900/50 rounded-full border border-teal-500 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="text-teal-400 text-3xl font-bold">📍</span>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-white text-lg">
                    {language === "hi" ? "100% स्वच्छ डायग्नोस्टिक जोन" : "100% Sterile Diagnostic Zone"}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {language === "hi" 
                      ? "अल्ट्रा-क्लीन और धूल मुक्त प्रोसेसिंग क्षेत्र जो आईएसओ और एनएबीएल के कड़े मानकों पर खरे उतरते हैं।" 
                      : "Ultra-clean, state-of-the-art biological processing labs under fully NABL audited medical protocols."}
                  </p>
                </div>
                
                <div className="text-slate-500 text-[10px] font-mono tracking-widest uppercase">
                  Lat: 20.3557° N | Lon: 72.9259° E
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
