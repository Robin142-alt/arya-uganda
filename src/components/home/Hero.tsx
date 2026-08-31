"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  Sparkles,
  MapPin,
  ShieldCheck,
  ChevronRight,
  Flame,
  Users,
} from "lucide-react";
import Button from "@/components/ui/Button";

const heroSlides = [
  {
    id: "hero-1",
    image: "/images/hero/hero-community.webp",
    alt: "Authentic ARYA youth advocates in Kitgum in solidarity",
    badge: "Community-Led Action",
    icon: Sparkles,
    quote: "Development succeeds when local youth, clan leaders, and women lead the dialogue and shape their own solutions.",
    location: "Acholi Sub-Region • Kitgum",
    tag: "Participatory Action",
  },
  {
    id: "hero-2",
    image: "/images/story/candlelight-wide-banner.webp",
    alt: "Candle Light Day Solidarity Campaign in Kitgum",
    badge: "Solidarity & Health Equity",
    icon: Flame,
    quote: "Over 8,000 community members standing together to conquer health stigma and foster compassion.",
    location: "Kitgum Municipality",
    tag: "8,000+ Mobilised",
  },
  {
    id: "hero-3",
    image: "/images/about/about-community-dialogue.webp",
    alt: "Grassroots community dialogue and governance baraza in Northern Uganda",
    badge: "Grassroots Governance",
    icon: Users,
    quote: "Decentralized community barazas ensuring rural families directly co-design health and learning priorities.",
    location: "Kitgum & Lamwo",
    tag: "Local Ownership",
  },
];

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeSlide = heroSlides[currentSlideIndex];
  const IconComponent = activeSlide.icon;

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
              href="#intelligent-story-slideshow"
              variant="white"
              size="lg"
              className="w-full sm:w-auto"
              icon={<Sparkles className="w-4 h-4 text-arya-forest" />}
            >
              View Field Stories
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

        {/* Right Column: Intelligent Mini-Slideshow Showcase */}
        <div className="lg:col-span-5">
          <div
            className="relative mx-auto max-w-md lg:max-w-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Visual Container */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-arya-forest-800 to-arya-forest-600 border border-white/20 p-1.5 shadow-2xl group">
              <div className="aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-xl overflow-hidden relative bg-arya-charcoal-900 flex flex-col justify-end p-6 sm:p-7">
                {/* Crossfading Hero Photo */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      fill
                      unoptimized={true}
                      priority
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Controlled Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950 via-arya-charcoal-950/40 to-transparent z-10 pointer-events-none"></div>

                {/* Floating Highlight Information */}
                <div className="relative z-20 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-arya-ochre text-arya-charcoal-950 font-bold text-xs shadow-md">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{activeSlide.badge}</span>
                    </div>

                    {/* Mini Indicator Dots */}
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                      {heroSlides.map((s, idx) => (
                        <button
                          key={s.id}
                          onClick={() => setCurrentSlideIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentSlideIndex
                              ? "w-5 bg-arya-ochre"
                              : "w-1.5 bg-white/40 hover:bg-white/70"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-sm sm:text-base font-medium text-white italic leading-snug drop-shadow-sm min-h-[48px]">
                    &ldquo;{activeSlide.quote}&rdquo;
                  </blockquote>

                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs text-arya-charcoal-200">
                    <span className="font-medium">{activeSlide.location}</span>
                    <span className="text-arya-ochre-300 font-semibold">{activeSlide.tag}</span>
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
