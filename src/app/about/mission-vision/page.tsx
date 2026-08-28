import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { organizationData } from "@/data/organization";
import {
  Eye,
  Target,
  Sparkles,
  CheckCircle2,
  Heart,
  Users,
  ShieldCheck,
  Award,
  Layers,
  ArrowRight,
  Compass,
  Smile,
  Zap,
} from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Vision, Mission & Core Values | ARYA Uganda",
  description:
    "Explore the official Vision, Mission, Core Values, Core Competencies, and Comparative Advantage of Acholi Renaissance Youth Association (ARYA) in Northern Uganda.",
};

export default function MissionVisionPage() {
  const competencies = [
    {
      title: "Quality Work & Control",
      desc: "Our competencies lie in the quality of work we offer and the disciplined control of resources for effective, measurable results.",
    },
    {
      title: "Partnership & Networking",
      desc: "We partner and network with the Government of Uganda at all levels and international development partners in the execution of our mandates.",
    },
    {
      title: "Reliability & Grassroots Presence",
      desc: "We are readily available to our beneficiaries and local communities whenever they need our support and solidarity.",
    },
    {
      title: "Decision Making & Adaptability",
      desc: "The organization makes decisions based on ground realities, adapting interventions to suit specific socio-economic and humanitarian environments.",
    },
    {
      title: "Relationship with Beneficiaries",
      desc: "We maintain articulate, transparent, and respectful relationships that are deeply understood and trusted by the communities we serve.",
    },
  ];

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Organizational Foundation"
        title="Vision, Mission & Values"
        subtitle="The foundational philosophy, institutional purpose, and guiding values that shape every ARYA intervention in the Acholi sub-region."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About ARYA", href: "/about" },
          { label: "Mission & Vision" },
        ]}
      />

      {/* Vision & Mission Core Statements */}
      <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-arya-forest-900 to-arya-charcoal-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-arya-forest-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-arya-ochre text-arya-charcoal-950 flex items-center justify-center shadow-lg">
                  <Eye className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-arya-ochre-300 uppercase tracking-widest">
                    Official Strategic Vision
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white mt-2 leading-tight">
                    Our Vision
                  </h2>
                </div>
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                    &ldquo;Improved socioeconomic status of households in Acholi sub-region.&rdquo;
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-arya-charcoal-200 leading-relaxed">
                  We envision a thriving Northern Uganda where families, youth, and children live with dignity, self-reliance, and equal opportunities for health, learning, and enterprise.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-arya-charcoal-900 to-arya-forest-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-arya-charcoal-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-arya-forest text-white flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-arya-ochre-300 uppercase tracking-widest">
                    Official Strategic Mission
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white mt-2 leading-tight">
                    Our Mission
                  </h2>
                </div>
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                    &ldquo;To work with government of Uganda, international organizations and other non-state actors for improved socioeconomic status of households in Acholi sub-region.&rdquo;
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-arya-charcoal-200 leading-relaxed">
                  Delivering sustainable, community-driven development through collaborative alliances, policy advocacy, local capacity building, and direct grassroots service delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundational Philosophy & Strategic Goal */}
      <section className="py-16 md:py-24 bg-arya-ivory border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-arya-charcoal-200 group">
                <Image
                  src="/images/about/staff-board-meeting.webp"
                  alt="ARYA leadership and community planning session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-arya-forest text-white">
                    Governance & Leadership
                  </span>
                  <p className="text-xs font-semibold text-white/90 mt-1">
                    Committed to transparent grassroots stewardship in Kitgum
                  </p>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Guiding Principle"
                badgeVariant="forest"
                title="Foundational Philosophy & Strategic Goal"
                subtitle="Social transformation rooted in human dignity, peace, and youth potential."
                className="mb-0"
              />

              <div className="space-y-4 text-base text-arya-charcoal-700 leading-relaxed">
                <p>
                  The framing of ARYA&apos;s work is based on our foundational philosophy that looks at social transformation and a society where every individual person can freely exploit their potential and live a dignified and fulfilling life.
                </p>
                <p>
                  It is about achieving a peaceful society in which communities work together to foster development, regardless of their social, economic, or political differences. The aspirations as reflected in ARYA&apos;s constitution, actualized by our vision and mission, guide all strategic thinking and field interventions.
                </p>
              </div>

              {/* Overall Strategic Goal Highlight */}
              <div className="p-6 rounded-2xl bg-white border border-arya-charcoal-100 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-arya-forest font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-arya-ochre" />
                  <span>Overall 5-Year Strategic Goal (2023–2027)</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-arya-charcoal-900 leading-relaxed">
                  To contribute to enhancing communities&apos; social and economic potentials to live decent lives and meaningfully contribute to personal and societal development, placing youth and young people at the center of all interventions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Ethics"
            badgeVariant="forest"
            title="Our 7 Core Values"
            subtitle="The fundamental ethical pillars that govern our operations, partnerships, and community relationships."
            align="center"
            className="text-center mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizationData.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-arya-ivory/50 rounded-2xl p-6 sm:p-7 border border-arya-charcoal-100 shadow-sm hover:shadow-md hover:border-arya-forest-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-arya-forest text-white flex items-center justify-center font-heading font-extrabold text-lg shadow-sm group-hover:bg-arya-ochre group-hover:text-arya-charcoal-950 transition-colors">
                    {val.letter}
                  </div>
                  <h3 className="text-lg font-bold text-arya-charcoal-900 font-heading">
                    {val.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Value Statement Card */}
            <div className="bg-gradient-to-br from-arya-forest-900 to-arya-charcoal-900 text-white rounded-2xl p-6 sm:p-7 border border-arya-forest-800 shadow-sm flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-arya-ochre-300">
                  Ethical Code
                </span>
                <h3 className="text-lg font-bold font-heading">
                  Living Our Values
                </h3>
                <p className="text-xs text-arya-charcoal-200 leading-relaxed">
                  These core values are embedded in our staff performance standards, field manuals, and safeguarding protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies & Comparative Advantage */}
      <section className="py-20 md:py-28 bg-arya-ivory border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Core Competencies */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Organizational Strengths"
                badgeVariant="forest"
                title="Our Core Competencies"
                subtitle="Demonstrated institutional capabilities that ensure effective delivery across all five strategic areas."
                className="mb-6"
              />

              <div className="space-y-4">
                {competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-arya-charcoal-100 shadow-sm space-y-1.5 hover:border-arya-forest-300 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-arya-forest shrink-0" />
                      <h3 className="text-base font-bold text-arya-charcoal-900 font-heading">
                        {comp.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-arya-charcoal-600 pl-6 leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Comparative Advantage */}
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                badge="Distinct Value"
                badgeVariant="ochre"
                title="Comparative Advantage"
                subtitle="What makes ARYA uniquely effective in the Acholi sub-region."
                className="mb-6"
              />

              <div className="space-y-6">
                {/* Chain-Link Strategy Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-arya-charcoal-100 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-arya-ochre-100 text-arya-ochre-800 flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-arya-charcoal-900 font-heading">
                    The &ldquo;Chain-Link Strategy&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed">
                    ARYA utilizes an innovative, cost-effective &ldquo;chain-link strategy&rdquo; that does not simply target an isolated individual. The strategy engages entire households, peer circles, and friends to ensure mutual accountability, knowledge multiplication, and sustainable community impact.
                  </p>
                </div>

                {/* Hospitality Card */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-arya-charcoal-100 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-arya-forest-50 text-arya-forest flex items-center justify-center">
                    <Smile className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-arya-charcoal-900 font-heading">
                    Hospitable Grassroots Culture
                  </h3>
                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed">
                    The administration maintains a welcoming, hospitable atmosphere for staff, community elders, refugee leaders, and beneficiaries alike. This trusted rapport makes ARYA a recognized community reference point across Kitgum and Lamwo.
                  </p>
                </div>

                {/* CTA to Strategic Plan */}
                <div className="pt-2">
                  <Link
                    href="/about/strategic-plan"
                    className="inline-flex items-center gap-2 text-sm font-bold text-arya-forest hover:text-arya-forest-700 group"
                  >
                    <span>Read the Full Strategic Plan (2023–2027)</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
