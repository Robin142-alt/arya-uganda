import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { impactMetricsData, impactStoriesData } from "@/data/impact";
import {
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  HelpCircle,
  FileCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Impact & Community Stories | ARYA Uganda",
  description:
    "Evidence-based impact data, dialogue outcomes, and ethical community stories from ARYA's grassroots programmes in Kitgum and Northern Uganda.",
};

export default function ImpactPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Evidence & Verification"
        title="Impact Grounded in Accountability"
        subtitle="We measure our progress through meaningful community participation, local ownership, and transparent data."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Impact & Stories" }]}
      />

      {/* Ethical Storytelling & Data Provenance Statement */}
      <section className="py-10 bg-arya-forest-900 text-white border-b border-arya-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-arya-ochre text-arya-charcoal-950 flex items-center justify-center shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-white font-heading">
                  Our Ethical Storytelling & Data Integrity Standard
                </h2>
                <p className="text-xs sm:text-sm text-arya-forest-200 leading-relaxed max-w-3xl">
                  ARYA strictly rejects sensationalised &ldquo;pity-based&rdquo; charity marketing. We portray children, youth, and women as dignified agents of change. All statistics reflect documented project reports and baseline evaluations.
                </p>
              </div>
            </div>
            <Link
              href="/resources"
              className="text-xs font-bold text-arya-ochre-300 hover:text-white shrink-0 underline underline-offset-4"
            >
              View Documented Reports →
            </Link>
          </div>
        </div>
      </section>

      {/* Verified Metrics Section */}
      <section className="py-16 md:py-24 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Indicators"
            badgeVariant="forest"
            title="Documented Programme Footprint"
            subtitle="Clear, verified facts derived from our active grant portfolios and long-standing presence in Kitgum."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {impactMetricsData.map((m) => (
              <div
                key={m.id}
                className="bg-arya-ivory rounded-2xl p-7 border border-arya-charcoal-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-arya-forest font-heading">
                    {m.value}
                    {m.suffix}
                  </span>
                  <h3 className="text-base font-bold text-arya-charcoal-900 font-heading mt-2">
                    {m.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed mt-2">
                    {m.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-arya-charcoal-200/60 flex items-center justify-between text-[11px] text-arya-charcoal-500">
                  <span className="font-semibold text-arya-forest">Data Source:</span>
                  <span className="truncate max-w-[200px]" title={m.sourceNote}>
                    {m.sourceNote}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thematic Impact Stories */}
      <section className="py-20 md:py-28 bg-arya-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Field Case Studies"
            badgeVariant="ochre"
            title="Thematic Impact Narratives"
            subtitle="Deep-dive examinations of how community-led interventions create lasting transformation."
            align="center"
            className="text-center"
          />

          <div className="space-y-12">
            {impactStoriesData.map((story) => (
              <article
                key={story.id}
                id={story.slug}
                className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 border border-arya-charcoal-100 shadow-sm scroll-mt-24"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-arya-forest-100 text-arya-forest-800 text-xs font-bold uppercase tracking-wider">
                      {story.category}
                    </span>
                    <span className="text-xs text-arya-charcoal-400 font-medium">
                      {story.location} • {story.date}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-arya-ochre-700">
                    Theme: {story.theme}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-arya-charcoal-900 font-heading mb-4">
                  {story.title}
                </h3>

                <div className="p-4 rounded-xl bg-arya-forest-50/60 border border-arya-forest-100 mb-8">
                  <p className="text-sm font-semibold text-arya-forest-900 italic leading-relaxed">
                    &ldquo;{story.excerpt}&rdquo;
                  </p>
                </div>

                {/* Narrative Paragraphs */}
                <div className="space-y-4 text-sm sm:text-base text-arya-charcoal-700 leading-relaxed max-w-4xl">
                  {story.storyNarrative.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {/* Ethical Note at story footer */}
                <div className="mt-8 pt-6 border-t border-arya-charcoal-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-arya-charcoal-500">
                  <p className="italic">{story.ethicalNote}</p>
                  <Link
                    href="/get-involved"
                    className="font-bold text-arya-forest hover:text-arya-forest-700 shrink-0"
                  >
                    Support Similar Actions →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
