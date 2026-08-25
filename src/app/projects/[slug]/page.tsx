import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import PageHero from "@/components/shared/PageHero";
import {
  Calendar,
  MapPin,
  Building,
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
  Share2,
  FileText,
  Target,
  Layers,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | ARYA Projects`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <PageHero
        badge={project.status}
        title={project.title}
        subtitle={project.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Main Case Study Narrative */}
            <div className="lg:col-span-8 space-y-10">
              {/* Verification & Overview Notice */}
              {project.verificationNote && (
                <div className="p-5 rounded-2xl bg-arya-forest-50 border border-arya-forest-200 flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-arya-forest shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-arya-forest-900 leading-relaxed space-y-1">
                    <p className="font-bold">Project Verification Status:</p>
                    <p>{project.verificationNote}</p>
                  </div>
                </div>
              )}

              {/* Objectives */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-arya-charcoal-900 font-heading flex items-center gap-2">
                  <Target className="w-6 h-6 text-arya-forest" />
                  Strategic Objectives
                </h2>
                <div className="space-y-3">
                  {project.objectives.map((obj, oIdx) => (
                    <div
                      key={oIdx}
                      className="p-4 rounded-xl bg-arya-ivory border border-arya-charcoal-100 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-arya-forest shrink-0 mt-0.5" />
                      <span className="text-sm text-arya-charcoal-800 leading-relaxed font-medium">
                        {obj}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Activities */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-arya-charcoal-900 font-heading flex items-center gap-2">
                  <Layers className="w-6 h-6 text-arya-ochre-600" />
                  Key Field Activities & Dialogues
                </h2>
                <ul className="space-y-3">
                  {project.keyActivities.map((act, aIdx) => (
                    <li
                      key={aIdx}
                      className="p-4 rounded-xl bg-white border border-arya-charcoal-100 shadow-sm flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-arya-ochre shrink-0 mt-2"></span>
                      <span className="text-sm text-arya-charcoal-700 leading-relaxed">
                        {act}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documented Outcomes / Progress */}
              {project.outcomesReached && project.outcomesReached.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-arya-charcoal-900 font-heading flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Documented Community Outcomes
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.outcomesReached.map((out, outIdx) => (
                      <div
                        key={outIdx}
                        className="p-4 rounded-xl bg-green-50/60 border border-green-200 text-xs sm:text-sm text-green-950 font-medium leading-relaxed"
                      >
                        {out}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Back Link */}
              <div className="pt-6 border-t border-arya-charcoal-100 flex items-center justify-between">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-bold text-arya-forest hover:text-arya-forest-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Projects Directory</span>
                </Link>
              </div>
            </div>

            {/* Right: Metadata Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-arya-ivory rounded-2xl p-6 sm:p-7 border border-arya-charcoal-200 space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-arya-charcoal-900 font-heading">
                  Project Snapshot
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-arya-charcoal-700">
                  <div>
                    <span className="block text-[11px] font-bold text-arya-charcoal-400 uppercase">
                      Programme Pillar
                    </span>
                    <span className="font-semibold text-arya-forest">
                      {project.programmeName}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold text-arya-charcoal-400 uppercase">
                      Status
                    </span>
                    <span className="font-semibold">{project.status}</span>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold text-arya-charcoal-400 uppercase">
                      Timeframe
                    </span>
                    <span className="font-semibold">{project.timeframe}</span>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold text-arya-charcoal-400 uppercase">
                      Geographic Focus
                    </span>
                    <span className="font-semibold">{project.location}</span>
                  </div>

                  {project.leadFunderPartner && (
                    <div>
                      <span className="block text-[11px] font-bold text-arya-charcoal-400 uppercase">
                        Lead Partner / Fund Ecosystem
                      </span>
                      <span className="font-semibold">{project.leadFunderPartner}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-arya-charcoal-200">
                  <Button
                    href="/get-involved"
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    Partner on Similar Initiatives
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
