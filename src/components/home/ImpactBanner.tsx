import React from "react";
import Link from "next/link";
import Image from "next/image";
import { impactMetricsData, impactStoriesData } from "@/data/impact";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, ShieldCheck, Sparkles, BookOpen } from "lucide-react";

export default function ImpactBanner() {
  const storyImageMap: Record<string, string> = {
    "customary-land-rights-mediation-kitgum": "/images/community/arya-wa-11.webp",
    "retention-pathways-rural-schools": "/images/programmes/pupils-uniforms-education.webp",
    "agroforestry-youth-enterprise-acholi": "/images/programmes/rural-youth-peace-1.webp",
  };

  return (
    <section className="py-20 md:py-28 bg-arya-ivory border-b border-arya-charcoal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified & Transparent Progress"
          badgeVariant="forest"
          title="Impact in Action: Rooted in Accountability"
          subtitle="We present evidence-based results derived from our documented grant portfolios and community engagements in Northern Uganda."
          align="center"
          className="text-center mb-14"
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-16">
          {impactMetricsData.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-2xl p-5 border border-arya-charcoal-100/90 shadow-sm hover:shadow-md hover:border-arya-forest-300 transition-all flex flex-col justify-between text-center group"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-arya-forest font-heading group-hover:scale-105 transition-transform inline-block">
                  {metric.value}
                  {metric.suffix}
                </span>
                <p className="text-xs font-bold text-arya-charcoal-800 mt-1 line-clamp-2 leading-tight">
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
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
              className="text-xs sm:text-sm font-bold text-arya-forest hover:text-arya-forest-700 inline-flex items-center gap-1.5 shrink-0 group"
            >
              <span>Explore All Impact Narratives</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {impactStoriesData.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden border border-arya-charcoal-100/90 shadow-sm hover:shadow-xl hover:border-arya-forest-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Authentic Story Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-arya-charcoal-900">
                    <Image
                      src={storyImageMap[story.slug] || "/images/hero/hero-community.webp"}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-arya-forest text-white shadow-sm">
                        {story.category}
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 right-3 text-white/90 text-[11px] font-medium">
                      {story.location}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h4 className="text-base sm:text-lg font-bold text-arya-charcoal-900 font-heading leading-snug mb-2.5 group-hover:text-arya-forest transition-colors">
                      {story.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed line-clamp-3">
                      {story.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-0">
                  <div className="pt-3 border-t border-arya-charcoal-100 flex items-center justify-between">
                    <span className="text-[10px] text-arya-ochre-700 font-semibold">
                      Thematic Case Study
                    </span>
                    <Link
                      href={`/impact#${story.slug}`}
                      className="text-xs font-bold text-arya-forest hover:text-arya-forest-700 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read Narrative</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
