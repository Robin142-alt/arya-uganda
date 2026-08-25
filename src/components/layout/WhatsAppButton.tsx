"use client";

import React, { useState } from "react";
import { contactConfig } from "@/data/contact";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  if (!contactConfig.whatsApp.enabled) return null;

  const encodedMessage = encodeURIComponent(contactConfig.whatsApp.message);
  const whatsappUrl = `https://wa.me/${contactConfig.whatsApp.number}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-arya-forest-100 p-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-arya-charcoal-100">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-bold text-arya-charcoal-900">ARYA Kitgum Secretariat</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-arya-charcoal-400 hover:text-arya-charcoal-700 p-1"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-arya-charcoal-600 my-3 leading-relaxed">
            Have questions about our youth, health, or women&apos;s empowerment programmes? Connect with our team directly on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Start Chat on WhatsApp
          </a>
          <span className="block text-[10px] text-center text-arya-charcoal-400 mt-2">
            Official line: {contactConfig.whatsApp.displayNumber}
          </span>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Chat with ARYA on WhatsApp"
        aria-expanded={isOpen}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="text-xs font-bold hidden sm:inline">Chat with ARYA</span>
      </button>
    </div>
  );
}
