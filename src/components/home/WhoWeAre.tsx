import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Heart, Users, Target, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhoWeAre() {
  return (
    <section className="py-20 md:py-28 bg-arya-ivory border-b border-arya-charcoal-100 relative overflow-hidden">
      {/* Official ARYA Crest Watermark Background for the section */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] lg:w-[780px] lg:h-[780px] opacity-[0.065] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <Image
          src="/images/arya-logo-transparent.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Photo & Commitment Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="relative group">
              {/* Authentic Community Dialogue Photo */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-arya-charcoal-200/80">
                <Image
                  src="/images/about/about-community-dialogue.webp"
                  alt="Authentic ARYA community mobilization and dialogue in Kitgum"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-arya-forest/90 text-arya-ivory">
                    Field Dialogue
                  </span>
                  <p className="text-xs font-semibold text-white/90 mt-1">
                    Grassroots participatory action in Kitgum & Lamwo
                  </p>
                </div>
              </div>

              {/* Overlapping Key Focus Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-arya-charcoal-100 shadow-md space-y-4 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-arya-forest-50 text-arya-forest flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-arya-ochre uppercase tracking-wider">
                      Our Defining Focus
                    </span>
                    <h3 className="text-lg font-bold text-arya-charcoal-900 font-heading leading-tight">
                      Agency Over Dependency
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed">
                  Founded in 2002 by youth in Kitgum, ARYA arose from the urgent need to rebuild communities after years of conflict, moving beyond temporary aid toward enduring, locally managed capacity.
                </p>

                {/* Key Commitments */}
                <div className="pt-3 border-t border-arya-charcoal-100 space-y-2">
                  {[
                    "Grassroots community ownership and accountability",
                    "Intergenerational dialogue bridging youth and traditional elders",
                    "Evidence-informed advocacy with local government",
                    "Zero-tolerance child safeguarding and gender dignity",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-arya-charcoal-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-arya-forest shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
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
              <div className="p-4 rounded-xl bg-white border border-arya-charcoal-100 shadow-sm">
                <p className="font-bold text-sm text-arya-charcoal-900 font-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-arya-forest"></span>
                  Community-Led Design
                </p>
                <p className="text-xs text-arya-charcoal-600 mt-1.5 leading-relaxed">
                  Programmes designed with community members rather than prescribed from afar.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-arya-charcoal-100 shadow-sm">
                <p className="font-bold text-sm text-arya-charcoal-900 font-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-arya-ochre"></span>
                  Holistic Development
                </p>
                <p className="text-xs text-arya-charcoal-600 mt-1.5 leading-relaxed">
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
