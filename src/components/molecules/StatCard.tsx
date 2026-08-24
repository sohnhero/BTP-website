"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Counter } from "@/components/atoms/Counter";
import { StatItem } from "@/data/stats";
import { useReveal } from "@/hooks/useReveal";

export const StatCard: React.FC<StatItem> = ({
  target,
  suffix,
  description,
  isAccent,
  actionText,
  actionHref,
}) => {
  const { ref, revealClass } = useReveal();

  return (
    <article
      ref={ref}
      className={`stat-card ${isAccent ? "stat-card-accent" : ""} ${revealClass}`}
    >
      <strong>
        <Counter target={target} />
        {suffix}
      </strong>
      <p>{description}</p>
      {isAccent && actionText && actionHref ? (
        <Link href={actionHref}>
          {actionText} <ArrowRight size={16} />
        </Link>
      ) : (
        <ArrowUpRight size={20} />
      )}
    </article>
  );
};
