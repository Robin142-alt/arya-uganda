import React from "react";
import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { currentNetworksData, historicalPartnersData, fundingPartnersData } from "@/data/partners";
import {
  ShieldCheck,
  Building2,
  ExternalLink,
  History,
  HeartHandshake,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partners & Networks | ARYA Uganda",
  description:
    "Explore ARYA's current strategic alliances (Y+ Global, HER Voice Fund, ENR-CSO, KINGFO, Charter for Change) and historical development collaborations.",
};

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        badge="Strategic Alliances"
        title="Partners & Networks"
        subtitle="Collaboration is at the core of our community-led development philosophy in Northern Uganda."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Partners & Networks" }]}
      />

      {/* Working Through Partnership Philosophy */}
      <section className="py-16 md:py-24 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Our Philosophy"
                badgeVariant="forest"
                title="Working in Networked Solidarity"
                subtitle="True localization means building resilient, equal partnerships with community structures, government agencies, and international development partners."
                className="mb-0"
              />
              <div className="space-y-4 text-sm sm:text-base text-arya-charcoal-700 leading-relaxed">
                <p>
                  Acholi Renaissance Youth Association operates on the principle that systemic challenges—such as HIV transmission, gender inequalities, and youth underemployment—cannot be solved by any single institution in isolation.
                </p>
                <p>
                  We actively align our grassroots initiatives with the <strong>Uganda National Development Plan</strong>, the <strong>Kitgum District Local Government Development Plan</strong>, and international human rights frameworks.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-arya-ivory rounded-3xl p-8 border border-arya-charcoal-100 space-y-4">
              <h3 className="text-lg font-bold text-arya-charcoal-900 font-heading flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-arya-forest" />
                Charter for Change Commitment
              </h3>
              <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed">
                As a signatory to the Charter for Change (C4C) and the Charter of Accountability, ARYA champions the shift of power and resources to local actors, ensuring humanitarian and development assistance is transparent and led by those closest to the challenge.
              </p>
              <div className="pt-2">
                <a
                  href="https://charter4change.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-arya-forest hover:text-arya-forest-700 inline-flex items-center gap-1"
                >
                  <span>Learn more about Charter for Change</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Networks & Public Associations */}
      <section className="py-20 md:py-28 bg-arya-ivory border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Current Public Associations"
            badgeVariant="forest"
            title="Strategic Networks & Grantee Portfolios"
            subtitle="Verified multi-stakeholder coalitions and grantee partnerships powering our active field work."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentNetworksData.map((net) => (
              <div
                key={net.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-arya-charcoal-100 shadow-sm hover:border-arya-forest-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-arya-forest-50 text-arya-forest border border-arya-forest-200">
                      {net.category}
                    </span>
                    <span className="text-xs font-bold text-arya-ochre-700">
                      {net.relationship}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-arya-charcoal-900 font-heading mb-3">
                    {net.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed mb-6">
                    {net.description}
                  </p>
                </div>

                {net.website && (
                  <div className="pt-4 border-t border-arya-charcoal-100 flex items-center justify-between">
                    <span className="text-[11px] text-green-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Association
                    </span>
                    <a
                      href={net.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-arya-forest hover:text-arya-forest-700 inline-flex items-center gap-1"
                    >
                      <span>Visit Network</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documented Funding Partners & Grant Mandates from Official Archive */}
      <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Grant Portfolios"
            badgeVariant="ochre"
            title="Documented Funding Partners & Grant Mandates"
            subtitle="Specific programmatic partnerships and targeted interventions funded across the Acholi sub-region."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fundingPartnersData.map((fp) => (
              <div
                key={fp.id}
                className="bg-arya-ivory/50 rounded-2xl p-6 sm:p-7 border border-arya-charcoal-100 shadow-sm flex flex-col justify-between hover:border-arya-forest-300 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-arya-forest-100 text-arya-forest">
                      {fp.category}
                    </span>
                    <span className="text-[11px] font-semibold text-arya-charcoal-500">
                      {fp.activeStatus}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-arya-charcoal-900 font-heading">
                    {fp.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed">
                    {fp.grantPurpose}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinct Historical Collaborations */}
      <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Archive"
            badgeVariant="neutral"
            title="Our Journey / Historical Collaborations"
            subtitle="Throughout our 20+ year history, ARYA has collaborated with notable national and international institutions during key relief and recovery phases in Northern Uganda."
          />

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 mb-8 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Transparency Note:</strong> The organizations listed below represent documented past program collaborations and sub-grants implemented during post-conflict reconstruction and historical health initiatives. They are maintained here as an accurate record of institutional experience rather than active current grant agreements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicalPartnersData.map((hp, idx) => (
              <div
                key={idx}
                className="bg-arya-ivory/60 rounded-2xl p-6 border border-arya-charcoal-100 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-arya-charcoal-400 uppercase tracking-wider">
                    {hp.era}
                  </span>
                  <h4 className="text-base font-bold text-arya-charcoal-900 font-heading mt-1 mb-2">
                    {hp.name}
                  </h4>
                  <p className="text-xs text-arya-charcoal-600 leading-relaxed mb-4">
                    {hp.thematicFocus}
                  </p>
                </div>
                <div className="pt-3 border-t border-arya-charcoal-200/50 text-[10px] text-arya-charcoal-500 italic">
                  {hp.disclaimer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="py-16 bg-arya-forest-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Explore a Partnership with ARYA
          </h3>
          <p className="text-sm sm:text-base text-arya-forest-100 leading-relaxed">
            We welcome collaborative opportunities with institutional grantmakers, bilateral agencies, civil society coalitions, and research universities.
          </p>
          <div className="pt-2">
            <Button href="/get-involved" variant="ochre" size="md">
              Initiate Partnership Dialogue
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
