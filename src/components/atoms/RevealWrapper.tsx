"use client";

import React from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export const RevealWrapper: React.FC<RevealWrapperProps> = ({
  children,
  className = "",
  threshold = 0.14,
}) => {
  const { ref, revealClass } = useReveal(threshold);

  return (
    <div ref={ref} className={`${revealClass} ${className}`.trim()}>
      {children}
    </div>
  );
};
