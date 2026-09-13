"use client";

import { useEffect } from "react";
import { servicesData } from "@/data/services";

export const GlobalAssetPreloader: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Immediately fetch & decode all service modal images in the browser GPU/memory cache
    const preloadList = servicesData.map((s) => s.imageSrc);

    preloadList.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      if ("decode" in img) {
        img.decode().catch(() => {
          // Silent catch: image is still in network & browser cache
        });
      }
    });
  }, []);

  return null;
};
