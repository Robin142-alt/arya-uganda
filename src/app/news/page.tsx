"use client";

import React, { useState } from "react";
import PageHero from "@/components/shared/PageHero";
import { newsData } from "@/data/news";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag,
  User,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Advocacy", "Health & SRHR", "Community"];

  const filteredNews = newsData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsData.find((n) => n.isFeatured) || newsData[0];

  return (
    <div className="flex flex-col">
      <PageHero
        badge="Field Communications"
        title="News & Field Updates"
        subtitle="Read about programmatic milestones, stakeholder dialogues, and youth advocacy initiatives across Northern Uganda."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News & Updates" }]}
      />

      {/* Featured Article Spotlight */}
      <section className="py-12 bg-white border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-arya-ivory rounded-3xl p-8 sm:p-10 border border-arya-charcoal-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-arya-forest text-white text-xs font-bold uppercase tracking-wider">
                  Featured Milestone
                </span>
                <span className="text-xs text-arya-charcoal-500 font-medium">
                  {featuredArticle.publishedDate}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-arya-charcoal-900 font-heading leading-snug">
                <Link
                  href={`/news/${featuredArticle.slug}`}
                  className="hover:text-arya-forest transition-colors"
                >
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-sm sm:text-base text-arya-charcoal-700 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href={`/news/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-arya-forest hover:text-arya-forest-700 group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-arya-charcoal-100 space-y-3">
              <span className="text-xs font-bold text-arya-ochre-700 uppercase tracking-wider">
                Article Information
              </span>
              <div className="text-xs text-arya-charcoal-600 space-y-2">
                <p>
                  <strong>Desk:</strong> {featuredArticle.author.name}
                </p>
                <p>
                  <strong>Role:</strong> {featuredArticle.author.role}
                </p>
                <p>
                  <strong>Read Time:</strong> {featuredArticle.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Controls */}
      <section className="py-8 bg-arya-ivory border-b border-arya-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-arya-forest text-white shadow-sm"
                    : "bg-white text-arya-charcoal-700 hover:bg-arya-forest-50 border border-arya-charcoal-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-arya-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search news & updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-white border border-arya-charcoal-200 focus:outline-none focus:ring-2 focus:ring-arya-forest text-arya-charcoal-900"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length === 0 ? (
            <div className="text-center py-16 bg-arya-ivory rounded-2xl border border-arya-charcoal-100">
              <p className="text-sm font-bold text-arya-charcoal-700">No articles matched your filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-bold text-arya-forest hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredNews.map((article) => (
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
          )}
        </div>
      </section>
    </div>
  );
}
