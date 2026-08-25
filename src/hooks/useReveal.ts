"use client";

import { useEffect, useRef, useState } from "react";

export type RevealVariant = "up" | "fade" | "left" | "right" | "scale" | "stagger" | "brick";

interface UseRevealOptions {
  threshold?: number;
  variant?: RevealVariant;
  delay?: number;
  once?: boolean;
  rootMargin?: string;
}

export function useReveal(options: UseRevealOptions | number = {}) {
  const threshold = typeof options === "number" ? options : options.threshold ?? 0.2;
  const variant = typeof options === "number" ? "up" : options.variant ?? "up";
  const delay = typeof options === "number" ? 0 : options.delay ?? 0;
  const once = typeof options === "number" ? false : options.once ?? false;
  const rootMargin = typeof options === "number" ? "-10% 0px -10% 0px" : options.rootMargin ?? "-10% 0px -10% 0px";

  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            timer = setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          if (once) {
            observer.unobserve(entry.target);
          }
        } else {
          if (timer) clearTimeout(timer);
          if (!once) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
    };
  }, [threshold, delay, once]);

  const variantClass = `reveal-${variant}`;

  return {
    ref,
    revealClass: `reveal ${variantClass} ${isVisible ? "visible" : ""}`.trim(),
  };
}
