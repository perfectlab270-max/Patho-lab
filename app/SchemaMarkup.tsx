import React from "react";
import { siteData } from "./site-data";

export default function SchemaMarkup() {
  const baseUrl = "https://perfectlab270.in";

  // 1. MedicalBusiness / LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": siteData.name,
    "alternateName": "Perfect Diagnostics",
    "description": siteData.description,
    "url": baseUrl,
    "logo": `${baseUrl}/icon.svg`,
    "image": `${baseUrl}/indian_pathology_laboratory.png`,
    "telephone": siteData.emergencyContact,
    "email": siteData.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Perfect Laboratory Branch, Vapi Area",
      "addressLocality": "Vapi",
      "addressRegion": "Gujarat",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.355732,
      "longitude": 72.925938,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "22:00"
      }
    ],
    "sameAs": [
      siteData.socials.facebook,
      siteData.socials.twitter,
      siteData.socials.instagram,
      siteData.socials.linkedin,
      siteData.socials.youtube
    ],
    "accreditation": {
      "@type": "MedicalSpecialty",
      "name": "NABL Accredited Medical Diagnostics Laboratory Standards (MC-8765)"
    }
  };

  // 2. Identity / Organization Schema
  const identitySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${baseUrl}/#organization`,
    "name": siteData.name,
    "url": baseUrl,
    "logo": `${baseUrl}/icon.svg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteData.emergencyContact,
      "contactType": "customer service",
      "contactOption": "TollFree",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "knowsAbout": [
      "Pathology testing",
      "Blood profiles",
      "Thyroid screening",
      "Kidney and Liver functions",
      "NABL diagnostics"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(identitySchema) }}
      />
    </>
  );
}
