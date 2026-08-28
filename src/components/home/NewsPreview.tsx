import React from "react";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/data/news";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

export default function NewsPreview() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-arya-charcoal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            badge="News & Field Updates"
            badgeVariant="forest"
            title="Latest from Acholi Renaissance Youth Association"
            subtitle="Updates, dialogue outcomes, and programmatic milestones from our work across Kitgum and Northern Uganda."
            className="mb-0"
          />
          <Link
            href="/news"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-arya-forest hover:text-arya-forest-700 shrink-0 mb-2 group"
          >
            <span>View All Updates</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* News Cards Grid with Authentic Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {newsData.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="bg-arya-ivory/40 hover:bg-white rounded-2xl overflow-hidden border border-arya-charcoal-100/90 hover:border-arya-forest-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Article Authentic Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-arya-charcoal-900">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-arya-forest text-white shadow-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-3 text-white/90 text-[11px] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-base sm:text-lg font-bold text-arya-charcoal-900 font-heading mb-2.5 line-clamp-2 group-hover:text-arya-forest transition-colors leading-snug">
                    <Link href={`/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-arya-charcoal-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-0">
                <div className="pt-3 border-t border-arya-charcoal-100 flex items-center justify-between">
                  <span className="text-[11px] text-arya-charcoal-500 font-medium">
                    {article.publishedDate}
                  </span>
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-xs font-bold text-arya-forest hover:text-arya-forest-700 inline-flex items-center gap-1 group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-arya-forest bg-arya-forest-50 px-5 py-3.5 rounded-xl w-full justify-center border border-arya-forest-200"
          >
            <span>View All News & Updates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
