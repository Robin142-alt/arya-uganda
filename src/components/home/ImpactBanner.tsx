import React from "react";
import Link from "next/link";
import { impactMetricsData, impactStoriesData } from "@/data/impact";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, ShieldAlert, Sparkles, BookOpen } from "lucide-react";

export default function ImpactBanner() {
  return (
    <section className="py-20 md:py-28 bg-arya-ivory border-b border-arya-charcoal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified & Transparent Progress"
          badgeVariant="forest"
          title="Impact in Action: Rooted in Accountability"
          subtitle="We present evidence-based results derived from our documented grant portfolios and community engagements in Northern Uganda."
          align="center"
          className="text-center"
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-16">
          {impactMetricsData.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-xl p-5 border border-arya-charcoal-100 shadow-sm flex flex-col justify-between text-center"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-arya-forest font-heading">
                  {metric.value}
                  {metric.suffix}
                </span>
                <p className="text-xs font-bold text-arya-charcoal-800 mt-1 line-clamp-2">
                  {metric.label}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-arya-charcoal-50">
                <p className="text-[10px] text-arya-charcoal-500 line-clamp-2" title={metric.sourceNote}>
                  {metric.sourceNote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Human Story Cards Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-arya-charcoal-900 font-heading">
                Stories of Dignity & Collective Action
              </h3>
              <p className="text-xs sm:text-sm text-arya-charcoal-600 mt-1">
                Reflecting community-led change from our key focus areas in the Acholi sub-region.
              </p>
            </div>
            <Link
              href="/impact"
              className="mt-3 sm:mt-0 text-xs sm:text-sm font-bold text-arya-forest hover:text-arya-forest-700 inline-flex items-center gap-1 shrink-0"
            >
              <span>Explore All Impact Narratives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {impactStoriesData.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden border border-arya-charcoal-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-arya-forest-50 text-arya-forest border border-arya-forest-200">
                      {story.category}
                    </span>
                    <span className="text-[11px] text-arya-charcoal-400 font-medium">
                      {story.location}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-arya-charcoal-900 font-heading leading-snug mb-3">
                    {story.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed mb-4">
                    {story.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-arya-charcoal-100 flex items-center justify-between">
                  <span className="text-[10px] text-arya-ochre-700 font-semibold">
                    Thematic Case Study
                  </span>
                  <Link
                    href={`/impact#${story.slug}`}
                    className="text-xs font-bold text-arya-forest hover:text-arya-forest-700 inline-flex items-center gap-1"
                  >
                    <span>Read Narrative</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
