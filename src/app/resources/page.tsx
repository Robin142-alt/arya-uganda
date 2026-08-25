"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import { resourcesData } from "@/data/resources";
import {
  FileText,
  Download,
  Filter,
  Search,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [downloadModalDoc, setDownloadModalDoc] = useState<string | null>(null);

  const categories = [
    "All",
    "Reports",
    "Policy Briefs",
    "Programme Briefs",
    "Publications",
    "Strategic Documents",
  ];

  const filteredResources = resourcesData.filter((doc) => {
    const matchesCategory =
      selectedCategory === "All" || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Publications & Evidence"
        title="Resources & Documentation Centre"
        subtitle="Access institutional profiles, policy summaries, field briefs, and accountability guidelines produced by ARYA."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      {/* Filter & Search Controls */}
      <section className="py-8 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-arya-forest text-white shadow-sm"
                    : "bg-arya-ivory text-arya-charcoal-700 hover:bg-arya-forest-50 border border-arya-charcoal-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-arya-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-arya-ivory border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
            />
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24 bg-arya-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-arya-charcoal-100 p-8 max-w-xl mx-auto space-y-3">
              <FileText className="w-12 h-12 text-arya-charcoal-300 mx-auto" />
              <h3 className="text-base font-bold text-arya-charcoal-900 font-heading">
                No matching publications found
              </h3>
              <p className="text-xs text-arya-charcoal-600">
                Try adjusting your search keywords or resetting the category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-xs font-bold text-arya-forest hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredResources.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-2xl p-7 border border-arya-charcoal-100 shadow-sm hover:border-arya-forest-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-arya-forest-50 text-arya-forest">
                        {doc.category}
                      </span>
                      <span className="text-xs text-arya-charcoal-400 font-medium">
                        {doc.year}
                      </span>
                    </div>

                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-arya-forest-100 text-arya-forest flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-arya-charcoal-900 font-heading leading-snug">
                        {doc.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed mb-6">
                      {doc.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-arya-charcoal-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-arya-charcoal-400">
                      {doc.fileType} • {doc.fileSize}
                    </span>
                    <button
                      onClick={() => setDownloadModalDoc(doc.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-arya-forest hover:text-arya-forest-700 bg-arya-forest-50 hover:bg-arya-forest-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Request Document</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Request Custom Document Box */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-arya-charcoal-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-arya-charcoal-900 font-heading">
                Need Specific Strategic Documents or Financial Audits?
              </h3>
              <p className="text-xs sm:text-sm text-arya-charcoal-600 max-w-2xl">
                Certified annual audit statements, project baseline datasets, and MoU frameworks are available to accredited development partners and government bodies upon formal request.
              </p>
            </div>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="shrink-0"
              icon={<Mail className="w-4 h-4" />}
            >
              Contact Secretariat
            </Button>
          </div>
        </div>
      </section>

      {/* Simulated Document Modal */}
      {downloadModalDoc && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-arya-charcoal-100">
              <span className="text-xs font-bold text-arya-forest uppercase">
                Document Preview & Access
              </span>
              <button
                onClick={() => setDownloadModalDoc(null)}
                className="text-xs font-bold text-arya-charcoal-400 hover:text-arya-charcoal-700"
              >
                ✕ Close
              </button>
            </div>

            <h4 className="text-base font-bold text-arya-charcoal-900 font-heading">
              {downloadModalDoc}
            </h4>

            <p className="text-xs text-arya-charcoal-600 leading-relaxed">
              Official publications, baseline reports, and policies are catalogued in the ARYA Kitgum repository. For complete high-resolution copies or verified data annexes, please submit a brief inquiry or email the secretariat.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="w-full"
              >
                Send Secretariat Request
              </Button>
              <button
                onClick={() => setDownloadModalDoc(null)}
                className="w-full text-xs font-semibold text-arya-charcoal-500 py-2 hover:text-arya-charcoal-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
