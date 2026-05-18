"use client";

import React from "react";
import { siteData } from "../site-data";
import { useLanguage } from "../LanguageContext";

export default function ReportsPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-xl mx-auto px-6 py-20 text-center space-y-10 animate-fadeIn">
      
      {/* Minimal Header */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight leading-tight">
          {language === "hi" ? "ऑनलाइन रिपोर्ट डाउनलोड" : "Retrieve Digital Reports"}
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto">
          {language === "hi"
            ? "हमारा रिपोर्टिंग पोर्टल वर्तमान में सुरक्षित अस्पताल प्रणालियों के साथ एकीकरण के अधीन है। यह सुविधा जल्द ही उपलब्ध होगी।"
            : "Our secure digital reporting portal is currently undergoing system integration. This feature will be active shortly."}
        </p>
      </div>

      {/* Flat & Clean WhatsApp Request Option */}
      <div className="pt-6 space-y-4 border-t border-slate-100">
        <p className="text-slate-800 font-extrabold text-xs uppercase tracking-wider">
          {language === "hi" ? "तुरंत रिपोर्ट की आवश्यकता है?" : "Need your reports urgently?"}
        </p>
        
        <div className="flex justify-center">
          <a 
            href={`https://wa.me/${siteData.whatsappNumber}?text=Hello%20Perfect%20Laboratory%2C%20I%20would%20like%20to%20request%20my%20completed%20diagnostic%20test%20reports.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 text-slate-800 hover:text-emerald-700 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition duration-200"
          >
            <svg className="w-4 h-4 fill-emerald-500" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>{language === "hi" ? "व्हाट्सएप पर मांगें" : "Request via WhatsApp"}</span>
          </a>
        </div>
      </div>

    </div>
  );
}
