import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "forest" | "ochre" | "terracotta" | "neutral" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "forest",
  size = "md",
  className,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full tracking-wide uppercase transition-colors";

  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5 tracking-wider",
    md: "text-xs px-3 py-1 tracking-normal font-semibold",
  };

  const variantStyles = {
    forest: "bg-arya-forest-100 text-arya-forest-800 border border-arya-forest-200",
    ochre: "bg-arya-ochre-100 text-arya-ochre-800 border border-arya-ochre-200",
    terracotta: "bg-red-50 text-arya-terracotta border border-red-200",
    neutral: "bg-arya-charcoal-100 text-arya-charcoal-800 border border-arya-charcoal-200",
    outline: "bg-transparent text-arya-forest border border-arya-forest-300",
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {children}
    </span>
  );
}
