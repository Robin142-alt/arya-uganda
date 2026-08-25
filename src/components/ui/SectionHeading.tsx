import React from "react";
import { cn } from "@/lib/utils";
import Badge from "./Badge";

export interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "forest" | "ochre" | "terracotta" | "neutral";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  theme?: "light" | "dark";
}

export default function SectionHeading({
  badge,
  badgeVariant = "forest",
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  theme = "light",
}: SectionHeadingProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const isDark = theme === "dark";

  return (
    <div className={cn("flex flex-col max-w-3xl mb-10 md:mb-14", alignment[align], className)}>
      {badge && (
        <Badge
          variant={badgeVariant}
          size="md"
          className="mb-3.5"
        >
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance leading-[1.18]",
          isDark ? "text-white" : "text-arya-charcoal-900",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3.5 text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-arya-charcoal-200" : "text-arya-charcoal-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
