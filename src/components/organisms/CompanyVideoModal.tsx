"use client";

import React, { useRef, useEffect } from "react";
import { X } from "lucide-react";

interface CompanyVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyVideoModal: React.FC<CompanyVideoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle ESC key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Auto-play when opened, pause when closed
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser blocks audio autoplay, fallback to muted autoplay
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => { });
          }
        });
      }
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="company-video-modal-backdrop" onClick={onClose}>
      <div
        className="company-video-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Vidéo de présentation FIDELE SARL"
      >
        {/* Floating Close Button */}
        <button
          type="button"
          className="video-modal-floating-close"
          onClick={onClose}
          aria-label="Fermer la vidéo"
        >
          <X size={22} />
        </button>

        {/* Pure & Sleek 16:9 Video Player */}
        <div className="video-player-container">
          <video
            ref={videoRef}
            src="/images/fidele-new.mp4"
            controls
            autoPlay
            playsInline
            className="video-pure-element"
          />
        </div>
      </div>
    </div>
  );
};
