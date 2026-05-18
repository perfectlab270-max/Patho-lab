"use client";

import React, { useState } from "react";
import { siteData } from "../site-data";
import { useLanguage } from "../LanguageContext";

export default function FAQPage() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-fadeIn space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {language === "hi" ? "पूछे जाने वाले प्रश्न और सहायता" : "Patient FAQ & Assistance Center"}
        </h1>
        <p className="text-slate-500 text-sm max-w-xl mx-auto">
          {language === "hi"
            ? "जैविक परीक्षण, उपवास नियम, रिपोर्ट और समय-सारणी के बारे में स्पष्ट और पारदर्शी जानकारी पढ़ें।"
            : "Read transparent instructions regarding biological tests, fasting prep constraints, report formats, and scheduling."}
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {siteData.faqs.map((faq, idx) => {
          const question = language === "hi" ? faq.questionHindi : faq.question;
          const answer = language === "hi" ? faq.answerHindi : faq.answer;

          return (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-slate-150 overflow-hidden transition-all shadow-2xs"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-5 font-bold text-slate-900 text-sm sm:text-base flex justify-between items-center hover:bg-slate-50 transition"
              >
                <span>{question}</span>
                <span className={`text-teal-600 text-xl font-bold transition transform duration-200 ${openIndex === idx ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {openIndex === idx && (
                <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                  {answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Emergency Assistance card */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-3xl p-6 text-white text-center space-y-4">
        <h2 className="text-lg sm:text-xl font-bold">
          {language === "hi" ? "क्या आपके पास कोई विशिष्ट प्रश्न या जांच पर्ची है?" : "Have any specific queries or diagnostic prescription details?"}
        </h2>
        <p className="text-teal-100 text-xs sm:text-sm max-w-md mx-auto">
          {language === "hi"
            ? "हमारे प्रमाणित पैथोलॉजी सलाहकार आपकी समस्याओं और उपवास के नियमों में मदद करने के लिए व्हाट्सएप पर उपलब्ध हैं।"
            : "Our certified pathology counselors are active on WhatsApp to guide you with test requirements and fasting rules."}
        </p>
        <div className="flex justify-center gap-3">
          <a 
            href={`https://wa.me/${siteData.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition flex items-center gap-2 shadow-xs"
          >
            {language === "hi" ? "व्हाट्सएप पर पूछें" : "Ask on WhatsApp"}
          </a>
        </div>
      </div>

    </div>
  );
}
