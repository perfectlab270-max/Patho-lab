"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Core site-wide layout translations dictionary
const translations: Record<string, Record<Language, string>> = {
  // Navbar & Menu
  "menu.tests": { en: "Tests & Pricing", hi: "जांच और दरें" },
  "menu.book": { en: "Book Collection", hi: "जांच बुक करें" },
  "menu.reports": { en: "Online Reports", hi: "ऑनलाइन रिपोर्ट" },
  "menu.quality": { en: "Quality Audits", hi: "गुणवत्ता प्रमाणपत्र" },
  "menu.faqs": { en: "FAQs", hi: "पूछे जाने वाले प्रश्न" },
  "menu.gallery": { en: "Gallery", hi: "गैलरी" },
  "menu.home": { en: "Home", hi: "होम" },
  "cta.book": { en: "Book Home Collection", hi: "घर से जांच बुक करें" },
  "cta.whatsapp": { en: "WhatsApp Support", hi: "व्हाट्सएप सहायता" },

  // General Top Bar / Headers
  "top.nabl": { en: "NABL Accredited Quality Laboratory Standards (MC-8765)", hi: "NABL प्रमाणित राष्ट्रीय गुणवत्ता प्रयोगशाला मानक (MC-8765)" },
  "top.emergency": { en: "Urgent Helpline", hi: "आपातकालीन हेल्पलाइन" },
  "logo.subtitle": { en: "Pathology Laboratory", hi: "पैथोलॉजी प्रयोगशाला" },

  // Home Page
  "hero.badge": { en: "NABL Accredited & Certified Diagnostics Laboratory", hi: "NABL प्रमाणित और विश्वसनीय डायग्नोस्टिक प्रयोगशाला" },
  "hero.title1": { en: "Diagnostic Accuracy", hi: "सटीक डायग्नोस्टिक्स रिपोर्ट" },
  "hero.title2": { en: "Delivered Right At Home.", hi: "अब सीधे आपके घर पर।" },
  "hero.desc": { 
    en: "Skip laboratory lines. Have certified phlebotomists collect your biological samples in absolute comfort at home. Validated digital reports directly on WhatsApp.", 
    hi: "लैब की लंबी लाइनों से बचें। हमारे प्रमाणित लैब तकनीशियन द्वारा अपने घर पर ही बेहद सुरक्षित तरीके से सैंपल कलेक्ट करवाएं। व्हाट्सएप पर सीधे डिजिटल रिपोर्ट प्राप्त करें।" 
  },
  "hero.timings": { en: "Operating Timings", hi: "कार्य समय सारणी" },
  "timings.weekdays": { en: "Weekdays & Saturdays", hi: "सोमवार - शनिवार" },
  "timings.sunday": { en: "Sundays", hi: "रविवार" },
  "timings.collection": { en: "Home Collection Slots", hi: "घर से सैंपल कलेक्शन का समय" },

  // Feature Cards
  "services.header": { en: "Our Core Patient Services", hi: "हमारी मुख्य मरीज सेवाएं" },
  "services.desc": { en: "Select one of our primary patient-friendly dashboards to manage your medical diagnostics.", hi: "अपनी चिकित्सा जांच प्रबंधित करने के लिए नीचे दिए गए विकल्पों में से चुनें।" },
  "service.catalog.title": { en: "Diagnostics Catalog", hi: "जांच सूची" },
  "service.catalog.desc": { en: "Browse, search, and review all 68+ tests, original and discount pricing, and necessary fasting instructions.", hi: "सभी 68+ टेस्ट्स, विशेष छूट दरें और उपवास (फास्टिंग) के नियमों की सूची देखें।" },
  "service.catalog.cta": { en: "Search Diagnostic Profiles", hi: "जांच सूची खोजें" },
  "service.book.title": { en: "Home Collection Form", hi: "होम कलेक्शन फॉर्म" },
  "service.book.desc": { en: "Schedule sterile, disposable draws directly at your residence with NABL-compliant tracking tubes.", hi: "घर बैठे सुरक्षित तरीके से ब्लड सैंपल कलेक्ट करवाने के लिए अपना समय चुनें।" },
  "service.book.cta": { en: "Schedule Phlebotomy Draw", hi: "होम कलेक्शन बुक करें" },
  "service.reports.title": { en: "Online Lab Reports", hi: "ऑनलाइन लैब रिपोर्ट" },
  "service.reports.desc": { en: "Query validated reports instantly using receipt tokens, verify markers, and download official verified PDFs.", hi: "अपनी रसीद आईडी डालकर तुरंत रिपोर्ट देखें और हस्ताक्षरित पीडीएफ डाउनलोड करें।" },
  "service.reports.cta": { en: "Download Digital PDF Reports", hi: "डिजिटल रिपोर्ट डाउनलोड करें" },

  // Quality accreditations
  "quality.header": { en: "Accredited Quality Foundations", hi: "प्रमाणित गुणवत्ता का आधार" },
  "quality.desc": { en: "Perfect Laboratory is thoroughly audited by boards to guarantee error-free, validated diagnostics.", hi: "परफेक्ट लैबोरेट्री सटीक और त्रुटिहीन जांच रिपोर्ट प्रदान करने के लिए प्रमाणित संस्थाओं द्वारा ऑडिट की जाती है।" },

  // Testimonials
  "reviews.header": { en: "Patient Experiences", hi: "मरीजों के अनुभव" },
  "reviews.desc": { en: "Read how patients evaluate early morning diagnostic sample draws and NABL accuracy results.", hi: "जानिए हमारे मरीजों का सुबह के सैंपल कलेक्शन और रिपोर्ट की सत्यता पर क्या कहना है।" },

  // Footer & Help
  "footer.quality": { en: "Quality Certifications", hi: "गुणवत्ता प्रमाणपत्र" },
  "footer.help": { en: "Help & Emergency", hi: "सहायता और आपातकालीन" }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Load language preference from local storage if available
  useEffect(() => {
    const savedLang = localStorage.getItem("preferred_lang") as Language;
    if (savedLang === "en" || savedLang === "hi") {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("preferred_lang", lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
