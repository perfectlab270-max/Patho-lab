"use client";

import React, { useState, useEffect } from "react";

export default function ObfuscatedEmail() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Dynamic assembly at runtime client-side to prevent simple scraper harvesting
    const parts = ["perfectlab270", "gmail.com"];
    setEmail(parts.join("@"));
  }, []);

  if (!email) {
    return <span className="opacity-50">perfectlab...</span>;
  }

  return (
    <a 
      href={`mailto:${email}`} 
      className="text-slate-400 hover:text-emerald-400 font-medium transition-colors duration-200"
    >
      {email}
    </a>
  );
}
