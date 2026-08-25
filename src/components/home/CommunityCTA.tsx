import React from "react";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Mail, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CommunityCTA() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-arya-forest-900 via-arya-forest to-arya-forest-800 text-white relative overflow-hidden">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D99A32_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-arya-ochre-200 border border-white/15 text-xs font-semibold">
            <span>Collaborate for Sustainable Impact</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-balance leading-tight">
            Strong communities begin with people having the opportunity to shape their own future.
          </h2>

          <p className="text-base sm:text-lg text-arya-forest-100 font-normal leading-relaxed max-w-2xl mx-auto">
            Whether you are a donor, international NGO, civil society partner, researcher, or local government stakeholder, join hands with ARYA to advance community-led transformation in Northern Uganda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href="/get-involved"
              variant="ochre"
              size="lg"
              className="w-full sm:w-auto shadow-xl"
              icon={<HeartHandshake className="w-4 h-4 text-arya-charcoal-900" />}
            >
              Partner With ARYA
            </Button>
            <Button
              href="/contact"
              variant="white"
              size="lg"
              className="w-full sm:w-auto"
              icon={<Mail className="w-4 h-4 text-arya-forest" />}
            >
              Contact Our Secretariat
            </Button>
          </div>

          <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-arya-forest-200">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-arya-ochre" />
              Plot 5, Awich Road / Bwona Gweno Road, Kitgum
            </span>
            <span>•</span>
            <span>Acholi Sub-Region, Northern Uganda</span>
            <span>•</span>
            <span>Est. 2002</span>
          </div>
        </div>
      </div>
    </section>
  );
}
