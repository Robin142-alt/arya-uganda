import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    HeartPulse: <HeartPulse className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    GraduationCap: <GraduationCap className="w-5 h-5" />,
    Sprout: <Sprout className="w-5 h-5" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100" id="programmes-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <SectionHeading
            badge="Strategic Programme Areas"
            badgeVariant="forest"
            title="Integrated Pillars for Community Transformation"
            subtitle="Our documented programmatic architecture addresses the multi-dimensional challenges of health, education, rights, and economic self-reliance."
            className="mb-0"
          />
          <Link
            href="/programmes"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-arya-forest hover:text-arya-forest-700 transition-colors shrink-0 mb-2 group"
          >
            <span>View All Detailed Programmes</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 Grid Cards with Authentic Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programmesData.map((prog) => {
            const isOchre = prog.accentColor === "ochre";
            const isTerracotta = prog.accentColor === "terracotta";

            return (
              <div
                key={prog.id}
                className="group relative bg-arya-ivory/40 hover:bg-white rounded-2xl overflow-hidden border border-arya-charcoal-100/90 hover:border-arya-forest-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Authentic Photo Container */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-arya-charcoal-900">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950/80 via-transparent to-transparent"></div>

                    {/* Floating Pillar Icon Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md backdrop-blur-md ${
                          isOchre
                            ? "bg-arya-ochre text-arya-charcoal-950"
                            : isTerracotta
                            ? "bg-arya-terracotta text-white"
                            : "bg-arya-forest text-white"
                        }`}
                      >
                        {iconMap[prog.iconName] || <Sparkles className="w-5 h-5" />}
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-4 z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                        {prog.shortTitle}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7">
                    {/* Title & Tagline */}
                    <h3 className="text-xl font-bold text-arya-charcoal-900 font-heading mb-1.5 group-hover:text-arya-forest transition-colors leading-snug">
                      {prog.title}
                    </h3>
                    <p className="text-xs font-semibold text-arya-ochre-700 mb-3 line-clamp-1">
                      {prog.heroTagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed line-clamp-3">
                      {prog.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-6 sm:px-7 pb-6 pt-2">
                  <div className="pt-3 border-t border-arya-charcoal-100 flex items-center justify-between">
                    <Link
                      href={`/programmes#${prog.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-arya-forest group-hover:text-arya-forest-700 transition-colors"
                    >
                      <span>Explore Pillar Strategy</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-sm font-bold text-arya-forest bg-arya-forest-50 px-5 py-3.5 rounded-xl w-full justify-center border border-arya-forest-200"
          >
            <span>Explore All 6 Detailed Pillars</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
