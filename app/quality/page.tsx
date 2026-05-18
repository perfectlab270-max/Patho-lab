"use client";

import React from "react";
import { siteData } from "../site-data";
import { useLanguage } from "../LanguageContext";

export default function QualityPage() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {language === "hi" ? "मान्यताएं और गुणवत्ता नियंत्रण" : "Accreditations & Quality Controls"}
        </h1>
        <p className="text-slate-500 text-sm max-w-xl mx-auto">
          {language === "hi"
            ? "हमारे सख्त नैदानिक दिशानिर्देशों, गुणवत्ता ऑडिट और प्रयोगशाला सत्यापन प्रक्रियाओं के बारे में जानें।"
            : "Learn about our strict clinical guidelines, quality audits, and laboratory verification frameworks."}
        </p>
      </div>

      {/* Main Accreditations */}
      <div className="grid md:grid-cols-3 gap-6">
        {siteData.accreditations.map((acc, index) => {
          const accTitle = language === "hi"
            ? (index === 0 ? "NABL मान्यता प्राप्त" : index === 1 ? "ISO 15189:2012" : "CMC वेल्लोर EQAS भागीदार")
            : acc.title;
          
          const accSubtitle = language === "hi"
            ? (index === 0 ? "परीक्षण और अंशांकन प्रयोगशालाओं के लिए राष्ट्रीय प्रत्यायन बोर्ड (MC-8765)" : index === 1 ? "चिकित्सा प्रयोगशालाओं की गुणवत्ता प्रबंधन के लिए अंतर्राष्ट्रीय मानक" : "सटीकता और जांच रिपोर्टों के निरंतर सत्यापन हेतु सीएमसी वेल्लोर बाहरी गुणवत्ता आश्वासन योजना में सक्रिय भागीदार।")
            : acc.subtitle;

          return (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white font-extrabold flex items-center justify-center text-sm shadow-xs">
                {acc.logoText}
              </div>
              <h3 className="font-extrabold text-slate-900 text-base leading-snug">{accTitle}</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{accSubtitle}</p>
            </div>
          );
        })}
      </div>

      {/* Clinical Certifications */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-teal-50 shadow-2xs space-y-8">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b pb-4 flex items-center">
          {language === "hi" ? "हमारी नैदानिक गारंटियाँ" : "Our Clinical Guarantees"}
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {siteData.certifications.map((cert, i) => {
            const certTitle = language === "hi"
              ? (i === 0 ? "प्रमाणित एमडी पैथोलॉजिस्ट पर्यवेक्षण" : "100% स्वच्छ और सुरक्षित प्रोसेसिंग")
              : cert.title;
            const certDetails = language === "hi"
              ? (i === 0 ? "सभी जांच रिपोर्ट पूरी तरह से प्रमाणित एमडी पैथोलॉजिस्ट डॉक्टरों द्वारा चिकित्सकीय रूप से जांची और डिजिटल रूप से हस्ताक्षरित की जाती हैं।" : "हम अंतरराष्ट्रीय बारकोडेड वैक्यूम ट्यूब प्रोटोकॉल का उपयोग करके पूरी तरह से धूल-मुक्त और स्वच्छ प्रोसेसिंग जोन बनाए रखते हैं।")
              : cert.details;

            return (
              <div key={i} className="flex gap-4">
                <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-slate-900 text-base">{certTitle}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{certDetails}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sterile sample draw protocols */}
      <div className="bg-teal-50/50 p-6 rounded-3xl border border-teal-100/50 grid sm:grid-cols-3 gap-6 items-center">
        <div className="sm:col-span-2 space-y-3">
          <h3 className="font-extrabold text-teal-950 text-lg">
            {language === "hi" ? "NABL बारकोडेड वैक्यूम सैंपल ट्यूब" : "NABL Barcode Vacuum Sample Tubes"}
          </h3>
          <p className="text-teal-900 text-xs sm:text-sm leading-relaxed">
            {language === "hi"
              ? "हमारे तकनीशियनों द्वारा एकत्र किए गए सभी जैविक सैंपल बारकोडेड चिकित्सा नियमों के तहत सुरक्षित रखे जाते हैं। सैंपल को तुरंत सील कर, तापमान ऑडिट किया जाता है।"
              : "All biological samples collected by our phlebotomists are handled under barcoded medical regulations. Samples are sealed on spot, temperature audited, and tracked instantly until processed."}
          </p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-teal-100 text-center font-bold text-teal-900 text-sm shadow-xs">
          {language === "hi" ? "सुरक्षित सैंपल प्रक्रिया सुनिश्चित" : "Sterile Chain-of-Custody Secure"}
        </div>
      </div>

    </div>
  );
}
