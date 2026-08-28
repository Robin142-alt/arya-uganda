import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { newsData } from "@/data/news";
import PageHero from "@/components/shared/PageHero";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return newsData.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = newsData.find((n) => n.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | ARYA News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedDate,
    },
  };
}

export default function NewsDetailPage({ params }: Props) {
  const article = newsData.find((n) => n.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsData
    .filter((n) => n.id !== article.id)
    .slice(0, 2);

  return (
    <div className="flex flex-col">
      <PageHero
        badge={article.category}
        title={article.title}
        subtitle={article.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: article.category },
        ]}
      />

      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Article Body */}
            <article className="lg:col-span-8 space-y-8">
              {/* Authentic Article Featured Image */}
              {article.image && (
                <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-arya-charcoal-200">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-arya-forest text-white">
                      Field Update • Kitgum
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white/90 mt-1">
                      {article.title}
                    </p>
                  </div>
                </div>
              )}
              {/* Meta Info Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-arya-ivory border border-arya-charcoal-100 text-xs text-arya-charcoal-600">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 font-semibold text-arya-charcoal-900">
                    <User className="w-4 h-4 text-arya-forest" />
                    {article.author.name}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-arya-forest" />
                    {article.publishedDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-arya-forest" />
                    {article.readTime}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-arya-forest uppercase">
                    Official Release
                  </span>
                </div>
              </div>

              {/* Status Notice if present */}
              {article.statusNotice && (
                <div className="p-4 rounded-xl bg-arya-forest-50 border border-arya-forest-200 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-arya-forest shrink-0 mt-0.5" />
                  <p className="text-xs text-arya-forest-900">
                    <strong>Editorial Disclosure:</strong> {article.statusNotice}
                  </p>
                </div>
              )}

              {/* Lead Paragraph */}
              <div className="text-base sm:text-lg font-medium text-arya-charcoal-900 leading-relaxed border-l-4 border-arya-ochre pl-4">
                {article.excerpt}
              </div>

              {/* Article Content */}
              <div className="space-y-5 text-base text-arya-charcoal-700 leading-relaxed">
                {article.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-arya-charcoal-100">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-arya-charcoal-400 mr-1" />
                  {article.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-lg bg-arya-ivory text-arya-charcoal-700 border border-arya-charcoal-200"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation Back */}
              <div className="pt-6 border-t border-arya-charcoal-100 flex items-center justify-between">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-sm font-bold text-arya-forest hover:text-arya-forest-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to News & Updates</span>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Secretariat Card */}
              <div className="bg-arya-ivory rounded-2xl p-6 sm:p-7 border border-arya-charcoal-100 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-arya-charcoal-900 font-heading">
                  Media & Editorial Inquiries
                </h3>
                <p className="text-xs text-arya-charcoal-600 leading-relaxed">
                  For press statements, community dialogue findings, or interview requests regarding ARYA&apos;s work in Northern Uganda, contact our communications desk.
                </p>
                <div className="pt-2">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    Contact Media Desk
                  </Button>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-arya-charcoal-900 font-heading">
                    Related Field Updates
                  </h3>
                  <div className="space-y-3">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/news/${rel.slug}`}
                        className="block p-4 rounded-xl bg-white border border-arya-charcoal-100 hover:border-arya-forest-300 hover:shadow-sm transition-all"
                      >
                        <span className="text-[10px] font-bold text-arya-forest uppercase">
                          {rel.category}
                        </span>
                        <h4 className="text-xs font-bold text-arya-charcoal-900 mt-1 line-clamp-2">
                          {rel.title}
                        </h4>
                        <span className="text-[10px] text-arya-charcoal-400 mt-2 block">
                          {rel.publishedDate}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
