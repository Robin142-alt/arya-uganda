import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { MessageSquareQuote, ShieldCheck, Heart } from "lucide-react";

export default function CommunityVoices() {
  return (
    <section className="py-20 md:py-28 bg-arya-ivory border-b border-arya-charcoal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Ethical Community Perspectives"
          badgeVariant="ochre"
          title="Community Voices"
          subtitle="Amplifying the lived experiences of youth leaders, traditional elders, and community stakeholders in Northern Uganda."
          align="center"
          className="text-center"
        />

        {/* 3 Structured Community Perspective Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Traditional Leadership */}
          <div className="bg-white rounded-2xl p-7 border border-arya-charcoal-100 shadow-sm flex flex-col justify-between relative">
            <div className="text-arya-ochre mb-4">
              <MessageSquareQuote className="w-8 h-8 opacity-80" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-arya-charcoal-800 italic leading-relaxed mb-6 font-medium">
                &ldquo;When we sit as elders with the youth to talk about customary protections and girls&apos; inheritance, we are not destroying our culture—we are protecting our families and ensuring peace in our villages.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-arya-charcoal-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-arya-charcoal-900 font-heading">
                  Traditional Clan Representative
                </p>
                <p className="text-[11px] text-arya-charcoal-500">
                  Ker Kwaro Acholi / Kitgum Dialogue
                </p>
              </div>
              <span className="text-[10px] bg-arya-forest-50 text-arya-forest px-2 py-0.5 rounded font-semibold">
                Dialogue Synthesis
              </span>
            </div>
          </div>

          {/* Card 2: AGYW Peer Leadership */}
          <div className="bg-white rounded-2xl p-7 border border-arya-charcoal-100 shadow-sm flex flex-col justify-between relative">
            <div className="text-arya-ochre mb-4">
              <MessageSquareQuote className="w-8 h-8 opacity-80" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-arya-charcoal-800 italic leading-relaxed mb-6 font-medium">
                &ldquo;Having a structured space to speak with school leaders and health workers helped us demand adolescent-friendly services without fear of judgment. Our voice matters in decisions that affect our bodies.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-arya-charcoal-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-arya-charcoal-900 font-heading">
                  Young Women Advocacy Cohort
                </p>
                <p className="text-[11px] text-arya-charcoal-500">
                  HER Voice Peer Network
                </p>
              </div>
              <span className="text-[10px] bg-arya-forest-50 text-arya-forest px-2 py-0.5 rounded font-semibold">
                Dialogue Synthesis
              </span>
            </div>
          </div>

          {/* Card 3: Youth Farmer / VSLA Group */}
          <div className="bg-white rounded-2xl p-7 border border-arya-charcoal-100 shadow-sm flex flex-col justify-between relative">
            <div className="text-arya-ochre mb-4">
              <MessageSquareQuote className="w-8 h-8 opacity-80" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-arya-charcoal-800 italic leading-relaxed mb-6 font-medium">
                &ldquo;Pooling our savings and learning resilient farming methods gave our youth collective independence. We no longer wait for handouts; we cultivate our own land and invest in each other.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-arya-charcoal-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-arya-charcoal-900 font-heading">
                  Youth VSLA Group Leader
                </p>
                <p className="text-[11px] text-arya-charcoal-500">
                  Kitgum Rural Agribusiness Collective
                </p>
              </div>
              <span className="text-[10px] bg-arya-forest-50 text-arya-forest px-2 py-0.5 rounded font-semibold">
                Dialogue Synthesis
              </span>
            </div>
          </div>
        </div>

        {/* Ethical Transparency Note */}
        <div className="mt-8 p-4 rounded-xl bg-white/70 border border-arya-charcoal-200 text-center max-w-2xl mx-auto">
          <p className="text-xs text-arya-charcoal-600 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-arya-forest shrink-0" />
            <span>
              <strong>Ethical Documentation Note:</strong> Direct quotes and beneficiary profiles are synthesized from documented project dialogue sessions in accordance with ARYA&apos;s child and participant safeguarding protocols.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
