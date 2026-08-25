import React from "react";
import Link from "next/link";
import { programmesData } from "@/data/programmes";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  HeartPulse,
  Sparkles,
  GraduationCap,
  Sprout,
  ShieldAlert,
  Users,
  ArrowRight,
} from "lucide-react";

export default function ProgrammeGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    HeartPulse: <HeartPulse className="w-6 h-6" />,
    Sparkles: <Sparkles className="w-6 h-6" />,
    GraduationCap: <GraduationCap className="w-6 h-6" />,
    Sprout: <Sprout className="w-6 h-6" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
  };

  return (
    <section className="py-20 md:py-28 bg-white" id="programmes-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="Strategic Programme Areas"
            badgeVariant="forest"
            title="Integrated Pillars for Community Transformation"
            subtitle="Our documented programmatic architecture addresses the multi-dimensional challenges of health, education, rights, and economic self-reliance."
            className="mb-0"
          />
          <Link
            href="/programmes"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-arya-forest hover:text-arya-forest-700 transition-colors shrink-0 mb-2"
          >
            <span>View All Detailed Programmes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programmesData.map((prog) => {
            const isOchre = prog.accentColor === "ochre";
            const isTerracotta = prog.accentColor === "terracotta";

            return (
              <div
                key={prog.id}
                className="group relative bg-arya-ivory/50 hover:bg-white rounded-2xl p-7 sm:p-8 border border-arya-charcoal-100 hover:border-arya-forest-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isOchre
                          ? "bg-arya-ochre-100 text-arya-ochre-700 group-hover:bg-arya-ochre group-hover:text-white"
                          : isTerracotta
                          ? "bg-red-50 text-arya-terracotta group-hover:bg-arya-terracotta group-hover:text-white"
                          : "bg-arya-forest-100 text-arya-forest group-hover:bg-arya-forest group-hover:text-white"
                      }`}
                    >
                      {iconMap[prog.iconName] || <Sparkles className="w-6 h-6" />}
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-arya-charcoal-400">
                      Pillar
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-arya-charcoal-900 font-heading mb-2 group-hover:text-arya-forest transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs font-semibold text-arya-ochre-700 mb-3">
                    {prog.heroTagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-arya-charcoal-600 leading-relaxed line-clamp-3 mb-6">
                    {prog.summary}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="pt-4 border-t border-arya-charcoal-100 flex items-center justify-between">
                  <Link
                    href={`/programmes#${prog.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-arya-forest group-hover:text-arya-forest-700 transition-colors"
                  >
                    <span>Explore Pillar Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-sm font-bold text-arya-forest bg-arya-forest-50 px-5 py-3 rounded-lg w-full justify-center"
          >
            <span>Explore All 6 Detailed Pillars</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
