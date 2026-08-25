"use client";

import React, { useEffect, useRef, useState } from "react";

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);

  const [cursorState, setCursorState] = useState<"default" | "hover" | "view" | "drag" | "hidden">("hidden");

  useEffect(() => {
    // Check if device has a fine pointer (mouse/trackpad), do not run on touchscreens
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        setCursorState("default");
      }

      // Zero-latency instant update for precision center dot (0ms delay)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, select, textarea, [role='button'], .team-filter-btn, .team-accordion-card");
      const projectCard = target.closest(".project-card, .project-mini");

      if (projectCard) {
        setCursorState("view");
      } else if (interactive) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    const handleMouseDown = () => {
      if (ringRef.current) {
        ringRef.current.classList.add("is-clicked");
      }
    };

    const handleMouseUp = () => {
      if (ringRef.current) {
        ringRef.current.classList.remove("is-clicked");
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      setCursorState("hidden");
    };

    const handleMouseEnter = () => {
      isVisible = true;
      setCursorState("default");
    };

    // Smooth 60/120fps hardware-accelerated Lerp loop for the architectural reticle ring
    const render = () => {
      // Lerp factor 0.25 gives responsive, snappy tracking with zero perceived lag
      ringX += (mouseX - ringX) * 0.25;
      ringY += (mouseY - ringY) * 0.25;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className={`btp-custom-cursor-root cursor--${cursorState}`} aria-hidden="true">
      {/* Precision Central Laser Dot (0ms zero latency) */}
      <div ref={dotRef} className="btp-cursor-dot" />

      {/* Surveyor Precision Crosshair & Reticle Ring */}
      <div ref={ringRef} className="btp-cursor-reticle">
        <span className="reticle-tick reticle-tick--top" />
        <span className="reticle-tick reticle-tick--bottom" />
        <span className="reticle-tick reticle-tick--left" />
        <span className="reticle-tick reticle-tick--right" />
        <span ref={labelRef} className="reticle-label">
          {cursorState === "view" ? "VOIR" : ""}
        </span>
      </div>
    </div>
  );
};
