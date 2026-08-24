"use client";

import React, { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface CounterProps {
  target: number;
  duration?: number;
}

export const Counter: React.FC<CounterProps> = ({ target, duration = 1300 }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.7 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(target * eased));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isIntersecting, target, duration]);

  return <span ref={ref}>{count}</span>;
};
