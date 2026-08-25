import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Badge from "@/components/ui/Badge";

export interface PageHeroProps {
  badge?: string;
  badgeVariant?: "forest" | "ochre" | "terracotta" | "neutral";
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  accentColor?: "forest" | "ochre" | "charcoal";
}

export default function PageHero({
  badge,
  badgeVariant = "ochre",
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }],
  accentColor = "forest",
}: PageHeroProps) {
  return (
    <div className="relative bg-gradient-to-b from-arya-charcoal-950 via-arya-charcoal-900 to-arya-forest-950 text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-arya-charcoal-800 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D99A32_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Breadcrumb Bar */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-xs text-arya-charcoal-400 mb-6" aria-label="Breadcrumb">
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-arya-charcoal-500" />}
                {bc.href ? (
                  <Link href={bc.href} className="hover:text-arya-ochre-300 transition-colors">
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-arya-charcoal-200 font-medium">{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="max-w-3xl space-y-4">
          {badge && (
            <Badge variant={badgeVariant} size="md" className="bg-white/10 text-arya-ochre-200 border-white/15">
              {badge}
            </Badge>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight leading-tight text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-arya-charcoal-200 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
