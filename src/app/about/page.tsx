import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { organizationData } from "@/data/organization";
import {
  Heart,
  Eye,
  Compass,
  CheckCircle2,
  ShieldCheck,
  Award,
  Users,
  Target,
  ArrowRight,
  Landmark,
  Layers,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About ARYA | Acholi Renaissance Youth Association",
  description:
    "Learn about ARYA's history since 2002, vision, mission, core values, and community-led development approach in Kitgum and Northern Uganda.",
};

export default function AboutPage() {
  const steps = [
    {
      number: "01",
      title: "LISTEN",
      desc: "Engaging directly with community members, youth circles, clan elders, and women to understand local priorities and lived realities.",
    },
    {
      number: "02",
      title: "MOBILISE",
      desc: "Organising community structures, peer networks, and youth collectives around shared civic and health objectives.",
    },
    {
      number: "03",
      title: "BUILD CAPACITY",
      desc: "Providing skills, rights literacy, life coaching, and practical agronomy/enterprise tools to foster local autonomy.",
    },
    {
      number: "04",
      title: "CONNECT",
      desc: "Bridging community beneficiaries with formal health facilities, schools, markets, and local government duty bearers.",
    },
    {
      number: "05",
      title: "ADVOCATE",
      desc: "Supporting young women and youth delegates to present evidence-informed recommendations in district and national policy spaces.",
    },
    {
      number: "06",
      title: "SUSTAIN",
      desc: "Embedding accountability within village committees and community-based systems for multi-generational impact.",
    },
  ];

  const milestones = [
    {
      year: "2002",
      title: "Origins of Acholi Renaissance Youth Association",
      desc: "Founded in Kitgum by visionary youth to address severe social disruption, health crises, and the breakdown of basic education in Internally Displaced People's (IDP) camps during the Northern Uganda conflict.",
      status: "Documented Foundation",
    },
    {
      year: "2003–2004",
      title: "Formal Registration & CBO Status",
      desc: "Legally registered as a Community Based Organisation with the Kitgum District Local Government and incorporated as a non-profit company limited by guarantee, establishing institutional governance.",
      status: "Governance Milestone",
    },
    {
      year: "2000s – 2010s",
      title: "Post-Conflict Recovery & Health Outreaches",
      desc: "Spearheaded community health outreaches, HIV/AIDS peer education, child-friendly spaces, and psycho-social peacebuilding galas across returning settlement sub-counties.",
      status: "Humanitarian Transition",
    },
    {
      year: "2015 – 2020",
      title: "Expanding Sectoral Networks & Localisation",
      desc: "Joined national coalitions including the Environment and Natural Resources CSO Network (ENR-CSO), Kitgum NGO Forum, and endorsed the Charter for Change to promote locally-led humanitarian response.",
      status: "Network Integration",
    },
    {
      year: "Recent Years",
      title: "HER Voice Fund & Adolescent Leadership",
      desc: "Selected as a grantee partner under the HER Voice Fund (managed by Y+ Global), expanding direct advocacy on adolescent girls and young women's (AGYW) sexual reproductive rights and property inheritance.",
      status: "Flagship Portfolio",
    },
    {
      year: "Today & Beyond",
      title: "Healthy. Educated. Self-Reliant Communities.",
      desc: "Continuing to serve as a trustworthy grassroots institution driving multi-stakeholder transformation, youth self-reliance, and sustainable development across the Acholi sub-region.",
      status: "Active Horizon",
    },
  ];

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Institutional Profile"
        title="Rooted in the Community. Committed to Self-Reliance."
        subtitle="Since 2002, Acholi Renaissance Youth Association has worked alongside the people of Northern Uganda to transition from post-conflict vulnerability to dignity, health, and economic independence."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About ARYA" }]}
      />

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                badge="Our Origins"
                badgeVariant="forest"
                title="Born From Community Need. Built for Long-Term Transformation."
                subtitle="The story of ARYA begins with local youth taking responsibility for their region's recovery and dignity."
                className="mb-6"
              />

              <div className="space-y-4 text-base text-arya-charcoal-700 leading-relaxed">
                <p>
                  In 2002, during the height of the humanitarian crisis in Northern Uganda, youth leaders in Kitgum came together to establish the <strong>Acholi Renaissance Youth Association (ARYA)</strong>. Witnessing the collapse of rural schooling, rising HIV prevalence, and the psychological toll of prolonged displacement in IDP camps, they resolved to create an indigenous platform focused on youth self-worth and civic recovery.
                </p>
                <p>
                  Over two decades later, ARYA has evolved into a reputable, registered non-governmental organisation rooted in Kitgum Municipality and active across the Acholi sub-region, including Kitgum and Lamwo districts.
                </p>
                <p>
                  Our work is underpinned by an unwavering belief in <strong>community-led development</strong>. We do not view community members as passive recipients of external charity, but as rightful agents, decision-makers, and leaders of their own transformation.
                </p>
              </div>

              <div className="pt-2">
                <div className="p-4 rounded-xl bg-arya-forest-50 border border-arya-forest-200 flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-arya-forest shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-arya-forest-900 leading-relaxed">
                    <strong>Institutional Integrity:</strong> ARYA is registered with the Uganda NGO Bureau, incorporated as a company limited by guarantee, and operates under formal partnership agreements with the Kitgum District Local Government.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Box */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-arya-ivory p-6 rounded-2xl border border-arya-charcoal-100 space-y-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-arya-forest font-heading">
                    2002
                  </span>
                  <h4 className="text-base font-bold text-arya-charcoal-900 font-heading">
                    Foundational Heritage
                  </h4>
                  <p className="text-xs text-arya-charcoal-600 leading-relaxed">
                    Established during post-conflict reconstruction with deep roots in Kitgum.
                  </p>
                </div>

                <div className="bg-arya-ivory p-6 rounded-2xl border border-arya-charcoal-100 space-y-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-arya-ochre font-heading">
                    Kitgum & Lamwo
                  </span>
                  <h4 className="text-base font-bold text-arya-charcoal-900 font-heading">
                    Geographic Reach
                  </h4>
                  <p className="text-xs text-arya-charcoal-600 leading-relaxed">
                    Centrally based on Awich / Bwona Gweno Road opposite District Council Hall.
                  </p>
                </div>

                <div className="bg-arya-ivory p-6 rounded-2xl border border-arya-charcoal-100 space-y-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-arya-forest font-heading">
                    HER Voice
                  </span>
                  <h4 className="text-base font-bold text-arya-charcoal-900 font-heading">
                    Grantee Portfolio
                  </h4>
                  <p className="text-xs text-arya-charcoal-600 leading-relaxed">
                    Partnering under the Y+ Global initiative to empower adolescent girls & young women.
                  </p>
                </div>

                <div className="bg-arya-ivory p-6 rounded-2xl border border-arya-charcoal-100 space-y-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-arya-terracotta font-heading">
                    C4C Signatory
                  </span>
                  <h4 className="text-base font-bold text-arya-charcoal-900 font-heading">
                    Accountability
                  </h4>
                  <p className="text-xs text-arya-charcoal-600 leading-relaxed">
                    Signatory to the Charter of Accountability promoting locally-led aid delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Banner */}
      <section className="py-20 bg-arya-charcoal-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-arya-ochre text-arya-charcoal-950 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-arya-ochre-300">
                Our Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Healthy. Educated. Self-Reliant.
              </h3>
              <p className="text-base text-arya-charcoal-200 leading-relaxed">
                {organizationData.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-arya-forest text-white flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-arya-forest-300">
                Our Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Community-Led Action
              </h3>
              <p className="text-base text-arya-charcoal-200 leading-relaxed">
                {organizationData.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-arya-ivory border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Ethics"
            badgeVariant="forest"
            title="Our Guiding Values"
            subtitle="The foundational principles that govern every programme, partnership, and community engagement."
            align="center"
            className="text-center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {organizationData.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-arya-charcoal-100 shadow-sm hover:border-arya-forest-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-arya-forest-100 text-arya-forest font-heading font-black text-lg flex items-center justify-center mb-4">
                    {val.letter}
                  </div>
                  <h4 className="text-lg font-bold text-arya-charcoal-900 font-heading mb-2">
                    {val.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th Summary Card */}
            <div className="bg-gradient-to-br from-arya-forest to-arya-forest-800 text-white rounded-2xl p-6 flex flex-col justify-center">
              <span className="text-xs font-bold text-arya-ochre uppercase tracking-wider mb-2">
                Guiding Pledge
              </span>
              <p className="text-sm font-medium leading-snug">
                Accountability to communities first, partners always, and zero tolerance for harm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Illustrated 6-Step Approach */}
      <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Community-Led Methodology"
            badgeVariant="ochre"
            title="Our 6-Step Theory of Action"
            subtitle="How we partner with grassroots communities to build enduring local capacity."
            align="center"
            className="text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-arya-ivory/50 rounded-2xl p-7 border border-arya-charcoal-100 relative group hover:bg-white hover:border-arya-forest-300 hover:shadow-lg transition-all"
              >
                <span className="text-3xl font-black text-arya-forest-300 group-hover:text-arya-forest font-heading block mb-3">
                  {step.number}
                </span>
                <h4 className="text-lg font-bold text-arya-charcoal-900 font-heading mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Journey Section */}
      <section className="py-20 md:py-28 bg-arya-ivory" id="journey">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Historical Trajectory"
            badgeVariant="forest"
            title="Our Journey of Service (2002 – Present)"
            subtitle="From post-conflict emergency recovery to sustainable, rights-based community empowerment."
            align="center"
            className="text-center mb-16"
          />

          <div className="relative border-l-2 border-arya-forest-300 ml-4 sm:ml-8 space-y-12">
            {milestones.map((ms, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-arya-forest group-hover:border-arya-ochre transition-colors"></div>

                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-arya-charcoal-100 shadow-sm space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-base sm:text-lg font-extrabold text-arya-forest font-heading">
                      {ms.year}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-arya-forest-50 text-arya-forest">
                      {ms.status}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-arya-charcoal-900 font-heading">
                    {ms.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed">
                    {ms.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white border-t border-arya-charcoal-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-arya-charcoal-900 font-heading">
            Partner With a Documented Grassroots Leader
          </h3>
          <p className="text-sm sm:text-base text-arya-charcoal-600 max-w-xl mx-auto">
            Discover how ARYA collaborates with donors, international NGOs, and government agencies to deliver verifiable community outcomes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/programmes" variant="primary" size="md">
              Explore Programmes
            </Button>
            <Button href="/get-involved" variant="outline" size="md">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
