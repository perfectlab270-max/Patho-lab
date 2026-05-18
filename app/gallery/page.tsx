"use client";

import React from "react";
import { siteData } from "../site-data";
import { useLanguage } from "../LanguageContext";

export default function GalleryPage() {
  const { language } = useLanguage();

  const galleryItems = siteData.gallery;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 animate-fadeIn space-y-12">
      
      {/* Minimal Aesthetic Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight leading-tight">
          {language === "hi" ? "नैदानिक गैलरी" : "Clinical Facility Gallery"}
        </h1>
        <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
          {language === "hi"
            ? "हमारी अत्याधुनिक लैब सुविधाओं, अत्याधुनिक स्वचालित परीक्षण मशीनों और उच्च-स्तरीय स्वच्छता प्रक्रियाओं की एक झलक।"
            : "An immersive glimpse into our high-end testing chambers, automated analytical machines, and sterile patient care environments."}
        </p>
      </div>

      {/* Grid of Images with Tasteful Hover Effects */}
      <div className="grid sm:grid-cols-2 gap-[1px] bg-slate-200 border-y border-slate-200">
        {galleryItems.map((item, idx) => (
          <div key={idx} className="group aspect-[4/3] overflow-hidden bg-white relative">
            <img 
              src={item.url} 
              alt="Clinical laboratory facility"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-slate-900/10 pointer-events-none"></div>
          </div>
        ))}
      </div>

    </div>
  );
}
