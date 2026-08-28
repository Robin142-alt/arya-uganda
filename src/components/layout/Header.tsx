"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, HeartHandshake, ArrowRight, ShieldCheck } from "lucide-react";
import { organizationData } from "@/data/organization";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      hasDropdown: true,
      subLinks: [
        { name: "About ARYA", href: "/about", desc: "Our history, heritage & presence in Kitgum" },
        { name: "Mission & Vision", href: "/about/mission-vision", desc: "Our core values, vision & philosophy" },
        { name: "Strategic Plan (2023–2027)", href: "/about/strategic-plan", desc: "5-Year strategic directions & roadmap" },
      ],
    },
    {
      name: "Our Work",
      href: "/programmes",
      hasDropdown: true,
      subLinks: [
        { name: "All Programmes", href: "/programmes", desc: "Integrated community pillars" },
        { name: "Health, HIV & SRHR", href: "/programmes#health-hiv-srhr", desc: "Youth-friendly health education" },
        { name: "Girls & Young Women", href: "/programmes#girls-young-women", desc: "HER Voice & leadership advocacy" },
        { name: "Education & Youth", href: "/programmes#education-youth", desc: "Life skills & retention support" },
        { name: "Livelihoods", href: "/programmes#livelihoods-economic", desc: "Agribusiness & youth savings" },
        { name: "Protection & Rights", href: "/programmes#gender-rights-protection", desc: "GBV prevention & child welfare" },
        { name: "Community Resilience", href: "/programmes#community-resilience-advocacy", desc: "ENR-CSO & civic action" },
        { name: "Projects & Initiatives", href: "/projects", desc: "Active & completed project portfolio" },
      ],
    },
    { name: "Impact", href: "/impact" },
    { name: "News", href: "/news" },
    { name: "Partners", href: "/partners" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top micro-bar for credibility & location */}
      <div className="bg-arya-charcoal-950 text-arya-charcoal-300 text-xs py-1.5 px-4 hidden md:block border-b border-arya-charcoal-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-arya-ivory">
              <span className="w-2 h-2 rounded-full bg-arya-ochre inline-block animate-pulse"></span>
              Kitgum • Northern Uganda
            </span>
            <span className="text-arya-charcoal-600">|</span>
            <span className="text-arya-charcoal-300">Acholi Sub-Region Community-Led Development</span>
          </div>
          <div className="flex items-center gap-5 text-arya-charcoal-300">
            <a href={`mailto:${organizationData.contact.generalEmail}`} className="hover:text-white transition-colors">
              {organizationData.contact.generalEmail}
            </a>
            <span className="text-arya-charcoal-600">•</span>
            <Link href="/get-involved" className="text-arya-ochre-300 hover:text-arya-ochre font-medium inline-flex items-center gap-1">
              <span>Join Our Mission</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-arya-charcoal-100/90",
          isScrolled ? "py-1.5 shadow-md" : "py-2.5 md:py-3"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Wordmark with Official Crest */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-13 sm:w-12 sm:h-14 md:w-13 md:h-15 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/images/arya-logo-transparent.png"
                alt="Acholi Renaissance Youth Association Official Crest Emblem"
                width={65}
                height={72}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-arya-charcoal-900 group-hover:text-arya-forest transition-colors leading-tight">
                ARYA
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-arya-charcoal-600 uppercase tracking-wider hidden sm:block">
                Acholi Renaissance Youth Association
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                const isOpen = activeDropdown === link.name;

                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1",
                        isActive
                          ? "text-arya-forest font-semibold bg-arya-forest-50"
                          : "text-arya-charcoal-700 hover:text-arya-forest hover:bg-arya-ivory"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                    </Link>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-arya-charcoal-100 p-2.5 grid grid-cols-1 gap-1 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                        {link.subLinks?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="p-2.5 rounded-lg hover:bg-arya-ivory transition-colors group/sub"
                          >
                            <div className="text-xs font-bold text-arya-charcoal-800 group-hover/sub:text-arya-forest">
                              {sub.name}
                            </div>
                            <div className="text-[11px] text-arya-charcoal-500 line-clamp-1">
                              {sub.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-arya-forest font-semibold bg-arya-forest-50"
                      : "text-arya-charcoal-700 hover:text-arya-forest hover:bg-arya-ivory"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 bg-arya-forest hover:bg-arya-forest-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <HeartHandshake className="w-4 h-4 text-arya-ochre-200" />
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/get-involved"
              className="bg-arya-forest text-white text-xs font-semibold px-3 py-2 rounded-md"
            >
              Partner
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-arya-charcoal-700 hover:text-arya-forest hover:bg-arya-ivory focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-arya-charcoal-200 shadow-2xl max-h-[85vh] overflow-y-auto px-4 py-6 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <div key={link.name} className="py-1">
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors",
                        isActive
                          ? "bg-arya-forest-50 text-arya-forest"
                          : "text-arya-charcoal-800 hover:bg-arya-ivory"
                      )}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-arya-forest-100 ml-3">
                        {link.subLinks?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block py-1.5 text-xs text-arya-charcoal-600 hover:text-arya-forest"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 mt-4 border-t border-arya-charcoal-100 space-y-3">
                <Link
                  href="/get-involved"
                  className="w-full flex items-center justify-center gap-2 bg-arya-forest text-white font-semibold py-3 px-4 rounded-lg text-sm"
                >
                  <HeartHandshake className="w-4 h-4 text-arya-ochre-200" />
                  Partner With Us
                </Link>
                <div className="text-center text-xs text-arya-charcoal-500">
                  Kitgum, Northern Uganda • {organizationData.contact.generalEmail}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
