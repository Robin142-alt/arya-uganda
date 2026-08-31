"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  slideshowItemsData,
  slideshowCategories,
  SlideshowItem,
} from "@/data/slideshow";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  MapPin,
  Calendar,
  Sparkles,
  Heart,
  BookOpen,
  Users,
  ShieldCheck,
  Flame,
  ArrowRight,
  Info,
  X,
  Layers,
  Quote,
  CheckCircle2,
} from "lucide-react";

export default function IntelligentSlideshow() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const SLIDE_DURATION = 6000; // 6 seconds per slide
  const UPDATE_INTERVAL = 50; // progress step in ms

  // Filter items based on active category
  const filteredSlides =
    activeCategory === "all"
      ? slideshowItemsData
      : slideshowItemsData.filter((item) => item.category === activeCategory);

  // Safeguard index if category filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setProgress(0);
  }, [activeCategory]);

  const activeSlide: SlideshowItem =
    filteredSlides[currentIndex] || filteredSlides[0] || slideshowItemsData[0];

  // Next & Prev handlers
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredSlides.length);
    setProgress(0);
  }, [filteredSlides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length);
    setProgress(0);
  }, [filteredSlides.length]);

  const handleSelectSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Timer loop for autoplay & progress
  useEffect(() => {
    if (!isPlaying || isHovered || showDrawer) {
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + (UPDATE_INTERVAL / SLIDE_DURATION) * 100;
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, showDrawer, handleNext]);

  // Touch Swipe handlers for mobile/tablet
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showDrawer && e.key === "Escape") {
        setShowDrawer(false);
        return;
      }
      if (isFullscreen && e.key === "Escape") {
        setIsFullscreen(false);
        return;
      }

      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, showDrawer, isFullscreen]);

  // Helper icon selector based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "solidarity":
        return <Flame className="w-3.5 h-3.5" />;
      case "health":
        return <Heart className="w-3.5 h-3.5" />;
      case "youth":
        return <Sparkles className="w-3.5 h-3.5" />;
      case "education":
        return <BookOpen className="w-3.5 h-3.5" />;
      case "peace":
        return <ShieldCheck className="w-3.5 h-3.5" />;
      default:
        return <Users className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-arya-charcoal-950 via-arya-charcoal-900 to-arya-forest-950 text-white transition-all duration-500 ${
        isFullscreen
          ? "fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-6 lg:p-8"
          : "py-16 sm:py-20 lg:py-24 border-y border-arya-charcoal-800"
      }`}
      id="intelligent-story-slideshow"
      aria-roledescription="carousel"
      aria-label="ARYA Grassroots Community Visual Journey"
    >
      {/* Background Ambient Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-arya-forest-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-arya-ochre/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Heading & Category Filter Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-arya-ochre/20 text-arya-ochre-300 border border-arya-ochre/30 text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-arya-ochre" />
              <span>Intelligent Field Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-white">
              Moments of Solidarity,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-arya-ochre-300 via-amber-200 to-arya-ochre">
                Dignity & Hope
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-arya-charcoal-300 mt-1 max-w-2xl leading-relaxed">
              Explore documented grassroots moments from across Northern Uganda. Auto-advancing with verified field telemetry, community quotes, and district impact notes.
            </p>
          </div>

          {/* Intelligent Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md shrink-0">
            {slideshowCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? "bg-arya-ochre text-arya-charcoal-950 font-bold shadow-md shadow-amber-900/30"
                      : "text-arya-charcoal-300 hover:text-white hover:bg-white/10"
                  }`}
                  aria-pressed={isActive}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Slideshow Viewport */}
        <div
          className="relative rounded-3xl overflow-hidden bg-arya-charcoal-900 border border-white/15 shadow-2xl group min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex flex-col justify-between"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Animated Background Slide Image with Ken Burns Crossfade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                quality={95}
                priority
                sizes="(max-width: 1280px) 100vw, 1920px"
                className="object-cover object-center transform-gpu"
              />
            </motion.div>
          </AnimatePresence>


          {/* Cinematic Scrims (Multi-layer Gradients for Legibility) */}
          <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950 via-arya-charcoal-950/60 to-black/30 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-arya-charcoal-950/80 via-transparent to-arya-charcoal-950/40 z-10 pointer-events-none" />

          {/* Top HUD: Status Badges, Progress & Interaction State */}
          <div className="relative z-20 p-4 sm:p-6 lg:p-8 flex items-center justify-between gap-4">
            {/* Left: Category & District Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-arya-forest/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-sm">
                {getCategoryIcon(activeSlide.category)}
                <span>{activeSlide.categoryLabel}</span>
              </span>

              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/40 text-arya-ochre-200 text-xs font-medium backdrop-blur-md border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-arya-ochre" />
                <span>{activeSlide.location}</span>
              </span>

              <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/40 text-arya-charcoal-300 text-xs font-medium backdrop-blur-md border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-arya-ochre-300" />
                <span>{activeSlide.year}</span>
              </span>
            </div>

            {/* Right: Autoplay Controls, Fullscreen & Counter HUD */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Hover Pause State Indicator */}
              {isHovered && (
                <span className="hidden sm:inline-flex text-[11px] text-arya-ochre font-medium bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-arya-ochre/30 animate-pulse">
                  Paused on hover
                </span>
              )}

              {/* Play / Pause Toggle Button */}
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className="p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/15 transition-colors focus-visible:outline-white"
                title={isPlaying ? "Pause Slideshow (Space)" : "Play Slideshow (Space)"}
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>

              {/* Fullscreen Theatrical Mode Toggle */}
              <button
                onClick={() => setIsFullscreen((prev) => !prev)}
                className="p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/15 transition-colors focus-visible:outline-white"
                title={isFullscreen ? "Exit Fullscreen" : "View Fullscreen"}
                aria-label="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {/* Slide Counter HUD */}
              <div className="px-3 py-1 rounded-xl bg-black/60 text-white text-xs font-bold font-heading backdrop-blur-md border border-white/15">
                <span className="text-arya-ochre">{String(currentIndex + 1).padStart(2, "0")}</span>
                <span className="text-white/40"> / </span>
                <span>{String(filteredSlides.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>

          {/* Navigation Chevron Buttons (Left / Right Floating) */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-arya-forest text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 shadow-lg focus-visible:outline-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-arya-forest text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 shadow-lg focus-visible:outline-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Bottom HUD: Context Narrative, Metrics, Quote & Action CTAs */}
          <div className="relative z-20 p-5 sm:p-8 lg:p-10 max-w-4xl space-y-4">
            {/* Impact Metric Chip */}
            <motion.div
              key={`metric-${activeSlide.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-xl bg-arya-ochre text-arya-charcoal-950 font-bold text-xs shadow-lg"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-arya-charcoal-950" />
              <span>
                <strong className="font-extrabold">{activeSlide.metricNumber}</strong> {activeSlide.metricLabel}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h3
              key={`title-${activeSlide.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading text-white leading-snug drop-shadow-md text-balance"
            >
              {activeSlide.headline}
            </motion.h3>

            {/* Supporting Story Summary */}
            <motion.p
              key={`story-${activeSlide.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-arya-charcoal-200 leading-relaxed font-normal line-clamp-2 sm:line-clamp-3 max-w-3xl"
            >
              {activeSlide.story}
            </motion.p>

            {/* Community Quote Snippet */}
            <motion.div
              key={`quote-${activeSlide.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="hidden sm:flex items-start gap-2.5 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 text-xs text-arya-charcoal-100 max-w-2xl"
            >
              <Quote className="w-4 h-4 text-arya-ochre-300 shrink-0 mt-0.5" />
              <div>
                <p className="italic font-medium text-white">&ldquo;{activeSlide.quote}&rdquo;</p>
                <p className="text-[11px] text-arya-ochre-300 font-semibold mt-0.5">
                  — {activeSlide.quoteAuthor}, <span className="text-white/70">{activeSlide.quoteRole}</span>
                </p>
              </div>
            </motion.div>

            {/* Action Bar (Programme Link & Field Notes Drawer Button) */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href={activeSlide.actionUrl}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-arya-forest hover:bg-arya-forest-600 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-arya-forest/40 border border-white/20 group"
              >
                <span>{activeSlide.actionLabel}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => setShowDrawer(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm backdrop-blur-md border border-white/20 transition-all duration-200"
                aria-label="Expand Field Notes & Archival Context"
              >
                <Info className="w-4 h-4 text-arya-ochre-300" />
                <span>Field Notes & Context</span>
              </button>
            </div>
          </div>

          {/* Autoplay Linear Progress Bar */}
          <div className="relative z-20 w-full bg-white/10 h-1.5 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-arya-forest-400 via-arya-ochre to-amber-300"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>

        {/* Interactive Filmstrip Thumbnail Scrubber Bar */}
        <div className="mt-6 sm:mt-8">
          <div className="flex items-center justify-between mb-3 text-xs text-arya-charcoal-400">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-arya-ochre" />
              Interactive Story Strip ({filteredSlides.length} Archived Moments)
            </span>
            <span className="hidden sm:inline text-arya-charcoal-400">
              Click any photo to jump • Swipe or use Arrow keys
            </span>
          </div>

          {/* Horizontal Scrubber Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
            {filteredSlides.map((slide, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleSelectSlide(idx)}
                  className={`group relative rounded-xl overflow-hidden text-left transition-all duration-300 aspect-[4/3] focus-visible:outline-white ${
                    isCurrent
                      ? "ring-2 ring-arya-ochre scale-[1.03] shadow-lg shadow-amber-900/40"
                      : "opacity-60 hover:opacity-100 hover:scale-[1.01] border border-white/10"
                  }`}
                  aria-label={`Jump to slide ${idx + 1}: ${slide.title}`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12vw"
                    className="object-cover object-top"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity ${
                      isCurrent
                        ? "bg-gradient-to-t from-arya-charcoal-950/90 via-transparent to-transparent"
                        : "bg-black/50 group-hover:bg-black/20"
                    }`}
                  />
                  {/* Micro Index Pill */}
                  <div className="absolute top-1.5 left-1.5 z-10">
                    <span
                      className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md ${
                        isCurrent ? "bg-arya-ochre text-arya-charcoal-950" : "bg-black/70 text-white"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Micro Title on Bottom */}
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 z-10">
                    <p className="text-[10px] font-bold text-white line-clamp-1 leading-tight drop-shadow-sm">
                      {slide.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Expandable Field Notes & Context Modal / Drawer */}
      <AnimatePresence>
        {showDrawer && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-end p-0 sm:p-4 lg:p-6"
            onClick={() => setShowDrawer(false)}
          >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-xl h-full sm:h-auto sm:max-h-[90vh] bg-arya-charcoal-950 sm:rounded-3xl border-l sm:border border-white/20 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDrawer(false)}
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Close field notes"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Header Tag */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-arya-forest text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    {getCategoryIcon(activeSlide.category)}
                    <span>{activeSlide.categoryLabel}</span>
                  </span>
                  <span className="text-xs text-arya-ochre-300 font-semibold">{activeSlide.district}</span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug">
                    {activeSlide.headline}
                  </h3>
                  <p className="text-xs text-arya-charcoal-300 mt-1">
                    Archived record from ARYA field programmes in Northern Uganda.
                  </p>
                </div>

                {/* Verified Metric Highlight Card */}
                <div className="p-4 rounded-2xl bg-arya-forest-900/60 border border-arya-forest-400/30 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-arya-forest text-arya-ochre flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-extrabold text-white font-heading">
                      {activeSlide.metricNumber}
                    </p>
                    <p className="text-xs text-arya-forest-100">{activeSlide.metricLabel}</p>
                  </div>
                </div>

                {/* Key Field Notes */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-arya-ochre font-heading">
                    Documented Field Observations & Impact
                  </h4>
                  <div className="space-y-2">
                    {activeSlide.fieldNotes.map((note, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-arya-charcoal-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-arya-ochre shrink-0 mt-2"></span>
                        <span className="leading-relaxed">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote in Drawer */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <Quote className="w-4 h-4 text-arya-ochre" />
                  <p className="text-xs sm:text-sm text-white italic leading-relaxed font-medium">
                    &ldquo;{activeSlide.quote}&rdquo;
                  </p>
                  <p className="text-[11px] text-arya-ochre-300 font-semibold">
                    — {activeSlide.quoteAuthor}, {activeSlide.quoteRole}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeSlide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-arya-charcoal-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between gap-3">
                <Link
                  href={activeSlide.actionUrl}
                  onClick={() => setShowDrawer(false)}
                  className="w-full text-center py-3 rounded-xl bg-arya-ochre hover:bg-arya-ochre-600 text-arya-charcoal-950 font-bold text-xs sm:text-sm transition-colors shadow-md"
                >
                  {activeSlide.actionLabel}
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
