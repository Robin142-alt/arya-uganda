import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, Users, Landmark, Scale, BookOpen } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HerVoiceFeature() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-arya-charcoal-950 via-arya-charcoal-900 to-arya-forest-950 text-white relative overflow-hidden">
      {/* Subtle ochre/gold accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-arya-ochre/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-arya-forest/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Her Voice Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-arya-ochre/20 text-arya-ochre-300 border border-arya-ochre/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Adolescent Girls & Young Women (AGYW)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-[1.14]">
              Her Voice. Her Rights. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-arya-ochre-300 via-amber-200 to-arya-ochre">
                Her Future.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-arya-charcoal-200 leading-relaxed font-normal">
              In Northern Uganda, adolescent girls and young women are stepping forward to lead critical conversations regarding bodily autonomy, sexual reproductive health rights, and protection from customary land and property dispossession.
            </p>

            <p className="text-sm sm:text-base text-arya-charcoal-300 leading-relaxed">
              Through our engagement under the <strong className="text-white">HER Voice Fund</strong> (facilitated by Y+ Global), ARYA provides safe spaces, advocacy skills, and high-level dialogue platforms connecting young women delegates directly with traditional clan elders and local government duty bearers.
            </p>

            {/* Documented Dialogue Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 text-arya-ochre mb-1">
                  <Landmark className="w-4 h-4" />
                  <span className="text-2xl font-bold font-heading text-white">40</span>
                </div>
                <p className="text-xs font-semibold text-arya-charcoal-200">Clan Leaders Engaged</p>
                <p className="text-[10px] text-arya-charcoal-400 mt-0.5">Ker Kwaro Acholi arbiters</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 text-arya-ochre mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-2xl font-bold font-heading text-white">30</span>
                </div>
                <p className="text-xs font-semibold text-arya-charcoal-200">AGYW Delegates</p>
                <p className="text-[10px] text-arya-charcoal-400 mt-0.5">Peer advocacy cohort</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-arya-ochre mb-1">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-2xl font-bold font-heading text-white">19</span>
                </div>
                <p className="text-xs font-semibold text-arya-charcoal-200">CSOs & School Leads</p>
                <p className="text-[10px] text-arya-charcoal-400 mt-0.5">Education-SRHR forum</p>
              </div>
            </div>

            {/* Disclaimer on Statistics */}
            <p className="text-[11px] text-arya-charcoal-400 italic">
              *Data represents documented dialogue participants under the HER Voice project baseline in Kitgum.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <Button
                href="/programmes#girls-young-women"
                variant="ochre"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About AGYW Advocacy
              </Button>
            </div>
          </div>

          {/* Right Column: Case Highlight Card with Authentic Photo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden h-52 sm:h-60 border border-white/15 shadow-xl group">
              <Image
                src="/images/projects/her-voice.webp"
                alt="Adolescent Girls and Young Women advocacy delegates in Kitgum"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-arya-ochre text-arya-charcoal-950 font-heading">
                  HER Voice Cohort
                </span>
                <p className="text-xs font-semibold text-white/90 mt-1">
                  Young women peer advocates leading local dialogue in Kitgum
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-arya-forest text-white text-xs font-bold">
                  Documented Pillar
                </span>
                <span className="text-xs text-arya-charcoal-300">Acholi Sub-Region</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
                Advocating on Girls&apos; Property & Customary Inheritance
              </h3>

              <p className="text-xs sm:text-sm text-arya-charcoal-200 leading-relaxed">
                When young women lose parents or marital support, customary inheritance barriers often leave them landless. ARYA brings clan elders together with young women to secure culturally grounded, protective mediation.
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-start gap-2.5 text-xs text-arya-charcoal-200">
                  <Scale className="w-4 h-4 text-arya-ochre shrink-0 mt-0.5" />
                  <span>Harmonising customary mediation with statutory child and women&apos;s rights.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-arya-charcoal-200">
                  <ShieldCheck className="w-4 h-4 text-arya-ochre shrink-0 mt-0.5" />
                  <span>Preventing gender-based displacement and school dropouts.</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/15">
                <Link
                  href="/projects/her-voice-agyw-advocacy"
                  className="text-xs font-bold text-arya-ochre-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Read the Full HER Voice Project Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
