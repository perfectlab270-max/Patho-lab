"use client";

import React, { use, useState } from "react";
import { siteData } from "../site-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "../LanguageContext";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function SEOLandingPage({ params }: PageProps) {
  const { language } = useLanguage();
  const { slug } = use(params);
  const landing = siteData.seoLandings.find((s) => s.slug === slug);

  if (!landing) {
    notFound();
  }

  const test = siteData.tests.find((t) => t.id === landing.testId);

  // Booking Form State
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [address, setAddress] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phoneNumber || !preferredDate) return;

    const testName = test 
      ? (language === "hi" ? test.nameHindi : test.name)
      : (language === "hi" ? "सामान्य स्वास्थ्य जांच" : "General Wellness Checkup");
    const testPrice = test ? `(₹${test.price})` : "";

    const message = `Hello Perfect Laboratory, I would like to book a Home Sample Collection in ${landing.location}:
- *Patient Name*: ${patientName}
- *Phone Number*: ${phoneNumber}
- *Preferred Date*: ${preferredDate}
- *Preferred Time*: ${preferredTime || "Anytime"}
- *Selected Profile*: ${testName} ${testPrice}
- *Collection Address*: ${address || "Vapi Area"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    setIsBooked(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 animate-fadeIn">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main info (left side) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-teal-50 shadow-xs space-y-4">
              <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                {language === "hi" 
                  ? `${landing.location} में अत्यधिक विश्वसनीय पैथोलॉजी` 
                  : `Highly Reliable Pathology in ${landing.location}`}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {landing.title}
              </h1>
              <p className="text-slate-600 text-base leading-relaxed">
                {landing.description}
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-center">
                <div className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-teal-600 font-bold text-lg">NABL</p>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">
                    {language === "hi" ? "मान्यता प्राप्त" : "Accredited"}
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-teal-600 font-bold text-lg">100%</p>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">
                    {language === "hi" ? "स्वच्छ प्रक्रिया" : "Sterile Draw"}
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl">
                  <p className="text-teal-600 font-bold text-lg">FREE</p>
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">
                    {language === "hi" ? "होम कलेक्शन" : "Home Sample"}
                  </p>
                </div>
              </div>
            </div>

            {/* Test Details Card if matching test is found */}
            {test && (
              <div className="bg-white p-8 border border-slate-200 space-y-8">
                <h2 className="text-xl font-bold text-slate-900 border-b pb-3">
                  {language === "hi" ? "जांच विवरण और तैयारी के नियम" : "Test Overview & Preparation"}
                </h2>
                <div className="space-y-4 text-sm sm:text-base">
                  <div className="grid grid-cols-2 gap-4 bg-teal-50/40 p-4 rounded-xl">
                    <div>
                      <p className="text-xs text-slate-500">{language === "hi" ? "सामान्य दर" : "Regular Price"}</p>
                      <p className="text-slate-400 line-through">₹{test.originalPrice}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{language === "hi" ? "विशेष छूट दर" : "Special Deal Price"}</p>
                      <p className="text-teal-700 font-bold text-xl">₹{test.price}</p>
                    </div>
                  </div>

                  {test.includedTests && (
                    <details className="group pt-2">
                      <summary className="font-semibold text-teal-700 hover:text-teal-800 mb-2 cursor-pointer flex justify-between items-center list-none outline-hidden">
                        <span>{language === "hi" ? "इस पैकेज में शामिल मुख्य जांचें देखें" : "View Tests Included in Package"}</span>
                        <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <ul className="grid sm:grid-cols-2 gap-2 bg-slate-50/50 p-4 rounded-xl mt-2 border border-slate-100">
                        {(language === "hi" ? test.includedTestsHindi || [] : test.includedTests || []).map((sub, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <svg className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}

                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{language === "hi" ? "जांच का विवरण:" : "Test Details:"}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {language === "hi" ? test.descriptionHindi : test.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Local Benefits Section */}
            <div className="bg-slate-50 p-8 border border-slate-200 space-y-5">
              <h3 className="font-bold text-teal-900 text-lg">
                {language === "hi" 
                  ? `परफेक्ट लैबोरेट्री को क्यों चुनें?` 
                  : `Why choose Perfect Laboratory in ${landing.location}?`}
              </h3>
              <ul className="space-y-3">
                {landing.benefits.map((benefit, i) => {
                  const translatedBenefit = language === "hi"
                    ? (i === 0 ? "NABL मान्यता प्राप्त उच्च गुणवत्ता मानक।" : i === 1 ? "बिना दर्द की नवीनतम रक्त नमूनाकरण तकनीक।" : i === 2 ? `${landing.location} में बिल्कुल निःशुल्क घर पर नमूना संग्रह।` : "मात्र ६ घंटे के भीतर व्हाट्सएप पर प्रमाणित डिजिटल रिपोर्ट।")
                    : benefit;

                  return (
                    <li key={i} className="flex gap-2 text-sm text-slate-700">
                      <svg className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{translatedBenefit}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Form Side (right side) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white p-8 border border-slate-200 space-y-8">
              <div className="border-b pb-4 text-center">
                <h3 className="text-lg font-bold text-slate-900">
                  {language === "hi" ? "घर पर सैंपल कलेक्शन बुक करें" : "Book Home Sample Collection"}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {language === "hi" ? "बिना बाहर कदम रखे सुरक्षित तरीके से जांच करवाएं" : "Get tested safely without stepping outside"}
                </p>
              </div>

              {isBooked ? (
                <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl text-center space-y-4">
                  <div className="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-emerald-950 text-lg">
                    {language === "hi" ? "सफलतापूर्वक बुक हो गया!" : "Booking Received!"}
                  </h4>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    {language === "hi" ? (
                      <>धन्यवाद, <strong className="text-emerald-950">{patientName}</strong>। हमारे लैब प्रतिनिधि आपके स्लॉट की पुष्टि के लिए जल्द ही <strong className="text-emerald-950">{phoneNumber}</strong> पर आपसे संपर्क करेंगे।</>
                    ) : (
                      <>Thank you, <strong className="text-emerald-950">{patientName}</strong>. Our diagnostic booking agent will call you at <strong className="text-emerald-950">{phoneNumber}</strong> shortly to confirm your slot for {preferredDate} at {preferredTime}.</>
                    )}
                  </p>
                  <button 
                    onClick={() => setIsBooked(false)}
                    className="w-full bg-emerald-600 text-white py-2 rounded-xl text-sm font-semibold hover:bg-emerald-700"
                  >
                    {language === "hi" ? "दूसरी जांच बुक करें" : "Book Another Test"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                      {language === "hi" ? "मरीज का पूरा नाम" : "Patient Full Name"}
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder={language === "hi" ? "जैसे: राजेश पटेल" : "e.g. Rajesh Patel"}
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                      {language === "hi" ? "फ़ोन नंबर" : "Phone Number"}
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 9876543210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                        {language === "hi" ? "पसंदीदा तारीख" : "Preferred Date"}
                      </label>
                      <input 
                        type="date" 
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                        {language === "hi" ? "पसंदीदा समय" : "Preferred Time"}
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="9:00 AM - 11:00 AM">9 AM - 11 AM</option>
                        <option value="11:00 AM - 1:00 PM">11 AM - 1 PM</option>
                        <option value="1:00 PM - 3:00 PM">1 PM - 3 PM</option>
                        <option value="3:00 PM - 6:00 PM">3 PM - 6 PM</option>
                        <option value="6:00 PM - 10:00 PM">6 PM - 10 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
                      {language === "hi" ? `घर का पूरा पता (${landing.location})` : `Full Collection Address in ${landing.location}`}
                    </label>
                    <textarea 
                      placeholder={language === "hi" ? "अपार्टमेंट नंबर, गली, लैंडमार्क, पिन कोड" : "Door No, Flat/Street details, landmarks"}
                      rows={3}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition duration-150 shadow-xs"
                  >
                    {language === "hi" ? "बुकिंग सुनिश्चित करें" : "Confirm Collection Slot"}
                  </button>

                  <div className="text-center pt-2">
                    <p className="text-[10px] text-slate-400">
                      {language === "hi" ? "सुरक्षित रूप से एन्क्रिप्टेड। आपके सैंपल और विवरण गोपनीय हैं।" : "Your data is fully encrypted and handled by clinical experts."}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
