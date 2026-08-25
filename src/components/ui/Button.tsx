import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ochre" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  target?: string;
  rel?: string;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-arya-forest text-white hover:bg-arya-forest-600 focus-visible:ring-arya-forest shadow-sm hover:shadow-md",
    secondary:
      "bg-arya-charcoal text-white hover:bg-arya-charcoal-700 focus-visible:ring-arya-charcoal shadow-sm",
    ochre:
      "bg-arya-ochre text-white hover:bg-arya-ochre-600 focus-visible:ring-arya-ochre shadow-sm hover:shadow-md",
    outline:
      "border-2 border-arya-forest text-arya-forest hover:bg-arya-forest hover:text-white focus-visible:ring-arya-forest",
    ghost:
      "text-arya-charcoal hover:bg-arya-forest-50 hover:text-arya-forest focus-visible:ring-arya-forest",
    white:
      "bg-white text-arya-charcoal hover:bg-arya-ivory shadow-sm hover:shadow-md focus-visible:ring-white",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...(props as any)}>
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
