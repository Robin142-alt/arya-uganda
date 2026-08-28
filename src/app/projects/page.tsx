"use client";

import React, { useState } from "react";
import Image from "next/image";
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
                  className="bg-white rounded-2xl overflow-hidden border border-arya-charcoal-100/90 shadow-sm hover:shadow-xl hover:border-arya-forest-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Project Photo Banner */}
                    <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-arya-charcoal-900">
                      <Image
                        src={project.image || "/images/hero/hero-community.webp"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950/80 via-transparent to-transparent"></div>

                      <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-sm ${
                            isActive
                              ? "bg-arya-forest text-white"
                              : "bg-arya-ochre text-arya-charcoal-950"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3.5">
                        <span className="text-[11px] text-white/90 font-semibold bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                          {project.programmeName}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl font-bold text-arya-charcoal-900 font-heading mb-2.5 group-hover:text-arya-forest transition-colors leading-snug">
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
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-6 sm:px-8 pb-6 pt-0">
                    <div className="pt-4 border-t border-arya-charcoal-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-arya-charcoal-400">
                        {project.verificationStatus}
                      </span>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-arya-forest hover:text-arya-forest-700 transition-colors group/link"
                      >
                        <span>Full Case Details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
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
