"use client";

import React, { useState, useMemo } from "react";
import { siteData } from "../site-data";
import Link from "next/link";
import { useLanguage } from "../LanguageContext";

const CategoryIcon = ({ category, className }: { category: string, className?: string }) => {
  const cat = category.toLowerCase();
  let imgSrc = "/indian_pathology_laboratory.png"; // Default
  
  if (cat.includes("package")) imgSrc = "/indian_pathology_laboratory.png";
  else if (cat.includes("women") || cat.includes("pregnancy") || cat.includes("hormone")) imgSrc = "/small_lab_single_person.png";
  else if (cat.includes("heart") || cat.includes("cardiac")) imgSrc = "/indian_molecular_analyzer.png";
  else if (cat.includes("blood") || cat.includes("general") || cat.includes("sugar") || cat.includes("diabetes")) imgSrc = "/indian_home_sample_collection.png";
  else if (cat.includes("kidney") || cat.includes("liver")) imgSrc = "/indian_molecular_analyzer.png";

  return <img src={imgSrc} alt={category} className={`${className} object-cover`} />;
};

export default function TestsPage() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [visibleCount, setVisibleCount] = useState(20);

  const categories = useMemo(() => {
    const list = new Set(siteData.tests.map((t) => language === "hi" ? t.categoryHindi : t.category));
    return Array.from(list);
  }, [language]);

  React.useEffect(() => {
    setSelectedCategory(language === "hi" ? "कम्पलीट हेल्थ पैकेज" : "Comprehensive Packages");
  }, [language]);

  const filteredTests = useMemo(() => {
    return siteData.tests.filter((test) => {
      const name = language === "hi" ? test.nameHindi : test.name;
      const desc = language === "hi" ? test.descriptionHindi : test.description;
      const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        desc.toLowerCase().includes(searchQuery.toLowerCase());

      const cat = language === "hi" ? test.categoryHindi : test.category;
      const matchesCategory = selectedCategory === "" || cat === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, language]);

  // Reset pagination when search or category changes
  React.useEffect(() => {
    setVisibleCount(20);
  }, [searchQuery, selectedCategory, language]);


  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8 animate-fadeIn">

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-tight">
          {language === "hi" ? "पैथोलॉजी टेस्ट और हेल्थ पैकेज" : "Pathology Tests & Health Packages"}
        </h1>
        <p className="text-slate-500 text-sm max-w-xl mx-auto">
          {language === "hi"
            ? "डायग्नोस्टिक टेस्ट प्रोफाइल की तुलना करें, आवश्यक नियमों को समझें और होम कलेक्शन शेड्यूल करें।"
            : "Compare diagnostic test profiles, understand mandatory preparations, and schedule a home sample collection."}
        </p>
      </div>

      {/* Filter Options */}
      <div className="bg-white border-y border-slate-200 py-6 space-y-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? "" : cat)}
                className={`pl-2 pr-5 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full flex items-center gap-2.5 ${selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-slate-100"
                  }`}
              >
                <div className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center overflow-hidden ${
                  selectedCategory === cat ? 'border border-slate-900' : 'shadow-xs border border-slate-200'
                }`}>
                  <CategoryIcon category={cat} className="w-full h-full" />
                </div>
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder={language === "hi" ? "रक्त जांच, कोलेस्ट्रॉल, शुगर, थायराइड आदि खोजें..." : "Search diagnostic parameters (e.g. Blood, Lipid, Cholesterol, Thyroid)..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Test Catalog - Soft Matrix */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-slate-200 border border-slate-200 rounded-[2rem] overflow-hidden shadow-xs items-stretch mt-4">
        {filteredTests.slice(0, visibleCount).map((test) => {
          const testName = language === "hi" ? test.nameHindi : test.name;
          const testDesc = language === "hi" ? test.descriptionHindi : test.description;
          const testCat = language === "hi" ? test.categoryHindi : test.category;
          const testTat = language === "hi" ? test.tatHindi : test.tat;
          const testPrep = language === "hi" ? test.preparationsHindi : test.preparations;

          const isPackage = testCat.toLowerCase().includes("package");

          return (
            <div 
              key={test.id} 
              className="bg-white p-8 flex flex-col justify-between hover:bg-slate-50 transition-colors duration-300 relative group overflow-hidden"
            >
              {/* Optional Package Image Banner */}
              {isPackage && (
                <div className="w-[calc(100%+4rem)] h-36 -ml-8 -mt-8 mb-6 relative shrink-0">
                  <img
                    src="/indian_pathology_laboratory.png"
                    alt={testName}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                </div>
              )}

              <div className="space-y-5">
                <div className="flex justify-between items-start gap-2">
                  <span className="flex items-center gap-1.5 text-teal-700 text-[10px] font-extrabold uppercase tracking-widest border-b border-teal-700/20 pb-1">
                    <CategoryIcon category={testCat} className="w-4 h-4 rounded-full" />
                    {testCat}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif font-black text-slate-900 text-xl leading-snug">{testName}</h3>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed">{testDesc}</p>
                </div>

                {/* Included Sub-Tests Checklist (Collapsible) */}
                {test.includedTests && test.includedTests.length > 0 && (
                  <details className="group/details pt-4 border-t border-slate-100">
                    <summary className="text-teal-700 hover:text-teal-900 text-[11px] uppercase tracking-widest font-extrabold cursor-pointer flex justify-between items-center list-none outline-hidden">
                      <span>{language === "hi" ? "इस पैकेज में शामिल जांचें देखें" : "View Tests Included in Package"}</span>
                      <svg className="w-4 h-4 transition-transform group-open/details:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul className="grid grid-cols-1 gap-2 mt-4">
                      {(language === "hi" && test.includedTestsHindi ? test.includedTestsHindi : test.includedTests).map((sub, idx) => (
                        <li key={idx} className="text-xs flex items-start gap-2 text-slate-600">
                          <svg className="w-3.5 h-3.5 shrink-0 mt-0.5 text-teal-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>

              <div className="pt-8 mt-8 border-t flex items-end justify-between border-slate-200">
                <div>
                  <span className="line-through text-xs block mb-1 font-semibold tracking-wider text-slate-400">₹{test.originalPrice}</span>
                  <span className="font-black text-2xl tracking-tight text-slate-900">₹{test.price}</span>
                </div>
                <Link
                  href={`/book?test=${test.id}`}
                  className="px-5 py-3 text-[11px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center gap-2 group-hover:gap-3 rounded-2xl shadow-xs bg-slate-900 text-white hover:bg-teal-700"
                >
                  {language === "hi" ? "जांच बुक करें" : "Book Test"} <span className="text-sm leading-none">→</span>
                </Link>
              </div>
            </div>
          );
        })}

        {filteredTests.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-400 font-medium">
            {language === "hi" ? "कोई परिणाम नहीं मिला। कृपया अपनी खोज बदलें।" : "No diagnostic parameters matched your criteria. Please refine your search."}
          </div>
        )}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredTests.length && (
        <div className="flex justify-center mt-8 pb-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 20)}
            className="px-8 py-3 bg-slate-900 text-white text-sm font-bold tracking-widest uppercase rounded-full shadow-md hover:bg-teal-700 transition-colors"
          >
            {language === "hi" ? "और दिखाएं" : "Load More"}
          </button>
        </div>
      )}

    </div>
  );
}
