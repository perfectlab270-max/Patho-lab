"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { siteData } from "../site-data";
import { useLanguage } from "../LanguageContext";

function BookingFormContent() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const preSelectedTestId = searchParams.get("test") || "";

  // Booking Form State
  const initialTest = siteData.tests.find(t => t.id === preSelectedTestId);
  const initialCategory = initialTest ? (language === "hi" ? initialTest.categoryHindi : initialTest.category) : "All";
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTestId, setSelectedTestId] = useState(preSelectedTestId);
  const categories = ["All", ...Array.from(new Set(siteData.tests.map(t => language === "hi" ? t.categoryHindi : t.category)))];
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("9:00 AM - 11:00 AM");
  const [patientAddress, setPatientAddress] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phoneNumber || !bookingDate || !patientAddress) {
      alert(language === "hi" ? "कृपया सभी अनिवार्य फ़ील्ड भरें" : "Please fill in all mandatory fields");
      return;
    }

    const testName = selectedTest 
      ? (language === "hi" ? selectedTest.nameHindi : selectedTest.name)
      : (language === "hi" ? "सामान्य स्वास्थ्य जांच" : "General Wellness Checkup");
    const testPrice = selectedTest ? `(₹${selectedTest.price})` : "";

    const message = `Hello Perfect Laboratory, I would like to book a Home Sample Collection:
- *Patient Name*: ${patientName}
- *Phone Number*: ${phoneNumber}
- *Preferred Date*: ${bookingDate}
- *Preferred Time*: ${bookingTime}
- *Selected Profile*: ${testName} ${testPrice}
- *Collection Address*: ${patientAddress}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    setBookingSuccess(true);
  };

  const selectedTest = siteData.tests.find((t) => t.id === selectedTestId);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-fadeIn">
      <div className="bg-white rounded-3xl border border-teal-50 shadow-xs overflow-hidden">
        
        {/* Banner */}
        <div className="bg-teal-700 text-white p-6 sm:p-8 text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-serif font-black">
            {language === "hi" ? "घर पर सैंपल कलेक्शन बुक करें" : "Book Home Sample Collection"}
          </h1>
          <p className="text-teal-100 text-xs sm:text-sm max-w-md mx-auto">
            {language === "hi" 
              ? "हमारे प्रमाणित लैब तकनीशियन द्वारा अपने घर पर ही सुरक्षित तरीके से सैंपल कलेक्ट करवाएं।" 
              : "Schedule a certified NABL phlebotomist to collect your diagnostics samples at your preferred date and time."}
          </p>
        </div>

        {/* Form area */}
        <div className="p-6 sm:p-10">
          {bookingSuccess ? (
            <div className="text-center space-y-5 py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-xs">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-bold text-slate-900 text-2xl">
                {language === "hi" ? "सफलतापूर्वक बुक हो गया!" : "Collection Scheduled Successfully!"}
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 max-w-md mx-auto text-left space-y-3 text-sm">
                <p><strong>{language === "hi" ? "मरीज का नाम:" : "Patient:"}</strong> {patientName}</p>
                <p><strong>{language === "hi" ? "फ़ोन नंबर:" : "Phone:"}</strong> {phoneNumber}</p>
                <p><strong>{language === "hi" ? "बुक किया गया समय:" : "Scheduled Slot:"}</strong> {bookingDate} | {bookingTime}</p>
                {selectedTest && (
                  <p>
                    <strong>{language === "hi" ? "चुनी गई जांच:" : "Selected Test:"}</strong> {language === "hi" ? selectedTest.nameHindi : selectedTest.name} (₹{selectedTest.price})
                  </p>
                )}
                <p><strong>{language === "hi" ? "पता:" : "Address:"}</strong> {patientAddress}</p>
              </div>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {language === "hi" 
                  ? "हमारे समन्वयक जल्द ही आपसे संपर्क कर विवरण सत्यापित करेंगे और लैब तकनीशियन नियुक्त करेंगे।" 
                  : "Our diagnostic coordinator will call you shortly to verify collection details and assign a phlebotomist."}
              </p>
              <button 
                onClick={() => {
                  setBookingSuccess(false);
                  setPatientName("");
                  setPhoneNumber("");
                  setBookingDate("");
                  setPatientAddress("");
                  setSelectedTestId("");
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition"
              >
                {language === "hi" ? "दूसरी जांच बुक करें" : "Schedule Another Test"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              
              {/* Select Category dropdown */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {language === "hi" ? "डायग्नोस्टिक श्रेणी चुनें" : "Select Category"}
                  </label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setSelectedTestId(""); // reset test when category changes
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 font-medium"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Select Test dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {language === "hi" ? "टेस्ट या पैकेज चुनें" : "Select Test / Package"}
                  </label>
                  <select 
                    value={selectedTestId}
                    onChange={(e) => setSelectedTestId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 font-medium"
                  >
                    <option value="">{language === "hi" ? "अभी निश्चित नहीं है" : "Not Sure Yet"}</option>
                    {siteData.tests
                      .filter(t => selectedCategory === "All" || (language === "hi" ? t.categoryHindi : t.category) === selectedCategory)
                      .map((t) => (
                      <option key={t.id} value={t.id}>
                        {language === "hi" ? t.nameHindi : t.name} (₹{t.price})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient details */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {language === "hi" ? "मरीज का पूरा नाम" : "Patient Full Name"}
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder={language === "hi" ? "जैसे: राजेश पटेल" : "e.g. Rajesh Patel"}
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {language === "hi" ? "फ़ोन नंबर" : "Phone Number"}
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="e.g. 9876543210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {language === "hi" ? "पसंदीदा कलेक्शन तारीख" : "Preferred Collection Date"}
                  </label>
                  <input 
                    type="date" 
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    {language === "hi" ? "पसंदीदा समय" : "Preferred Time Slot"}
                  </label>
                  <select 
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 font-medium"
                  >
                    <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM ({language === "hi" ? "खाली पेट जांच के लिए" : "Recommended for Fasting"})</option>
                    <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
                    <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
                    <option value="3:00 PM - 6:00 PM">3:00 PM - 6:00 PM</option>
                    <option value="6:00 PM - 10:00 PM">6:00 PM - 10:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  {language === "hi" ? "घर का पूरा पता" : "Complete Home Collection Address"}
                </label>
                <textarea 
                  required
                  placeholder={language === "hi" ? "अपार्टमेंट नंबर, गली, लैंडमार्क, पिन कोड" : "Apartment, Street Address, Landmarks, PIN Code"}
                  rows={3}
                  value={patientAddress}
                  onChange={(e) => setPatientAddress(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>

              {/* Form CTAs */}
              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl transition duration-150 shadow-xs"
                >
                  {language === "hi" ? "सैंपल कलेक्शन बुकिंग सुरक्षित करें" : "Confirm Home Collection Schedule"}
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[10px] text-slate-400">
                  {language === "hi" ? "सुरक्षित रूप से एन्क्रिप्टेड। आपके सैंपल और विवरण गोपनीय रखे जाते हैं।" : "Encrypted submission. Your biological sample schedules are strictly audited by verified clinicians."}
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 font-semibold text-slate-500">Loading...</div>}>
      <BookingFormContent />
    </Suspense>
  );
}
