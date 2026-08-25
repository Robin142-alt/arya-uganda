import React from "react";
import Link from "next/link";
import { newsData } from "@/data/news";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

export default function NewsPreview() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge="News & Field Updates"
            badgeVariant="forest"
            title="Latest from Acholi Renaissance Youth Association"
            subtitle="Updates, dialogue outcomes, and programmatic milestones from our work across Kitgum and Northern Uganda."
            className="mb-0"
          />
          <Link
            href="/news"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-arya-forest hover:text-arya-forest-700 shrink-0 mb-2"
          >
            <span>View All Updates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {newsData.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="bg-arya-ivory/50 rounded-2xl overflow-hidden border border-arya-charcoal-100 hover:border-arya-forest-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-arya-forest-100 text-arya-forest-800">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-arya-charcoal-500">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-arya-charcoal-900 font-heading mb-3 line-clamp-2 hover:text-arya-forest transition-colors">
                  <Link href={`/news/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-arya-charcoal-100 flex items-center justify-between">
                <span className="text-[11px] text-arya-charcoal-500 font-medium">
                  {article.publishedDate}
                </span>
                <Link
                  href={`/news/${article.slug}`}
                  className="text-xs font-bold text-arya-forest hover:text-arya-forest-700 inline-flex items-center gap-1 group"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-arya-forest bg-arya-forest-50 px-5 py-3 rounded-lg w-full justify-center"
          >
            <span>View All News & Updates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
