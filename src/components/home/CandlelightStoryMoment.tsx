import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, Users, ArrowRight, ShieldCheck, Flame } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CandlelightStoryMoment() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-arya-charcoal-950 via-arya-charcoal-900 to-arya-forest-950 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-arya-forest-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-arya-ochre/20 text-arya-ochre-300 border border-arya-ochre/30 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-arya-ochre" />
            <span>Community In Action</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-[1.12]">
            Spread Love &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-arya-ochre-300 via-amber-200 to-arya-ochre">
              Solidarity
            </span>
          </h2>

          <p className="text-base sm:text-lg text-arya-charcoal-200 leading-relaxed font-normal pt-1">
            Real people. Real leadership. Grassroots communities coming together in Northern Uganda to illuminate hope, overcome stigma, and stand together for collective well-being.
          </p>
        </div>

        {/* Dynamic Image Story Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Large Centerpiece Photo (Col 7) */}
          <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-arya-charcoal-900 border border-white/15 shadow-2xl min-h-[380px] sm:min-h-[460px] flex flex-col justify-end">
            <Image
              src="/images/story/candlelight-wide-banner.webp"
              alt="Community Candle Light Day Gathering under the Spread Love and Solidarity banner"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950 via-arya-charcoal-950/40 to-transparent"></div>

            {/* Overlay Caption */}
            <div className="relative z-10 p-6 sm:p-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-arya-ochre text-arya-charcoal-950 font-bold text-xs">
                <Users className="w-3.5 h-3.5" />
                <span>Candle Light Day • Kitgum</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug">
                &ldquo;To Build Strong Communities, We Spread Love & Solidarity.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-arya-charcoal-200 max-w-xl leading-relaxed">
                Over 8,000 community members, school clubs, faith leaders, and local champions participating in united awareness and rights dialogues.
              </p>
            </div>
          </div>

          {/* 2 Supporting Photos Stacked (Col 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Supporting Photo 1: Candle Lighting Ceremony */}
            <div className="group relative rounded-2xl overflow-hidden bg-arya-charcoal-900 border border-white/15 shadow-xl min-h-[220px] sm:min-h-[230px] flex flex-col justify-end">
              <Image
                src="/images/story/candle-lighting-ceremony.webp"
                alt="Community leaders and youth holding candles in solidarity"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950/90 via-arya-charcoal-950/30 to-transparent"></div>
              <div className="relative z-10 p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-arya-ochre-300 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/15">
                  Faith & Youth Solidarity
                </span>
                <p className="text-sm font-bold text-white mt-1.5 font-heading">
                  Lighting the flame of community care and remembrance
                </p>
              </div>
            </div>

            {/* Supporting Photo 2: Youth Ambassadors Portrait */}
            <div className="group relative rounded-2xl overflow-hidden bg-arya-charcoal-900 border border-white/15 shadow-xl min-h-[220px] sm:min-h-[230px] flex flex-col justify-end">
              <Image
                src="/images/story/youth-solidarity-portrait.webp"
                alt="Young women and student advocates in ARYA shirts"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950/90 via-arya-charcoal-950/30 to-transparent"></div>
              <div className="relative z-10 p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-arya-ochre-300 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/15">
                  Youth Leadership
                </span>
                <p className="text-sm font-bold text-white mt-1.5 font-heading">
                  School ambassadors & peer educators standing tall
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Context Note & Link */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-arya-charcoal-300 text-center sm:text-left">
          <p className="flex items-center gap-2 justify-center sm:justify-start">
            <ShieldCheck className="w-4 h-4 text-arya-ochre shrink-0" />
            <span>Authentic photographs from documented community mobilizations across the Acholi sub-region.</span>
          </p>
          <Link
            href="/impact"
            className="font-bold text-arya-ochre-300 hover:text-white inline-flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Explore Community Impact Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
