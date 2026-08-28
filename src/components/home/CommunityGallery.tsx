"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryItemsData, GalleryItem } from "@/data/gallery";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Sparkles,
  Camera,
} from "lucide-react";

export default function CommunityGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "All Authentic Moments" },
    { id: "solidarity", label: "Community Solidarity" },
    { id: "health", label: "Health & Care" },
    { id: "youth", label: "Youth & Education" },
    { id: "leadership", label: "Leadership & Dialogue" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItemsData
      : galleryItemsData.filter((item) => item.category === activeCategory);

  const currentIndex = selectedImage
    ? filteredItems.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    } else if (currentIndex === filteredItems.length - 1) {
      setSelectedImage(filteredItems[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    } else if (currentIndex === 0) {
      setSelectedImage(filteredItems[filteredItems.length - 1]);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <section className="py-20 md:py-28 bg-arya-ivory border-b border-arya-charcoal-100" id="community-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Authentic Visual Identity"
            badgeVariant="forest"
            title="Voices, Solidarity & Action in Northern Uganda"
            subtitle="Explore real ARYA photographs documenting community dialogues, youth initiatives, health campaigns, and cultural resilience."
            className="mb-0"
          />

          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-arya-charcoal-600 bg-white px-4 py-2 rounded-xl border border-arya-charcoal-100 shrink-0">
            <Camera className="w-4 h-4 text-arya-forest" />
            <span>Documented Field Archives</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-arya-forest text-white shadow-sm shadow-arya-forest/30"
                    : "bg-white text-arya-charcoal-700 hover:bg-arya-forest-50 hover:text-arya-forest border border-arya-charcoal-100"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Mixed Dimension Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item, idx) => {
            const isWide = item.highlight && (idx === 0 || idx === 1);

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative rounded-2xl overflow-hidden bg-arya-charcoal-900 border border-arya-charcoal-200/80 hover:border-arya-forest-400 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end ${
                  isWide ? "sm:col-span-2 sm:row-span-1 min-h-[300px] sm:min-h-[360px]" : "min-h-[280px]"
                }`}
              >
                {/* Photo */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes={isWide ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-arya-charcoal-950/90 via-arya-charcoal-950/30 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/95 bg-arya-forest/90 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10 shadow-sm">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Zoom Icon Button on Hover */}
                <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-5 space-y-1.5 text-white">
                  <div className="flex items-center gap-3 text-[11px] text-arya-charcoal-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-arya-ochre" />
                      {item.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-arya-ochre" />
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold font-heading text-white leading-snug group-hover:text-arya-ochre-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-arya-charcoal-200 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-arya-charcoal-950 rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev/Next Navigation Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors md:right-[320px] lg:right-[360px]"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* High-res Image Area */}
              <div className="relative flex-1 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] bg-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Details Sidebar */}
              <div className="w-full md:w-80 lg:w-96 p-6 sm:p-7 bg-arya-charcoal-900 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-arya-forest text-white text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{selectedImage.categoryLabel}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white leading-snug">
                    {selectedImage.title}
                  </h3>

                  <div className="space-y-2 py-3 border-y border-white/10 text-xs text-arya-charcoal-300">
                    <div className="flex items-center justify-between">
                      <span className="text-arya-charcoal-400">Location:</span>
                      <span className="font-semibold text-white">{selectedImage.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-arya-charcoal-400">Archive Record:</span>
                      <span className="font-semibold text-arya-ochre-300">{selectedImage.year}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-arya-charcoal-200 leading-relaxed">
                    {selectedImage.caption}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-arya-charcoal-400">
                  <span>Photo {currentIndex + 1} of {filteredItems.length}</span>
                  <span className="text-arya-ochre-300 font-medium">Use ← → keys</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
