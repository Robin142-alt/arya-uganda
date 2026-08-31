"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Home,
  Info,
  Layers,
  Sparkles,
  Award,
  Newspaper,
  BookOpen,
  Send,
} from "lucide-react";
import { organizationData } from "@/data/organization";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openMobileAccordions, setOpenMobileAccordions] = useState<Record<string, boolean>>({
    "About Us": false,
    "Our Work": true, // Default open for easy discovery of programmes
  });
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

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (sidebarOpen && e.key === "Escape") {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sidebarOpen]);

  const toggleMobileAccordion = (name: string) => {
    setOpenMobileAccordions((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    {
      name: "About Us",
      href: "/about",
      icon: Info,
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
      icon: Layers,
      hasDropdown: true,
      subLinks: [
        { name: "All 06 Strategic Pillars", href: "/programmes", desc: "Integrated community pillars" },
        { name: "Health, HIV & SRHR", href: "/programmes#health-hiv-srhr", desc: "Youth-friendly health education" },
        { name: "Girls & Young Women (AGYW)", href: "/programmes#girls-young-women", desc: "HER Voice & leadership advocacy" },
        { name: "Education & Youth", href: "/programmes#education-youth", desc: "Life skills & retention support" },
        { name: "Livelihoods & VSLA", href: "/programmes#livelihoods-economic", desc: "Agribusiness & youth savings" },
        { name: "Protection & Rights (400 Clan Leaders)", href: "/programmes#gender-rights-protection", desc: "GBV prevention & child welfare" },
        { name: "Community Resilience & Civic Action", href: "/programmes#community-resilience-advocacy", desc: "ENR-CSO & civic action" },
        { name: "Projects & Flagships", href: "/projects", desc: "Active & completed project portfolio" },
      ],
    },
    { name: "Impact", href: "/impact", icon: Sparkles },
    { name: "News", href: "/news", icon: Newspaper },
    { name: "Partners", href: "/partners", icon: Award },
    { name: "Resources", href: "/resources", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: Send },
  ];

  return (
    <>
      {/* Top micro-bar for credibility & location (Desktop) */}
      <div className="bg-arya-charcoal-950 text-arya-charcoal-300 text-xs py-1.5 px-4 hidden md:block border-b border-arya-charcoal-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-arya-ivory">
              <span className="w-2 h-2 rounded-full bg-arya-ochre inline-block animate-pulse"></span>
              Kitgum • Northern Uganda
            </span>
            <span className="text-arya-charcoal-600">|</span>
            <span className="text-arya-charcoal-300">Acholi Sub-Region • 08 Districts Footprint</span>
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
          {/* Mobile Left: Menu Hamburger Trigger + Logo Brand */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Mobile Hamburger Button (Opens Left Sidebar) */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 -ml-1.5 rounded-xl text-arya-charcoal-800 hover:text-arya-forest hover:bg-arya-forest-50 focus:outline-none transition-colors border border-arya-charcoal-200/60"
              aria-label="Open mobile navigation sidebar"
              aria-expanded={sidebarOpen}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo / Brand Wordmark with Official Crest */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="relative w-10 h-12 sm:w-12 sm:h-14 md:w-13 md:h-15 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
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
                <span className="font-heading font-extrabold text-base sm:text-xl tracking-tight text-arya-charcoal-900 group-hover:text-arya-forest transition-colors leading-tight">
                  ARYA
                </span>
                <span className="text-[9px] sm:text-[11px] font-semibold text-arya-charcoal-600 uppercase tracking-wider hidden xs:block">
                  Acholi Renaissance Youth Association
                </span>
              </div>
            </Link>
          </div>

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

                    {/* Desktop Dropdown Menu */}
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

          {/* Right Action Button */}
          <div className="flex items-center gap-2">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-1.5 bg-arya-forest hover:bg-arya-forest-600 text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-sm hover:shadow transition-all"
            >
              <HeartHandshake className="w-4 h-4 text-arya-ochre-200 shrink-0" />
              <span>Partner With Us</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile-Friendly Left Sliding Navigation Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Dimmed Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Left Sliding Drawer Panel */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="relative w-[85vw] max-w-sm sm:max-w-md h-full bg-gradient-to-b from-arya-charcoal-950 via-arya-charcoal-900 to-arya-forest-950 text-white shadow-2xl z-50 flex flex-col justify-between overflow-hidden border-r border-white/15"
              aria-label="Mobile Navigation Sidebar"
            >
              {/* Sidebar Header with Brand & Close Button */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-3 bg-white/5 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-11 shrink-0">
                    <Image
                      src="/images/arya-logo-transparent.png"
                      alt="ARYA Logo"
                      width={45}
                      height={55}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-heading font-extrabold text-lg text-white block leading-tight">
                      ARYA UGANDA
                    </span>
                    <span className="text-[10px] text-arya-ochre-300 font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Kitgum • Acholi Sub-Region
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/15 transition-colors focus:outline-none"
                  aria-label="Close navigation sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Navigation Area with Accordions */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1.5 overscroll-contain">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  const IconComp = link.icon;

                  if (link.hasDropdown) {
                    const isAccordionOpen = !!openMobileAccordions[link.name];

                    return (
                      <div
                        key={link.name}
                        className="rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                      >
                        {/* Parent Item Bar */}
                        <div className="flex items-center justify-between p-1">
                          <Link
                            href={link.href}
                            onClick={() => setSidebarOpen(false)}
                            className={cn(
                              "flex-1 px-3 py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center gap-2.5",
                              isActive
                                ? "text-arya-ochre bg-white/10"
                                : "text-white hover:text-arya-ochre"
                            )}
                          >
                            <IconComp className="w-4 h-4 text-arya-ochre" />
                            <span>{link.name}</span>
                          </Link>

                          {/* Accordion Toggle Chevron */}
                          <button
                            onClick={() => toggleMobileAccordion(link.name)}
                            className="p-2.5 text-white/70 hover:text-white rounded-lg transition-colors focus:outline-none"
                            aria-expanded={isAccordionOpen}
                            aria-label={`Toggle ${link.name} sub-menu`}
                          >
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                isAccordionOpen && "rotate-180 text-arya-ochre"
                              )}
                            />
                          </button>
                        </div>

                        {/* Accordion Expanded Sub-Links */}
                        <AnimatePresence>
                          {isAccordionOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="px-3 pb-3 pt-1 space-y-1 border-t border-white/10 bg-black/20"
                            >
                              {link.subLinks?.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setSidebarOpen(false)}
                                  className="block px-3 py-2 rounded-lg text-xs font-medium text-arya-charcoal-200 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                  <div className="font-semibold text-white/95">
                                    {sub.name}
                                  </div>
                                  <div className="text-[10px] text-arya-charcoal-400 line-clamp-1">
                                    {sub.desc}
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setSidebarOpen(false)}
                      className={cn(
                        "flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-colors border",
                        isActive
                          ? "bg-arya-ochre text-arya-charcoal-950 font-bold border-arya-ochre shadow-md"
                          : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-arya-ochre"
                      )}
                    >
                      <IconComp
                        className={cn(
                          "w-4 h-4",
                          isActive ? "text-arya-charcoal-950" : "text-arya-ochre"
                        )}
                      />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Sidebar Footer Info & CTAs */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-black/40 space-y-3">
                <Link
                  href="/get-involved"
                  onClick={() => setSidebarOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-arya-ochre to-amber-400 text-arya-charcoal-950 font-bold py-3 px-4 rounded-xl text-sm shadow-lg shadow-amber-950/40 hover:opacity-95 transition-opacity"
                >
                  <HeartHandshake className="w-4 h-4 text-arya-charcoal-950" />
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </Link>

                <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                  <a
                    href="tel:+256782874812"
                    className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-arya-ochre" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={`mailto:${organizationData.contact.generalEmail}`}
                    className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-arya-ochre" />
                    <span>Email Us</span>
                  </a>
                </div>

                <p className="text-[10px] text-center text-arya-charcoal-400 pt-1">
                  © 2002–Present ARYA • Kitgum Municipality, Uganda
                </p>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

