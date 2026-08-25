import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { programmesData } from "@/data/programmes";
import {
  HeartPulse,
  Sparkles,
  GraduationCap,
  Sprout,
  ShieldAlert,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  Layers,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Programmes & Strategic Pillars | ARYA Uganda",
  description:
    "Explore ARYA's 6 core programme areas across Health & SRHR, Girls & Young Women (HER Voice), Education, Livelihoods, Child Protection, and Community Resilience in Northern Uganda.",
};

export default function ProgrammesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    HeartPulse: <HeartPulse className="w-7 h-7" />,
    Sparkles: <Sparkles className="w-7 h-7" />,
    GraduationCap: <GraduationCap className="w-7 h-7" />,
    Sprout: <Sprout className="w-7 h-7" />,
    ShieldAlert: <ShieldAlert className="w-7 h-7" />,
    Users: <Users className="w-7 h-7" />,
  };

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Strategic Architecture"
        title="Our Strategic Programmes"
        subtitle="Holistic, participatory, and community-led solutions tailored to the lived realities of children, youth, and young women in Northern Uganda."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Work", href: "/programmes" }, { label: "Programmes" }]}
      />

      {/* Sticky Quick-Nav Strip */}
      <nav className="sticky top-[60px] md:top-[70px] z-30 bg-white/95 backdrop-blur-md border-b border-arya-charcoal-100 py-3 px-4 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 min-w-max">
          <span className="text-xs font-bold text-arya-charcoal-400 uppercase tracking-wider pr-2">
            Jump to Pillar:
          </span>
          {programmesData.map((p) => (
            <a
              key={p.id}
              href={`#${p.slug}`}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-arya-ivory hover:bg-arya-forest-50 text-arya-charcoal-700 hover:text-arya-forest transition-colors whitespace-nowrap border border-arya-charcoal-100"
            >
              {p.shortTitle}
            </a>
          ))}
        </div>
      </nav>

      {/* Deep-Dive Programme Sections */}
      <div className="divide-y divide-arya-charcoal-100">
        {programmesData.map((prog, idx) => {
          const isEven = idx % 2 === 0;
          const isOchre = prog.accentColor === "ochre";
          const isTerracotta = prog.accentColor === "terracotta";

          return (
            <section
              key={prog.id}
              id={prog.slug}
              className={`py-20 md:py-28 scroll-mt-24 ${
                isEven ? "bg-white" : "bg-arya-ivory"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Badge & Title */}
                <div className="max-w-3xl mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isOchre
                          ? "bg-arya-ochre-100 text-arya-ochre-800"
                          : isTerracotta
                          ? "bg-red-50 text-arya-terracotta"
                          : "bg-arya-forest-100 text-arya-forest"
                      }`}
                    >
                      {iconMap[prog.iconName] || <Sparkles className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-arya-ochre-700">
                        Strategic Pillar 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-arya-charcoal-900 font-heading">
                        {prog.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-arya-forest-700 font-semibold mb-3">
                    {prog.heroTagline}
                  </p>
                  <p className="text-sm sm:text-base text-arya-charcoal-700 leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                {/* Grid of Pillar Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left: Key Focus Areas & Methodologies */}
                  <div className="lg:col-span-7 space-y-8">
                    {/* Focus Areas Card */}
                    <div className="bg-white rounded-2xl p-7 border border-arya-charcoal-100 shadow-sm space-y-4">
                      <h3 className="text-base sm:text-lg font-bold text-arya-charcoal-900 font-heading flex items-center gap-2">
                        <Layers className="w-5 h-5 text-arya-forest" />
                        Core Intervention Areas
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {prog.keyAreas.map((area, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-arya-charcoal-700">
                            <CheckCircle2 className="w-4 h-4 text-arya-forest shrink-0 mt-0.5" />
                            <span>{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sample Field Activities */}
                    <div className="bg-white rounded-2xl p-7 border border-arya-charcoal-100 shadow-sm space-y-4">
                      <h3 className="text-base sm:text-lg font-bold text-arya-charcoal-900 font-heading flex items-center gap-2">
                        <Target className="w-5 h-5 text-arya-ochre-600" />
                        Documented Activities & Approaches
                      </h3>
                      <ul className="space-y-3 text-xs sm:text-sm text-arya-charcoal-700">
                        {prog.sampleActivities.map((act, actIdx) => (
                          <li key={actIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-arya-ochre shrink-0 mt-2"></span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Target Groups & Featured Highlight Box */}
                  <div className="lg:col-span-5 space-y-6">
                    {/* Highlight Box */}
                    {prog.featuredHighlight && (
                      <div className="bg-gradient-to-br from-arya-charcoal-900 to-arya-forest-950 text-white rounded-2xl p-7 border border-arya-charcoal-800 shadow-xl space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 rounded-md bg-arya-ochre text-arya-charcoal-950 text-xs font-bold">
                            {prog.featuredHighlight.badge}
                          </span>
                          <span className="text-xs text-arya-charcoal-300">Acholi Sub-Region</span>
                        </div>

                        <h4 className="text-lg font-bold text-white font-heading">
                          {prog.featuredHighlight.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-arya-charcoal-200 leading-relaxed">
                          {prog.featuredHighlight.summary}
                        </p>

                        {prog.featuredHighlight.stats && (
                          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                            {prog.featuredHighlight.stats.map((st, sIdx) => (
                              <div key={sIdx} className="bg-white/5 p-3 rounded-lg border border-white/10">
                                <p className="text-base font-bold text-arya-ochre-300 font-heading">
                                  {st.value}
                                </p>
                                <p className="text-[11px] text-white font-medium">{st.label}</p>
                                {st.note && (
                                  <p className="text-[9px] text-arya-charcoal-400 mt-0.5">{st.note}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Target Populations */}
                    <div className="bg-white rounded-2xl p-6 border border-arya-charcoal-100 shadow-sm space-y-3">
                      <h4 className="text-xs font-bold text-arya-charcoal-400 uppercase tracking-wider">
                        Target Populations
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {prog.targetGroups.map((tg, tgIdx) => (
                          <span
                            key={tgIdx}
                            className="text-xs px-3 py-1.5 rounded-lg bg-arya-ivory text-arya-charcoal-800 border border-arya-charcoal-200 font-medium"
                          >
                            {tg}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Programme CTA */}
                    <div className="p-4 rounded-xl bg-arya-forest-50 border border-arya-forest-100 flex items-center justify-between">
                      <div className="text-xs text-arya-forest-900 font-medium">
                        Interested in co-funding or partnering on this pillar?
                      </div>
                      <Link
                        href="/get-involved"
                        className="text-xs font-bold text-arya-forest hover:text-arya-forest-700 shrink-0 ml-3 underline"
                      >
                        Partner →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Cross-Cutting Framework Note */}
      <section className="py-16 bg-white border-t border-arya-charcoal-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-arya-charcoal-900 font-heading">
            Integrated Cross-Cutting Commitments
          </h3>
          <p className="text-xs sm:text-sm text-arya-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            All ARYA programmes embed gender equality, child safeguarding, environmental stewardship (ENR-CSO alignment), and accountability to affected populations (Charter for Change).
          </p>
          <div className="pt-2">
            <Button href="/projects" variant="primary" size="md">
              View Active & Completed Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
