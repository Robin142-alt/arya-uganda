import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderAccent?: "forest" | "ochre" | "terracotta" | "none";
}

export default function Card({
  children,
  className,
  hoverEffect = true,
  borderAccent = "none",
  ...props
}: CardProps) {
  const accentStyles = {
    none: "border-arya-charcoal-100",
    forest: "border-l-4 border-l-arya-forest border-y-arya-charcoal-100 border-r-arya-charcoal-100",
    ochre: "border-l-4 border-l-arya-ochre border-y-arya-charcoal-100 border-r-arya-charcoal-100",
    terracotta: "border-l-4 border-l-arya-terracotta border-y-arya-charcoal-100 border-r-arya-charcoal-100",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 sm:p-7 border shadow-sm transition-all duration-300",
        accentStyles[borderAccent],
        hoverEffect && "hover:shadow-md hover:-translate-y-1 hover:border-arya-forest-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
