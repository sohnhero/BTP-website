"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  FileText,
  Link as LinkIcon,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { ContactMode } from "@/components/sections/ContactSection";

interface ContactFormProps {
  mode: ContactMode;
}

export const ContactForm: React.FC<ContactFormProps> = ({ mode }) => {
  const [formMessage, setFormMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "";

    if (mode === "project") {
      setFormMessage(
        `Merci ${name} ! Votre demande de projet a été préparée. Notre équipe d'ingénierie vous recontactera sous 24 heures.`
      );
    } else {
      setFormMessage(
        `Merci ${name} ! Votre candidature a bien été soumise à notre département RH. Nous l'étudierons avec attention.`
      );
    }

    e.currentTarget.reset();
  };

  return (
    <div className="form-console-wrapper">
      <form key={mode} className="hybrid-form" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="input-group">
          <div className="input-icon">
            <User size={18} />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Votre nom complet *"
            required
            className="input-field"
          />
        </div>

        {/* Email */}
        <div className="input-group">
          <div className="input-icon">
            <Mail size={18} />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail *"
            required
            className="input-field"
          />
        </div>

        {/* Phone */}
        <div className="input-group">
          <div className="input-icon">
            <Phone size={18} />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone / WhatsApp *"
            required
            className="input-field"
          />
        </div>

        {/* Select Field */}
        <div className="input-group">
          <div className="input-icon">
            {mode === "project" ? <Building2 size={18} /> : <Briefcase size={18} />}
          </div>
          {mode === "project" ? (
            <select name="projectType" defaultValue="" required className="input-field select-field">
              <option value="" disabled>
                Type de projet *
              </option>
              <option value="Construction neuve">Construction neuve</option>
              <option value="Rénovation premium">Rénovation premium & transformation</option>
              <option value="Études & Ingénierie">Études techniques & ingénierie</option>
              <option value="Pilotage & Suivi">Pilotage & suivi de chantier</option>
              <option value="Autre projet">Autre projet BTP</option>
            </select>
          ) : (
            <select name="position" defaultValue="" required className="input-field select-field">
              <option value="" disabled>
                Domaine / Poste *
              </option>
              <option value="Architecte">Architecte / Designer</option>
              <option value="Ingénieur Structure / VRD">Ingénieur Structure / VRD</option>
              <option value="Conducteur de travaux">Conducteur de travaux</option>
              <option value="Chef de chantier">Chef de chantier / Métreur</option>
              <option value="Sous-traitant BTP">Partenaire / Sous-traitant BTP</option>
              <option value="Candidature spontanée">Candidature spontanée</option>
            </select>
          )}
        </div>

        {/* Career Mode: Link or Attachment Dropzone */}
        {mode === "career" && (
          <div className="input-group full-width">
            <div className="input-icon">
              <LinkIcon size={18} />
            </div>
            <input
              type="url"
              name="portfolio"
              placeholder="Lien CV / Portfolio / LinkedIn / Drive (ex: https://...)"
              className="input-field"
            />
          </div>
        )}

        {/* Message */}
        <div className="input-group full-width textarea-group">
          <div className="input-icon textarea-icon">
            <FileText size={18} />
          </div>
          <textarea
            name="message"
            rows={4}
            placeholder={
              mode === "project"
                ? "Décrivez votre projet (localisation, type d'ouvrage, surface estimée, délai souhaité...)"
                : "Présentez brièvement vos compétences, vos expériences marquantes et votre motivation..."
            }
            required
            className="input-field textarea-field"
          ></textarea>
        </div>

        {/* Submit Bar */}
        <div className="form-submit-row">
          <Button variant="accent" type="submit" className="submit-btn">
            <span>{mode === "project" ? "Transmettre mon projet" : "Soumettre ma candidature"}</span>
            <ArrowUpRight size={18} />
          </Button>

          <span className="privacy-hint">🔒 Données confidentielles & traitées en toute sécurité</span>
        </div>
      </form>

      {formMessage && (
        <div className="form-success-banner" aria-live="polite">
          <CheckCircle2 size={22} className="success-icon" />
          <div>
            <strong>Demande transmise avec succès !</strong>
            <p>{formMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};
