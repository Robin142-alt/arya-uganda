import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Users, Target, Shield } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhoWeAre() {
  return (
    <section className="py-20 md:py-28 bg-arya-ivory border-b border-arya-charcoal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Feature Box */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Editorial Card */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-arya-charcoal-100 shadow-sm space-y-6">
                <div className="w-12 h-12 rounded-xl bg-arya-forest-50 text-arya-forest flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-arya-ochre uppercase tracking-wider">
                    Our Defining Focus
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-arya-charcoal-900 mt-1 font-heading">
                    Agency Over Dependency
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-arya-charcoal-600 leading-relaxed">
                  Founded in 2002 by youth in Kitgum, ARYA arose from the urgent need to rebuild communities after years of conflict, moving beyond temporary aid toward enduring, locally managed capacity.
                </p>

                {/* Key Commitments */}
                <div className="pt-4 border-t border-arya-charcoal-100 space-y-3">
                  {[
                    "Grassroots community ownership and accountability",
                    "Intergenerational dialogue bridging youth and traditional elders",
                    "Evidence-informed advocacy with local government",
                    "Zero-tolerance child safeguarding and gender dignity",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-arya-charcoal-700">
                      <CheckCircle2 className="w-4 h-4 text-arya-forest shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-arya-forest-100 -z-10 hidden sm:block"></div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <SectionHeading
              badge="About Our Organisation"
              badgeVariant="forest"
              title="Who is Acholi Renaissance Youth Association?"
              subtitle="We are a grassroots community organisation based in Kitgum, Northern Uganda, dedicated to fostering resilient, healthy, and self-sufficient communities."
              className="mb-6"
            />

            <div className="space-y-4 text-base text-arya-charcoal-700 leading-relaxed">
              <p>
                Acholi Renaissance Youth Association (ARYA) works across the Acholi sub-region to dismantle the structural barriers that keep children, young people, and young women vulnerable. We believe that real community transformation happens when local people have the knowledge, platforms, and resources to lead their own development.
              </p>
              <p>
                From health and sexual reproductive rights education to adolescent girls&apos; leadership dialogues and climate-resilient livelihoods, our programmes are designed to strengthen community systems and build lasting self-reliance.
              </p>
            </div>

            {/* Pillar Grid Snapshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-arya-charcoal-100">
                <p className="font-bold text-sm text-arya-charcoal-900 font-heading">
                  Community-Led Design
                </p>
                <p className="text-xs text-arya-charcoal-600 mt-1">
                  Programmes designed with community members rather than prescribed from afar.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-arya-charcoal-100">
                <p className="font-bold text-sm text-arya-charcoal-900 font-heading">
                  Holistic Development
                </p>
                <p className="text-xs text-arya-charcoal-600 mt-1">
                  Integrating health, learning, livelihoods, and rights for complete well-being.
                </p>
              </div>
            </div>

            {/* Read More Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-arya-forest hover:text-arya-forest-700 group"
              >
                <span>Read Our Full Story, Mission & Values</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
