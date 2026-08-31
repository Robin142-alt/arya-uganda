import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  impactMetricsData,
  impactStoriesData,
  acholiDistrictsData,
  integratedPillarsData,
} from "@/data/impact";
import {
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MapPin,
  Landmark,
  Users,
  Compass,
  Layers,
  Award,
  BookOpen,
} from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Impact & Regional Footprint | ARYA Uganda",
  description:
    "Evidence-based impact data, regional reach across 8 districts of Acholi, 400 clan leaders, 24,000 AGYW, 30 CSOs, and 6 integrated pillars.",
};

export default function ImpactPage() {
  const storyImageMap: Record<string, string> = {
    "dorcus-palabek-poultry-vsla": "/images/community/arya-wa-02.webp",
    "acayo-barbra-her-voice": "/images/community/arya-wa-11.webp",
    "clan-dialogue-inheriting-hope": "/images/community/arya-wa-08.webp",
  };

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Evidence & Verification"
        title="Impact Grounded in Accountability"
        subtitle="Empowering communities across 8 districts of Northern Uganda with 400+ clan leaders, 24,000+ AGYW, 30+ CSOs, and 6 integrated strategic pillars."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Impact & Stories" }]}
      />

      {/* Ethical Storytelling & Data Provenance Statement */}
      <section className="py-8 bg-arya-forest-900 text-white border-b border-arya-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-arya-ochre text-arya-charcoal-950 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h2 className="text-base sm:text-lg font-bold text-white font-heading">
                  Our Ethical Storytelling & Data Integrity Standard
                </h2>
                <p className="text-xs sm:text-sm text-arya-forest-200 leading-relaxed max-w-4xl">
                  ARYA strictly rejects sensationalised charity marketing. We portray children, youth, clan elders, and women as dignified agents of change. All statistics reflect documented field telemetry, partnership MoUs, and community reports across Northern Uganda.
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

      {/* Verified Indicators Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Indicators"
            badgeVariant="forest"
            title="Documented Regional Footprint"
            subtitle="Verified facts and baseline indicators demonstrating ARYA's deep community reach across the Acholi sub-region."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {impactMetricsData.map((m) => (
              <div
                key={m.id}
                className="bg-arya-ivory rounded-2xl p-7 border border-arya-charcoal-100/90 shadow-sm hover:shadow-md hover:border-arya-forest-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-arya-forest/10 text-arya-forest-900 text-[11px] font-bold uppercase tracking-wider">
                      {m.category}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-arya-ochre" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-arya-forest font-heading block mt-2 group-hover:scale-105 transition-transform origin-left">
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

      {/* 08 Districts Geographic Coverage Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-arya-charcoal-950 via-arya-charcoal-900 to-arya-forest-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-arya-forest-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-arya-ochre/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-arya-ochre/20 text-arya-ochre-300 border border-arya-ochre/30 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Sub-Regional Reach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Active Across All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-arya-ochre-300 via-amber-200 to-arya-ochre">
                08 Districts of Acholi
              </span>
            </h2>
            <p className="text-sm sm:text-base text-arya-charcoal-200 leading-relaxed">
              From our operational secretariat in Kitgum, ARYA deploys community coordinators, CLVs, and youth advocates across every district in the sub-region.
            </p>
          </div>

          {/* 8 Districts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {acholiDistrictsData.map((d, index) => (
              <div
                key={d.name}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-arya-ochre/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-arya-ochre text-arya-charcoal-950 text-xs font-extrabold flex items-center justify-center">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-arya-ochre-300 bg-white/10 px-2 py-0.5 rounded">
                      Acholi
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-arya-ochre-300 transition-colors flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-arya-ochre shrink-0" />
                    <span>{d.name}</span>
                  </h3>

                  <p className="text-xs font-semibold text-arya-forest-300 mt-1">
                    {d.role}
                  </p>

                  <p className="text-xs text-arya-charcoal-300 leading-relaxed mt-2.5">
                    {d.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {d.focusAreas.map((f) => (
                      <span
                        key={f}
                        className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-medium text-arya-charcoal-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sub-region summary banner */}
          <div className="mt-12 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-arya-forest text-arya-ochre flex items-center justify-center shrink-0">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-heading">
                  Unified Sub-Regional Engagement
                </h4>
                <p className="text-xs sm:text-sm text-arya-charcoal-200">
                  Total geographic synchronization connecting 400+ traditional clan leaders (Ker Kwaro Acholi) and 30+ CSOs across Kitgum, Pader, Lamwo, Agago, Gulu, Omoro, Nwoya, and Amuru.
                </p>
              </div>
            </div>
            <Button
              href="/partners"
              variant="ochre"
              size="sm"
              className="shrink-0"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* 06 Integrated Strategic Pillars Breakdown */}
      <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Framework"
            badgeVariant="ochre"
            title="06 Integrated Strategic Pillars"
            subtitle="A cohesive ecosystem of community interventions designed to create enduring self-reliance."
            align="center"
            className="text-center mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {integratedPillarsData.map((p) => (
              <div
                key={p.id}
                className="bg-arya-ivory rounded-2xl p-7 border border-arya-charcoal-100 shadow-sm hover:shadow-lg hover:border-arya-forest-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-arya-forest-100 text-arya-forest flex items-center justify-center mb-4 group-hover:bg-arya-forest group-hover:text-white transition-colors">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-arya-charcoal-900 font-heading group-hover:text-arya-forest transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed mt-2.5">
                    {p.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-arya-charcoal-200/60">
                  <Link
                    href="/programmes"
                    className="text-xs font-bold text-arya-forest hover:text-arya-forest-700 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Explore Pillar Framework</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thematic Field Case Studies with Highest Quality Photos */}
      <section className="py-20 md:py-28 bg-arya-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Field Case Studies"
            badgeVariant="forest"
            title="Thematic Impact Narratives"
            subtitle="Deep-dive examinations of how community-led interventions create lasting transformation."
            align="center"
            className="text-center mb-16"
          />

          <div className="space-y-12">
            {impactStoriesData.map((story) => (
              <article
                key={story.id}
                id={story.slug}
                className="bg-white rounded-3xl overflow-hidden border border-arya-charcoal-100/90 shadow-sm hover:shadow-md transition-shadow scroll-mt-24"
              >
                {/* Authentic Narrative Header Image */}
                {storyImageMap[story.slug] && (
                  <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-arya-charcoal-900">
                    <Image
                      src={storyImageMap[story.slug]}
                      alt={story.title}
                      fill
                      quality={95}
                      priority
                      sizes="(max-width: 1024px) 100vw, 1280px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950/85 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-5 left-6 right-6 text-white flex flex-wrap items-end justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-arya-forest text-white shadow-sm">
                          {story.category}
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-white/95 mt-1.5 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-arya-ochre" />
                          <span>{story.location} • Verified Field Narrative</span>
                        </p>
                      </div>
                      <span className="text-xs text-arya-ochre-300 font-semibold bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                        {story.date}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-8 sm:p-10 md:p-12">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-arya-forest-100 text-arya-forest-800 text-xs font-bold uppercase tracking-wider">
                        {story.category}
                      </span>
                      <span className="text-xs text-arya-charcoal-400 font-medium">
                        {story.location}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-arya-ochre-700">
                      Theme: {story.theme}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-arya-charcoal-900 font-heading mb-4">
                    {story.title}
                  </h3>

                  <div className="p-4 rounded-xl bg-arya-forest-50/70 border border-arya-forest-100 mb-8">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

