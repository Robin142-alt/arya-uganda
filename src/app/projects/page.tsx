"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import { projectsData } from "@/data/projects";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Filter,
  Tag,
  Building,
} from "lucide-react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";

export default function ProjectsPage() {
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filteredProjects = projectsData.filter((p) => {
    if (statusFilter === "All") return true;
    if (statusFilter === "Active") return p.status === "Active";
    if (statusFilter === "Historical") return p.status === "Historical Framework";
    return true;
  });

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Initiatives & Grants"
        title="Projects & Field Actions"
        subtitle="A transparent record of ARYA's current and documented historical interventions across Kitgum and the wider Acholi sub-region."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Work", href: "/programmes" }, { label: "Projects" }]}
      />

      {/* Filter Strip */}
      <section className="py-8 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-arya-charcoal-500 uppercase tracking-wider">
            <Filter className="w-4 h-4" />
            <span>Filter Portfolio:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {["All", "Active", "Historical"].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  statusFilter === st
                    ? "bg-arya-forest text-white shadow-sm"
                    : "bg-arya-ivory text-arya-charcoal-700 hover:bg-arya-forest-50"
                }`}
              >
                {st === "All" ? "All Projects" : st === "Active" ? "Active / Ongoing" : "Historical Interventions"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-arya-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const isActive = project.status === "Active";
              const isHistorical = project.status === "Historical Framework";

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden border border-arya-charcoal-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between p-7 sm:p-8"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-green-100 text-green-800 border border-green-200"
                            : "bg-amber-100 text-amber-800 border border-amber-200"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="text-[10px] text-arya-charcoal-400 font-semibold">
                        {project.verificationStatus}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-arya-charcoal-900 font-heading mb-3 hover:text-arya-forest transition-colors">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Metadata Strip */}
                    <div className="space-y-2 py-4 border-y border-arya-charcoal-100 text-xs text-arya-charcoal-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-arya-forest shrink-0" />
                        <span><strong>Timeframe:</strong> {project.timeframe}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-arya-forest shrink-0" />
                        <span><strong>Location:</strong> {project.location}</span>
                      </div>
                      {project.leadFunderPartner && (
                        <div className="flex items-center gap-2">
                          <Building className="w-3.5 h-3.5 text-arya-forest shrink-0" />
                          <span><strong>Partner Ecosystem:</strong> {project.leadFunderPartner}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 flex items-center justify-between">
                    <span className="text-xs font-bold text-arya-ochre-700">
                      {project.programmeName}
                    </span>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-arya-forest hover:text-arya-forest-700 transition-colors group"
                    >
                      <span>Full Case Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
