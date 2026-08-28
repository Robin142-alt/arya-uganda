import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake, Sparkles, MapPin, Users, Award, ShieldCheck, Heart } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-arya-charcoal-950 via-arya-forest-950 to-arya-charcoal-950 text-white min-h-[88vh] flex items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#D99A32_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-arya-forest-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-arya-ochre/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        {/* Left Column: Headline & Narrative */}
        <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
          {/* Location / Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-arya-ochre-200">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-arya-ochre opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-arya-ochre"></span>
            </span>
            <MapPin className="w-3.5 h-3.5 text-arya-ochre" />
            <span className="font-semibold text-white tracking-wide">Kitgum • Northern Uganda</span>
            <span className="text-white/40">|</span>
            <span className="text-arya-charcoal-300">Established 2002</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.12] text-balance font-heading">
            Healthy. Educated. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-arya-ochre-300 via-amber-200 to-arya-ochre">
              Self-Reliant Communities.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-arya-charcoal-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
            Acholi Renaissance Youth Association works alongside grassroots communities in Northern Uganda to advance health equity, quality education, youth leadership, and resilient livelihoods for children, youth, and young women.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Button
              href="/programmes"
              variant="ochre"
              size="lg"
              className="w-full sm:w-auto shadow-lg shadow-amber-900/30"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Our Work
            </Button>
            <Button
              href="/get-involved"
              variant="white"
              size="lg"
              className="w-full sm:w-auto"
              icon={<HeartHandshake className="w-4 h-4 text-arya-forest" />}
            >
              Partner With ARYA
            </Button>
          </div>

          {/* Trust Highlights */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-heading">2002</p>
              <p className="text-xs text-arya-charcoal-300">Rooted in Kitgum</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-heading">HER Voice</p>
              <p className="text-xs text-arya-charcoal-300">Grantee Portfolio</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-white font-heading">Charter</p>
              <p className="text-xs text-arya-charcoal-300">For Change Signatory</p>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Photography Showcase */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Visual Container */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-arya-forest-800 to-arya-forest-600 border border-white/20 p-1.5 shadow-2xl group">
              <div className="aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-xl overflow-hidden relative bg-arya-charcoal-900 flex flex-col justify-end p-6 sm:p-7">
                {/* Authentic ARYA Photograph */}
                <Image
                  src="/images/hero/hero-community.webp"
                  alt="Authentic ARYA youth advocates in Kitgum in solidarity"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />

                {/* Controlled Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950 via-arya-charcoal-950/40 to-transparent z-10"></div>

                {/* Floating Highlight Information */}
                <div className="relative z-20 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-arya-ochre text-arya-charcoal-950 font-bold text-xs shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Community-Led Action</span>
                  </div>
                  <blockquote className="text-sm sm:text-base font-medium text-white italic leading-snug drop-shadow-sm">
                    &ldquo;Development succeeds when local youth, clan leaders, and women lead the dialogue and shape their own solutions.&rdquo;
                  </blockquote>
                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs text-arya-charcoal-200">
                    <span className="font-medium">Acholi Sub-Region • Kitgum</span>
                    <span className="text-arya-ochre-300 font-semibold">Participatory Action</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-card floating badge */}
            <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-white text-arya-charcoal-900 p-3.5 sm:p-4 rounded-xl shadow-xl border border-arya-charcoal-100 flex items-center gap-3 z-30 max-w-[280px] sm:max-w-xs">
              <div className="w-10 h-10 rounded-full bg-arya-forest-100 text-arya-forest flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-arya-charcoal-900 font-heading">Locally Governed</p>
                <p className="text-[11px] text-arya-charcoal-500">Accountable to communities & partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
