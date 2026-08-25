"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useReveal } from "@/hooks/useReveal";
import {
  HardHat,
  ShieldCheck,
  Star,
  Hammer,
  Wrench,
  Ruler,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export const TestimonialSection: React.FC = () => {
  const { ref, revealClass } = useReveal({ variant: "scale" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const total = testimonialsData.length;
  const current = testimonialsData[currentIndex];

  const changeTo = useCallback((targetIndex: number) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setIsFading(false);
    }, 240);
  }, [isFading]);

  const nextSlide = useCallback(() => {
    changeTo((currentIndex + 1) % total);
  }, [currentIndex, total, changeTo]);

  const prevSlide = useCallback(() => {
    changeTo((currentIndex - 1 + total) % total);
  }, [currentIndex, total, changeTo]);

  // Touch Swipe Gesture for Mobile
  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Continuous auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5600);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section ref={ref} className={`testimonial ${revealClass}`}>
      {/* High-Definition Masonry Brick Background */}
      <div className="testimonial-blueprint-bg" aria-hidden="true" />

      {/* 3D Opaque Floating BTP Badges in Empty Side Spaces */}
      <div className="btp-watermark-icon watermark-top-left" aria-hidden="true">
        <HardHat size={32} strokeWidth={1.6} />
      </div>

      <div className="btp-watermark-icon watermark-bottom-left" aria-hidden="true">
        <Hammer size={30} strokeWidth={1.6} />
      </div>

      <div className="btp-watermark-icon watermark-top-right" aria-hidden="true">
        <Ruler size={30} strokeWidth={1.6} />
      </div>

      <div className="btp-watermark-icon watermark-bottom-right" aria-hidden="true">
        <Wrench size={30} strokeWidth={1.6} />
      </div>

      <div className="testimonial-content">
        {/* Navigation Arrow Left (Desktop) */}
        <button
          type="button"
          className="slider-nav-btn nav-btn-left"
          onClick={prevSlide}
          aria-label="Témoignage précédent"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Navigation Arrow Right (Desktop) */}
        <button
          type="button"
          className="slider-nav-btn nav-btn-right"
          onClick={nextSlide}
          aria-label="Témoignage suivant"
        >
          <ChevronRight size={20} />
        </button>

        {/* Central Frosted Glass Architectural Card with Touch Swipe */}
        <div
          className="testimonial-glass-card"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`testimonial-card-slide ${isFading ? "is-fading-out" : "is-fading-in"}`}>
            {/* Top Badge & Rating Row */}
            <div className="testimonial-top-row">
              <div className="testimonial-btp-badge">
                <HardHat size={13} />
                <span>{current.badgeText}</span>
              </div>

              <div className="testimonial-rating">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={13} fill="var(--accent)" color="var(--accent)" />
                ))}
              </div>
            </div>

            {/* Quote with Floating Mark */}
            <div className="quote-mark">
              <Quote size={22} className="quote-icon" />
            </div>

            <blockquote>“{current.quote}”</blockquote>

            {/* Author and Trust Badge Footer */}
            <div className="testimonial-footer">
              <div className="testimonial-author-wrapper">
                <img
                  src={current.avatarUrl}
                  alt={current.authorName}
                  className="testimonial-avatar"
                />
                <div className="testimonial-author">
                  <strong>{current.authorName}</strong>
                  <span>{current.authorRole}</span>
                </div>
              </div>

              <div className="testimonial-trust-tag">
                <ShieldCheck size={13} className="trust-icon" />
                <span>{current.trustTag}</span>
              </div>
            </div>
          </div>

          {/* Pagination Dots & Counter */}
          <div className="testimonial-controls">
            <span className="testimonial-counter">
              0{currentIndex + 1} <small>/ 0{total}</small>
            </span>

            <div className="testimonial-dots">
              {testimonialsData.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`dot-btn ${index === currentIndex ? "active" : ""}`}
                  onClick={() => changeTo(index)}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
