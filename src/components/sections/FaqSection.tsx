"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Plus,
  Minus,
  MessageSquare,
  PhoneCall,
  ArrowRight,
  HelpCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { faqData, faqCategories } from "@/data/faq";
import { useReveal } from "@/hooks/useReveal";

export const FaqSection: React.FC = () => {
  const { ref, revealClass } = useReveal({ variant: "up" });
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  // Single active accordion: when one opens, the others collapse automatically
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="faq-section section-pad" id="faq-content">
      <div className="faq-container">
        {/* Compact & Elegant Control Toolbar */}
        <div ref={ref} className={`faq-controls-wrap ${revealClass}`}>
          {/* Real-Time Interactive Search Bar */}
          <div className="faq-search-box">
            <Search size={18} className="faq-search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une question (ex: devis, garanties décennales, béton, délais, engins)..."
              className="faq-search-input"
              aria-label="Rechercher dans la foire aux questions"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="faq-search-clear"
                aria-label="Effacer la recherche"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="faq-categories-row" role="tablist">
            {faqCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`faq-cat-pill ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Two-Column Layout (Accordion on Left, Help Cards on Right) */}
        <div className="faq-grid-layout">
          {/* Left Column: Accordion Items (Single Open Accordion) */}
          <div className="faq-accordion-col">
            {filteredFaqs.length > 0 ? (
              <div className="faq-accordion-list">
                {filteredFaqs.map((faq) => {
                  const isOpen = openId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className={`faq-card-item ${isOpen ? "is-expanded" : ""}`}
                    >
                      <button
                        type="button"
                        className="faq-question-trigger"
                        onClick={() => toggleItem(faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                      >
                        <span className="faq-question-text">{faq.question}</span>
                        <div className="faq-toggle-icon" aria-hidden="true">
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                      </button>

                      {isOpen && (
                        <div
                          id={`faq-answer-${faq.id}`}
                          className="faq-answer-wrapper"
                        >
                          <p className="faq-answer-text">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="faq-empty-state">
                <HelpCircle size={44} className="empty-icon" />
                <h3>Aucun résultat trouvé</h3>
                <p>
                  Aucune question ne correspond à &quot;{searchQuery}&quot;. N&apos;hésitez pas à contacter directement nos ingénieurs.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Contact Sidebar Cards */}
          <aside className="faq-sidebar-col">
            <div className="faq-sidebar-sticky">
              {/* Card 1: Dark Contact Card with Solid Slate Brand Colors */}
              <div className="faq-cta-card-dark">
                <div className="faq-cta-icon-badge">
                  <MessageSquare size={22} className="chat-icon-front" />
                  <div className="chat-bubble-dot" />
                </div>

                <h3 className="faq-cta-title">
                  Vous avez une question spécifique ?
                </h3>

                <p className="faq-cta-desc">
                  Nos ingénieurs et notre bureau d&apos;études sont à votre écoute pour analyser votre projet et vous répondre sous 24h.
                </p>

                <Link href="/contact" className="faq-cta-submit-btn">
                  <span>Nous contacter</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Card 2: Light Phone Reach Card */}
              <div className="faq-reach-card-light">
                <div className="faq-reach-left-icon">
                  <PhoneCall size={20} />
                </div>
                <div className="faq-reach-info">
                  <span className="faq-reach-label">Bureau d&apos;Études & Direction</span>
                  <strong className="faq-reach-status">Disponible 6j/7</strong>
                  <a href="tel:+221338214974" className="faq-reach-phone">
                    +221 33 821 49 74
                  </a>
                </div>
              </div>

              {/* Card 3: Commitments Micro-Banner */}
              <div className="faq-commitments-card">
                <div className="faq-commit-row">
                  <ShieldCheck size={16} className="commit-check" />
                  <span>Devis & métrés sous 24/48h ouvrées</span>
                </div>
                <div className="faq-commit-row">
                  <CheckCircle2 size={16} className="commit-check" />
                  <span>Assurance décennale & RC chantier</span>
                </div>
                <div className="faq-commit-row">
                  <Clock size={16} className="commit-check" />
                  <span>Intervention sur l&apos;ensemble du Sénégal</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
