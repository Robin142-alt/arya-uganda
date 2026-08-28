import React from "react";
import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import ProgrammeGrid from "@/components/home/ProgrammeGrid";
import CandlelightStoryMoment from "@/components/home/CandlelightStoryMoment";
import HerVoiceFeature from "@/components/home/HerVoiceFeature";
import ImpactBanner from "@/components/home/ImpactBanner";
import CommunityGallery from "@/components/home/CommunityGallery";
import NewsPreview from "@/components/home/NewsPreview";
import CommunityVoices from "@/components/home/CommunityVoices";
import CommunityCTA from "@/components/home/CommunityCTA";
import Link from "next/link";
import { currentNetworksData } from "@/data/partners";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Authentic ARYA Photography */}
      <Hero />

      {/* Editorial Who We Are Section */}
      <WhoWeAre />

      {/* 6 Strategic Programme Pillars with Authentic Imagery */}
      <ProgrammeGrid />

      {/* Image-Led Story Moment: Spread Love & Solidarity */}
      <CandlelightStoryMoment />

      {/* Her Voice / AGYW Flagship Feature */}
      <HerVoiceFeature />

      {/* Impact in Action (Transparent Metrics + Verified Stories) */}
      <ImpactBanner />

      {/* Modern Authentic Community Gallery & Lightbox */}
      <CommunityGallery />

      {/* Strategic Partners & Networks Marquee / Strip */}
      <section className="py-12 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-[11px] font-bold text-arya-forest uppercase tracking-wider flex items-center justify-center md:justify-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Working In Networked Solidarity
              </span>
              <h3 className="text-lg font-bold text-arya-charcoal-900 font-heading">
                Associated Networks & Partnerships
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {currentNetworksData.map((network) => (
                <div
                  key={network.id}
                  className="px-4 py-2.5 rounded-xl bg-arya-ivory border border-arya-charcoal-100 text-xs font-semibold text-arya-charcoal-800 hover:border-arya-forest-300 hover:bg-white transition-colors shadow-sm"
                >
                  {network.name}
                </div>
              ))}
            </div>

            <Link
              href="/partners"
              className="text-xs font-bold text-arya-forest hover:text-arya-forest-700 shrink-0 inline-flex items-center gap-1 group"
            >
              <span>Explore All Alliances</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <NewsPreview />

      {/* Community Voices */}
      <CommunityVoices />

      {/* Pre-Footer Action Banner */}
      <CommunityCTA />
    </div>
  );
}
