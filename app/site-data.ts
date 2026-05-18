import testsJson from './tests.json';

export interface Test {
  id: string;
  name: string;
  nameHindi: string;
  category: string;
  categoryHindi: string;
  price: number;
  originalPrice: number;
  tat: string; // Turnaround time
  tatHindi: string;
  description: string;
  descriptionHindi: string;
  preparations: string[];
  preparationsHindi: string[];
  includedTests?: string[];
  includedTestsHindi?: string[];
}

export interface SEOLanding {
  slug: string;
  title: string;
  testId: string;
  location: string;
  description: string;
  benefits: string[];
}

export interface Testimonial {
  name: string;
  nameHindi: string;
  role: string;
  roleHindi: string;
  rating: number;
  review: string;
  reviewHindi: string;
  date: string;
  dateHindi: string;
}

export interface FAQ {
  question: string;
  questionHindi: string;
  answer: string;
  answerHindi: string;
}

export const siteData = {
  name: "Perfect Laboratory",
  tagline: "Accurate Reports, Compassionate Patient Care",
  description: "Perfect Laboratory is a premier, fully-automated NABL-accredited pathology laboratory dedicated to providing high-quality, fast, and patient-centered diagnostic services. We strive to make health testing painless and easily accessible through home collections and digital report delivery.",
  emergencyContact: "+919784162270",
  whatsappNumber: "+919784162270",
  email: "contact@auradiagnostics.com",
  googleMapsUrl: "https://maps.app.goo.gl/5B4DiJRZj8ptk8P5A",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1936.2537777822383!2d72.92593800365285!3d20.355732402414223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf9db15ad297%3A0xb10a858116e6ddc9!2sPerfect%20Laboratory!5e1!3m2!1sen!2sin!4v1779044283963!5m2!1sen!2sin",
  accreditations: [
    {
      title: "NABL Accredited",
      subtitle: "National Accreditation Board for Testing and Calibration Laboratories (MC-8765)",
      logoText: "NABL"
    },
    {
      title: "ISO 15189:2012",
      subtitle: "International standards for medical laboratories quality management",
      logoText: "ISO"
    },
    {
      title: "CMC Vellore EQAS",
      subtitle: "Regular participant in the External Quality Assurance Scheme by CMC Vellore for accuracy audits",
      logoText: "EQAS"
    }
  ],
  certifications: [
    {
      title: "Certified Medical Pathologist Supervision",
      details: "All test results are clinically evaluated and digitally signed by fully accredited MD Pathologists."
    },
    {
      title: "100% Sterile & Hygienic Processing",
      details: "We maintain ultra-clean, dust-free processing zones using international barcoded vacuum tube protocols."
    }
  ],
  timings: {
    weekdays: "Monday - Saturday: 9:00 AM - 10:00 PM",
    sunday: "Sunday: 9:00 AM - 10:00 PM",
    collection: "Home Sample Collection: 9:00 AM - 10:00 PM (Everyday)"
  },
  tests: [
    {
      id: "wellness-1-1",
      name: "Wellness Package 1.1",
      nameHindi: "वेलनेस पैकेज 1.1",
      category: "Comprehensive Packages",
      categoryHindi: "कम्पलीट हेल्थ पैकेज",
      price: 1600,
      originalPrice: 2999,
      tat: "12 Hours",
      tatHindi: "12 घंटे",
      description: "Comprehensive package featuring Kidney Profile, GFR, Liver Function Tests (LFT), Lipid Profile, Iron Profile, and Thyroid Profile (T3, T4, TSH).",
      descriptionHindi: "बुनियादी स्वास्थ्य स्क्रीनिंग जिसमें किडनी प्रोफाइल, जीएफआर, लिवर फंक्शन टेस्ट, लिपिड प्रोफाइल, आयरन प्रोफाइल और थायराइड शामिल हैं।",
      preparations: ["10-12 hours overnight fasting is mandatory.", "Water is permitted during fasting."],
      preparationsHindi: ["10-12 घंटे का रातभर का उपवास अनिवार्य है।", "उपवास के दौरान पानी पीने की अनुमति है।"],
      includedTests: [
        "Kidney Profile (with Electrolytes)",
        "GFR (Glomerular Filtration Rate)",
        "Liver Function Tests (LFT)",
        "Lipid Profile (Cholesterol)",
        "Iron Profile",
        "Thyroid Profile (T3, T4, TSH)"
      ],
      includedTestsHindi: [
        "किडनी प्रोफाइल (इलेक्ट्रोलाइट्स सहित)",
        "जीएफआर (किडनी छानने की क्षमता)",
        "लिवर फंक्शन टेस्ट (LFT)",
        "लिपिड प्रोफाइल (कोलेस्ट्रॉल)",
        "आयरन प्रोफाइल",
        "थायराइड प्रोफाइल (T3, T4, TSH)"
      ]
    },
    {
      id: "wellness-1-2",
      name: "Wellness Package 1.2",
      nameHindi: "वेलनेस पैकेज 1.2",
      category: "Comprehensive Packages",
      categoryHindi: "कम्पलीट हेल्थ पैकेज",
      price: 2400,
      originalPrice: 4499,
      tat: "12 Hours",
      tatHindi: "12 घंटे",
      description: "Advanced screening containing CBC, HbA1c, Kidney Profile, GFR, LFT, Lipid Profile, Iron Profile, Thyroid (T3, T4, TSH), and Electrolytes.",
      descriptionHindi: "विस्तृत स्वास्थ्य स्क्रीनिंग जिसमें सीबीसी, एचबीए1सी, किडनी प्रोफाइल, जीएफआर, लिवर, लिपिड, आयरन, थायराइड और इलेक्ट्रोलाइट्स शामिल हैं।",
      preparations: ["10-12 hours overnight fasting is mandatory."],
      preparationsHindi: ["10-12 घंटे का रातभर का उपवास अनिवार्य है।"],
      includedTests: [
        "Complete Blood Count (CBC)",
        "HbA1c (Glycated Hemoglobin)",
        "Kidney Profile",
        "GFR (Glomerular Filtration Rate)",
        "Liver Function Tests (LFT)",
        "Lipid Profile (Cholesterol)",
        "Iron Profile",
        "Thyroid Profile (T3, T4, TSH)",
        "Serum Electrolytes"
      ],
      includedTestsHindi: [
        "कम्पलीट ब्लड काउंट (CBC)",
        "एचबीए1सी (3 महीने की शुगर जांच)",
        "किडनी प्रोफाइल (KFT)",
        "जीएफआर (किडनी क्षमता)",
        "लिवर फंक्शन टेस्ट (LFT)",
        "लिपिड प्रोफाइल (कोलेस्ट्रॉल)",
        "आयरन प्रोफाइल",
        "थायराइड प्रोफाइल (T3, T4, TSH)",
        "सीरम इलेक्ट्रोलाइट्स"
      ]
    },
    {
      id: "wellness-1-3",
      name: "Wellness Package 1.3",
      nameHindi: "वेलनेस पैकेज 1.3",
      category: "Comprehensive Packages",
      categoryHindi: "कम्पलीट हेल्थ पैकेज",
      price: 3200,
      originalPrice: 5999,
      tat: "12 Hours",
      tatHindi: "12 घंटे",
      description: "Premium wellness panel featuring CBC, HbA1c, Kidney with Electrolytes, GFR, Liver Function, Lipids, Iron, Thyroid, Vitamin D, Vitamin B12, Testosterone, Amylase, and Lipase.",
      descriptionHindi: "सुपर प्रीमियम पैक जिसमें सीबीसी, एचबीए1सी, किडनी, इलेक्ट्रोलाइट्स, लिवर, लिपिड, आयरन, थायराइड, विटामिन डी, विटामिन बी12, टेस्टोस्टेरोन और एमाइलेज/लाइपेज शामिल हैं।",
      preparations: ["Strict 10-12 hours overnight fasting is mandatory."],
      preparationsHindi: ["कड़ा 10-12 घंटे का रातभर का उपवास अनिवार्य है।"],
      includedTests: [
        "Complete Blood Count (CBC)",
        "HbA1c (Glycated Hemoglobin)",
        "Kidney Profile with Electrolytes",
        "GFR (Glomerular Filtration Rate)",
        "Liver Function Tests (LFT)",
        "Lipid Profile (Cholesterol)",
        "Iron Profile",
        "Thyroid Profile (T3, T4, TSH)",
        "25-OH Vitamin D (Total)",
        "Vitamin B12",
        "Testosterone (Total)",
        "Amylase (Serum)",
        "Lipase"
      ],
      includedTestsHindi: [
        "कम्पलीट ब्लड काउंट (CBC)",
        "एचबीए1सी (3 महीने की शुगर)",
        "किडनी प्रोफाइल (इलेक्ट्रोलाइट्स सहित)",
        "जीएफआर (किडनी छानने की क्षमता)",
        "लिवर फंक्शन टेस्ट (LFT)",
        "लिपिड प्रोफाइल (कोलेस्ट्रॉल)",
        "आयरन प्रोफाइल",
        "थायराइड प्रोफाइल (T3, T4, TSH)",
        "विटामिन डी (Vitamin D 25-OH)",
        "विटामिन बी12 (Vitamin B12)",
        "टेस्टोस्टेरोन टोटल (Testosterone)",
        "सीरम एमाइलेज (Amylase)",
        "लाइपेज (Lipase)"
      ]
    },
    {
      id: "fitness-1-1",
      name: "HY Fitness Package 1.1 (39 Tests)",
      nameHindi: "HY फिटनेस पैकेज 1.1 (39 टेस्ट)",
      category: "Comprehensive Packages",
      categoryHindi: "कम्पलीट हेल्थ पैकेज",
      price: 1200,
      originalPrice: 2499,
      tat: "12 Hours",
      tatHindi: "12 घंटे",
      description: "Comprehensive 39-parameter test covering Kidney Profile (7), GFR (1), Electrolytes (3), Liver Function (12), Thyroid (3), Lipid Profile (9), Iron Profile (3), and C-Reactive Protein (CRP) Quantitative (1).",
      descriptionHindi: "39 पैरामीटर फिटनेस स्क्रीन जिसमें किडनी (7), जीएफआर (1), इलेक्ट्रोलाइट्स (3), लिवर (12), थायराइड (3), लिपिड (9), आयरन (3) और सीआरपी (1) शामिल हैं।",
      preparations: ["10-12 hours overnight fasting is mandatory."],
      preparationsHindi: ["10-12 घंटे का रातभर का उपवास अनिवार्य है।"],
      includedTests: [
        "Kidney Profile (7 parameters)",
        "GFR (Glomerular Filtration Rate)",
        "Electrolytes (3 parameters)",
        "Liver Function Tests (12 parameters)",
        "Thyroid Profile (3 parameters)",
        "Lipid Profile (9 parameters)",
        "Iron Profile (3 parameters)",
        "CRP (C-Reactive Protein) Quantitative"
      ],
      includedTestsHindi: [
        "किडनी प्रोफाइल (7 पैरामीटर)",
        "जीएफआर (किडनी क्षमता)",
        "इलेक्ट्रोलाइट्स (3 पैरामीटर)",
        "लिवर फंक्शन टेस्ट (LFT) (12 पैरामीटर)",
        "थायराइड प्रोफाइल (3 पैरामीटर)",
        "लिपिड प्रोफाइल (9 पैरामीटर)",
        "आयरन प्रोफाइल (3 पैरामीटर)",
        "सीआरपी (CRP) क्वांटिटेटिव"
      ]
    },
    {
      id: "fitness-1-2",
      name: "HY Fitness Package 1.2 (65 Tests)",
      nameHindi: "HY फिटनेस पैकेज 1.2 (65 टेस्ट)",
      category: "Comprehensive Packages",
      categoryHindi: "कम्पलीट हेल्थ पैकेज",
      price: 2000,
      originalPrice: 3999,
      tat: "12 Hours",
      tatHindi: "12 घंटे",
      description: "Advanced 65-parameter panel featuring CBC (24), Kidney Profile (7), GFR (1), Electrolytes (3), Liver Function (12), Thyroid (3), Lipid Profile (9), Iron Profile (3), HbA1c (2), and C-Reactive Protein (CRP) Quantitative (1).",
      descriptionHindi: "65 जांच पैरामीटर जिसमें सीबीसी (24), किडनी (7), जीएफआर (1), इलेक्ट्रोलाइट्स (3), लिवर (12), थायराइड (3), लिपिड (9), आयरन (3), एचबीए1सी (2) और सीआरपी (1) शामिल हैं।",
      preparations: ["10-12 hours overnight fasting is mandatory."],
      preparationsHindi: ["10-12 घंटे का रातभर का उपवास अनिवार्य है।"],
      includedTests: [
        "Complete Blood Count (CBC) (24 parameters)",
        "Kidney Profile (7 parameters)",
        "GFR (Glomerular Filtration Rate)",
        "Electrolytes (3 parameters)",
        "Liver Function Tests (12 parameters)",
        "Thyroid Profile (3 parameters)",
        "Lipid Profile (9 parameters)",
        "Iron Profile (3 parameters)",
        "HbA1c (Glycated Hemoglobin) (2 parameters)",
        "CRP (C-Reactive Protein) Quantitative"
      ],
      includedTestsHindi: [
        "कम्पलीट ब्लड काउंट (CBC) (24 पैरामीटर)",
        "किडनी प्रोफाइल (7 पैरामीटर)",
        "जीएफआर (किडनी क्षमता)",
        "इलेक्ट्रोलाइट्स (3 पैरामीटर)",
        "लिवर फंक्शन टेस्ट (LFT) (12 पैरामीटर)",
        "थायराइड प्रोफाइल (3 पैरामीटर)",
        "लिपिड प्रोफाइल (9 पैरामीटर)",
        "आयरन प्रोफाइल (3 पैरामीटर)",
        "एचबीए1सी (HbA1c) (2 पैरामीटर)",
        "सीआरपी (CRP) क्वांटिटेटिव"
      ]
    },
    {
      id: "fitness-1-3",
      name: "HY Fitness Package 1.3 (68 Tests)",
      nameHindi: "HY फिटनेस पैकेज 1.3 (68 टेस्ट)",
      category: "Comprehensive Packages",
      categoryHindi: "कम्पलीट हेल्थ पैकेज",
      price: 3000,
      originalPrice: 5999,
      tat: "12 Hours",
      tatHindi: "12 घंटे",
      description: "Contains 68 parameters including CBC (24), Kidney (7), GFR (1), Electrolytes (3), Liver Function (12), Thyroid (3), Lipid Profile (9), Iron (3), HbA1c (2), Vitamin D (1), Vitamin B12 (1), Testosterone Total (1), and hs-CRP (1).",
      descriptionHindi: "68 जांच पैरामीटर जिसमें सीबीसी, किडनी, लिवर, थायराइड, लिपिड, आयरन, एचबीए1सी, विटामिन डी, विटामिन बी12, टेस्टोस्टेरोन और एचएस-सीआरपी (hs-CRP) शामिल हैं।",
      preparations: ["Strict 10-12 hours overnight fasting is mandatory."],
      preparationsHindi: ["कड़ा 10-12 घंटे का रातभर का उपवास अनिवार्य है।"],
      includedTests: [
        "Complete Blood Count (CBC) (24 parameters)",
        "Kidney Profile (7 parameters)",
        "GFR (Glomerular Filtration Rate)",
        "Electrolytes (3 parameters)",
        "Liver Function Tests (12 parameters)",
        "Thyroid Profile (3 parameters)",
        "Lipid Profile (9 parameters)",
        "Iron Profile (3 parameters)",
        "HbA1c (Glycated Hemoglobin) (2 parameters)",
        "25-OH Vitamin D (1 parameter)",
        "Vitamin B12 (1 parameter)",
        "Testosterone Total (1 parameter)",
        "hs-CRP (High-Sensitivity CRP) (1 parameter)"
      ],
      includedTestsHindi: [
        "कम्पलीट ब्लड काउंट (CBC) (24 पैरामीटर)",
        "किडनी प्रोफाइल (7 पैरामीटर)",
        "जीएफआर (किडनी क्षमता)",
        "इलेक्ट्रोलाइट्स (3 पैरामीटर)",
        "लिवर फंक्शन टेस्ट (LFT) (12 पैरामीटर)",
        "थायराइड प्रोफाइल (3 पैरामीटर)",
        "लिपिड प्रोफाइल (9 पैरामीटर)",
        "आयरन प्रोफाइल (3 पैरामीटर)",
        "एचबीए1सी (2 पैरामीटर)",
        "विटामिन डी (1 पैरामीटर)",
        "विटामिन बी12 (1 पैरामीटर)",
        "टेस्टोस्टेरोन टोटल (1 पैरामीटर)",
        "एचएस-सीआरपी (hs-CRP) (1 पैरामीटर)"
      ]
    },
    {
      id: "fitness-1",
      name: "HY Fitness Package 1 (86 Tests)",
      nameHindi: "HY फिटनेस पैकेज 1 (86 टेस्ट)",
      category: "Comprehensive Packages",
      categoryHindi: "कम्पलीट हेल्थ पैकेज",
      price: 1500,
      originalPrice: 2999,
      tat: "12 Hours",
      tatHindi: "12 घंटे",
      description: "Includes 86 tests: CBC (24), ESR (1), Kidney (7), GFR (1), Electrolytes (3), Liver (12), Thyroid (3), Lipids (9), Iron (3), Blood Sugar Fasting (1), and Urine Analysis R/M (22).",
      descriptionHindi: "86 जांच पैरामीटर जिसमें सीबीसी (24), ईएसआर (1), किडनी (7), जीएफआर (1), इलेक्ट्रोलाइट्स (3), लिवर (12), थायराइड (3), लिपिड (9), आयरन (3), शुगर (1) और मूत्र विश्लेषण (22) शामिल हैं।",
      preparations: ["10-12 hours overnight fasting is mandatory.", "First morning urine sample required."],
      preparationsHindi: ["10-12 घंटे का रातभर का उपवास अनिवार्य है।", "सुबह का पहला मूत्र सैंपल आवश्यक है।"],
      includedTests: [
        "Complete Blood Count (CBC) (24 parameters)",
        "ESR (Erythrocyte Sedimentation Rate) (1 parameter)",
        "Kidney Profile (7 parameters)",
        "GFR (Glomerular Filtration Rate)",
        "Electrolytes (3 parameters)",
        "Liver Function Tests (12 parameters)",
        "Thyroid Profile (3 parameters)",
        "Lipid Profile (9 parameters)",
        "Iron Profile (3 parameters)",
        "Blood Sugar Fasting (1 parameter)",
        "Urine Analysis R/M (22 parameters)"
      ],
      includedTestsHindi: [
        "कम्पलीट ब्लड काउंट (CBC) (24 पैरामीटर)",
        "ईएसआर (ESR) (1 पैरामीटर)",
        "किडनी प्रोफाइल (7 पैरामीटर)",
        "जीएफआर (किडनी क्षमता)",
        "इलेक्ट्रोलाइट्स (3 पैरामीटर)",
        "लिवर फंक्शन टेस्ट (LFT) (12 पैरामीटर)",
        "थायराइड प्रोफाइल (3 पैरामीटर)",
        "लिपिड प्रोफाइल (9 पैरामीटर)",
        "आयरन प्रोफाइल (3 पैरामीटर)",
        "ब्लड शुगर फास्टिंग (1 पैरामीटर)",
        "यूरिन एनालिसिस R/M (22 पैरामीटर)"
      ]
    },
    {
      id: "fitness-2",
      name: "HY Fitness Package 2 (88 Tests)",
      nameHindi: "HY फिटनेस पैकेज 2 (88 टेस्ट)",
      category: "Comprehensive Packages",
      categoryHindi: "कम्पलीट हेल्थ पैकेज",
      price: 2000,
      originalPrice: 3999,
      tat: "12 Hours",
      tatHindi: "12 घंटे",
      description: "Includes 88 tests: CBC (24), ESR (1), Kidney (7), GFR (1), Electrolytes (3), Liver (12), Thyroid (3), Lipids (9), Iron (3), Blood Sugar Fasting (1), Urine Analysis R/M (22), and HbA1c (2).",
      descriptionHindi: "88 जांच पैरामीटर जिसमें सीबीसी (24), ईएसआर (1), किडनी (7), जीएफआर (1), इलेक्ट्रोलाइट्स (3), लिवर (12), थायराइड (3), लिपिड (9), आयरन (3), शुगर (1), मूत्र विश्लेषण (22) और एचबीए1सी (2) शामिल हैं।",
      preparations: ["10-12 hours overnight fasting is mandatory.", "First morning urine sample required."],
      preparationsHindi: ["10-12 घंटे का रातभर का उपवास अनिवार्य है।", "सुबह का पहला मूत्र सैंपल आवश्यक है।"],
      includedTests: [
        "Complete Blood Count (CBC) (24 parameters)",
        "ESR (Erythrocyte Sedimentation Rate) (1 parameter)",
        "Kidney Profile (7 parameters)",
        "GFR (Glomerular Filtration Rate)",
        "Electrolytes (3 parameters)",
        "Liver Function Tests (12 parameters)",
        "Thyroid Profile (3 parameters)",
        "Lipid Profile (9 parameters)",
        "Iron Profile (3 parameters)",
        "Blood Sugar Fasting (1 parameter)",
        "Urine Analysis R/M (22 parameters)",
        "HbA1c (Glycated Hemoglobin) (2 parameters)"
      ],
      includedTestsHindi: [
        "कम्पलीट ब्लड काउंट (CBC) (24 पैरामीटर)",
        "ईएसआर (ESR) (1 पैरामीटर)",
        "किडनी प्रोफाइल (7 पैरामीटर)",
        "जीएफआर (किडनी क्षमता)",
        "इलेक्ट्रोलाइट्स (3 पैरामीटर)",
        "लिवर फंक्शन टेस्ट (LFT) (12 पैरामीटर)",
        "थायराइड प्रोफाइल (3 पैरामीटर)",
        "लिपिड प्रोफाइल (9 पैरामीटर)",
        "आयरन प्रोफाइल (3 पैरामीटर)",
        "ब्लड शुगर फास्टिंग (1 पैरामीटर)",
        "यूरिन एनालिसिस R/M (22 पैरामीटर)",
        "एचबीए1सी (2 पैरामीटर)"
      ]
    },
    {
      id: "fitness-3",
      name: "HY Fitness Package 3 (90 Tests)",
      nameHindi: "HY फिटनेस पैकेज 3 (90 टेस्ट)",
      category: "Comprehensive Packages",
      categoryHindi: "कम्पलीट हेल्थ पैकेज",
      price: 3000,
      originalPrice: 5999,
      tat: "12 Hours",
      tatHindi: "12 घंटे",
      description: "Includes 90 tests: CBC (24), ESR (1), Kidney (7), GFR (1), Electrolytes (3), Liver (12), Thyroid (3), Lipids (9), Iron (3), Blood Sugar Fasting (1), Urine Analysis R/M (22), Vitamin D (1), and Vitamin B12 (1).",
      descriptionHindi: "90 जांच पैरामीटर जिसमें सीबीसी, ईएसआर, किडनी, लिवर, थायराइड, लिपिड, आयरन, शुगर, मूत्र विश्लेषण, विटामिन डी और विटामिन बी12 शामिल हैं।",
      preparations: ["10-12 hours overnight fasting is mandatory.", "First morning urine sample required."],
      preparationsHindi: ["10-12 घंटे का रातभर का उपवास अनिवार्य है।", "सुबह का पहला मूत्र सैंपल आवश्यक है।"],
      includedTests: [
        "Complete Blood Count (CBC) (24 parameters)",
        "ESR (Erythrocyte Sedimentation Rate) (1 parameter)",
        "Kidney Profile (7 parameters)",
        "GFR (Glomerular Filtration Rate)",
        "Electrolytes (3 parameters)",
        "Liver Function Tests (12 parameters)",
        "Thyroid Profile (3 parameters)",
        "Lipid Profile (9 parameters)",
        "Iron Profile (3 parameters)",
        "Blood Sugar Fasting (1 parameter)",
        "Urine Analysis R/M (22 parameters)",
        "25-OH Vitamin D (1 parameter)",
        "Vitamin B12 (1 parameter)"
      ],
      includedTestsHindi: [
        "कम्पलीट ब्लड काउंट (CBC) (24 पैरामीटर)",
        "ईएसआर (ESR) (1 पैरामीटर)",
        "किडनी प्रोफाइल (7 पैरामीटर)",
        "जीएफआर (किडनी क्षमता)",
        "इलेक्ट्रोलाइट्स (3 पैरामीटर)",
        "लिवर फंक्शन टेस्ट (LFT) (12 पैरामीटर)",
        "थायराइड प्रोफाइल (3 पैरामीटर)",
        "लिपिड प्रोफाइल (9 पैरामीटर)",
        "आयरन प्रोफाइल (3 पैरामीटर)",
        "ब्लड शुगर फास्टिंग (1 पैरामीटर)",
        "यूरिन एनालिसिस R/M (22 पैरामीटर)",
        "विटामिन डी (1 पैरामीटर)",
        "विटामिन बी12 (1 पैरामीटर)"
      ]
    },
    {
      id: "fitness-4",
      name: "HY Fitness Package 4 (100 Tests)",
      nameHindi: "HY फिटनेस पैकेज 4 (100 टेस्ट)",
      category: "Comprehensive Packages",
      categoryHindi: "कम्पलीट हेल्थ पैकेज",
      price: 4000,
      originalPrice: 7999,
      tat: "12 Hours",
      tatHindi: "12 घंटे",
      description: "The ultimate 100 tests master package covering CBC, ESR, Kidney, GFR, Electrolytes, Liver, Thyroid, Lipids, Iron, HbA1c, Vitamin D, Vitamin B12, Testosterone, Amylase, Lipase, Blood Sugar Fasting, Urine R/M, Rheumatoid Factor (RA), and Anti-Streptolysin O (ASO) Titre.",
      descriptionHindi: "सर्वोच्च 100 टेस्ट्स मास्टर पैकेज जिसमें सीबीसी, ईएसआर, किडनी, लिवर, थायराइड, लिपिड, आयरन, एचबीए1सी, विटामिन डी, विटामिन बी12, टेस्टोस्टेरोन, एमाइलेज, लाइपेज, शुगर, यूरिन आर/एम, आरए टेस्ट और एएसओ शामिल हैं।",
      preparations: ["Strict 10-12 hours overnight fasting mandatory.", "First morning urine sample is collected alongside blood."],
      preparationsHindi: ["कड़ा 10-12 घंटे का रातभर का उपवास अनिवार्य है।", "रक्त के साथ सुबह का पहला मूत्र सैंपल भी लिया जाता है।"],
      includedTests: [
        "Complete Blood Count (CBC) (24 parameters)",
        "ESR (Erythrocyte Sedimentation Rate) (1 parameter)",
        "Kidney Profile (7 parameters)",
        "GFR (Glomerular Filtration Rate)",
        "Electrolytes (3 parameters)",
        "Liver Function Tests (12 parameters)",
        "Thyroid Profile (3 parameters)",
        "Lipid Profile (9 parameters)",
        "Iron Profile (3 parameters)",
        "HbA1c (Glycated Hemoglobin) (2 parameters)",
        "25-OH Vitamin D (1 parameter)",
        "Vitamin B12 (1 parameter)",
        "Testosterone Total (1 parameter)",
        "Amylase (1 parameter)",
        "Lipase (1 parameter)",
        "Blood Sugar Fasting (1 parameter)",
        "Urine R/M (22 parameters)",
        "Rheumatoid Factor (RA) Quantitative (1 parameter)",
        "ASO (Anti-Streptolysin O) Titre (1 parameter)"
      ],
      includedTestsHindi: [
        "कम्पलीट ब्लड काउंट (CBC) (24 पैरामीटर)",
        "ईएसआर (ESR) (1 पैरामीटर)",
        "किडनी प्रोफाइल (7 पैरामीटर)",
        "जीएफआर (किडनी क्षमता)",
        "इलेक्ट्रोलाइट्स (3 पैरामीटर)",
        "लिवर फंक्शन टेस्ट (LFT) (12 पैरामीटर)",
        "थायराइड प्रोफाइल (3 पैरामीटर)",
        "लिपिड प्रोफाइल (9 पैरामीटर)",
        "आयरन प्रोफाइल (3 पैरामीटर)",
        "एचबीए1सी (2 पैरामीटर)",
        "विटामिन डी (1 पैरामीटर)",
        "विटामिन बी12 (1 पैरामीटर)",
        "टेस्टोस्टेरोन टोटल (1 पैरामीटर)",
        "एमाइलेज (1 पैरामीटर)",
        "लाइपेज (1 पैरामीटर)",
        "ब्लड शुगर फास्टिंग (1 पैरामीटर)",
        "यूरिन आर/एम (22 पैरामीटर)",
        "आरए टेस्ट (RA Factor) (1 पैरामीटर)",
        "एएसओ टाइटर (ASO Titre) (1 पैरामीटर)"
      ]
    }
  ] as Test[],
  testimonials: [
    {
      name: "Rajesh Patel",
      nameHindi: "राजेश पटेल",
      role: "Vapi Resident",
      roleHindi: "वापी निवासी",
      rating: 5,
      review: "Very gentle and patient-friendly home collection experience. The technician was extremely professional, sanitized before opening the kit, and took my blood sample painlessly. Highly recommended!",
      reviewHindi: "बहुत ही सौम्य और मरीज के अनुकूल घर पर सैंपल लेने का अनुभव। तकनीशियन बेहद पेशेवर था, किट खोलने से पहले हाथ साफ किए, और बिना किसी दर्द के मेरा खून का सैंपल लिया। अत्यधिक अनुशंसित!",
      date: "2 days ago",
      dateHindi: "२ दिन पहले"
    },
    {
      name: "Dr. Sunita Mehta",
      nameHindi: "डॉ. सुनीता मेहता",
      role: "Consultant Pediatrician",
      roleHindi: "बाल रोग विशेषज्ञ",
      rating: 5,
      review: "I refer many of my young patients to Perfect Lab. Their report accuracy is excellent, NABL standardisation is strict, and online dashboard delivery is remarkably fast and convenient.",
      reviewHindi: "मैं अपने कई बाल रोगियों को परफेक्ट लैब में जांच के लिए भेजती हूं। उनकी रिपोर्ट की सटीकता उत्कृष्ट है, एनएबीएल मानकीकरण सख्त है, और ऑनलाइन रिपोर्ट डिलीवरी उल्लेखनीय रूप से तेज है।",
      date: "1 week ago",
      dateHindi: "१ सप्ताह पहले"
    },
    {
      name: "Amit Desai",
      nameHindi: "अमित देसाई",
      role: "Senior Citizen Caretaker",
      roleHindi: "वरिष्ठ नागरिक देखभालकर्ता",
      rating: 5,
      review: "Booked a full body thyroid and lipid checkup for my elderly father. Tech came right at 6:30 AM, took samples with care, and the WhatsApp report arrived the same evening. Amazing service.",
      reviewHindi: "अपने बुजुर्ग पिता के लिए फुल बॉडी थायराइड और लिपिड चेकअप बुक किया था। तकनीशियन ठीक सुबह ६:३० बजे आए, सावधानी से सैंपल लिए, और रिपोर्ट उसी शाम व्हाट्सएप पर आ गई। अद्भुत सेवा।",
      date: "2 weeks ago",
      dateHindi: "२ सप्ताह पहले"
    }
  ] as Testimonial[],
  faqs: [
    {
      question: "How do I book a home sample collection?",
      questionHindi: "मैं घर पर सैंपल कलेक्शन कैसे बुक करूं?",
      answer: "You can book directly using the form on this website, or click the WhatsApp button to chat with our booking assistant immediately. We collect samples starting as early as 6:00 AM.",
      answerHindi: "आप सीधे इस वेबसाइट पर फॉर्म का उपयोग करके बुक कर सकते हैं, या तुरंत व्हाट्सएप बटन पर क्लिक करके हमारे असिस्टेंट से चैट कर सकते हैं। हम सुबह ६:०० बजे से ही सैंपल कलेक्ट करना शुरू कर देते हैं।"
    },
    {
      question: "Are home collections NABL-compliant and hygienic?",
      questionHindi: "क्या होम कलेक्शन एनएबीएल-अनुरूप और स्वच्छ हैं?",
      answer: "Yes, absolutely. Our collection technicians carry vacuum-sealed barcode tubes, disposable single-use needles, personal sanitizers, and temperature-controlled medical bags to prevent sample degradation.",
      answerHindi: "जी हाँ, बिल्कुल। हमारे तकनीशियन वैक्यूम-सील्ड बारकोड ट्यूब, डिस्पोजेबल सुइयां, सैनिटाइज़र और तापमान-नियंत्रित बैग लाते हैं ताकि जैविक सैंपल पूरी तरह से स्वच्छ और सुरक्षित रहें।"
    },
    {
      question: "How and when will I get my diagnostic reports?",
      questionHindi: "मुझे अपनी जांच रिपोर्ट कब और कैसे मिलेगी?",
      answer: "Your reports are delivered instantly on your registered WhatsApp number and via email once validated by our pathologists. You can also download them on our website by entering your Receipt ID.",
      answerHindi: "पैथोलॉजिस्ट द्वारा सत्यापित होने के बाद आपकी रिपोर्ट आपके पंजीकृत व्हाट्सएप नंबर और ईमेल पर तुरंत भेज दी जाती है। आप हमारी वेबसाइट पर रसीद आईडी डालकर भी इसे डाउनलोड कर सकते हैं।"
    },
    {
      question: "Is fasting mandatory for all blood tests?",
      questionHindi: "क्या सभी रक्त परीक्षणों के लिए उपवास अनिवार्य है?",
      answer: "Fasting is mandatory only for specific tests like Lipid Profile (12 hours) and Blood Sugar Fasting. Routine tests like HbA1c, CBC, and Thyroid do not require fasting. Preparation instructions are clearly listed for each test.",
      answerHindi: "उपवास केवल विशिष्ट परीक्षणों जैसे लिपिड प्रोफाइल (१२ घंटे) और खाली पेट शुगर की जांच के लिए अनिवार्य है। सामान्य जांच जैसे एचबीए1सी, सीबीसी और थायराइड के लिए उपवास की आवश्यकता नहीं होती है।"
    },
    {
      question: "What is your NABL registration status?",
      questionHindi: "आपकी एनएबीएल (NABL) पंजीकरण स्थिति क्या है?",
      answer: "Perfect Laboratory is fully accredited under the National Accreditation Board for Testing and Calibration Laboratories (NABL), maintaining gold-standard medical diagnostic precision.",
      answerHindi: "परफेक्ट लैबोरेट्री राष्ट्रीय परीक्षण और अंशांकन प्रयोगशाला प्रत्यायन बोर्ड (NABL) के तहत पूरी तरह से मान्यता प्राप्त है, जो स्वर्ण-मानक चिकित्सा परिशुद्धता बनाए रखती है।"
    }
  ] as FAQ[],
  seoLandings: [
    {
      slug: "blood-test-in-vapi",
      title: "Blood Test in Vapi",
      testId: "fitness-1",
      location: "Vapi",
      description: "Get the most reliable, accurate, and hygienic Blood Tests in Vapi at Perfect Laboratory. Safe sterile home sample collection by trained medical phlebotomists.",
      benefits: [
        "NABL Accredited results standard.",
        "Painless blood draw technology.",
        "Free doorstep sample collection across Vapi.",
        "Digital reports on WhatsApp in 6 Hours."
      ]
    },
    {
      slug: "thyroid-test-in-vapi",
      title: "Thyroid Test (T3, T4, TSH) in Vapi",
      testId: "wellness-1-1",
      location: "Vapi",
      description: "Suspecting fatigue or metabolic issues? Get a comprehensive NABL-accredited Thyroid profile test at your home in Vapi with Perfect Laboratory.",
      benefits: [
        "Highly precise hormonal assay instrumentation.",
        "Certified pathologist verification.",
        "Same-day evening report delivery.",
        "Painless venous draw."
      ]
    },
    {
      slug: "lipid-profile-in-vapi",
      title: "Lipid Profile Cholesterol Test in Vapi",
      testId: "wellness-1-2",
      location: "Vapi",
      description: "Assess your cardiac health and monitor cholesterol levels with Perfect Laboratory's gold-standard Lipid Profile home service in Vapi.",
      benefits: [
        "Detailed breakdown of HDL, LDL, VLDL, and Triglycerides.",
        "100% sterile barcoded sample containers.",
        "Easy early-morning fasting collection slots.",
        "Expert medical analysis."
      ]
    },
    {
      slug: "full-body-health-checkup-in-vapi",
      title: "Full Body Health Checkup in Vapi",
      testId: "fitness-4",
      location: "Vapi",
      description: "Secure peace of mind for you and your family. Book our Perfect Premium Full Body Checkup (100 crucial wellness markers) from your home in Vapi.",
      benefits: [
        "Covers Complete blood count, Liver, Kidney, Lipid, Thyroid, and sugar markers.",
        "Massive savings compared to individual testing.",
        "Complimentary digital reports and lifestyle advisory.",
        "Professional early-morning collection."
      ]
    }
  ] as SEOLanding[],
  gallery: [
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFj3ZbJg7cvwsV_3hY_L6dAuLD-WIXBcm9uRTM-hUmB6kk6UDELXS4Da87vcdaIf16M1aA8Cdt5IWGRNYHeTCzYphL5MlGQzlFsd8m4LsKx4oRZcXsV5hmUsH7qeMfuSLo6Qqg-hjHUlezc=s680-w680-h510-rw",
      title: "Automated Analytical Systems",
      titleHindi: "स्वचालित विश्लेषणात्मक प्रणालियां",
      desc: "High-throughput fully automated diagnostic pathways ensuring rapid, certified turnaround.",
      descHindi: "तेजी से और विश्वसनीय रिपोर्ट प्राप्त करने के लिए पूर्ण स्वचालित डायग्नोस्टिक प्रक्रियाएं।"
    }
  ]
};

const externalTestsRaw = testsJson.tests || [];
const externalTests: Test[] = externalTestsRaw.map((t: any, idx: number) => ({
  id: `ext-${idx}`,
  name: t["Test Name"] || "Unknown Test",
  nameHindi: t["Test Name"] || "Unknown Test",
  category: t["Category"] || "General",
  categoryHindi: t["Category"] || "General",
  price: Number(t["MRP"]) || 0,
  originalPrice: Math.round((Number(t["MRP"]) || 0) * 1.2),
  tat: "24 Hours",
  tatHindi: "24 घंटे",
  description: `Sample Collection: ${t["Sample Collection"] || "Standard"}`,
  descriptionHindi: `नमूना संग्रह: ${t["Sample Collection"] || "Standard"}`,
  preparations: ["As advised by your physician."],
  preparationsHindi: ["डॉक्टर की सलाह अनुसार।"]
}));

siteData.tests.push(...externalTests);

