import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import { siteData } from "./site-data";
import Navbar from "./Navbar";
import { LanguageProvider } from "./LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteData.name,
  description: siteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800">
        
        <LanguageProvider>
          {/* Global Navbar and page components inside Provider */}
          <Navbar />

          <div className="flex-1">
            {children}
          </div>

            {/* Shared Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
              <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-lg">Perfect Laboratory</h4>
                  <p className="text-sm leading-relaxed">
                    Leading the path of diagnostic accuracy with NABL standard quality audits and clinical care.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-4">Quality Certifications</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• NABL Accredited</li>
                    <li>• ISO 15189:2012 Certified</li>
                    <li>• Cap-Compliant Auditing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-4">Help & Emergency</h4>
                  <p className="text-sm">Helpline: {siteData.emergencyContact}</p>
                  <p className="text-sm font-semibold text-emerald-500">WhatsApp: {siteData.whatsappNumber}</p>
                  <p className="text-sm">Email: {siteData.email}</p>
                </div>
              </div>
              <div className="max-w-6xl mx-auto border-t border-slate-800 mt-8 pt-8 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
              </div>
            </footer>

            {/* Floating WhatsApp Action Button */}
            <a 
              href={`https://wa.me/${siteData.whatsappNumber}?text=Hello%20Perfect%20Laboratory%2C%20I%20would%20like%20to%20inquire%20about%20a%20diagnostic%20test%20or%20book%20a%20Home%20Sample%20Collection.`}
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border border-emerald-400/10 cursor-pointer"
              aria-label="Contact us on WhatsApp"
            >
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </LanguageProvider>

      </body>
    </html>
  );
}
