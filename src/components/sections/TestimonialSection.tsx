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

  const total = testimonialsData.length;
  const current = testimonialsData[currentIndex];

  const changeTo = useCallback((targetIndex: number) => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setIsFading(false);
    }, 280);
  }, [isFading]);

  const nextSlide = useCallback(() => {
    changeTo((currentIndex + 1) % total);
  }, [currentIndex, total, changeTo]);

  const prevSlide = useCallback(() => {
    changeTo((currentIndex - 1 + total) % total);
  }, [currentIndex, total, changeTo]);

  // Continuous auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4800);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section ref={ref} className={`testimonial section-pad ${revealClass}`}>
      <div className="testimonial-blueprint-bg"></div>

      {/* 3D Opaque Floating BTP Badges in Empty Side Spaces */}
      <div className="btp-watermark-icon watermark-top-left" aria-hidden="true">
        <HardHat size={72} strokeWidth={1.6} />
      </div>

      <div className="btp-watermark-icon watermark-bottom-left" aria-hidden="true">
        <Hammer size={68} strokeWidth={1.6} />
      </div>

      <div className="btp-watermark-icon watermark-top-right" aria-hidden="true">
        <Ruler size={70} strokeWidth={1.6} />
      </div>

      <div className="btp-watermark-icon watermark-bottom-right" aria-hidden="true">
        <Wrench size={68} strokeWidth={1.6} />
      </div>

      <div className="testimonial-content">
        {/* Navigation Arrow Left */}
        <button
          className="slider-nav-btn nav-btn-left"
          onClick={prevSlide}
          aria-label="Témoignage précédent"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Navigation Arrow Right */}
        <button
          className="slider-nav-btn nav-btn-right"
          onClick={nextSlide}
          aria-label="Témoignage suivant"
        >
          <ChevronRight size={22} />
        </button>

        <div className={`testimonial-card-slide ${isFading ? "is-fading-out" : "is-fading-in"}`}>
          <div className="testimonial-btp-badge">
            <HardHat size={16} />
            <span>{current.badgeText}</span>
          </div>

          <div className="quote-mark">
            <Quote size={38} className="quote-icon" />
          </div>

          <blockquote>“{current.quote}”</blockquote>

          <div className="testimonial-rating">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={16} fill="var(--accent)" color="var(--accent)" />
            ))}
          </div>

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
              <ShieldCheck size={16} className="trust-icon" />
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
                className={`dot-btn ${index === currentIndex ? "active" : ""}`}
                onClick={() => changeTo(index)}
                aria-label={`Aller au témoignage ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
